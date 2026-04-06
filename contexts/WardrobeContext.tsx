import { createContext, useContext, useState, ReactNode } from 'react'
import { outfits, Outfit } from '../data/fakeData'

type WardrobeContextType = {
  allOutfits: typeof outfits
  selectedId: number | null
  setSelectedId: (id: number | null) => void
}

const WardrobeContext = createContext<WardrobeContextType | null>(null)

export function WardrobeProvider({ children }: { children: ReactNode }) {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <WardrobeContext.Provider value={{ allOutfits: outfits, selectedId, setSelectedId }}>
      {children}
    </WardrobeContext.Provider>
  )
}

export function useWardrobe() {
  const ctx = useContext(WardrobeContext)
  if (!ctx) throw new Error('useWardrobe must be used inside WardrobeProvider')
  return ctx
}