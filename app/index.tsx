import { useRouter } from 'expo-router'
import { useEffect, useRef } from 'react'

import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  Text, TouchableOpacity,
  View
} from 'react-native'

const { width, height } = Dimensions.get('window')

export default function SplashPage() {
  const router = useRouter()

  const fadeTitle    = useRef(new Animated.Value(0)).current
  const fadeSubtitle = useRef(new Animated.Value(0)).current
  const fadeText     = useRef(new Animated.Value(0)).current
  const fadeBtn      = useRef(new Animated.Value(0)).current
  const translateY   = useRef(new Animated.Value(30)).current

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeTitle, {
        toValue: 1, duration: 900, delay: 200,
        easing: Easing.out(Easing.ease), useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(fadeSubtitle, {
          toValue: 1, duration: 700,
          easing: Easing.out(Easing.ease), useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0, duration: 700,
          easing: Easing.out(Easing.ease), useNativeDriver: true,
        }),
      ]),
      Animated.timing(fadeText, {
        toValue: 1, duration: 600, delay: 100,
        easing: Easing.out(Easing.ease), useNativeDriver: true,
      }),
      Animated.timing(fadeBtn, {
        toValue: 1, duration: 500, delay: 100,
        easing: Easing.out(Easing.ease), useNativeDriver: true,
      }),
    ]).start()
  }, [])

  return (
    <View style={styles.container}>

      <View style={[styles.petal, styles.petal1]} />
      <View style={[styles.petal, styles.petal2]} />
      <View style={[styles.petal, styles.petal3]} />
      <View style={[styles.petal, styles.petal4]} />

      <Animated.Image
        source={require('../assets/img/logo1.png')} // Chemin vers ton logo
        style={[styles.monogram, { opacity: fadeTitle, resizeMode: 'contain' }]}
      />

      <Animated.Text style={[styles.tagline, { opacity: fadeTitle }]}>
        VOTRE GARDE-ROBE
      </Animated.Text>

      <Animated.Text style={[styles.title, { opacity: fadeTitle }]}>
        {"Insta'\nTenue"}
      </Animated.Text>

      <Animated.Text style={[styles.italicSubtitle, { opacity: fadeSubtitle, transform: [{ translateY }] }]}>
        dress with intention
      </Animated.Text>

      <Animated.View style={[styles.divider, { opacity: fadeSubtitle }]}>
        <View style={styles.dividerLine} />
        <View style={styles.dividerDot} />
        <View style={styles.dividerLine} />
      </Animated.View>

      <Animated.Text style={[styles.welcomeText, { opacity: fadeText, transform: [{ translateY }] }]}>
        {'Bienvenue \nDécouvrez des tenues pensées\npour vous, selon votre style.'}
      </Animated.Text>

      <Animated.View style={{ opacity: fadeBtn, alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace('/home')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Continuer vers mon profil</Text>
        </TouchableOpacity>
      </Animated.View>

      <Text style={styles.footer}>INSTA'TENUE · 2026</Text>

    </View>
  )
}

const ROSE  = '#c87090'
const DARK  = '#622b4a'
const CREAM = '#fdf0f5'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf0f5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  petal: {
    position: 'absolute',
    borderRadius: 999,
    opacity: 0.15,
  },
  petal1: { width: 140, height: 140, backgroundColor: '#e8a0b4', top: -30,   left: -40,  transform: [{ rotate: '20deg'  }] },
  petal2: { width: 90,  height: 90,  backgroundColor: '#d4849c', top: 80,    right: -20, transform: [{ rotate: '-30deg' }] },
  petal3: { width: 160, height: 160, backgroundColor: '#f0b8cc', bottom: 40, right: -50, transform: [{ rotate: '45deg'  }] },
  petal4: { width: 100, height: 100, backgroundColor: '#c87090', bottom: 100, left: -30, transform: [{ rotate: '-15deg' }] },

  monogram: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  monogramText: {
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    fontSize: 28, color: ROSE,
  },
  tagline: {
    fontFamily: 'CormorantGaramond_300Light',
    fontSize: 10, letterSpacing: 5,
    color: ROSE, marginBottom: 10,
  },
  title: {
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    fontSize: 52, color: DARK,
    textAlign: 'center', lineHeight: 58,
    marginBottom: 8,
  },
  italicSubtitle: {
    fontFamily: 'CormorantGaramond_300Light_Italic',
    fontSize: 14, letterSpacing: 2,
    color: '#a06080', marginBottom: 28,
  },
  divider: {
    flexDirection: 'row', alignItems: 'center',
    gap: 10, marginBottom: 32,
  },
  dividerLine: { width: 50, height: 0.5, backgroundColor: '#d4a0b4' },
  dividerDot:  { width: 5,  height: 5,   borderRadius: 3, backgroundColor: ROSE },
  welcomeText: {
    fontFamily: 'CormorantGaramond_400Regular',
    fontSize: 16, color: '#7a4060',
    textAlign: 'center', lineHeight: 26,
    marginBottom: 44,
  },
  button: {
    backgroundColor: DARK,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 50,
    alignItems: 'center',      
    justifyContent: 'center', 
    flexDirection: 'row',      
  },

  buttonText: {
    fontFamily: 'CormorantGaramond_400Regular',
    fontSize: 14,
    letterSpacing: 2,
    color: CREAM,
    textTransform: 'uppercase',
    textAlign: 'center',       
    includeFontPadding: false, 
  },
  footer: {
    position: 'absolute', bottom: 36,
    fontFamily: 'CormorantGaramond_300Light',
    fontSize: 10, color: '#c4a0b0', letterSpacing: 3,
  },
})
