"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CoinData {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: number;
  volume24h: number;
  sparkline: number[];
  image: string;
}

export default function TrendingCoins() {
  const [trendingCoins, setTrendingCoins] = useState<CoinData[]>([
    {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      price: 63245.78,
      change24h: 2.34,
      marketCap: 1234567890000,
      volume24h: 28765432100,
      sparkline: [61245, 62100, 61800, 62400, 63100, 62800, 63245],
      image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
    },
    {
      id: "ethereum",
      name: "Ethereum",
      symbol: "ETH",
      price: 3456.92,
      change24h: 1.56,
      marketCap: 416789012300,
      volume24h: 15432678900,
      sparkline: [3380, 3410, 3390, 3420, 3450, 3430, 3456],
      image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    },
    {
      id: "solana",
      name: "Solana",
      symbol: "SOL",
      price: 142.67,
      change24h: -0.78,
      marketCap: 61234567890,
      volume24h: 3456789012,
      sparkline: [144, 143.5, 142.8, 142.2, 141.9, 142.3, 142.67],
      image: "https://assets.coingecko.com/coins/images/4128/large/solana.png",
    },
    {
      id: "cardano",
      name: "Cardano",
      symbol: "ADA",
      price: 0.45,
      change24h: 3.21,
      marketCap: 15876543210,
      volume24h: 1234567890,
      sparkline: [0.435, 0.44, 0.442, 0.446, 0.448, 0.447, 0.45],
      image: "https://assets.coingecko.com/coins/images/975/large/cardano.png",
    },
  ]);

  // Fetch real data from CoinGecko API
  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=true&price_change_percentage=24h"
        );

        if (response.ok) {
          const data = await response.json();

          const formattedData = data.map((coin: any) => ({
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol.toUpperCase(),
            price: coin.current_price,
            change24h: coin.price_change_percentage_24h,
            marketCap: coin.market_cap,
            volume24h: coin.total_volume,
            sparkline: coin.sparkline_in_7d?.price || [],
            image: coin.image,
          }));

          setTrendingCoins(formattedData);
        }
      } catch (error) {
        console.error("Error fetching trending coins:", error);
        // Keep using the mock data if the API fails
      }
    };

    fetchTrendingCoins();
  }, []);

  // Function to draw sparkline
  const drawSparkline = (data: number[], isPositive: boolean) => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min;

    // Normalize data to fit in the 40px height
    const normalizedData = data.map(
      (value) => 40 - ((value - min) / range) * 40
    );

    // Create path
    const points = normalizedData
      .map(
        (value, index) =>
          `${(index * (100 / (data.length - 1))).toFixed(2)},${value.toFixed(
            2
          )}`
      )
      .join(" ");

    return (
      <svg width="100" height="40" viewBox="0 0 100 40" className="ml-auto">
        <polyline
          points={points}
          fill="none"
          stroke={isPositive ? "rgb(34, 197, 94)" : "rgb(239, 68, 68)"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Trending Cryptocurrencies</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-muted-foreground text-sm">
                <th className="text-left font-medium p-3">#</th>
                <th className="text-left font-medium p-3">Name</th>
                <th className="text-right font-medium p-3">Price</th>
                <th className="text-right font-medium p-3">24h %</th>
                <th className="text-right font-medium p-3">Market Cap</th>
                <th className="text-right font-medium p-3">Volume (24h)</th>
                <th className="text-right font-medium p-3">Last 7 Days</th>
              </tr>
            </thead>
            <tbody>
              {trendingCoins.map((coin, index) => (
                <motion.tr
                  key={coin.id}
                  className="border-b hover:bg-muted/50 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">
                    <Link
                      href={`/markets/${coin.id}`}
                      className="flex items-center gap-2 hover:text-primary"
                    >
                      <img
                        src={coin.image || "/placeholder.svg"}
                        alt={coin.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="font-medium">{coin.name}</span>
                      <span className="text-muted-foreground">
                        {coin.symbol}
                      </span>
                    </Link>
                  </td>
                  <td className="p-3 text-right font-medium">
                    $
                    {coin.price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td
                    className={`p-3 text-right ${
                      coin.change24h >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    <div className="flex items-center justify-end gap-1">
                      {coin.change24h >= 0 ? (
                        <ArrowUp className="h-3 w-3" />
                      ) : (
                        <ArrowDown className="h-3 w-3" />
                      )}
                      {Math.abs(coin.change24h).toFixed(2)}%
                    </div>
                  </td>
                  <td className="p-3 text-right">
                    ${(coin.marketCap / 1000000000).toFixed(2)}B
                  </td>
                  <td className="p-3 text-right">
                    ${(coin.volume24h / 1000000000).toFixed(2)}B
                  </td>
                  <td className="p-3">
                    {coin.sparkline.length > 0 ? (
                      drawSparkline(coin.sparkline, coin.change24h >= 0)
                    ) : (
                      <div className="w-[100px] h-[40px] ml-auto bg-muted/30 rounded"></div>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-center">
          <Button variant="outline" className="gap-2" asChild>
            <Link href="/markets">
              View All Markets
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
