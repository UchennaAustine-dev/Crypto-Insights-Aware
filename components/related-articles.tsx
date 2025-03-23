import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, MessageSquare, ThumbsUp } from "lucide-react";
import { articles } from "@/lib/mock-data";

interface RelatedArticlesProps {
  category: string;
  currentSlug: string;
}

export default function RelatedArticles({
  category,
  currentSlug,
}: RelatedArticlesProps) {
  // Get all articles as an array
  const articlesArray = Object.entries(articles);

  // Filter related articles - same category but not the current article
  const relatedArticlesData = articlesArray
    .filter(
      ([slug, article]) => article.category === category && slug !== currentSlug
    )
    .slice(0, 3)
    .map(([slug, article]) => ({
      slug,
      ...article,
    }));

  // If we don't have enough related articles by category, add some other recent articles
  if (relatedArticlesData.length < 3) {
    const otherArticles = articlesArray
      .filter(
        ([slug, article]) =>
          slug !== currentSlug &&
          !relatedArticlesData.some((item) => item.slug === slug)
      )
      .slice(0, 3 - relatedArticlesData.length)
      .map(([slug, article]) => ({
        slug,
        ...article,
      }));

    relatedArticlesData.push(...otherArticles);
  }

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-heading font-bold text-center">
        Related Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedArticlesData.map((article) => (
          <Card
            key={article.slug}
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
                  href={`/news/${article.slug}`}
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
                  {article.author.name}
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
        ))}
      </div>
    </div>
  );
}
