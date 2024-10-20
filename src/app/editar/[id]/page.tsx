import RegistroSala from "@/app/components/RegistroSala";

export default function Page({
  params
}: {
  params: {
    id: string;
  };
}) {
  return (
    <RegistroSala id={params.id} />
  )
}