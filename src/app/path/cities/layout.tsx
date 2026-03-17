import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The City Between | The Dinner",
  description: "Two skylines. One story. The journey between San Francisco and Toronto in The Dinner.",
  openGraph: {
    title: "The City Between | The Dinner",
    description: "Two skylines. One story.",
    type: "website",
  },
  twitter: {
    title: "The City Between | The Dinner",
    description: "Two skylines. One story.",
  }
};

export default function CitiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
