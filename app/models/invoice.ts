export type InvoiceStatus =
  | 'draft'
  | 'paid'
  | 'pending'
  | 'overdue'
  | 'canceled';

export type Invoice = {
  id: string;
  displayId: string;
  client: User;
  balance: number;
  totalAmount: number;
  description: string;
  comments: string[];
  status: InvoiceStatus;
  dueDate: string;
  sentDate: string;
  createdAt: string;
};
