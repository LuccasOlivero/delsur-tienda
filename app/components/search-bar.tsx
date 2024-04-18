"use client";

import { Product } from "@/types";
import { ChangeEvent, useRef, useState } from "react";
import Fuse from "fuse.js";

interface ProductListProps {
  products?: Product[];
}

export default function SearchBar({ products = [] }: ProductListProps) {
  const [query, setQuery] = useState("");

  const fuseOptions = {
    keys: ["name"],
  };

  const fuse = new Fuse(products, fuseOptions);
  const result = fuse.search(query);

  function onQueryChanged(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    setQuery(inputValue);
  }

  const productResults = result.map((result) => result.item);

  return (
    <form className="relative">
      <input
        type="text"
        placeholder="Buscá productos..."
        className="shadow-sm bg-[#f2f2f2] border w-[16rem] h-[2.27rem] rounded-3xl px-4 text-sm flex items-center"
        onChange={onQueryChanged}
        value={query}
      />
      <div className="w-full bg-[#f2f2f2] absolute rounded-lg top-[2.5rem] left-0 z-10 flex flex-col px-4">
        {productResults.map((test) => (
          <LinkSearched key={test}>{test.name}</LinkSearched>
        ))}
      </div>
    </form>
  );

  function LinkSearched({ children }: any) {
    return (
      <a
        href=""
        className="w-full flex items-center font-semibold text-sm py-2"
      >
        {children}
      </a>
    );
  }
}
