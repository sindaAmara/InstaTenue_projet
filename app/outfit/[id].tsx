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
  View,
} from 'react-native'
import SimilarOutfits from '../../components/outfit/SimilarOutfits'
import { useWardrobe } from '../../contexts/WardrobeContext'

const { width } = Dimensions.get('window')
const PHOTO_H = width * 1.25

const ROSE  = '#c87090'
const DARK  = '#3d1a2e'
const CREAM = '#fdf0f5'
const MID   = '#a06080'

const DOT_POSITIONS = [0.12, 0.28, 0.46, 0.64, 0.80]

export default function OutfitDetail() {
  const router = useRouter()
  const { id, season, theme } = useLocalSearchParams<{
    id: string; season: string; theme: string
  }>()
  const idx = Number(id) || 0

  const [activePoint, setActivePoint] = useState<number | null>(null)

  const { allOutfits } = useWardrobe()
  const seasonData = allOutfits.find(s => s.season === season)
  const themeData  = seasonData?.themes.find(t => t.name === theme)
  const mainImage  = themeData?.items[idx]
  const articles   = themeData?.articles?.[idx] ?? []

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()} 
          activeOpacity={0.8}
        >
          <Text style={styles.backButtonText}>Retour ↩︎</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{theme}</Text>
        <Text style={styles.headerSeason}>{season}</Text>
      </View>

      {/* PHOTO + POINTS */}
      <View style={styles.photoWrapper}>

        <Image
          source={mainImage}
          style={styles.photo}
          resizeMode="cover"
        />

        {activePoint !== null && (
          <Pressable style={StyleSheet.absoluteFill} onPress={() => setActivePoint(null)} />
        )}

        {DOT_POSITIONS.map((yRatio, i) => {
          const article    = articles[i]
          const isActive   = activePoint === i
          const hasArticle = !!article

          return (
            <View
              key={i}
              style={[styles.dotRow, { top: PHOTO_H * yRatio - 9 }]}
              pointerEvents="box-none"
            >
              {isActive && article && (
                <View style={styles.popupRow} pointerEvents="none">
                  <View style={styles.popupCard}>
                    <Image source={article.image} style={styles.popupImg} resizeMode="cover" />
                    <Text style={styles.popupLabel}>{article.label.toUpperCase()}</Text>
                    <Text style={styles.popupName}>{article.name}</Text>
                    <Text style={styles.popupPrice}>{article.price}</Text>
                    
                    {/* Ajout de la marque et de la réf */}
                    {(article.brand || article.ref) && (
                      <View style={{ marginTop: 4, borderTopWidth: 0.5, borderTopColor: '#fce8ee', paddingTop: 4 }}>
                        {article.brand && <Text style={styles.popupBrand}>{article.brand}</Text>}
                        {article.ref && <Text style={styles.popupRef}>Réf. {article.ref}</Text>}
                      </View>
                    )}
                  </View>
                </View>
              )}

              <TouchableOpacity
                style={[
                  styles.dot,
                  isActive    && styles.dotActive,
                  !hasArticle && styles.dotEmpty,
                ]}
                onPress={() => setActivePoint(isActive ? null : i)}
                activeOpacity={0.7}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              />
            </View>
          )
        })}
      </View>

      {/* INFO */}
      <View style={styles.infoBlock}>
        <Text style={styles.infoTitle}>Tenue {idx + 1}</Text>
        <Text style={styles.infoSub}>
          {articles.length} article{articles.length > 1 ? 's' : ''} · {theme} · {season}
        </Text>
      </View>

      {/* TENUES SIMILAIRES */}
      <SimilarOutfits season={season} theme={theme} currentIdx={idx} />

      <Text style={styles.footer}>INSTA'TENUE · 2026</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: CREAM },

  header: { 
    paddingTop: 45,
    paddingHorizontal: 24, 
    paddingBottom: 16 
  },

  backButton: { 
    backgroundColor: '#a06080', 
    paddingVertical: 4,     
    paddingHorizontal: 14,  
    borderRadius: 50, 
    marginBottom: 12,       
    alignSelf: 'flex-start' 
  },
  backButtonText: { 
    fontFamily: 'CormorantGaramond_400Regular', 
    fontSize: 11,           
    letterSpacing: 1.5, 
    color: '#fdf0f5', 
    textTransform: 'uppercase' 
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
    overflow: 'visible',
  },
  photo: {
    width: '100%',
    height: PHOTO_H,
    borderRadius: 20,
  },

  dotRow: {
    position: 'absolute', right: -9,
    flexDirection: 'row', alignItems: 'center', zIndex: 20,
  },
  dot: {
    width: 18, height: 18, borderRadius: 9,
    backgroundColor: DARK, borderWidth: 2.5, borderColor: CREAM,
    shadowColor: DARK, shadowOpacity: 0.25, shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 }, elevation: 4,
  },
  dotActive: {
    backgroundColor: ROSE, width: 22, height: 22,
    borderRadius: 11, borderWidth: 3,
  },
  dotEmpty: { backgroundColor: '#c4a0b0', opacity: 0.45 },

  popupRow: {
    flexDirection: 'row', alignItems: 'center',
    position: 'absolute', right: 22,
  },
  popupLine: { width: 40, height: 1.5, backgroundColor: ROSE },
popupCard: {
    backgroundColor: 'white', borderRadius: 14,
    borderWidth: 0.5, borderColor: '#e8c4d0',
    padding: 10, width: 130, 
    shadowColor: DARK, shadowOpacity: 0.12, shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 }, elevation: 5,
  },
popupImg: {
    width: 110,     
    height: 150,    
    borderRadius: 10,
    marginBottom: 7,
    backgroundColor: '#fce8ee',
  },
  popupLabel: {
    fontFamily: 'CormorantGaramond_300Light',
    fontSize: 8, letterSpacing: 3, color: ROSE,
    textTransform: 'uppercase', marginBottom: 2,
  },
  popupName: {
    fontFamily: 'CormorantGaramond_400Regular', fontSize: 13, color: DARK,
  },
  popupPrice: {
    fontFamily: 'CormorantGaramond_300Light', fontSize: 12, color: ROSE, marginTop: 3,
  },
  popupBrand: {
    fontFamily: 'CormorantGaramond_400Regular',
    fontSize: 10, color: MID,
    textTransform: 'uppercase',
  },
  popupRef: {
    fontFamily: 'CormorantGaramond_300Light',
    fontSize: 9, color: '#c4a0b0',
    marginTop: 1,
  },

  infoBlock: { paddingHorizontal: 24, paddingTop: 22, paddingBottom: 8 },
  infoTitle: {
    fontFamily: 'PlayfairDisplay_400Regular_Italic', fontSize: 20, color: DARK,
  },
  infoSub: {
    fontFamily: 'CormorantGaramond_300Light',
    fontSize: 12, letterSpacing: 1.5, color: MID, marginTop: 4,
  },

  footer: {
    textAlign: 'center', paddingVertical: 40,
    fontFamily: 'CormorantGaramond_300Light',
    fontSize: 9, color: '#c4a0b0', letterSpacing: 3,
  },
})