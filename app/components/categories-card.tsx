interface CategoriesCardsProps {
  title: string;
  iconPath: string;
  description: string;
  btn: string;
}

export default function CategoriesCards() {
  return (
    <section className="relative w-full h-[16rem] grid grid-cols-6 mb-8 gap-x-4">
      <CardTest
        title="Medios de pago"
        description="Paga tus compras de forma rápida y segura"
        iconPath="./wallet.svg"
        btn="Ver medios de pago"
      />
      <CardTest
        title="Menos de $20.000"
        description="Paga tus compras de forma rápida y segura"
        iconPath="./lowerPrice.svg"
        btn="Ver precios bajos"
      />
      <CardTest
        title="Más vendidos"
        description="Paga tus compras de forma rápida y segura"
        iconPath="./mostSell.svg"
        btn="Ver más vendidos"
      />
      <CardTest
        title="Decoración"
        description="Paga tus compras de forma rápida y segura"
        iconPath="./decoration.svg"
        btn="Ver vecoración"
      />
      <CardTest
        title="Herramientas"
        description="Paga tus compras de forma rápida y segura"
        iconPath="./tools.svg"
        btn="Ver herramientas"
      />
      <CardTest
        title="Electrónica"
        description="Paga tus compras de forma rápida y segura"
        iconPath="./electronic.svg"
        btn="Ver electrónica"
      />
    </section>
  );
}

function CardTest({ title, iconPath, description, btn }: CategoriesCardsProps) {
  return (
    <div className="w-full bg-[#f2f2f2] border shadow-sm rounded-lg p-2 flex flex-col text-center justify-between items-center">
      <h4 className="font-semibold">{title}</h4>

      <div className="rounded-full w-16 h-16 m-auto">
        <img src={iconPath} />
      </div>

      {/* description */}
      <p className="font-light text-xs pb-4">{description}</p>
      <button className="bg-slate-900 h-6 w-full text-white rounded-md flex items-center justify-center font-semibold text-xs">
        {btn}
      </button>
    </div>
  );
}
