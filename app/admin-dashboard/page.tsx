import AdminDashboard from "./dashboard/page";


// Remove props from the entry function to fix the type error
export default function AdminDashboardPage() {
  // You can use client-side state or routing to switch views if needed
  return <AdminDashboard />;
}