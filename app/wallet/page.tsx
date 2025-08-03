import WalletPageContent from "./wallet-page/page";

// Remove props from the entry function to fix the type error
export default function WalletPage() {
  // Use client-side state or routing to switch views if needed
  return <WalletPageContent />;
}