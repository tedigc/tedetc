import type { Metadata } from 'next';

import './globals.css';
import { darumdropOne } from '@/lib/fonts';


export const metadata: Metadata = {
  title: 'tedetc.',
  description: 'freelance web development and tutoring',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={darumdropOne.variable}>{children}</body>
    </html>
  );
}
