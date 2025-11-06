import {
  GalleryVerticalEnd,
  AudioWaveform,
  Command,
  ChartColumnBig,
  ArrowRightLeft,
  ScrollText,
  UsersRound,
  ChevronRight,
  Calculator
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from '~/components/ui/sidebar';
import { TeamSwitcher } from './team-switcher';
import { NavUser } from './nav-user';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from '@radix-ui/react-collapsible';

// Menu items.
const items = [
  {
    title: 'Overview',
    url: '/',
    icon: ChartColumnBig
  },
  {
    title: 'Transactions',
    url: '/transactions',
    icon: ArrowRightLeft
  },
  {
    title: 'Billing',
    url: '/billing',
    icon: ScrollText
  },
  {
    title: 'Clients',
    url: '/clients',
    icon: UsersRound
  },
  {
    title: 'Accounting',
    url: '/accounting',
    icon: Calculator,
    isActive: false,
    items: [
      {
        title: 'TVA',
        url: '/accounting/tva'
      },
      {
        title: 'URSSAF',
        url: '/accounting/urssaf'
      }
    ]
  }
];

const placeholderTeams = [
  {
    name: 'Acme Inc',
    logo: GalleryVerticalEnd,
    plan: 'Enterprise'
  },
  {
    name: 'Acme Corp.',
    logo: AudioWaveform,
    plan: 'Startup'
  }
];

const placeholderUser: User = {
  name: 'john doe',
  email: 'john.doe@gmail.com',
  role: 'admin',
  avatar_url: 'https://github.com/evilrabbit.png'
};

export function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader>
        <TeamSwitcher teams={placeholderTeams} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarMenu>
            {items.map((item) =>
              item.items ? (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={item.isActive}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url}>
                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            )}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={placeholderUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
