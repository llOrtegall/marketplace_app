import { authOptions } from '../app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
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

export default async function RootLayout({ children }: Readonly<{  children: React.ReactNode }>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <Header session={session}/>
        {children}
      </body>
    </html>
  );
}
