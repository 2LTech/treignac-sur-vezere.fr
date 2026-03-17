export interface Citation {
  key: string
  data: {
    content: string[]
    link: {
      url: string
      label: string
    }
  }
}

const citations: Citation[] = [
  {
    key: 'mairie-treignac',
    data: {
      content: [
        "Treignac (Trainhac en occitan) est un village français labellisé Petite Cité de Caractère® depuis l'automne 2017, situé dans le département de la Corrèze et la région Nouvelle Aquitaine.",
        'Commune du parc naturel régional de Millevaches en Limousin, son relief de montagne offre de magnifiques paysages.',
        "Ses habitants sont appelés les Treignacois et les Treignacoises. La commune s'étend sur 36,7 km² et compte 1 368 habitants. Avec une densité de 37,2 habitants par km².",
        'Treignac est situé à 20 km au nord-est de Seilhac la plus grande ville à proximité.',
      ],
      link: {
        url: 'https://www.mairietreignac.fr/',
        label: 'Mairie de Treignac',
      },
    },
  },
  {
    key: 'tourisme-correze',
    data: {
      content: [
        'Bâtie au pied des Monédières dans les gorges de la Vézère, Treignac est une cité médiévale avec son pont du XIIIème siècle, ses église et chapelles, sa halle aux grains, sa tour panoramique du XVème siècle et ses maisons à colombages.',
        "Elle a obtenu le label «Petites Cités de Caractère» pour son patrimoine architectural et naturel. Cette reconnaissance au niveau national va lui permettre d'entrer dans la cour des grands et de sensibiliser les Treignacois et visiteurs à ce patrimoine exceptionnel et insolite. Le clocher tors de la Chapelle Notre-Dame-de-la-Paix en est un illustre exemple.",
        'Etape appréciée des pèlerins de Compostelle en route sur la Voie de Rocamadour, elle est également réputée pour ses eaux vives qui en font un spot mondial de canoë-kayak.',
      ],
      link: {
        url: 'https://www.tourismecorreze.com/fr/tourisme_detail/treignac-sur-vezere.html',
        label: 'Tourimse Corrèze',
      },
    },
  },
  {
    key: 'terre-de-correze',
    data: {
      content: [
        'Blottie dans un méandre de la Vézère entre Massif des Monédières et Plateau de Millevaches, Treignac est une ville-porte du Parc Naturel Régional de Millevaches en Limousin.',
      ],
      link: {
        url: 'https://www.terresdecorreze.com/destination/treignac/',
        label: 'Terre de Corrèze',
      },
    },
  },
  {
    key: 'guide-de-la-correze',
    data: {
      content: [
        'Les gorges de la Vézère sont surprenantes, sauvages et accueillantes à la fois. Venez visiter Treignac-sur-Vézère, un charmant village (une petite cité de caractère) typique de la Corrèze avec ses maisons en granit, à colombage, petit pont en pierre… Il invite à la promenade et il est d’ailleurs placé sur une étape du chemin vers Saint-Jacques-de-Compostelle.',
        ' Treignac est entre le massif des Monédières et le plateau des Millevaches, une situation de choix pour les randonneurs qui apprécient de venir y passer des vacances aussi sportives que reposantes pour l’esprit.',
        'Si vous aimez le kayak en eaux-vives, et le parapente, c’est aussi l’endroit où aller !',
      ],
      link: {
        url: 'https://www.guide-de-la-correze.com/fr/tourisme/decouvrir/villes-et-villages/treignac-25/treignac-sur-vezere-629.html',
        label: 'Guide de la Corrèze',
      },
    },
  },
]

export default citations
