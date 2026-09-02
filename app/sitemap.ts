import { MetadataRoute } from 'next';
import getCategories from '@/actions/get-categories';
import getAllProducts from '@/actions/get-all-products';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://www.decodelsur.vip';

  const categories = await getCategories();
  const products = await getAllProducts();

  const categoryUrls = (categories || []).map((category) => ({
    url: `${baseUrl}/category/${category.id}`,
    lastModified: new Date(),
  }));

  const productUrls = (products || []).map((product) => ({
    url: `${baseUrl}/product/${product.id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...categoryUrls,
    ...productUrls,
  ];
}
