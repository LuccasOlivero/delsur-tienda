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
      <div className="border-b bg-white">
        <Container>
          <div className="relative flex h-16 w-full items-center">
            <Link href="/" className="rounded-full overflow-hidden h-12">
              <Image
                priority={true}
                src="/logo.jpeg"
                alt="safe"
                width={120}
                height={0}
              />
            </Link>

            <MainNav data={categories} />

            <div className="w-full flex justify-end pr-4">
              <SearchBar products={allProducts} />
            </div>

            <NavbarActions />
          </div>
        </Container>
      </div>
      <Slider />
    </>
  );
}
