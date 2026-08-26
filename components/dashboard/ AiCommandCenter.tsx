'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, Send, Zap, TrendingUp, FileText, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const quickActions = [
  { label: 'Generate Invoice', icon: FileText, color: 'bg-blue-50 text-blue-600' },
  { label: 'GST Summary', icon: TrendingUp, color: 'bg-emerald-50 text-emerald-600' },
  { label: 'Overdue Alert', icon: AlertCircle, color: 'bg-red-50 text-red-600' },
  { label: 'Tender Analysis', icon: Zap, color: 'bg-amber-50 text-amber-600' },
];

const mockResponses = [
  {
    type: 'ai',
    content: 'Based on current pipeline data, you have 4 proposals in negotiation worth ₹12L. I recommend following up with Municipal Corp on the Smart City tender — it has a 65% win probability and is due in 18 days.',
  },
];

export function AiCommandCenter() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(mockResponses);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { type: 'user', content: input }]);
    setInput('');
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: 'ai',
          content: 'I analyzed your request. You have 2 overdue invoices totaling ₹1.8L. Would you like me to draft reminder emails for Private Bank and State Govt Dept?',
        },
      ]);
    }, 1000);
  };

  return (
    <Card className="border-slate-200 border-2 border-indigo-100">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <CardTitle className="text-base font-semibold text-slate-900">AI Command Center</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.label}
                variant="outline"
                className="justify-start gap-2 h-auto py-2.5 border-slate-200 hover:bg-slate-50"
              >
                <div className={cn('rounded-md p-1', action.color)}>
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs font-medium">{action.label}</span>
              </Button>
            );
          })}
        </div>

        <div className="h-48 overflow-y-auto rounded-lg bg-slate-50 p-3 space-y-3">
          {messages.map((msg, i) => (
            <div key={i} className={cn('flex gap-2 text-sm', msg.type === 'user' ? 'justify-end' : 'justify-start')}>
              {msg.type === 'ai' && (
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                  <Sparkles className="h-3 w-3 text-indigo-600" />
                </div>
              )}
              <div className={cn(
                'max-w-[85%] rounded-lg px-3 py-2',
                msg.type === 'user' ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-200 text-slate-700 shadow-sm'
              )}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <Input
            placeholder="Ask AI about invoices, GST, tenders..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="bg-slate-50 border-slate-200"
          />
          <Button onClick={handleSend} className="bg-indigo-600 hover:bg-indigo-700 px-3">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
