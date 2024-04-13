export default function Footer() {
  const cardStyles = "text-center gap-y-2 h-full grid grid-cols-1 grid-rows-2";
  return (
    <footer className="bg-white border-t flex justify-center flex-col items-center">
      <section className="grid grid-cols-3 gap-3 p-10 max-w-screen-2xl">
        <div className={cardStyles}>
          <img src="./payment.svg" alt="safe" className="w-[3.5rem] m-auto" />

          <div className="h-full w-full">
            <h3 className="font-medium text-base">Elegí cómo pagar</h3>
            <p className="font-light text-sm">
              Podés pagar con tarjetam, débito o hasta 12 cuotas sin tarjeta con
              Mercado Crédito.
            </p>
          </div>
        </div>

        <div className={cardStyles}>
          <img
            src="./shipping.svg"
            alt="shipping"
            className="w-[3.5rem] m-auto"
          />

          <div className="h-full w-full">
            <h3 className="font-medium text-base">
              Envío gratis en todos los productos
            </h3>
            <p className="font-light text-sm">
              Solo por estar registrado en Mercado Libre tenés envíos gratis en
              miles de productos. Es un beneficio de Mercado Puntos.
            </p>
          </div>
        </div>

        <div className={cardStyles}>
          <img src="./safe.svg" alt="safe" className="w-[3.5rem] m-auto" />

          <div className="h-full w-full">
            <h3 className="font-medium text-base">Seguridad</h3>
            <p className="font-light text-sm">
              No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no
              puedas hacer, porque estás siempre protegido.
            </p>
          </div>
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
            className="hover:font-semibold"
          >
            Lucas Olivero
          </a>
        </p>
      </section>
    </footer>
  );
}
