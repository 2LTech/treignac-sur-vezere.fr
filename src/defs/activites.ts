export interface Activite {
  key: string
  data: {
    type: ('adresse' | 'randonnee' | 'exterieur' | 'gastronomie')[]
    label: string
    description: string
    img?: string
    link?: string
    facebook?: string
    instagram?: string
    tiktok?: string
    maps?: string
  }
}

const activites: Activite[] = [
  {
    key: 'commerce',
    data: {
      type: ['adresse', 'gastronomie'],
      label: 'Le Café du Commerce',
      description:
        'Un café, une bière, quelque chose à grignoter, un match de rubgy, une soirée à thème, ... Il y a de tout au café du commerce.',
      img: 'https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/475488748_1137700661140785_641618944488317078_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=2a1932&_nc_ohc=3CiamGYrILEQ7kNvwHanFrl&_nc_oc=AdnTACke1yLFlRywCCGmuxJTjRX-PVMPhm73oA4AHIQdwsqfAzz_VFFuZmzrvN2WlF4bco1iGxAu0kQGsN6GxMp7&_nc_zt=23&_nc_ht=scontent-cdg4-3.xx&_nc_gid=C2EmiWWEoI09Pa86rQ1Hcw&_nc_ss=8&oh=00_AfzYl5QeLbVzaChDuxLZjSbTIAQZY2ptcsufOzBfPfkIsQ&oe=69BD9FE0',
      facebook: 'https://www.facebook.com/share/1AyWm81EuH/',
      maps: 'https://maps.app.goo.gl/QeMnifSmRgu9ffHYA',
    },
  },
  {
    key: 'foirail',
    data: {
      type: ['adresse'],
      label: 'Le Foirail',
      description: 'Bar, tabac, FDJ',
      img: 'https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/468841459_122114787992607902_5215407819079809197_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=2a1932&_nc_ohc=8T77ni4VLuoQ7kNvwGIpZP_&_nc_oc=AdkSNCFrdwnxB--ONMAOBwRKmagXNJdV4BFTRwXlwnJGtrRsVSUPWsHkaB3nMRcV3wYr48UDFqx4LLtMpgrXrJMF&_nc_zt=23&_nc_ht=scontent-cdg4-1.xx&_nc_gid=NVJKm2IprD5-P2pQmp4bzQ&_nc_ss=8&oh=00_AfxL8EEkvjhNFVnn6SnaVoaMoDCcZX9AVIwPK-fZ_3hLDQ&oe=69BDE9B2',
      facebook: 'https://www.facebook.com/profile.php?id=61568237086080',
      maps: 'https://maps.app.goo.gl/TecDcMVpoqvCGaEZ8',
    },
  },
  {
    key: 'cafe-de-paris',
    data: {
      type: ['adresse', 'gastronomie'],
      label: 'Café de Paris',
      description:
        'Restauration 7jours/7 du midi au soir, Bar, PMU, Papeterie, Librarie / Maison de la presse',
      img: 'https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/469626299_1146558507475820_5796548021587351215_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=2a1932&_nc_ohc=nxJURik320wQ7kNvwFCT4hL&_nc_oc=AdmRkzkq2DMqnfwh6WY60dE38tBEMOkwFur_jNt1YVtO2UOM9HETAIe0E16HLB_duhpCNxk8n_ZVIYKw0SpCS9Ew&_nc_zt=23&_nc_ht=scontent-cdg4-2.xx&_nc_gid=3EtK-AzyqwmeXsr7gsK3tQ&_nc_ss=8&oh=00_Afyn72moeh2d9W347lmwAKGGl2QUwO-4eLYoSrklBNo6nA&oe=69BDE968',
      facebook: 'https://www.facebook.com/p/CAFE-De-PARIS-100063650436817',
      maps: 'https://maps.app.goo.gl/WdaFB9mL967hjxGH7',
    },
  },
  {
    key: 'lac-des-bariousses',
    data: {
      type: ['exterieur'],
      label: 'Lac des Bariousses',
      description:
        'Plage, restaurant, pédalo, canoë/kayak, jeux pour enfants, ...',
      img: 'https://www.tourismecorreze.com/sites/default/files/styles/oit_diaporama_tablette/public/photos_oit/LOIAQU019V50045I-155000647-4-42cdad85bc1d4e5098f9a36e97a301c7.webp?itok=9TUgSjzs',
      link: 'https://www.tourismecorreze.com/fr/tourisme_detail/lac_des_bariousses.html',
      maps: 'https://maps.app.goo.gl/rcUnqc3oY6MmaDJp8',
    },
  },
  {
    key: 'les-ptites-cagettes',
    data: {
      type: ['gastronomie'],
      label: "Les P'tites Cagettes - Boutique de producteurs de Treignac",
      description:
        "Vous trouverez dans la boutique tous les produits d'une épicerie classique, avec un maximum de produits locaux : viandes locales, fromages, pain, vins, bières locales, kéfirs et pétillants, truite de la Vézère, fruits et légumes, savons, etc...",
      img: 'https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/629221932_122098823013251275_867299611713013043_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=2a1932&_nc_ohc=B5fXc-QrES8Q7kNvwEWnCrZ&_nc_oc=Adkf3m2embBF7R2F2wZBGE7hztHH6v198Q7oeoUKbX6ykzJSJRIFbZdr2gkZa0FOVzDQrth-1Tdj7c7N9hFU4dTY&_nc_zt=23&_nc_ht=scontent-cdg4-2.xx&_nc_gid=Z6ajWsUeQZijx-4Om9ovUA&_nc_ss=8&oh=00_AfwwBqLmrU0-x7RBBS7srwIjx3Xeys181kYoXseEntDAlA&oe=69BDD858',
      link: 'https://lesptitescagettes.org/',
      facebook: 'https://www.facebook.com/profile.php?id=61587538262303',
      maps: 'https://maps.app.goo.gl/PJdt8VRhx4EF1dis9',
    },
  },
  {
    key: 'boulangerie-de-la-tour',
    data: {
      type: ['gastronomie'],
      label: 'Boulangerie de la Tour',
      description: 'Meilleure boulangerie de Treignac',
      maps: 'https://maps.app.goo.gl/2GPcBnwG8S1nWXby7',
    },
  },
  {
    key: 'saut-de-la-virole',
    data: {
      type: ['randonnee', 'exterieur'],
      label: 'Cascade «Saut de la Virole»',
      description:
        'Très belle cascade au milieu de la forêt. Randonnée de niveau intermédiaire, sentiers escarpés, pente forte, ne pas faire avec des enfants en bas âge.',
      img: 'https://rando-millevaches-admin.fr/media/paperclip/trekking_trek/735746/pdg-1_1.jpg',
      link: 'https://rando-millevaches.fr/fr/trek/735746-Saut-de-la-Virole',
      maps: 'https://maps.app.goo.gl/ga3b5Zpg6zAJnr7g7',
    },
  },
  {
    key: 'borzeix-besse',
    data: {
      type: ['adresse', 'gastronomie'],
      label: 'Chocolatier Borzeix-Besse',
      description: 'Pâtisserie-Chocolaterie',
      img: 'https://static.wixstatic.com/media/1f26bf_a10da33c571e41338d1d1c3b92d181f9~mv2.png/v1/fill/w_1905,h_744,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/1f26bf_a10da33c571e41338d1d1c3b92d181f9~mv2.png',
      link: 'https://www.chocolats-borzeix-besse.fr/',
      facebook: 'https://fr-fr.facebook.com/borzeixbesse/',
      instagram: 'https://www.instagram.com/borzeixbesse/',
      maps: 'https://maps.app.goo.gl/8mVvzVyeR2dT7yAQ6',
    },
  },
  {
    key: 'nikow-pizz',
    data: {
      type: ['gastronomie'],
      label: 'Nikow Pizz',
      description: 'Pizza & Burgers',
      img: 'https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/470221707_10236284681846899_1402060763787044016_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2a1932&_nc_ohc=2ga4LKtaO_8Q7kNvwHAov6P&_nc_oc=Admf_DPyMkx2FNSdbN9kwQB9Ota8w2aRb6jm7grYqDHySoWfA_lKLONaP10EBfq9GTwPrgmLUp5zCMxEixeKwm9C&_nc_zt=23&_nc_ht=scontent-cdg4-2.xx&_nc_gid=tDwTFecQmSi0ai7zHhH_cg&_nc_ss=8&oh=00_AfxJaphYbq71hLmx-lbxngrtIH5pOwRxFY0KLQdmspLYOw&oe=69BE1172',
      facebook: 'https://www.facebook.com/profile.php?id=61570254947637',
      maps: 'https://maps.app.goo.gl/FMJajkkBcjrMLwL76',
    },
  },
]

export default activites
