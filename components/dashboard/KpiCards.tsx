'use client';

import { mockKpiData } from '@/lib/data';
import { formatCurrency } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Receipt, FileText, Target, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function KpiCards() {
  const { revenue, pipeline, tenders, invoices, gst } = mockKpiData;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card className="border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-slate-500">Total Revenue</CardTitle>
          <div className="rounded-md bg-emerald-50 p-1.5">
            <Receipt className="h-4 w-4 text-emerald-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-slate-900">{formatCurrency(revenue.current)}</div>
          <div className="mt-1 flex items-center gap-1 text-xs">
            {revenue.change >= 0 ? (
              <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
            ) : (
              <TrendingDown className="h-3.5 w-3.5 text-red-500" />
            )}
            <span className={cn(revenue.change >= 0 ? 'text-emerald-600' : 'text-red-600', 'font-medium')}>
              {revenue.change > 0 ? '+' : ''}{revenue.change}%
            </span>
            <span className="text-slate-400">vs last month</span>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-slate-500">Pipeline Value</CardTitle>
          <div className="rounded-md bg-blue-50 p-1.5">
            <Target className="h-4 w-4 text-blue-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-slate-900">{formatCurrency(pipeline.current)}</div>
          <div className="mt-1 flex items-center gap-1 text-xs">
            <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
            <span className="text-emerald-600 font-medium">+{pipeline.change}%</span>
            <span className="text-slate-400">vs last month</span>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-slate-500">Active Tenders</CardTitle>
          <div className="rounded-md bg-amber-50 p-1.5">
            <FileText className="h-4 w-4 text-amber-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-slate-900">{tenders.current}</div>
          <div className="mt-1 flex items-center gap-1 text-xs">
            <span className="text-slate-600 font-medium">{tenders.current - tenders.previous} new</span>
            <span className="text-slate-400">this month</span>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-slate-500">Invoice Status</CardTitle>
          <div className="rounded-md bg-indigo-50 p-1.5">
            <AlertCircle className="h-4 w-4 text-indigo-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-slate-900">{invoices.current}</div>
          <div className="mt-1 flex items-center gap-2 text-xs">
            <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-amber-700 font-medium">
              {invoices.pending} pending
            </span>
            <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-0.5 text-red-700 font-medium">
              {invoices.overdue} overdue
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
