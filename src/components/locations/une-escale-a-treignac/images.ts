import { Localized } from '@/i18n/config'

export interface Image {
  key: string
  label: Localized
  src: string
}

const salon: Localized = { fr: 'Salon', en: 'Living room', es: 'Salón' }
const sam: Localized = {
  fr: 'Salle à manger',
  en: 'Dining room',
  es: 'Comedor',
}
const cuisine: Localized = { fr: 'Cuisine', en: 'Kitchen', es: 'Cocina' }
const exterieur: Localized = {
  fr: 'Extérieur',
  en: 'Outside',
  es: 'Exterior',
}
const sdb: Localized = {
  fr: 'Salle de bain',
  en: 'Bathroom',
  es: 'Baño',
}
const chambre1: Localized = {
  fr: 'Chambre 1',
  en: 'Bedroom 1',
  es: 'Habitación 1',
}
const chambre2: Localized = {
  fr: 'Chambre 2',
  en: 'Bedroom 2',
  es: 'Habitación 2',
}

const images: Image[] = [
  { key: 'salon', label: salon, src: '/img/une-escale-a-treignac/salon.jpg' },
  { key: 'sam', label: sam, src: '/img/une-escale-a-treignac/sam.jpg' },
  {
    key: 'cuisine',
    label: cuisine,
    src: '/img/une-escale-a-treignac/cuisine.jpg',
  },
  {
    key: 'exterieur1',
    label: exterieur,
    src: '/img/une-escale-a-treignac/exterieur1.jpg',
  },
  {
    key: 'exterieur2',
    label: exterieur,
    src: '/img/une-escale-a-treignac/exterieur2.jpg',
  },
  {
    key: 'exterieur3',
    label: exterieur,
    src: '/img/une-escale-a-treignac/exterieur3.jpg',
  },
  { key: 'sdb1', label: sdb, src: '/img/une-escale-a-treignac/sdb1.jpg' },
  { key: 'sdb2', label: sdb, src: '/img/une-escale-a-treignac/sdb2.jpg' },
  {
    key: 'chambre1_1',
    label: chambre1,
    src: '/img/une-escale-a-treignac/chambre1_1.jpg',
  },
  {
    key: 'chambre1_2',
    label: chambre1,
    src: '/img/une-escale-a-treignac/chambre1_2.jpg',
  },
  {
    key: 'chambre2_1',
    label: chambre2,
    src: '/img/une-escale-a-treignac/chambre2_1.jpg',
  },
  {
    key: 'chambre2_2',
    label: chambre2,
    src: '/img/une-escale-a-treignac/chambre2_2.jpg',
  },
]

export default images
