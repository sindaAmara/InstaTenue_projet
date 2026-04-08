// data/fakeData.ts
//test

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
        articles: [
          [
            { label: 'Haut', name: 'Débardeur', price: '39 €', image: require('../assets/img/ete/chic/tshirt_blanc.jpeg') },
            { label: 'Bas', name: 'Short ', price: '59 €', image: require('../assets/img/ete/chic/short_noir.jpeg') },
            { label: 'Chaussures', name: 'Talons', price: '89 €', image: require('../assets/img/ete/chic/chaussure_beige.jpeg') },
            { label: 'Sac', name: 'Sac', price: '120 €', image: require('../assets/img/ete/chic/sac_noir.jpeg') },
            { label: 'Accessoire', name: 'Lunettes', price: '25 €', image: require('../assets/img/ete/chic/lunette.jpeg') },
          ],
          [
            { label: 'Haut', name: 'Débardeur', price: '39 €', image: require('../assets/img/ete/chic/tshirt_marron.jpeg') },
            { label: 'Bas', name: 'Short', price: '59 €', image: require('../assets/img/ete/chic/short_blanc.jpeg') },
            { label: 'Chaussures', name: 'Mocassins', price: '89 €', image: require('../assets/img/printemps/chic/mocassin_marron.jpeg') },
            { label: 'Sac', name: 'Sac', price: '120 €', image: require('../assets/img/ete/chic/sac_marron.jpeg') },
            { label: 'Accessoire', name: 'Ceinture', price: '25 €', image: require('../assets/img/ete/chic/ceinture_marron.jpeg') },
          ],
          [
            { label: 'Haut', name: 'Body', price: '39 €', image: require('../assets/img/ete/chic/haut_noir.jpeg') },
            { label: 'Bas', name: 'Short', price: '59 €', image: require('../assets/img/ete/chic/short_beige.jpeg') },
            { label: 'Chaussures', name: 'Talons', price: '89 €', image: require('../assets/img/ete/chic/chaussure_beige.jpeg') },
            { label: 'Sac', name: 'Sac', price: '120 €', image: require('../assets/img/ete/chic/sac_noir.jpeg') },
            { label: 'Accessoire', name: 'Ceinture', price: '25 €', image: require('../assets/img/ete/chic/ceinture_noir.jpeg') },
          ],
        ],
      },
      {
        name: "Sport",
        items: [
          require("../assets/img/ete/sport/tenue_1.jpeg"),
          require("../assets/img/ete/sport/tenue_2.jpeg"),
          require("../assets/img/ete/sport/tenue_3.jpeg"),
        ],
        articles: [
          [
            { label: 'Haut', name: 'T-shirt', price: '39 €', image: require('../assets/img/ete/sport/tshirt_blanc.jpeg') },
            { label: 'Bas', name: 'Short en Jean ', price: '59 €', image: require('../assets/img/ete/sport/short_bleu.jpeg') },
            { label: 'Chaussures', name: 'Baskets', price: '89 €', image: require('../assets/img/ete/sport/chaussures_blanc.jpeg') },
            { label: 'Sac', name: 'Sac', price: '120 €', image: require('../assets/img/ete/sport/sac_noir.jpeg') },
            { label: 'Accessoire', name: 'Lunettes', price: '25 €', image: require('../assets/img/ete/chic/lunette.jpeg') },
          ],
          [
            { label: 'Haut', name: 'T-shirt', price: '39 €', image: require('../assets/img/ete/sport/tshirt_blanc.jpeg') },
            { label: 'Bas', name: 'Cycliste', price: '59 €', image: require('../assets/img/ete/sport/short_noir.jpeg') },
            { label: 'Chaussures', name: 'Baskets', price: '89 €', image: require('../assets/img/ete/sport/chaussures_blanc.jpeg') },
            { label: 'Sac', name: 'Sac', price: '120 €', image: require('../assets/img/ete/sport/sac_noir.jpeg') },
            { label: 'Accessoire', name: 'Lunettes', price: '25 €', image: require('../assets/img/ete/chic/lunette.jpeg') },
          ],
          [
            { label: 'Haut', name: 'T-shirt', price: '39 €', image: require('../assets/img/ete/sport/tshirt_rose.jpeg') },
            { label: 'Bas', name: 'Short en Jean ', price: '59 €', image: require('../assets/img/ete/sport/short_bleu.jpeg') },
            { label: 'Chaussures', name: 'Baskets', price: '89 €', image: require('../assets/img/ete/sport/chaussures_blanc.jpeg') },
            { label: 'Sac', name: 'Sac', price: '120 €', image: require('../assets/img/ete/sport/sac_noir.jpeg') },
            { label: 'Accessoire', name: 'Ceinture', price: '25 €', image: require('../assets/img/ete/sport/ceinture_noir.jpeg') },
          ],
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
        articles: [
          [
            { label: 'Haut', name: 'Chemise Bleue', price: '35 €', image: require('../assets/img/automne/chic/chemise_bleu_rayure.jpeg') },
            { label: 'Haut', name: 'Pull bleu', price: '25 €', image: require('../assets/img/automne/chic/pull_bleu.jpeg') },
            { label: 'Bas', name: 'Jean ', price: '39 €', image: require('../assets/img/automne/chic/jean_bleu_foncé.jpeg') },
            { label: 'Accessoire', name: 'Ceinture', price: '12 €', image: require('../assets/img/automne/chic/ceinture_marron.jpeg') },
            { label: 'Sac', name: 'Sac', price: '25 €', image: require('../assets/img/automne/chic/sac_marron.jpeg') },
          ],
          [
            { label: 'Haut', name: 'Pull Beige', price: '39 €', image: require('../assets/img/automne/chic/pull_blanc.jpeg') },
            { label: 'Bas', name: 'Pantalon noir', price: '59 €', image: require('../assets/img/automne/chic/pantalon_noir.jpeg') },
            { label: 'Accessoire', name: 'Coque ', price: '5 €', image: require('../assets/img/automne/chic/coque.jpeg') },
            { label: 'Chaussures', name: 'Baskets', price: '120 €', image: require('../assets/img/automne/chic/chaussure_blanc.jpeg') },
            { label: 'Accessoire', name: 'Boucles doreilles', price: '25 €', image: require('../assets/img/automne/chic/boucle_oreille.jpeg') },
          ],
          [
            { label: 'Haut', name: 'Chemise blanche', price: '39 €', image: require('../assets/img/automne/chic/chemise_blanc.jpeg') },
            { label: 'Bas', name: 'Pantalon gris', price: '59 €', image: require('../assets/img/automne/chic/pantalon_gris.jpeg') },
            { label: 'Sac', name: 'Sac ', price: '89 €', image: require('../assets/img/automne/chic/sac_rouge.jpeg') },
            { label: 'Accessoire', name: 'Foulard', price: '13 €', image: require('../assets/img/automne/chic/foulard.jpeg') },
            { label: 'Accessoire', name: 'Ceinture', price: '25 €', image: require('../assets/img/automne/chic/ceinture_noir.jpeg') },
          ],
        ],
      },
      {
        name: "Sport",
        items: [
          require("../assets/img/automne/sport/tenue_1.jpeg"),
          require("../assets/img/automne/sport/tenue_2.jpeg"),
          require("../assets/img/automne/sport/tenue_3.jpeg"),
        ],
        articles: [
          [
            { label: 'Accessoire', name: 'Casquette grise', price: '35 €', image: require('../assets/img/automne/sport/casquette_gris.jpeg') },
            { label: 'Haut', name: 'Sweat bleu', price: '25 €', image: require('../assets/img/automne/sport/sweat_bleu.jpeg') },
            { label: 'Haut', name: 'T-shirt blanc ', price: '9 €', image: require('../assets/img/automne/sport/t_shirt_blanc_large.jpeg') },
            { label: 'Bas', name: 'Jean bleu', price: '35 €', image: require('../assets/img/automne/sport/jean_bleu_clair.jpeg') },
            { label: 'Chaussures', name: 'Baskets', price: '250 €', image: require('../assets/img/automne/sport/chaussures_blanc.jpeg') },
          ],
          [
            { label: 'Accessoire', name: 'Casquette noire', price: '35 €', image: require('../assets/img/automne/sport/casquette_noir.jpeg') },
            { label: 'Haut', name: 'Sweat noir', price: '59 €', image: require('../assets/img/automne/sport/sweat_noir_nike.jpeg') },
            { label: 'Bas', name: 'Legging noir ', price: '18 €', image: require('../assets/img/automne/sport/legging_noir.jpeg') },
            { label: 'Chaussures', name: 'Baskets', price: '120 €', image: require('../assets/img/automne/sport/chaussure_blanc.jpeg') },
            { label: 'Accessoire', name: 'Sac noir', price: '25 €', image: require('../assets/img/automne/sport/sac_noir.jpeg') },
          ],
          [
            { label: 'Haut', name: 'Sweat gris', price: '39 €', image: require('../assets/img/automne/sport/sweat_gris.jpeg') },
            { label: 'Haut', name: 'T shirt blanc', price: '25 €', image: require('../assets/img/automne/sport/t_shirt_blanc_large.jpeg') },
            { label: 'Bas', name: 'Jogging noir', price: '59 €', image: require('../assets/img/automne/sport/pantalon_noir.jpeg') },
            { label: 'Chaussures', name: 'Baskets noires ', price: '89 €', image: require('../assets/img/automne/sport/chaussures_blanc.jpeg') },
            { label: 'Accessoire', name: 'Boucles oreilles', price: '13 €', image: require('../assets/img/automne/sport/boucle_oreille.jpeg') },

          ],
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
        articles: [
          [
            { label: 'Accessoire', name: 'Lunettes noires', price: '35 €', image: require('../assets/img/hiver/chic/lunette.jpeg') },
            { label: 'Accessoire', name: 'Manteau noir', price: '250 €', image: require('../assets/img/hiver/chic/manteau_noir.jpeg') },
            { label: 'Haut', name: 'Pull noir', price: '39 €', image: require('../assets/img/hiver/chic/pull_noir.jpeg') },
            { label: 'Bas', name: 'Jean bleu', price: '49 €', image: require('../assets/img/hiver/chic/jean_bleu.jpeg') },
            { label: 'Chaussures', name: 'Samba', price: '100 €', image: require('../assets/img/hiver/chic/chaussures.jpeg') },
          ],
          [
            { label: 'Accessoire', name: 'Lunettes', price: '39 €', image: require('../assets/img/hiver/chic/lunette.jpeg') },
            { label: 'Accessoire', name: 'Manteau bleu', price: '59 €', image: require('../assets/img/hiver/chic/manteau_bleu.jpeg') },
            { label: 'Haut', name: 'Pull blanc', price: '59 €', image: require('../assets/img/hiver/chic/pull_blanc.jpeg') },
            { label: 'Bas', name: 'Pantalon blanc', price: '50 €', image: require('../assets/img/hiver/chic/pantalon_blanc.jpeg') },
            { label: 'Sac', name: 'Sac bleu', price: '250 €', image: require('../assets/img/hiver/chic/sac_dior.jpeg') },
          ],
          [
            { label: 'Haut', name: 'Pull noir', price: '39 €', image: require('../assets/img/hiver/chic/pull_noir.jpeg') },
            { label: 'Accessoire', name: 'Manteau', price: '59 €', image: require('../assets/img/hiver/chic/manteau_marron.jpeg') },
            { label: 'Accessoire', name: 'Ceinture ', price: '29 €', image: require('../assets/img/hiver/chic/ceinture_noir.jpeg') },
            { label: 'Bas', name: 'Jean', price: '50 €', image: require('../assets/img/hiver/chic/jean_bleu.jpeg') },
            { label: 'Sac', name: 'Sac', price: '25 €', image: require('../assets/img/hiver/chic/sac_noir.jpeg') },
          ],
        ],
      },
      {
        name: "Sport",
        items: [
          require("../assets/img/hiver/sport/tenue_1.jpeg"),
          require("../assets/img/hiver/sport/tenue_2.jpeg"),
          require("../assets/img/hiver/sport/tenue_3.jpeg"),
        ],
        articles: [
          [
            { label: 'Accessoire', name: 'Boucles oreilles', price: '35 €', image: require('../assets/img/hiver/sport/creole.jpeg') },
            { label: 'Haut', name: 'Sweat noir', price: '250 €', image: require('../assets/img/hiver/sport/sweat_noir.jpeg') },
            { label: 'Bas', name: 'Jogging noir', price: '39 €', image: require('../assets/img/hiver/sport/jogging_noir.jpeg') },
            { label: 'Accessoire', name: 'Chaussettes blanches', price: '49 €', image: require('../assets/img/hiver/sport/chaussette.jpeg') },
            { label: 'Chaussures', name: 'Samba', price: '100 €', image: require('../assets/img/hiver/sport/chaussures.jpeg') },
          ],
          [
            { label: 'Accessoire', name: 'Veste bleue', price: '39 €', image: require('../assets/img/hiver/sport/veste_bleu.jpeg') },
            { label: 'Haut', name: 'Sweat bleu', price: '59 €', image: require('../assets/img/hiver/sport/sweat_bleu.jpeg') },
            { label: 'Bas', name: 'Jean noir', price: '59 €', image: require('../assets/img/hiver/sport/jean_noir.jpeg') },
            { label: 'Accessoire', name: 'Sac noir', price: '50 €', image: require('../assets/img/hiver/sport/sac_noir.jpeg') },
            { label: 'Accessoire', name: 'Chaussures bleues', price: '250 €', image: require('../assets/img/hiver/sport/chaussure_bleu.jpeg') },
          ],
          [
            { label: 'Haut', name: 'Bandeau blanc', price: '8 €', image: require('../assets/img/hiver/sport/bandeau.jpeg') },
            { label: 'Haut', name: 'Veste noir', price: '59 €', image: require('../assets/img/hiver/sport/veste_noir.jpeg') },
            { label: 'Bas', name: 'Legging noir ', price: '19 €', image: require('../assets/img/hiver/sport/legging_noir.jpeg') },
            { label: 'Sac', name: 'Sac noir', price: '15 €', image: require('../assets/img/hiver/sport/sac_noir.jpeg') },
            { label: 'Chaussures', name: 'Chaussures blanches', price: '100 €', image: require('../assets/img/hiver/sport/chaussures.jpeg') },
          ],
        ],
      },
    ],
  },
]