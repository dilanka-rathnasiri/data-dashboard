import { DataView } from "@/app/components/data-view";
import getData from "@/app/resources/data-4";

export default function Page() {
  return (
    <div>
      <DataView tableData={getData()} />
    </div>
  );
}
