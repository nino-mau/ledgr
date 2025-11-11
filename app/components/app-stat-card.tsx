import { BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import type { ComponentType } from 'react';
import { cn } from '~/lib/utils';

type AppStatCardProps = {
  className: string;
  title: string;
  label: string;
  badgeLabel: string;
  colorClasses: string;
  icon: ComponentType<{ size: number }>;
};

export default function AppStatCard(props: AppStatCardProps) {
  return (
    <Card className={props.className}>
      <CardContent className="relative mx-6 px-0">
        <div
          className={cn(
            props.colorClasses,
            'absolute top-0 right-0 flex size-9.5 items-center justify-center rounded-md'
          )}
        >
          <props.icon size={19} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-muted-foreground text-sm">{props.title}</p>
          <p className="text-2xl font-bold">{props.label}</p>
        </div>
        <Badge className={cn(props.colorClasses, 'mt-4 text-xs')}>
          {props.badgeLabel}
        </Badge>
      </CardContent>
    </Card>
  );
}
