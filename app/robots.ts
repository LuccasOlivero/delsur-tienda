import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://www.decodelsur.vip';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/cart'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
