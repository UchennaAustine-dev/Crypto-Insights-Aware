"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "next-themes";

interface MarketOverviewProps {
  height?: number | string;
  showChart?: boolean;
  showSymbolLogo?: boolean;
  isTransparent?: boolean;
  locale?: string;
  className?: string;
  title?: string;
}

export default function MarketOverview({
  height = 500,
  showChart = true,
  showSymbolLogo = true,
  isTransparent = true,
  locale = "en",
  className = "",
  title = "Crypto Market Overview",
}: MarketOverviewProps) {
  const container = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const colorTheme = theme === "dark" ? "dark" : "light";
  const widgetId = useRef(
    `market-overview-${Math.random().toString(36).substring(2, 9)}`
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: colorTheme,
      dateRange: "12M",
      showChart: showChart,
      locale: locale,
      largeChartUrl: "",
      isTransparent: isTransparent,
      showSymbolLogo: showSymbolLogo,
      showFloatingTooltip: true,
      width: "100%",
      height: height,
      plotLineColorGrowing: "rgba(0, 242, 255, 1)",
      plotLineColorFalling: "rgba(255, 0, 230, 1)",
      gridLineColor: "rgba(240, 243, 250, 0.1)",
      scaleFontColor: "rgba(255, 255, 255, 1)",
      belowLineFillColorGrowing: "rgba(0, 242, 255, 0.12)",
      belowLineFillColorFalling: "rgba(255, 0, 230, 0.12)",
      belowLineFillColorGrowingBottom: "rgba(0, 242, 255, 0)",
      belowLineFillColorFallingBottom: "rgba(255, 0, 230, 0)",
      symbolActiveColor: "rgba(0, 242, 255, 0.12)",
      tabs: [
        {
          title: "Cryptocurrencies",
          symbols: [
            {
              s: "BINANCE:BTCUSDT",
              d: "Bitcoin",
            },
            {
              s: "BINANCE:ETHUSDT",
              d: "Ethereum",
            },
            {
              s: "BINANCE:SOLUSDT",
              d: "Solana",
            },
            {
              s: "BINANCE:BNBUSDT",
              d: "BNB",
            },
            {
              s: "BINANCE:ADAUSDT",
              d: "Cardano",
            },
            {
              s: "BINANCE:DOGEUSDT",
              d: "Dogecoin",
            },
            {
              s: "BINANCE:DOTUSDT",
              d: "Polkadot",
            },
            {
              s: "BINANCE:AVAXUSDT",
              d: "Avalanche",
            },
          ],
        },
        {
          title: "DeFi",
          symbols: [
            {
              s: "BINANCE:UNIUSDT",
              d: "Uniswap",
            },
            {
              s: "BINANCE:AAVEUSDT",
              d: "Aave",
            },
            {
              s: "BINANCE:MKRUSDT",
              d: "Maker",
            },
            {
              s: "BINANCE:COMPUSDT",
              d: "Compound",
            },
            {
              s: "BINANCE:CAKEUSDT",
              d: "PancakeSwap",
            },
            {
              s: "BINANCE:SUSHIUSDT",
              d: "SushiSwap",
            },
          ],
        },
        {
          title: "NFT & Gaming",
          symbols: [
            {
              s: "BINANCE:MANAUSDT",
              d: "Decentraland",
            },
            {
              s: "BINANCE:SANDUSDT",
              d: "The Sandbox",
            },
            {
              s: "BINANCE:AXSUSDT",
              d: "Axie Infinity",
            },
            {
              s: "BINANCE:ENJUSDT",
              d: "Enjin Coin",
            },
          ],
        },
      ],
    });

    if (container.current) {
      // Clear previous widget if any
      while (container.current.firstChild) {
        container.current.removeChild(container.current.firstChild);
      }

      // Create a new div for the widget
      const widgetContainer = document.createElement("div");
      widgetContainer.className = "tradingview-widget-container__widget";
      widgetContainer.id = widgetId.current;
      container.current.appendChild(widgetContainer);

      // Append the script
      container.current.appendChild(script);
    }

    return () => {
      if (container.current && script.parentNode === container.current) {
        container.current.removeChild(script);
      }
    };
  }, [
    colorTheme,
    height,
    showChart,
    showSymbolLogo,
    isTransparent,
    locale,
    theme,
  ]);

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 overflow-hidden rounded-b-lg">
        <div className="tradingview-widget-container" ref={container}>
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </CardContent>
    </Card>
  );
}
