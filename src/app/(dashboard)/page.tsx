import { CardStatsWrapper, StatsCards } from "@/dashboard/StatsCard";
import { FormCardSkeleton, FormCards } from "@/dashboard/FormCard";
import { CreateFormBtn } from "@/components/CreateFormBtn";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="text-2xl text-bold col-span-2">Your forms</h2>
      <Separator className="my-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <CreateFormBtn />
        <Suspense
          fallback={[1, 2, 3, 4].map((i) => (
            <FormCardSkeleton key={i} />
          ))}
        >
          <FormCards />
        </Suspense>
      </div>
    </div>
  );
}
