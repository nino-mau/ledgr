import type { InvoiceStatus } from '~/models/invoice';
import { Badge } from './ui/badge';

type InvoiceStatusBadgeProps = {
  status: InvoiceStatus;
};

const classNameMap: Record<InvoiceStatus, string> = {
  draft: 'text-blue-300 bg-blue-300/10',
  paid: 'text-chart-2 bg-chart-2/10',
  pending: 'text-warning bg-warning/10',
  canceled: 'text-neutral-300 bg-neutral-300/10',
  overdue: 'text-danger bg-danger/10'
};

export default function InvoiceStatusBadge(props: InvoiceStatusBadgeProps) {
  return <Badge className={classNameMap[props.status]}>{props.status}</Badge>;
}
