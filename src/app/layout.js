import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["cyrillic", "latin"], variable: "--font-manrope" });
export const metadata = {
  title: "Capico — Crypto Trading with Bots & Smart Deals",
  description: "Trade cryptocurrency smarter with automated trading bots, smart deals, and seamless integration with leading crypto exchanges.",
  keywords: ["crypto trading", "crypto trading bots", "crypto bots", "automated trading", "cryptocurrency", "crypto exchange", "smart trading", "Capico"],
  openGraph: { title: "Capico — Crypto Trading with Bots & Smart Deals", description: "Trade cryptocurrency smarter with automated trading bots and smart deals.", type: "website", siteName: "Capico" },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children} </main>
        <Footer />
      </body>
    </html>
  );
}
