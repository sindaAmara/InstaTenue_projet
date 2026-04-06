import { useState } from 'react'
import { useRouter } from 'expo-router'
import {
  View, Text, TouchableOpacity, StyleSheet,
  ScrollView, Image
} from 'react-native'
import { outfits } from '../data/fakeData'

const ROSE  = '#c87090'
const DARK  = '#622b4a'
const CREAM = '#fdf0f5'
const MID   = '#a06080'

const SEASONS = ['Printemps', 'Été', 'Automne', 'Hiver']
const STYLES  = ['Chic', 'Sport']

export default function HomePage() {
  const router = useRouter()
  const [activeSeason, setActiveSeason] = useState<string | null>(null)
  const [activeStyle,  setActiveStyle]  = useState<string | null>(null)

  const filtered = outfits
    .filter(s => !activeSeason || s.season === activeSeason)
    .map(s => ({
      ...s,
      themes: s.themes.filter(t => !activeStyle || t.name === activeStyle),
    }))
    .filter(s => s.themes.length > 0)

  const hasFilter = activeSeason || activeStyle

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => router.replace('/')}>
            <Text style={styles.backButton}>← Retour</Text>
          </TouchableOpacity>
          
          <View style={{ width: 52 }} />
        </View>

        
      </View>

      {/* FILTERS */}
      <View style={styles.filtersSection}>
        <Text style={styles.filterLabel}>SAISON</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipRow}>
          <TouchableOpacity
            style={[styles.chip, !activeSeason && styles.chipActive]}
            onPress={() => setActiveSeason(null)}
          >
            <Text style={[styles.chipText, !activeSeason && styles.chipTextActive]}>Toutes</Text>
          </TouchableOpacity>
          {SEASONS.map(s => (
            <TouchableOpacity
              key={s}
              style={[styles.chip, activeSeason === s && styles.chipActive]}
              onPress={() => setActiveSeason(activeSeason === s ? null : s)}
            >
              <Text style={[styles.chipText, activeSeason === s && styles.chipTextActive]}>{s}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.filterDivider} />

        <Text style={styles.filterLabel}>STYLE</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipRow}>
          <TouchableOpacity
            style={[styles.chip, !activeStyle && styles.chipActive]}
            onPress={() => setActiveStyle(null)}
          >
            <Text style={[styles.chipText, !activeStyle && styles.chipTextActive]}>Tous</Text>
          </TouchableOpacity>
          {STYLES.map(s => (
            <TouchableOpacity
              key={s}
              style={[styles.chip, activeStyle === s && styles.chipActive]}
              onPress={() => setActiveStyle(activeStyle === s ? null : s)}
            >
              <Text style={[styles.chipText, activeStyle === s && styles.chipTextActive]}>{s}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* ACTIVE FILTER BAR */}
      {hasFilter && (
        <View style={styles.filterBar}>
          <Text style={styles.filterBarText}>
            {[activeSeason, activeStyle].filter(Boolean).join(' · ')}
          </Text>
          <TouchableOpacity onPress={() => { setActiveSeason(null); setActiveStyle(null) }}>
            <Text style={styles.clearBtn}>Effacer</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* CONTENT */}
      {filtered.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>Aucune tenue pour cette sélection</Text>
        </View>
      ) : (
        filtered.map((season, si) => (
          <View key={si} style={styles.seasonBlock}>
            <Text style={styles.seasonTitle}>{season.season}</Text>
            <View style={styles.seasonRule} />

            {season.themes.map((theme, ti) => (
              <View key={ti} style={styles.themeBlock}>
                <Text style={styles.themeLabel}>{theme.name.toUpperCase()}</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={styles.outfitGrid}>
                    {theme.items.map((img, j) => (
                      <TouchableOpacity
                        key={j}
                        onPress={() =>
                          router.push(
                            `/outfitDetail?season=${season.season}&theme=${theme.name}&outfitIndex=${j}`
                          )
                        }
                      >
                        <Image source={img} style={styles.outfitImage} />
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>
              </View>
            ))}
          </View>
        ))
      )}

      <Text style={styles.footer}>INSTA'TENUE · 2026</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: CREAM },

  /* header */
  header: { paddingTop: 56, paddingHorizontal: 24, paddingBottom: 8, alignItems: 'center' },
  headerTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: 24 },
  backButton: { fontFamily: 'CormorantGaramond_300Light', fontSize: 14, letterSpacing: 1, color: MID, textTransform: 'uppercase' },
  logoArea: { alignItems: 'center', gap: 4 },
  logoCircle: { width: 44, height: 44, borderRadius: 22, borderWidth: 1, borderColor: ROSE, alignItems: 'center', justifyContent: 'center' },
  logoLetter: { fontFamily: 'PlayfairDisplay_400Regular_Italic', fontSize: 13, color: ROSE },
  tagline: { fontFamily: 'CormorantGaramond_300Light', fontSize: 8, letterSpacing: 4, color: ROSE },
  pageTitle: { fontFamily: 'PlayfairDisplay_400Regular_Italic', fontSize: 42, color: DARK, textAlign: 'center', lineHeight: 48, marginBottom: 8 },
  pageSubtitle: { fontFamily: 'CormorantGaramond_300Light_Italic', fontSize: 13, letterSpacing: 2, color: MID, marginBottom: 20 },
  divider: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 8 },
  dividerLine: { width: 40, height: 0.5, backgroundColor: '#d4a0b4' },
  dividerDot: { width: 5, height: 5, borderRadius: 3, backgroundColor: ROSE },

  /* filters */
  filtersSection: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 4 },
  filterLabel: { fontFamily: 'CormorantGaramond_300Light', fontSize: 9, letterSpacing: 4, color: MID, marginBottom: 10 },
  chipRow: { flexDirection: 'row', marginBottom: 16 },
  chip: { borderWidth: 0.5, borderColor: '#d4a0b4', borderRadius: 30, paddingVertical: 7, paddingHorizontal: 18, marginRight: 8, backgroundColor: 'transparent' },
  chipActive: { backgroundColor: DARK, borderColor: DARK },
  chipText: { fontFamily: 'CormorantGaramond_400Regular', fontSize: 13, letterSpacing: 1.5, color: MID, textTransform: 'uppercase' },
  chipTextActive: { color: CREAM },
  filterDivider: { height: 0.5, backgroundColor: '#d4a0b4', opacity: 0.5, marginBottom: 16 },

  /* filter bar */
  filterBar: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingBottom: 12 },
  filterBarText: { fontFamily: 'CormorantGaramond_400Regular', fontStyle: 'italic', fontSize: 14, color: '#7a4060', letterSpacing: 0.5 },
  clearBtn: { fontFamily: 'CormorantGaramond_300Light', fontSize: 11, letterSpacing: 2, color: ROSE, textDecorationLine: 'underline', marginLeft: 'auto' },

  /* content */
  seasonBlock: { paddingHorizontal: 20, marginBottom: 32 },
  seasonTitle: { fontFamily: 'PlayfairDisplay_400Regular_Italic', fontSize: 24, color: DARK, marginBottom: 6 },
  seasonRule: { height: 0.5, backgroundColor: '#d4a0b4', marginBottom: 18 },
  themeBlock: { marginBottom: 22 },
  themeLabel: { fontFamily: 'CormorantGaramond_300Light', fontSize: 9, letterSpacing: 4, color: ROSE, marginBottom: 12 },
  outfitGrid: { flexDirection: 'row', gap: 10 },
  outfitImage: { width: 100, height: 140, borderRadius: 10 },

  /* empty + footer */
  emptyState: { alignItems: 'center', paddingVertical: 60 },
  emptyText: { fontFamily: 'CormorantGaramond_300Light_Italic', fontSize: 16, color: MID, letterSpacing: 0.5 },
  footer: { textAlign: 'center', paddingVertical: 32, fontFamily: 'CormorantGaramond_300Light', fontSize: 9, color: '#c4a0b0', letterSpacing: 3 },
})