"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export default function CryptoTicker() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, you would fetch from CoinGecko or similar API
    // For demo purposes, we'll use mock data
    const mockData: CryptoData[] = [
      {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        current_price: 63245.78,
        price_change_percentage_24h: 2.34,
      },
      {
        id: "ethereum",
        name: "Ethereum",
        symbol: "ETH",
        current_price: 3456.92,
        price_change_percentage_24h: 1.56,
      },
      {
        id: "solana",
        name: "Solana",
        symbol: "SOL",
        current_price: 142.67,
        price_change_percentage_24h: -0.78,
      },
      {
        id: "cardano",
        name: "Cardano",
        symbol: "ADA",
        current_price: 0.45,
        price_change_percentage_24h: 3.21,
      },
      {
        id: "polkadot",
        name: "Polkadot",
        symbol: "DOT",
        current_price: 6.78,
        price_change_percentage_24h: -1.23,
      },
    ];

    setCryptoData(mockData);
    setLoading(false);

    // In a real implementation, you would set up a polling mechanism
    // to update the data every few minutes
    const interval = setInterval(() => {
      // Simulate price changes
      const updatedData = mockData.map((crypto) => ({
        ...crypto,
        current_price:
          crypto.current_price * (1 + (Math.random() * 0.01 - 0.005)),
        price_change_percentage_24h:
          crypto.price_change_percentage_24h + (Math.random() * 0.5 - 0.25),
      }));
      setCryptoData(updatedData);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-muted py-1 overflow-hidden">
        <div className="container">
          <div className="h-6 animate-pulse bg-muted-foreground/20 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-muted py-1 overflow-hidden">
      <motion.div
        className="flex space-x-6 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 30,
          ease: "linear",
        }}
      >
        {[...cryptoData, ...cryptoData].map((crypto, index) => (
          <div
            key={`${crypto.id}-${index}`}
            className="flex items-center space-x-2"
          >
            <span className="font-medium">{crypto.name}</span>
            <span className="text-sm">{crypto.symbol}</span>
            <span className="font-medium">
              $
              {crypto.current_price.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
            <span
              className={`flex items-center text-xs ${
                crypto.price_change_percentage_24h >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {crypto.price_change_percentage_24h >= 0 ? (
                <ArrowUp className="h-3 w-3 mr-1" />
              ) : (
                <ArrowDown className="h-3 w-3 mr-1" />
              )}
              {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
