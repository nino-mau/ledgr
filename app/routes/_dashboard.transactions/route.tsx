import { Paypal } from '~/components/ui/svgs/paypal';
import BankAccountCard from './components/bank-account-card';
import { Plus, SearchIcon, SlidersHorizontal } from 'lucide-react';
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon
} from '~/components/ui/input-group';
import { Button } from '~/components/ui/button';
import TransactionsList from './components/transactions-list';

export default function TransactionsPage() {
  return (
    <div className="flex flex-col gap-(--d-spacing) py-(--d-spacing)">
      <BankAccountCard
        name="Paypal"
        balance={3500}
        icon={Paypal}
        updated_at="2025-11-06T14:54:57+01:00"
      />
      {/* Control Bar  */}
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-row gap-4">
          {/* Search Input */}
          <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>

          {/* Filter Button */}
          <Button variant="outline" size="icon">
            <SlidersHorizontal />
          </Button>
        </div>

        {/* Add Transaction Button */}
        <Button>
          <Plus />
          Add Transaction
        </Button>
      </div>
      <TransactionsList />
    </div>
  );
}
