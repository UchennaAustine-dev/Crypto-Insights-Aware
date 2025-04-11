import HeroSection from "@/components/home/hero-section";
import FeaturedPostsSection from "@/components/home/featured-posts-section";
import MarketOverviewSection from "@/components/home/market-overview-section";
import TrendingCoinsSection from "@/components/home/trending-coins-section";
import FeaturedChartsSection from "@/components/home/featured-charts-section";
import LatestNewsSection from "@/components/home/latest-news-section";
import NewsletterSection from "@/components/home/newsletter-section";
import ArticleAd from "@/components/ads/article-ad";
import FooterAd from "@/components/ads/footer-ad";
import HilltopBannerAd from "@/components/ads/hilltop-banner-ad";
import HilltopVideoAd from "@/components/ads/hilltop-video-ad";
import HilltopInpageAd from "@/components/ads/hilltop-inpage-ad";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 py-8">
      <HeroSection />
      <HilltopBannerAd />
      <ArticleAd />
      <FeaturedPostsSection />
      <MarketOverviewSection />
      <HilltopVideoAd />
      <ArticleAd />
      <TrendingCoinsSection />
      <HilltopInpageAd />
      <FeaturedChartsSection />
      <LatestNewsSection />
      <FooterAd />
      <NewsletterSection />
    </div>
  );
}
