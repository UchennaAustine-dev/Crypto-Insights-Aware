import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  BookOpen,
  Share2,
  ThumbsUp,
  MessageSquare,
  Bookmark,
  ChevronRight,
} from "lucide-react";
import NewsletterSignup from "@/components/newsletter-signup";

interface GuidePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  // In a real app, you would fetch this data from an API
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  const guide = await getGuideData(slug);

  return {
    title: `${guide.title} | CryptoInsight Education`,
    description: guide.excerpt,
    keywords: guide.tags.join(", "),
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  const guide = await getGuideData(slug);

  return (
    <div className="flex flex-col gap-8 py-8">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/education"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Education Center
        </Link>

        <div className="flex flex-col gap-6">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {guide.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="rounded-sm">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {guide.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {guide.excerpt}
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                <span>{guide.readTime} read</span>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ThumbsUp className="h-4 w-4" />
                <span>{guide.likes} people found this helpful</span>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src={guide.coverImage || "/placeholder.svg"}
              alt={guide.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Button variant="outline" className="gap-2">
                <ThumbsUp className="h-4 w-4" />
                Helpful
              </Button>
              <Button variant="outline" className="gap-2">
                <MessageSquare className="h-4 w-4" />
                Comment
              </Button>
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
            {guide.content.map((section, index) => (
              <div key={index}>
                {section.type === "paragraph" && <p>{section.content}</p>}
                {section.type === "heading" && (
                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">
                    {section.content}
                  </h2>
                )}
                {section.type === "subheading" && (
                  <h3 className="text-xl font-heading font-bold mt-6 mb-3">
                    {section.content}
                  </h3>
                )}
                {section.type === "image" && "url" in section && (
                  <figure className="my-8">
                    <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                      <Image
                        src={section.url || "/placeholder.svg"}
                        alt={("caption" in section && section.caption) || ""}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {"caption" in section && section.caption && (
                      <figcaption className="text-center text-sm text-muted-foreground mt-2">
                        {section.caption}
                      </figcaption>
                    )}
                  </figure>
                )}
                {section.type === "quote" && (
                  <blockquote className="border-l-4 border-primary pl-4 italic my-6">
                    {section.content}
                    {"author" in section && section.author && (
                      <footer className="text-sm text-muted-foreground mt-2">
                        — {section.author}
                      </footer>
                    )}
                  </blockquote>
                )}
                {section.type === "list" &&
                  "items" in section &&
                  section.items && (
                    <ul className="list-disc pl-6 my-4">
                      {section.items.map((item, i) => (
                        <li key={i} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                {section.type === "note" && (
                  <div className="bg-muted p-4 rounded-lg my-6">
                    <p className="font-medium mb-2">Note</p>
                    <p className="text-muted-foreground">{section.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <Separator />

          <div className="flex justify-between items-center">
            <Button variant="outline" className="gap-2" asChild>
              <Link href="/education">
                <ArrowLeft className="h-4 w-4" />
                Back to Guides
              </Link>
            </Button>
            {guide.nextGuide && (
              <Button className="gap-2" asChild>
                <Link href={`/education/guide/${guide.nextGuide.slug}`}>
                  {guide.nextGuide.title}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>

          <Card className="bg-muted/30 border-muted">
            <CardContent className="p-6">
              <h3 className="text-xl font-heading font-bold mb-4">
                Was this guide helpful?
              </h3>
              <p className="text-muted-foreground mb-4">
                Help us improve our educational content by providing feedback.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" className="gap-2">
                  <ThumbsUp className="h-4 w-4" />
                  Yes
                </Button>
                <Button variant="outline" className="gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Provide Feedback
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="container mx-auto">
        <h2 className="text-3xl font-heading font-bold text-center mb-6">
          Related Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guide.relatedGuides.map((relatedGuide, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <Image
                  src={relatedGuide.image || "/placeholder.svg"}
                  alt={relatedGuide.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-medium mb-2">
                  <Link
                    href={`/education/guide/${relatedGuide.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {relatedGuide.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground line-clamp-2 mb-4">
                  {relatedGuide.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>{relatedGuide.readTime} read</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="container mx-auto">
        <NewsletterSignup />
      </div>
    </div>
  );
}

// Mock data function - in a real app, you would fetch this from an API
async function getGuideData(slug: string) {
  const guides = {
    "cryptocurrency-basics": {
      title:
        "Cryptocurrency Basics: Everything You Need to Know to Get Started",
      excerpt:
        "A comprehensive introduction to cryptocurrency for beginners. Learn about blockchain technology, how cryptocurrencies work, and how to safely buy, store, and use digital assets.",
      coverImage:
        "https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg",
      tags: ["Beginner", "Cryptocurrency", "Blockchain"],
      readTime: "15 min",
      likes: 1245,
      nextGuide: {
        slug: "what-is-blockchain",
        title: "What is Blockchain?",
      },
      relatedGuides: [
        {
          slug: "what-is-blockchain",
          title: "What is Blockchain?",
          excerpt:
            "Understand the technology that powers cryptocurrencies and its potential applications beyond digital money.",
          image:
            "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg",
          readTime: "8 min",
        },
        {
          slug: "crypto-wallets-explained",
          title: "Crypto Wallets Explained",
          excerpt:
            "Learn about different types of cryptocurrency wallets and how to keep your digital assets secure.",
          image:
            "https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg",
          readTime: "10 min",
        },
        {
          slug: "how-to-buy-crypto",
          title: "How to Buy Your First Cryptocurrency",
          excerpt:
            "A step-by-step guide to purchasing cryptocurrency on exchanges and through other methods.",
          image:
            "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg",
          readTime: "12 min",
        },
      ],
      content: [
        {
          type: "paragraph",
          content:
            "Cryptocurrency has emerged as one of the most revolutionary technologies of the 21st century, promising to transform how we think about money, finance, and digital ownership. If you're new to the world of cryptocurrency, this guide will provide you with a solid foundation to understand what cryptocurrencies are, how they work, and how you can get started with them safely.",
        },
        {
          type: "heading",
          content: "What is Cryptocurrency?",
        },
        {
          type: "paragraph",
          content:
            "Cryptocurrency is a digital or virtual form of currency that uses cryptography for security, making it difficult to counterfeit. Unlike traditional currencies issued by governments (fiat currencies), cryptocurrencies operate on decentralized systems based on blockchain technology—a distributed ledger enforced by a network of computers.",
        },
        {
          type: "paragraph",
          content:
            "The first and most well-known cryptocurrency, Bitcoin, was created in 2009 by an anonymous person or group using the pseudonym Satoshi Nakamoto. Since then, thousands of alternative cryptocurrencies have been created, each with different features and purposes.",
        },
        {
          type: "image",
          url: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
          caption:
            "Bitcoin was the first cryptocurrency and remains the largest by market capitalization.",
        },
        {
          type: "heading",
          content: "How Does Blockchain Technology Work?",
        },
        {
          type: "paragraph",
          content:
            "Blockchain is the underlying technology that powers most cryptocurrencies. At its core, a blockchain is a type of database or ledger that stores information in blocks that are linked together in chronological order. Each block contains a set of transactions, and once a block is added to the chain, the data becomes extremely difficult to alter.",
        },
        {
          type: "list",
          items: [
            "Decentralization: The blockchain is maintained by a network of computers (nodes) rather than a central authority.",
            "Transparency: All transactions are publicly visible on the blockchain, though the identities of the participants may be pseudonymous.",
            "Immutability: Once data is recorded on the blockchain, it is extremely difficult to change or remove.",
            "Security: Cryptographic techniques ensure that transactions are secure and that the blockchain remains tamper-resistant.",
          ],
        },
        {
          type: "subheading",
          content: "The Consensus Mechanism",
        },
        {
          type: "paragraph",
          content:
            "For a blockchain to function without a central authority, it needs a way for all participants to agree on the valid state of the ledger. This is achieved through consensus mechanisms, with the two most common being:",
        },
        {
          type: "list",
          items: [
            "Proof of Work (PoW): Used by Bitcoin and some other cryptocurrencies, PoW requires participants (miners) to solve complex mathematical puzzles to validate transactions and create new blocks.",
            'Proof of Stake (PoS): A more energy-efficient alternative where validators are chosen to create new blocks based on the amount of cryptocurrency they "stake" or lock up as collateral.',
          ],
        },
        {
          type: "heading",
          content: "Types of Cryptocurrencies",
        },
        {
          type: "paragraph",
          content:
            "While Bitcoin was the first cryptocurrency, the ecosystem has expanded dramatically to include various types of digital assets:",
        },
        {
          type: "subheading",
          content: "Payment Cryptocurrencies",
        },
        {
          type: "paragraph",
          content:
            "These are designed primarily as digital money for transactions. Examples include Bitcoin (BTC), Litecoin (LTC), and Bitcoin Cash (BCH).",
        },
        {
          type: "subheading",
          content: "Platform Cryptocurrencies",
        },
        {
          type: "paragraph",
          content:
            "These power blockchain platforms that allow developers to build applications. Ethereum (ETH) is the most prominent example, enabling smart contracts and decentralized applications (dApps).",
        },
        {
          type: "subheading",
          content: "Stablecoins",
        },
        {
          type: "paragraph",
          content:
            "These are cryptocurrencies designed to minimize price volatility, often by pegging their value to a stable asset like the US dollar. Examples include Tether (USDT), USD Coin (USDC), and Dai (DAI).",
        },
        {
          type: "subheading",
          content: "Utility Tokens",
        },
        {
          type: "paragraph",
          content:
            "These provide access to a product or service on a specific blockchain platform. Basic Attention Token (BAT), used in the Brave browser ecosystem, is an example.",
        },
        {
          type: "image",
          url: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg",
          caption:
            "Ethereum is a platform cryptocurrency that enables smart contracts and decentralized applications.",
        },
        {
          type: "heading",
          content: "Getting Started with Cryptocurrency",
        },
        {
          type: "subheading",
          content: "Step 1: Educate Yourself",
        },
        {
          type: "paragraph",
          content:
            "Before investing any money, take time to learn about cryptocurrencies, blockchain technology, and the specific projects you're interested in. Understand the risks involved, including price volatility, regulatory uncertainty, and security considerations.",
        },
        {
          type: "subheading",
          content: "Step 2: Choose a Cryptocurrency Exchange",
        },
        {
          type: "paragraph",
          content:
            "To buy cryptocurrency, you'll typically need to use a cryptocurrency exchange. These platforms allow you to convert fiat currency (like USD or EUR) into cryptocurrency. Popular exchanges include Coinbase, Binance, Kraken, and Gemini.",
        },
        {
          type: "note",
          content:
            "When choosing an exchange, consider factors like security features, available cryptocurrencies, fees, user interface, and whether the exchange is regulated in your jurisdiction.",
        },
        {
          type: "subheading",
          content: "Step 3: Set Up a Cryptocurrency Wallet",
        },
        {
          type: "paragraph",
          content:
            "A cryptocurrency wallet is a digital tool that allows you to store, send, and receive cryptocurrencies. There are several types of wallets, each with different security features and convenience levels:",
        },
        {
          type: "list",
          items: [
            "Hardware Wallets: Physical devices that store your private keys offline, offering the highest level of security. Examples include Ledger and Trezor.",
            "Software Wallets: Applications installed on your computer or smartphone. They offer a balance of security and convenience. Examples include Exodus and Electrum.",
            "Web Wallets: Online services that allow you to access your cryptocurrencies through a web browser. They're convenient but potentially less secure. Examples include MetaMask and MyEtherWallet.",
            "Paper Wallets: Physical documents containing your public and private keys, often in the form of QR codes. They're secure against online threats but vulnerable to physical damage or loss.",
          ],
        },
        {
          type: "quote",
          content: "Not your keys, not your coins.",
          author: "Cryptocurrency Community Mantra",
        },
        {
          type: "paragraph",
          content:
            "This popular saying emphasizes the importance of controlling your private keys. When you keep your cryptocurrency on an exchange, you're trusting that platform with your assets. By using a non-custodial wallet (where you control the private keys), you have full ownership and control of your cryptocurrency.",
        },
        {
          type: "heading",
          content: "Security Best Practices",
        },
        {
          type: "paragraph",
          content:
            "Security is paramount in the cryptocurrency world. Here are some essential practices to protect your investments:",
        },
        {
          type: "list",
          items: [
            "Use Strong, Unique Passwords: Create complex passwords for your exchange accounts and wallets, and never reuse them across different services.",
            "Enable Two-Factor Authentication (2FA): Add an extra layer of security to your accounts, preferably using an authenticator app rather than SMS.",
            "Backup Your Wallet: Store backup copies of your wallet information in secure, offline locations.",
            "Be Wary of Scams: Be skeptical of unsolicited offers, giveaways, or investment opportunities. Research thoroughly before investing in any cryptocurrency project.",
            "Keep Software Updated: Ensure your wallet software, operating system, and antivirus programs are up to date.",
            "Consider Cold Storage: For significant investments, consider using cold storage solutions like hardware wallets that keep your private keys offline.",
          ],
        },
        {
          type: "heading",
          content: "Understanding the Risks",
        },
        {
          type: "paragraph",
          content:
            "While cryptocurrencies offer exciting opportunities, they also come with significant risks:",
        },
        {
          type: "list",
          items: [
            "Volatility: Cryptocurrency prices can fluctuate dramatically in short periods.",
            "Regulatory Uncertainty: Regulations around cryptocurrencies are still evolving in many jurisdictions.",
            "Security Risks: If your private keys are compromised, your funds could be stolen with little recourse.",
            "Technical Complexity: Managing cryptocurrencies requires some technical knowledge, which can be a barrier for some users.",
            "Market Risks: The cryptocurrency market includes many speculative projects that may not deliver on their promises.",
          ],
        },
        {
          type: "note",
          content:
            "Never invest more in cryptocurrency than you can afford to lose. Many financial advisors suggest limiting cryptocurrency investments to a small percentage of your overall portfolio.",
        },
        {
          type: "heading",
          content: "Conclusion",
        },
        {
          type: "paragraph",
          content:
            "Cryptocurrency represents a significant innovation in finance and technology, offering new ways to think about money, value, and digital ownership. By understanding the basics of how cryptocurrencies work, setting up secure storage solutions, and approaching investments with caution and research, you can begin to explore this exciting new frontier.",
        },
        {
          type: "paragraph",
          content:
            "Remember that the cryptocurrency space is constantly evolving, with new technologies, projects, and regulations emerging regularly. Staying informed and continuing to learn is essential for anyone interested in this dynamic field.",
        },
      ],
    },
    "what-is-blockchain": {
      title: "What is Blockchain?",
      excerpt:
        "Understand the technology that powers cryptocurrencies and its potential applications beyond digital money.",
      coverImage:
        "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg",
      tags: ["Beginner", "Blockchain", "Technology"],
      readTime: "8 min",
      likes: 987,
      nextGuide: {
        slug: "crypto-wallets-explained",
        title: "Crypto Wallets Explained",
      },
      relatedGuides: [
        {
          slug: "cryptocurrency-basics",
          title: "Cryptocurrency Basics",
          excerpt:
            "A comprehensive introduction to cryptocurrency for beginners.",
          image:
            "https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg",
          readTime: "15 min",
        },
        {
          slug: "crypto-wallets-explained",
          title: "Crypto Wallets Explained",
          excerpt:
            "Learn about different types of cryptocurrency wallets and how to keep your digital assets secure.",
          image:
            "https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg",
          readTime: "10 min",
        },
        {
          slug: "understanding-defi",
          title: "Understanding DeFi",
          excerpt:
            "An introduction to Decentralized Finance and how it's revolutionizing financial services.",
          image:
            "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg",
          readTime: "11 min",
        },
      ],
      content: [
        {
          type: "paragraph",
          content:
            "Blockchain technology has emerged as one of the most transformative innovations of the digital age. While it gained prominence as the technology behind Bitcoin and other cryptocurrencies, its potential applications extend far beyond digital currencies. This guide explores what blockchain is, how it works, and the various ways it's being used to solve real-world problems.",
        },
        // Additional content would be similar to the cryptocurrency-basics guide
      ],
    },
  };

  // Default to first guide if the requested slug doesn't exist
  return guides[slug as keyof typeof guides] || Object.values(guides)[0];
}
