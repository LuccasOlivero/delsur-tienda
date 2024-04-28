"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import Currency from "@/app/components/ui/currency";
import axios from "axios";
import Image from "next/image";
import SpinnerLoading from "@/app/components/ui/spinner-loading";

export default function Summary() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success(
        "Pago completado! Te va a llegar un mail con toda informacion detallada.",
        { duration: 200 }
      );
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("ALgo salió mal.");
    }
  }, [searchParams, removeAll]);

  const products = items.map((item) => item);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          productIds: items.map((item) => item.id),
        }
      );

      window.location = res.data.url;

      setLoading(false);
    } catch (error) {
      throw new Error(`ERROR_SUMARY, ${error}`);
    }
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:mt-0 lg:p-8 shadow-lg">
      <h2 className="text-lg font-medium text-gray-900 border-b pb-4">
        Resumen de compra
      </h2>

      <div className="mt-4 space-y-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between border-gray-200"
          >
            <div className="text-sm font-medium text-gray-900 text-pretty">
              {product.name}
            </div>
            <Currency value={product.price} className="font-normal" />
          </div>
        ))}
        {items.length && (
          <>
            <div className="flex items-center justify-between border-gray-200">
              <div className="text-sm font-medium text-gray-900">Envío</div>
              <span className="font-semibold text-green-500">Gratis</span>
            </div>
          </>
        )}
        <div className="flex items-center justify-between border-gray-200">
          <div className="text-lg font-medium text-gray-900">Total</div>
          <Currency value={totalPrice} className="text-xl" />
        </div>
      </div>

      <button
        onClick={onCheckout}
        disabled={items.length === 0 || loading}
        className="h-[2.8rem] w-full mt-6 bg-[#009EE3] rounded-md text-white font-normal hover:bg-[#007eb5] transition flex justify-center items-center shadow-sm"
      >
        {loading ? (
          <SpinnerLoading />
        ) : (
          <>
            <Image
              src="./mp.svg"
              alt="mp"
              width={30}
              height={30}
              className="mr-2"
            />{" "}
            Pagar con Mercado Pago
          </>
        )}
      </button>
    </div>
  );
}
