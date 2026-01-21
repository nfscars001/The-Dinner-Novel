import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Dinner",
  description: "A love story served between two cities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
