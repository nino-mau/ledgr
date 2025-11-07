import { Outlet } from 'react-router';
import AppHeader from '~/components/app-header';
import { AppSidebar } from '~/components/app-sidebar';
import { SidebarProvider } from '~/components/ui/sidebar';

export default function DashboardLayout() {
  return (
    <div className="h-svh p-(--d-spacing)">
      <SidebarProvider>
        <AppSidebar />
        <main className="ml-(--d-spacing) grow">
          <AppHeader />
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
}
