"use client";

import { MouseEventHandler } from "react";
import { Product } from "@/types";

import useCart from "@/hooks/use-cart";

import { ShoppingCart } from "lucide-react";

import Currency from "./ui/currency";
import Button from "./ui/button";

interface InfoProps {
  data: Product;
}

export default function Info({ data }: InfoProps) {
  const cart = useCart();

  const onAddtoCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    cart.addItem(data);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <span>Envio gratis</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quos.
        Blanditiis voluptas expedita, harum optio itaque rem corporis facilis id
        aperiam delectus cumque sit esse. Odit vero praesentium sit perferendis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quos.
        Blanditiis voluptas expedita, harum optio itaque rem corporis facilis id
        aperiam delectus cumque sit esse. Odit vero praesentium sit perferendis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quos.
        Blanditiis voluptas expedita, harum optio itaque rem corporis facilis id
        aperiam delectus cumque sit esse. Odit vero praesentium sit perferendis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quos.
        Blanditiis voluptas expedita, harum optio itaque rem corporis facilis id
        aperiam delectus cumque sit esse. Odit vero praesentium sit perferendis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quos.
        Blanditiis voluptas expedita, harum optio itaque rem corporis facilis id
        aperiam delectus cumque sit esse. Odit vero praesentium sit perferendis?
      </p>
      <div className="mt-3 flex items-end justify-between">
        <span className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </span>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddtoCart} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
}
