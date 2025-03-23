"use client";

import { useEffect, useRef } from "react";

interface TickerTapeProps {
  colorTheme?: "light" | "dark";
  isTransparent?: boolean;
  displayMode?: "regular" | "compact";
  locale?: string;
  className?: string;
  symbol?: string; // Adding this to satisfy TypeScript
  height?: number; // Adding this to satisfy TypeScript
  trendLineColor?: string; // Adding this to satisfy TypeScript
  underLineColor?: string; // Adding this to satisfy TypeScript
}

export default function TickerTape({
  colorTheme = "dark",
  isTransparent = true,
  displayMode = "regular",
  locale = "en",
  className = "",
}: TickerTapeProps) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "BITSTAMP:BTCUSD",
          title: "Bitcoin",
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "Ethereum",
        },
        {
          proName: "BINANCE:SOLUSDT",
          title: "Solana",
        },
        {
          proName: "BINANCE:BNBUSDT",
          title: "BNB",
        },
        {
          proName: "BINANCE:ADAUSDT",
          title: "Cardano",
        },
        {
          proName: "BINANCE:DOGEUSDT",
          title: "Dogecoin",
        },
        {
          proName: "BINANCE:DOTUSDT",
          title: "Polkadot",
        },
      ],
      showSymbolLogo: true,
      colorTheme: colorTheme,
      isTransparent: isTransparent,
      displayMode: displayMode,
      locale: locale,
    });

    if (container.current) {
      container.current.appendChild(script);
    }

    return () => {
      if (container.current && script.parentNode === container.current) {
        container.current.removeChild(script);
      }
    };
  }, [colorTheme, isTransparent, displayMode, locale]);

  return (
    <div
      className={`tradingview-widget-container ${className}`}
      ref={container}
    >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}
