import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Annalie's Corner | The Dinner",
  description: "Explore Annalie's perspective in The Dinner. Warmth, wit, and a gentle kind of courage in a love story served between San Francisco and Toronto.",
  openGraph: {
    title: "Annalie's Corner | The Dinner",
    description: "Explore Annalie's perspective in The Dinner.",
    type: "article",
  },
  twitter: {
    title: "Annalie's Corner | The Dinner",
    description: "Explore Annalie's perspective in The Dinner.",
  }
};

export default function AnnalieLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
