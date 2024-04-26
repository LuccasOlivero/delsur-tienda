import Link from "next/link";
import Image from "next/image";

import getCategories from "@/actions/get-catgories";
import getAllProducts from "@/actions/get-all-products";

import Slider from "./slider";
import MainNav from "./main-nav";
import SearchBar from "./search-bar";
import NavbarActions from "./navbar-actions";
import Container from "./ui/container";

export const revalidate = 0;

export default async function Navbar() {
  const categories = await getCategories();
  const allProducts = await getAllProducts();

  return (
    <>
      <Container>
        <div className="border-b bg-white">
          <div className="relative flex h-16 w-full items-center">
            <Link
              href="/"
              className="rounded-full overflow-hidden h-12 w-[3.8rem]"
            >
              <Image
                priority={true}
                src="/logo.jpeg"
                alt="safe"
                width={120}
                height={120}
              />
            </Link>

            <MainNav data={categories} />

            <div className="w-full flex justify-end pr-4">
              <SearchBar products={allProducts} />
            </div>

            <NavbarActions />
          </div>
        </div>
      </Container>
      <Slider />
    </>
  );
}
