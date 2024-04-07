import { DataView } from "@/app/components/data-view";
import getData from "@/app/services/get-data";

export default async function Page() {
  const data = await getData("1");

  return (
    <div>
      <DataView data={data} />
    </div>
  );
}
