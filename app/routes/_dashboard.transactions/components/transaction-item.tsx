import {
  Check,
  CheckCheck,
  CheckCircle2,
  CircleCheckBig,
  Paperclip
} from 'lucide-react';
import { Badge } from '~/components/ui/badge';
import { Item, ItemContent } from '~/components/ui/item';
import { cn } from '~/lib/utils';

type TransactionItemProps = {
  transaction: Transaction;
};

export default function TransactionItem(props: TransactionItemProps) {
  return (
    <Item
      className="grow transition-transform duration-200 hover:scale-101"
      variant="outline"
      role="listitem"
    >
      <ItemContent className="flex flex-row items-center">
        <div className="bg-secondary hover:ring-secondary/30 relative flex size-10 items-center justify-center rounded-md transition-all hover:ring-3">
          <Paperclip size={20} />
          {props.transaction.is_justified && (
            <div className="bg-success absolute -right-1 -bottom-1 rounded-sm p-0.5">
              <Check size={14} strokeWidth={3} />
            </div>
          )}
        </div>
        <h3 className="ml-2 text-base font-medium">
          {props.transaction.label}
        </h3>
        <div className="ml-10 flex flex-row items-center gap-2">
          <span className="bg-chart-2 size-2 rounded-full"></span>
          <p className="text-muted-foreground text-base">
            {props.transaction.category}
          </p>
        </div>
        <p className="ml-auto text-lg font-semibold">
          +{props.transaction.amount}€
        </p>
      </ItemContent>
    </Item>
  );
}
