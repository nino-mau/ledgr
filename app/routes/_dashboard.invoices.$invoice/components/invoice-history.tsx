import { CheckCheck, ShieldAlertIcon } from 'lucide-react';
import type { Button } from '~/components/ui/button';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle
} from '~/components/ui/item';

type InvoiceHistoryProps = {};

const placeholderInvoiceHistory = [
  {
    title: 'Invoice Created',
    description: '14/11/2025 at 9:03am'
  },
  {
    title: 'Invoice Created',
    description: '14/11/2025 at 9:03am'
  },
  {
    title: 'Invoice Created',
    description: '14/11/2025 at 9:03am'
  }
];

export default function InvoiceHistory(props: InvoiceHistoryProps) {
  return (
    <div className="flex flex-col gap-4">
      {placeholderInvoiceHistory.map((item) => (
        <Item variant="outline">
          <ItemContent className="flex flex-row items-center gap-3">
            <div className="bg-success/10 text-success border-success/10 flex size-8 items-center justify-center rounded-md border">
              <CheckCheck size={18} />
            </div>
            <div>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDescription className="text-[13px]">
                {item.description}
              </ItemDescription>
            </div>
          </ItemContent>
        </Item>
      ))}
    </div>
  );
}
