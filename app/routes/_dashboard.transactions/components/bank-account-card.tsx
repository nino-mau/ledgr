import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { ChevronsUpDown } from 'lucide-react';
import { type ComponentType } from 'react';
import { Card, CardContent } from '~/components/ui/card';
import dateFromNow from '~/utils/dates';

dayjs.extend(relativeTime);

type BankAccountCardProps = {
  name: string;
  balance: number;
  icon: ComponentType<{ width: number; height: number }>;
  updated_at: string;
};

export default function BankAccountCard(props: BankAccountCardProps) {
  return (
    <Card className="h-fit w-full">
      <CardContent className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3.5">
          <props.icon width={40} height={40} />
          <div className="flex flex-col gap-0.5">
            <h2 className="text-lg font-semibold">{props.name}</h2>
            <p className="text-muted-foreground text-xs">
              Last updated {dateFromNow(props.updated_at)}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <p className="text-xl font-bold">{String(props.balance)}€</p>
          <ChevronsUpDown size={18} />
        </div>
      </CardContent>
    </Card>
  );
}
