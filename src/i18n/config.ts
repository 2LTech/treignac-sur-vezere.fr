export const locales = ['fr', 'en', 'es'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'fr'

/**
 * Localized string (one value per locale)
 */
export type Localized = Record<Locale, string>

/**
 * Localized array of strings (one array per locale)
 */
export type LocalizedArray = Record<Locale, string[]>

/**
 * Type guard for a supported locale
 * @param value Value
 * @returns Is a supported locale
 */
export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value)

/**
 * Human readable label of each locale (in its own language)
 */
export const localeLabels: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  es: 'Español',
}

/**
 * Prefix a path with a locale (e.g. localizeHref('en', '/activites') -> '/en/activites')
 * @param locale Locale
 * @param path Path (starting with '/')
 * @returns Localized path
 */
export const localizeHref = (locale: Locale, path: string): string => {
  if (path === '/') return `/${locale}`
  return `/${locale}${path}`
}
