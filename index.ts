export interface Company {
  id: string;
  name: string;
  gstin: string;
  logo?: string;
  isActive: boolean;
}

export interface KpiData {
  revenue: { current: number; previous: number; change: number };
  pipeline: { current: number; previous: number; change: number };
  tenders: { current: number; previous: number; change: number };
  invoices: { current: number; pending: number; overdue: number };
  gst: { status: 'filed' | 'pending' | 'overdue'; dueDate: string; returnType: string };
}

export interface Tender {
  id: string;
  title: string;
  client: string;
  value: number;
  status: 'draft' | 'submitted' | 'won' | 'lost' | 'under_review';
  deadline: string;
  probability: number;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  customer: string;
  amount: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  dueDate: string;
  gstAmount: number;
}

export interface RevenueData {
  month: string;
  revenue: number;
  target: number;
}

export interface PipelineStage {
  name: string;
  value: number;
  count: number;
  color: string;
}
