import { createContext, useContext, useState, useMemo, ReactNode } from 'react'
import { SEASONS, STYLES } from '../data/fakeData'
import { useWardrobe } from './WardrobeContext'

type FilterContextType = {
  activeSeason: string | null
  setActiveSeason: (s: string | null) => void
  activeStyle: string | null
  setActiveStyle: (s: string | null) => void
  filteredOutfits: ReturnType<typeof useWardrobe>['allOutfits']
  clearFilters: () => void
  hasFilter: boolean
}

const FilterContext = createContext<FilterContextType | null>(null)

export function FilterProvider({ children }: { children: ReactNode }) {
  const { allOutfits } = useWardrobe()
  const [activeSeason, setActiveSeason] = useState<string | null>(null)
  const [activeStyle,  setActiveStyle]  = useState<string | null>(null)

  const filteredOutfits = useMemo(() =>
    allOutfits
      .filter(s => !activeSeason || s.season === activeSeason)
      .map(s => ({
        ...s,
        themes: s.themes.filter(t => !activeStyle || t.name === activeStyle),
      }))
      .filter(s => s.themes.length > 0),
    [allOutfits, activeSeason, activeStyle]
  )

  const clearFilters = () => { setActiveSeason(null); setActiveStyle(null) }
  const hasFilter = !!(activeSeason || activeStyle)

  return (
    <FilterContext.Provider value={{
      activeSeason, setActiveSeason,
      activeStyle,  setActiveStyle,
      filteredOutfits, clearFilters, hasFilter,
    }}>
      {children}
    </FilterContext.Provider>
  )
}

export function useFilter() {
  const ctx = useContext(FilterContext)
  if (!ctx) throw new Error('useFilter must be used inside FilterProvider')
  return ctx
}