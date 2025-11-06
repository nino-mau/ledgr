import { Button } from '~/components/ui/button';
import { Separator } from '~/components/ui/separator';
import { SidebarTrigger } from '~/components/ui/sidebar';
import { Card, CardContent } from './ui/card';
import { Bell, Search, Settings } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';

export default function AppHeader() {
  return (
    <header className="h-fit w-full">
      <Card className="h-15 px-4 py-0">
        <CardContent className="size-full px-0">
          <div className="flex size-full items-center gap-1 lg:gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mx-1 data-[orientation=vertical]:h-4"
            />
            <Button variant="ghost" size="icon-lg">
              <Search />
            </Button>
            <div className="ml-auto flex items-center gap-3">
              <div className="flex gap-1">
                <Button variant="ghost" size="icon">
                  <Bell />
                </Button>
                <Button variant="ghost" size="icon">
                  <Settings />
                </Button>
              </div>
              <Avatar className="hover:ring-border/50 size-9 hover:ring-3">
                <AvatarImage src="https://github.com/evilrabbit.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </CardContent>
      </Card>
    </header>
  );
}
