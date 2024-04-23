import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

let randomNumberGenerator = (() => Math.ceil(Math.random() * 100000))();
setInterval(() => (randomNumberGenerator = Math.ceil(Math.random() * 60)), 30); // llamamos a la funtion randomNumberGenerator() cada 30s. Con esto el numero en max-age=X cambia cada 30s, cuando cambia el numero de max-age y se refresca la pagina se hace nuevamente la peticion a al servidor

export default async function getBillboard(id: string): Promise<Billboard> {
  const res = await fetch(`${URL}/${id}`, {
    headers: {
      // "Cache-Control": "must-revalidate, no-cache, no-store, max-age=5",
      "Cache-Control": `must-revalidate, max-age=${randomNumberGenerator}`,
    },
  });
  const data = await res.json();
  return data;
}
