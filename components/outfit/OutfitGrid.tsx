import { View, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

type Props = {
  items: ReturnType<typeof require>[]
  season: string
  theme: string
}

export default function OutfitGrid({ items, season, theme }: Props) {
  const router = useRouter()

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.row}>
        {items.map((img, j) => (
          <TouchableOpacity
            key={j}
            onPress={() =>
              router.push(`/outfit/${j}?season=${season}&theme=${theme}`)
            }
          >
            <Image source={img} style={styles.image} resizeMode="cover" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  row:   { flexDirection: 'row', gap: 10 },
  image: { width: 110, height: 155, borderRadius: 12 },
})