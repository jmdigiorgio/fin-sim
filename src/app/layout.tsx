import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeRegistryProvider from "@/components/layout/ThemeRegistry";
import { SidePanelProvider } from '@/components/layout/SidePanelContext';

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeRegistryProvider>
          <SidePanelProvider>
            {children}
          </SidePanelProvider>
        </ThemeRegistryProvider>
      </body>
    </html>
  );
}
