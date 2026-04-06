import { useLocalSearchParams, useRouter } from 'expo-router'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { outfits } from '../data/fakeData'

export default function OutfitDetail() {
  const router = useRouter()
  const { season, theme, outfitIndex } = useLocalSearchParams<{
    season: string
    theme: string
    outfitIndex: string
  }>()

  const outfitIndexParam = Number(outfitIndex) || 0

  const seasonData = outfits.find(s => s.season === season)
  const themeData = seasonData?.themes.find(t => t.name === theme)
  const outfitImages = themeData?.details?.[outfitIndexParam] || []

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.backButton}>← Retour</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Détails de la tenue</Text>

      <Text style={styles.subtitle}>
        Saison: {season} | Thème: {theme} | Tenue: {outfitIndexParam + 1}
      </Text>

      <View style={styles.grid}>
        {outfitImages.map((img, i) => (
          <Image key={i} source={img} style={styles.image} />
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fdf6f0' },
  backButton: { fontSize: 18, color: '#3d1a2e', marginBottom: 10 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#3d1a2e', marginBottom: 5 },
  subtitle: { fontSize: 16, color: '#6b3e57', marginBottom: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  image: { width: 140, height: 180, borderRadius: 10 },
})