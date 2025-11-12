import { getInitials } from '~/utils/general';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

type UserItemProps = {
  user: User;
};

export default function UserItem(props: UserItemProps) {
  return (
    <div className="flex flex-row items-center gap-2">
      <Avatar className="size-9 rounded-lg">
        <AvatarImage src={props.user.avatar_url} alt={props.user.name} />
        <AvatarFallback className="rounded-lg">
          {getInitials(props.user.name).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <p className="font-medium">{props.user.name}</p>
        <p className="text-muted-foreground">{props.user.email}</p>
      </div>
    </div>
  );
}
