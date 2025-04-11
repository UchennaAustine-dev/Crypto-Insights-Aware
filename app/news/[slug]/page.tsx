import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  MessageSquare,
  ThumbsUp,
  Share2,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  ArrowLeft,
} from "lucide-react";
import NewsletterSignup from "@/components/newsletter-signup";
import RelatedArticles from "@/components/related-articles";
import { articles } from "@/lib/mock-data";
import SidebarAd from "@/components/ads/sidebar-ad";
import ArticleAd from "@/components/ads/article-ad";
import FooterAd from "@/components/ads/footer-ad";
import { createArticleJsonLd, createBreadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/json-ld";
import HilltopInpageAd from "@/components/ads/hilltop-inpage-ad";
import HilltopBannerAd from "@/components/ads/hilltop-banner-ad";
import HilltopVideoAd from "@/components/ads/hilltop-video-ad";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  // In a real app, you would fetch this data from an API
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  const article =
    articles[slug as keyof typeof articles] || Object.values(articles)[0];

  return {
    title: `${article.title} | CryptoInsight`,
    description: article.excerpt,
    keywords: article.tags.join(", "),
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  // Resolve params before using them
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  const article =
    articles[slug as keyof typeof articles] || Object.values(articles)[0];

  // Find the middle of the content to insert an ad
  const contentMiddleIndex = Math.floor(article.content.length / 2);

  // Create structured data for the article
  const articleJsonLd = createArticleJsonLd(
    article.title,
    article.excerpt,
    `https://www.cryptoaware.site/news/${slug}`,
    article.coverImage,
    article.publishedAt,
    article.publishedAt,
    article.author.name
  );

  // Create breadcrumb structured data
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", url: "https://www.cryptoaware.site" },
    { name: "News", url: "https://www.cryptoaware.site/news" },
    { name: article.title, url: `https://www.cryptoaware.site/news/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <div className="flex flex-col gap-8 py-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <Link
                href="/news"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to News
              </Link>

              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="rounded-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    {article.title}
                  </h1>
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar>
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
                    <div>
                      <div className="font-medium">{article.author.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {article.author.role}
                      </div>
                    </div>
                    <Separator orientation="vertical" className="h-8" />
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{article.publishedAt}</span>
                    </div>
                  </div>
                </div>

                <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={article.coverImage || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{article.comments} comments</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{article.likes} likes</span>
                    </div>
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

                <Separator />

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {article.content
                    .slice(0, contentMiddleIndex)
                    .map((section, index) => (
                      <div key={index}>
                        {section.type === "paragraph" && (
                          <p>{section.content}</p>
                        )}
                        {section.type === "heading" && (
                          <h2 className="text-2xl font-heading font-bold mt-8 mb-4">
                            {section.content}
                          </h2>
                        )}
                        {section.type === "image" && (
                          <figure className="my-8">
                            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                              <Image
                                src={section.url || "/placeholder.svg"}
                                alt={section.caption || ""}
                                fill
                                className="object-cover"
                              />
                            </div>
                            {section.caption && (
                              <figcaption className="text-center text-sm text-muted-foreground mt-2">
                                {section.caption}
                              </figcaption>
                            )}
                          </figure>
                        )}
                        {section.type === "quote" && (
                          <blockquote className="border-l-4 border-primary pl-4 italic my-6">
                            {section.content}
                            {section.author && (
                              <footer className="text-sm text-muted-foreground mt-2">
                                — {section.author}
                              </footer>
                            )}
                          </blockquote>
                        )}
                        {section.type === "list" && section.items && (
                          <ul className="list-disc pl-6 my-4">
                            {section.items.map((item, i) => (
                              <li key={i} className="mb-2">
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  <HilltopInpageAd className="my-8" />
                  <ArticleAd />

                  {article.content
                    .slice(contentMiddleIndex)
                    .map((section, index) => (
                      <div key={index + contentMiddleIndex}>
                        {section.type === "paragraph" && (
                          <p>{section.content}</p>
                        )}
                        {section.type === "heading" && (
                          <h2 className="text-2xl font-heading font-bold mt-8 mb-4">
                            {section.content}
                          </h2>
                        )}
                        {section.type === "image" && (
                          <figure className="my-8">
                            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                              <Image
                                src={section.url || "/placeholder.svg"}
                                alt={section.caption || ""}
                                fill
                                className="object-cover"
                              />
                            </div>
                            {section.caption && (
                              <figcaption className="text-center text-sm text-muted-foreground mt-2">
                                {section.caption}
                              </figcaption>
                            )}
                          </figure>
                        )}
                        {section.type === "quote" && (
                          <blockquote className="border-l-4 border-primary pl-4 italic my-6">
                            {section.content}
                            {section.author && (
                              <footer className="text-sm text-muted-foreground mt-2">
                                — {section.author}
                              </footer>
                            )}
                          </blockquote>
                        )}
                        {section.type === "list" && section.items && (
                          <ul className="list-disc pl-6 my-4">
                            {section.items.map((item, i) => (
                              <li key={i} className="mb-2">
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-heading font-bold mb-4">
                    Share this article
                  </h3>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      title="Share on Facebook"
                    >
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      title="Share on Twitter"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      title="Share on LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" title="Copy link">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>About the Author</CardTitle>
                  </CardHeader>
                  <CardContent className="flex gap-4">
                    <Avatar className="h-16 w-16">
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
                    <div>
                      <h4 className="text-lg font-medium">
                        {article.author.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {article.author.role}
                      </p>
                      <p className="text-sm">{article.author.bio}</p>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-heading font-bold mb-4">
                    Join the conversation
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Share your thoughts on this article with our community.
                  </p>
                  <Button>Sign in to comment</Button>
                </div>
              </div>
            </div>

            <div className="lg:w-1/4 space-y-6">
              <SidebarAd />

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Popular Articles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(articles)
                    .slice(0, 3)
                    .map(([slug, article], index) => (
                      <div key={index} className="flex gap-3">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={article.coverImage || "/placeholder.svg"}
                            alt={article.title}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div>
                          <Link
                            href={`/news/${slug}`}
                            className="font-medium hover:text-primary line-clamp-2 text-sm"
                          >
                            {article.title}
                          </Link>
                          <p className="text-xs text-muted-foreground mt-1">
                            {article.publishedAt}
                          </p>
                        </div>
                      </div>
                    ))}
                </CardContent>
              </Card>
              <HilltopVideoAd />
              <SidebarAd />
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <RelatedArticles category={article.category} currentSlug={slug} />
        </div>

        <HilltopBannerAd />
        <FooterAd />

        <div className="container mx-auto">
          <NewsletterSignup />
        </div>
      </div>
    </>
  );
}
