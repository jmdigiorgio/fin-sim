import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeRegistryProvider from "@/components/layout/ThemeRegistry";
import { Suspense } from 'react';
import { Loading } from '@/components/shared/Loading';
import Header from '@/components/layout/Header';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NestFund",
  description: "NestFund - Personal finance, budgeting, and investing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeRegistryProvider>
          <Header />
          <Suspense fallback={<Loading fullscreen />}>
            {children}
          </Suspense>
        </ThemeRegistryProvider>
      </body>
    </html>
  );
}
