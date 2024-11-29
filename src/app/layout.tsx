import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import ThemeRegistryProvider from "@/components/ThemeRegistry/ThemeRegistryProvider";

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
  title: "MockVest",
  description: "MockVest - Mock Investment Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <ThemeRegistryProvider>
            {children}
          </ThemeRegistryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
