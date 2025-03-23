import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MiniChart from "@/components/trading-view/mini-chart";

export default function FeaturedChartsSection() {
  return (
    <section className="container">
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-heading font-bold">Featured Charts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle>Bitcoin (BTC)</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <MiniChart symbol="BINANCE:BTCUSDT" height={220} />
            </CardContent>
            <CardFooter className="p-4">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/markets/bitcoin">View Detailed Analysis</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle>Ethereum (ETH)</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <MiniChart
                symbol="BINANCE:ETHUSDT"
                height={220}
                trendLineColor="rgba(180, 0, 255, 1)"
                underLineColor="rgba(180, 0, 255, 0.3)"
              />
            </CardContent>
            <CardFooter className="p-4">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/markets/ethereum">View Detailed Analysis</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle>Solana (SOL)</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <MiniChart
                symbol="BINANCE:SOLUSDT"
                height={220}
                trendLineColor="rgba(0, 255, 143, 1)"
                underLineColor="rgba(0, 255, 143, 0.3)"
              />
            </CardContent>
            <CardFooter className="p-4">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/markets/solana">View Detailed Analysis</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
