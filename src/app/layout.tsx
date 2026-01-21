import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "The Dinner | A Romance Novel",
  description: "A love story served between two cities. San Francisco to Toronto—where love changes its accent.",
  keywords: ["romance novel", "The Dinner", "love story", "San Francisco", "Toronto", "fiction"],
  authors: [{ name: "The Dinner" }],
  openGraph: {
    title: "The Dinner | A Romance Novel",
    description: "A love story served between two cities.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Dinner | A Romance Novel",
    description: "A love story served between two cities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
