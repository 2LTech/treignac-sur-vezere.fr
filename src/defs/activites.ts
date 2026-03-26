export interface Activite {
  key: string
  data: {
    type: (
      | 'adresse'
      | 'randonnee'
      | 'exterieur'
      | 'gastronomie'
      | 'sante'
      | 'bien-etre'
    )[]
    label: string
    description?: string
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
      img: '/img/activites/commerce.png',
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
      img: '/img/activites/foirail.webp',
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
      img: '/img/activites/cafe-de-paris.webp',
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
      img: 'https://lesptitescagettes.org/img/home/bicycle.svg',
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
      img: '/img/activites/nikow.webp',
      facebook: 'https://www.facebook.com/profile.php?id=61570254947637',
      maps: 'https://maps.app.goo.gl/FMJajkkBcjrMLwL76',
    },
  },
  {
    key: 'clinique-veterinaire-du-lac',
    data: {
      type: ['sante'],
      label: 'Clinique véterinaire du lac',
      img: 'https://cliniqueveterinairedulac19.com/images/logo-web.webp',
      link: 'https://cliniqueveterinairedulac19.com/',
      facebook: 'https://www.facebook.com/clinique.veterinaire.treignac',
      maps: 'https://maps.app.goo.gl/DCgRxdBDyYazZcPN7',
    },
  },
  {
    key: 'pharmacie-nouaille',
    data: {
      type: ['sante'],
      label: 'Pharmacie Nouaille',
      img: 'https://pharmacienouaille.fr/wp-content/uploads/2019/02/background_img.jpg',
      link: 'https://pharmacienouaille.fr/',
      maps: 'https://maps.app.goo.gl/X54rJnKG7KndZZMg7',
    },
  },
  {
    key: 'chalard',
    data: {
      type: ['gastronomie'],
      label: 'Primeurs Chalard',
      img: '/img/activites/chalard.webp',
      maps: 'https://maps.app.goo.gl/P6hNRRuKdpWKB4jU8',
    },
  },
  {
    key: 'domaine-treignac',
    data: {
      type: ['gastronomie', 'adresse'],
      label: 'Le domaine de Treignac',
      description: 'Restaurant',
      img: 'https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/49411/logo.PNG',
      link: 'https://www.domaine-de-treignac.fr/restaurant-et-menu',
      facebook: 'https://www.facebook.com/profile.php?id=100083000329033',
      instagram: 'https://www.instagram.com/domainedetreignac/',
      maps: 'https://maps.app.goo.gl/FcTzarnrYJYpRYwJ9',
    },
  },
  {
    key: 'la-brasserie',
    data: {
      type: ['adresse', 'gastronomie'],
      label: 'La Brasserie',
      description: 'Restaurant',
      img: 'https://www.monsamm.com/gallery/639a2783219dd5.00045003-lg.webp',
      link: 'https://www.labrasserietreignac.fr/',
      facebook: 'https://www.facebook.com/Labrasserietreignac#',
      maps: 'https://maps.app.goo.gl/u838YuAiFb3tPYpx6',
    },
  },
  {
    key: 'treignac brocante',
    data: {
      type: ['adresse'],
      label: 'Treignac Brocante',
      img: '/img/activites/galerie-des-halles.webp',
      facebook: 'https://www.facebook.com/galeriedeshalles',
      maps: 'https://maps.app.goo.gl/QpjqQKDL2xXTXmb79',
    },
  },
  {
    key: 'maison-campagne',
    data: {
      type: ['adresse'],
      label: 'Maison de Campagne Déco',
      description: 'Brocanteur',
      link: 'https://www.maison-campagne-deco.com/',
      img: 'https://primary.jwwb.nl/public/u/y/f/temp-gfnjvuashrvzzdlgudpr/flea-market-1262036-standard.jpg',
      maps: 'https://maps.app.goo.gl/QHkXkLZdgBcpG7Qh6',
    },
  },
  {
    key: 'mille-morceaux-mosaique',
    data: {
      type: ['adresse'],
      label: 'Mille Morceaux Mosaïque',
      img: '/img/activites/mille-morceaux.webp',
      facebook:
        'https://www.facebook.com/p/Mille-Morceaux-Mosaique-100071779121922/?locale=fr_FR',
      maps: 'https://maps.app.goo.gl/q3QiVQjZHjaGW58f7',
    },
  },
  {
    key: 'boucherie-rousseau',
    data: {
      type: ['adresse', 'gastronomie'],
      label: 'Boucherie Rousseau',
      description: 'Boucherie-Charcuterie-Traiteur',
      img: '/img/activites/boucherie-rousseau.webp',
      facebook:
        'https://www.facebook.com/p/Boucherie-Rousseau-100089308996474/',
      maps: 'https://maps.app.goo.gl/QfQokfzKGT4cUZLaA',
    },
  },
  {
    key: 'de-la-cave-a-la-table',
    data: {
      type: ['adresse', 'gastronomie'],
      label: 'De la Cave à la Table',
      description: "Magasin d'art de la table",
      img: '/img/activites/de-la-cave-a-la-table.webp',
      facebook:
        'https://www.facebook.com/p/DE-LA-CAVE-A-LA-TABLE-100050507364444/?locale=fr_FR',
      maps: 'https://maps.app.goo.gl/YgZg1d1Mx4TUzjwL7',
    },
  },
  {
    key: 'au-jardin-des-dames',
    data: {
      type: ['adresse', 'bien-etre'],
      label: 'Au Jardin des Dames',
      description: 'Institut de beauté',
      img: '/img/activites/au-jardin-des-dames.jpg',
      link: 'https://www.planity.com/institut-au-jardin-des-dames-19260-treignac',
      facebook: 'https://www.facebook.com/Emma.au.jardin.des.dames',
      maps: 'https://maps.app.goo.gl/UfhCQpDYwDVBC5XDA',
    },
  },
  {
    key: 'kb-coiffure',
    data: {
      type: ['adresse', 'bien-etre'],
      label: 'KB coiffure',
      description: 'Salon de coiffure',
      img: '/img/activites/kb-coiffure.webp',
      facebook: 'https://www.facebook.com/p/KB-coiffure-100057478928198/',
      maps: 'https://maps.app.goo.gl/MkDvD7nhzaXcT5xv7',
    },
  },
  {
    key: 'beau-bien-bio',
    data: {
      type: ['adresse', 'bien-etre'],
      label: 'Beau Bien Bio',
      description: 'Institut de beauté',
      img: '/img/activites/beau-bien-bio.webp',
      maps: 'https://maps.app.goo.gl/wYLeLa4uaPrJM67r7',
    },
  },
  {
    key: 'chadaud-nathalie',
    data: {
      type: ['adresse', 'bien-etre'],
      label: 'Chadaud Nathalie',
      description: 'Salon de coiffure',
      img: '/img/activites/chadaud-nathalie.webp',
      maps: 'https://maps.app.goo.gl/9Jezvxq9M2gBTsuEA',
    },
  },
  {
    key: 'o-cinq-petit-pain',
    data: {
      type: ['adresse', 'gastronomie'],
      label: 'O Cinq Petit Pain',
      description: 'Boulangerie',
      img: '/img/activites/o-cinq-petit-pain.webp',
      facebook: 'https://www.facebook.com/profile.php?id=100057654871227',
      maps: 'https://maps.app.goo.gl/CCWPNsy1EZBzuHXL6',
    },
  },
  {
    key: 'o-mille-et-une-pensee',
    data: {
      type: ['adresse'],
      label: 'O Mille et une pensée',
      description: 'Fleuriste',
      img: '/img/activites/o-mille-et-une-pensee.webp',
      facebook:
        'https://www.facebook.com/people/O-Mille-et-une-pens%C3%A9e/61587749344589/#',
      maps: 'https://maps.app.goo.gl/aJM9j2FG6SPVG6wx8',
    },
  },
  {
    key: 'aux-bruyeres',
    data: {
      type: ['adresse'],
      label: 'Aux Bruyères',
      description: 'Fleuriste',
      img: '/img/activites/aux-bruyeres.webp',
      facebook:
        'https://www.facebook.com/people/Aux-Bruy%C3%A8res-Treignac/61581038005458/',
      maps: 'https://maps.app.goo.gl/ojq3HP2sXpTaHYQz7',
    },
  },
  {
    key: 'mercerie-bout-de-ficelle',
    data: {
      type: ['adresse'],
      label: 'Mercerie Bout de Ficelle',
      img: '/img/activites/bout-de-ficelle.jpg',
      facebook: 'https://www.facebook.com/mercerie.boutdeficelle/',
      maps: 'https://maps.app.goo.gl/SXRgmPAdWaoZ1i99A',
    },
  },
  {
    key: 'visionsur',
    data: {
      type: ['adresse', 'sante'],
      label: 'Visionsur',
      description: 'Opticien',
      img: 'https://visionsur.fr/wp-content/uploads/sites/104/2024/09/slide1-magasin-visionsur-treignac.jpg',
      link: 'https://visionsur.fr/magasins/opticien-treignac/',
      facebook: 'https://www.facebook.com/profile.php?id=61564607168725',
      maps: 'https://maps.app.goo.gl/kyPJnKhZcXnxvCMSA',
    },
  },
  {
    key: 'restaurant-du-lac',
    data: {
      type: ['adresse', 'gastronomie'],
      label: 'Hotel-Restaurant du Lac',
      img: 'https://restaurant-hotel-du-lac.fr/images/Salle-restaurant.webp',
      link: 'https://restaurant-hotel-du-lac.fr/',
      maps: 'https://maps.app.goo.gl/L8zqCnfd2LrPqtS89',
    },
  },
  {
    key: 'coeur-du-terroir',
    data: {
      type: ['adresse', 'gastronomie'],
      label: 'Coeur du Terroir',
      description: 'Epicerie',
      img: '/img/activites/coeur-du-terroir.webp',
      facebook: 'https://www.facebook.com/coeurduterroirtreignac',
      maps: 'https://maps.app.goo.gl/adKaML3u5CeeC6h76',
    },
  },
  {
    key: 'intermarche',
    data: {
      type: ['adresse'],
      label: 'Intermarché',
      description: 'Supermarché',
      link: 'https://www.intermarche.com/magasins/09171/treignac-19260/infos-pratiques',
      img: 'https://www.intermarche.com/images/logoIntermarche.svg',
      facebook:
        'https://www.facebook.com/p/Intermarch%C3%A9-Treignac-100077046026443/?locale=fr_FR',
    },
  },
  {
    key: 'la-boutic-de-nana',
    data: {
      type: ['adresse'],
      label: 'La Boutic de Nana',
      description: 'Prêt à porter féminin',
      img: '/img/activites/la-boutic-de-nana.webp',
      facebook:
        'https://www.facebook.com/people/La-Boutic-de-Nana/61588487496823/?locale=fr_FR#',
      maps: 'https://maps.app.goo.gl/4vwGhJYgPiiPedRCA',
    },
  },
  {
    key: 'la-monarde',
    data: {
      type: ['adresse'],
      label: 'La Monarde Coffee Bar',
      description: 'Café, soirées à thèmes, ...',
      img: 'https://www.lamonarde.fr/wp-content/uploads/2023/06/IMG_6191.jpg',
      link: 'https://www.lamonarde.fr/',
      facebook:
        'https://www.facebook.com/profile.php?id=100091316063382&locale=fr_FR',
      instagram: 'https://www.instagram.com/la_monarde',
      maps: 'https://maps.app.goo.gl/CpYX3YRXE6b3fhbB7',
    },
  },
  {
    key: 'cachemire-shop',
    data: {
      type: ['adresse'],
      label: 'Cachemire shop',
      description: 'Art afghan. Tapis, sac, écharpe ...',
      img: '/img/activites/cachemire-shop.webp',
      maps: 'https://maps.app.goo.gl/tPQfbs5GUyZzqURo8',
    },
  },
  {
    key: 'galerie-art-treignac-project',
    data: {
      type: ['adresse'],
      label: "Galerie d'art Treignac Projet",
      img: 'https://treignacprojet.org/wp-content/uploads/2021/04/127391-hiver-treignac-projet.jpg',
      link: 'https://treignacprojet.org/fr/',
      facebook: 'https://www.facebook.com/treignacprojet/?locale=fr_FR',
      maps: 'https://maps.app.goo.gl/MdsyY7Zu4TjgPFSq7',
    },
  },
  {
    key: 'atelier-peaux-et-cuirs',
    data: {
      type: ['adresse'],
      label: "L'atelier Peaux & Cuirs",
      description:
        "Sellier harnacheur, réparation et création d'articles en cuir, sellerie motos custom et confort.",
      img: 'https://lh3.googleusercontent.com/sitesv/APaQ0STVZlx5dNUFed4TmUNzGV5r7G75wBB5viU5-5MyqvHOjRdRJ54iqp6hTm6p3N2sawdC3o7-szpvf6gSvDlmY4J4GfJIvsfR9aLIN_RYDWy6qKaxwTazQjBgcD6GuPMxDF6NpkhS_kPuhvq71WR9OdNckITBMRpcQbxcVbUR3d4hBr_RZQKpWG1fkpixc_JMvIM6X0v523_t9Nej4bwfeQHMn-S_yf1DUke2=w1280',
      link: 'https://sites.google.com/thinkerseeds.com/peaux-et-cuirs/accueil',
      maps: 'https://maps.app.goo.gl/jtFYHHuz2DykdkY36',
    },
  },
  {
    key: 'au-fil-de-laure',
    data: {
      type: ['adresse'],
      label: 'Au Fil de Laure',
      description:
        'Création de vêtements et accessoires bébés, enfants et femmes en vente directe et à la demande. Retouches et création, mode et intérieur. Déplacement à domicile possible, sur rendez-vous uniquement.',
      img: '/img/activites/au-fil-de-laure.webp',
      facebook:
        'https://www.facebook.com/people/Au-Fil-de-Laure/61587911187330/',
      maps: 'https://maps.app.goo.gl/dfBjmsQZLiAL8ykJ9',
    },
  },
  {
    key: 'le-bellevue',
    data: {
      type: ['adresse'],
      label: 'Le Bellevue',
      description:
        'Salon de thé. Spécialités culinaires, cuisine japonaise/sushi, pâtisseries.',
      img: '/img/activites/bellevue.webp',
      facebook: 'https://www.facebook.com/TreignacBellevue',
      maps: 'https://maps.app.goo.gl/1yWnddD1hgxxKD536',
    },
  },
]

export default activites
