import { useLocalSearchParams, useRouter } from 'expo-router'
import { useState } from 'react'
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { outfits } from '../data/fakeData'

const { width } = Dimensions.get('window')
const PHOTO_H = width * 1.25
const ROSE      = '#c87090'
const DARK      = '#3d1a2e'
const CREAM     = '#fdf0f5'
const MID       = '#a06080'

export default function OutfitDetail() {
  const router = useRouter()
  const { season, theme, outfitIndex } = useLocalSearchParams<{
    season: string; theme: string; outfitIndex: string
  }>()
  const idx = Number(outfitIndex) || 0

  const [activePoint, setActivePoint] = useState<number | null>(null)

  const seasonData = outfits.find(s => s.season === season)
  const themeData  = seasonData?.themes.find(t => t.name === theme)
  const mainImage  = themeData?.items[idx]
  const articles   = themeData?.articles?.[idx] ?? []

  const similarItems = themeData?.items.filter((_, i) => i !== idx) ?? []

  const DOT_POSITIONS = [0.12, 0.28, 0.46, 0.64, 0.80]

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>← Retour</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{theme}</Text>
        <Text style={styles.headerSeason}>{season}</Text>
      </View>

      {/* PHOTO + POINTS */}
      <View style={styles.photoWrapper}>

        {/* Photo principale */}
        <Image source={mainImage} style={styles.photo} resizeMode="cover" />

        {/* 5 points verticaux */}
        {DOT_POSITIONS.map((yRatio, i) => {
          const article   = articles[i]
          const isActive  = activePoint === i
          const hasArticle = !!article

          return (
            <View
              key={i}
              style={[styles.dotRow, { top: PHOTO_H * yRatio - 6 }]}
              pointerEvents="box-none"
            >
              {/* Popup à gauche du point si actif */}
              {isActive && article && (
                <View style={styles.popupRow} pointerEvents="none">
                  <View style={styles.popupCard}>
                    <Image source={article.image} style={styles.popupImg} resizeMode="cover" />
                    <Text style={styles.popupLabel}>{article.label.toUpperCase()}</Text>
                    <Text style={styles.popupName}>{article.name}</Text>
                    <Text style={styles.popupPrice}>{article.price}</Text>
                    {article.brand && <Text style={styles.popupBrand}>{article.brand}</Text>}
                    {article.ref && <Text style={styles.popupRef}>Réf. {article.ref}</Text>}
                  </View>
                  <View style={styles.popupLine} />
                </View>
              )}

              {/* Point */}
              <TouchableOpacity
                style={[
                  styles.dot,
                  isActive  && styles.dotActive,
                  !hasArticle && styles.dotEmpty,
                ]}
                onPress={() => setActivePoint(isActive ? null : i)}
                activeOpacity={0.7}
              />
            </View>
          )
        })}
      </View>

      {/* Fermer popup en cliquant ailleurs */}
      {activePoint !== null && (
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={() => setActivePoint(null)}
        />
      )}

      {/* INFO TENUE */}
      <View style={styles.infoBlock}>
        <Text style={styles.infoTitle}>Tenue {idx + 1}</Text>
        <Text style={styles.infoSub}>{articles.length} articles · {theme} · {season}</Text>
      </View>

      {/* TENUES SIMILAIRES */}
      {similarItems.length > 0 && (
        <View style={styles.similarSection}>
          <Text style={styles.similarTitle}>Tenues similaires</Text>
          <Text style={styles.similarSub}>{theme.toUpperCase()} · {season.toUpperCase()}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.similarRow}>
              {similarItems.map((img, i) => {
                const realIdx = themeData!.items.indexOf(img)
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() =>
                      router.replace(
                        `/outfitDetail?season=${season}&theme=${theme}&outfitIndex=${realIdx}`
                      )
                    }
                  >
                    <Image source={img} style={styles.similarThumb} resizeMode="cover" />
                  </TouchableOpacity>
                )
              })}
            </View>
          </ScrollView>
        </View>
      )}

      <Text style={styles.footer}>INSTA'TENUE · 2026</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: CREAM },

  header: { paddingTop: 56, paddingHorizontal: 24, paddingBottom: 16 },
  back: {
    fontFamily: 'CormorantGaramond_300Light',
    fontSize: 13, letterSpacing: 2, color: MID,
    textTransform: 'uppercase', marginBottom: 10,
  },
  headerTitle: {
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    fontSize: 32, color: DARK, lineHeight: 38,
  },
  headerSeason: {
    fontFamily: 'CormorantGaramond_300Light',
    fontSize: 11, letterSpacing: 4, color: ROSE,
    textTransform: 'uppercase', marginTop: 4,
  },

  photoWrapper: {
    marginHorizontal: 16,
    height: PHOTO_H,
    position: 'relative',
  },
  photo: {
    width: '100%',
    height: PHOTO_H,
    borderRadius: 20,
  },

  dotRow: {
    position: 'absolute',
    right: -6,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 20,
  },
  dot: {
    width: 12, height: 12,
    borderRadius: 6,
    backgroundColor: DARK,
    borderWidth: 2, borderColor: CREAM,
  },
  dotActive: {
    backgroundColor: ROSE,
    transform: [{ scale: 1.3 }],
  },
  dotEmpty: {
    backgroundColor: '#c4a0b0',
    opacity: 0.5,
  },

  popupRow: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 18,
  },
  popupLine: {
    width: 36, height: 1,
    backgroundColor: ROSE,
  },
  popupCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 0.5, borderColor: '#e8c4d0',
    padding: 8,
    width: 110,
    shadowColor: DARK,
    shadowOpacity: 0.10,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  popupImg: {
    width: 94, height: 70,
    borderRadius: 8, marginBottom: 6,
    backgroundColor: '#fce8ee',
  },
  popupLabel: {
    fontFamily: 'CormorantGaramond_300Light',
    fontSize: 8, letterSpacing: 3, color: ROSE,
    textTransform: 'uppercase', marginBottom: 2,
  },
  popupName: {
    fontFamily: 'CormorantGaramond_400Regular',
    fontSize: 12, color: DARK,
  },
  popupPrice: {
    fontFamily: 'CormorantGaramond_300Light',
    fontSize: 11, color: ROSE, marginTop: 2,
  },

  infoBlock: { paddingHorizontal: 24, paddingTop: 20, paddingBottom: 8 },
  infoTitle: {
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    fontSize: 20, color: DARK,
  },
  infoSub: {
    fontFamily: 'CormorantGaramond_300Light',
    fontSize: 12, letterSpacing: 1.5, color: MID, marginTop: 4,
  },

  similarSection: { paddingHorizontal: 24, paddingTop: 24 },
  similarTitle: {
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    fontSize: 18, color: DARK, marginBottom: 4,
  },
  similarSub: {
    fontFamily: 'CormorantGaramond_300Light',
    fontSize: 9, letterSpacing: 4, color: ROSE,
    textTransform: 'uppercase', marginBottom: 14,
  },
  similarRow: { flexDirection: 'row', gap: 10 },
  similarThumb: {
    width: 80, height: 110,
    borderRadius: 12,
    backgroundColor: '#fce8ee',
  },

  popupBrand: { fontFamily: 'CormorantGaramond_300Light', fontSize: 10, color: '#a06080', marginTop: 2 },
  popupRef: { fontFamily: 'CormorantGaramond_300Light', fontSize: 9, color: '#c4a0b0', letterSpacing: 1 },

  footer: {
    textAlign: 'center', paddingVertical: 36,
    fontFamily: 'CormorantGaramond_300Light',
    fontSize: 9, color: '#c4a0b0', letterSpacing: 3,
  },
})
