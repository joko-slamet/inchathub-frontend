"use client";

import { useState, useTransition } from "react";
import { LuTrash2, LuPlus, LuSave, LuLoaderCircle, LuCheck } from "react-icons/lu";
import { type Locale, type SiteContent } from "@/content/site-content";
import { Field, TextAreaField } from "@/components/admin/field";
import { LocaleTabs } from "@/components/admin/locale-tabs";
import { updateCompanyProfile } from "@/app/actions/company-profile";

export interface AboutPageContent {
  about: SiteContent["about"];
  visionMission: SiteContent["visionMission"];
  infoCards: SiteContent["contact"]["infoCards"];
}

type MissionItem = SiteContent["visionMission"]["missionItems"][number];
type InfoCard = SiteContent["contact"]["infoCards"][number];

function toTranslationInput(locale: Locale, page: AboutPageContent) {
  return {
    locale,
    paragraphs: page.about.paragraphs,
    visionEyebrow: page.visionMission.visionEyebrow,
    missionEyebrow: page.visionMission.missionEyebrow,
    visionMain: page.visionMission.visionMain,
    visionAccent: page.visionMission.visionAccent,
    missionItems: page.visionMission.missionItems,
    contactInfoCards: page.infoCards,
  };
}

export function AboutEditor({
  initialContent,
  initialMapSrc,
}: {
  initialContent: Record<Locale, AboutPageContent>;
  initialMapSrc: string;
}) {
  const [content, setContent] = useState<Record<Locale, AboutPageContent>>(initialContent);
  const [activeLocale, setActiveLocale] = useState<Locale>("id");
  const [mapSrc, setMapSrc] = useState(initialMapSrc);
  const [saving, startSaving] = useTransition();
  const [saveError, setSaveError] = useState<string>();
  const [saved, setSaved] = useState(false);

  const { about, visionMission, infoCards } = content[activeLocale];

  function updatePage(updater: (page: AboutPageContent) => AboutPageContent) {
    setContent((prev) => ({ ...prev, [activeLocale]: updater(prev[activeLocale]) }));
    setSaved(false);
  }

  function updateAbout<K extends keyof SiteContent["about"]>(key: K, value: SiteContent["about"][K]) {
    updatePage((page) => ({ ...page, about: { ...page.about, [key]: value } }));
  }

  function updateParagraph(index: number, value: string) {
    updateAbout(
      "paragraphs",
      about.paragraphs.map((p, i) => (i === index ? value : p)),
    );
  }

  function addParagraph() {
    updateAbout("paragraphs", [...about.paragraphs, ""]);
  }

  function removeParagraph(index: number) {
    updateAbout(
      "paragraphs",
      about.paragraphs.filter((_, i) => i !== index),
    );
  }

  function updateVisionMission<K extends keyof SiteContent["visionMission"]>(
    key: K,
    value: SiteContent["visionMission"][K],
  ) {
    updatePage((page) => ({ ...page, visionMission: { ...page.visionMission, [key]: value } }));
  }

  function updateMissionItem(index: number, patch: Partial<MissionItem>) {
    updateVisionMission(
      "missionItems",
      visionMission.missionItems.map((item, i) => (i === index ? { ...item, ...patch } : item)),
    );
  }

  function addMissionItem() {
    updateVisionMission("missionItems", [...visionMission.missionItems, { textMain: "", textAccent: "" }]);
  }

  function removeMissionItem(index: number) {
    updateVisionMission(
      "missionItems",
      visionMission.missionItems.filter((_, i) => i !== index),
    );
  }

  function updateCard(index: number, patch: Partial<InfoCard>) {
    updatePage((page) => ({
      ...page,
      infoCards: page.infoCards.map((card, i) => (i === index ? { ...card, ...patch } : card)),
    }));
  }

  function addCard() {
    updatePage((page) => ({ ...page, infoCards: [...page.infoCards, { label: "", value: "", href: "" }] }));
  }

  function removeCard(index: number) {
    updatePage((page) => ({ ...page, infoCards: page.infoCards.filter((_, i) => i !== index) }));
  }

  function handleSave() {
    setSaveError(undefined);
    startSaving(async () => {
      const result = await updateCompanyProfile({
        mapSrc,
        translations: (Object.keys(content) as Locale[]).map((locale) =>
          toTranslationInput(locale, content[locale]),
        ),
      });
      if (!result.ok) {
        setSaveError(result.error);
        return;
      }
      setSaved(true);
    });
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight text-ink">Profil Perusahaan</p>
          <p className="mt-1 text-sm text-ink/60">
            Ubah cerita perusahaan, visi misi, dan info kontak yang tampil di halaman /about-us dan /contact-us.
          </p>
        </div>

        <LocaleTabs active={activeLocale} onChange={setActiveLocale} />
      </div>

      <div className="rounded-2xl border border-line bg-paper p-6">
        <p className="font-display text-base font-semibold text-ink">Cerita Perusahaan</p>
        <div className="mt-4 flex flex-col gap-3">
          {about.paragraphs.map((paragraph, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="flex-1">
                <TextAreaField
                  label={`Paragraf ${index + 1}`}
                  value={paragraph}
                  onChange={(v) => updateParagraph(index, v)}
                />
              </div>
              <button
                type="button"
                onClick={() => removeParagraph(index)}
                aria-label="Hapus paragraf"
                className="mt-6 shrink-0 rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-signal"
              >
                <LuTrash2 className="size-4" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addParagraph}
            className="flex items-center gap-1.5 self-start text-sm font-medium text-signal hover:underline"
          >
            <LuPlus className="size-4" />
            Tambah Paragraf
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-paper p-6">
        <p className="font-display text-base font-semibold text-ink">Visi & Misi</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Field
            label="Eyebrow Visi"
            value={visionMission.visionEyebrow}
            onChange={(v) => updateVisionMission("visionEyebrow", v)}
          />
          <Field
            label="Eyebrow Misi"
            value={visionMission.missionEyebrow}
            onChange={(v) => updateVisionMission("missionEyebrow", v)}
          />
          <Field
            label="Visi (bagian utama)"
            value={visionMission.visionMain}
            onChange={(v) => updateVisionMission("visionMain", v)}
          />
          <Field
            label="Visi (bagian aksen merah)"
            value={visionMission.visionAccent}
            onChange={(v) => updateVisionMission("visionAccent", v)}
          />
        </div>

        <p className="mt-6 text-sm font-medium text-ink/70">Poin Misi</p>
        <div className="mt-3 flex flex-col gap-2">
          {visionMission.missionItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-signal-dim font-mono text-xs font-semibold text-signal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <input
                type="text"
                value={item.textMain}
                onChange={(e) => updateMissionItem(index, { textMain: e.target.value })}
                placeholder="Teks utama"
                className="min-w-0 flex-1 rounded-lg border border-line px-3 py-2 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
              />
              <input
                type="text"
                value={item.textAccent}
                onChange={(e) => updateMissionItem(index, { textAccent: e.target.value })}
                placeholder="Teks aksen merah"
                className="min-w-0 flex-1 rounded-lg border border-line px-3 py-2 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => removeMissionItem(index)}
                aria-label="Hapus poin misi"
                className="shrink-0 rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-signal"
              >
                <LuTrash2 className="size-4" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addMissionItem}
            className="mt-1 flex items-center gap-1.5 self-start text-sm font-medium text-signal hover:underline"
          >
            <LuPlus className="size-4" />
            Tambah Poin Misi
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-paper p-6">
        <p className="font-display text-base font-semibold text-ink">Kartu Info Kontak</p>
        <div className="mt-4 flex flex-col gap-3">
          {infoCards.map((card, index) => (
            <div key={index} className="grid gap-2 rounded-xl border border-line p-4 sm:grid-cols-[1fr_1fr_1.2fr_auto]">
              <Field label="Label" value={card.label} onChange={(v) => updateCard(index, { label: v })} />
              <Field label="Nilai Tampilan" value={card.value} onChange={(v) => updateCard(index, { value: v })} />
              <Field label="Link (href)" value={card.href} onChange={(v) => updateCard(index, { href: v })} />
              <button
                type="button"
                onClick={() => removeCard(index)}
                aria-label="Hapus kartu"
                className="mt-6 flex h-fit items-center gap-1.5 self-start rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-signal sm:mt-0 sm:self-end"
              >
                <LuTrash2 className="size-4" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addCard}
            className="flex items-center gap-1.5 self-start text-sm font-medium text-signal hover:underline"
          >
            <LuPlus className="size-4" />
            Tambah Kartu
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-paper p-6">
        <p className="font-display text-base font-semibold text-ink">Peta (Google Maps)</p>
        <p className="mt-1 text-xs text-ink/50">URL ini sama untuk kedua bahasa.</p>
        <div className="mt-4">
          <Field label="URL Embed Google Maps" value={mapSrc} onChange={setMapSrc} />
        </div>
      </div>

      {saveError && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-600 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-400">
          {saveError}
        </p>
      )}

      <div className="sticky bottom-6 flex items-center gap-3 self-end rounded-full border border-line bg-paper px-2 py-2 shadow-[0_16px_40px_-20px_rgba(20,16,15,0.35)]">
        {saved && (
          <span className="flex items-center gap-1.5 pl-3 text-sm text-ok">
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
  );
}
