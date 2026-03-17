import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Jasper's Table | The Dinner",
  description: "Explore Jasper's perspective in The Dinner. A man learns how to start over without losing himself between the two skylines of San Francisco and Toronto.",
  openGraph: {
    title: "Jasper's Table | The Dinner",
    description: "Explore Jasper's perspective in The Dinner.",
    type: "article",
  },
  twitter: {
    title: "Jasper's Table | The Dinner",
    description: "Explore Jasper's perspective in The Dinner.",
  }
};

export default function JasperLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
