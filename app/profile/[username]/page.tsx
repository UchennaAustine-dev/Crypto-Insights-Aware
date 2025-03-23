import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MessageSquare,
  ThumbsUp,
  Calendar,
  MapPin,
  LinkIcon,
  Twitter,
  Github,
  Globe,
} from "lucide-react";

interface ProfilePageProps {
  params: {
    username: string;
  };
}

export async function generateMetadata({
  params,
}: ProfilePageProps): Promise<Metadata> {
  // In a real app, you would fetch this data from an API
  const resolvedParams = await Promise.resolve(params);
  const username = resolvedParams.username;
  const profile = getProfileData(username);

  return {
    title: `${profile.displayName} (@${profile.username}) | CryptoInsight`,
    description: profile.bio,
  };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const resolvedParams = await Promise.resolve(params);
  const username = resolvedParams.username;
  const profile = getProfileData(params.username);

  return (
    <div className="flex flex-col gap-8 py-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col gap-6">
          <div className="relative">
            <div className="w-full h-48 md:h-64 rounded-lg overflow-hidden">
              <Image
                src={profile.coverImage || "/placeholder.svg"}
                alt="Profile cover"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-16 left-4 md:left-8">
              <Avatar className="h-32 w-32 border-4 border-background">
                <AvatarImage src={profile.avatar} alt={profile.displayName} />
                <AvatarFallback>{profile.displayName[0]}</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-heading font-bold">
                {profile.displayName}
              </h1>
              <p className="text-muted-foreground">@{profile.username}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Message</Button>
              <Button>Follow</Button>
            </div>
          </div>

          <div>
            <p className="mb-4">{profile.bio}</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              {profile.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{profile.location}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Joined {profile.joinedDate}</span>
              </div>
              {profile.website && (
                <div className="flex items-center gap-1">
                  <LinkIcon className="h-4 w-4" />
                  <a
                    href={profile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {profile.website.replace(/^https?:\/\//, "")}
                  </a>
                </div>
              )}
            </div>

            <div className="flex gap-2 mt-4">
              {profile.socialLinks.twitter && (
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={profile.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {profile.socialLinks.github && (
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={profile.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {profile.socialLinks.website && (
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={profile.socialLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          <Separator />

          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
              <TabsTrigger value="comments">Comments</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
            </TabsList>

            <TabsContent value="posts" className="mt-0">
              <div className="grid grid-cols-1 gap-6">
                {profile.posts.map((post, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="relative h-48 md:h-auto">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6 flex flex-col">
                        <CardHeader className="p-0 pb-2">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="rounded-sm">
                              {post.category}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl">
                            <Link
                              href={`/news/${post.slug}`}
                              className="hover:text-primary transition-colors"
                            >
                              {post.title}
                            </Link>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 py-2 flex-grow">
                          <p className="text-muted-foreground line-clamp-2">
                            {post.excerpt}
                          </p>
                        </CardContent>
                        <div className="flex justify-between items-center text-sm text-muted-foreground">
                          <span>{post.date}</span>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4" />
                              <span>{post.comments}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{post.likes}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {profile.posts.length > 0 && (
                <div className="flex justify-center mt-8">
                  <Button variant="outline">View More Posts</Button>
                </div>
              )}

              {profile.posts.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No posts yet</h3>
                  <p className="text-muted-foreground">
                    This user hasn't published any posts.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="discussions" className="mt-0">
              <div className="grid grid-cols-1 gap-4">
                {profile.discussions.map((discussion, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="rounded-sm">
                          {discussion.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">
                        <Link
                          href={`/forum/${discussion.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {discussion.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-muted-foreground line-clamp-2 mb-4">
                        {discussion.excerpt}
                      </p>
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>{discussion.date}</span>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            <span>{discussion.replies} replies</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{discussion.likes}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {profile.discussions.length > 0 && (
                <div className="flex justify-center mt-8">
                  <Button variant="outline">View More Discussions</Button>
                </div>
              )}

              {profile.discussions.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">
                    No discussions yet
                  </h3>
                  <p className="text-muted-foreground">
                    This user hasn't started any discussions.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="about" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>About {profile.displayName}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Bio</h3>
                      <p className="text-muted-foreground">{profile.bio}</p>
                    </div>

                    {profile.interests.length > 0 && (
                      <div>
                        <h3 className="text-lg font-medium mb-2">Interests</h3>
                        <div className="flex flex-wrap gap-2">
                          {profile.interests.map((interest, index) => (
                            <Badge key={index} variant="secondary">
                              {interest}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {profile.expertise.length > 0 && (
                      <div>
                        <h3 className="text-lg font-medium mb-2">Expertise</h3>
                        <div className="flex flex-wrap gap-2">
                          {profile.expertise.map((skill, index) => (
                            <Badge key={index} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <h3 className="text-lg font-medium mb-2">Stats</h3>
                      <dl className="grid grid-cols-2 gap-4">
                        <div>
                          <dt className="text-muted-foreground">Joined</dt>
                          <dd>{profile.joinedDate}</dd>
                        </div>
                        <div>
                          <dt className="text-muted-foreground">Posts</dt>
                          <dd>{profile.stats.posts}</dd>
                        </div>
                        <div>
                          <dt className="text-muted-foreground">Discussions</dt>
                          <dd>{profile.stats.discussions}</dd>
                        </div>
                        <div>
                          <dt className="text-muted-foreground">Comments</dt>
                          <dd>{profile.stats.comments}</dd>
                        </div>
                        <div>
                          <dt className="text-muted-foreground">Followers</dt>
                          <dd>{profile.stats.followers}</dd>
                        </div>
                        <div>
                          <dt className="text-muted-foreground">Following</dt>
                          <dd>{profile.stats.following}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

// Mock data function - in a real app, you would fetch this from an API
function getProfileData(username: string) {
  return {
    username: username,
    displayName: "John Doe",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    coverImage:
      "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
    bio: "Crypto enthusiast and blockchain developer. I write about cryptocurrency markets, DeFi innovations, and technical analysis. Always learning and sharing knowledge with the community.",
    location: "San Francisco, CA",
    website: "https://johndoe.com",
    joinedDate: "January 2022",
    socialLinks: {
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe",
      website: "https://johndoe.com",
    },
    interests: [
      "Bitcoin",
      "Ethereum",
      "DeFi",
      "NFTs",
      "Technical Analysis",
      "Blockchain Development",
    ],
    expertise: [
      "Smart Contracts",
      "Solidity",
      "Web3.js",
      "Market Analysis",
      "DeFi Protocols",
    ],
    stats: {
      posts: 24,
      discussions: 47,
      comments: 156,
      followers: 342,
      following: 128,
    },
    posts: [
      {
        title:
          "The Future of Decentralized Finance: How DeFi is Reshaping Traditional Banking",
        slug: "defi-reshaping-banking",
        excerpt:
          "Decentralized Finance continues to disrupt traditional financial systems, offering innovative solutions for lending, borrowing, and trading without intermediaries.",
        image:
          "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg",
        category: "DeFi",
        date: "March 15, 2025",
        comments: 42,
        likes: 218,
      },
      {
        title: "Bitcoin's Halving Event: What Investors Need to Know",
        slug: "bitcoin-halving-analysis",
        excerpt:
          "The upcoming Bitcoin halving will reduce mining rewards by 50%. Here's how it could impact the market and what you should prepare for.",
        image:
          "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
        category: "Bitcoin",
        date: "March 10, 2025",
        comments: 36,
        likes: 187,
      },
      {
        title:
          "NFT Market Recovery: Analyzing the Latest Trends and Opportunities",
        slug: "nft-market-recovery",
        excerpt:
          "After a period of decline, the NFT market shows signs of recovery with new use cases and improved infrastructure.",
        image:
          "https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg",
        category: "NFTs",
        date: "March 5, 2025",
        comments: 28,
        likes: 142,
      },
    ],
    discussions: [
      {
        title: "How will the upcoming Bitcoin halving affect the market?",
        slug: "bitcoin-halving-discussion",
        excerpt:
          "I'm curious about everyone's thoughts on the potential market impact of the next Bitcoin halving. Will we see a similar pattern to previous halvings?",
        category: "Bitcoin",
        date: "March 18, 2025",
        replies: 24,
        likes: 42,
      },
      {
        title: "Best platforms for Ethereum staking in 2025",
        slug: "ethereum-staking-rewards",
        excerpt:
          "I'm looking to stake my ETH and wondering which platforms offer the best combination of security, rewards, and ease of use. Any recommendations?",
        category: "Ethereum",
        date: "March 12, 2025",
        replies: 18,
        likes: 35,
      },
      {
        title: "Technical analysis strategies for volatile markets",
        slug: "trading-strategies",
        excerpt:
          "What technical analysis strategies are you finding most effective in the current volatile market conditions?",
        category: "Trading",
        date: "March 8, 2025",
        replies: 31,
        likes: 67,
      },
    ],
  };
}
