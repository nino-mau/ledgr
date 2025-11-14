import { type ComponentType } from 'react';
import { NavLink, type Path, type PrefetchBehavior } from 'react-router';
import { Button } from './ui/button';
import { Spinner } from './ui/spinner';

type NavButtonProps = {
  label: string;
  prefetch?: PrefetchBehavior;
  to: string | Partial<Path>;
  icon: ComponentType;
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg';
  variant?:
    | 'default'
    | 'outline'
    | 'ghost'
    | 'destructive'
    | 'secondary'
    | 'link';
};

export default function NavButton(props: NavButtonProps) {
  return (
    <NavLink
      to={props.to}
      prefetch={props.prefetch}
      children={({ isActive, isPending, isTransitioning }) => (
        <Button disabled={isActive} variant={props.variant} size={props.size}>
          {isPending || isTransitioning ? <Spinner /> : <props.icon />}
          {props.label}
        </Button>
      )}
    />
  );
}
