"use client";

import { ShoppingBag } from "lucide-react";
import Button from "./ui/button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

export default function NavbarActions() {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  const route = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        className="flex items-center rounded-full bg-black px-4 py-2"
        onClick={() => route.push("/cart")}
      >
        <ShoppingBag className="" size={20} color="white" />
        <span className="ml-2 text-sm font-meduim text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
}
