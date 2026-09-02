import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export default async function getAllProducts(): Promise<Product[]> {
  const res = await fetch(URL);
  if (!res.ok) throw new Error("Failed to fetch data from API: " + res.statusText);
  const data = await res.json();
  return data;
}



