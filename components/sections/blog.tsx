import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { BlogGrid } from "@/components/sections/blog-grid";
import type { SiteContent } from "@/content/site-content";

export function Blog({ content, limit }: { content: SiteContent["blog"]; limit?: number }) {
  const posts = limit ? content.posts.slice(0, limit) : content.posts;

  return (
    <Section
      id="blog"
      align="center"
      eyebrow={content.eyebrow}
      title={
        <>
          {content.titleMain} <span className="text-signal">{content.titleAccent}</span>
        </>
      }
      description={content.description}
    >
      <ScrollReveal delay={0.15} className="mt-12">
        <BlogGrid posts={posts} />
      </ScrollReveal>

      {limit !== undefined && limit < content.posts.length && (
        <ScrollReveal delay={0.2} className="mt-10 flex justify-center">
          <Button href="/blog" variant="outline" size="md">
            {content.viewAllLabel}
          </Button>
        </ScrollReveal>
      )}
    </Section>
  );
}
