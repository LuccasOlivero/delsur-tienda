"use client";

import { Product } from "@/types";
import { ChangeEvent, useRef, useState } from "react";

interface ProductListProps {
  products?: Product[];
}

export default function SearchBar({ products = [] }: ProductListProps) {
  const [searchProduct, setSearchProduct] = useState<string[]>([]);
  const debounceRef = useRef<NodeJS.Timeout>();

  const productName = products.map((product) => product?.name.toLowerCase());

  function onQueryChanged(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      if (inputValue === "") {
        // Si el input está vacío, limpia los resultados de la búsqueda
        setSearchProduct([]);
      } else {
        const filteredProducts = productName.filter((productName) =>
          productName.includes(inputValue.toLowerCase())
        );
        setSearchProduct(filteredProducts);
      }
    }, 400);
  }

  return (
    <form className="relative">
      <input
        type="text"
        placeholder="Buscá productos..."
        className="shadow-sm bg-[#f2f2f2] border w-[16rem] h-[2.27rem] rounded-3xl px-4 text-sm flex items-center"
        onChange={onQueryChanged}
      />
      <div className="w-full bg-[#f2f2f2] absolute rounded-lg top-[2.5rem] left-0 z-10 flex flex-col px-4">
        {searchProduct.length !== 0 && (
          <>
            {searchProduct?.map((product) => (
              <LinkSearched key={product}>{product}</LinkSearched>
            ))}
          </>
        )}
      </div>
    </form>
  );
}

function LinkSearched({ children }: any) {
  return (
    <a href="" className="w-full flex items-center font-semibold text-sm py-2">
      {children}
    </a>
  );
}
