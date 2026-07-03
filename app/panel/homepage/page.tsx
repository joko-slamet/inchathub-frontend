"use client";

import { useState } from "react";
import { LuTrash2, LuPlus } from "react-icons/lu";
import { getSiteContent, type Locale, type SiteContent } from "@/content/site-content";
import { Field, TextAreaField } from "@/components/admin/field";
import { LocaleTabs } from "@/components/admin/locale-tabs";
import { SaveBar } from "@/components/admin/save-bar";
import { CollapsibleCard } from "@/components/admin/collapsible-card";

interface HomeContent {
  hero: SiteContent["hero"];
  problem: SiteContent["problem"];
  omnichannel: SiteContent["omnichannel"];
  aiCrm: SiteContent["aiCrm"];
  whyChatHub: SiteContent["whyChatHub"];
  industries: SiteContent["industries"];
  closingCta: SiteContent["closingCta"];
  faq: SiteContent["faq"];
  footer: SiteContent["footer"];
}

function updateAt<T>(list: T[], index: number, patch: Partial<T>): T[] {
  return list.map((item, i) => (i === index ? { ...item, ...patch } : item));
}

function removeAt<T>(list: T[], index: number): T[] {
  return list.filter((_, i) => i !== index);
}

function initialContent(): Record<Locale, HomeContent> {
  const pick = (locale: Locale): HomeContent => {
    const c = getSiteContent(locale);
    return {
      hero: c.hero,
      problem: c.problem,
      omnichannel: c.omnichannel,
      aiCrm: c.aiCrm,
      whyChatHub: c.whyChatHub,
      industries: c.industries,
      closingCta: c.closingCta,
      faq: c.faq,
      footer: c.footer,
    };
  };
  return { id: structuredClone(pick("id")), en: structuredClone(pick("en")) };
}

