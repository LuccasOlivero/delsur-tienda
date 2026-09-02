# 🛒 Delsur Tienda - Frontend

Frontend del e-commerce Delsur. Construido con Next.js 14 (App Router), Tailwind CSS y Zustand.

## 🚀 Características
- **Next.js App Router**: Navegación rápida y rutas dinámicas.
- **Incremental Static Regeneration (ISR)**: Páginas estáticas cacheadas que se revalidan en segundo plano (cada 60s) para una velocidad extrema.
- **SEO Optimizado**: Mapas de sitio automáticos (`sitemap.xml`), `robots.txt` y metadata dinámica (OpenGraph) en productos y categorías.
- **Carrito de Compras Persistente**: Uso de `Zustand` para almacenar el estado del carrito en `localStorage`, ahora con soporte nativo para gestionar múltiples unidades por producto.
- **UI Responsiva**: Diseñado con Tailwind CSS, completamente adaptable a dispositivos móviles.

## 🛠️ Tecnologías Principales
- [Next.js 14](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Axios](https://axios-http.com/)
- [Mercado Pago](https://www.mercadopago.com.ar/) (Redirección a Checkout)

## 💻 Entorno de Desarrollo Local

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Configura las variables de entorno en el archivo `.env`:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000/api/<TU_STORE_ID>
   BILLBOARD_ID=<TU_BILLBOARD_ID>
   ```
   *(Nota: Asegúrate de tener corriendo el panel `delsur-administrador` para que las rutas API estén disponibles y crear una tienda para obtener los IDs).*

3. Corre el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre [http://localhost:3001](http://localhost:3001) en tu navegador.
