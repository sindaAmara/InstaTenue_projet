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
        details: [
          [
            require("../assets/img/printemps/chic/pantalon_marron.jpeg"),
            require("../assets/img/printemps/chic/chemise_marron_rayure.jpeg"),
            require("../assets/img/printemps/chic/chaussure_marron.jpeg"),
            require("../assets/img/printemps/chic/sac_noir.jpeg"),
          ],
          [], 
          [], 
        ],
        articles: [
        [
          { label: 'Haut',      name: 'Chemise rayée',   price: '39 €', image: require('../assets/img/printemps/chic/chemise_marron_rayure.jpeg') },
          { label: 'Bas',       name: 'Pantalon marron', price: '59 €', image: require('../assets/img/printemps/chic/pantalon_marron.jpeg') },
          { label: 'Chaussures',name: 'Mocassins',        price: '89 €', image: require('../assets/img/printemps/chic/chaussure_marron.jpeg') },
          { label: 'Sac',       name: 'Sac structuré',   price: '120 €',image: require('../assets/img/printemps/chic/sac_noir.jpeg') },
          { label: 'Accessoire',name: 'Ceinture dorée',  price: '25 €', image: require('../assets/img/printemps/chic/chemise_marron_rayure.jpeg') },
        ],
        [], 
        [],
],
      },
      {
        name: "Sport",
        items: [
          require("../assets/img/printemps/sport/tenue_1.jpeg"),
          require("../assets/img/printemps/sport/tenue_2.jpeg"),
          require("../assets/img/printemps/sport/tenue_3.jpeg"),
        ],
        details: [
          [], [], []
        ],
      },
    ],
  },
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