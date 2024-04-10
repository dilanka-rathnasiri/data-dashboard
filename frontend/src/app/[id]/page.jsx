import DashboardContainer from "@/app/components/dashboard-container";

export default function Page({ params }) {
  return (
    <div>
      <DashboardContainer path={params.id} />
    </div>
  );
}
