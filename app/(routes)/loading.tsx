import { ImageIcon } from "lucide-react";
import Container from "../components/ui/container";

export default function BillboardSkeleton() {
  return (
    <Container>
      <div>
        {/* <---------------------------- BILLBOARD LOADER ----------------------------> */}
        <div className="my-4 sm:my-6 lg:my-8 rounded-lg relative aspect-square md:aspect-[2.4/1] h-[18rem] w-full shadow-md skeleton flex items-center justify-center">
          <ImageIcon className="w-10 h-10" size={20} color="gray" />
        </div>

        {/* <---------------------------- CARDS LOADER ----------------------------> */}
        <div className="relative w-full h-[15rem] grid grid-cols-6 mb-8 gap-x-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>

        {/* <---------------------------- PRODUCTS LOADER ----------------------------> */}
        <div className="my-[2rem] flex flex-col gap-y-8 p-3 bg-[#f2f2f2] rounded-lg shadow-md">
          <span className="w-1/3 h-[2rem] skeleton"></span>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

function CardSkeleton() {
  return (
    <div className="w-full bg-[#f2f2f2] border shadow-sm rounded-lg p-2 flex flex-col text-center justify-between items-center">
      <span className="w-full skeleton h-[1.5rem] rounded-md"></span>

      <span className="rounded-full w-16 h-16 m-auto skeleton"></span>

      {/* description */}
      <span className="w-full h-[2rem] skeleton mb-[1rem] rounded-md"></span>
      <span className="skeleton h-6 w-full rounded-md flex items-center justify-center font-semibold text-xs"></span>
    </div>
  );
}
