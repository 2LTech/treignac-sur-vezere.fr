export interface Lien {
  key: string
  label: string | React.ReactElement
  url: string
}

const liens: Lien[] = [
  {
    key: 'city',
    label: 'Ville de Treignac',
    url: 'https://www.mairietreignac.fr/',
  },
  {
    key: 'tourisme-correze',
    label: 'Tourisme Corrèze',
    url: 'https://www.tourismecorreze.com/fr',
  },
  {
    key: 'terres-de-corrèze',
    label: 'Terres de Corrèze',
    url: 'https://www.terresdecorreze.com/',
  },
  {
    key: 'petites-cites-de-caractere',
    label: 'Petites Cités de Caractère',
    url: 'https://www.petitescitesdecaractere.com/cites/treignac/',
  },
  {
    key: 'guide-de-la-correze',
    label: 'Guide de la Corrèze',
    url: 'https://www.guide-de-la-correze.com/fr/index.html',
  },
  {
    key: 'rando-millevaches',
    label: 'Rando Millevaches en Limousin',
    url: 'https://rando-millevaches.fr/',
  },
]

export default liens
