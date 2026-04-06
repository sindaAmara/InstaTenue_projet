import { useRouter } from 'expo-router'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { outfits } from '../data/fakeData'

export default function HomePage() {
  const router = useRouter()

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mes Tenues</Text>

      {outfits.map((season, sIdx) => (
        <View key={sIdx}>
          <Text style={styles.season}>{season.season}</Text>

          {season.themes.map((theme, tIdx) => (
            <View key={tIdx}>
              <Text style={styles.theme}>{theme.name}</Text>

              <View style={styles.grid}>
                {theme.items.map((img, i) => (
                  <TouchableOpacity
                    key={i}
                    onPress={() =>
                      router.push(
                        `/outfitDetail?season=${season.season}&theme=${theme.name}&outfitIndex=${i}`
                      )
                    }
                  >
                    <Image source={img} style={styles.image} />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fdf6f0' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#3d1a2e', marginBottom: 20 },
  season: { fontSize: 24, fontWeight: 'bold', marginTop: 30, marginBottom: 5, color: '#3d1a2e' },
  theme: { fontSize: 18, marginTop: 10, marginBottom: 10, color: '#6b3e57' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  image: { width: 120, height: 160, borderRadius: 10 },
})