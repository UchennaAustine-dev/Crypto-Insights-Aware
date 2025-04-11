import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDown, ArrowUp, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import MarketOverview from "@/components/trading-view/market-overview";
import AdvancedChart from "@/components/trading-view/advanced-chart";
import ArticleAd from "@/components/ads/article-ad";
import FooterAd from "@/components/ads/footer-ad";
import HilltopBannerAd from "@/components/ads/hilltop-banner-ad";
import HilltopInpageAd from "@/components/ads/hilltop-inpage-ad";

export default function MarketsPage() {
  return (
    <div className="flex flex-col gap-8 py-8">
      <section className="container">
        <div className="flex flex-col gap-4 mb-8">
          <h1 className="text-4xl font-heading font-bold">
            Cryptocurrency Markets
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            Track prices, market cap, trading volume, and more for thousands of
            cryptocurrencies. Get real-time data and charts to make informed
            investment decisions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search coins..." className="pl-9" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Watchlist</Button>
            <Button variant="outline">Portfolio</Button>
            <Button>Add Coin</Button>
          </div>
        </div>

        <HilltopBannerAd />
        <ArticleAd />

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Cryptocurrencies</TabsTrigger>
            <TabsTrigger value="defi">DeFi</TabsTrigger>
            <TabsTrigger value="nft">NFT & Metaverse</TabsTrigger>
            <TabsTrigger value="layer1">Layer 1</TabsTrigger>
            <TabsTrigger value="meme">Meme Coins</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 gap-8">
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle>Top Cryptocurrencies by Market Cap</CardTitle>
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
                          <th className="text-right font-medium p-3">7d %</th>
                          <th className="text-right font-medium p-3">
                            Market Cap
                          </th>
                          <th className="text-right font-medium p-3">
                            Volume (24h)
                          </th>
                          <th className="text-right font-medium p-3">
                            Last 7 Days
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            id: "bitcoin",
                            name: "Bitcoin",
                            symbol: "BTC",
                            price: 63245.78,
                            change24h: 2.34,
                            change7d: 5.67,
                            marketCap: 1234567890000,
                            volume24h: 28765432100,
                          },
                          {
                            id: "ethereum",
                            name: "Ethereum",
                            symbol: "ETH",
                            price: 3456.92,
                            change24h: 1.56,
                            change7d: 3.45,
                            marketCap: 416789012300,
                            volume24h: 15432678900,
                          },
                          {
                            id: "solana",
                            name: "Solana",
                            symbol: "SOL",
                            price: 142.67,
                            change24h: -0.78,
                            change7d: 2.34,
                            marketCap: 61234567890,
                            volume24h: 3456789012,
                          },
                          {
                            id: "cardano",
                            name: "Cardano",
                            symbol: "ADA",
                            price: 0.45,
                            change24h: 3.21,
                            change7d: -1.23,
                            marketCap: 15876543210,
                            volume24h: 1234567890,
                          },
                          {
                            id: "binancecoin",
                            name: "BNB",
                            symbol: "BNB",
                            price: 567.89,
                            change24h: 0.45,
                            change7d: 1.23,
                            marketCap: 87654321000,
                            volume24h: 2345678901,
                          },
                          {
                            id: "xrp",
                            name: "XRP",
                            symbol: "XRP",
                            price: 0.56,
                            change24h: -1.23,
                            change7d: -0.45,
                            marketCap: 28765432100,
                            volume24h: 1987654321,
                          },
                          {
                            id: "dogecoin",
                            name: "Dogecoin",
                            symbol: "DOGE",
                            price: 0.12,
                            change24h: 1.87,
                            change7d: 4.32,
                            marketCap: 16543210987,
                            volume24h: 987654321,
                          },
                          {
                            id: "polkadot",
                            name: "Polkadot",
                            symbol: "DOT",
                            price: 6.78,
                            change24h: -1.23,
                            change7d: 0.67,
                            marketCap: 7654321098,
                            volume24h: 876543210,
                          },
                          {
                            id: "avalanche",
                            name: "Avalanche",
                            symbol: "AVAX",
                            price: 34.56,
                            change24h: 2.45,
                            change7d: 6.78,
                            marketCap: 12345678901,
                            volume24h: 765432109,
                          },
                          {
                            id: "shiba-inu",
                            name: "Shiba Inu",
                            symbol: "SHIB",
                            price: 0.00001234,
                            change24h: 3.45,
                            change7d: 7.89,
                            marketCap: 6789012345,
                            volume24h: 654321098,
                          },
                        ].map((coin, index) => (
                          <tr
                            key={coin.id}
                            className="border-b hover:bg-muted/50 transition-colors"
                          >
                            <td className="p-3">{index + 1}</td>
                            <td className="p-3">
                              <Link
                                href={`/markets/${coin.id}`}
                                className="flex items-center gap-2 hover:text-primary"
                              >
                                <Image
                                  src="/placeholder.svg?height=32&width=32"
                                  alt={coin.name}
                                  width={32}
                                  height={32}
                                  className="rounded-full"
                                />
                                <div>
                                  <div className="font-medium">{coin.name}</div>
                                  <div className="text-xs text-muted-foreground">
                                    {coin.symbol}
                                  </div>
                                </div>
                              </Link>
                            </td>
                            <td className="p-3 text-right font-medium">
                              $
                              {coin.price.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 8,
                              })}
                            </td>
                            <td
                              className={`p-3 text-right ${
                                coin.change24h >= 0
                                  ? "text-green-500"
                                  : "text-red-500"
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
                            <td
                              className={`p-3 text-right ${
                                coin.change7d >= 0
                                  ? "text-green-500"
                                  : "text-red-500"
                              }`}
                            >
                              <div className="flex items-center justify-end gap-1">
                                {coin.change7d >= 0 ? (
                                  <ArrowUp className="h-3 w-3" />
                                ) : (
                                  <ArrowDown className="h-3 w-3" />
                                )}
                                {Math.abs(coin.change7d).toFixed(2)}%
                              </div>
                            </td>
                            <td className="p-3 text-right">
                              ${(coin.marketCap / 1000000000).toFixed(2)}B
                            </td>
                            <td className="p-3 text-right">
                              ${(coin.volume24h / 1000000000).toFixed(2)}B
                            </td>
                            <td className="p-3 text-right">
                              <div className="w-[100px] h-[40px] ml-auto bg-muted/30 rounded"></div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <Button variant="outline">View All Coins</Button>
                  </div>
                </CardContent>
              </Card>

              <ArticleAd />
              <HilltopInpageAd />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <MarketOverview height={500} title="Market Overview" />
                <AdvancedChart
                  symbol="CRYPTOCAP:TOTAL"
                  title="Total Crypto Market Cap"
                  height={500}
                  autosize={false}
                />
              </div>
            </div>
          </TabsContent>

          {/* Other tab contents would be similar but with filtered content */}
          <TabsContent value="defi" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>DeFi Tokens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Decentralized Finance (DeFi) tokens represent projects that
                  aim to recreate traditional financial systems with blockchain
                  technology.
                </p>
                {/* DeFi specific content would go here */}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <FooterAd />
    </div>
  );
}
