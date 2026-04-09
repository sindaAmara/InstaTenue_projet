import { useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect, useRef, useState } from 'react'
import {
  Animated,
  Dimensions,
  Easing,
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

const PulsingDot = ({ isActive, hasArticle, hasBeenTouched, onPress }: {
  isActive: boolean
  hasArticle: boolean
  hasBeenTouched: boolean
  onPress: () => void
}) => {
  const pulseAnim = useRef(new Animated.Value(0)).current
  const stoppedRef = useRef(false)

  const startLoop = () => {
    stoppedRef.current = false
    const loop = () => {
      if (stoppedRef.current) return
      pulseAnim.setValue(0)
      Animated.timing(pulseAnim, {
        toValue: 1,
        duration: 1200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished && !stoppedRef.current) loop()
      })
    }
    loop()
  }

  const stopLoop = () => {
    stoppedRef.current = true
    pulseAnim.stopAnimation()
    pulseAnim.setValue(0)
  }

  useEffect(() => {
    if (!hasBeenTouched) {
      startLoop()
    } else {
      stopLoop()
    }
    return () => stopLoop()
  }, [hasBeenTouched])

  const scale = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 2.5],
  })

  const opacity = pulseAnim.interpolate({
    inputRange: [0, 0.1, 1],
    outputRange: [0, 0.6, 0],
  })

  return (
    <View style={styles.dotContainer}>
      {!hasBeenTouched && (
        <Animated.View
          style={[
            styles.pulseCircle,
            { opacity, transform: [{ scale }] },
          ]}
        />
      )}
      <TouchableOpacity
        style={[
          styles.dot,
          isActive    && styles.dotActive,
          !hasArticle && styles.dotEmpty,
        ]}
        onPress={onPress}
        activeOpacity={0.8}
        hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
      />
    </View>
  )
}

