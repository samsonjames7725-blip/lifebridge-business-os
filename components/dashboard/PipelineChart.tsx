'use client';

import { mockPipelineData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';
import { ResponsiveContainer, FunnelChart, Funnel, Tooltip, LabelList } from 'recharts';

export function PipelineChart() {
  return (
    <Card className="border-slate-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold text-slate-900">Sales Pipeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <FunnelChart>
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                formatter={(value: number, name: string, props: any) => [
                  `${formatCurrency(value)} (${props.payload.count} deals)`, name,
                ]}
              />
              <Funnel dataKey="value" data={mockPipelineData} isAnimationActive stroke="#fff" strokeWidth={2}>
                <LabelList
                  position="inside" fill="#fff" stroke="none" dataKey="name"
                  formatter={(value: string, entry: any) => `${value}: ${entry.count}`}
                />
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          {mockPipelineData.slice(0, 3).map((stage) => (
            <div key={stage.name} className="rounded-lg bg-slate-50 p-2">
              <p className="text-xs text-slate-500">{stage.name}</p>
              <p className="text-sm font-semibold text-slate-900">{formatCurrency(stage.value)}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
