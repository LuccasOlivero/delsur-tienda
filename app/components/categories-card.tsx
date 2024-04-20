import Image from "next/image";

interface CategoriesCardsProps {
  title: string;
  iconPath: string;
  description: string;
  label: string;
}
const categoriesData = [
  {
    title: "Medios de pago",
    description: "Paga de forma rápida y segura",
    iconPath: "./wallet.svg",
    label: "Ver medios de pago",
  },
  {
    title: "Menos de $20.000",
    description: "Productos por menos de $20.000",
    iconPath: "./lowerPrice.svg",
    label: "Ver precios bajos",
  },
  {
    title: "Más vendidos",
    description: "Los productos más populares",
    iconPath: "./mostSell.svg",
    label: "Ver más vendidos",
  },
  {
    title: "Decoración",
    description: "Selección perfecta para tu hogar",
    iconPath: "./decoration.svg",
    label: "Ver decoración",
  },
  {
    title: "Herramientas",
    description: "Herramientas para tus proyectos",
    iconPath: "./tools.svg",
    label: "Ver herramientas",
  },
  {
    title: "Electrónica",
    description: "Últimas novedades en electrónica",
    iconPath: "./electronic.svg",
    label: "Ver electrónica",
  },
  // Puedes agregar más objetos de categorías aquí según sea necesario
];

export default function CategoriesCards() {
  return (
    <section className="relative w-full grid mb-8 gap-4 md:grid-cols-3 lg:grid-cols-6">
      {categoriesData.map((category, index) => (
        <Card
          key={index}
          title={category.title}
          description={category.description}
          iconPath={category.iconPath}
          label={category.label}
        />
      ))}
    </section>
  );
}

function Card({ title, iconPath, description, label }: CategoriesCardsProps) {
  return (
    <div className="min-h-[15rem] min-w-10 bg-[#f2f2f2] border shadow-sm rounded-lg p-2 flex flex-col text-center justify-between items-center">
      <h4 className="font-semibold">{title}</h4>

      <div className="relative rounded-full w-14 h-14 m-auto">
        <Image src={iconPath} alt="logo" fill />
      </div>

      {/* description */}
      <p className="font-light text-xs pb-4 text-pretty">{description}</p>
      <span className="bg-[#3877d4] h-6 w-full text-white rounded-md flex items-center justify-center font-semibold text-xs">
        {label}
      </span>
    </div>
  );
}
