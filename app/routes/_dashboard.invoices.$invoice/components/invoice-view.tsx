import { Card, CardContent } from '~/components/ui/card';
import SiteLogo from '~/components/ui/svgs/site-logo';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '~/components/ui/table';
import UserItem from '~/components/user-item';
import type { Invoice, InvoiceItem } from '~/models/invoice';

type InvoiceViewProps = {
  invoice: Invoice;
};

const placeholderItems: InvoiceItem[] = [
  {
    id: '4a25e8ef-7baa-4065-bb58-995293a0ffa6',
    name: 'Web Design Services',
    quantity: 1,
    rate: 1200.0,
    amount: 1200.0
  },
  {
    id: '50b1e1bc-a8f0-442f-98f0-161ecb39c934',
    name: 'Logo Design',
    quantity: 3,
    rate: 250.0,
    amount: 750.0
  },
  {
    id: '319f6660-4da9-4fdd-b51a-597bff01af44',
    name: 'Content Writing',
    quantity: 5,
    rate: 110.0,
    amount: 550.0
  }
];

export default function InvoiceView(props: InvoiceViewProps) {
  return (
    <Card className="size-full">
      <CardContent className="flex flex-col gap-15">
        {/* Header */}
        <div className="flex flex-row justify-between">
          {/* Company Name/Logo */}
          <div>
            <SiteLogo width={40} height={50} />
            <p className="text-primary mt-2 text-lg font-semibold md:text-base">
              CompanyName
            </p>
          </div>
          {/* Invoice Informations */}
          <div className="flex flex-col">
            {/* DisplayId */}
            <h2 className="text-xl font-semibold">
              Invoice #{props.invoice.displayId}
            </h2>
            {/* Company Address */}
            <div className="text-muted-foreground mt-4 flex flex-col gap-0.5 text-right text-xs">
              <p>45 Roker Terrace</p>
              <p>Latheronwheel</p>
              <p>KW5 8NW, London</p>
              <p>United Kingdom</p>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="grid w-full grid-cols-3">
          {/* Client */}
          <div className="col-span-1">
            <p className="text-muted-foreground mb-3 text-xs">BILL TO</p>
            <UserItem size="sm" user={props.invoice.client} />
          </div>
          {/* Date */}
          <div className="col-span-1 justify-self-end">
            <p className="text-muted-foreground mb-3 text-xs">INVOICE DATE</p>
            <p className="text-sm">{props.invoice.createdAt}</p>
          </div>
          {/* Due Date */}
          <div className="col-span-1 justify-self-end">
            <p className="text-muted-foreground mb-3 text-xs">DUE DATE</p>
            <p className="text-sm">{props.invoice.dueDate}</p>
          </div>
        </div>
        {/* Items */}
        <div>
          <Table>
            <TableHeader className="bg-secondary">
              <TableRow>
                <TableHead className="w-[100px]">Item</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Rate</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {placeholderItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.rate}</TableCell>
                  <TableCell className="text-right">{item.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="mt-10 flex w-full flex-row justify-between">
            {/* Terms & Conditions */}
            <div className="grow">
              <p className="text-muted-foreground mb-3 text-xs">
                TERMS AND CONDITIONS
              </p>
              <p className="text-muted-foreground text-xs">
                <span className="text-foreground mr-1 font-medium">
                  Payment conditions:
                </span>
                45 days end of month
              </p>
              <p className="text-muted-foreground mt-1 text-xs">
                <span className="text-foreground mr-1 font-medium">
                  Payment mode:
                </span>
                Bank Tranfer
              </p>
            </div>

            {/* Summary Table */}
            <div className="w-fit">
              <Table className="w-4/10">
                <TableFooter className="border-t-0">
                  <TableRow className="border-0">
                    <TableCell
                      className="text-muted-foreground text-sm"
                      colSpan={3}
                    >
                      Sub Total
                    </TableCell>
                    <TableCell className="text-muted-foreground text-right text-sm">
                      $2,500.00
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      className="text-muted-foreground text-sm"
                      colSpan={3}
                    >
                      TAX
                    </TableCell>
                    <TableCell className="text-muted-foreground text-right text-sm">
                      $2,500.00
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      className="py-3.5 text-base font-semibold"
                      colSpan={3}
                    >
                      Total
                    </TableCell>
                    <TableCell className="text-right text-base font-semibold">
                      $2,500.00
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </div>
        </div>
        <p className="text-muted-foreground mr-auto text-xs">
          Thank you for the business!
        </p>
      </CardContent>
    </Card>
  );
}
