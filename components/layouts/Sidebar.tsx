'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useCompany } from '@/components/providers/CompanyProvider';
import {
  LayoutDashboard, Building2, FileText, Receipt, Calculator,
  Users, ShoppingCart, Boxes, Wallet, Sparkles, Settings, ChevronRight,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Companies', href: '/companies', icon: Building2 },
  { label: 'CRM', href: '/crm', icon: Users },
  { label: 'Tenders', href: '/tenders', icon: FileText },
  { label: 'Proposals', href: '/proposals', icon: FileText },
  { label: 'Invoices', href: '/invoices', icon: Receipt },
  { label: 'GST Center', href: '/gst', icon: Calculator },
  { label: 'Products', href: '/products', icon: Boxes },
  { label: 'Procurement', href: '/procurement', icon: ShoppingCart },
  { label: 'Finance', href: '/finance', icon: Wallet },
  { label: 'AI Center', href: '/ai', icon: Sparkles },
  { label: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const { selectedCompany } = useCompany();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-slate-200 bg-white lg:flex">
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

      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              )}
            >
              <Icon className={cn('h-4.5 w-4.5', isActive ? 'text-indigo-600' : 'text-slate-400')} />
              <span className="flex-1">{item.label}</span>
              {isActive && <ChevronRight className="h-4 w-4 text-indigo-500" />}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-200 p-4">
        <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
          <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-700">
            AD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900 truncate">Admin User</p>
            <p className="text-xs text-slate-500 truncate">admin@lifebridge.in</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
