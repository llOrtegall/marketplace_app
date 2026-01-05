import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marketplace App",
  description: "A simple marketplace application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-ES" className={roboto.variable}>
      <body
        className="antialiased"
      >
        <main className="max-w-4xl mx-auto p-3">
          {children}
        </main>
      </body>
    </html>
  );
}
