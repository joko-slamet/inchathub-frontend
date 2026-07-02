"use client";

import { LuNewspaper } from "react-icons/lu";
import { getSiteContent } from "@/content/site-content";
import { useLocale } from "@/components/locale-provider";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/ui/page-hero";
import { BlogGrid } from "@/components/sections/blog-grid";
import { Footer } from "@/components/sections/footer";

export default function BlogPage() {
  const { locale } = useLocale();
  const content = getSiteContent(locale);

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
            <BlogGrid posts={content.blog.posts} />
          </div>
        </section>
      </main>
      <Footer content={content.footer} nav={content.nav} />
    </>
  );
}
