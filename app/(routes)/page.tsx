import getBillboard from "@/actions/get-billboard";
import Billboard from "../components/billboard";
import Container from "../components/ui/container";

export const revalidate = 0;

export default async function HomePage() {
  const billboard = await getBillboard("ed4f7d66-f5f4-46d5-8a37-bf0cbfc1ba78");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
}
