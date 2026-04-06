import { useEffect } from 'react'
import { Slot } from 'expo-router'
import {
  useFonts,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_400Regular_Italic,
} from '@expo-google-fonts/playfair-display'
import {
  CormorantGaramond_300Light,
  CormorantGaramond_300Light_Italic,
  CormorantGaramond_400Regular,
} from '@expo-google-fonts/cormorant-garamond'
import * as SplashScreen from 'expo-splash-screen'

import { WardrobeProvider } from '../contexts/WardrobeContext'
import { FilterProvider }   from '../contexts/FilterContext'
import { FavoritesProvider } from '../contexts/FavoritesContext'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_400Regular_Italic,
    CormorantGaramond_300Light,
    CormorantGaramond_300Light_Italic,
    CormorantGaramond_400Regular,
  })

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  // ✅ Slot = point d'injection des pages Expo Router
  // Les providers wrappent Slot → tous les écrans y ont accès
  return (
    <WardrobeProvider>
      <FavoritesProvider>
        <FilterProvider>
          <Slot />
        </FilterProvider>
      </FavoritesProvider>
    </WardrobeProvider>
  )
}