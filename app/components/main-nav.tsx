"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Category } from "@/types";
import { cn } from "../lib/utils";

interface MainNavProps {
  data: Category[];
}

export default function MainNav({ data }: MainNavProps) {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-4 flex items-center space-x-3 lg:space-x-5 max-sm:mx-2 max-sm:grid max-sm:grid-cols-2 max-sm:space-x-0 max-sm:gap-y-1 max-sm:gap-x-2">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black leading-[0.85rem]",
            route.active ? "text-black" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
