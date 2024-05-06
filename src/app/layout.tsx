import type { Metadata } from 'next';

import { darumadropOne } from '@/lib/fonts';

import './globals.css';

export const metadata: Metadata = {
  title: 'tedetc.',
  description: 'freelance web development and tutoring',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={darumadropOne.variable}>{children}</body>
    </html>
  );
}
