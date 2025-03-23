import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUp,
  ArrowDown,
  ExternalLink,
  Share2,
  Bookmark,
  AlertCircle,
} from "lucide-react";
import AdvancedChart from "@/components/trading-view/advanced-chart";
import MiniChart from "@/components/trading-view/mini-chart";

interface CoinPageProps {
  params: {
    coin: string;
  };
}

export async function generateMetadata({
  params,
}: CoinPageProps): Promise<Metadata> {
  // In a real app, you would fetch this data from an API
  const coinName = params.coin.charAt(0).toUpperCase() + params.coin.slice(1);

  return {
    title: `${coinName} Price, Charts & Analysis | CryptoInsight`,
    description: `Get the latest ${coinName} price, market cap, trading volume, charts, and market analysis. Expert insights and predictions for ${coinName}.`,
  };
}

export default async function CoinPage({ params }: CoinPageProps) {
  // In a real app, you would fetch this data from an API
  const coinData = await getCoinData(params.coin);

  return (
    <div className="flex flex-col gap-8 py-8">
      <section className="container">
        <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt={coinData.name}
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
            <div>
              <h1 className="text-3xl font-heading font-bold flex items-center gap-2">
                {coinData.name}{" "}
                <span className="text-muted-foreground font-normal">
                  {coinData.symbol}
                </span>
              </h1>
              <div className="flex items-center gap-2">
                <Badge
                  variant={coinData.change24h >= 0 ? "outline" : "destructive"}
                  className="rounded-sm"
                >
                  Rank #{coinData.rank}
                </Badge>
                <Badge variant="outline" className="rounded-sm">
                  {coinData.category}
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-1">
            <div className="text-3xl font-bold">
              ${coinData.price.toLocaleString()}
            </div>
            <div
              className={`flex items-center gap-1 ${
                coinData.change24h >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {coinData.change24h >= 0 ? (
                <ArrowUp className="h-4 w-4" />
              ) : (
                <ArrowDown className="h-4 w-4" />
              )}
              <span className="font-medium">
                {Math.abs(coinData.change24h).toFixed(2)}% (24h)
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Tabs defaultValue="chart" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="chart">Price Chart</TabsTrigger>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="markets">Markets</TabsTrigger>
              </TabsList>

              <TabsContent value="chart" className="mt-0">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle>{coinData.name} to USD Chart</CardTitle>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <AdvancedChart
                      symbol={`BINANCE:${coinData.symbol}USDT`}
                      height={600}
                      autosize={false}
                      title=""
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="overview" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>About {coinData.name}</CardTitle>
                    <CardDescription>
                      Overview and key statistics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">
                          Key Statistics
                        </h3>
                        <dl className="grid grid-cols-2 gap-2">
                          <dt className="text-muted-foreground">Market Cap</dt>
                          <dd className="text-right font-medium">
                            ${coinData.marketCap.toLocaleString()}
                          </dd>

                          <dt className="text-muted-foreground">
                            Volume (24h)
                          </dt>
                          <dd className="text-right font-medium">
                            ${coinData.volume24h.toLocaleString()}
                          </dd>

                          <dt className="text-muted-foreground">
                            Circulating Supply
                          </dt>
                          <dd className="text-right font-medium">
                            {coinData.circulatingSupply.toLocaleString()}{" "}
                            {coinData.symbol}
                          </dd>

                          <dt className="text-muted-foreground">
                            Total Supply
                          </dt>
                          <dd className="text-right font-medium">
                            {coinData.totalSupply.toLocaleString()}{" "}
                            {coinData.symbol}
                          </dd>

                          <dt className="text-muted-foreground">
                            All-Time High
                          </dt>
                          <dd className="text-right font-medium">
                            ${coinData.ath.toLocaleString()}
                          </dd>

                          <dt className="text-muted-foreground">
                            All-Time Low
                          </dt>
                          <dd className="text-right font-medium">
                            ${coinData.atl.toLocaleString()}
                          </dd>
                        </dl>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-4">
                          Description
                        </h3>
                        <p className="text-muted-foreground">
                          {coinData.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-1"
                            asChild
                          >
                            <Link
                              href={coinData.website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Website <ExternalLink className="h-3 w-3" />
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-1"
                            asChild
                          >
                            <Link
                              href={coinData.explorer}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Explorer <ExternalLink className="h-3 w-3" />
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-1"
                            asChild
                          >
                            <Link
                              href={coinData.whitepaper}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Whitepaper <ExternalLink className="h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="markets" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Markets</CardTitle>
                    <CardDescription>
                      Where to buy and trade {coinData.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b text-muted-foreground text-sm">
                            <th className="text-left font-medium p-3">#</th>
                            <th className="text-left font-medium p-3">
                              Exchange
                            </th>
                            <th className="text-left font-medium p-3">Pair</th>
                            <th className="text-right font-medium p-3">
                              Price
                            </th>
                            <th className="text-right font-medium p-3">
                              Volume (24h)
                            </th>
                            <th className="text-right font-medium p-3">
                              Trust Score
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {coinData.markets.map((market, index) => (
                            <tr
                              key={index}
                              className="border-b hover:bg-muted/50 transition-colors"
                            >
                              <td className="p-3">{index + 1}</td>
                              <td className="p-3">
                                <Link
                                  href={market.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 hover:text-primary"
                                >
                                  <span className="font-medium">
                                    {market.exchange}
                                  </span>
                                </Link>
                              </td>
                              <td className="p-3">{market.pair}</td>
                              <td className="p-3 text-right font-medium">
                                ${market.price.toLocaleString()}
                              </td>
                              <td className="p-3 text-right">
                                ${market.volume.toLocaleString()}
                              </td>
                              <td className="p-3 text-right">
                                <Badge
                                  variant={
                                    market.trustScore >= 8
                                      ? "outline"
                                      : "secondary"
                                  }
                                  className="rounded-sm"
                                >
                                  {market.trustScore}/10
                                </Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Price Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-2">
                  <div className="flex justify-between py-1">
                    <dt className="text-muted-foreground">
                      {coinData.name} Price
                    </dt>
                    <dd className="font-medium">
                      ${coinData.price.toLocaleString()}
                    </dd>
                  </div>
                  <div className="flex justify-between py-1">
                    <dt className="text-muted-foreground">
                      24h Low / 24h High
                    </dt>
                    <dd className="font-medium">
                      ${coinData.low24h.toLocaleString()} / $
                      {coinData.high24h.toLocaleString()}
                    </dd>
                  </div>
                  <div className="flex justify-between py-1">
                    <dt className="text-muted-foreground">7d Low / 7d High</dt>
                    <dd className="font-medium">
                      ${coinData.low7d.toLocaleString()} / $
                      {coinData.high7d.toLocaleString()}
                    </dd>
                  </div>
                  <div className="flex justify-between py-1">
                    <dt className="text-muted-foreground">Trading Volume</dt>
                    <dd className="font-medium">
                      ${coinData.volume24h.toLocaleString()}
                    </dd>
                  </div>
                  <div className="flex justify-between py-1">
                    <dt className="text-muted-foreground">Market Cap Rank</dt>
                    <dd className="font-medium">#{coinData.rank}</dd>
                  </div>
                  <div className="flex justify-between py-1">
                    <dt className="text-muted-foreground">Market Cap</dt>
                    <dd className="font-medium">
                      ${coinData.marketCap.toLocaleString()}
                    </dd>
                  </div>
                  <div className="flex justify-between py-1">
                    <dt className="text-muted-foreground">All-Time High</dt>
                    <dd className="font-medium">
                      ${coinData.ath.toLocaleString()}
                    </dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Related Coins</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {coinData.relatedCoins.map((coin, index) => (
                  <Link key={index} href={`/markets/${coin.id}`}>
                    <div className="flex items-center justify-between hover:bg-muted/50 p-2 rounded-md transition-colors">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-card flex items-center justify-center">
                          <Image
                            src="/placeholder.svg?height=32&width=32"
                            alt={coin.name}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <div className="font-medium">{coin.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {coin.symbol}
                          </div>
                        </div>
                      </div>
                      <MiniChart
                        symbol={`BINANCE:${coin.symbol}USDT`}
                        width={100}
                        height={40}
                        trendLineColor={
                          coin.change24h >= 0
                            ? "rgba(0, 255, 143, 1)"
                            : "rgba(255, 0, 230, 1)"
                        }
                        underLineColor="transparent"
                      />
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-muted/30 border-muted">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-muted-foreground" />
                  Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  The content provided on this page is for informational
                  purposes only and should not be considered as financial
                  advice. Cryptocurrency investments are volatile and high-risk.
                  Always conduct your own research before making any investment
                  decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

// Mock data function - in a real app, you would fetch this from an API
async function getCoinData(coinId: string) {
  const coins = {
    bitcoin: {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      rank: 1,
      category: "Currency",
      price: 63245.78,
      change24h: 2.34,
      marketCap: 1234567890000,
      volume24h: 28765432100,
      circulatingSupply: 19500000,
      totalSupply: 21000000,
      ath: 69000,
      atl: 67.81,
      low24h: 61800,
      high24h: 63500,
      low7d: 60200,
      high7d: 63500,
      description:
        "Bitcoin is the first decentralized cryptocurrency, released as open-source software in 2009. It operates on a peer-to-peer network without the need for intermediaries and is not controlled by any central authority.",
      website: "https://bitcoin.org",
      explorer: "https://blockchain.com/explorer",
      whitepaper: "https://bitcoin.org/bitcoin.pdf",
      markets: [
        {
          exchange: "Binance",
          pair: "BTC/USDT",
          price: 63245.78,
          volume: 5432100000,
          trustScore: 9,
          url: "#",
        },
        {
          exchange: "Coinbase",
          pair: "BTC/USD",
          price: 63250.45,
          volume: 3210000000,
          trustScore: 9,
          url: "#",
        },
        {
          exchange: "Kraken",
          pair: "BTC/EUR",
          price: 63180.12,
          volume: 1543000000,
          trustScore: 8,
          url: "#",
        },
        {
          exchange: "FTX",
          pair: "BTC/USDT",
          price: 63240.35,
          volume: 987000000,
          trustScore: 7,
          url: "#",
        },
        {
          exchange: "Huobi",
          pair: "BTC/USDT",
          price: 63235.67,
          volume: 876000000,
          trustScore: 7,
          url: "#",
        },
      ],
      relatedCoins: [
        { id: "ethereum", name: "Ethereum", symbol: "ETH", change24h: 1.56 },
        { id: "solana", name: "Solana", symbol: "SOL", change24h: -0.78 },
        { id: "cardano", name: "Cardano", symbol: "ADA", change24h: 3.21 },
      ],
    },
    ethereum: {
      id: "ethereum",
      name: "Ethereum",
      symbol: "ETH",
      rank: 2,
      category: "Smart Contract Platform",
      price: 3456.92,
      change24h: 1.56,
      marketCap: 416789012300,
      volume24h: 15432678900,
      circulatingSupply: 120500000,
      totalSupply: 120500000,
      ath: 4878.26,
      atl: 0.43,
      low24h: 3380,
      high24h: 3460,
      low7d: 3300,
      high7d: 3460,
      description:
        "Ethereum is a decentralized, open-source blockchain with smart contract functionality. It enables developers to build and deploy decentralized applications (dApps) and is the second-largest cryptocurrency by market capitalization.",
      website: "https://ethereum.org",
      explorer: "https://etherscan.io",
      whitepaper: "https://ethereum.org/whitepaper",
      markets: [
        {
          exchange: "Binance",
          pair: "ETH/USDT",
          price: 3456.92,
          volume: 3210000000,
          trustScore: 9,
          url: "#",
        },
        {
          exchange: "Coinbase",
          pair: "ETH/USD",
          price: 3458.45,
          volume: 2100000000,
          trustScore: 9,
          url: "#",
        },
        {
          exchange: "Kraken",
          pair: "ETH/EUR",
          price: 3452.12,
          volume: 987000000,
          trustScore: 8,
          url: "#",
        },
        {
          exchange: "FTX",
          pair: "ETH/USDT",
          price: 3455.35,
          volume: 765000000,
          trustScore: 7,
          url: "#",
        },
        {
          exchange: "Huobi",
          pair: "ETH/USDT",
          price: 3454.67,
          volume: 654000000,
          trustScore: 7,
          url: "#",
        },
      ],
      relatedCoins: [
        { id: "bitcoin", name: "Bitcoin", symbol: "BTC", change24h: 2.34 },
        { id: "solana", name: "Solana", symbol: "SOL", change24h: -0.78 },
        { id: "cardano", name: "Cardano", symbol: "ADA", change24h: 3.21 },
      ],
    },
    solana: {
      id: "solana",
      name: "Solana",
      symbol: "SOL",
      rank: 5,
      category: "Smart Contract Platform",
      price: 142.67,
      change24h: -0.78,
      marketCap: 61234567890,
      volume24h: 3456789012,
      circulatingSupply: 429500000,
      totalSupply: 535000000,
      ath: 259.96,
      atl: 0.5,
      low24h: 141.5,
      high24h: 144.2,
      low7d: 138.6,
      high7d: 145.8,
      description:
        "Solana is a high-performance blockchain supporting builders around the world creating crypto apps that scale. It's known for its fast transaction speeds and low costs, making it popular for DeFi and NFT applications.",
      website: "https://solana.com",
      explorer: "https://explorer.solana.com",
      whitepaper: "https://solana.com/solana-whitepaper.pdf",
      markets: [
        {
          exchange: "Binance",
          pair: "SOL/USDT",
          price: 142.67,
          volume: 1543000000,
          trustScore: 9,
          url: "#",
        },
        {
          exchange: "Coinbase",
          pair: "SOL/USD",
          price: 142.85,
          volume: 987000000,
          trustScore: 9,
          url: "#",
        },
        {
          exchange: "Kraken",
          pair: "SOL/EUR",
          price: 142.32,
          volume: 654000000,
          trustScore: 8,
          url: "#",
        },
        {
          exchange: "FTX",
          pair: "SOL/USDT",
          price: 142.55,
          volume: 543000000,
          trustScore: 7,
          url: "#",
        },
        {
          exchange: "Huobi",
          pair: "SOL/USDT",
          price: 142.47,
          volume: 432000000,
          trustScore: 7,
          url: "#",
        },
      ],
      relatedCoins: [
        { id: "bitcoin", name: "Bitcoin", symbol: "BTC", change24h: 2.34 },
        { id: "ethereum", name: "Ethereum", symbol: "ETH", change24h: 1.56 },
        { id: "cardano", name: "Cardano", symbol: "ADA", change24h: 3.21 },
      ],
    },
    // Add more coins as needed
  };

  // Default to bitcoin if the requested coin doesn't exist
  return coins[coinId as keyof typeof coins] || coins.bitcoin;
}
