"use client";

import { useEffect, useRef } from "react";

interface MiniChartProps {
  symbol?: string;
  width?: string | number;
  height?: string | number;
  locale?: string;
  dateRange?: string;
  colorTheme?: "light" | "dark";
  trendLineColor?: string;
  underLineColor?: string;
  isTransparent?: boolean;
  className?: string;
}

export default function MiniChart({
  symbol = "BINANCE:BTCUSDT",
  width = "100%",
  height = 220,
  locale = "en",
  dateRange = "1D",
  colorTheme = "dark",
  trendLineColor = "rgba(0, 242, 255, 1)",
  underLineColor = "rgba(0, 242, 255, 0.3)",
  isTransparent = true,
  className = "",
}: MiniChartProps) {
  const container = useRef<HTMLDivElement>(null);
  const widgetId = useRef(`mini-chart-${symbol.replace(/[^a-zA-Z0-9]/g, "-")}`);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: symbol,
      width: width,
      height: height,
      locale: locale,
      dateRange: dateRange,
      colorTheme: colorTheme,
      trendLineColor: trendLineColor,
      underLineColor: underLineColor,
      isTransparent: isTransparent,
      autosize: false,
      largeChartUrl: "",
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
    symbol,
    width,
    height,
    locale,
    dateRange,
    colorTheme,
    trendLineColor,
    underLineColor,
    isTransparent,
  ]);

  return (
    <div
      className={`tradingview-widget-container ${className}`}
      ref={container}
    >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}
