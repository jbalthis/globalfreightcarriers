import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const interTight = Inter_Tight({ subsets: ['latin'], weight: '300' });

export const metadata: Metadata = {
  title: 'Global Freight Carriers, LLC',
  description: 'Freight transportation made simple and affordable.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={interTight.className}>
        <main className="h-screen">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
