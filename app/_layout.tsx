import {
  CormorantGaramond_300Light,
  CormorantGaramond_300Light_Italic,
  CormorantGaramond_400Regular,
} from '@expo-google-fonts/cormorant-garamond'
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_400Regular_Italic,
  useFonts,
} from '@expo-google-fonts/playfair-display'
import { Slot } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'

import { FavoritesProvider } from '../contexts/FavoritesContext'
import { FilterProvider } from '../contexts/FilterContext'
import { WardrobeProvider } from '../contexts/WardrobeContext'

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