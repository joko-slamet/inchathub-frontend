import type { ReactNode } from "react";
import Link from "next/link";

// Article content paragraphs may embed a deliberately narrow markdown
// subset — [anchor text](url) — for AI-inserted internal links (see
// LinkListInput in the blog admin panel). This is the only markup allowed
// in article content; everything else renders as plain text, so we parse it
// ourselves instead of reaching for a full markdown renderer or
// dangerouslySetInnerHTML.
const MARKDOWN_LINK_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)/g;

export function LinkifiedText({ text }: { text: string }) {
  const segments: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of text.matchAll(MARKDOWN_LINK_PATTERN)) {
    const [full, anchorText, url] = match;
    const index = match.index ?? 0;
    if (index > lastIndex) segments.push(text.slice(lastIndex, index));
    segments.push(
      <Link key={key++} href={url} className="font-medium text-signal underline underline-offset-2 hover:text-ink">
        {anchorText}
      </Link>,
    );
    lastIndex = index + full.length;
  }
  if (lastIndex < text.length) segments.push(text.slice(lastIndex));

  return <>{segments}</>;
}
