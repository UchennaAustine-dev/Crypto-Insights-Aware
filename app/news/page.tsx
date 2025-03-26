import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
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
import { Search, Filter, Clock, MessageSquare, ThumbsUp } from "lucide-react";
import NewsletterSignup from "@/components/newsletter-signup";
import { articles } from "@/lib/mock-data";
import { createMetadata } from "@/lib/seo";
import ArticleAd from "@/components/ads/article-ad";
import FooterAd from "@/components/ads/footer-ad";

export const metadata: Metadata = createMetadata(
  "Cryptocurrency News & Analysis",
  "Stay updated with the latest news, insights, and analysis from the world of cryptocurrency and blockchain technology.",
  [
    "crypto news",
    "blockchain news",
    "bitcoin news",
    "ethereum news",
    "defi news",
    "nft news",
  ]
);

export default function NewsPage() {
  // Get all articles as an array sorted by published date (most recent first)
  const articlesArray = Object.values(articles).sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  // Find article slugs for linking
  const getArticleSlug = (article: (typeof articlesArray)[0]): string => {
    const entry = Object.entries(articles).find(
      ([_, value]) => value === article
    );
    return entry ? entry[0] : "";
  };

  return (
    <div className="flex flex-col gap-8 py-8">
      <section className="container mx-auto">
        <div className="flex flex-col gap-4 mb-8 text-center">
          <h1 className="text-4xl font-heading font-bold text-center">
            Cryptocurrency News
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-center">
            Stay updated with the latest news, insights, and analysis from the
            world of cryptocurrency and blockchain technology.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
          <div className="relative flex-grow max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search news..." className="pl-9" />
          </div>
          <Button variant="outline" className="flex gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-6 overflow-x-auto">
            <TabsList>
              <TabsTrigger value="all">All News</TabsTrigger>
              <TabsTrigger value="bitcoin">Bitcoin</TabsTrigger>
              <TabsTrigger value="ethereum">Ethereum</TabsTrigger>
              <TabsTrigger value="defi">DeFi</TabsTrigger>
              <TabsTrigger value="nft">NFTs</TabsTrigger>
              <TabsTrigger value="regulation">Regulation</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 gap-8">
              {/* Featured Article */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-full min-h-[300px]">
                    <Image
                      src={articlesArray[0].coverImage || "/placeholder.svg"}
                      alt="Featured article thumbnail"
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
                          href={`/news/${getArticleSlug(articlesArray[0])}`}
                          className="hover:text-primary transition-colors"
                        >
                          {articlesArray[0].title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 py-4 flex-grow">
                      <p className="text-muted-foreground mb-4">
                        {articlesArray[0].excerpt}
                      </p>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage
                            src={articlesArray[0].author.image}
                            alt="Author"
                          />
                          <AvatarFallback>
                            {articlesArray[0].author.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">
                            {articlesArray[0].author.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {articlesArray[0].author.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-0 pt-4 flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{articlesArray[0].publishedAt}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{articlesArray[0].comments}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{articlesArray[0].likes}</span>
                        </div>
                      </div>
                    </CardFooter>
                  </div>
                </div>
              </Card>

              <ArticleAd />

              {/* News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articlesArray.slice(1, 4).map((article, index) => {
                  const articleSlug = getArticleSlug(article);
                  return (
                    <Card
                      key={index}
                      className="overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="relative">
                        <Image
                          src={article.coverImage || "/placeholder.svg"}
                          alt={`${article.title} thumbnail`}
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                        <Badge className="absolute top-3 right-3 bg-primary">
                          {article.category}
                        </Badge>
                      </div>
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-xl line-clamp-2">
                          <Link
                            href={`/news/${articleSlug}`}
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
                            <AvatarImage
                              src={article.author.image}
                              alt={article.author.name}
                            />
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
                          <span>{article.publishedAt}</span>
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
                  );
                })}
              </div>

              <ArticleAd />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articlesArray.slice(4).map((article, index) => {
                  const articleSlug = getArticleSlug(article);
                  return (
                    <Card
                      key={index + 4}
                      className="overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="relative">
                        <Image
                          src={article.coverImage || "/placeholder.svg"}
                          alt={`${article.title} thumbnail`}
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                        <Badge className="absolute top-3 right-3 bg-primary">
                          {article.category}
                        </Badge>
                      </div>
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-xl line-clamp-2">
                          <Link
                            href={`/news/${articleSlug}`}
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
                            <AvatarImage
                              src={article.author.image}
                              alt={article.author.name}
                            />
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
                          <span>{article.publishedAt}</span>
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
                  );
                })}
              </div>

              <div className="flex justify-center mt-8">
                <Button>Load More Articles</Button>
              </div>
            </div>
          </TabsContent>

          {/* Bitcoin tab content */}
          <TabsContent value="bitcoin" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articlesArray
                .filter((article) => article.category === "Bitcoin")
                .map((article, index) => {
                  const articleSlug = getArticleSlug(article);
                  return (
                    <Card
                      key={index}
                      className="overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="relative">
                        <Image
                          src={article.coverImage || "/placeholder.svg"}
                          alt={`${article.title} thumbnail`}
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
                            href={`/news/${articleSlug}`}
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
                            <AvatarImage
                              src={article.author.image}
                              alt={article.author.name}
                            />
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
                          <span>{article.publishedAt}</span>
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
                  );
                })}
            </div>
          </TabsContent>

          {/* Other category tabs would follow the same pattern */}
        </Tabs>
      </section>

      <FooterAd />

      {/* Newsletter Section */}
      <section className="container mx-auto">
        <NewsletterSignup />
      </section>
    </div>
  );
}
