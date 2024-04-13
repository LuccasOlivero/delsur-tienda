import getBillboard from "@/actions/get-billboard";
import Billboard from "../components/billboard";
import Container from "../components/ui/container";
import getProducts from "@/actions/get-products";
import ProductList from "../components/product-list";

export const revalidate = 0;

export default async function HomePage() {
  const billboard = await getBillboard("04a7d02b-9fbb-4e98-93bd-0f9ac3b346bd");
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 p-4 sm:px-6 lg:px-8 bg-[#f2f2f2] rounded-lg">
          <ProductList title="Más vendidos del mes" items={products} />
        </div>
      </div>
    </Container>
  );
}
