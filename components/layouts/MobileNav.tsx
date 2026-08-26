'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useCompany } from '@/components/providers/CompanyProvider';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, LayoutDashboard, Building2, FileText, Receipt, Calculator, Users, Sparkles } from 'lucide-react';

const mobileNavItems = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Companies', href: '/companies', icon: Building2 },
  { label: 'CRM', href: '/crm', icon: Users },
  { label: 'Tenders', href: '/tenders', icon: FileText },
  { label: 'Invoices', href: '/invoices', icon: Receipt },
  { label: 'GST', href: '/gst', icon: Calculator },
  { label: 'AI', href: '/ai', icon: Sparkles },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { selectedCompany } = useCompany();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center gap-3 border-b border-slate-200 px-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold text-lg">
              LB
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-900 leading-tight">LifeBridge</span>
              <span className="text-xs text-slate-500 leading-tight">Business OS</span>
            </div>
          </div>

          {selectedCompany && (
            <div className="mx-4 mt-4 rounded-lg bg-slate-50 p-3 border border-slate-100">
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Active Company</p>
              <p className="mt-1 text-sm font-semibold text-slate-900 truncate">{selectedCompany.name}</p>
              <p className="text-xs text-slate-500 font-mono mt-0.5">{selectedCompany.gstin}</p>
            </div>
          )}

          <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
            {mobileNavItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  )}
                >
                  <Icon className={cn('h-5 w-5', isActive ? 'text-indigo-600' : 'text-slate-400')} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
