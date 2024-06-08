import Link from "next/link";
import { ReactNode } from "react";

interface SearchedLinkProps {
  children: ReactNode;
  item: string;
  setQuery: (query: string) => void;
}

export default function SearchedLink({
  children,
  item,
  setQuery,
}: SearchedLinkProps) {
  return (
    <Link
      onClick={() => setQuery("")}
      href={`/product/${item}`}
      className="w-full flex items-center font-light text-sm py-2 hover:bg-slate-100 pl-[1.1rem]"
    >
      {children}
    </Link>
  );
}
