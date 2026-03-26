/** @type {import('next-sitemap').IConfig} */
const sitemapConfig = {
  siteUrl: 'https://treignac-sur-vezere.fr',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/legal',
      },
    ],
  },
}

export default sitemapConfig
