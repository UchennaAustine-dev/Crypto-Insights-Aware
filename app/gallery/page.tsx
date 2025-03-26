import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import ArticleAd from "@/components/ads/article-ad";
import FooterAd from "@/components/ads/footer-ad";
import { galleryItems } from "@/lib/mock-data";

export default function GalleryPage() {
  // Get unique categories for tabs
  const categories = Array.from(
    new Set(galleryItems.map((item) => item.category))
  );

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
              {categories.map((category) => (
                <TabsTrigger key={category} value={category.toLowerCase()}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryItems.slice(0, 8).map((item) => (
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
              {galleryItems.slice(8, 16).map((item) => (
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

          {/* Generate tab content for each category */}
          {categories.map((category) => (
            <TabsContent
              key={category}
              value={category.toLowerCase()}
              className="mt-0"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryItems
                  .filter((item) => item.category === category)
                  .map((item) => (
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
            </TabsContent>
          ))}
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
