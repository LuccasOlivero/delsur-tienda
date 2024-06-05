import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export default async function getAllProducts(): Promise<Product[]> {
  const res = await fetch(URL, {
    headers: {
      "Cache-Control": "must-revalidate, no-cache, no-store, max-age=5",
    },
  });
  const data = await res.json();
  return data;
}
