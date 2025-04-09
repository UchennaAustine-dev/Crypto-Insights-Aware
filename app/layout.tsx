import type React from "react";
import type { Metadata } from "next";
import { Poppins, Poiret_One } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import TickerTape from "@/components/trading-view/ticker-tape";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const poiretOne = Poiret_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CryptoAware | Premium Blockchain News & Analysis",
    template: "%s | CryptoAware",
  },
  description:
    "Stay ahead with the latest cryptocurrency news, blockchain insights, and market analysis from industry experts.",
  keywords:
    "crypto, blockchain, bitcoin, ethereum, cryptocurrency news, blockchain technology, market analysis, defi, nft",
  authors: [{ name: "CryptoAware Team" }],
  creator: "CryptoAware",
  publisher: "CryptoAware Media",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cryptoaware.site/",
    siteName: "CryptoAware",
    title: "CryptoAware | Premium Blockchain News & Analysis",
    description:
      "Stay ahead with the latest cryptocurrency news, blockchain insights, and market analysis from industry experts.",
    images: [
      {
        url: "https://cryptoaware.site/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CryptoAware",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CryptoAware | Premium Blockchain News & Analysis",
    description:
      "Stay ahead with the latest cryptocurrency news, blockchain insights, and market analysis from industry experts.",
    creator: "@cryptoinsight",
    images: ["https://cryptoaware.site/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* GDPR Compliance Script */}
        <Script
          id="gdpr-compliance"
          strategy="afterInteractive"
          src="https://fstatic.netpub.media/extra/cmp/cmp-gdpr.js"
          rel="noopener noreferrer"
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YFF6ZK2CMH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YFF6ZK2CMH');
          `}
        </Script>
      </head>
      <body
        className={`${poppins.variable} ${poiretOne.variable} font-sans min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <TickerTape />
          <Header />
          <main className="flex-grow flex justify-center">
            <div className="w-full">{children}</div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
