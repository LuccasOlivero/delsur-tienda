import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";

import Gallery from "@/app/components/gallery";
import Info from "@/app/components/info";
import ProductList from "@/app/components/product-list";
import Container from "@/app/components/ui/container";
import { Suspense } from "react";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.productId);

  // TODO: hcaer esta peticion secundaria, primero que se cargue el producto principal y despues los suggested products
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  if (!product) {
    return null;
  }
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product?.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />

          <ProductList
            title="Productos relacionados"
            products={suggestedProducts}
            className=""
          />
        </div>
      </Container>
    </div>
  );
}