export default function AdminHomepagePage() {
  const [content, setContent] = useState<Record<Locale, HomeContent>>(initialContent);
  const [activeLocale, setActiveLocale] = useState<Locale>("id");
  const [saved, setSaved] = useState(false);

  const page = content[activeLocale];
  const { hero, problem, omnichannel, aiCrm, whyChatHub, industries, closingCta, faq, footer } = page;

  function updatePage(updater: (page: HomeContent) => HomeContent) {
    setContent((prev) => ({ ...prev, [activeLocale]: updater(prev[activeLocale]) }));
    setSaved(false);
  }

  function updateHero<K extends keyof SiteContent["hero"]>(key: K, value: SiteContent["hero"][K]) {
    updatePage((p) => ({ ...p, hero: { ...p.hero, [key]: value } }));
  }

  function updateProblem<K extends keyof SiteContent["problem"]>(key: K, value: SiteContent["problem"][K]) {
    updatePage((p) => ({ ...p, problem: { ...p.problem, [key]: value } }));
  }

  function updateOmnichannel<K extends keyof SiteContent["omnichannel"]>(
    key: K,
    value: SiteContent["omnichannel"][K],
  ) {
    updatePage((p) => ({ ...p, omnichannel: { ...p.omnichannel, [key]: value } }));
  }

  function updateInboxMockup<K extends keyof SiteContent["omnichannel"]["inboxMockup"]>(
    key: K,
    value: SiteContent["omnichannel"]["inboxMockup"][K],
  ) {
    updatePage((p) => ({
      ...p,
      omnichannel: { ...p.omnichannel, inboxMockup: { ...p.omnichannel.inboxMockup, [key]: value } },
    }));
  }

  function updateAiCrm<K extends keyof SiteContent["aiCrm"]>(key: K, value: SiteContent["aiCrm"][K]) {
    updatePage((p) => ({ ...p, aiCrm: { ...p.aiCrm, [key]: value } }));
  }

  function updateChatbotPoint(index: number, patch: Partial<SiteContent["aiCrm"]["chatbot"]["points"][number]>) {
    updatePage((p) => ({
      ...p,
      aiCrm: { ...p.aiCrm, chatbot: { ...p.aiCrm.chatbot, points: updateAt(p.aiCrm.chatbot.points, index, patch) } },
    }));
  }

  function addChatbotPoint() {
    updatePage((p) => ({
      ...p,
      aiCrm: { ...p.aiCrm, chatbot: { ...p.aiCrm.chatbot, points: [...p.aiCrm.chatbot.points, { title: "", description: "" }] } },
    }));
  }

  function removeChatbotPoint(index: number) {
    updatePage((p) => ({
      ...p,
      aiCrm: { ...p.aiCrm, chatbot: { ...p.aiCrm.chatbot, points: removeAt(p.aiCrm.chatbot.points, index) } },
    }));
  }

  function updateCrmPoint(index: number, patch: Partial<SiteContent["aiCrm"]["crm"]["points"][number]>) {
    updatePage((p) => ({
      ...p,
      aiCrm: { ...p.aiCrm, crm: { ...p.aiCrm.crm, points: updateAt(p.aiCrm.crm.points, index, patch) } },
    }));
  }

  function addCrmPoint() {
    updatePage((p) => ({
      ...p,
      aiCrm: { ...p.aiCrm, crm: { ...p.aiCrm.crm, points: [...p.aiCrm.crm.points, { title: "", description: "" }] } },
    }));
  }

  function removeCrmPoint(index: number) {
    updatePage((p) => ({
      ...p,
      aiCrm: { ...p.aiCrm, crm: { ...p.aiCrm.crm, points: removeAt(p.aiCrm.crm.points, index) } },
    }));
  }

  function updateWhyChatHub<K extends keyof SiteContent["whyChatHub"]>(key: K, value: SiteContent["whyChatHub"][K]) {
    updatePage((p) => ({ ...p, whyChatHub: { ...p.whyChatHub, [key]: value } }));
  }

  function updateWhyPoint(index: number, patch: Partial<SiteContent["whyChatHub"]["points"][number]>) {
    updatePage((p) => ({ ...p, whyChatHub: { ...p.whyChatHub, points: updateAt(p.whyChatHub.points, index, patch) } }));
  }

  function addWhyPoint() {
    updatePage((p) => ({ ...p, whyChatHub: { ...p.whyChatHub, points: [...p.whyChatHub.points, { title: "", description: "" }] } }));
  }

  function removeWhyPoint(index: number) {
    updatePage((p) => ({ ...p, whyChatHub: { ...p.whyChatHub, points: removeAt(p.whyChatHub.points, index) } }));
  }

  function updateIndustries<K extends keyof SiteContent["industries"]>(key: K, value: SiteContent["industries"][K]) {
    updatePage((p) => ({ ...p, industries: { ...p.industries, [key]: value } }));
  }

  function updateStat(index: number, patch: Partial<SiteContent["industries"]["stats"][number]>) {
    updatePage((p) => ({ ...p, industries: { ...p.industries, stats: updateAt(p.industries.stats, index, patch) } }));
  }

  function addStat() {
    updatePage((p) => ({ ...p, industries: { ...p.industries, stats: [...p.industries.stats, { value: "", label: "" }] } }));
  }

  function removeStat(index: number) {
    updatePage((p) => ({ ...p, industries: { ...p.industries, stats: removeAt(p.industries.stats, index) } }));
  }

  function updateIndustryName(index: number, value: string) {
    updatePage((p) => ({ ...p, industries: { ...p.industries, list: updateAt(p.industries.list, index, { name: value }) } }));
  }

  function addIndustry() {
    updatePage((p) => ({ ...p, industries: { ...p.industries, list: [...p.industries.list, { name: "" }] } }));
  }

  function removeIndustry(index: number) {
    updatePage((p) => ({ ...p, industries: { ...p.industries, list: removeAt(p.industries.list, index) } }));
  }

  function updateClosingCta<K extends keyof SiteContent["closingCta"]>(key: K, value: SiteContent["closingCta"][K]) {
    updatePage((p) => ({ ...p, closingCta: { ...p.closingCta, [key]: value } }));
  }

  function updateBadge(index: number, value: string) {
    updatePage((p) => ({ ...p, closingCta: { ...p.closingCta, badges: p.closingCta.badges.map((b, i) => (i === index ? value : b)) } }));
  }

  function addBadge() {
    updatePage((p) => ({ ...p, closingCta: { ...p.closingCta, badges: [...p.closingCta.badges, ""] } }));
  }

  function removeBadge(index: number) {
    updatePage((p) => ({ ...p, closingCta: { ...p.closingCta, badges: p.closingCta.badges.filter((_, i) => i !== index) } }));
  }

  function updateFaq<K extends keyof SiteContent["faq"]>(key: K, value: SiteContent["faq"][K]) {
    updatePage((p) => ({ ...p, faq: { ...p.faq, [key]: value } }));
  }

  function updateFaqItem(index: number, patch: Partial<SiteContent["faq"]["items"][number]>) {
    updatePage((p) => ({ ...p, faq: { ...p.faq, items: updateAt(p.faq.items, index, patch) } }));
  }

  function addFaqItem() {
    updatePage((p) => ({ ...p, faq: { ...p.faq, items: [...p.faq.items, { question: "", answer: "" }] } }));
  }

  function removeFaqItem(index: number) {
    updatePage((p) => ({ ...p, faq: { ...p.faq, items: removeAt(p.faq.items, index) } }));
  }

  function updateFooter<K extends keyof SiteContent["footer"]>(key: K, value: SiteContent["footer"][K]) {
    updatePage((p) => ({ ...p, footer: { ...p.footer, [key]: value } }));
  }

  function updateAddressLine(index: number, value: string) {
    updateFooter(
      "address",
      footer.address.map((line, i) => (i === index ? value : line)),
    );
  }

  function addAddressLine() {
    updateFooter("address", [...footer.address, ""]);
  }

  function removeAddressLine(index: number) {
    updateFooter(
      "address",
      footer.address.filter((_, i) => i !== index),
    );
  }

  function updateEmail(index: number, patch: Partial<SiteContent["footer"]["emails"][number]>) {
    updateFooter("emails", updateAt(footer.emails, index, patch));
  }

  function addEmail() {
    updateFooter("emails", [...footer.emails, { label: "", value: "" }]);
  }

  function removeEmail(index: number) {
    updateFooter("emails", removeAt(footer.emails, index));
  }

  function updateSocial(index: number, patch: Partial<SiteContent["footer"]["social"][number]>) {
    updateFooter("social", updateAt(footer.social, index, patch));
  }

  function addSocial() {
    updateFooter("social", [...footer.social, { label: "", href: "" }]);
  }

  function removeSocial(index: number) {
    updateFooter("social", removeAt(footer.social, index));
  }

  function handleSave() {
    // No backend yet — logs the edited content for both locales as a
    // placeholder for wiring a real content API later.
    console.log("Homepage content saved (demo):", content);
    setSaved(true);
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight text-ink">Site Setting</p>
          <p className="mt-1 text-sm text-ink/60">
            Ubah copywriting section-section beranda, FAQ, dan pengaturan footer (di luar Harga dan Blog).
          </p>
        </div>

        <LocaleTabs active={activeLocale} onChange={setActiveLocale} />
      </div>

      <div className="flex flex-col gap-5">
        <CollapsibleCard title="Hero" defaultOpen>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Eyebrow" value={hero.eyebrow} onChange={(v) => updateHero("eyebrow", v)} />
            <Field label="Label Kanal" value={hero.channelsLabel} onChange={(v) => updateHero("channelsLabel", v)} />
            <Field label="Headline (utama)" value={hero.headlineMain} onChange={(v) => updateHero("headlineMain", v)} />
            <Field label="Headline (aksen merah)" value={hero.headlineAccent} onChange={(v) => updateHero("headlineAccent", v)} />
            <Field label="Subheadline (aksen merah)" value={hero.subheadlineAccent} onChange={(v) => updateHero("subheadlineAccent", v)} />
            <Field label="Subheadline (utama)" value={hero.subheadlineMain} onChange={(v) => updateHero("subheadlineMain", v)} />
            <Field label="Tombol CTA Utama" value={hero.ctaPrimary} onChange={(v) => updateHero("ctaPrimary", v)} />
            <Field label="Tombol CTA Kedua" value={hero.ctaSecondary} onChange={(v) => updateHero("ctaSecondary", v)} />
          </div>
        </CollapsibleCard>

        <CollapsibleCard title="Problem">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Judul (bagian utama)" value={problem.titleMain} onChange={(v) => updateProblem("titleMain", v)} />
            <Field label="Judul (bagian aksen merah)" value={problem.titleAccent} onChange={(v) => updateProblem("titleAccent", v)} />
          </div>
        </CollapsibleCard>

        <CollapsibleCard title="Omnichannel">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Eyebrow" value={omnichannel.eyebrow} onChange={(v) => updateOmnichannel("eyebrow", v)} />
            <Field label="Judul (bagian utama)" value={omnichannel.titleMain} onChange={(v) => updateOmnichannel("titleMain", v)} />
            <Field label="Judul (bagian aksen merah)" value={omnichannel.titleAccent} onChange={(v) => updateOmnichannel("titleAccent", v)} />
          </div>
          <div className="mt-4">
            <TextAreaField label="Deskripsi" value={omnichannel.description} onChange={(v) => updateOmnichannel("description", v)} />
          </div>

          <p className="mt-6 text-sm font-medium text-ink/70">Fitur</p>
          <div className="mt-3 flex flex-col gap-2">
            {omnichannel.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={feature.title}
                  onChange={(e) =>
                    updateOmnichannel("features", updateAt(omnichannel.features, index, { title: e.target.value }))
                  }
                  className="min-w-0 flex-1 rounded-lg border border-line px-3 py-2 text-sm text-ink focus:border-ink/40 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => updateOmnichannel("features", removeAt(omnichannel.features, index))}
                  aria-label="Hapus fitur"
                  className="shrink-0 rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-signal"
                >
                  <LuTrash2 className="size-4" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => updateOmnichannel("features", [...omnichannel.features, { title: "" }])}
              className="mt-1 flex items-center gap-1.5 self-start text-sm font-medium text-signal hover:underline"
            >
              <LuPlus className="size-4" />
              Tambah Fitur
            </button>
          </div>

          <p className="mt-6 text-sm font-medium text-ink/70">Dampak (Impact)</p>
          <div className="mt-3 flex flex-col gap-2">
            {omnichannel.impact.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={item.label}
                  onChange={(e) => updateOmnichannel("impact", updateAt(omnichannel.impact, index, { label: e.target.value }))}
                  className="min-w-0 flex-1 rounded-lg border border-line px-3 py-2 text-sm text-ink focus:border-ink/40 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => updateOmnichannel("impact", removeAt(omnichannel.impact, index))}
                  aria-label="Hapus dampak"
                  className="shrink-0 rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-signal"
                >
                  <LuTrash2 className="size-4" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => updateOmnichannel("impact", [...omnichannel.impact, { label: "" }])}
              className="mt-1 flex items-center gap-1.5 self-start text-sm font-medium text-signal hover:underline"
            >
              <LuPlus className="size-4" />
              Tambah Dampak
            </button>
          </div>

          <p className="mt-6 text-sm font-medium text-ink/70">Mockup Inbox</p>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <Field label="Judul Header" value={omnichannel.inboxMockup.headerTitle} onChange={(v) => updateInboxMockup("headerTitle", v)} />
            <Field label="Akhiran Belum Dibaca" value={omnichannel.inboxMockup.unreadSuffix} onChange={(v) => updateInboxMockup("unreadSuffix", v)} />
          </div>
        </CollapsibleCard>

        <CollapsibleCard title="AI Chatbot & CRM">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Eyebrow" value={aiCrm.eyebrow} onChange={(v) => updateAiCrm("eyebrow", v)} />
            <div />
            <Field label="Judul (bagian utama)" value={aiCrm.titleMain} onChange={(v) => updateAiCrm("titleMain", v)} />
            <Field label="Judul (bagian aksen merah)" value={aiCrm.titleAccent} onChange={(v) => updateAiCrm("titleAccent", v)} />
          </div>

          <p className="mt-6 text-sm font-medium text-ink/70">AI Chatbot</p>
          <div className="mt-3">
            <Field label="Judul" value={aiCrm.chatbot.title} onChange={(v) => updateAiCrm("chatbot", { ...aiCrm.chatbot, title: v })} />
          </div>
          <div className="mt-3 flex flex-col gap-3">
            {aiCrm.chatbot.points.map((point, index) => (
              <div key={index} className="flex items-start gap-2 rounded-xl border border-line p-3">
                <div className="flex-1 flex-col gap-2">
                  <Field label="Judul Poin" value={point.title} onChange={(v) => updateChatbotPoint(index, { title: v })} />
                  <div className="mt-2">
                    <TextAreaField label="Deskripsi" rows={2} value={point.description} onChange={(v) => updateChatbotPoint(index, { description: v })} />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeChatbotPoint(index)}
                  aria-label="Hapus poin"
                  className="mt-6 shrink-0 rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-signal"
                >
                  <LuTrash2 className="size-4" />
                </button>
              </div>
            ))}
            <button type="button" onClick={addChatbotPoint} className="flex items-center gap-1.5 self-start text-sm font-medium text-signal hover:underline">
              <LuPlus className="size-4" />
              Tambah Poin
            </button>
          </div>

          <p className="mt-6 text-sm font-medium text-ink/70">Smart CRM</p>
          <div className="mt-3">
            <Field label="Judul" value={aiCrm.crm.title} onChange={(v) => updateAiCrm("crm", { ...aiCrm.crm, title: v })} />
          </div>
          <div className="mt-3 flex flex-col gap-3">
            {aiCrm.crm.points.map((point, index) => (
              <div key={index} className="flex items-start gap-2 rounded-xl border border-line p-3">
                <div className="flex-1 flex-col gap-2">
                  <Field label="Judul Poin" value={point.title} onChange={(v) => updateCrmPoint(index, { title: v })} />
                  <div className="mt-2">
                    <TextAreaField label="Deskripsi" rows={2} value={point.description} onChange={(v) => updateCrmPoint(index, { description: v })} />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeCrmPoint(index)}
                  aria-label="Hapus poin"
                  className="mt-6 shrink-0 rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-signal"
                >
                  <LuTrash2 className="size-4" />
                </button>
              </div>
            ))}
            <button type="button" onClick={addCrmPoint} className="flex items-center gap-1.5 self-start text-sm font-medium text-signal hover:underline">
              <LuPlus className="size-4" />
              Tambah Poin
            </button>
          </div>
        </CollapsibleCard>

        <CollapsibleCard title="Kenapa ChatHub">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Eyebrow" value={whyChatHub.eyebrow} onChange={(v) => updateWhyChatHub("eyebrow", v)} />
            <div />
            <Field label="Judul (bagian utama)" value={whyChatHub.titleMain} onChange={(v) => updateWhyChatHub("titleMain", v)} />
            <Field label="Judul (bagian aksen merah)" value={whyChatHub.titleAccent} onChange={(v) => updateWhyChatHub("titleAccent", v)} />
          </div>
          <div className="mt-6 flex flex-col gap-3">
            {whyChatHub.points.map((point, index) => (
              <div key={index} className="flex items-start gap-2 rounded-xl border border-line p-3">
                <div className="flex-1 flex-col gap-2">
                  <Field label="Judul Poin" value={point.title} onChange={(v) => updateWhyPoint(index, { title: v })} />
                  <div className="mt-2">
                    <TextAreaField label="Deskripsi" rows={2} value={point.description} onChange={(v) => updateWhyPoint(index, { description: v })} />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeWhyPoint(index)}
                  aria-label="Hapus poin"
                  className="mt-6 shrink-0 rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-signal"
                >
                  <LuTrash2 className="size-4" />
                </button>
              </div>
            ))}
            <button type="button" onClick={addWhyPoint} className="flex items-center gap-1.5 self-start text-sm font-medium text-signal hover:underline">
              <LuPlus className="size-4" />
              Tambah Poin
            </button>
          </div>
        </CollapsibleCard>

        <CollapsibleCard title="Industri">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Eyebrow" value={industries.eyebrow} onChange={(v) => updateIndustries("eyebrow", v)} />
            <div />
            <Field label="Judul (bagian utama)" value={industries.titleMain} onChange={(v) => updateIndustries("titleMain", v)} />
            <Field label="Judul (bagian aksen merah)" value={industries.titleAccent} onChange={(v) => updateIndustries("titleAccent", v)} />
          </div>
          <div className="mt-4">
            <TextAreaField label="Deskripsi" value={industries.description} onChange={(v) => updateIndustries("description", v)} />
          </div>

          <p className="mt-6 text-sm font-medium text-ink/70">Statistik</p>
          <div className="mt-3 flex flex-col gap-2">
            {industries.stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={stat.value}
                  onChange={(e) => updateStat(index, { value: e.target.value })}
                  placeholder="Nilai"
                  className="w-24 shrink-0 rounded-lg border border-line px-3 py-2 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
                />
                <input
                  type="text"
                  value={stat.label}
                  onChange={(e) => updateStat(index, { label: e.target.value })}
                  placeholder="Label"
                  className="min-w-0 flex-1 rounded-lg border border-line px-3 py-2 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeStat(index)}
                  aria-label="Hapus statistik"
                  className="shrink-0 rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-signal"
                >
                  <LuTrash2 className="size-4" />
                </button>
              </div>
            ))}
            <button type="button" onClick={addStat} className="mt-1 flex items-center gap-1.5 self-start text-sm font-medium text-signal hover:underline">
              <LuPlus className="size-4" />
              Tambah Statistik
            </button>
          </div>

          <p className="mt-6 text-sm font-medium text-ink/70">Daftar Industri</p>
          <div className="mt-3 flex flex-col gap-2">
            {industries.list.map((industry, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={industry.name}
                  onChange={(e) => updateIndustryName(index, e.target.value)}
                  className="min-w-0 flex-1 rounded-lg border border-line px-3 py-2 text-sm text-ink focus:border-ink/40 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeIndustry(index)}
                  aria-label="Hapus industri"
                  className="shrink-0 rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-signal"
                >
                  <LuTrash2 className="size-4" />
                </button>
              </div>
            ))}
            <button type="button" onClick={addIndustry} className="mt-1 flex items-center gap-1.5 self-start text-sm font-medium text-signal hover:underline">
              <LuPlus className="size-4" />
              Tambah Industri
            </button>
          </div>
        </CollapsibleCard>

        <CollapsibleCard title="Closing CTA">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Judul" value={closingCta.title} onChange={(v) => updateClosingCta("title", v)} />
            <Field label="Label Tombol CTA" value={closingCta.cta} onChange={(v) => updateClosingCta("cta", v)} />
          </div>
          <div className="mt-4">
            <TextAreaField label="Subheadline" value={closingCta.subheadline} onChange={(v) => updateClosingCta("subheadline", v)} />
          </div>

          <p className="mt-6 text-sm font-medium text-ink/70">Badge</p>
          <div className="mt-3 flex flex-col gap-2">
            {closingCta.badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={badge}
                  onChange={(e) => updateBadge(index, e.target.value)}
                  className="min-w-0 flex-1 rounded-lg border border-line px-3 py-2 text-sm text-ink focus:border-ink/40 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeBadge(index)}
                  aria-label="Hapus badge"
                  className="shrink-0 rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-signal"
                >
                  <LuTrash2 className="size-4" />
                </button>
              </div>
            ))}
            <button type="button" onClick={addBadge} className="mt-1 flex items-center gap-1.5 self-start text-sm font-medium text-signal hover:underline">
              <LuPlus className="size-4" />
              Tambah Badge
            </button>
          </div>
        </CollapsibleCard>

        <CollapsibleCard title="FAQ">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Eyebrow" value={faq.eyebrow} onChange={(v) => updateFaq("eyebrow", v)} />
            <div />
            <Field label="Judul (bagian utama)" value={faq.titleMain} onChange={(v) => updateFaq("titleMain", v)} />
            <Field label="Judul (bagian aksen merah)" value={faq.titleAccent} onChange={(v) => updateFaq("titleAccent", v)} />
          </div>

          <p className="mt-6 text-sm font-medium text-ink/70">Daftar Pertanyaan ({faq.items.length})</p>
          <div className="mt-3 flex flex-col gap-3">
            {faq.items.map((item, index) => (
              <div key={index} className="flex items-start gap-2 rounded-xl border border-line p-3">
                <div className="flex-1 flex-col gap-2">
                  <Field label="Pertanyaan" value={item.question} onChange={(v) => updateFaqItem(index, { question: v })} />
                  <div className="mt-2">
                    <TextAreaField label="Jawaban" rows={2} value={item.answer} onChange={(v) => updateFaqItem(index, { answer: v })} />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFaqItem(index)}
                  aria-label="Hapus pertanyaan"
                  className="mt-6 shrink-0 rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-signal"
                >
                  <LuTrash2 className="size-4" />
                </button>
              </div>
            ))}
            <button type="button" onClick={addFaqItem} className="flex items-center gap-1.5 self-start text-sm font-medium text-signal hover:underline">
              <LuPlus className="size-4" />
              Tambah Pertanyaan
            </button>
          </div>
        </CollapsibleCard>

        <CollapsibleCard title="Footer">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Tagline" value={footer.tagline} onChange={(v) => updateFooter("tagline", v)} />
            <Field label="Tagline (baris kedua)" value={footer.taglineSecondary} onChange={(v) => updateFooter("taglineSecondary", v)} />
            <Field label="Nama Perusahaan" value={footer.companyName} onChange={(v) => updateFooter("companyName", v)} />
            <Field label="Catatan Perusahaan" value={footer.companyNote} onChange={(v) => updateFooter("companyNote", v)} />
            <Field label="Label Website" value={footer.websiteLabel} onChange={(v) => updateFooter("websiteLabel", v)} />
            <Field label="URL Website" value={footer.websiteHref} onChange={(v) => updateFooter("websiteHref", v)} />
            <Field label="Label Kontak" value={footer.contactLabel} onChange={(v) => updateFooter("contactLabel", v)} />
            <Field label="Label Menu" value={footer.navLabel} onChange={(v) => updateFooter("navLabel", v)} />
            <Field label="Copyright" value={footer.copyright} onChange={(v) => updateFooter("copyright", v)} />
          </div>

          <p className="mt-6 text-sm font-medium text-ink/70">Alamat</p>
          <div className="mt-3 flex flex-col gap-2">
            {footer.address.map((line, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={line}
                  onChange={(e) => updateAddressLine(index, e.target.value)}
                  className="min-w-0 flex-1 rounded-lg border border-line px-3 py-2 text-sm text-ink focus:border-ink/40 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeAddressLine(index)}
                  aria-label="Hapus baris alamat"
                  className="shrink-0 rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-signal"
                >
                  <LuTrash2 className="size-4" />
                </button>
              </div>
            ))}
            <button type="button" onClick={addAddressLine} className="mt-1 flex items-center gap-1.5 self-start text-sm font-medium text-signal hover:underline">
              <LuPlus className="size-4" />
              Tambah Baris Alamat
            </button>
          </div>

          <p className="mt-6 text-sm font-medium text-ink/70">Email</p>
          <div className="mt-3 flex flex-col gap-2">
            {footer.emails.map((email, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={email.label}
                  onChange={(e) => updateEmail(index, { label: e.target.value })}
                  placeholder="Label"
                  className="w-32 shrink-0 rounded-lg border border-line px-3 py-2 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
                />
                <input
                  type="text"
                  value={email.value}
                  onChange={(e) => updateEmail(index, { value: e.target.value })}
                  placeholder="alamat@email.com"
                  className="min-w-0 flex-1 rounded-lg border border-line px-3 py-2 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeEmail(index)}
                  aria-label="Hapus email"
                  className="shrink-0 rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-signal"
                >
                  <LuTrash2 className="size-4" />
                </button>
              </div>
            ))}
            <button type="button" onClick={addEmail} className="mt-1 flex items-center gap-1.5 self-start text-sm font-medium text-signal hover:underline">
              <LuPlus className="size-4" />
              Tambah Email
            </button>
          </div>

          <p className="mt-6 text-sm font-medium text-ink/70">Sosial Media</p>
          <div className="mt-3 flex flex-col gap-2">
            {footer.social.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={item.label}
                  onChange={(e) => updateSocial(index, { label: e.target.value })}
                  placeholder="Label (mis. Instagram)"
                  className="w-40 shrink-0 rounded-lg border border-line px-3 py-2 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
                />
                <input
                  type="text"
                  value={item.href}
                  onChange={(e) => updateSocial(index, { href: e.target.value })}
                  placeholder="URL"
                  className="min-w-0 flex-1 rounded-lg border border-line px-3 py-2 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeSocial(index)}
                  aria-label="Hapus sosial media"
                  className="shrink-0 rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-signal"
                >
                  <LuTrash2 className="size-4" />
                </button>
              </div>
            ))}
            <button type="button" onClick={addSocial} className="mt-1 flex items-center gap-1.5 self-start text-sm font-medium text-signal hover:underline">
              <LuPlus className="size-4" />
              Tambah Sosial Media
            </button>
          </div>
        </CollapsibleCard>
      </div>

      <SaveBar saved={saved} onSave={handleSave} />
    </div>
  );
}
