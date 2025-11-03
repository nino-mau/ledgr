import { Outlet } from 'react-router';

export default function DashboardLayout() {
  return (
    <div className="p-(--d-spacing)">
      <h1>Dashboard</h1>
      <nav>Dashboard Navigation</nav>
      <Outlet />
    </div>
  );
}
