'use client';

import { mockKpiData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle2, Clock, FileCheck, ArrowRight, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function GstStatusCard() {
  const { gst } = mockKpiData;

  const statusConfig = {
    filed: { icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', label: 'Filed' },
    pending: { icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', label: 'Pending' },
    overdue: { icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200', label: 'Overdue' },
  };

  const config = statusConfig[gst.status];
  const StatusIcon = config.icon;

  return (
    <Card className={cn('border-2', config.border)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold text-slate-900">GST Filing Status</CardTitle>
          <Badge className={cn(config.bg, config.color, 'border-0')}>
            <StatusIcon className="mr-1 h-3 w-3" />
            {config.label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
          <FileCheck className="h-5 w-5 text-slate-500" />
          <div>
            <p className="text-sm font-medium text-slate-900">{gst.returnType}</p>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <Calendar className="h-3 w-3" />
              Due by {gst.dueDate}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-slate-50 p-3 text-center">
            <p className="text-xs text-slate-500">CGST Payable</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">₹45,200</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-3 text-center">
            <p className="text-xs text-slate-500">SGST Payable</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">₹45,200</p>
          </div>
        </div>

        <Link href="/gst">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
            Go to GST Center <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
