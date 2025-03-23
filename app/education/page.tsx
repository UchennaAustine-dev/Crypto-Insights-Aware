import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  BookOpen,
  Lightbulb,
  TrendingUp,
  Zap,
  Shield,
  Layers,
  Clock,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import NewsletterSignup from "@/components/newsletter-signup";

export default function EducationPage() {
  return (
    <div className="flex flex-col gap-8 py-8">
      <section className="container mx-auto">
        <div className="flex flex-col gap-4 mb-8 text-center">
          <h1 className="text-4xl font-heading font-bold">
            Crypto Education Center
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Learn about cryptocurrency, blockchain technology, and decentralized
            finance with our comprehensive guides, tutorials, and resources.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
          <div className="relative flex-grow max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search guides and tutorials..."
              className="pl-9"
            />
          </div>
          <Button>Find Resources</Button>
        </div>

        <Tabs defaultValue="beginners" className="w-full">
          <div className="flex justify-center mb-6">
            <TabsList>
              <TabsTrigger value="beginners">Beginners</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="glossary">Glossary</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="beginners" className="mt-0">
            <div className="grid grid-cols-1 gap-8">
              {/* Featured Guide */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-full min-h-[300px]">
                    <Image
                      src="https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg"
                      alt="Cryptocurrency basics"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary">
                      Featured
                    </Badge>
                  </div>
                  <div className="p-6 flex flex-col">
                    <CardHeader className="p-0 pb-2">
                      <CardTitle className="text-2xl">
                        <Link
                          href="/education/guide/cryptocurrency-basics"
                          className="hover:text-primary transition-colors"
                        >
                          Cryptocurrency Basics: Everything You Need to Know to
                          Get Started
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 py-4 flex-grow">
                      <p className="text-muted-foreground mb-4">
                        A comprehensive introduction to cryptocurrency for
                        beginners. Learn about blockchain technology, how
                        cryptocurrencies work, and how to safely buy, store, and
                        use digital assets.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <BookOpen className="h-4 w-4" />
                        <span>15 minute read</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-0 pt-4">
                      <Button asChild>
                        <Link href="/education/guide/cryptocurrency-basics">
                          Read Guide
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>

              {/* Beginner Guides Grid */}
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Essential Guides for Beginners
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      id: "what-is-blockchain",
                      title: "What is Blockchain?",
                      description:
                        "Understand the technology that powers cryptocurrencies and its potential applications beyond digital money.",
                      icon: <Layers className="h-8 w-8 text-primary" />,
                      image:
                        "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg",
                      readTime: "8 min read",
                    },
                    {
                      id: "crypto-wallets-explained",
                      title: "Crypto Wallets Explained",
                      description:
                        "Learn about different types of cryptocurrency wallets and how to keep your digital assets secure.",
                      icon: <Shield className="h-8 w-8 text-primary" />,
                      image:
                        "https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg",
                      readTime: "10 min read",
                    },
                    {
                      id: "how-to-buy-crypto",
                      title: "How to Buy Your First Cryptocurrency",
                      description:
                        "A step-by-step guide to purchasing cryptocurrency on exchanges and through other methods.",
                      icon: <TrendingUp className="h-8 w-8 text-primary" />,
                      image:
                        "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg",
                      readTime: "12 min read",
                    },
                    {
                      id: "crypto-security-basics",
                      title: "Cryptocurrency Security Basics",
                      description:
                        "Essential security practices to protect your investments from hacks, scams, and theft.",
                      icon: <Shield className="h-8 w-8 text-primary" />,
                      image:
                        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
                      readTime: "9 min read",
                    },
                    {
                      id: "understanding-defi",
                      title: "Understanding DeFi",
                      description:
                        "An introduction to Decentralized Finance and how it's revolutionizing financial services.",
                      icon: <Zap className="h-8 w-8 text-primary" />,
                      image:
                        "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg",
                      readTime: "11 min read",
                    },
                    {
                      id: "nft-guide-beginners",
                      title: "NFT Guide for Beginners",
                      description:
                        "Discover what Non-Fungible Tokens are and why they're transforming digital ownership.",
                      icon: <Lightbulb className="h-8 w-8 text-primary" />,
                      image:
                        "https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg",
                      readTime: "10 min read",
                    },
                  ].map((guide) => (
                    <Card
                      key={guide.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="relative">
                        <Image
                          src={guide.image || "/placeholder.svg"}
                          alt={guide.title}
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                          {guide.icon}
                        </div>
                      </div>
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-xl">
                          <Link
                            href={`/education/guide/${guide.id}`}
                            className="hover:text-primary transition-colors"
                          >
                            {guide.title}
                          </Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-muted-foreground line-clamp-2 mb-4">
                          {guide.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <BookOpen className="h-4 w-4" />
                          <span>{guide.readTime}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button variant="outline" className="w-full" asChild>
                          <Link href={`/education/guide/${guide.id}`}>
                            Read Guide
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Learning Paths */}
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Learning Paths
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      id: "crypto-investor",
                      title: "Crypto Investor",
                      description:
                        "Learn how to build and manage a cryptocurrency portfolio with proper risk management.",
                      image:
                        "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg",
                      modules: 5,
                      duration: "2 weeks",
                    },
                    {
                      id: "defi-explorer",
                      title: "DeFi Explorer",
                      description:
                        "Discover the world of decentralized finance, from lending protocols to yield farming.",
                      image:
                        "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg",
                      modules: 7,
                      duration: "3 weeks",
                    },
                    {
                      id: "nft-enthusiast",
                      title: "NFT Enthusiast",
                      description:
                        "Understand NFT marketplaces, collections, and how to create and sell your own NFTs.",
                      image:
                        "https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg",
                      modules: 4,
                      duration: "2 weeks",
                    },
                  ].map((path) => (
                    <Card
                      key={path.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="relative">
                        <Image
                          src={path.image || "/placeholder.svg"}
                          alt={path.title}
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end">
                          <div className="p-4">
                            <h3 className="text-xl font-bold">{path.title}</h3>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-muted-foreground mb-4">
                          {path.description}
                        </p>
                        <div className="flex justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <Layers className="h-4 w-4" />
                            <span>{path.modules} modules</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{path.duration}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button className="w-full" asChild>
                          <Link href={`/education/path/${path.id}`}>
                            Start Learning
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Other tab contents would be similar but with different content */}
          <TabsContent value="intermediate" className="mt-0">
            <div className="grid grid-cols-1 gap-8">
              <h2 className="text-2xl font-heading font-bold">
                Intermediate Guides
              </h2>
              <p className="text-muted-foreground">
                Ready to dive deeper? These guides cover more advanced concepts
                for those who already understand the basics.
              </p>
              {/* Intermediate guides would go here */}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Video Tutorials Section */}
      <section className="container mx-auto">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-heading font-bold text-center">
            Video Tutorials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: "blockchain-explained",
                title: "Blockchain Technology Explained",
                thumbnail:
                  "https://images.pexels.com/photos/8370784/pexels-photo-8370784.jpeg",
                duration: "15:24",
                views: "24K",
              },
              {
                id: "crypto-wallet-setup",
                title: "How to Set Up Your First Crypto Wallet",
                thumbnail:
                  "https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg",
                duration: "12:08",
                views: "18K",
              },
              {
                id: "defi-tutorial",
                title: "DeFi Tutorial: Using Decentralized Exchanges",
                thumbnail:
                  "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg",
                duration: "20:15",
                views: "15K",
              },
            ].map((video) => (
              <Card
                key={video.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    width={400}
                    height={225}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-background/80 backdrop-blur-sm p-3 rounded-full">
                      <svg
                        className="h-8 w-8 text-primary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-lg">
                    <Link
                      href={`/education/video/${video.id}`}
                      className="hover:text-primary transition-colors"
                    >
                      {video.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
                    <span>{video.views} views</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/education/video/${video.id}`}>Watch Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/education/videos">View All Videos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto">
        <NewsletterSignup />
      </section>
    </div>
  );
}
