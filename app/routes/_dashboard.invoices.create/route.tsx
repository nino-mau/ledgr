import { ArrowLeft } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import CreateInvoiceGeneralForm from './create-invoice-general-form';

export default function InvoicesCreatePage() {
  return (
    <div className="my-(--d-spacing) flex flex-col gap-(--d-spacing)">
      <div className="flex flex-row items-center gap-4">
        <Button size="icon" variant="outline">
          <ArrowLeft />
        </Button>
        <div className="text-xl font-semibold">Create Invoice</div>
      </div>
      <div className="grid grid-cols-[8fr_12fr]">
        <div className="w-full">
          <Tabs defaultValue="general" className="w-full gap-(--d-spacing)">
            <TabsList className="w-full">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="items">Items</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <CreateInvoiceGeneralForm />
            </TabsContent>
            <TabsContent value="items"></TabsContent>
            <TabsContent value="payments"></TabsContent>
          </Tabs>
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
}
