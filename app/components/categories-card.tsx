"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Category } from "@/types";

interface CategoriesCardsProps {
  title: string;
  iconPath: string;
  description: string;
  label: string;
  onClick: () => void;
}
const categoriesData = [
  {
    title: "Electrónica",
    description: "Últimas novedades en electrónica",
    iconPath: "./electronic.svg",
    label: "Ver electrónica",
  },
  {
    title: "Menos de $20.000",
    description: "Productos por menos de $20.000",
    iconPath: "./lowerPrice.svg",
    label: "Ver precios bajos",
    link: "",
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
    title: "Medios de pago",
    description: "Paga de forma rápida y segura",
    iconPath: "./wallet.svg",
    label: "Ver medios de pago",
    link: "#",
  },
  // Puedes agregar más objetos de categorías aquí según sea necesario
];

interface categoriesProps {
  data: Category[];
}

export default function CategoriesCards({ data }: categoriesProps) {
  const route = useRouter();

  const routes = data.map((route) => ({
    href: `${route.id}`,
  }));

  return (
    <section className="relative w-full grid mb-8 gap-4 md:grid-cols-3 lg:grid-cols-6">
      {categoriesData.map((category, index) => (
        <Card
          key={index}
          title={category.title}
          description={category.description}
          iconPath={category.iconPath}
          label={category.label}
          onClick={() => route.push(`/category/${routes[index].href}`)}
        />
      ))}
    </section>
  );
}

function Card({
  title,
  iconPath,
  description,
  label,
  onClick,
}: CategoriesCardsProps) {
  return (
    <div
      className="min-h-[15rem] min-w-10 bg-gray-50 shadow-lg rounded-lg p-2 flex flex-col text-center justify-between items-center"
      onClick={onClick}
    >
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
