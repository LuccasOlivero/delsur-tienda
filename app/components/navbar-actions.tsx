"use client";

import { useRouter } from "next/navigation";
import useCart from "@/hooks/use-cart";

import Button from "./ui/button";

import { ShoppingBag } from "lucide-react";

export default function NavbarActions() {
  const cart = useCart();
  const route = useRouter();

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        className="flex items-center rounded-full px-4 py-2 shadow-md max-sm:px-3 max-sm:py-2"
        onClick={() => route.push("/cart")}
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-meduim text-white">
          {cart.items.reduce((total, item) => total + item.quantity, 0)}
        </span>
      </Button>
    </div>
  );
}
