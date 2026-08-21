"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LuArrowLeft, LuSave, LuLoaderCircle, LuSparkles } from "react-icons/lu";
import { Field, TextAreaField } from "@/components/admin/field";
import { LocaleTabs } from "@/components/admin/locale-tabs";
import type { Locale } from "@/content/site-content";
import { improveArticleSeo, updateArticle } from "@/app/actions/articles";
import type { ArticleDTO, ArticleTranslationInput } from "@/lib/ai-article-types";
import { toArticleImageUrl } from "@/lib/article-image";

function seoScoreBadgeClass(score: number): string {
  if (score >= 80) return "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400";
  if (score >= 50) return "bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400";
  return "bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-400";
}

function toDraft(article: ArticleDTO): ArticleTranslationInput[] {
  return article.translations.map((t) => ({
    locale: t.locale,
    title: t.title,
    excerpt: t.excerpt,
    content: t.content,
  }));
}

// content is stored as one paragraph per array entry — a textarea with
// blank-line-separated paragraphs is the simplest editable representation
// that maps back onto that shape without introducing HTML into a field the
// public blog page renders as plain text (see toPublicBlogPosts).
function contentToText(content: string[]): string {
  return content.join("\n\n");
}

function textToContent(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export function ArticleEditForm({ article }: { article: ArticleDTO }) {
  const router = useRouter();
  const [activeLocale, setActiveLocale] = useState<Locale>("id");
  const [translations, setTranslations] = useState<ArticleTranslationInput[]>(toDraft(article));
  const [seo, setSeo] = useState({ score: article.seoScore, feedback: article.seoFeedback });
  const [saving, startSaving] = useTransition();
  const [error, setError] = useState<string>();
  const [improving, startImproving] = useTransition();
  const [improveError, setImproveError] = useState<string>();

  const translation = translations.find((t) => t.locale === activeLocale) ?? {
    locale: activeLocale,
    title: "",
    excerpt: "",
    content: [],
  };

  function patchTranslation(patch: Partial<ArticleTranslationInput>) {
    setTranslations((prev) => {
      const exists = prev.some((t) => t.locale === activeLocale);
      return exists
        ? prev.map((t) => (t.locale === activeLocale ? { ...t, ...patch } : t))
        : [...prev, { locale: activeLocale, title: "", excerpt: "", content: [], ...patch }];
    });
  }

  function handleSave() {
    setError(undefined);
    startSaving(async () => {
      const result = await updateArticle(article.id, translations);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      router.push("/panel/blog");
    });
  }

  function handleImproveSeo() {
    setImproveError(undefined);
    startImproving(async () => {
      const result = await improveArticleSeo(article.id);
      if (!result.ok) {
        setImproveError(result.error);
        return;
      }
      setTranslations(toDraft(result.data));
      setSeo({ score: result.data.seoScore, feedback: result.data.seoFeedback });
    });
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6">
      <div>
        <Link
          href="/panel/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/50 hover:text-ink"
        >
          <LuArrowLeft className="size-4" />
          Kembali ke Blog
        </Link>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element -- backend host isn't known ahead of time for next/image. */}
          <img
            src={toArticleImageUrl(article.imageUrl)}
            alt=""
            className="size-12 shrink-0 rounded-lg border border-line object-cover"
          />
          <div>
            <p className="font-display text-xl font-semibold tracking-tight text-ink">Revisi Artikel</p>
            <p className="mt-0.5 text-sm text-ink/55">{article.topic}</p>
          </div>
        </div>
        <LocaleTabs active={activeLocale} onChange={setActiveLocale} />
      </div>

      {seo.score !== null && (
        <div className="rounded-2xl border border-line bg-paper p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${seoScoreBadgeClass(seo.score)}`}
              >
                {seo.score}/100
              </span>
              <p className="font-display text-sm font-semibold text-ink">Feedback SEO dari AI</p>
            </div>
            <button
              type="button"
              onClick={handleImproveSeo}
              disabled={improving || saving}
              className="flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-xs font-medium text-ink/70 transition-colors hover:border-ink/40 hover:text-ink disabled:opacity-60"
            >
              {improving ? (
                <LuLoaderCircle className="size-3.5 animate-spin" />
              ) : (
                <LuSparkles className="size-3.5" />
              )}
              Perbaiki Otomatis dengan AI
            </button>
          </div>
          <p className="mt-2.5 text-sm leading-relaxed text-ink/70">{seo.feedback ?? "Tidak ada feedback."}</p>
          <p className="mt-2.5 text-xs text-ink/40">
            Skor akan dihitung ulang oleh AI setiap kali perubahan disimpan.
          </p>
          {improveError && <p className="mt-2.5 text-sm text-red-600">{improveError}</p>}
        </div>
      )}

      <div className="rounded-2xl border border-line bg-paper p-6">
        <div className="flex flex-col gap-4">
          <Field
            label={`Judul (${activeLocale.toUpperCase()})`}
            value={translation.title}
            onChange={(v) => patchTranslation({ title: v })}
          />
          <TextAreaField
            label={`Excerpt (${activeLocale.toUpperCase()})`}
            value={translation.excerpt}
            onChange={(v) => patchTranslation({ excerpt: v })}
            rows={2}
          />
          <TextAreaField
            label={`Isi Artikel (${activeLocale.toUpperCase()}) — pisahkan paragraf dengan baris kosong`}
            value={contentToText(translation.content)}
            onChange={(v) => patchTranslation({ content: textToContent(v) })}
            rows={16}
          />
        </div>

        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

        <div className="mt-6 flex items-center justify-end gap-3 border-t border-line pt-5">
          <button
            type="button"
            onClick={handleSave}
            disabled={saving || improving}
            className="flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink dark:hover:text-ink disabled:opacity-60"
          >
            {saving ? <LuLoaderCircle className="size-4 animate-spin" /> : <LuSave className="size-4" />}
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
}
