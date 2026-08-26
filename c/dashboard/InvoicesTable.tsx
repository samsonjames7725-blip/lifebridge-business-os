'use client';

import { mockInvoices } from '@/lib/data';
import { formatCurrency, getStatusColor } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Receipt } from 'lucide-react';
import Link from 'next/link';

export function InvoicesTable() {
  return (
    <Card className="border-slate-200">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold text-slate-900">Recent Invoices</CardTitle>
        <Link href="/invoices">
          <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                <th className="pb-3 pr-4">Invoice</th>
                <th className="pb-3 pr-4 hidden sm:table-cell">Customer</th>
                <th className="pb-3 pr-4 text-right">Amount</th>
                <th className="pb-3 pr-4 hidden md:table-cell text-right">GST</th>
                <th className="pb-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {mockInvoices.map((invoice) => (
                <tr key={invoice.id} className="group hover:bg-slate-50 transition-colors">
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      <Receipt className="h-4 w-4 text-slate-400" />
                      <span className="font-medium text-slate-900">{invoice.invoiceNumber}</span>
                    </div>
                    <p className="mt-0.5 text-xs text-slate-500 sm:hidden">{invoice.customer}</p>
                  </td>
                  <td className="py-3 pr-4 hidden sm:table-cell text-slate-600">{invoice.customer}</td>
                  <td className="py-3 pr-4 text-right font-medium text-slate-900">{formatCurrency(invoice.amount)}</td>
                  <td className="py-3 pr-4 hidden md:table-cell text-right text-slate-500">{formatCurrency(invoice.gstAmount)}</td>
                  <td className="py-3 text-right">
                    <Badge className={getStatusColor(invoice.status) + ' capitalize'}>{invoice.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
