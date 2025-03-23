"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Add this at the top of the file, after the imports
declare global {
  interface Window {
    TradingView: any;
  }
}

interface AdvancedChartProps {
  symbol?: string;
  theme?: "light" | "dark";
  autosize?: boolean;
  height?: number;
  interval?: string;
  timezone?: string;
  className?: string;
  title?: string;
}

export default function AdvancedChart({
  symbol = "BINANCE:BTCUSDT",
  theme = "dark",
  autosize = true,
  height = 500,
  interval = "D",
  timezone = "Etc/UTC",
  className = "",
  title = "Advanced Chart",
}: AdvancedChartProps) {
  const container = useRef<HTMLDivElement>(null);
  // Use a stable ID that doesn't change between server and client rendering
  const chartId = useRef(`tradingview-chart`);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (typeof window.TradingView !== "undefined" && container.current) {
        new window.TradingView.widget({
          autosize,
          symbol,
          interval,
          timezone,
          theme,
          style: "1",
          locale: "en",
          toolbar_bg: "rgba(0, 0, 0, 0)",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: chartId.current,
          hide_top_toolbar: false,
          hide_legend: false,
          save_image: true,
          studies: [
            "RSI@tv-basicstudies",
            "MAExp@tv-basicstudies",
            "MACD@tv-basicstudies",
          ],
          show_popup_button: true,
          popup_width: "1000",
          popup_height: "650",
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [autosize, symbol, interval, timezone, theme]);

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 overflow-hidden rounded-b-lg">
        <div
          id={chartId.current}
          ref={container}
          style={{ height: autosize ? "100%" : height, minHeight: "400px" }}
        />
      </CardContent>
    </Card>
  );
}
