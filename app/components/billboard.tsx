import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

export default function Billboard({ data }: BillboardProps) {
  return (
    <div className="py-4 sm:py-6 lg:py-8 overflow-hidden">
      <div
        className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover h-[18rem] w-full bg-center"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-end items-center text-center gap-y-8 relative bottom-4">
          {/* <div className="font-bold tet-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div> */}
        </div>
      </div>
    </div>
  );
}
