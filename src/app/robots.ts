import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'], // Protect private routes if they exist
    },
    sitemap: 'https://thedinnernovel.com/sitemap.xml',
  }
}
