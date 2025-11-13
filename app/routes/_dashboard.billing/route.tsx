import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import InvoicesTab from './components/invoices-tab';

export default function BillingPage() {
  return (
    <div className="my-(--d-spacing)">
      <Tabs defaultValue="invoices" className="gap-(--d-spacing)">
        <TabsList>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="quotations">Quotations</TabsTrigger>
          <TabsTrigger value="clients">Clients</TabsTrigger>
        </TabsList>
        <TabsContent value="invoices">
          <InvoicesTab />
        </TabsContent>
        <TabsContent value="quotations"></TabsContent>
        <TabsContent value="clients"></TabsContent>
      </Tabs>
      <p>test</p>
    </div>
  );
}
