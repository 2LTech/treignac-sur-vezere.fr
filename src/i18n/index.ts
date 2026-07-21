import { Locale } from './config'
import { Dictionary } from './types'

import fr from './dictionaries/fr'
import en from './dictionaries/en'
import es from './dictionaries/es'

const dictionaries: Record<Locale, Dictionary> = { fr, en, es }

/**
 * Get the dictionary for a locale
 * @param locale Locale
 * @returns Dictionary
 */
export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale]

export type { Dictionary } from './types'
export * from './config'
