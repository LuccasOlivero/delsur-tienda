import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import toast from "react-hot-toast";
import useShowForm from "@/hooks/use-show-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { argentinianProvinces, formSchema } from "../validations/formSchema";

export default function ShippingForm() {
  const [loading, setLoading] = useState(false);
  const { setUserData, onClose, isFormCompleted, onCompleteForm } =
    useShowForm();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setUserData(data);
    onCompleteForm();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Datos guardados correctamente");
    }, 600);
    return;
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
            {/* input nombre y apellido  */}
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
          {/* <----------------- mensaje de error en el nombre o apellido ----------------->*/}
          {form.formState.errors?.name && (
            <FormMessage className="text-red-500">
              {form.formState.errors.name.message}
            </FormMessage>
          )}
          {form.formState.errors?.surname && (
            <FormMessage className=" text-red-500">
              {form.formState.errors.surname.message}
            </FormMessage>
          )}

          {/* input dni */}
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
          {/* <----------------- mensaje de error en el dni ----------------->*/}
          {form.formState.errors?.dni && (
            <FormMessage className="text-red-500">
              {form.formState.errors.dni.message}
            </FormMessage>
          )}

          {/* input ciudad y provincia */}
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
          {/* <----------------- mensaje de error en el ciudad o provincia ----------------->*/}
          {form.formState.errors?.city && (
            <FormMessage className="text-red-500">
              {form.formState.errors.city.message}
            </FormMessage>
          )}
          {form.formState.errors?.province && (
            <FormMessage className="text-red-500">
              {form.formState.errors.province.message}
            </FormMessage>
          )}

          {/* input direccion */}
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
          {/* <----------------- mensaje de error en el direccion ----------------->*/}
          {form.formState.errors?.streetAddress && (
            <FormMessage className="text-red-500">
              {form.formState.errors.streetAddress.message}
            </FormMessage>
          )}

          {/* input número de casa o dpto */}
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
          {/* <----------------- mensaje de error en el número de casa o dpto ----------------->*/}
          {form.formState.errors?.houseNumber && (
            <FormMessage className="text-red-500">
              {form.formState.errors.houseNumber.message}
            </FormMessage>
          )}
          {form.formState.errors?.zipCode && (
            <FormMessage className="text-red-500">
              {form.formState.errors.zipCode.message}
            </FormMessage>
          )}

          {/* input teléfono */}
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
          {/* <----------------- mensaje de error en el número de celular ----------------->*/}
          {form.formState.errors?.phoneNumberA && (
            <FormMessage className="text-red-500">
              {form.formState.errors.phoneNumberA.message}
            </FormMessage>
          )}

          {/* input email */}
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

          {/* <----------------- mensaje de error en el email ----------------->*/}
          {form.formState.errors?.emailA && (
            <FormMessage className="text-red-500">
              {form.formState.errors.emailA.message}
            </FormMessage>
          )}
          <Button type="submit">
            {isFormCompleted ? "Actualizar" : "Guardar y enviar"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
