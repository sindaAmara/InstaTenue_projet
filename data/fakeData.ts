// data/fakeData.ts
//test

type Article = {
  label: string  
  name: string
  price: string
  image: any
  brand?: string
  ref?: string
}

type Theme = { 
  name: string
  items: any[]
  details?: any[][]
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
        articles: [
          [
            { label: 'Haut', name: 'Chemise rayée', price: '29 €', brand: 'Sandro', ref: 'SAN-2026-H01', image: require('../assets/img/printemps/chic/chemise_marron_rayure.jpeg') },
            { label: 'Bas', name: 'Pantalon marron', price: '39 €', brand: 'Maje', ref: 'MAJ-2026-B04', image: require('../assets/img/printemps/chic/pantalon_marron.jpeg') },
            { label: 'Chaussures', name: 'Baskets', price: '89 €', brand: 'Veja', ref: 'VEJ-2026-C12', image: require('../assets/img/printemps/chic/chaussure_marron.jpeg') },
            { label: 'Sac', name: 'Sac structuré', price: '100 €', brand: 'A.P.C.', ref: 'APC-2026-S03', image: require('../assets/img/printemps/chic/sac_noir.jpeg') },
            { label: 'Accessoire', name: 'Lunettes', price: '25 €', brand: 'Céline', ref: 'CEL-2026-A07', image: require('../assets/img/printemps/chic/lunette_celine.jpeg') },
          ],
          [
            { label: 'Haut', name: 'Chemise Bleu', price: '25 €', brand: 'Jacquemus', ref: 'JAC-2026-H03', image: require('../assets/img/printemps/chic/chemise_bleu.jpeg') },
            { label: 'Bas', name: 'Pantalon', price: '49 €', brand: 'Sandro', ref: 'SAN-2026-B02', image: require('../assets/img/printemps/chic/pantalon_marron.jpeg') },
            { label: 'Chaussures', name: 'Mocassins', price: '89 €', brand: 'Minelli', ref: 'MIN-2026-C05', image: require('../assets/img/printemps/chic/mocassin_marron.jpeg') },
            { label: 'Sac', name: 'Sac', price: '85 €', brand: 'Polène', ref: 'POL-2026-S01', image: require('../assets/img/printemps/chic/sac_marron.jpeg') },
            { label: 'Accessoire', name: 'Ceinture', price: '15 €', brand: 'Maje', ref: 'MAJ-2026-A02', image: require('../assets/img/printemps/chic/ceinture_marron.jpeg') },
          ],
          [
            { label: 'Haut', name: 'Pull', price: '37 €', brand: 'ba&sh', ref: 'BAS-2026-H06', image: require('../assets/img/printemps/chic/pull_rouge.jpeg') },
            { label: 'Bas', name: 'Pantalon', price: '53 €', brand: 'Comptoir des Cotonniers', image: require('../assets/img/printemps/chic/pantalon_gris.jpeg') },
            { label: 'Chaussures', name: 'Talons', price: '79 €', brand: 'Minelli', ref: 'MIN-2026-C08',  image: require('../assets/img/printemps/chic/talon_rouge.jpeg') },
            { label: 'Accessoire', name: 'Lunettes', price: '35 €', brand: 'Céline', ref: 'CEL-2026-A07', image: require('../assets/img/printemps/chic/lunette_celine.jpeg') },
            { label: 'Accessoire', name: 'Ceinture', price: '20 €', brand: 'Sandro', ref: 'SAN-2026-A01', image: require('../assets/img/printemps/chic/ceinture_noir.jpeg') },
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
            { label: 'Haut', name: 'Chemise Blanche', price: '29 €', brand: 'Zara', ref: 'ZARA-2026-H01', image: require('../assets/img/printemps/sport/chemise_blanc.jpeg') },
            { label: 'Haut', name: 'Haut Noir', price: '12 €', brand: 'Bershka', ref: 'BERSH-2026-H02', image: require('../assets/img/printemps/sport/haut_noir.jpeg') },
            { label: 'Bas', name: 'cycliste ', price: '15 €', brand: 'Gymshark', ref: 'GYM-2026-B01', image: require('../assets/img/printemps/sport/short_noir_tenue_1.jpeg') },
            { label: 'Chaussures', name: 'Baskets', price: '99 €', brand: 'Nike', ref: 'NIK-2026-C01', image: require('../assets/img/printemps/sport/chaussure_blanc.jpeg') },
            { label: 'Accessoire', name: 'Lunettes', price: '25 €', brand: 'Oakley', ref: 'OAK-2026-A01', image: require('../assets/img/printemps/sport/lunette_soleil.jpeg') },
          ],
          [
            { label: 'Haut', name: 'Veste Bleue', price: '39 €',brand:'H&M', ref:'HM-2026-H03', image: require('../assets/img/printemps/sport/veste_bleu.jpeg') },
            { label: 'Haut', name: 'Haut Noir', price: '29 €',brand: 'Adidas', ref: 'ADI-2026-H02', image: require('../assets/img/printemps/sport/haut_noir.jpeg') },
            { label: 'Bas', name: 'cycliste ', price: '18 €', brand: 'Gymshark', ref: 'GYM-2026-B01', image: require('../assets/img/printemps/sport/short_noir_tenue_1.jpeg') },
            { label: 'Chaussures', name: 'Baskets', price: '100 €', brand: 'New Balance', ref: 'NB-2026-C03', image: require('../assets/img/printemps/sport/chaussures.jpeg') },
            { label: 'Accessoire', name: 'Casquette', price: '25 €', brand: 'Nike', ref: 'NIK-2026-A02', image: require('../assets/img/printemps/sport/casquette.jpeg') },
          ],
          [
            { label: 'Haut', name: 'T-shirt Rouge', price: '17 €', brand: 'Puma', ref: 'PUM-2026-H01', image: require('../assets/img/printemps/sport/tshirt_rouge.jpeg') },
            { label: 'bas', name: 'Legging', price: '25 €', brand: 'Gymshark', ref: 'GYM-2026-B02', image: require('../assets/img/printemps/sport/legging_noir.jpeg') },
            { label: 'Sac', name: 'Sac ', price: '59 €', brand: 'Adidas', ref: 'ADI-2026-S01', image: require('../assets/img/printemps/sport/legging_noir.jpeg') },
            { label: 'Chaussures', name: 'Baskets', price: '120 €',brand: 'Nike', ref: 'NIK-2026-C02', image: require('../assets/img/printemps/sport/sac_noir.jpeg') },
            { label: 'Accessoire', name: 'Chaussettes', price: '10 €', brand: 'Stance', ref: 'STA-2026-A01', image: require('../assets/img/printemps/sport/chaussette.jpeg') },
          ],
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
        articles: [
          [
            { label: 'Haut', name: 'Débardeur', price: '19 €', brand: 'Jacquemus', ref: 'JAC-2026-H04', image: require('../assets/img/ete/chic/tshirt_blanc.jpeg') },
            { label: 'Bas', name: 'Short ', price: '59 €', brand: 'Maje', ref: 'MAJ-2026-B05', image: require('../assets/img/ete/chic/short_noir.jpeg') },
            { label: 'Chaussures', name: 'Talons', price: '89 €', brand: 'Minelli', ref: 'MIN-2026-C09', image: require('../assets/img/ete/chic/chaussure_beige.jpeg') },
            { label: 'Sac', name: 'Sac', price: '120 €', brand: 'Polène', ref: 'POL-2026-S02', image: require('../assets/img/ete/chic/sac_noir.jpeg') },
            { label: 'Accessoire', name: 'Lunettes', price: '25 €', brand: 'Céline', ref: 'CEL-2026-A08', image: require('../assets/img/ete/chic/lunette.jpeg') },
          ],
          [
            { label: 'Haut', name: 'Débardeur', price: '19 €',brand: 'ba&sh', ref: 'BAS-2026-H07', image: require('../assets/img/ete/chic/tshirt_marron.jpeg') },
            { label: 'Bas', name: 'Short', price: '25 €',brand: 'Sandro', ref: 'SAN-2026-B06',  image: require('../assets/img/ete/chic/short_blanc.jpeg') },
            { label: 'Chaussures', name: 'Mocassins', price: '79 €',brand: 'Minelli', ref: 'MIN-2026-C05', image: require('../assets/img/printemps/chic/mocassin_marron.jpeg') },
            { label: 'Sac', name: 'Sac', price: '110 €',brand: 'A.P.C.', ref: 'APC-2026-S04', image: require('../assets/img/ete/chic/sac_marron.jpeg') },
            { label: 'Accessoire', name: 'Ceinture', price: '25 €',brand: 'Maje', ref: 'MAJ-2026-A03', image: require('../assets/img/ete/chic/ceinture_marron.jpeg') },
          ],
          [
            { label: 'Haut', name: 'Body', price: '26 €',brand: 'Jacquemus', ref: 'JAC-2026-H05', image: require('../assets/img/ete/chic/haut_noir.jpeg') },
            { label: 'Bas', name: 'Short', price: '29 €', brand: 'Comptoir des Cotonniers', ref: 'CDC-2026-B04', image: require('../assets/img/ete/chic/short_beige.jpeg') },
            { label: 'Chaussures', name: 'Talons', price: '89 €',brand: 'Minelli', ref: 'MIN-2026-C09', image: require('../assets/img/ete/chic/chaussure_beige.jpeg') },
            { label: 'Sac', name: 'Sac', price: '105 €',brand: 'Polène', ref: 'POL-2026-S02',  image: require('../assets/img/ete/chic/sac_noir.jpeg') },
            { label: 'Accessoire', name: 'Ceinture', price: '20 €', brand: 'Sandro', ref: 'SAN-2026-A02', image: require('../assets/img/ete/chic/ceinture_noir.jpeg') },
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
            { label: 'Haut', name: 'T-shirt', price: '39 €', brand: 'Nike', ref: 'NIK-2026-H03', image: require('../assets/img/ete/sport/tshirt_blanc.jpeg') },
            { label: 'Bas', name: 'Short en Jean ', price: '49 €',brand: 'Levi\'s', ref: 'LEV-2026-B01', image: require('../assets/img/ete/sport/short_bleu.jpeg') },
            { label: 'Chaussures', name: 'Baskets', price: '89 €',brand: 'New Balance', ref: 'NB-2026-C04', image: require('../assets/img/ete/sport/chaussures_blanc.jpeg') },
            { label: 'Sac', name: 'Sac', price: '120 €',brand: 'Adidas', ref: 'ADI-2026-S02', image: require('../assets/img/ete/sport/sac_noir.jpeg') },
            { label: 'Accessoire', name: 'Lunettes', price: '25 €', brand: 'Oakley', ref: 'OAK-2026-A02', image: require('../assets/img/ete/chic/lunette.jpeg') },
          ],
          [
            { label: 'Haut', name: 'T-shirt', price: '29 €',brand: 'Puma', ref: 'PUM-2026-H02', image: require('../assets/img/ete/sport/tshirt_blanc.jpeg') },
            { label: 'Bas', name: 'Cycliste', price: '20 €',brand: 'Gymshark', ref: 'GYM-2026-B03', image: require('../assets/img/ete/sport/short_noir.jpeg') },
            { label: 'Chaussures', name: 'Baskets', price: '89 €',brand: 'Nike', ref: 'NIK-2026-C03', image: require('../assets/img/ete/sport/chaussures_blanc.jpeg') },
            { label: 'Sac', name: 'Sac', price: '120 €', brand: 'Adidas', ref: 'ADI-2026-S02', image: require('../assets/img/ete/sport/sac_noir.jpeg') },
            { label: 'Accessoire', name: 'Lunettes', price: '25 €',brand: 'Oakley', ref: 'OAK-2026-A02', image: require('../assets/img/ete/chic/lunette.jpeg') },
          ],
          [
            { label: 'Haut', name: 'T-shirt', price: '39 €', brand: 'Nike', ref: 'NIK-2026-H04', image: require('../assets/img/ete/sport/tshirt_rose.jpeg') },
            { label: 'Bas', name: 'Short en Jean ', price: '39 €',brand: 'Levi\'s', ref: 'LEV-2026-B01', image: require('../assets/img/ete/sport/short_bleu.jpeg') },
            { label: 'Chaussures', name: 'Baskets', price: '89 €',brand: 'New Balance', ref: 'NB-2026-C04', image: require('../assets/img/ete/sport/chaussures_blanc.jpeg') },
            { label: 'Sac', name: 'Sac', price: '120 €', brand: 'Adidas', ref: 'ADI-2026-S02', image: require('../assets/img/ete/sport/sac_noir.jpeg') },
            { label: 'Accessoire', name: 'Ceinture', price: '25 €', brand: 'Nike', ref: 'NIK-2026-A03', image: require('../assets/img/ete/sport/ceinture_noir.jpeg') },
          ],
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
