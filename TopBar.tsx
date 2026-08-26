'use client';

import { MobileNav } from './MobileNav';
import { CompanySelector } from './CompanySelector';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Bell, Sparkles } from 'lucide-react';

export function TopBar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-slate-200 bg-white/80 backdrop-blur-md px-4 lg:px-8">
      <MobileNav />
      <div className="hidden lg:flex flex-1 max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            placeholder="Search invoices, tenders, customers..."
            className="pl-10 bg-slate-50 border-slate-200 focus:bg-white"
          />
        </div>
      </div>
      <div className="flex-1 lg:hidden" />
      <div className="flex items-center gap-3">
        <CompanySelector />
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-slate-600" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </Button>
        <Button className="hidden sm:flex gap-2 bg-indigo-600 hover:bg-indigo-700">
          <Sparkles className="h-4 w-4" />
          <span>AI Assist</span>
        </Button>
      </div>
    </header>
  );
}
