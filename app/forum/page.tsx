import Link from "next/link";
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
import { Input } from "@/components/ui/input";
import {
  Search,
  MessageSquare,
  ThumbsUp,
  Eye,
  Clock,
  Filter,
  PlusCircle,
} from "lucide-react";
import ArticleAd from "@/components/ads/article-ad";
import FooterAd from "@/components/ads/footer-ad";

export default function ForumPage() {
  return (
    <div className="flex flex-col gap-8 py-8">
      <section className="container mx-auto">
        <div className="flex flex-col gap-4 mb-8 text-center">
          <h1 className="text-4xl font-heading font-bold">Community Forum</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Join discussions with fellow crypto enthusiasts, ask questions,
            share insights, and stay connected with the community.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
          <div className="relative flex-grow max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search discussions..." className="pl-9" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            <Button className="flex gap-2" asChild>
              <Link href="/forum/new">
                <PlusCircle className="h-4 w-4" />
                New Discussion
              </Link>
            </Button>
          </div>
        </div>

        <ArticleAd />

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-6">
            <TabsList>
              <TabsTrigger value="all">All Topics</TabsTrigger>
              <TabsTrigger value="bitcoin">Bitcoin</TabsTrigger>
              <TabsTrigger value="ethereum">Ethereum</TabsTrigger>
              <TabsTrigger value="defi">DeFi</TabsTrigger>
              <TabsTrigger value="nft">NFTs</TabsTrigger>
              <TabsTrigger value="trading">Trading</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="flex flex-col gap-4">
              {[
                {
                  id: "bitcoin-halving-discussion",
                  title:
                    "How will the upcoming Bitcoin halving affect the market?",
                  excerpt:
                    "I'm curious about everyone's thoughts on the potential market impact of the next Bitcoin halving. Will we see a similar pattern to previous halvings?",
                  category: "Bitcoin",
                  author: {
                    name: "CryptoEnthusiast",
                    image:
                      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
                  },
                  time: "2 hours ago",
                  replies: 24,
                  views: 156,
                  likes: 42,
                  isHot: true,
                },
                {
                  id: "ethereum-staking-rewards",
                  title: "Best platforms for Ethereum staking in 2025",
                  excerpt:
                    "I'm looking to stake my ETH and wondering which platforms offer the best combination of security, rewards, and ease of use. Any recommendations?",
                  category: "Ethereum",
                  author: {
                    name: "ETHHolder",
                    image:
                      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
                  },
                  time: "5 hours ago",
                  replies: 18,
                  views: 87,
                  likes: 15,
                  isHot: false,
                },
                {
                  id: "defi-yield-farming",
                  title:
                    "Current DeFi yield farming strategies with best risk/reward ratio",
                  excerpt:
                    "What are your current favorite yield farming strategies that balance good returns with reasonable risk? Looking for sustainable approaches.",
                  category: "DeFi",
                  author: {
                    name: "YieldHunter",
                    image:
                      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
                  },
                  time: "1 day ago",
                  replies: 32,
                  views: 215,
                  likes: 53,
                  isHot: true,
                },
              ].map((discussion) => (
                <Card
                  key={discussion.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-xl">
                          <Link
                            href={`/forum/${discussion.id}`}
                            className="hover:text-primary transition-colors"
                          >
                            {discussion.title}
                          </Link>
                          {discussion.isHot && (
                            <Badge
                              className="ml-2 bg-red-500"
                              variant="secondary"
                            >
                              Hot
                            </Badge>
                          )}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="rounded-sm">
                            {discussion.category}
                          </Badge>
                        </div>
                      </div>
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={discussion.author.image}
                          alt={discussion.author.name}
                        />
                        <AvatarFallback>
                          {discussion.author.name[0]}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-2">
                    <p className="text-muted-foreground line-clamp-2 mb-2">
                      {discussion.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{discussion.author.name}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{discussion.time}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{discussion.replies} replies</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{discussion.views} views</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{discussion.likes}</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}

              <ArticleAd />

              {[
                {
                  id: "nft-market-trends",
                  title: "NFT market trends for Q2 2025",
                  excerpt:
                    "What trends are you seeing in the NFT market this quarter? Which collections or platforms are gaining traction?",
                  category: "NFTs",
                  author: {
                    name: "NFTCollector",
                    image:
                      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
                  },
                  time: "3 days ago",
                  replies: 14,
                  views: 98,
                  likes: 27,
                  isHot: false,
                },
                {
                  id: "crypto-tax-reporting",
                  title: "Best tools for crypto tax reporting in 2025",
                  excerpt:
                    "Tax season is approaching and I'm looking for recommendations on the best software or services for crypto tax reporting.",
                  category: "General",
                  author: {
                    name: "TaxConscious",
                    image:
                      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
                  },
                  time: "4 days ago",
                  replies: 29,
                  views: 187,
                  likes: 41,
                  isHot: false,
                },
                {
                  id: "trading-strategies",
                  title: "Technical analysis strategies for volatile markets",
                  excerpt:
                    "What technical analysis strategies are you finding most effective in the current volatile market conditions?",
                  category: "Trading",
                  author: {
                    name: "ChartMaster",
                    image:
                      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
                  },
                  time: "1 week ago",
                  replies: 47,
                  views: 312,
                  likes: 89,
                  isHot: true,
                },
              ].map((discussion) => (
                <Card
                  key={discussion.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-xl">
                          <Link
                            href={`/forum/${discussion.id}`}
                            className="hover:text-primary transition-colors"
                          >
                            {discussion.title}
                          </Link>
                          {discussion.isHot && (
                            <Badge
                              className="ml-2 bg-red-500"
                              variant="secondary"
                            >
                              Hot
                            </Badge>
                          )}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="rounded-sm">
                            {discussion.category}
                          </Badge>
                        </div>
                      </div>
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={discussion.author.image}
                          alt={discussion.author.name}
                        />
                        <AvatarFallback>
                          {discussion.author.name[0]}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-2">
                    <p className="text-muted-foreground line-clamp-2 mb-2">
                      {discussion.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{discussion.author.name}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{discussion.time}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{discussion.replies} replies</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{discussion.views} views</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{discussion.likes}</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button>Load More Discussions</Button>
            </div>
          </TabsContent>

          {/* Other tab contents would be similar but with filtered content */}
          <TabsContent value="bitcoin" className="mt-0">
            <div className="flex flex-col gap-4">
              {/* Bitcoin specific discussions would go here */}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Contributors</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  {
                    name: "CryptoExpert",
                    image:
                      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
                    posts: 142,
                    joined: "2 years ago",
                  },
                  {
                    name: "BlockchainDev",
                    image:
                      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
                    posts: 98,
                    joined: "1 year ago",
                  },
                  {
                    name: "TokenTrader",
                    image:
                      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
                    posts: 87,
                    joined: "3 years ago",
                  },
                  {
                    name: "CryptoAnalyst",
                    image:
                      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
                    posts: 76,
                    joined: "6 months ago",
                  },
                  {
                    name: "DeFiExplorer",
                    image:
                      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
                    posts: 65,
                    joined: "1 year ago",
                  },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-3">
                    <Avatar>
                      <AvatarImage src={user.image} alt={user.name} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {user.posts} posts • Joined {user.joined}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/profile/${user.name}`}>View</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hot Topics</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  {
                    title: "Bitcoin halving impact",
                    category: "Bitcoin",
                    replies: 87,
                  },
                  {
                    title: "Ethereum 2.0 staking rewards",
                    category: "Ethereum",
                    replies: 64,
                  },
                  {
                    title: "Best DeFi protocols in 2025",
                    category: "DeFi",
                    replies: 53,
                  },
                  {
                    title: "NFT market recovery",
                    category: "NFTs",
                    replies: 42,
                  },
                  {
                    title: "Crypto tax reporting tools",
                    category: "General",
                    replies: 38,
                  },
                ].map((topic, index) => (
                  <div key={index} className="p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="rounded-sm">
                        {topic.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {topic.replies} replies
                      </span>
                    </div>
                    <Link
                      href={`/forum/${topic.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {topic.title}
                    </Link>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>Be respectful and considerate of other members</li>
                <li>No spam, advertising, or self-promotion</li>
                <li>Keep discussions on-topic and constructive</li>
                <li>No financial advice or price predictions</li>
                <li>Protect your privacy and security</li>
                <li>Report inappropriate content to moderators</li>
              </ul>
              <div className="mt-4">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/forum/guidelines">Read Full Guidelines</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <FooterAd />
    </div>
  );
}
