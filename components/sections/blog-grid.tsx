import { LuNewspaper, LuCalendar, LuClock } from "react-icons/lu";
import type { SiteContent } from "@/content/site-content";

export function BlogGrid({ posts }: { posts: SiteContent["blog"]["posts"] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="flex flex-col overflow-hidden rounded-2xl border border-line transition-colors hover:border-ink/20"
        >
          <div className="relative flex h-40 items-center justify-center bg-signal-dim">
            <LuNewspaper className="size-10 text-signal/25" strokeWidth={1.5} />
            <span className="absolute top-4 left-4 rounded-full bg-ink px-3 py-1 font-mono text-[0.65rem] tracking-wide text-paper uppercase">
              {post.category}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-display text-lg leading-snug font-semibold text-ink">{post.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{post.excerpt}</p>
            <div className="mt-4 flex items-center gap-4 border-t border-line pt-4 font-mono text-xs text-ink/45">
              <span className="flex items-center gap-1">
                <LuCalendar className="size-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <LuClock className="size-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
