import getData from "@/app/services/get-data";
import DashboardView from "@/app/components/dashboard-view";

export default async function DashboardContainer({ path }) {
  try {
    const tableData = await getData(path);
    return <DashboardView tableData={tableData} />;
  } catch (err) {
    console.log(err);
    return <h1>{err}</h1>;
  }
}
