'use client';

import { mockTenders } from '@/lib/data';
import { formatCurrency, getStatusColor } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';

export function TendersTable() {
  return (
    <Card className="border-slate-200">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold text-slate-900">Active Tenders</CardTitle>
        <Link href="/tenders">
          <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockTenders.slice(0, 4).map((tender) => (
            <div
              key={tender.id}
              className="flex flex-col gap-3 rounded-lg border border-slate-100 p-3 transition-colors hover:bg-slate-50 sm:flex-row sm:items-center"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-slate-400 shrink-0" />
                  <p className="text-sm font-medium text-slate-900 truncate">{tender.title}</p>
                </div>
                <p className="mt-1 text-xs text-slate-500">{tender.client} • Due {tender.deadline}</p>
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-900">{formatCurrency(tender.value)}</p>
                  <div className="mt-1 w-24">
                    <Progress value={tender.probability} className="h-1.5" />
                  </div>
                </div>
                <Badge className={getStatusColor(tender.status) + ' capitalize shrink-0'}>
                  {tender.status.replace('_', ' ')}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
