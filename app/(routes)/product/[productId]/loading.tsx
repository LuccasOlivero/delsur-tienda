import Container from "@/app/components/ui/container";

const Skeleton = ({ className, style }: any) => (
  <span
    className={`bg-gray-400 rounded-lg skeleton ${className}`}
    style={style}
  ></span>
);

const SkeletonText = ({ width, height, className }: any) => (
  <Skeleton
    className={`text-transparent ${className}`}
    style={{ width, height }}
  />
);

export default function LoaderProductPage() {
  return (
    <Container>
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <Skeleton className="w-full h-[25rem]" />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <div>
              <SkeletonText
                width="66%"
                height="1.5rem"
                className="text-3xl font-bold"
              />
              <SkeletonText
                width="33%"
                height="1rem"
                className="text-sm mt-2"
              />
              <div className="flex gap-y-2 h-full w-full flex-col mt-4">
                {[...Array(3)].map((_, i) => (
                  <SkeletonText
                    key={i}
                    width="100%"
                    height="1rem"
                    className="text-sm"
                  />
                ))}
                <SkeletonText width="66%" height="1rem" className="text-sm" />
              </div>
              <div className="mt-3 flex items-end justify-between">
                <SkeletonText width="33%" height="1rem" className="text-3xl" />
              </div>
              <hr className="my-4" />
              <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                  <SkeletonText
                    width="33%"
                    height="1.5rem"
                    className="text-3xl"
                  />
                </div>
              </div>
              <div className="mt-10 flex items-center gap-x-3"></div>
            </div>
          </div>
          <div className="flex gap-x-3 mt-5">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="w-20 h-20" />
            ))}
          </div>
        </div>
        <hr className="my-10" />
      </div>
    </Container>
  );
}
