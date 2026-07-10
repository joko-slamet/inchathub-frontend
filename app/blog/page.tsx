"use client";

import { useState } from "react";
import { LuNewspaper, LuLoaderCircle, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { getSiteContent } from "@/content/site-content";
import { useLocale } from "@/components/locale-provider";
import { usePaginatedArticles } from "@/hooks/use-paginated-articles";
import { toPublicBlogPosts } from "@/lib/blog-format";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/ui/page-hero";
import { BlogGrid } from "@/components/sections/blog-grid";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/sections/footer";

const PAGE_SIZE = 9;

export default function BlogPage() {
  const { locale } = useLocale();
  const content = getSiteContent(locale);
  const [page, setPage] = useState(1);
  const { articles, totalPages, loading, error } = usePaginatedArticles(page, PAGE_SIZE);

  function goToPage(next: number) {
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

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
            {articles && articles.length > 0 && (
              <>
                <BlogGrid posts={toPublicBlogPosts(articles, locale)} />

                {totalPages > 1 && (
                  <div className="mt-12 flex items-center justify-center gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      size="md"
                      onClick={() => goToPage(page - 1)}
                      disabled={page <= 1}
                      className="disabled:pointer-events-none disabled:opacity-40"
                    >
                      <LuChevronLeft className="size-4" />
                      Sebelumnya
                    </Button>
                    <span className="text-sm font-medium text-ink/60">
                      Halaman {page} dari {totalPages}
                    </span>
                    <Button
                      type="button"
                      variant="outline"
                      size="md"
                      onClick={() => goToPage(page + 1)}
                      disabled={page >= totalPages}
                      className="disabled:pointer-events-none disabled:opacity-40"
                    >
                      Selanjutnya
                      <LuChevronRight className="size-4" />
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer content={content.footer} nav={content.nav} />
    </>
  );
}
