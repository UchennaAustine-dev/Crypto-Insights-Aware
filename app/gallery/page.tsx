import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import ArticleAd from "@/components/ads/article-ad";
import FooterAd from "@/components/ads/footer-ad";

export default function GalleryPage() {
  return (
    <div className="flex flex-col gap-8 py-8">
      <section className="container mx-auto">
        <div className="flex flex-col gap-4 mb-8 text-center">
          <h1 className="text-4xl font-heading font-bold">Crypto Gallery</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of cryptocurrency and blockchain-related
            images, infographics, and visualizations.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
          <div className="relative flex-grow max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search gallery..." className="pl-9" />
          </div>
          <Button variant="outline" className="flex gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        <ArticleAd />

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-6">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="infographics">Infographics</TabsTrigger>
              <TabsTrigger value="artwork">Artwork</TabsTrigger>
              <TabsTrigger value="charts">Charts</TabsTrigger>
              <TabsTrigger value="memes">Memes</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                {
                  id: 1,
                  title: "Bitcoin Network Visualization",
                  image:
                    "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
                  category: "Infographics",
                },
                {
                  id: 2,
                  title: "Ethereum Smart Contract Flow",
                  image:
                    "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg",
                  category: "Infographics",
                },
                {
                  id: 3,
                  title: "Crypto Market Trends",
                  image:
                    "https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg",
                  category: "Charts",
                },
                {
                  id: 4,
                  title: "Blockchain Technology Art",
                  image:
                    "https://images.pexels.com/photos/8370784/pexels-photo-8370784.jpeg",
                  category: "Artwork",
                },
                {
                  id: 5,
                  title: "DeFi Ecosystem Map",
                  image:
                    "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg",
                  category: "Infographics",
                },
                {
                  id: 6,
                  title: "NFT Collection Showcase",
                  image:
                    "https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg",
                  category: "Artwork",
                },
                {
                  id: 7,
                  title: "Mining Farm Visualization",
                  image:
                    "https://images.pexels.com/photos/1036637/pexels-photo-1036637.jpeg",
                  category: "Infographics",
                },
                {
                  id: 8,
                  title: "Crypto Adoption World Map",
                  image:
                    "https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg",
                  category: "Charts",
                },
              ].map((item) => (
                <Link
                  key={item.id}
                  href={`/gallery/${item.id}`}
                  className="group"
                >
                  <div className="relative group overflow-hidden rounded-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="my-8">
              <ArticleAd />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                {
                  id: 9,
                  title: "Bitcoin Halving Timeline",
                  image:
                    "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg",
                  category: "Infographics",
                },
                {
                  id: 10,
                  title: "Blockchain Consensus Mechanisms",
                  image:
                    "https://images.pexels.com/photos/8370784/pexels-photo-8370784.jpeg",
                  category: "Infographics",
                },
                {
                  id: 11,
                  title: "Crypto Meme Collection",
                  image:
                    "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg",
                  category: "Memes",
                },
                {
                  id: 12,
                  title: "Web3 Architecture",
                  image:
                    "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
                  category: "Infographics",
                },
              ].map((item) => (
                <Link
                  key={item.id}
                  href={`/gallery/${item.id}`}
                  className="group"
                >
                  <div className="relative group overflow-hidden rounded-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button>Load More</Button>
            </div>
          </TabsContent>

          {/* Other tab contents would be similar but with filtered content */}
          <TabsContent value="infographics" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Filtered infographics would go here */}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <FooterAd />

      <section className="container mx-auto">
        <div className="bg-muted p-6 rounded-lg text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">
            Submit Your Artwork
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Are you a crypto artist or designer? Share your work with our
            community and get featured in our gallery.
          </p>
          <Button asChild>
            <Link href="/gallery/submit">Submit Artwork</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
