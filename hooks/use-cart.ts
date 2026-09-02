import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  decrementItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.product.id === data.id);

        if (existingItem) {
          set({
            items: currentItems.map((item) =>
              item.product.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          });
          toast.success("Cantidad aumentada en el carrito");
        } else {
          set({ items: [...get().items, { product: data, quantity: 1 }] });
          toast.success("Agregado al carrito");
        }
      },
      decrementItem: (id: string) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.product.id === id);

        if (existingItem && existingItem.quantity > 1) {
          set({
            items: currentItems.map((item) =>
              item.product.id === id ? { ...item, quantity: item.quantity - 1 } : item
            ),
          });
        } else {
          set({ items: [...get().items.filter((item) => item.product.id !== id)] });
        }
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.product.id !== id)] });
        toast.success("Eliminado del carrito");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
