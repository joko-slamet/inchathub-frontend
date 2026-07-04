"use client";

import { LuNewspaper, LuLoaderCircle } from "react-icons/lu";
import { getSiteContent } from "@/content/site-content";
import { useLocale } from "@/components/locale-provider";
import { useArticles } from "@/hooks/use-articles";
import { toPublicBlogPosts } from "@/lib/blog-format";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/ui/page-hero";
import { BlogGrid } from "@/components/sections/blog-grid";
import { Footer } from "@/components/sections/footer";

export default function BlogPage() {
  const { locale } = useLocale();
  const content = getSiteContent(locale);
  const { articles, loading, error } = useArticles();

  return (
    <>
      <Navbar content={content.nav} />
      <main className="flex-1">
        <PageHero
          icon={LuNewspaper}
          heading={content.blogHero.heading}
          subheading={content.blogHero.subheading}
        />
        <section className="px-6 py-16 sm:py-20 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            {loading && (
              <div className="flex items-center justify-center gap-2 py-16 text-sm text-ink/50">
                <LuLoaderCircle className="size-4 animate-spin" />
                Memuat artikel...
              </div>
            )}
            {error && (
              <p className="py-16 text-center text-sm text-ink/50">
                Gagal memuat artikel. Coba muat ulang halaman.
              </p>
            )}
            {articles && articles.length === 0 && (
              <p className="py-16 text-center text-sm text-ink/50">Belum ada artikel yang dipublikasikan.</p>
            )}
            {articles && articles.length > 0 && <BlogGrid posts={toPublicBlogPosts(articles, locale)} />}
          </div>
        </section>
      </main>
      <Footer content={content.footer} nav={content.nav} />
    </>
  );
}
