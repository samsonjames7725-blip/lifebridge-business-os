import { Company, KpiData, Tender, Invoice, RevenueData, PipelineStage } from '@/types';

export const mockCompanies: Company[] = [
  { id: '1', name: 'LifeBridge Technologies Pvt Ltd', gstin: '27AABCL1234C1Z5', isActive: true },
  { id: '2', name: 'LifeBridge Infrastructure Ltd', gstin: '27AABCL5678D2Z6', isActive: true },
  { id: '3', name: 'LifeBridge Consulting LLP', gstin: '27AABCL9012E3Z7', isActive: false },
];

export const mockKpiData: KpiData = {
  revenue: { current: 2847500, previous: 2450000, change: 16.2 },
  pipeline: { current: 5200000, previous: 4100000, change: 26.8 },
  tenders: { current: 12, previous: 8, change: 50.0 },
  invoices: { current: 18, pending: 6, overdue: 2 },
  gst: { status: 'pending', dueDate: '2026-09-10', returnType: 'GSTR-3B' },
};

export const mockRevenueData: RevenueData[] = [
  { month: 'Apr', revenue: 2100000, target: 2000000 },
  { month: 'May', revenue: 2350000, target: 2200000 },
  { month: 'Jun', revenue: 1980000, target: 2100000 },
  { month: 'Jul', revenue: 2650000, target: 2400000 },
  { month: 'Aug', revenue: 2847500, target: 2600000 },
  { month: 'Sep', revenue: 0, target: 2800000 },
];

export const mockPipelineData: PipelineStage[] = [
  { name: 'Lead', value: 850000, count: 8, color: '#94a3b8' },
  { name: 'Qualified', value: 620000, count: 5, color: '#60a5fa' },
  { name: 'Proposal', value: 1800000, count: 4, color: '#818cf8' },
  { name: 'Negotiation', value: 1200000, count: 3, color: '#c084fc' },
  { name: 'Closed Won', value: 730000, count: 2, color: '#34d399' },
];

export const mockTenders: Tender[] = [
  { id: '1', title: 'Smart City Infrastructure Phase 2', client: 'Municipal Corp', value: 2500000, status: 'under_review', deadline: '2026-09-15', probability: 65 },
  { id: '2', title: 'IT Modernization Project', client: 'State Govt Dept', value: 1200000, status: 'submitted', deadline: '2026-09-20', probability: 45 },
  { id: '3', title: 'Highway Monitoring Systems', client: 'NHAI', value: 4500000, status: 'won', deadline: '2026-08-30', probability: 100 },
  { id: '4', title: 'Data Center Setup', client: 'Private Bank', value: 800000, status: 'draft', deadline: '2026-10-05', probability: 30 },
  { id: '5', title: 'E-Governance Portal', client: 'District Collectorate', value: 600000, status: 'submitted', deadline: '2026-09-25', probability: 55 },
];

export const mockInvoices: Invoice[] = [
  { id: '1', invoiceNumber: 'LB-2026-001', customer: 'Municipal Corp', amount: 450000, status: 'paid', dueDate: '2026-08-15', gstAmount: 81000 },
  { id: '2', invoiceNumber: 'LB-2026-002', customer: 'State Govt Dept', amount: 320000, status: 'pending', dueDate: '2026-09-05', gstAmount: 57600 },
  { id: '3', invoiceNumber: 'LB-2026-003', customer: 'Private Bank', amount: 180000, status: 'overdue', dueDate: '2026-08-10', gstAmount: 32400 },
  { id: '4', invoiceNumber: 'LB-2026-004', customer: 'NHAI', amount: 1200000, status: 'sent', dueDate: '2026-09-30', gstAmount: 216000 },
  { id: '5', invoiceNumber: 'LB-2026-005', customer: 'District Collectorate', amount: 250000, status: 'draft', dueDate: '2026-10-10', gstAmount: 45000 },
];
