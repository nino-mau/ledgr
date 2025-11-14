import { getInitials } from '~/utils/general';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { cn } from '~/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

type UserItemProps = {
  user: User;
} & VariantProps<typeof avatarVariants>;

const avatarVariants = cva('rounded-md', {
  variants: {
    size: {
      sm: 'size-9',
      md: 'size-9',
      lg: 'size-10.5'
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

const nameVariants = cva('font-medium', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-base'
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

const emailVariants = cva('text-muted-foreground', {
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-base',
      lg: 'text-base'
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

export default function UserItem(props: UserItemProps) {
  return (
    <div className="flex flex-row items-center gap-2">
      <Avatar className={cn(avatarVariants({ size: props.size }))}>
        <AvatarImage
          className="size-full rounded-md"
          src={props.user.avatar_url}
          alt={props.user.name}
        />
        <AvatarFallback className="size-full rounded-md">
          {getInitials(props.user.name).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <p className={cn(nameVariants({ size: props.size }))}>
          {props.user.name}
        </p>
        <p className={cn(emailVariants({ size: props.size }))}>
          {props.user.email}
        </p>
      </div>
    </div>
  );
}
