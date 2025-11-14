import {
  BadgeCheck,
  ChevronDownIcon,
  CircleDashed,
  Clock1,
  ClockFading,
  Plus,
  SearchIcon
} from 'lucide-react';
import AppStatCard from '~/components/app-stat-card';
import NavButton from '~/components/nav-button';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '~/components/ui/collapsible';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput
} from '~/components/ui/input-group';
import InvoicesTable from './invoices-table';

type InvoicesTabProps = {};

export default function InvoicesTab(props: InvoicesTabProps) {
  return (
    <div className="flex flex-col gap-(--d-spacing)">
      <div className="grid grid-cols-4 gap-(--d-spacing)">
        <AppStatCard
          title="Drafts"
          label="0,00 €"
          badgeLabel="From 3 invoices"
          icon={CircleDashed}
          colorClasses="text-blue-300 bg-blue-300/10"
          className="col-span-1"
        />
        <AppStatCard
          title="Paid"
          label="26.000,00€"
          badgeLabel="From 20 invoices"
          icon={BadgeCheck}
          colorClasses="text-chart-2 bg-chart-2/10"
          className="col-span-1"
        />
        <AppStatCard
          title="Pending"
          label="366,00 €"
          badgeLabel="From 9 invoices"
          icon={Clock1}
          colorClasses="text-warning bg-warning/10"
          className="col-span-1"
        />
        <AppStatCard
          title="Overdue"
          label="4.444,00 €"
          badgeLabel="From 14 invoices"
          icon={ClockFading}
          colorClasses="text-danger bg-danger/10"
          className="col-span-1"
        />
      </div>
      {/* Actions Menu */}
      <div className="flex flex-row justify-end gap-4">
        <InputGroup className="w-60">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
        <NavButton to="/invoices/create" label="New Invoice" icon={Plus} />
      </div>
      {/* Draft Invoices Collapsible */}
      <Card className="pt-4 pb-0">
        <CardContent className="px-0">
          <Collapsible className="flex flex-col">
            <div className="flex items-center justify-between gap-4 px-4 pb-4">
              <div className="flex flex-row items-center gap-2">
                {/* <FilePen size={20} /> */}
                <p className="text-lg font-semibold">Drafts</p>
                <Badge variant="outline">5</Badge>
              </div>
              <CollapsibleTrigger asChild className="group">
                <Button variant="ghost" size="icon">
                  <ChevronDownIcon className="text-muted-foreground size-5 pt-px transition-transform group-data-[state=open]:rotate-180" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <InvoicesTable />
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>

      {/* Pending Invoices Collapsible */}
      <Card className="pt-4 pb-0">
        <CardContent className="px-0">
          <Collapsible className="flex flex-col">
            <div className="flex items-center justify-between gap-4 px-4 pb-4">
              <div className="flex flex-row items-center gap-2">
                {/* <Clock1 size={20} /> */}
                <p className="text-lg font-semibold">Pending</p>
                <Badge variant="outline">3</Badge>
              </div>
              <CollapsibleTrigger asChild className="group">
                <Button variant="ghost" size="icon">
                  <ChevronDownIcon className="text-muted-foreground size-5 pt-px transition-transform group-data-[state=open]:rotate-180" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <InvoicesTable />
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>

      {/* Paid Invoices Collapsible */}
      <Card className="pt-4 pb-0">
        <CardContent className="px-0">
          <Collapsible className="flex flex-col">
            <div className="flex items-center justify-between gap-4 px-4 pb-4">
              <div className="flex flex-row items-center gap-2">
                {/* <Clock1 size={20} /> */}
                <p className="text-lg font-semibold">Paid</p>
                <Badge variant="outline">3</Badge>
              </div>
              <CollapsibleTrigger asChild className="group">
                <Button variant="ghost" size="icon">
                  <ChevronDownIcon className="text-muted-foreground size-5 pt-px transition-transform group-data-[state=open]:rotate-180" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <InvoicesTable />
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </div>
  );
}
