import { KpiCards } from '@/components/dashboard/KpiCards';
import { RevenueChart } from '@/components/dashboard/RevenueChart';
import { PipelineChart } from '@/components/dashboard/PipelineChart';
import { TendersTable } from '@/components/dashboard/TendersTable';
import { InvoicesTable } from '@/components/dashboard/InvoicesTable';
import { GstStatusCard } from '@/components/dashboard/GstStatusCard';
import { AiCommandCenter } from '@/components/dashboard/AiCommandCenter';

export default function DashboardPage() {
  return (
    <div className="space-y-6 p-4 lg:p-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-500">
          Welcome back. Here's what's happening with your business today.
        </p>
      </div>

      <KpiCards />

      <div className="grid gap-6 lg:grid-cols-2">
        <RevenueChart />
        <PipelineChart />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TendersTable />
        </div>
        <GstStatusCard />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <InvoicesTable />
        </div>
        <AiCommandCenter />
      </div>
    </div>
  );
}
