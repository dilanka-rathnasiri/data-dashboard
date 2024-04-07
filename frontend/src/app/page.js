import { DataView } from "@/app/components/data-view";
import getData from "@/app/services/get-data";

export default async function Home() {
  const data = await getData("home");

  return (
    <main>
      <DataView data={data} />
    </main>
  );
}
