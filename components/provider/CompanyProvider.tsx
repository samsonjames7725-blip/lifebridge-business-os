'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { Company } from '@/types';
import { mockCompanies } from '@/lib/data';

interface CompanyContextType {
  selectedCompany: Company | null;
  companies: Company[];
  setSelectedCompany: (company: Company) => void;
}

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export function CompanyProvider({ children }: { children: React.ReactNode }) {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(mockCompanies[0]);

  const handleSelect = useCallback((company: Company) => {
    setSelectedCompany(company);
  }, []);

  return (
    <CompanyContext.Provider
      value={{
        selectedCompany,
        companies: mockCompanies,
        setSelectedCompany: handleSelect,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompany() {
  const context = useContext(CompanyContext);
  if (!context) throw new Error('useCompany must be used within CompanyProvider');
  return context;
}
