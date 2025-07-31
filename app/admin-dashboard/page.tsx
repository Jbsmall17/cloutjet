import AdminDashboard from "./dashboard/page";
import MerchantManagement from "./merchant-management/page";

export default function AdminDashboardPage({ showMerchantManagement = false }) {
  if (showMerchantManagement) return <MerchantManagement />;
  return <AdminDashboard />;
}