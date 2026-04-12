# InstaTenue
Application mobile de garde-robe interactive, développée avec **React Native** et **Expo Router**.  
Parcourez vos tenues par saison et thème, explorez les articles qui les composent via des points interactifs, et découvrez des tenues similaires.

---

## Équipe

Projet créé et pensé par :

- Amara Sinda
- Poghossian Mariam
- Roffidal Ambre

---

## Fonctionnalités
- **Navigation par saison & thème** — Organisez votre garde-robe selon les saisons (Printemps, Été, Automne, Hiver) et des thèmes stylistiques
- **Points interactifs sur les photos** — Cliquez sur les dots animés pour afficher les détails d'un article (nom, prix, marque, référence)
- **Animations pulsées** — Les dots non encore touchés pulsent pour inviter à l'interaction
-  **Tenues similaires** — Retrouvez d'autres tenues du même thème en bas de chaque page
-  **Contexte global de garde-robe** — Les données sont partagées via un `WardrobeContext`

---

## Structure du projet
```
InstaTenue_projet/
├── app/
│   ├── outfit/
│   │   └── [id].tsx
|   ├── _layout.tsx
|   ├── home.tsx
|   ├── index.tsx        
│   └──  outfitDetail.tsx
├── assets/
|   └── img/    
├── components/
|   ├──filters
|   |  └── FilterPanel.tsx
│   └── outfit/
|       ├── OutfitGrid.tsx
│       └── SimilarOutfits.tsx
├── constants/
|   └── theme.ts
├── contexts/
│   ├── WardrobeContext.tsx
|   ├── FilterContext.tsx
|   └── FavoritesContexts.tsx
├── data/
|   └── fakeData.ts
└──hooks/
   └──useSimilar.ts
```

---

## Installation
```bash
# Cloner le projet
git clone https://github.com/sindaAmara/InstaTenue_projet.git
cd InstaTenue_projet

# Installer les dépendances
npm install

# Lancer l'application
npm run start 
```

---

## Dépendances principales
| Package | Rôle |
|---|---|
| `expo` | Framework mobile |
| `expo-router` | Navigation par fichiers |
| `react-native` | UI native |
| `@expo-google-fonts/cormorant-garamond` | Police Cormorant Garamond |
| `@expo-google-fonts/playfair-display` | Police Playfair Display |

---

## Design System
| Variable | Valeur | Usage |
|---|---|---|
| `ROSE` | `#c87090` | Accents, prix, labels |
| `DARK` | `#3d1a2e` | Textes principaux |
| `CREAM` | `#fdf0f5` | Fond général |
| `MID` | `#a06080` | Textes secondaires |

---

## Navigation
Les routes utilisent **Expo Router** avec paramètres d'URL :
```
/outfit/[id]?season=Automne&theme=Chic
```
| Paramètre | Type | Description |
|---|---|---|
| `season` | `string` | Saison (ex: `"Été"`) |
| `theme` | `string` | Thème stylistique (ex: `"Chic"`) |
| `id` / `outfitIndex` | `number` | Index de la tenue dans le thème |

---

## Notes techniques
- `useNativeDriver: false` est utilisé sur les animations — nécessaire pour Expo Go et le web (le module natif `RCTAnimation` n'est pas disponible dans ces environnements)
- `pointerEvents` est défini dans les objets `style` (la prop directe est dépréciée dans les versions récentes de React Native)
- `boxShadow` remplace les anciennes props `shadow*` (dépréciées sur web)

---

## Aperçu
```
┌─────────────────────────┐
│  ← Retour               │
│  Bohème                 │
│  ÉTÉ                    │
│  ┌───────────────────┐  │
│  │ •               • │  │  ← "Haut" / "Bas" (droite)
│  │ •  [Photo tenue]  │  │
│  │ •               • │  │  ← "Accessoires / Manteau(Vestes)" (gauche)
│  └───────────────────┘  │
│  Tenue 1                │
│  3 articles · Bohème    │
│                         │
│ ── Tenues similaires ── │
│  [img] [img]            │
└─────────────────────────┘
```

---

## Licence
Projet personnel — INSTA'TENUE · 2026
