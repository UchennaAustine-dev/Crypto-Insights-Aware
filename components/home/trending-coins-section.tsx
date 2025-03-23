import Link from "next/link";
import TrendingCoins from "@/components/trending-coins";

export default function TrendingCoinsSection() {
  return (
    <section className="container">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-heading font-bold">Trending Coins</h2>
          <Link href="/markets" className="text-primary hover:underline">
            View All Markets
          </Link>
        </div>
        <TrendingCoins />
      </div>
    </section>
  );
}
