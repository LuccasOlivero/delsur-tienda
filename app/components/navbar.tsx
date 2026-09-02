import Link from "next/link";

import getCategories from "@/actions/get-categories";
import getAllProducts from "@/actions/get-all-products";

import Slider from "./slider";
import MainNav from "./main-nav";
import SearchBar from "./search-bar";
import NavbarActions from "./navbar-actions";
import Container from "./ui/container";

export const revalidate = 60;

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
              className="rounded-full overflow-hidden h-12 min-h-10 w-[5rem] min-w-[3rem] max-lg:w-[3rem] max-lg:h-[3rem]"
            >
              <img
                src="/logo.jpeg"
                alt="safe"
                className="w-full h-full object-cover"
              />
            </Link>

            <MainNav data={categories} />

            <div className="w-full flex justify-end pr-4 max-sm:pl-4">
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
