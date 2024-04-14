import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

export default function Billboard({ data }: BillboardProps) {
  return (
    <div className="py-4 sm:py-6 lg:py-8 overflow-hidden ">
      <div
        className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover h-[18rem] w-full bg-center shadow-md"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      ></div>
    </div>
  );
}
