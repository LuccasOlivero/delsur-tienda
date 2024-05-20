import * as z from "zod";

export const argentinianProvinces = [
  "Buenos Aires",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán",
] as const;

export const formSchema = z.object({
  name: z.string().min(3, {
    message: "Nombre invalido, por favor, revise e intente de nuevo.",
  }),
  surname: z.string().min(3, {
    message: "Apellido invalido, por favor, revise e intente de nuevo.",
  }),
  dni: z.coerce
    .string()
    .min(8, {
      message: "El dni tiene que tener 8 dígitos.",
    })
    .max(8, {
      message: "El dni no puede tener tener más de 8 dígitos.",
    }),
  city: z.string().min(3, {
    message: "Nombre de la ciudad es invalido.",
  }),
  streetAddress: z.string().max(35, {
    message: "La dirección es invalida, por favor, revise e intente de nuevo.",
  }),
  houseNumber: z.coerce.string().max(4, {
    message:
      "Numero de casa/dpto es demasiado largo, por favor, revise e intente de nuevo.",
  }),
  province: z.enum(argentinianProvinces, {
    message: "Seleccione una provincia.",
  }),
  zipCode: z.coerce.string().max(4, {
    message: "Código postal invalido, por favor, revise e intente de nuevo.",
  }),
  phoneNumberA: z
    .string()
    .min(10, {
      message:
        "El número de celular tiene que empezar con el prefijo de su provincia.",
    })
    .max(10, {
      message:
        "Numero de celular demasiado largo, por favor, revise e intente de nuevo.",
    }),
  emailA: z.string().email({
    message: "Email invalido, por favor, revise e intente de nuevo.",
  }),
});
