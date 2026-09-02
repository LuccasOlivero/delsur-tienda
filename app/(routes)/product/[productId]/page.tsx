import { Suspense } from "react";
import type { Metadata } from "next";

import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";

import Gallery from "@/app/components/gallery";
import Info from "@/app/components/info";
import ProductList from "@/app/components/product-list";
import Container from "@/app/components/ui/container";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(params.productId);
  return {
    title: product?.name || "Producto Delsur",
    description: product?.name ? `Comprá ${product.name} en Delsur` : "Detalles del producto",
    openGraph: {
      images: product?.images?.[0]?.url ? [product.images[0].url] : [],
    }
  };
}

async function SuggestedProducts({ categoryId }: { categoryId?: string }) {
  if (!categoryId) return null;
  const suggestedProducts = await getProducts({ categoryId });
  return (
    <ProductList
      title="Productos relacionados"
      products={suggestedProducts}
      className=""
    />
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.productId);

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

          <Suspense fallback={<div className="h-24 flex items-center justify-center">Cargando relacionados...</div>}>
            <SuggestedProducts categoryId={product?.category?.id} />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
