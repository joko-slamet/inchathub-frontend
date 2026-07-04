"use client";

import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { LuArrowLeft, LuCalendar, LuClock, LuUser, LuLoaderCircle } from "react-icons/lu";
import { getSiteContent } from "@/content/site-content";
import { useLocale } from "@/components/locale-provider";
import { useArticles } from "@/hooks/use-articles";
import { toPublicBlogPosts } from "@/lib/blog-format";
import { Navbar } from "@/components/sections/navbar";
import { BlogGrid } from "@/components/sections/blog-grid";
import { ClosingCta } from "@/components/sections/closing-cta";
import { Footer } from "@/components/sections/footer";

export default function BlogDetailPage() {
  const { locale } = useLocale();
  const content = getSiteContent(locale);
  const { slug } = useParams<{ slug: string }>();
  const { articles, loading, error } = useArticles();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center gap-2 text-sm text-ink/50">
        <LuLoaderCircle className="size-4 animate-spin" />
        Memuat artikel...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-ink/50">
        Gagal memuat artikel. Coba muat ulang halaman.
      </div>
    );
  }

  const posts = toPublicBlogPosts(articles ?? [], locale);
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Navbar content={content.nav} />
      <main className="flex-1">
        <article
          className="relative overflow-hidden px-6 pt-14 pb-16 md:px-10 md:pt-20 md:pb-20 lg:px-16"
          style={{
            backgroundColor: "var(--color-paper)",
            backgroundImage: "radial-gradient(circle at 88% 0%, var(--color-signal-dim) 0%, transparent 50%)",
          }}
        >
          <div
            aria-hidden="true"
            className="blob pointer-events-none absolute -top-20 -left-16 size-72 bg-slate-dim blur-xl"
          />

          <div className="relative mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/50 hover:text-ink"
            >
              <LuArrowLeft className="size-4" />
              Kembali ke Blog
            </Link>

            <h1 className="mt-6 font-display text-3xl leading-tight font-bold text-ink sm:text-4xl">
              {post.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink/55">
              <span className="flex items-center gap-1.5">
                <LuUser className="size-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <LuCalendar className="size-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <LuClock className="size-4" />
                {post.readTime}
              </span>
            </div>

            {post.imageUrl ? (
              <div className="relative mt-8 overflow-hidden rounded-[1.75rem] border-2 border-line">
                {/* eslint-disable-next-line @next/next/no-img-element -- backend host isn't known ahead of time for next/image. */}
                <img src={post.imageUrl} alt="" className="aspect-video w-full object-cover" />
                <span className="sticker absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-signal-dim px-4 py-1.5 text-xs font-semibold tracking-[0.06em] text-signal uppercase">
                  <span className="size-1.5 rounded-full bg-signal" />
                  {post.category}
                </span>
              </div>
            ) : (
              <span className="sticker mt-8 inline-flex items-center gap-2 rounded-full bg-signal-dim px-4 py-1.5 text-xs font-semibold tracking-[0.06em] text-signal uppercase">
                <span className="size-1.5 rounded-full bg-signal" />
                {post.category}
              </span>
            )}

            <div className="mt-10 flex flex-col gap-5 border-t border-dashed border-line pt-10">
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed text-ink/80 sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="px-6 py-16 sm:py-20 md:px-10 lg:px-16">
            <div className="mx-auto max-w-6xl">
              <p className="font-display text-2xl font-bold text-ink">Artikel Lainnya</p>
              <div className="mt-8">
                <BlogGrid posts={relatedPosts} />
              </div>
            </div>
          </section>
        )}

        <ClosingCta content={content.closingCta} />
      </main>
      <Footer content={content.footer} nav={content.nav} />
    </>
  );
}
