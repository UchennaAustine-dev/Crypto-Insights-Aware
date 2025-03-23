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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, MessageSquare, ThumbsUp } from "lucide-react";

const articles = [
  {
    id: 1,
    title:
      "Bitcoin Surpasses $60,000 as Institutional Adoption Continues to Grow",
    excerpt:
      "The world's largest cryptocurrency has reached new heights as major financial institutions announce further investments and integration plans.",
    image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
    author: {
      name: "John Doe",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      role: "Crypto Analyst",
    },
    time: "2 hours ago",
    comments: 24,
    likes: 156,
  },
  {
    id: 2,
    title: "Ethereum Layer 2 Solutions See Record Growth in Total Value Locked",
    excerpt:
      "Scaling solutions for Ethereum are experiencing unprecedented adoption as users seek lower fees and faster transactions.",
    image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg",
    author: {
      name: "Jane Smith",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      role: "Blockchain Developer",
    },
    time: "5 hours ago",
    comments: 18,
    likes: 87,
  },
  {
    id: 3,
    title: "DeFi Protocol Launches Innovative Yield Farming Strategy",
    excerpt:
      "A new decentralized finance platform introduces a unique approach to generating returns on cryptocurrency holdings.",
    image: "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg",
    author: {
      name: "Michael Johnson",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      role: "DeFi Researcher",
    },
    time: "1 day ago",
    comments: 36,
    likes: 142,
  },
  {
    id: 4,
    title: "NFT Marketplace Announces Integration with Major Gaming Platform",
    excerpt:
      "Digital collectibles are set to reach a wider audience as a leading NFT marketplace partners with a popular gaming ecosystem.",
    image:
      "https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg",
    author: {
      name: "Sarah Williams",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      role: "NFT Specialist",
    },
    time: "3 days ago",
    comments: 42,
    likes: 218,
  },
  {
    id: 5,
    title: "Central Banks Accelerate Research into Digital Currencies",
    excerpt:
      "Several major economies are advancing their plans to introduce central bank digital currencies in response to the growing cryptocurrency market.",
    image: "https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg",
    author: {
      name: "Robert Chen",
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      role: "Financial Analyst",
    },
    time: "4 days ago",
    comments: 29,
    likes: 113,
  },
  {
    id: 6,
    title: "Crypto Mining Companies Shift Toward Renewable Energy Sources",
    excerpt:
      "In response to environmental concerns, major cryptocurrency mining operations are increasingly adopting sustainable power solutions.",
    image: "https://images.pexels.com/photos/1036637/pexels-photo-1036637.jpeg",
    author: {
      name: "David Park",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
      role: "Environmental Researcher",
    },
    time: "1 week ago",
    comments: 47,
    likes: 189,
  },
];

export default function LatestNewsSection() {
  return (
    <section className="container">
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-heading font-bold">Latest News</h2>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="bitcoin">Bitcoin</TabsTrigger>
            <TabsTrigger value="ethereum">Ethereum</TabsTrigger>
            <TabsTrigger value="defi">DeFi</TabsTrigger>
            <TabsTrigger value="nft">NFTs</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt="Article thumbnail"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-primary">
                    News
                  </Badge>
                </div>
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-xl line-clamp-2">
                    <Link
                      href={`/news/article-${article.id}`}
                      className="hover:text-primary transition-colors"
                    >
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-muted-foreground line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={article.author.image} alt="Author" />
                      <AvatarFallback>
                        {article.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">
                      {article.author.name}, {article.author.role}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{article.comments}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{article.likes}</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline">Load More</Button>
          </div>
        </TabsContent>

        {/* Bitcoin tab content */}
        <TabsContent value="bitcoin" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg"
                  alt="Bitcoin article thumbnail"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-primary">
                  Bitcoin
                </Badge>
              </div>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-xl line-clamp-2">
                  <Link
                    href="/news/bitcoin-analysis"
                    className="hover:text-primary transition-colors"
                  >
                    Bitcoin's Halving Event: What Investors Need to Know
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-muted-foreground line-clamp-2 mb-4">
                  The upcoming Bitcoin halving will reduce mining rewards by
                  50%. Here's how it could impact the market and what you should
                  prepare for.
                </p>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage
                      src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                      alt="Author"
                    />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">
                    Alex Smith, Bitcoin Specialist
                  </span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>1 day ago</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>42</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>218</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
