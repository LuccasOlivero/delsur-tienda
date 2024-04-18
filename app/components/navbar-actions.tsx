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
        className="flex items-center rounded-full px-4 py-2 bg-slate-900 shadow-sm"
        onClick={() => route.push("/cart")}
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-meduim text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
}
