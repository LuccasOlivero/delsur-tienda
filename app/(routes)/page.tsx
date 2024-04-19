import getBillboard from "@/actions/get-billboard";
import getAllProducts from "@/actions/get-all-products";
import getProductsFeatured from "@/actions/get-products";

import Billboard from "../components/billboard";
import Container from "../components/ui/container";
import ProductList from "../components/product-list";
import CategoriesCards from "../components/categories-card";
import { Suspense } from "react";

export const revalidate = 0;

export default async function HomePage() {
  // portada de la pagina principal de la tienda
  const billboard = await getBillboard("04a7d02b-9fbb-4e98-93bd-0f9ac3b346bd");

  const productsFeatured = await getProductsFeatured({ isFeatured: true });
  const allProducts = await getAllProducts();

  return (
    <Container>
      <div>
        <Billboard data={billboard} />
        <CategoriesCards />

        <div className="flex flex-col gap-y-8 p-3 bg-[#f2f2f2] rounded-lg shadow-md">
          <ProductList
            className="gap-1"
            title="Más vendidos del mes"
            products={productsFeatured}
          />
        </div>

        <div className="my-[2rem] flex flex-col gap-y-8 p-3 bg-[#f2f2f2] rounded-lg shadow-md">
          <ProductList
            title="Un poco de todo"
            products={allProducts}
            className="gap-0"
          />
        </div>

        <CategoriesCards />
      </div>
    </Container>
  );
}
