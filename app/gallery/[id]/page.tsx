import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Download, Share2, ThumbsUp, Bookmark } from "lucide-react";
import ArticleAd from "@/components/ads/article-ad";
import SidebarAd from "@/components/ads/sidebar-ad";
import FooterAd from "@/components/ads/footer-ad";

interface GalleryItemPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: GalleryItemPageProps): Promise<Metadata> {
  // In a real app, you would fetch this data from an API
  const resolvedParams = await Promise.resolve(params);
  const id = resolvedParams.id;
  const item = await getGalleryItemData(id);

  return {
    title: `${item.title} | CryptoInsight Gallery`,
    description: item.description,
    keywords: item.tags.join(", "),
  };
}

export default async function GalleryItemPage({
  params,
}: GalleryItemPageProps) {
  const resolvedParams = await Promise.resolve(params);
  const id = resolvedParams.id;
  const item = await getGalleryItemData(id);

  return (
    <div className="flex flex-col gap-8 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <Link
              href="/gallery"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Gallery
            </Link>

            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  {item.title}
                </h1>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="rounded-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="relative w-full rounded-lg overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={1200}
                  height={800}
                  className="w-full object-contain"
                  priority
                />
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Button variant="outline" className="gap-2">
                    <ThumbsUp className="h-4 w-4" />
                    Like
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" title="Share">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" title="Bookmark">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <ArticleAd />

              <Separator />

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">
                  About this Image
                </h2>
                <p className="text-muted-foreground mb-6">{item.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Details</h3>
                    <dl className="grid grid-cols-2 gap-2">
                      <dt className="text-muted-foreground">Category</dt>
                      <dd>{item.category}</dd>

                      <dt className="text-muted-foreground">Created</dt>
                      <dd>{item.created}</dd>

                      <dt className="text-muted-foreground">Resolution</dt>
                      <dd>{item.resolution}</dd>

                      <dt className="text-muted-foreground">Format</dt>
                      <dd>{item.format}</dd>
                    </dl>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Creator</h3>
                    <p className="text-muted-foreground mb-2">
                      {item.creator.name}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.creator.bio}
                    </p>
                    <Button variant="outline" asChild>
                      <Link href={`/profile/${item.creator.id}`}>
                        View Profile
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <Card className="bg-muted/30 border-muted">
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-4">
                    License Information
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {item.license.description}
                  </p>
                  <Button variant="outline" asChild>
                    <Link
                      href={item.license.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Full License
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:w-1/4 space-y-6">
            <SidebarAd />

            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-3">Popular Categories</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Infographics</Badge>
                  <Badge variant="secondary">Artwork</Badge>
                  <Badge variant="secondary">Charts</Badge>
                  <Badge variant="secondary">Memes</Badge>
                  <Badge variant="secondary">3D Models</Badge>
                </div>
              </CardContent>
            </Card>

            <SidebarAd />
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <h2 className="text-3xl font-heading font-bold text-center mb-6">
          More Like This
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {item.related.map((relatedItem, index) => (
            <Link
              key={index}
              href={`/gallery/${relatedItem.id}`}
              className="group"
            >
              <div className="relative group overflow-hidden rounded-lg">
                <Image
                  src={relatedItem.image || "/placeholder.svg"}
                  alt={relatedItem.title}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-sm font-medium">{relatedItem.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <FooterAd />
    </div>
  );
}

// Mock data function - in a real app, you would fetch this from an API
async function getGalleryItemData(id: string) {
  return {
    id: id,
    title: "Bitcoin Network Visualization",
    description:
      "This visualization represents the Bitcoin blockchain network, showing the interconnections between nodes and the flow of transactions. The vibrant blue lines represent active transactions, while the nodes are sized according to their importance in the network.",
    image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
    category: "Infographics",
    tags: ["Bitcoin", "Blockchain", "Network", "Visualization"],
    created: "March 15, 2025",
    resolution: "3840 x 2160 px",
    format: "PNG",
    license: {
      description:
        "This image is licensed under Creative Commons Attribution 4.0 International License. You are free to share and adapt the material with appropriate attribution.",
      url: "https://creativecommons.org/licenses/by/4.0/",
    },
    creator: {
      id: "crypto-artist-1",
      name: "Alex Johnson",
      bio: "Digital artist specializing in blockchain and cryptocurrency visualizations. Alex has been creating crypto art since 2017.",
    },
    related: [
      {
        id: "2",
        title: "Ethereum Smart Contract Flow",
        image:
          "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg",
      },
      {
        id: "5",
        title: "DeFi Ecosystem Map",
        image:
          "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg",
      },
      {
        id: "7",
        title: "Mining Farm Visualization",
        image:
          "https://images.pexels.com/photos/1036637/pexels-photo-1036637.jpeg",
      },
      {
        id: "9",
        title: "Bitcoin Halving Timeline",
        image:
          "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg",
      },
    ],
  };
}
