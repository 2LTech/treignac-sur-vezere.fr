import { LocalizedArray } from '@/i18n/config'

export interface Citation {
  key: string
  data: {
    content: LocalizedArray
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
      content: {
        fr: [
          "Treignac (Trainhac en occitan) est un village français labellisé Petite Cité de Caractère® depuis l'automne 2017, situé dans le département de la Corrèze et la région Nouvelle Aquitaine.",
          'Commune du parc naturel régional de Millevaches en Limousin, son relief de montagne offre de magnifiques paysages.',
          "Ses habitants sont appelés les Treignacois et les Treignacoises. La commune s'étend sur 36,7 km² et compte 1 368 habitants. Avec une densité de 37,2 habitants par km².",
          'Treignac est situé à 20 km au nord-est de Seilhac la plus grande ville à proximité.',
        ],
        en: [
          'Treignac (Trainhac in Occitan) is a French village labelled a Petite Cité de Caractère® (Small Town of Character) since autumn 2017, located in the Corrèze department and the Nouvelle-Aquitaine region.',
          'A town of the Millevaches en Limousin regional nature park, its mountainous relief offers magnificent landscapes.',
          'Its inhabitants are called Treignacois and Treignacoises. The town covers 36.7 km² and has 1,368 inhabitants, with a density of 37.2 inhabitants per km².',
          'Treignac is located 20 km north-east of Seilhac, the largest town nearby.',
        ],
        es: [
          'Treignac (Trainhac en occitano) es un pueblo francés con el sello Petite Cité de Caractère® (Pequeña Ciudad con Encanto) desde el otoño de 2017, situado en el departamento de Corrèze y la región de Nouvelle-Aquitaine.',
          'Municipio del parque natural regional de Millevaches en Limousin, su relieve montañoso ofrece magníficos paisajes.',
          'Sus habitantes se llaman Treignacois y Treignacoises. El municipio se extiende sobre 36,7 km² y cuenta con 1368 habitantes, con una densidad de 37,2 habitantes por km².',
          'Treignac se sitúa a 20 km al noreste de Seilhac, la ciudad más grande de los alrededores.',
        ],
      },
      link: {
        url: 'https://www.mairietreignac.fr/',
        label: 'Mairie de Treignac',
      },
    },
  },
  {
    key: 'tourisme-correze',
    data: {
      content: {
        fr: [
          'Bâtie au pied des Monédières dans les gorges de la Vézère, Treignac est une cité médiévale avec son pont du XIIIème siècle, ses église et chapelles, sa halle aux grains, sa tour panoramique du XVème siècle et ses maisons à colombages.',
          "Elle a obtenu le label «Petites Cités de Caractère» pour son patrimoine architectural et naturel. Cette reconnaissance au niveau national va lui permettre d'entrer dans la cour des grands et de sensibiliser les Treignacois et visiteurs à ce patrimoine exceptionnel et insolite. Le clocher tors de la Chapelle Notre-Dame-de-la-Paix en est un illustre exemple.",
          'Etape appréciée des pèlerins de Compostelle en route sur la Voie de Rocamadour, elle est également réputée pour ses eaux vives qui en font un spot mondial de canoë-kayak.',
        ],
        en: [
          'Built at the foot of the Monédières in the gorges of the Vézère, Treignac is a medieval town with its 13th-century bridge, its church and chapels, its grain market hall, its 15th-century panoramic tower and its half-timbered houses.',
          'It obtained the "Petites Cités de Caractère" label for its architectural and natural heritage. This national recognition will allow it to join the big league and to raise awareness among the people of Treignac and visitors of this exceptional and unusual heritage. The twisted steeple of the Notre-Dame-de-la-Paix chapel is a famous example.',
          'A popular stop for the pilgrims of Compostela on the Rocamadour Way, it is also renowned for its white waters that make it a world-class canoe-kayak spot.',
        ],
        es: [
          'Construida al pie de los Monédières en las gargantas del Vézère, Treignac es una ciudad medieval con su puente del siglo XIII, su iglesia y capillas, su mercado de grano, su torre panorámica del siglo XV y sus casas de entramado de madera.',
          'Ha obtenido el sello «Petites Cités de Caractère» por su patrimonio arquitectónico y natural. Este reconocimiento a nivel nacional le permitirá entrar en la élite y sensibilizar a los habitantes de Treignac y a los visitantes sobre este patrimonio excepcional e insólito. El campanario torcido de la capilla Notre-Dame-de-la-Paix es un ilustre ejemplo.',
          'Etapa apreciada por los peregrinos de Compostela en la Vía de Rocamadour, también es famosa por sus aguas bravas que la convierten en un destino mundial de piragüismo.',
        ],
      },
      link: {
        url: 'https://www.tourismecorreze.com/fr/tourisme_detail/treignac-sur-vezere.html',
        label: 'Tourimse Corrèze',
      },
    },
  },
  {
    key: 'terre-de-correze',
    data: {
      content: {
        fr: [
          'Blottie dans un méandre de la Vézère entre Massif des Monédières et Plateau de Millevaches, Treignac est une ville-porte du Parc Naturel Régional de Millevaches en Limousin.',
        ],
        en: [
          'Nestled in a bend of the Vézère between the Monédières range and the Millevaches plateau, Treignac is a gateway town to the Millevaches en Limousin Regional Nature Park.',
        ],
        es: [
          'Acurrucada en un meandro del Vézère entre el macizo de los Monédières y la meseta de Millevaches, Treignac es una ciudad-puerta del Parque Natural Regional de Millevaches en Limousin.',
        ],
      },
      link: {
        url: 'https://www.terresdecorreze.com/destination/treignac/',
        label: 'Terre de Corrèze',
      },
    },
  },
  {
    key: 'guide-de-la-correze',
    data: {
      content: {
        fr: [
          'Les gorges de la Vézère sont surprenantes, sauvages et accueillantes à la fois. Venez visiter Treignac-sur-Vézère, un charmant village (une petite cité de caractère) typique de la Corrèze avec ses maisons en granit, à colombage, petit pont en pierre… Il invite à la promenade et il est d’ailleurs placé sur une étape du chemin vers Saint-Jacques-de-Compostelle.',
          ' Treignac est entre le massif des Monédières et le plateau des Millevaches, une situation de choix pour les randonneurs qui apprécient de venir y passer des vacances aussi sportives que reposantes pour l’esprit.',
          'Si vous aimez le kayak en eaux-vives, et le parapente, c’est aussi l’endroit où aller !',
        ],
        en: [
          'The gorges of the Vézère are surprising, wild and welcoming all at once. Come and visit Treignac-sur-Vézère, a charming village (a small town of character) typical of the Corrèze, with its granite and half-timbered houses and its small stone bridge… It invites you to stroll and is, moreover, located on a stage of the way to Santiago de Compostela.',
          'Treignac lies between the Monédières range and the Millevaches plateau, an ideal location for hikers who enjoy spending holidays here that are as sporty as they are restful for the mind.',
          'If you like white-water kayaking and paragliding, this is also the place to go!',
        ],
        es: [
          'Las gargantas del Vézère son sorprendentes, salvajes y acogedoras a la vez. Ven a visitar Treignac-sur-Vézère, un encantador pueblo (una pequeña ciudad con encanto) típico de Corrèze con sus casas de granito y entramado de madera y su pequeño puente de piedra… Invita al paseo y, además, se encuentra en una etapa del camino hacia Santiago de Compostela.',
          'Treignac se encuentra entre el macizo de los Monédières y la meseta de Millevaches, una ubicación privilegiada para los senderistas que disfrutan pasando aquí unas vacaciones tan deportivas como relajantes para el espíritu.',
          'Si te gusta el kayak en aguas bravas y el parapente, ¡también es el lugar al que ir!',
        ],
      },
      link: {
        url: 'https://www.guide-de-la-correze.com/fr/tourisme/decouvrir/villes-et-villages/treignac-25/treignac-sur-vezere-629.html',
        label: 'Guide de la Corrèze',
      },
    },
  },
]

export default citations
