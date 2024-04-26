"use client";

import { useEffect, useState } from "react";

import useCart from "@/hooks/use-cart";

import CartItem from "./components/cart-item";
import Summary from "./components/sumary";

import Container from "@/app/components/ui/container";

export const revalidate = 0;

export default function CartPage() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Container>
      <div className="py-10">
        <h1 className="relative text-3xl font-bold text-black pb-2 border-b">
          Carrito
        </h1>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
          <div className="lg:col-span-7 bg-gray-50 shadow-lg rounded-lg px-4 py-6 sm:p-6">
            {cart.items.length === 0 && (
              <p className="text-neutral-500">
                No hay productos en el carrito.
              </p>
            )}
            <ul>
              {cart.items.map((item) => (
                <CartItem key={item.id} data={item} />
              ))}
            </ul>
          </div>
          <Summary />
        </div>
      </div>
    </Container>
  );
}
