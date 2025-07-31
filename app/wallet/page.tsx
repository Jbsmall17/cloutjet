import WalletPageContent from "./wallet-page/page";
import PaymentPage from "./payment/page";

export default function WalletPage({ showPayment = false }) {
  if (showPayment) return <PaymentPage />;
  return <WalletPageContent />;
}