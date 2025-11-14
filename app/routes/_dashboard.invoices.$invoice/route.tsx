import type { Route } from './+types/route';
import InvoiceView from './components/invoice-view';
import type { Invoice, InvoiceStatus } from '~/models/invoice';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '~/components/ui/tabs';
import { Card, CardContent } from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { Download, Edit, Printer, Send } from 'lucide-react';
import InvoiceHistory from './components/invoice-history';

const placeholderInvoice: Invoice = {
  id: '1',
  displayId: 'INV-001',
  client: {
    name: 'John Smith',
    email: 'john.smith@example.com',
    role: 'user'
  },
  balance: 2500.0,
  totalAmount: 2500.0,
  description: 'Website redesign and development',
  comments: ['Initial deposit paid', 'Awaiting final review'],
  status: 'pending',
  dueDate: '2025-11-20',
  sentDate: '2025-11-01',
  createdAt: '2025-10-25'
};

const classNameMap: Record<InvoiceStatus, string> = {
  draft: 'text-blue-300 bg-blue-300/10',
  paid: 'text-chart-2 bg-chart-2/10',
  pending: 'text-warning bg-warning/10',
  canceled: 'text-neutral-300 bg-neutral-300/10',
  overdue: 'text-danger bg-danger/10'
};

export default function InvoicePage({ params }: Route.LoaderArgs) {
  return (
    <div className="my-(--d-spacing) grid w-full grid-cols-[7fr_3fr] gap-(--d-spacing)">
      <div className="col-span-1">
        <InvoiceView invoice={placeholderInvoice} />
      </div>
      <div className="col-span-1 flex flex-col gap-(--d-spacing)">
        <div className="text-warning bg-warning/10 border-warning/10 flex h-10 w-full items-center justify-center rounded-md border text-sm font-medium">
          Due in 10 days
        </div>
        <Tabs defaultValue="actions" className="w-full gap-(--d-spacing)">
          <TabsList className="w-full">
            <TabsTrigger value="actions">Actions</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          <TabsContent value="actions">
            <Card className="py-4">
              <CardContent className="flex flex-col gap-4 px-4">
                <Button className="w-full">
                  <Send />
                  Send Invoice
                </Button>
                <div className="grid grid-cols-3 gap-4">
                  <Button variant="outline" className="w-full" size="icon-lg">
                    <Download />
                  </Button>
                  <Button variant="outline" className="w-full" size="icon-lg">
                    <Edit />
                  </Button>
                  <Button variant="outline" className="w-full" size="icon-lg">
                    <Printer />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="history">
            <InvoiceHistory />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
