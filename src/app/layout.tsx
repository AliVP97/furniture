import type { Metadata } from "next";

import { gilroy } from "@/assets/fonts/gilroy";

import "./globals.css";

export const metadata: Metadata = {
  title: "Furniture Shop",
  description: "A place to buy furniture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${gilroy.className} antialiased`}>{children}</body>
    </html>
  );
}
