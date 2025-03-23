import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, MessageSquare, ThumbsUp } from "lucide-react";

export default function FeaturedPosts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Featured Post */}
      <Card className="lg:col-span-2 overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative">
          <Image
            src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg"
            alt="Featured article thumbnail"
            width={800}
            height={400}
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
        </div>
        <CardHeader className="p-6 pb-2">
          <CardTitle className="text-2xl md:text-3xl">
            <Link
              href="/news/featured-article"
              className="hover:text-primary transition-colors"
            >
              The Future of Decentralized Finance: How DeFi is Reshaping
              Traditional Banking
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-2">
          <p className="text-muted-foreground mb-4">
            Decentralized Finance continues to disrupt traditional financial
            systems, offering innovative solutions for lending, borrowing, and
            trading without intermediaries. This in-depth analysis explores the
            current state of DeFi and its potential impact on global finance.
          </p>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                alt="Author"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Jane Doe</p>
              <p className="text-sm text-muted-foreground">DeFi Specialist</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>Published 3 hours ago</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              <span>42 comments</span>
            </div>
            <div className="flex items-center gap-1">
              <ThumbsUp className="h-4 w-4" />
              <span>218 likes</span>
            </div>
          </div>
        </CardFooter>
      </Card>

      {/* Secondary Featured Posts */}
      <div className="flex flex-col gap-6">
        {[
          {
            id: 1,
            title:
              "Ethereum 2.0: What the Merge Means for Investors and Developers",
            excerpt:
              "The Ethereum network's transition to proof-of-stake has significant implications for the entire ecosystem. Here's what you need to know.",
            image:
              "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg",
            author: {
              name: "Michael Smith",
              image:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
              role: "Ethereum Developer",
            },
            time: "1 day ago",
            comments: 36,
            likes: 142,
          },
          {
            id: 2,
            title:
              "NFT Market Recovery: Analyzing the Latest Trends and Opportunities",
            excerpt:
              "After a period of decline, the NFT market shows signs of recovery with new use cases and improved infrastructure.",
            image:
              "https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg",
            author: {
              name: "Alice Johnson",
              image:
                "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
              role: "NFT Analyst",
            },
            time: "5 hours ago",
            comments: 18,
            likes: 87,
          },
        ].map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={`Featured article ${item.id} thumbnail`}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <Badge className="absolute top-3 right-3 bg-primary">
                Trending
              </Badge>
            </div>
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xl">
                <Link
                  href={`/news/trending-article-${item.id}`}
                  className="hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-muted-foreground line-clamp-2 mb-4">
                {item.excerpt}
              </p>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={item.author.image} alt="Author" />
                  <AvatarFallback>
                    {item.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">
                  {item.author.name}, {item.author.role}
                </span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{item.time}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>{item.comments}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{item.likes}</span>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
