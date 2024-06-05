import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";

import Billboard from "@/app/components/billboard";
import Container from "@/app/components/ui/container";
import NoResults from "@/app/components/ui/no-results";
import ProductCard from "@/app/components/ui/product-card";
import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const colors = await getColors();
  const category = await getCategory(params.categoryId);
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
  });

  return (
    <section className="bg-white">
      <Container>
        <Billboard data={category?.billboard} />

        <div>
          <div className="lg:grid lg:grid-cols-6">
            <MobileFilters colors={colors} />

            <div className="hidden lg:block mr-4">
              <Filter valueKey="colorId" name="Colores" data={colors} />
            </div>

            <div className="my-6 lg:col-span-5 lg:mt-0">
              {products.length === 0 && <NoResults />}

              <div className="grid p-2 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 bg-[#f2f2f2] rounded-lg shadow-sm">
                {products?.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
