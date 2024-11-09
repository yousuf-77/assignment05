import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header-component/header";
export const metadata: Metadata = {
  title: "Jewelry Website",
  description: "Jewelry Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
