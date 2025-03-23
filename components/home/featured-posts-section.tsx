import Link from "next/link";
import FeaturedPosts from "@/components/featured-posts";

export default function FeaturedPostsSection() {
  return (
    <section className="container">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-heading font-bold">Featured Posts</h2>
          <Link href="/news" className="text-primary hover:underline">
            View All
          </Link>
        </div>
        <FeaturedPosts />
      </div>
    </section>
  );
}
