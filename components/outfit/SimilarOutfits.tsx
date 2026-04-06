import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import { useSimilar } from '../../hooks/useSimilar'

const ROSE = '#c87090'
const DARK = '#3d1a2e'

type Props = {
  season: string
  theme: string
  currentIdx: number
}

export default function SimilarOutfits({ season, theme, currentIdx }: Props) {
  const router  = useRouter()
  const similar = useSimilar(season, theme, currentIdx)

  if (similar.length === 0) return null

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Tenues similaires</Text>
      <Text style={styles.sub}>{theme.toUpperCase()} · {season.toUpperCase()}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.row}>
          {similar.map(({ img, index }) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                router.replace(`/outfit/${index}?season=${season}&theme=${theme}`)
              }
            >
              <Image source={img} style={styles.thumb} resizeMode="cover" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { paddingHorizontal: 24, paddingTop: 28 },
  title: {
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    fontSize: 18, color: DARK, marginBottom: 4,
  },
  sub: {
    fontFamily: 'CormorantGaramond_300Light',
    fontSize: 9, letterSpacing: 4, color: ROSE,
    textTransform: 'uppercase', marginBottom: 14,
  },
  row:   { flexDirection: 'row', gap: 10 },
  thumb: { width: 90, height: 120, borderRadius: 14, backgroundColor: '#fce8ee' },
})