"use client";

import Image from "next/image";
import { Product } from "@/types";
import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

import useCart from "@/hooks/use-cart";
import usePreviewModal from "@/hooks/use-review-modals";

import Currency from "./currency";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";

interface ProductCard {
  data: Product;
}

export default function ProductCard({ data }: ProductCard) {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddtoCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div
      className="group cursor-pointer rounded-xl p-2 space-y-4 bg-white shadow-sm"
      onClick={handleClick}
    >
      {/* images and actions */}
      <div className="aspect-square rounded-xl relative">
        {/* se verifica que exista la url antes de renderizar la imagen del producto */}
        {data?.images?.[0]?.url && (
          <Image
            src={data?.images?.[0]?.url}
            alt="Image product"
            width={500}
            height={500}
            className="aspect-square object-cover rounded-md"
          />
        )}
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand />}
              className="text-grey-600"
            />
            <IconButton
              onClick={onAddtoCart}
              icon={<ShoppingCart />}
              className="text-grey-600"
            />
          </div>
        </div>
      </div>

      {/* description */}
      <div>
        <p className="font-semibol text-base">{data.name}</p>
        <p className="text-sm text-green-500 font-semibold">Envío gratis</p>
      </div>

      {/* price */}
      <div className="flex items-center justify-between text-xl">
        <Currency value={data?.price} />
      </div>
    </div>
  );
}
