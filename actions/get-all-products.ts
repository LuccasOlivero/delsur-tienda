import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

let randomNumberGenerator = (() => Math.ceil(Math.random() * 100000))();
setInterval(() => (randomNumberGenerator = Math.ceil(Math.random() * 60)), 30); // llamamos a la funtion randomNumberGenerator() cada 30s. Con esto el numero en max-age=X cambia cada 30s, cuando cambia el numero de max-age y se refresca la pagina se hace nuevamente la peticion a al servidor

export default async function getAllProducts(): Promise<Product[]> {
  const res = await fetch(URL, {
    headers: {
      // "Cache-Control": "must-revalidate, no-cache, no-store, max-age=5",
      "Cache-Control": `must-revalidate, max-age=${randomNumberGenerator}`,
    },
  });
  const data = await res.json();
  return data;
}

// must-revalidate: Indica que el navegador o proxy debe revalidar la respuesta con el servidor antes de utilizarla, incluso si está en caché. Si no puede validarla, debe volver a solicitarla al servidor.
// max-age: Especifica el tiempo máximo en segundos que un recurso puede ser almacenado en caché.
