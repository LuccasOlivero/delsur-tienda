import getBillboard from "@/actions/get-billboard";
import getAllProducts from "@/actions/get-all-products";
import getProductsFeatured from "@/actions/get-products";

import Billboard from "@/app/components/billboard";
import Container from "@/app/components/ui/container";
import ProductList from "@/app/components/product-list";
import CategoriesCards from "@/app/components/categories-card";
import getCategories from "@/actions/get-catgories";

export const revalidate = 0;

export default async function HomePage() {
  // portada de la pagina principal de la tienda
  const billboard = await getBillboard("04a7d02b-9fbb-4e98-93bd-0f9ac3b346bd");
  const productsFeatured = await getProductsFeatured({ isFeatured: true });
  const allProducts = await getAllProducts();
  const categories = await getCategories();

  return (
    <Container>
      <Billboard data={billboard} />

      <CategoriesCards data={categories} />

      <div className="flex flex-col gap-y-8 p-3 bg-gray-50 rounded-lg shadow-md">
        <ProductList
          className="gap-1"
          title="Más vendidos del mes"
          products={productsFeatured}
        />
      </div>

      <div className="my-[2rem] flex flex-col gap-y-8 p-3 bg-gray-50 rounded-lg shadow-md">
        <ProductList
          title="Un poco de todo"
          products={allProducts}
          className="gap-0"
        />
      </div>

      <CategoriesCards data={categories} />
    </Container>
  );
}
