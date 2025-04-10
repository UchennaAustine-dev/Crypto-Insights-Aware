import type { Metadata } from "next";

/**
 * Creates Open Graph images array for metadata
 */
export function createOgImages(
  title: string,
  description?: string,
  imageUrl = "https://www.cryptoaware.site/og-image.jpg"
) {
  return [
    {
      url: imageUrl,
      width: 1200,
      height: 630,
      alt: title,
    },
  ];
}

/**
 * Creates default metadata for SEO
 */
export function createMetadata(
  title: string,
  description: string,
  keywords: string[] = [],
  image?: string,
  canonical?: string,
  type: "website" | "article" = "website",
  publishedTime?: string,
  authors?: string[]
): Metadata {
  const baseUrl = "https://www.cryptoaware.site";
  const url = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return {
    title,
    description,
    keywords: keywords.join(", "),
    authors: authors?.map((author) => ({ name: author })) || [
      { name: "CryptoInsight Team" },
    ],
    openGraph: {
      title,
      description,
      images: createOgImages(title, description, image),
      url,
      type,
      ...(type === "article" && {
        article: {
          publishedTime,
          authors: authors || ["CryptoInsight Team"],
          tags: keywords,
        },
      }),
      siteName: "CryptoInsight",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : ["https://www.cryptoaware.site/og-image.jpg"],
      creator: "@cryptoinsight",
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },
  };
}

/**
 * Creates article-specific metadata
 */
export function createArticleMetadata(
  title: string,
  description: string,
  keywords: string[] = [],
  image?: string,
  slug?: string,
  publishedTime?: string,
  authors?: string[]
): Metadata {
  return createMetadata(
    title,
    description,
    keywords,
    image,
    slug ? `/news/${slug}` : undefined,
    "article",
    publishedTime,
    authors
  );
}

/**
 * Creates JSON-LD structured data for articles
 */
export function createArticleJsonLd(
  title: string,
  description: string,
  url: string,
  imageUrl: string,
  datePublished: string,
  dateModified: string = datePublished,
  authorName = "CryptoInsight Team"
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: imageUrl,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "CryptoInsight",
      logo: {
        "@type": "ImageObject",
        url: "https://www.cryptoaware.site/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

/**
 * Creates JSON-LD structured data for the website
 */
export function createWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CryptoInsight",
    url: "https://www.cryptoaware.site",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.cryptoaware.site/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Creates JSON-LD structured data for breadcrumbs
 */
export function createBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
