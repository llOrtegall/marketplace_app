import Header from '@/components/Header';
import localFont from 'next/font/local';
import type { Metadata } from 'next';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Markeplace App - Next.js - Learning',
  description: 'A marketplace app built with Next.js',
};

export default function RootLayout({ children }: Readonly<{  children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <Header />
        {children}
      </body>
    </html>
  );
}
