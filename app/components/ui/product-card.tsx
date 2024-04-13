"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-review-modals";
import useCart from "@/hooks/use-cart";

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
      className="group cursor-pointer rounded-xl border p-3 space-y-4 bg-white"
      onClick={handleClick}
    >
      {/* images and actions */}
      <div className="aspect-square rounded-xl relative">
        <Image
          src={data?.images?.[0].url}
          alt="Image"
          fill
          className="aspect-square object-cover rounded-md"
        />
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
        <p className="font-semibol text-lg">{data.name}</p>
        <p className="text-sm text-green-500 font-semibold">Envío gratis</p>
      </div>
      {/* price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
}
