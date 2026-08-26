'use client';

import { useCompany } from '@/components/providers/CompanyProvider';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Building2, Check, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CompanySelector() {
  const { selectedCompany, companies, setSelectedCompany } = useCompany();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-start gap-2 lg:w-auto border-slate-200">
          <Building2 className="h-4 w-4 text-slate-500" />
          <span className="truncate max-w-[200px]">{selectedCompany?.name || 'Select Company'}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72">
        <DropdownMenuLabel>Switch Company</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {companies.map((company) => (
          <DropdownMenuItem
            key={company.id}
            onClick={() => setSelectedCompany(company)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className={cn(
              'flex h-8 w-8 items-center justify-center rounded-md text-xs font-bold',
              company.isActive ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-500'
            )}>
              {company.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{company.name}</p>
              <p className="text-xs text-slate-500 font-mono">{company.gstin}</p>
            </div>
            {selectedCompany?.id === company.id && <Check className="h-4 w-4 text-indigo-600" />}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer text-indigo-600">
          <Plus className="h-4 w-4 mr-2" />
          Add New Company
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
