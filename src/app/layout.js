import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Capico — Crypto Trading with Bots & Smart Deals",
  description: "Trade cryptocurrency smarter with automated trading bots, smart deals, and seamless integration with leading crypto exchanges.",
  keywords: ["crypto trading", "crypto trading bots", "crypto bots", "automated trading", "cryptocurrency", "crypto exchange", "smart trading", "Capico"],
  openGraph: {
    title: "Capico — Crypto Trading with Bots & Smart Deals",
    description: "Trade cryptocurrency smarter with automated trading bots and smart deals.",
    type: "website",
    siteName: "Capico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
