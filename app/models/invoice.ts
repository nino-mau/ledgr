export type InvoiceStatus =
  | 'draft'
  | 'paid'
  | 'pending'
  | 'overdue'
  | 'canceled';

export type InvoiceItem = {
  id: string;
  name: string;
  quantity: number;
  amount: number;
  rate: number;
};

export type Invoice = {
  id: string;
  displayId: string;
  client: User;
  balance: number;
  totalAmount: number;
  description: string;
  items?: InvoiceItem[];
  comments: string[];
  status: InvoiceStatus;
  dueDate: string;
  sentDate: string;
  createdAt: string;
};
