interface CategoriesCardsProps {
  title: string;
  iconPath: string;
  description: string;
  label: string;
}
const categoriesData = [
  {
    title: "Medios de pago",
    description: "Paga tus compras de forma rápida y segura",
    iconPath: "./wallet.svg",
    label: "Ver medios de pago",
  },
  {
    title: "Menos de $20.000",
    description: "Encuentra productos por menos de $20.000",
    iconPath: "./lowerPrice.svg",
    label: "Ver precios bajos",
  },
  {
    title: "Más vendidos",
    description: "Descubre los productos más populares",
    iconPath: "./mostSell.svg",
    label: "Ver más vendidos",
  },
  {
    title: "Decoración",
    description: "Explora una amplia selección de decoración para tu hogar",
    iconPath: "./decoration.svg",
    label: "Ver decoración",
  },
  {
    title: "Herramientas",
    description: "Encuentra las herramientas adecuadas para tus proyectos",
    iconPath: "./tools.svg",
    label: "Ver herramientas",
  },
  {
    title: "Electrónica",
    description: "Descubre las últimas novedades en electrónica",
    iconPath: "./electronic.svg",
    label: "Ver electrónica",
  },
  // Puedes agregar más objetos de categorías aquí según sea necesario
];

export default function CategoriesCards() {
  return (
    <section className="relative w-full h-[15rem] grid grid-cols-6 mb-8 gap-x-4">
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
    <div className="w-full bg-[#f2f2f2] border shadow-sm rounded-lg p-2 flex flex-col text-center justify-between items-center">
      <h4 className="font-semibold">{title}</h4>

      <div className="rounded-full w-16 h-16 m-auto">
        <img src={iconPath} alt="logo" />
      </div>

      {/* description */}
      <p className="font-light text-xs pb-4">{description}</p>
      <span className="bg-[#3877d4] h-6 w-full text-white rounded-md flex items-center justify-center font-semibold text-xs">
        {label}
      </span>
    </div>
  );
}
