import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export default async function getBillboard(id: string): Promise<Billboard> {
  const res = await fetch(`${URL}/${id}`, {
    headers: {
      "Cache-Control": "must-revalidate, no-cache, no-store, max-age=5",
    },
  });
  const data = await res.json();
  return data;
}
