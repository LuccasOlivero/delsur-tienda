import getBillboard from "@/actions/get-billboard";
import Billboard from "../components/billboard";
import Container from "../components/ui/container";
import ProductList from "../components/product-list";
import getAllProducts from "@/actions/get-all-products";
import getProductsFeatured from "@/actions/get-products";

export const revalidate = 0;

export default async function HomePage() {
  const billboard = await getBillboard("04a7d02b-9fbb-4e98-93bd-0f9ac3b346bd"); // portada de la pagina principal de la tienda
  const productsFeatured = await getProductsFeatured({ isFeatured: true });
  const allProducts = await getAllProducts();

  return (
    <Container>
      <div className="pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 p-4 sm:px-6 lg:px-8 bg-[#f2f2f2] rounded-lg">
          <ProductList
            className="gap-3"
            title="Más vendidos del mes"
            products={productsFeatured}
          />
        </div>

        {/* ACA VAN CARDS DE CATEGORIAS */}

        <div className="mt-[2rem] flex flex-col gap-y-8 p-4 sm:px-6 lg:px-8 bg-[#f2f2f2] rounded-lg">
          <ProductList
            title="Un poco de todo"
            products={allProducts}
            className="gap-0"
          />
        </div>

        {/* ACA VAN CARDS DE CATEGORIAS, si, otra mas */}
      </div>
    </Container>
  );
}
