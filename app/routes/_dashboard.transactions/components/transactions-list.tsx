import dayjs from 'dayjs';
import TransactionItem from './transaction-item';
import { chunkTransactionsByMonth } from '~/utils/general';
import type React from 'react';
import { Separator } from '~/components/ui/separator';
import CalendarMonth from '~/components/ui/svgs/calendar-month';

type TransactionsListProps = {};

const placeholderTransactions: Transaction[] = [
  {
    id: '14359814862414535281231043',
    label: 'SEPA Transfer',
    amount: 400,
    category: 'Invoice collection',
    is_justified: false,
    created_at: '2025-10-01T09:29:53+01:00'
  },
  {
    id: '234234234234234234',
    label: 'UberEat Payment',
    amount: 12.5,
    category: 'Catering costs',
    is_justified: true,
    created_at: '2025-11-07T09:29:02+01:00'
  },
  {
    id: '2130568214061312439',
    label: 'SEPA Transfer',
    amount: 400,
    category: 'Invoice collection',
    is_justified: true,
    created_at: '2025-10-07T09:29:53+01:00'
  },
  {
    id: '4dc18d36-6a95-494e-bd31-232940a8a24f',
    label: 'SEPA Transfer',
    amount: 600,
    category: 'Invoice collection',
    is_justified: false,
    created_at: '2025-08-07T09:29:53+01:00'
  },
  {
    id: '8ac77632-5b2b-4106-8697-c984e4ae6ace',
    label: 'SEPA Transfer',
    amount: 3506,
    category: 'Invoice collection',
    is_justified: false,
    created_at: '2025-09-07T09:29:53+01:00'
  },
  {
    id: 'b333ae5f-4220-4ab2-82bd-da60d8266621',
    label: 'Doordash Payment',
    amount: 25,
    category: 'Catering costs',
    is_justified: false,
    created_at: '2025-09-07T09:29:02+01:00'
  },
  {
    id: 'b9f9fd92-e776-42ad-9990-aae1a9082b1b',
    label: 'Doordash Payment',
    amount: 25,
    category: 'Catering costs',
    is_justified: false,
    created_at: '2024-09-07T09:29:02+01:00'
  },
  {
    id: 'bfc02dae-1190-479b-9887-0d19f1505fdc',
    label: 'Doordash Payment',
    amount: 234,
    category: 'Catering costs',
    is_justified: false,
    created_at: '2024-09-07T09:29:02+01:00'
  },
  {
    id: 'c4e93fe5-3192-4ac5-901e-5503bdcb65b6',
    label: 'Doordash Payment',
    amount: 25,
    category: 'Catering costs',
    is_justified: true,
    created_at: '2024-09-07T09:29:02+01:00'
  }
];

function TransactionsList(props: TransactionsListProps) {
  const chunkedTransactions = chunkTransactionsByMonth(placeholderTransactions);
  console.log(chunkedTransactions);

  const renderListChunk = (
    transactionsChunk: Transaction[]
  ): React.ReactNode => {
    return (
      <>
        <li className="flex w-full flex-row items-center gap-5 pt-6 pb-4">
          <div className="bg-background z-10 flex w-15 items-center justify-center">
            <div className="border-border rounded-md border p-2.5">
              <CalendarMonth
                monthNumber={dayjs(transactionsChunk[0].created_at).format(
                  'MM'
                )}
              />
            </div>
          </div>
          <div className="text-xl font-medium">
            {dayjs(transactionsChunk[0].created_at).format('MMMM YYYY')}
          </div>
        </li>
        {transactionsChunk.map((t) => (
          <li className="flex w-full flex-row gap-5 pb-5">
            <div className="flex max-h-[74px] w-15 flex-col items-center justify-center">
              <Separator className="h-auto" orientation="vertical" />
              <div className="bg-background z-10 flex h-fit flex-col items-center">
                <p className="text-base font-bold">
                  {dayjs(t.created_at).format('DD')}
                </p>
                <p className="text-sm">{dayjs(t.created_at).format('MMM.')}</p>
              </div>
              <Separator className="h-auto" orientation="vertical" />
            </div>
            <TransactionItem key={t.id} transaction={t} />
          </li>
        ))}
      </>
    );
  };

  return (
    <ul className="flex w-full flex-col">
      {chunkedTransactions.map((transactionsChunk, index) =>
        renderListChunk(transactionsChunk)
      )}
    </ul>
  );
}

export default TransactionsList;