export default function OutfitDetail() {
  const router = useRouter()
  const { id, season, theme } = useLocalSearchParams<{ id: string; season: string; theme: string }>()
  const idx = Number(id) || 0
  const [activePoint, setActivePoint] = useState<number | null>(null)
  const [touchedDots, setTouchedDots] = useState<Set<number>>(new Set())

  const { allOutfits } = useWardrobe()
  const seasonData = allOutfits.find(s => s.season.toLowerCase() === season?.toLowerCase())
  const themeData  = seasonData?.themes.find(t => t.name.toLowerCase() === theme?.toLowerCase())
  const mainImage  = themeData?.items[idx]
  const articles   = themeData?.articles?.[idx] ?? []

  const handleDotPress = (i: number) => {
    setTouchedDots(prev => new Set(prev).add(i))
    setActivePoint(prev => prev === i ? null : i)
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Retour ↩︎</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{theme}</Text>
        <Text style={styles.headerSeason}>{season}</Text>
      </View>

      {/* PHOTO + POINTS */}
      <View style={styles.photoWrapper}>
        <Image source={mainImage} style={styles.photo} resizeMode="cover" />

        {activePoint !== null && (
          <Pressable
            style={[StyleSheet.absoluteFill, { zIndex: 5 }]}  
            onPress={() => setActivePoint(null)}
          />
        )}

        {DOT_POSITIONS.map((yRatio, i) => {
          const article = articles[i]
          const isActive = activePoint === i
          const hasBeenTouched = touchedDots.has(i)

          return (
            <View key={i} style={[styles.dotRow, { top: PHOTO_H * yRatio - 11 }]} pointerEvents="box-none">

              {isActive && article && (
                <View style={styles.popupRow} pointerEvents="none">
                  <View style={styles.popupCard}>
                    <Image source={article.image} style={styles.popupImg} />
                    <Text style={styles.popupLabel}>{article.label.toUpperCase()}</Text>
                    <Text style={styles.popupName}>{article.name}</Text>
                    <Text style={styles.popupPrice}>{article.price}</Text>
                    {(article.brand || article.ref) && (
                      <View style={styles.popupDivider}>
                        {article.brand && <Text style={styles.popupBrand}>{article.brand}</Text>}
                        {article.ref && <Text style={styles.popupRef}>Réf. {article.ref}</Text>}
                      </View>
                    )}
                  </View>
                  <View style={styles.popupLine} />
                </View>
              )}

              <PulsingDot
                isActive={isActive}
                hasArticle={!!article}
                hasBeenTouched={hasBeenTouched}
                onPress={() => handleDotPress(i)}
              />
            </View>
          )
        })}
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.infoTitle}>Tenue {idx + 1}</Text>
        <Text style={styles.infoSub}>{articles.length} articles · {theme} · {season}</Text>
      </View>

      <SimilarOutfits season={season} theme={theme} currentIdx={idx} />
      <Text style={styles.footer}>INSTA'TENUE · 2026</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: CREAM },
  header: { paddingTop: 45,
  paddingHorizontal: 24,
  paddingBottom: 16,
  zIndex: 10,    
  position: 'relative', },
  backButton: { backgroundColor: '#a06080', paddingVertical: 4, paddingHorizontal: 14, borderRadius: 50, marginBottom: 12, alignSelf: 'flex-start' },
  backButtonText: { fontFamily: 'CormorantGaramond_400Regular', fontSize: 11, color: '#fdf0f5', textTransform: 'uppercase' },
  headerTitle: { fontFamily: 'PlayfairDisplay_400Regular_Italic', fontSize: 32, color: DARK },
  headerSeason: { fontFamily: 'CormorantGaramond_300Light', fontSize: 11, color: ROSE, textTransform: 'uppercase' },
  photoWrapper: { marginHorizontal: 16, height: PHOTO_H, position: 'relative', overflow: 'visible' },
  photo: { width: '100%', height: PHOTO_H, borderRadius: 20 },

  dotRow: { position: 'absolute', right: -11, flexDirection: 'row', alignItems: 'center', zIndex: 20 },
  dotContainer: { width: 22, height: 22, alignItems: 'center', justifyContent: 'center' },
  pulseCircle: { position: 'absolute', width: 22, height: 22, borderRadius: 11, backgroundColor: ROSE },

  dot: {
    width: 22, height: 22, borderRadius: 11, backgroundColor: DARK,
    borderWidth: 2.5, borderColor: CREAM, elevation: 6,
    shadowColor: DARK, shadowOpacity: 0.3, shadowRadius: 5, shadowOffset: { width: 0, height: 2 }
  },
  dotActive: { backgroundColor: ROSE, width: 24, height: 24, borderRadius: 12, borderWidth: 3 },
  dotEmpty: { backgroundColor: '#c4a0b0', opacity: 0.45 },

  popupRow: { flexDirection: 'row', alignItems: 'center', position: 'absolute', right: 35 },
  popupLine: { width: 20, height: 1.5, backgroundColor: ROSE },
  popupCard: {
    backgroundColor: 'white', borderRadius: 14, padding: 10, width: 130, elevation: 5,
    shadowColor: DARK, shadowOpacity: 0.12, shadowRadius: 10, shadowOffset: { width: 0, height: 4 }
  },
  popupImg: { width: 110, height: 150, borderRadius: 10, marginBottom: 7, backgroundColor: '#fce8ee' },
  popupLabel: { fontFamily: 'CormorantGaramond_300Light', fontSize: 8, color: ROSE, textTransform: 'uppercase', marginBottom: 2 },
  popupName: { fontFamily: 'CormorantGaramond_400Regular', fontSize: 13, color: DARK },
  popupPrice: { fontFamily: 'CormorantGaramond_300Light', fontSize: 12, color: ROSE, marginTop: 3 },
  popupDivider: { marginTop: 4, borderTopWidth: 0.5, borderTopColor: '#fce8ee', paddingTop: 4 },
  popupBrand: { fontFamily: 'CormorantGaramond_400Regular', fontSize: 10, color: MID, textTransform: 'uppercase' },
  popupRef: { fontFamily: 'CormorantGaramond_300Light', fontSize: 9, color: '#c4a0b0', marginTop: 1 },

  infoBlock: { paddingHorizontal: 24, paddingTop: 22, paddingBottom: 8 },
  infoTitle: { fontFamily: 'PlayfairDisplay_400Regular_Italic', fontSize: 20, color: DARK },
  infoSub: { fontFamily: 'CormorantGaramond_300Light', fontSize: 12, color: MID, marginTop: 4 },
  footer: { textAlign: 'center', paddingVertical: 40, fontSize: 9, color: '#c4a0b0', letterSpacing: 3 },
})