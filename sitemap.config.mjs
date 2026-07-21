const siteUrl = 'https://treignac-sur-vezere.fr'

// Supported locales (keep in sync with src/i18n/config.ts)
const locales = ['fr', 'en', 'es']

// Application routes (without locale prefix)
const routes = [
  '',
  '/activites',
  '/locations',
  '/locations/une-escale-a-treignac',
  '/mentions-legales',
]

/** @type {import('next-sitemap').IConfig} */
const sitemapConfig = {
  siteUrl,
  generateRobotsTxt: true,
  // next-sitemap auto-detects the [lang] dynamic route by stripping the
  // segment, which would produce wrong, non-localized URLs. We exclude those
  // and emit the real localized URLs (with hreflang alternates) ourselves.
  exclude: ['/', ...routes.filter((route) => route !== '')],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  additionalPaths: async (config) => {
    const paths = []
    for (const route of routes) {
      for (const locale of locales) {
        const entry = await config.transform(config, `/${locale}${route}`)
        if (entry) paths.push(entry)
      }
    }
    return paths
  },
}

export default sitemapConfig
