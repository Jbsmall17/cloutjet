import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Cloutjet",
  description: "Cloutjet website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
