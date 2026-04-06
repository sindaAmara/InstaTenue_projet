// data/fakeData.ts

type Article = {
  label: string  
  name: string
  price: string
  image: ReturnType<typeof require>
}

type Theme = { 
  name: string
  items: ReturnType<typeof require>[]
  details?: ReturnType<typeof require>[][]
  articles?: Article[][] 
}

type Season = {
  season: string
  themes: Theme[]
}

export const outfits: Season[] = [

  // 🌸 PRINTEMPS
  {
    season: "Printemps",
    themes: [
      {
        name: "Chic",
        items: [
          require("../assets/img/printemps/chic/tenue_1.jpeg"),
          require("../assets/img/printemps/chic/tenue_2.jpeg"),
          require("../assets/img/printemps/chic/tenue_3.jpeg"),
        ],
        articles: [
          [
            { label: 'Haut', name: 'Chemise rayée', price: '39 €', image: require('../assets/img/printemps/chic/chemise_marron_rayure.jpeg') },
            { label: 'Bas', name: 'Pantalon marron', price: '59 €', image: require('../assets/img/printemps/chic/pantalon_marron.jpeg') },
            { label: 'Chaussures', name: 'Baskets', price: '89 €', image: require('../assets/img/printemps/chic/chaussure_marron.jpeg') },
            { label: 'Sac', name: 'Sac structuré', price: '120 €', image: require('../assets/img/printemps/chic/sac_noir.jpeg') },
            { label: 'Accessoire', name: 'Lunettes', price: '25 €', image: require('../assets/img/printemps/chic/lunette_celine.jpeg') },
          ],
          [
            { label: 'Haut', name: 'Chemise Bleu', price: '39 €', image: require('../assets/img/printemps/chic/chemise_bleu.jpeg') },
            { label: 'Bas', name: 'Pantalon', price: '59 €', image: require('../assets/img/printemps/chic/pantalon_marron.jpeg') },
            { label: 'Chaussures', name: 'Mocassins', price: '89 €', image: require('../assets/img/printemps/chic/mocassin_marron.jpeg') },
            { label: 'Sac', name: 'Sac', price: '120 €', image: require('../assets/img/printemps/chic/sac_marron.jpeg') },
            { label: 'Accessoire', name: 'Ceinture', price: '25 €', image: require('../assets/img/printemps/chic/ceinture_marron.jpeg') },
          ],
          [
            { label: 'Haut', name: 'Pull', price: '39 €', image: require('../assets/img/printemps/chic/pull_rouge.jpeg') },
            { label: 'Bas', name: 'Pantalon', price: '59 €', image: require('../assets/img/printemps/chic/pantalon_gris.jpeg') },
            { label: 'Chaussures', name: 'Talons', price: '89 €', image: require('../assets/img/printemps/chic/talon_rouge.jpeg') },
            { label: 'Accessoire', name: 'Lunettes', price: '120 €', image: require('../assets/img/printemps/chic/lunette_celine.jpeg') },
            { label: 'Accessoire', name: 'Ceinture', price: '25 €', image: require('../assets/img/printemps/chic/ceinture_noir.jpeg') },
          ],
        ],
      },
      {
        name: "Sport",
        items: [
          require("../assets/img/printemps/sport/tenue_1.jpeg"),
          require("../assets/img/printemps/sport/tenue_2.jpeg"),
          require("../assets/img/printemps/sport/tenue_3.jpeg"),
        ],
        articles: [
          [
            { label: 'Haut', name: 'Chemise Blanche', price: '39 €', image: require('../assets/img/printemps/sport/chemise_blanc.jpeg') },
            { label: 'Haut', name: 'Haut Noir', price: '59 €', image: require('../assets/img/printemps/sport/haut_noir.jpeg') },
            { label: 'Bas', name: 'cycliste ', price: '89 €', image: require('../assets/img/printemps/sport/short_noir_tenue_1.jpeg') },
            { label: 'Chaussures', name: 'Baskets', price: '120 €', image: require('../assets/img/printemps/sport/chaussure_blanc.jpeg') },
            { label: 'Accessoire', name: 'Lunettes', price: '25 €', image: require('../assets/img/printemps/sport/lunette_soleil.jpeg') },
          ],
          [
            { label: 'Haut', name: 'Veste Bleue', price: '39 €', image: require('../assets/img/printemps/sport/veste_bleu.jpeg') },
            { label: 'Haut', name: 'Haut Noir', price: '59 €', image: require('../assets/img/printemps/sport/haut_noir.jpeg') },
            { label: 'Bas', name: 'cycliste ', price: '89 €', image: require('../assets/img/printemps/sport/short_noir_tenue_1.jpeg') },
            { label: 'Chaussures', name: 'Baskets', price: '120 €', image: require('../assets/img/printemps/sport/chaussures.jpeg') },
            { label: 'Accessoire', name: 'Casquette', price: '25 €', image: require('../assets/img/printemps/sport/casquette.jpeg') },
          ],
          [
            { label: 'Haut', name: 'T-shirt Rouge', price: '39 €', image: require('../assets/img/printemps/sport/tshirt_rouge.jpeg') },
            { label: 'bas', name: 'Legging', price: '59 €', image: require('../assets/img/printemps/sport/legging_noir.jpeg') },
            { label: 'Sac', name: 'Sac ', price: '89 €', image: require('../assets/img/printemps/sport/legging_noir.jpeg') },
            { label: 'Chaussures', name: 'Baskets', price: '120 €', image: require('../assets/img/printemps/sport/sac_noir.jpeg') },
            { label: 'Accessoire', name: 'Chaussettes', price: '25 €', image: require('../assets/img/printemps/sport/chaussette.jpeg') },
          ],
        ],
      },
    ],
  },

  // ☀️ ÉTÉ
  {
    season: "Été",
    themes: [
      {
        name: "Chic",
        items: [
          require("../assets/img/ete/chic/tenue_1.jpeg"),
          require("../assets/img/ete/chic/tenue_2.jpeg"),
          require("../assets/img/ete/chic/tenue_3.jpeg"),
        ],
      },
      {
        name: "Sport",
        items: [
          require("../assets/img/ete/sport/tenue_1.jpeg"),
          require("../assets/img/ete/sport/tenue_2.jpeg"),
          require("../assets/img/ete/sport/tenue_3.jpeg"),
        ],
      },
    ],
  },

  // 🍂 AUTOMNE
  {
    season: "Automne",
    themes: [
      {
        name: "Chic",
        items: [
          require("../assets/img/automne/chic/tenue_1.jpeg"),
          require("../assets/img/automne/chic/tenue_2.jpeg"),
          require("../assets/img/automne/chic/tenue_3.jpeg"),
        ],
      },
      {
        name: "Sport",
        items: [
          require("../assets/img/automne/sport/tenue_1.jpeg"),
          require("../assets/img/automne/sport/tenue_2.jpeg"),
          require("../assets/img/automne/sport/tenue_3.jpeg"),
        ],
      },
    ],
  },

  // ❄️ HIVER
  {
    season: "Hiver",
    themes: [
      {
        name: "Chic",
        items: [
          require("../assets/img/hiver/chic/tenue_1.jpeg"),
          require("../assets/img/hiver/chic/tenue_2.jpeg"),
          require("../assets/img/hiver/chic/tenue_3.jpeg"),
        ],
      },
      {
        name: "Sport",
        items: [
          require("../assets/img/hiver/sport/tenue_1.jpeg"),
          require("../assets/img/hiver/sport/tenue_2.jpeg"),
          require("../assets/img/hiver/sport/tenue_3.jpeg"),
        ],
      },
    ],
  },

]