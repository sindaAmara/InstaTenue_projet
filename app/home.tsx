import { useRouter } from 'expo-router'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FilterPanel from '../components/filters/FilterPanel'
import OutfitGrid from '../components/outfit/OutfitGrid'
import { useFilter } from '../contexts/FilterContext'

const ROSE = '#c87090'
const DARK = '#622b4a'
const CREAM = '#fdf0f5'

export default function HomePage() {
  const router = useRouter()
  const { filteredOutfits } = useFilter()

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <View style={styles.header}>
        <Text style={styles.pageTitle}>{'Ma\nGarde-robe'}</Text>
        <Text style={styles.tagline}>INSTA'TENUE</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/')} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Retour ↩︎</Text>
        </TouchableOpacity>
      </View>

      <FilterPanel />

      {filteredOutfits.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>Aucune tenue pour cette sélection</Text>
        </View>
      ) : (
        filteredOutfits.map((seasonData, si) => (
          <View key={si} style={styles.seasonBlock}>
            <Text style={styles.seasonTitle}>{seasonData.season}</Text>
            <View style={styles.seasonRule} />

            {seasonData.themes.map((theme, ti) => (
              <View key={ti} style={styles.themeBlock}>
                <Text style={styles.themeLabel}>{theme.name.toUpperCase()}</Text>
                <OutfitGrid
                  items={theme.items}
                  season={seasonData.season}
                  theme={theme.name}
                />
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

  header: {
    paddingTop: 60, paddingHorizontal: 24, paddingBottom: 8,
  },
  pageTitle: {
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    fontSize: 42, color: DARK, lineHeight: 48, marginBottom: 6,
  },
  tagline: {
    fontFamily: 'CormorantGaramond_300Light',
    fontSize: 9, letterSpacing: 5, color: ROSE,
  },

  seasonBlock: { paddingHorizontal: 20, marginBottom: 32 },
  seasonTitle: {
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    fontSize: 24, color: DARK, marginBottom: 6,
  },
  seasonRule: { height: 0.5, backgroundColor: '#d4a0b4', marginBottom: 18 },

  themeBlock: { marginBottom: 22 },
  themeLabel: {
    fontFamily: 'CormorantGaramond_300Light',
    fontSize: 9, letterSpacing: 4, color: ROSE, marginBottom: 12,
  },

  emptyState: { alignItems: 'center', paddingVertical: 60 },
  emptyText: {
    fontFamily: 'CormorantGaramond_300Light_Italic',
    fontSize: 16, color: '#a06080', letterSpacing: 0.5,
  },

    button: { backgroundColor: '#a06080', paddingVertical: 4, paddingHorizontal: 14, borderRadius: 50, marginTop: 16, alignSelf: 'flex-start' },
                              //'#c87090'
    buttonText: { fontFamily: 'CormorantGaramond_400Regular', fontSize: 15, letterSpacing: 2, color: '#fdf0f5', textTransform: 'uppercase' },


  footer: {
    textAlign: 'center', paddingVertical: 32,
    fontFamily: 'CormorantGaramond_300Light',
    fontSize: 9, color: '#c4a0b0', letterSpacing: 3,
  },
})
