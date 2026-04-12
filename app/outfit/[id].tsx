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

const CLOTHING_LABELS = ['haut', 'bas']

const PulsingDot = ({ isActive, hasBeenTouched, onPress }: {
  isActive: boolean
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
        useNativeDriver: false,
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
    if (!hasBeenTouched) startLoop()
    else stopLoop()
    return () => stopLoop()
  }, [hasBeenTouched])

  const scale = pulseAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 2.5] })
  const opacity = pulseAnim.interpolate({ inputRange: [0, 0.1, 1], outputRange: [0, 0.6, 0] })

  return (
    <View style={styles.dotContainer}>
      {!hasBeenTouched && (
        <Animated.View style={[styles.pulseCircle, { opacity, transform: [{ scale }] }]} />
      )}
      <TouchableOpacity
        style={[styles.dot, isActive && styles.dotActive]}
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

  const rightArticles  = articles.filter(a =>  CLOTHING_LABELS.includes(a.label.toLowerCase()))
  const leftArticles   = articles.filter(a => !CLOTHING_LABELS.includes(a.label.toLowerCase()))
  const rightPositions = rightArticles.map((_, i) => (i + 1) / (rightArticles.length + 1))
  const leftPositions  = leftArticles.map( (_, i) => (i + 1) / (leftArticles.length  + 1))

  const handlePress = (globalIdx: number) => {
    setTouchedDots(prev => new Set(prev).add(globalIdx))
    setActivePoint(prev => prev === globalIdx ? null : globalIdx)
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()} activeOpacity={0.8}>
          <Text style={styles.backButtonText}>Retour ↩︎</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{theme}</Text>
        <Text style={styles.headerSeason}>{season}</Text>
      </View>

      <View style={styles.photoWrapper}>
        <Image source={mainImage} style={styles.photo} resizeMode="cover" />

        {activePoint !== null && (
          <Pressable style={[StyleSheet.absoluteFill, { zIndex: 5 }]} onPress={() => setActivePoint(null)} />
        )}

        {rightArticles.map((article, i) => {
          const globalIdx = articles.indexOf(article)
          const isActive  = activePoint === globalIdx

          return (
            <View key={`right-${i}`} style={[styles.dotRowRight, { top: PHOTO_H * rightPositions[i] - 11 }]}>
              {isActive && (
                <View style={styles.popupRowRight}>
                  <View style={styles.popupCard}>
                    <Image source={article.image} style={styles.popupImg} resizeMode="cover" />
                    <Text style={styles.popupLabel}>{article.label.toUpperCase()}</Text>
                    <Text style={styles.popupName}>{article.name}</Text>
                    <Text style={styles.popupPrice}>{article.price}</Text>
                    {(article.brand || article.ref) && (
                      <View style={styles.popupMeta}>
                        {article.brand && <Text style={styles.popupBrand}>{article.brand}</Text>}
                        {article.ref   && <Text style={styles.popupRef}>Réf. {article.ref}</Text>}
                      </View>
                    )}
                  </View>
                  <View style={styles.popupLine} />
                </View>
              )}
              <PulsingDot
                isActive={isActive}
                hasBeenTouched={touchedDots.has(globalIdx)}
                onPress={() => handlePress(globalIdx)}
              />
            </View>
          )
        })}

        {leftArticles.map((article, i) => {
          const globalIdx = articles.indexOf(article)
          const isActive  = activePoint === globalIdx

          return (
            <View key={`left-${i}`} style={[styles.dotRowLeft, { top: PHOTO_H * leftPositions[i] - 11 }]}>
              <PulsingDot
                isActive={isActive}
                hasBeenTouched={touchedDots.has(globalIdx)}
                onPress={() => handlePress(globalIdx)}
              />
              {isActive && (
                <View style={styles.popupRowLeft}>
                  <View style={styles.popupLine} />
                  <View style={styles.popupCard}>
                    <Image source={article.image} style={styles.popupImg} resizeMode="cover" />
                    <Text style={styles.popupLabel}>{article.label.toUpperCase()}</Text>
                    <Text style={styles.popupName}>{article.name}</Text>
                    <Text style={styles.popupPrice}>{article.price}</Text>
                    {(article.brand || article.ref) && (
                      <View style={styles.popupMeta}>
                        {article.brand && <Text style={styles.popupBrand}>{article.brand}</Text>}
                        {article.ref   && <Text style={styles.popupRef}>Réf. {article.ref}</Text>}
                      </View>
                    )}
                  </View>
                </View>
              )}
            </View>
          )
        })}
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.infoTitle}>Tenue {idx + 1}</Text>
        <Text style={styles.infoSub}>{articles.length} article{articles.length > 1 ? 's' : ''} · {theme} · {season}</Text>
      </View>

      <SimilarOutfits season={season} theme={theme} currentIdx={idx} />
      <Text style={styles.footer}>INSTA'TENUE · 2026</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: CREAM },
  header: { paddingTop: 45, paddingHorizontal: 24, paddingBottom: 16, zIndex: 10, position: 'relative' },
  backButton: { backgroundColor: '#a06080', paddingVertical: 4, paddingHorizontal: 14, borderRadius: 50, marginBottom: 12, alignSelf: 'flex-start' },
  backButtonText: { fontFamily: 'CormorantGaramond_400Regular', fontSize: 11, letterSpacing: 1.5, color: '#fdf0f5', textTransform: 'uppercase' },
  headerTitle: { fontFamily: 'PlayfairDisplay_400Regular_Italic', fontSize: 32, color: DARK, lineHeight: 38 },
  headerSeason: { fontFamily: 'CormorantGaramond_300Light', fontSize: 11, letterSpacing: 4, color: ROSE, textTransform: 'uppercase', marginTop: 4 },
  photoWrapper: { marginHorizontal: 16, height: PHOTO_H, position: 'relative', overflow: 'visible' },
  photo: { width: '100%', height: PHOTO_H, borderRadius: 20 },
  dotRowRight: { position: 'absolute', right: -11, flexDirection: 'row', alignItems: 'center', zIndex: 20, style: { pointerEvents: 'box-none' } },
  popupRowRight: { position: 'absolute', right: 35, flexDirection: 'row', alignItems: 'center', style: { pointerEvents: 'none' } },
  dotRowLeft: { position: 'absolute', left: -11, flexDirection: 'row', alignItems: 'center', zIndex: 20 },
  popupRowLeft: { position: 'absolute', left: 35, flexDirection: 'row', alignItems: 'center', style: { pointerEvents: 'none' } },
  dotContainer: { width: 22, height: 22, alignItems: 'center', justifyContent: 'center' },
  pulseCircle: { position: 'absolute', width: 22, height: 22, borderRadius: 11, backgroundColor: ROSE },
  dot: { width: 22, height: 22, borderRadius: 11, backgroundColor: DARK, borderWidth: 2.5, borderColor: CREAM, elevation: 6, boxShadow: '0px 2px 5px rgba(61, 26, 46, 0.30)' },
  dotActive: { backgroundColor: ROSE, width: 24, height: 24, borderRadius: 12, borderWidth: 3 },
  popupLine: { width: 20, height: 1.5, backgroundColor: ROSE },
  popupCard: { backgroundColor: 'white', borderRadius: 14, borderWidth: 0.5, borderColor: '#e8c4d0', padding: 10, width: 130, elevation: 5, boxShadow: '0px 4px 10px rgba(61, 26, 46, 0.12)' },
  popupImg: { width: 110, height: 150, borderRadius: 10, marginBottom: 7, backgroundColor: '#fce8ee' },
  popupLabel: { fontFamily: 'CormorantGaramond_300Light', fontSize: 8, letterSpacing: 3, color: ROSE, textTransform: 'uppercase', marginBottom: 2 },
  popupName: { fontFamily: 'CormorantGaramond_400Regular', fontSize: 13, color: DARK },
  popupPrice: { fontFamily: 'CormorantGaramond_300Light', fontSize: 12, color: ROSE, marginTop: 3 },
  popupMeta: { marginTop: 4, borderTopWidth: 0.5, borderTopColor: '#fce8ee', paddingTop: 4 },
  popupBrand: { fontFamily: 'CormorantGaramond_400Regular', fontSize: 10, color: MID, textTransform: 'uppercase' },
  popupRef: { fontFamily: 'CormorantGaramond_300Light', fontSize: 9, color: '#c4a0b0', marginTop: 1 },
  infoBlock: { paddingHorizontal: 24, paddingTop: 22, paddingBottom: 8 },
  infoTitle: { fontFamily: 'PlayfairDisplay_400Regular_Italic', fontSize: 20, color: DARK },
  infoSub: { fontFamily: 'CormorantGaramond_300Light', fontSize: 12, letterSpacing: 1.5, color: MID, marginTop: 4 },
  footer: { textAlign: 'center', paddingVertical: 40, fontFamily: 'CormorantGaramond_300Light', fontSize: 9, color: '#c4a0b0', letterSpacing: 3 },
})