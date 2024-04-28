import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronUpIcon } from "lucide-react";
import useShowForm from "@/hooks/use-show-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(3),
  surname: z.string().min(3),
  dni: z.coerce.number().min(8),
  streetAddress: z.string().min(3),
  houseNumber: z.coerce.number().min(1),
  city: z.string(),
  province: z.string().min(3),
  zipCode: z.coerce.number().min(3),
  phoneNumberA: z.coerce.number().min(3),
  emailA: z.string().min(3),
});

export default function ShippingForm() {
  const [loading, setLoading] = useState(false);

  const { onClose } = useShowForm();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "lucas",
      surname: "test",
      dni: 12345678,
      streetAddress: "sadfasd",
      houseNumber: 1231,
      city: "asdsadas",
      province: "",
      zipCode: 1231,
      phoneNumberA: 12312332,
      emailA: "lucas@gmail.com",
    },
  });

  const argentinianProvinces: string[] = [
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
  ];

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    // onClose();
  };

  return (
    <div className="bg-gray-50 w-full text-white text-base h-auto rounded-lg shadow-lg mb-10 p-4">
      {/* se usa el metodo "spread" {...form}, para pasar todas sus propiedaes que se extraen de useForm */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2"
        >
          <div className="relative flex w-full h-full justify-center items-end gap-x-2">
            {/* icono cerrar form */}
            <ChevronUpIcon
              className="absolute w-5 h-5 right-0 top-0 text-black cursor-pointer"
              onClick={onClose}
            />
            {/* icono cerrar form */}

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black text-xs">
                    Datos de envío
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="text-black"
                      placeholder="Nombre"
                      disabled={loading}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      className="text-black"
                      placeholder="Apellido"
                      {...field}
                      disabled={loading}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="dni"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    className="text-black"
                    placeholder="DNI (IMPORTANTE PARA EL ENVÍO)"
                    disabled={loading}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex w-full h-full justify-center items-end gap-x-2">
            <div className="w-full h-full">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="text-black"
                        placeholder="Ciudad"
                        {...field}
                        disabled={loading}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full h-full">
              <FormField
                control={form.control}
                name="province"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      disabled={loading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl className="text-black">
                        <SelectTrigger>
                          <SelectValue
                            defaultValue={field.value}
                            placeholder="Provincia"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {argentinianProvinces.map((province) => (
                          <SelectItem key={province} value={province}>
                            {province}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="streetAddress"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="text-black"
                    placeholder="Direccíon"
                    {...field}
                    disabled={loading}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex w-full h-full justify-center items-end gap-x-2">
            <FormField
              control={form.control}
              name="houseNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      className="text-black"
                      placeholder="Número de casa/dpto"
                      {...field}
                      disabled={loading}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      className="text-black"
                      placeholder="Código postal"
                      {...field}
                      disabled={loading}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="phoneNumberA"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black text-xs">Contacto</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="text-black"
                    placeholder="Número de celular"
                    {...field}
                    disabled={loading}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="emailA"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    className="text-black"
                    placeholder="Email"
                    {...field}
                    disabled={loading}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Guardar</Button>
        </form>
      </Form>
    </div>
  );
}
