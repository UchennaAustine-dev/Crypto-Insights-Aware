/**
 * Creates Open Graph images array for metadata
 */
export function createOgImages(
  title: string,
  description?: string,
  imageUrl = "https://cryptoaware.site/og-image.jpg"
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
  canonical?: string
) {
  return {
    title,
    description,
    keywords: keywords.join(", "),
    openGraph: {
      title,
      description,
      images: createOgImages(title, description, image),
      url: canonical || undefined,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : ["https://cryptoaware.site/og-image.jpg"],
    },
  };
}
