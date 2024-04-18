"use client";

import { ChangeEvent, useState, ReactNode } from "react";
import Link from "next/link";
import Fuse from "fuse.js";

import { Product } from "@/types";

import { Search } from "lucide-react";

interface ProductListProps {
  products?: Product[];
}

interface SearchedLinkProps {
  children: ReactNode;
  item: string;
}

export default function SearchBar({ products = [] }: ProductListProps) {
  const [query, setQuery] = useState<string>("");

  const fuseOptions = {
    keys: ["name"],
  };

  const fuse = new Fuse(products, fuseOptions);
  const result = fuse.search(query);

  function onQueryChanged(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;

    // Validar el valor del input del usuario
    if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === "") {
      setQuery(inputValue);
    }
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
      <div className="w-full bg-[#f2f2f2] absolute rounded-lg top-[2.5rem] left-0 z-10 flex flex-col overflow-hidden">
        {productResults.map((item) => (
          <SearchedLink key={item.id} item={item.id}>
            <Search className="absolute left-[.3rem] w-4" /> {item.name}
          </SearchedLink>
        ))}
      </div>
    </form>
  );

  function SearchedLink({ children, item }: SearchedLinkProps) {
    return (
      <Link
        onClick={() => setQuery("")}
        href={`/product/${item}`}
        className="w-full flex items-center font-semibold text-sm py-2 hover:bg-slate-200 pl-6 pr-4"
      >
        {children}
      </Link>
    );
  }
}
