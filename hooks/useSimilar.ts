import { useWardrobe } from '../contexts/WardrobeContext'

export function useSimilar(season: string, themeName: string, currentIdx: number) {
  const { allOutfits } = useWardrobe()

  const seasonData = allOutfits.find(s => s.season === season)
  const themeData  = seasonData?.themes.find(t => t.name === themeName)

  if (!themeData) return []

  return themeData.items
    .map((img, i) => ({ img, index: i }))
    .filter(({ index }) => index !== currentIdx)
}