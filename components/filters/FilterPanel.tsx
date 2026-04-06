import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { useFilter } from '../../contexts/FilterContext'

const ROSE  = '#c87090'
const DARK  = '#622b4a'
const CREAM = '#fdf0f5'
const MID   = '#a06080'

const SEASONS = ['Printemps', 'Été', 'Automne', 'Hiver']
const STYLES  = ['Chic', 'Sport']

export default function FilterPanel() {
  const {
    activeSeason, setActiveSeason,
    activeStyle,  setActiveStyle,
    clearFilters, hasFilter,
  } = useFilter()

  return (
    <View style={styles.wrapper}>

      <Text style={styles.label}>SAISON</Text>
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

      <View style={styles.divider} />

      <Text style={styles.label}>STYLE</Text>
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

      {hasFilter && (
        <View style={styles.filterBar}>
          <Text style={styles.filterBarText}>
            {[activeSeason, activeStyle].filter(Boolean).join(' · ')}
          </Text>
          <TouchableOpacity onPress={clearFilters}>
            <Text style={styles.clearBtn}>Effacer</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 4 },
  label: {
    fontFamily: 'CormorantGaramond_300Light',
    fontSize: 9, letterSpacing: 4, color: MID, marginBottom: 10,
  },
  chipRow: { flexDirection: 'row', marginBottom: 16 },
  chip: {
    borderWidth: 0.5, borderColor: '#d4a0b4',
    borderRadius: 30, paddingVertical: 7, paddingHorizontal: 18,
    marginRight: 8, backgroundColor: 'transparent',
  },
  chipActive:     { backgroundColor: DARK, borderColor: DARK },
  chipText: {
    fontFamily: 'CormorantGaramond_400Regular',
    fontSize: 13, letterSpacing: 1.5, color: MID, textTransform: 'uppercase',
  },
  chipTextActive: { color: CREAM },
  divider: { height: 0.5, backgroundColor: '#d4a0b4', opacity: 0.5, marginBottom: 16 },
  filterBar: {
    flexDirection: 'row', alignItems: 'center',
    paddingTop: 4, paddingBottom: 8,
  },
  filterBarText: {
    fontFamily: 'CormorantGaramond_400Regular',
    fontStyle: 'italic', fontSize: 14, color: '#7a4060', letterSpacing: 0.5,
  },
  clearBtn: {
    fontFamily: 'CormorantGaramond_300Light',
    fontSize: 11, letterSpacing: 2, color: ROSE,
    textDecorationLine: 'underline', marginLeft: 'auto',
  },
})