"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import {
  LuTrash2,
  LuSparkles,
  LuCalendarClock,
  LuExternalLink,
  LuPlus,
  LuSave,
  LuLoaderCircle,
  LuCheck,
  LuWand,
  LuX,
  LuEye,
  LuChevronLeft,
  LuChevronRight,
  LuPencil,
} from "react-icons/lu";
import { TextAreaField } from "@/components/admin/field";
import { Toggle } from "@/components/admin/toggle";
import { ChipInput } from "@/components/admin/chip-input";
import { LinkListInput } from "@/components/admin/link-list-input";
import { Button } from "@/components/ui/button";
import { updateAiArticleConfig } from "@/app/actions/ai-article-config";
import { deleteArticle, generateArticleNow } from "@/app/actions/articles";
import type { AiArticleConfigDTO, ArticleDTO } from "@/lib/ai-article-types";
import { toArticleImageUrl } from "@/lib/article-image";

function formatTimeList(times: string[]): string {
  if (times.length === 0) return "belum ada jadwal";
  if (times.length === 1) return `pukul ${times[0]}`;
  if (times.length === 2) return `pukul ${times[0]} dan ${times[1]}`;
  return `pukul ${times.slice(0, -1).join(", ")}, dan ${times[times.length - 1]}`;
}

function articleTitle(article: ArticleDTO): string {
  const translation = article.translations.find((t) => t.locale === "id") ?? article.translations[0];
  return translation?.title ?? article.slug;
}

function seoScoreBadgeClass(score: number): string {
  if (score >= 80) return "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400";
  if (score >= 50) return "bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400";
  return "bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-400";
}

type Tab = "artikel" | "konfigurasi";

const tabs: { id: Tab; label: string }[] = [
  { id: "artikel", label: "Artikel" },
  { id: "konfigurasi", label: "Konfigurasi Artikel" },
];

