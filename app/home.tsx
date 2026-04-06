import { useRouter } from 'expo-router'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { outfits } from '../data/fakeData'

export default function HomePage() {
  const router = useRouter()

  return (
    <ScrollView style={styles.container}>
      
      <TouchableOpacity onPress={() => router.push('/')}>
        <Text style={styles.backButton}>← Retour</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Mes Tenues</Text>

      {outfits.map((season, index) => (
        <View key={index}>
          <Text style={styles.season}>{season.season}</Text>

          {season.themes.map((theme, i) => (
            <View key={i}>
              <Text style={styles.theme}>{theme.name}</Text>

              <View style={styles.grid}>
                {theme.items.map((img, j) => (
                  <Image key={j} source={img} style={styles.image} />
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
  container: {
    flex: 1,
    backgroundColor: '#fdf6f0',
    padding: 20,
  },
  backButton: {
    marginTop: 50,
    marginBottom: 10,
    fontSize: 18,
    color: '#3d1a2e',
  },
  title: {
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    fontSize: 32,
    color: '#3d1a2e',
    marginBottom: 20,
  },
  season: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 5,
    color: '#3d1a2e',
  },
  theme: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    color: '#6b3e57',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  image: {
    width: 100,
    height: 140,
    borderRadius: 10,
  },
})