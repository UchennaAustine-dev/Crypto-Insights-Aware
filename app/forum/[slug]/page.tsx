import Link from "next/link";
import type { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Share2,
  Clock,
  Reply,
} from "lucide-react";

interface DiscussionPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: DiscussionPageProps): Promise<Metadata> {
  // In a real app, you would fetch this data from an API
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;

  const discussion = getDiscussionData(slug);

  return {
    title: `${discussion.title} | CryptoInsight Forum`,
    description: discussion.content.substring(0, 160),
    keywords: discussion.tags.join(", "),
  };
}

export default async function DiscussionPage({ params }: DiscussionPageProps) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  const discussion = getDiscussionData(params.slug);

  return (
    <div className="flex flex-col gap-8 py-8">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/forum"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Forum
        </Link>

        <div className="flex flex-col gap-6">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="rounded-sm">
                {discussion.category}
              </Badge>
              {discussion.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="rounded-sm">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {discussion.title}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <Avatar>
                <AvatarImage
                  src={discussion.author.image}
                  alt={discussion.author.name}
                />
                <AvatarFallback>{discussion.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{discussion.author.name}</div>
                <div className="text-sm text-muted-foreground">
                  Posted {discussion.createdAt}
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {discussion.content.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{discussion.likes}</span>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <ThumbsDown className="h-4 w-4" />
                    <span>{discussion.dislikes}</span>
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Flag className="h-4 w-4" />
                    Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-2xl font-heading font-bold mb-4">
              Replies ({discussion.replies.length})
            </h2>

            <div className="flex flex-col gap-4">
              {discussion.replies.map((reply, index) => (
                <Card
                  key={index}
                  className={reply.isHighlighted ? "border-primary" : ""}
                >
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage
                            src={reply.author.image}
                            alt={reply.author.name}
                          />
                          <AvatarFallback>
                            {reply.author.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{reply.author.name}</div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{reply.createdAt}</span>
                          </div>
                        </div>
                      </div>
                      {reply.isHighlighted && (
                        <Badge className="bg-primary">Best Reply</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-2">
                    <div className="prose dark:prose-invert max-w-none">
                      {reply.content.split("\n\n").map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{reply.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Reply className="h-4 w-4" />
                          Reply
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <Flag className="h-4 w-4" />
                        Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Leave a Reply</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Share your thoughts..."
                className="min-h-[150px] mb-4"
              />
              <Button>Post Reply</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-heading font-bold mb-4">
          Similar Discussions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {discussion.similarDiscussions.map((item, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg">
                  <Link
                    href={`/forum/${item.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </CardTitle>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="outline" className="rounded-sm">
                    {item.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <p className="text-muted-foreground line-clamp-2 mb-2">
                  {item.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-3 w-3" />
                    <span>{item.replies} replies</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-3 w-3" />
                    <span>{item.likes}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// Mock data function - in a real app, you would fetch this from an API
function getDiscussionData(slug: string) {
  return {
    id: slug,
    title: "How will the upcoming Bitcoin halving affect the market?",
    content:
      "I've been researching the upcoming Bitcoin halving event scheduled for April 2024, and I'm curious about everyone's thoughts on its potential market impact.\n\nHistorically, previous halvings have been followed by significant bull runs, though with diminishing returns each time. The 2012 halving led to gains of over 8,000%, the 2016 halving saw around 2,800% growth, and the 2020 halving resulted in approximately 650% gains.\n\nDo you think we'll see a similar pattern this time? Or has the market matured to a point where halvings are already priced in? I'm particularly interested in how institutional involvement might change the dynamics compared to previous cycles.\n\nAlso, what timeframe do you expect for any potential price movement? Previous cycles took 12-18 months to reach their peak after the halving.\n\nLooking forward to hearing your thoughts and analysis!",
    category: "Bitcoin",
    tags: ["Halving", "Market Analysis", "Price Prediction"],
    author: {
      name: "CryptoEnthusiast",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    createdAt: "2 hours ago",
    likes: 42,
    dislikes: 3,
    replies: [
      {
        author: {
          name: "BitcoinVeteran",
          image:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
        },
        content:
          "Great question! I've been through all three previous halvings, and while each one has led to a bull run, I think you're right that the market dynamics are changing.\n\nInstitutional involvement is the biggest difference this time around. We have public companies holding Bitcoin on their balance sheets, ETFs providing easier access, and major financial institutions offering crypto services. This broader adoption could mean more stability but potentially less explosive growth.\n\nI expect we'll still see a significant price increase, but perhaps over a longer timeframe than previous cycles. The market is much larger now, so it takes more capital to move the price. My prediction is a 200-300% increase over 18-24 months post-halving, rather than the 500%+ we saw last time.\n\nOne thing to watch is the mining industry. With rewards cut in half, some miners might be forced to sell their holdings to cover operational costs, which could create some short-term selling pressure right after the halving.",
        createdAt: "1 hour ago",
        likes: 28,
        isHighlighted: true,
      },
      {
        author: {
          name: "EconomicsProf",
          image:
            "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
        },
        content:
          "I'd like to offer a slightly contrarian view. While supply shocks like the halving are important, I think macro factors will play a much bigger role this cycle.\n\nInterest rates, inflation, and overall market liquidity will likely have more impact on Bitcoin's price than the halving itself. If we're in a high interest rate environment, capital might not flow into speculative assets like crypto as readily as it did in previous low-rate environments.\n\nAlso, the 'halving narrative' is much more widely known now. In efficient markets, anticipated events should already be priced in to some extent. I wouldn't expect the same kind of post-halving surge we've seen before.\n\nThat said, the long-term supply cap of Bitcoin remains its most compelling feature, and each halving reinforces that scarcity. I'm bullish long-term, but cautious about attributing too much importance to the halving event itself.",
        createdAt: "45 minutes ago",
        likes: 15,
        isHighlighted: false,
      },
      {
        author: {
          name: "TechnicalTrader",
          image:
            "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
        },
        content:
          "Looking at this from a technical perspective, I think we need to consider where we are in the broader market cycle.\n\nIf you look at Bitcoin's logarithmic growth curves and 4-year cycles, we appear to be following a similar pattern to previous cycles, just with diminishing returns as the market matures. The key support and resistance levels I'm watching are $45K, $65K, and $100K.\n\nPost-halving, I expect we'll see a period of accumulation before a more significant move upward. Based on previous cycles, the peak might come 12-15 months after the halving.\n\nOne interesting metric to watch is the stock-to-flow ratio, which will increase significantly after the halving. Historically, price has followed this ratio with some lag.\n\nI've set up DCAs (dollar-cost averaging) to increase my position leading up to and following the halving, rather than trying to time the exact market movements.",
        createdAt: "30 minutes ago",
        likes: 12,
        isHighlighted: false,
      },
    ],
    similarDiscussions: [
      {
        slug: "bitcoin-etf-impact",
        title: "How will Bitcoin ETF approval impact institutional adoption?",
        category: "Bitcoin",
        excerpt:
          "With the recent approval of Bitcoin ETFs, I'm wondering how this might affect institutional investment in the cryptocurrency space.",
        replies: 34,
        likes: 67,
      },
      {
        slug: "mining-profitability-post-halving",
        title: "Bitcoin mining profitability after the 2024 halving",
        category: "Mining",
        excerpt:
          "Miners will see their rewards cut in half. How will this affect mining operations and what hashrate changes might we expect?",
        replies: 28,
        likes: 45,
      },
      {
        slug: "historical-halving-analysis",
        title: "Analysis of price action during previous Bitcoin halvings",
        category: "Technical Analysis",
        excerpt:
          "A detailed look at how Bitcoin's price behaved before, during, and after the 2012, 2016, and 2020 halving events.",
        replies: 42,
        likes: 89,
      },
      {
        slug: "altcoin-performance-bitcoin-halving",
        title:
          "How do altcoins typically perform during Bitcoin halving cycles?",
        category: "Altcoins",
        excerpt:
          "Examining the historical performance of alternative cryptocurrencies during Bitcoin halving cycles.",
        replies: 19,
        likes: 31,
      },
    ],
  };
}