export function BlogAiEditor({
  initialConfig,
  initialArticles,
  page,
  totalPages,
  total,
}: {
  initialConfig: AiArticleConfigDTO;
  initialArticles: ArticleDTO[];
  page: number;
  totalPages: number;
  total: number;
}) {
  const [activeTab, setActiveTab] = useState<Tab>("artikel");
  const [config, setConfig] = useState(initialConfig);
  const [articles, setArticles] = useState(initialArticles);
  const [saving, startSaving] = useTransition();
  const [saved, setSaved] = useState(false);
  const [saveError, setSaveError] = useState<string>();
  const [generating, startGenerating] = useTransition();
  const [generateError, setGenerateError] = useState<string>();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [feedbackArticle, setFeedbackArticle] = useState<ArticleDTO | null>(null);

  function updateConfig<K extends keyof AiArticleConfigDTO>(key: K, value: AiArticleConfigDTO[K]) {
    setConfig((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  }

  function addGenerateTime() {
    updateConfig("generateTimes", [...config.generateTimes, "12:00"]);
  }

  function updateGenerateTime(index: number, value: string) {
    updateConfig(
      "generateTimes",
      config.generateTimes.map((time, i) => (i === index ? value : time)),
    );
  }

  function removeGenerateTime(index: number) {
    updateConfig(
      "generateTimes",
      config.generateTimes.filter((_, i) => i !== index),
    );
  }

  function handleSave() {
    setSaveError(undefined);
    startSaving(async () => {
      const result = await updateAiArticleConfig({
        enabled: config.enabled,
        generateTimes: config.generateTimes,
        weekdayTopics: config.weekdayTopics,
        weekendTopics: config.weekendTopics,
        prompt: config.prompt,
        internalLinks: config.internalLinks,
      });
      if (!result.ok) {
        setSaveError(result.error);
        return;
      }
      setConfig(result.data);
      setSaved(true);
    });
  }

  function handleGenerateNow() {
    setGenerateError(undefined);
    startGenerating(async () => {
      const result = await generateArticleNow();
      if (!result.ok) {
        setGenerateError(result.error);
        return;
      }
      setArticles((prev) => [result.data, ...prev]);
      setActiveTab("artikel");
    });
  }

  function handleDelete(id: string) {
    if (!confirm("Hapus artikel ini? Gambar terkait juga akan ikut terhapus.")) return;
    setDeletingId(id);
    startSaving(async () => {
      const result = await deleteArticle(id);
      setDeletingId(null);
      if (result.ok) {
        setArticles((prev) => prev.filter((article) => article.id !== id));
      }
    });
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight text-ink">Kelola Blog</p>
          <p className="mt-1 text-sm text-ink/60">Atur jadwal generate artikel AI dan pantau hasilnya.</p>
        </div>
        <Button
          type="button"
          variant="outline"
          size="md"
          onClick={handleGenerateNow}
          disabled={generating}
        >
          {generating ? (
            <>
              <LuLoaderCircle className="size-4 animate-spin" />
              Membuat artikel...
            </>
          ) : (
            <>
              <LuWand className="size-4" />
              Generate Sekarang
            </>
          )}
        </Button>
      </div>

      {generateError && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-600 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-400">
          {generateError}
        </p>
      )}

      <div className="flex items-center gap-1 self-start rounded-full border border-line p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
              activeTab === tab.id ? "bg-ink text-paper" : "text-ink/50 hover:text-ink"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "konfigurasi" && (
        <div className="rounded-2xl border border-line bg-paper p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-signal-dim text-signal">
                <LuSparkles className="size-4.5" />
              </span>
              <div>
                <p className="font-display text-base font-semibold text-ink">Generate Artikel dengan AI</p>
                <p className="mt-0.5 text-xs text-ink/55">
                  Artikel dibuat otomatis oleh AI sesuai jadwal dan topik di bawah ini.
                </p>
              </div>
            </div>
            <Toggle
              checked={config.enabled}
              onChange={(v) => updateConfig("enabled", v)}
              label={config.enabled ? "Aktif" : "Nonaktif"}
            />
          </div>

          <div className="mt-6">
            <TextAreaField
              label="Prompt AI"
              value={config.prompt}
              onChange={(v) => updateConfig("prompt", v)}
              rows={15}
            />
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <ChipInput
              label="Topik Hari Kerja (Senin–Jumat)"
              values={config.weekdayTopics}
              onChange={(v) => updateConfig("weekdayTopics", v)}
              placeholder="Ketik topik lalu Enter..."
            />
            <ChipInput
              label="Topik Akhir Pekan (Sabtu–Minggu)"
              values={config.weekendTopics}
              onChange={(v) => updateConfig("weekendTopics", v)}
              placeholder="Ketik topik lalu Enter..."
            />
          </div>

          <div className="mt-4">
            <LinkListInput
              label="Link Internal untuk AI"
              hint="AI hanya akan menyisipkan link dari daftar ini ke artikel yang di-generate, kalau relevan dengan topiknya. Isi keterangan singkat biar AI tahu kapan link ini pas dipakai — link di luar daftar ini tidak akan pernah muncul di artikel."
              values={config.internalLinks}
              onChange={(v) => updateConfig("internalLinks", v)}
            />
          </div>

          <div className="mt-4 flex flex-col gap-1.5">
            <span className="text-xs font-medium text-ink/60">Waktu Generate Otomatis</span>
            <p className="text-xs text-ink/45">
              Artikel bisa terbit lebih dari sekali sehari — tambahkan sebanyak yang dibutuhkan.
            </p>
            <div className="mt-1 flex flex-col gap-2 sm:max-w-xs">
              {config.generateTimes.map((time, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => updateGenerateTime(index, e.target.value)}
                    className="w-full rounded-lg border border-line px-3.5 py-2.5 text-sm text-ink focus:border-ink/40 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => removeGenerateTime(index)}
                    disabled={config.generateTimes.length === 1}
                    aria-label="Hapus waktu"
                    className="shrink-0 rounded-lg p-2.5 text-ink/40 hover:bg-ink/5 hover:text-signal disabled:pointer-events-none disabled:opacity-30"
                  >
                    <LuTrash2 className="size-4" />
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addGenerateTime}
              className="mt-1 flex items-center gap-1.5 self-start text-sm font-medium text-signal hover:underline"
            >
              <LuPlus className="size-4" />
              Tambah Waktu
            </button>
          </div>

          <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-dashed border-line px-3.5 py-3">
            <LuCalendarClock className="mt-0.5 size-4 shrink-0 text-ink/40" />
            <p className="text-xs leading-relaxed text-ink/55">
              {config.enabled
                ? `Artikel baru akan dibuat otomatis setiap hari ${formatTimeList(config.generateTimes)} — memakai topik hari kerja untuk Senin–Jumat, dan topik akhir pekan untuk Sabtu–Minggu.`
                : "Generate otomatis sedang nonaktif. Aktifkan toggle di atas untuk mulai menjadwalkan generate artikel AI."}
            </p>
          </div>

          {saveError && (
            <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-600 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-400">
              {saveError}
            </p>
          )}

          <div className="mt-6 flex items-center justify-end gap-3 border-t border-line pt-5">
            {saved && (
              <span className="flex items-center gap-1.5 text-sm text-ok">
                <LuCheck className="size-4" />
                Tersimpan
              </span>
            )}
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink dark:hover:text-ink disabled:opacity-60"
            >
              {saving ? <LuLoaderCircle className="size-4 animate-spin" /> : <LuSave className="size-4" />}
              Simpan Perubahan
            </button>
          </div>
        </div>
      )}

      {activeTab === "artikel" && (
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-display text-base font-semibold text-ink">Artikel Ter-generate AI ({total})</p>
            <p className="mt-0.5 text-xs text-ink/55">Riwayat artikel yang berhasil dibuat otomatis oleh AI.</p>
          </div>

          {articles.length === 0 ? (
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-line py-12 text-center">
              <LuSparkles className="size-7 text-ink/25" />
              <p className="text-sm text-ink/60">Belum ada artikel yang di-generate.</p>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-2xl border border-line bg-paper">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead>
                  <tr className="border-b border-line text-xs font-semibold tracking-wide text-slate uppercase">
                    <th className="px-5 py-3.5">Artikel</th>
                    <th className="px-5 py-3.5">Topik</th>
                    <th className="px-5 py-3.5">Skor SEO</th>
                    <th className="px-5 py-3.5">Pembaca</th>
                    <th className="px-5 py-3.5" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {articles.map((article) => (
                    <tr key={article.id}>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          {/* eslint-disable-next-line @next/next/no-img-element -- backend host isn't known ahead of time for next/image. */}
                          <img
                            src={toArticleImageUrl(article.imageUrl)}
                            alt=""
                            className="size-12 shrink-0 rounded-lg border border-line object-cover"
                          />
                          <div>
                            <span className="font-medium text-ink">{articleTitle(article)}</span>
                            <div className="mt-1 flex gap-1">
                              {article.translations.map((t) => (
                                <span
                                  key={t.locale}
                                  className="rounded-full bg-slate-dim px-1.5 py-0.5 text-[0.65rem] font-semibold tracking-wide text-ink/50 uppercase"
                                >
                                  {t.locale}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center rounded-full bg-signal-dim px-2.5 py-1 text-xs font-semibold text-signal">
                          {article.topic}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        {article.seoScore === null ? (
                          <span className="text-xs text-ink/40">-</span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setFeedbackArticle(article)}
                            className={`cursor-pointer inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold transition-opacity hover:opacity-80 ${seoScoreBadgeClass(article.seoScore)}`}
                          >
                            {article.seoScore}/100
                          </button>
                        )}
                      </td>
                      <td className="px-5 py-4">
                        <span className="flex items-center gap-1.5 text-ink/60">
                          <LuEye className="size-4" />
                          {article.viewCount.toLocaleString("id-ID")}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            type="button"
                            onClick={() => window.open(`/blog/${article.slug}`, "_blank")}
                            aria-label="Lihat halaman artikel"
                            className="rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-ink"
                          >
                            <LuExternalLink className="size-4" />
                          </button>
                          <Link
                            href={`/panel/blog/${article.id}/edit`}
                            aria-label="Revisi artikel"
                            className="rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-ink"
                          >
                            <LuPencil className="size-4" />
                          </Link>
                          <button
                            type="button"
                            onClick={() => handleDelete(article.id)}
                            disabled={deletingId === article.id}
                            aria-label="Hapus artikel"
                            className="rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-signal disabled:opacity-50"
                          >
                            <LuTrash2 className="size-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4">
              <Link
                href={`/panel/blog?page=${page - 1}`}
                aria-disabled={page <= 1}
                className={`flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink/70 hover:border-ink/40 hover:text-ink ${
                  page <= 1 ? "pointer-events-none opacity-40" : ""
                }`}
              >
                <LuChevronLeft className="size-4" />
                Sebelumnya
              </Link>
              <span className="text-sm font-medium text-ink/60">
                Halaman {page} dari {totalPages}
              </span>
              <Link
                href={`/panel/blog?page=${page + 1}`}
                aria-disabled={page >= totalPages}
                className={`flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink/70 hover:border-ink/40 hover:text-ink ${
                  page >= totalPages ? "pointer-events-none opacity-40" : ""
                }`}
              >
                Selanjutnya
                <LuChevronRight className="size-4" />
              </Link>
            </div>
          )}
        </div>
      )}

      {feedbackArticle && feedbackArticle.seoScore !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4 backdrop-blur-sm"
          onClick={() => setFeedbackArticle(null)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-line bg-paper p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-base font-semibold text-ink">Feedback SEO</p>
                <p className="mt-0.5 text-xs text-ink/55">{articleTitle(feedbackArticle)}</p>
              </div>
              <button
                type="button"
                onClick={() => setFeedbackArticle(null)}
                aria-label="Tutup"
                className="shrink-0 rounded-lg p-1.5 text-ink/40 hover:bg-ink/5 hover:text-ink"
              >
                <LuX className="size-4" />
              </button>
            </div>

            <span
              className={`mt-4 inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${seoScoreBadgeClass(feedbackArticle.seoScore)}`}
            >
              {feedbackArticle.seoScore}/100
            </span>

            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              {feedbackArticle.seoFeedback ?? "Tidak ada feedback."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
