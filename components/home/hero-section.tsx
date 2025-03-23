import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="container">
      <div className="relative rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/30 z-10" />
        <Image
          src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg"
          alt="Cryptocurrency illustration"
          width={1200}
          height={600}
          className="w-full h-[500px] object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 max-w-2xl">
            <span className="gradient-text">Blockchain</span> News & Insights
            for the Modern Investor
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl">
            Stay ahead with premium analysis, expert opinions, and real-time
            market data
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-colors"
            >
              Latest News
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Market Analysis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
