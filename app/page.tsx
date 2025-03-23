import HeroSection from "@/components/home/hero-section";
import FeaturedPostsSection from "@/components/home/featured-posts-section";
import MarketOverviewSection from "@/components/home/market-overview-section";
import TrendingCoinsSection from "@/components/home/trending-coins-section";
import FeaturedChartsSection from "@/components/home/featured-charts-section";
import LatestNewsSection from "@/components/home/latest-news-section";
import NewsletterSection from "@/components/home/newsletter-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 py-8">
      <HeroSection />
      <FeaturedPostsSection />
      <MarketOverviewSection />
      <TrendingCoinsSection />
      <FeaturedChartsSection />
      <LatestNewsSection />
      <NewsletterSection />
    </div>
  );
}
