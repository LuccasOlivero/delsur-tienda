"use client";

import { cn } from "@/app/lib/utils";
import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
});

interface CurrencyProps {
  value?: string | number;
  className?: string;
}

export default function Currency({ value, className }: CurrencyProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={cn("font-semibold text-sm", className)}>
      {formatter.format(Number(value))}
    </div>
  );
}
