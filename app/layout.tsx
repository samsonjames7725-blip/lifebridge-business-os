import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CompanyProvider } from '@/components/providers/CompanyProvider';
import { Sidebar } from '@/components/layout/Sidebar';
import { TopBar } from '@/components/layout/TopBar';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LifeBridge Business OS',
  description: 'Complete business management and GST compliance platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(inter.className, 'h-full bg-slate-50 antialiased')}>
        <CompanyProvider>
          <div className="flex h-full">
            <Sidebar />
            <div className="flex flex-1 flex-col lg:pl-64">
              <TopBar />
              <main className="flex-1 overflow-y-auto">{children}</main>
            </div>
          </div>
        </CompanyProvider>
      </body>
    </html>
  );
}
