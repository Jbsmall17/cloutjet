import WalletPageContent from "./wallet-page/page";
import CardPaymentPage from "./card-payment/page";
import CryptoPaymentPage from "./crypto-payment/page";
import VirtualPaymentPage from "./virtual-payment/page";

export default function WalletPage({ showCardPayment = false, showCryptoPayment = false, showVirtualPayment = false }) {
  if (showCardPayment) return <CardPaymentPage />;
  if (showCryptoPayment) return <CryptoPaymentPage />;
  if (showVirtualPayment) return <VirtualPaymentPage />;
  return <WalletPageContent />;
}