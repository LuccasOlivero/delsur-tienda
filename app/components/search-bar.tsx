"use client";

import { ChangeEvent, useState, ReactNode, useEffect, useRef } from "react";
import Link from "next/link";
import Fuse from "fuse.js";

import { Product } from "@/types";

import { Search, SearchIcon } from "lucide-react";
import SearchedLink from "./searched-link";

interface ProductListProps {
  products?: Product[];
}

interface SearchedLinkProps {
  children: ReactNode;
  item: string;
  setQuery: (query: string) => void;
}

// configuration of fuse.js for product search
const fuseOptions = {
  keys: ["name"],
};

export default function SearchBar({ products = [] }: ProductListProps) {
  const [query, setQuery] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const fuse = new Fuse(products, fuseOptions);
  const result = fuse.search(query);

  function onQueryChanged(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;

    // validation of the user input
    if (/^[a-zA-Z\s]*$/.test(inputValue) || inputValue === "") {
      setQuery(inputValue);
    }
  }

  const productResults = result.map((result) => result.item).slice(0, 6);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (active && ref.current && !ref.current.contains(e.target as Node)) {
        setActive(false);
        setQuery("");
      } else return;
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, active]);

  return (
    <div className="relative" ref={ref}>
      <div className="relative flex h-[2.335rem]">
        <input
          type="text"
          placeholder="Buscá productos..."
          className="shadow-sm bg-slate-50 border w-full h-full rounded-l-3xl px-4 text-sm flex items-center focus:outline-[#3877d4] focus:outline-1"
          onChange={onQueryChanged}
          onClick={() => setActive(true)}
          value={query}
        />
        <div className="flex justify-center items-center bg-black shadow-sm border h-full w-[3rem] pr-2 rounded-r-3xl">
          <SearchIcon className="left-0" size={23} color="white" />
        </div>
      </div>

      {active && (
        <div className="w-full bg-slate-50 absolute rounded-lg top-[2.5rem] left-0 z-10 flex flex-col overflow-hidden">
          {productResults.map((item) => (
            <SearchedLink key={item.id} item={item.id} setQuery={setQuery}>
              <Search className="absolute left-[.1rem] w-4" size={14} />{" "}
              {item.name}
            </SearchedLink>
          ))}
        </div>
      )}
    </div>
  );
}
