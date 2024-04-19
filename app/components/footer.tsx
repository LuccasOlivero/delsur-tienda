import Image from "next/image";

export default function Footer() {
  const cardStyles =
    "relative text-center gap-y-2 px-2 h-full grid grid-cols-1 grid-rows-2";

  return (
    <footer className="bg-white border-t flex justify-center flex-col items-center">
      <section className="grid grid-cols-3 gap-3 p-10 mx-auto max-w-screen-xl">
        <div className={cardStyles}>
          <Image
            src="/payment.svg"
            alt="safe"
            className="m-auto"
            width={80}
            height={80}
            loading="lazy"
          />

          <div className="h-full w-full">
            <h3 className="font-medium text-base">Elegí cómo pagar</h3>
            <p className="font-light text-sm text-pretty">
              Podés pagar con tarjeta, débito o hasta 12 cuotas sin tarjeta con
              Mercado Crédito.
            </p>
          </div>

          <span className="absolute w-[.1rem] h-full top-[1rem] right-0 bottom-0 bg-slate-200"></span>
        </div>

        <div className={cardStyles}>
          <Image
            src="/shipping.svg"
            alt="shipping"
            className="m-auto"
            width={70}
            height={70}
            loading="lazy"
          />

          <div className="h-full w-full">
            <h3 className="font-medium text-base ">
              Envío gratis en todos los productos
            </h3>
            <p className="font-light text-sm text-pretty">
              Solo por estar registrado en Mercado Libre tenés envíos gratis en
              miles de productos. Es un beneficio de Mercado Puntos.
            </p>
          </div>
        </div>

        <div className={cardStyles}>
          <Image
            src="/safe.svg"
            alt="safe"
            className="m-auto"
            width={70}
            height={70}
            loading="lazy"
          />

          <div className="h-full w-full">
            <h3 className="font-medium text-base">Seguridad</h3>
            <p className="font-light text-sm text-pretty">
              No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no
              puedas hacer, porque estás siempre protegido.
            </p>
          </div>

          <span className="absolute w-[.1rem] h-full top-[1rem] left-0 bottom-0 bg-slate-200"></span>
        </div>
      </section>

      <section className="relative h-[4rem] w-full text-center flex flex-col justify-center">
        <h4 className="text-sm text-black font-light">
          Copyright &copy; {new Date().getFullYear()}, DelSur S.R.L.
        </h4>
        <p className="text-xs text-black font-light">
          Echo por{" "}
          <a
            href="https://www.linkedin.com/in/lucas-olivero-319090264/"
            className="hover:font-semibold hover:text-[#3782F7]"
          >
            Lucas Olivero
          </a>
        </p>
      </section>
    </footer>
  );
}
