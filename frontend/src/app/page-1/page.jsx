import { DataView } from "@/app/components/data-view";
import getData from "@/app/resources/data-1";

export default function Page() {
  return (
    <div>
      <DataView data={getData()} />
    </div>
  );
}
