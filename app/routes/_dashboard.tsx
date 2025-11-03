import { Outlet } from 'react-router';
import { AppSidebar } from '~/components/app-sidebar';
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger
} from '~/components/ui/sidebar';

export default function DashboardLayout() {
  return (
    <div className="h-svh p-(--d-spacing)">
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
}
