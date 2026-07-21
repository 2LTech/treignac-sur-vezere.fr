import { Localized } from '@/i18n/config'

export interface Image {
  key: string
  label: Localized
  source: string
  src: string
}

const images: Image[] = [
  {
    key: 'treignac-halles',
    label: {
      fr: 'Halles de Treignac, 29 avril 2006',
      en: 'Treignac market hall, 29 April 2006',
      es: 'Mercado cubierto de Treignac, 29 de abril de 2006',
    },
    source: 'https://commons.wikimedia.org/wiki/File:Treignac_halle.jpg',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Treignac_halle.jpg/1280px-Treignac_halle.jpg',
  },
  {
    key: 'vieux-pont',
    label: {
      fr: 'Le vieux pont, 28 septembre 2018',
      en: 'The old bridge, 28 September 2018',
      es: 'El puente viejo, 28 de septiembre de 2018',
    },
    source: 'https://commons.wikimedia.org/wiki/File:Treignac_Vieux_Pont.jpg',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Treignac_Vieux_Pont.jpg/1280px-Treignac_Vieux_Pont.jpg',
  },
  {
    key: 'panorama',
    label: {
      fr: 'Panorama, 28 septembre 2018',
      en: 'Panorama, 28 September 2018',
      es: 'Panorámica, 28 de septiembre de 2018',
    },
    source: 'https://commons.wikimedia.org/wiki/File:Treignac_Panorama.jpg',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Treignac_Panorama.jpg/1280px-Treignac_Panorama.jpg',
  },
  {
    key: 'porte-chabirande',
    label: {
      fr: 'Porte Chabirande, 28 septembre 2018',
      en: 'Chabirande gate, 28 September 2018',
      es: 'Puerta Chabirande, 28 de septiembre de 2018',
    },
    source:
      'https://commons.wikimedia.org/wiki/File:Treignac_Porte_Chabirande.jpg',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Treignac_Porte_Chabirande.jpg/960px-Treignac_Porte_Chabirande.jpg',
  },
  {
    key: 'panorama2',
    label: {
      fr: 'Panorama, 14 août 2011',
      en: 'Panorama, 14 August 2011',
      es: 'Panorámica, 14 de agosto de 2011',
    },
    source:
      'https://commons.wikimedia.org/wiki/File:Treignac_(Trainhac_en_occitan)_est_une_commune_fran%C3%A7aise,_situ%C3%A9e_dans_le_d%C3%A9partement_de_la_Corr%C3%A8ze_et_la_r%C3%A9gion_Limousin_-_panoramio.jpg',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Treignac_%28Trainhac_en_occitan%29_est_une_commune_fran%C3%A7aise%2C_situ%C3%A9e_dans_le_d%C3%A9partement_de_la_Corr%C3%A8ze_et_la_r%C3%A9gion_Limousin_-_panoramio.jpg/1280px-Treignac_%28Trainhac_en_occitan%29_est_une_commune_fran%C3%A7aise%2C_situ%C3%A9e_dans_le_d%C3%A9partement_de_la_Corr%C3%A8ze_et_la_r%C3%A9gion_Limousin_-_panoramio.jpg',
  },
  {
    key: 'vezere',
    label: {
      fr: 'Vue sur la Vézère, 14 août 2011',
      en: 'View of the Vézère, 14 August 2011',
      es: 'Vista del Vézère, 14 de agosto de 2011',
    },
    source:
      'https://commons.wikimedia.org/wiki/File:Treignac_(Trainhac_en_occitan)_est_une_commune_fran%C3%A7aise,_situ%C3%A9e_dans_le_d%C3%A9partement_de_la_Corr%C3%A8ze_et_la_r%C3%A9gion_Limousin_-_panoramio_(3).jpg',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Treignac_%28Trainhac_en_occitan%29_est_une_commune_fran%C3%A7aise%2C_situ%C3%A9e_dans_le_d%C3%A9partement_de_la_Corr%C3%A8ze_et_la_r%C3%A9gion_Limousin_-_panoramio_%283%29.jpg/1280px-Treignac_%28Trainhac_en_occitan%29_est_une_commune_fran%C3%A7aise%2C_situ%C3%A9e_dans_le_d%C3%A9partement_de_la_Corr%C3%A8ze_et_la_r%C3%A9gion_Limousin_-_panoramio_%283%29.jpg',
  },
  {
    key: 'vieux-pont-2',
    label: {
      fr: 'Le vieux pont, 5 juillet 2021',
      en: 'The old bridge, 5 July 2021',
      es: 'El puente viejo, 5 de julio de 2021',
    },
    source:
      'https://commons.wikimedia.org/wiki/File:Treignac_Le_Pont_Finot_sur_la_V%C3%A9z%C3%A8re.jpg',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Treignac_Le_Pont_Finot_sur_la_V%C3%A9z%C3%A8re.jpg/1280px-Treignac_Le_Pont_Finot_sur_la_V%C3%A9z%C3%A8re.jpg',
  },
  {
    key: 'la-tour',
    label: {
      fr: 'La Tour, 12 mai 2012',
      en: 'The Tower, 12 May 2012',
      es: 'La Torre, 12 de mayo de 2012',
    },
    source: 'https://commons.wikimedia.org/wiki/File:Treignac_-_La_Tour.JPG',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Treignac_-_La_Tour.JPG/960px-Treignac_-_La_Tour.JPG',
  },
  {
    key: 'chapelle-notre-dame',
    label: {
      fr: 'La Chapelle Notre-Dame de la Paix',
      en: 'The Notre-Dame de la Paix chapel',
      es: 'La capilla Notre-Dame de la Paix',
    },
    source:
      'https://commons.wikimedia.org/wiki/File:Treignac_-_Chapelle_Notre-Dame-de-la-Paix_02.JPG',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Treignac_-_Chapelle_Notre-Dame-de-la-Paix_02.JPG/960px-Treignac_-_Chapelle_Notre-Dame-de-la-Paix_02.JPG',
  },
]

export default images
