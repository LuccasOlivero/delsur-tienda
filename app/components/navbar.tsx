import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-catgories";
import NavbarActions from "./navbar-actions";
import Image from "next/image";
import Slider from "./slider";

export const revalidate = 0;

export default async function Navbar() {
  const categories = await getCategories();
  return (
    <>
      <div className="border-b bg-white">
        <Container>
          <div className="relative py-4 sm-py-6 lg:py-8 flex h-16 items-center">
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
              <p className="font-bold text-xl">
                <Image
                  src="/logo.jpeg"
                  alt="safe"
                  className="h-12 rounded-full"
                  width={60}
                  height={30}
                  loading="lazy"
                />
              </p>
            </Link>
            <MainNav data={categories} />

            {/* Barra de busqueda */}
            <div className="border-slate-900 border-2 w-[16rem] h-[2.5rem] rounded-full"></div>

            <NavbarActions />
          </div>
        </Container>
      </div>
      <Slider />
    </>
  );
}
