import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FURFIELD Purchasing",
  description: "Purchasing Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full m-0 p-0" style={{ background: 'transparent' }}>
        <div className="h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
