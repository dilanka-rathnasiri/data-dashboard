import getData from "@/app/resources/data-home";
import { DataView } from "@/app/components/data-view";

export default function Home() {
  return (
    <main>
      <DataView tableData={getData()} />
    </main>
  );
}
