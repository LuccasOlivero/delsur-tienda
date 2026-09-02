import { Product } from "@/types";
import queryString from "query-string";

interface Query {
  categoryId?: string;
  colorId?: string;
  isFeatured?: boolean;
  price?: string;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export default async function getProductsFeatured(
  query: Query
): Promise<Product[]> {
  const url = queryString.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      colorId: query.colorId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch data from API: " + res.statusText);
  const data = await res.json();
  return data;
}



