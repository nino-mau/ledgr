import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState
} from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import React from 'react';
import InvoiceStatusBadge from '~/components/invoice-status-badge';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '~/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '~/components/ui/table';
import UserItem from '~/components/user-item';
import type { Invoice } from '~/models/invoice';

type InvoicesTableProps = {};

const placeholderData: Invoice[] = [
  {
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
  },
  {
    id: '2',
    displayId: 'INV-002',
    client: {
      name: 'Sarah Johnson',
      email: 'sarah.j@company.com',
      role: 'user'
    },
    balance: 0,
    totalAmount: 1800.0,
    description: 'Logo design and brand identity',
    comments: ['Payment received in full'],
    status: 'paid',
    dueDate: '2025-11-15',
    sentDate: '2025-10-28',
    createdAt: '2025-10-20'
  },
  {
    id: '3',
    displayId: 'INV-003',
    client: {
      name: 'Michael Chen',
      email: 'mchen@techstartup.io',
      role: 'user'
    },
    balance: 3200.0,
    totalAmount: 3200.0,
    description: 'Mobile app UI/UX design',
    comments: [],
    status: 'overdue',
    dueDate: '2025-11-05',
    sentDate: '2025-10-20',
    createdAt: '2025-10-15'
  },
  {
    id: '4',
    displayId: 'INV-004',
    client: {
      name: 'Emily Davis',
      email: 'emily.davis@business.net',
      role: 'user'
    },
    balance: 1500.0,
    totalAmount: 1500.0,
    description: 'Monthly retainer - November 2025',
    comments: ['Draft pending client approval'],
    status: 'draft',
    dueDate: '2025-11-30',
    sentDate: '2025-11-12',
    createdAt: '2025-11-10'
  },
  {
    id: '5',
    displayId: 'INV-005',
    client: {
      name: 'Robert Taylor',
      email: 'rtaylor@consulting.com',
      role: 'user'
    },
    balance: 4200.0,
    totalAmount: 4200.0,
    description: 'E-commerce platform development',
    comments: ['Client requested cancellation'],
    status: 'canceled',
    dueDate: '2025-12-01',
    sentDate: '2025-11-08',
    createdAt: '2025-11-05'
  },
  {
    id: '6',
    displayId: 'INV-006',
    client: {
      name: 'Lisa Anderson',
      email: 'l.anderson@agency.com',
      role: 'user'
    },
    balance: 0,
    totalAmount: 950.0,
    description: 'SEO optimization and consulting',
    comments: ['Payment received', 'Client very satisfied'],
    status: 'paid',
    dueDate: '2025-11-10',
    sentDate: '2025-10-25',
    createdAt: '2025-10-18'
  }
];

export const columns: ColumnDef<Invoice>[] = [
  {
    accessorKey: 'displayId',
    header: 'ID',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('displayId')}</div>
    )
  },
  {
    accessorKey: 'client',
    header: 'Client',
    cell: ({ row }) => <UserItem user={row.getValue('client')} />
  },
  {
    accessorKey: 'totalAmount',
    header: 'Total Amount',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('totalAmount'));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-UK', {
        style: 'currency',
        currency: 'EUR'
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    }
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <InvoiceStatusBadge status={row.getValue('status')} />
  },
  {
    accessorKey: 'dueDate',
    header: 'Due Date',
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue('dueDate')}</div>
    )
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <div className="flex w-full">
            <DropdownMenuTrigger className="ml-auto" asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText('test')}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

export default function InvoicesTable(props: InvoicesTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: placeholderData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  });

  return (
    <div className="w-full">
      <div className="overflow-hidden border-t">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className="px-2" key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
