import { CardStatsWrapper, StatsCards } from "@/app/(dashboard)/components/StatsCard";
import { Suspense } from "react";

export default function DashboardPage() {
  return <div className="container pt-4">
    <Suspense fallback={<StatsCards loading={true} />}>
      <CardStatsWrapper />
    </Suspense>
  </div>;
}
