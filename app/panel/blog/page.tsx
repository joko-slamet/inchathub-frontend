"use client";

import { useState } from "react";
import { LuTrash2, LuSparkles, LuCalendarClock, LuExternalLink, LuPlus } from "react-icons/lu";
import { TextAreaField } from "@/components/admin/field";
import { SaveBar } from "@/components/admin/save-bar";
import { Toggle } from "@/components/admin/toggle";
import { ChipInput } from "@/components/admin/chip-input";

type AiScheduleSettings = {
  enabled: boolean;
  generateTimes: string[];
  weekdayTopics: string[];
  weekendTopics: string[];
  prompt: string;
};

function formatTimeList(times: string[]): string {
  if (times.length === 1) return `pukul ${times[0]}`;
  if (times.length === 2) return `pukul ${times[0]} dan ${times[1]}`;
  return `pukul ${times.slice(0, -1).join(", ")}, dan ${times[times.length - 1]}`;
}

type GeneratedArticle = {
  id: string;
  title: string;
  topic: string;
  generatedAt: string;
};

function initialAiSettings(): AiScheduleSettings {
  return {
    enabled: true,
    generateTimes: ["08:00"],
    weekdayTopics: [
      "Omnichannel messaging",
      "WhatsApp Business API",
      "AI chatbot",
      "CRM",
      "Layanan pelanggan",
    ],
    weekendTopics: ["Produktivitas kerja", "Tren teknologi sehari-hari", "Gaya hidup tim kantoran"],
    prompt:
      "Tulis dengan gaya bahasa yang santai tapi tetap informatif, gunakan Bahasa Indonesia, dan sertakan call-to-action untuk mencoba ChatHub di bagian akhir artikel.",
  };
}

function initialGeneratedArticles(): GeneratedArticle[] {
  return [
    {
      id: "gen-1",
      title: "5 Tanda Bisnis Anda Butuh Omnichannel Inbox Sekarang",
      topic: "Omnichannel messaging",
      generatedAt: "Senin, 29 Jun 2026 · 08:00",
    },
    {
      id: "gen-2",
      title: "Otomasi Balasan WhatsApp: Mulai dari Mana?",
      topic: "WhatsApp Business API",
      generatedAt: "Selasa, 30 Jun 2026 · 08:00",
    },
    {
      id: "gen-3",
      title: "5 Rekomendasi Podcast buat Nemenin Kerja Santai di Akhir Pekan",
      topic: "Gaya hidup tim kantoran",
      generatedAt: "Sabtu, 4 Jul 2026 · 08:00",
    },
    {
      id: "gen-4",
      title: "Cara Menjaga Work-Life Balance ala Tim Remote",
      topic: "Produktivitas kerja",
      generatedAt: "Minggu, 5 Jul 2026 · 08:00",
    },
    {
      id: "gen-5",
      title: "CRM vs Spreadsheet: Kapan Saatnya Upgrade?",
      topic: "CRM",
      generatedAt: "Senin, 6 Jul 2026 · 08:00",
    },
  ];
}

type Tab = "artikel" | "konfigurasi";

const tabs: { id: Tab; label: string }[] = [
  { id: "artikel", label: "Artikel" },
  { id: "konfigurasi", label: "Konfigurasi Artikel" },
];

export default function AdminBlogPage() {
  const [activeTab, setActiveTab] = useState<Tab>("artikel");
  const [aiSettings, setAiSettings] = useState<AiScheduleSettings>(initialAiSettings);
  const [generatedArticles, setGeneratedArticles] = useState<GeneratedArticle[]>(initialGeneratedArticles);
  const [saved, setSaved] = useState(false);

  function updateAiSettings<K extends keyof AiScheduleSettings>(key: K, value: AiScheduleSettings[K]) {
    setAiSettings((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  }

  function removeGeneratedArticle(id: string) {
    setGeneratedArticles((prev) => prev.filter((article) => article.id !== id));
  }

  function addGenerateTime() {
    updateAiSettings("generateTimes", [...aiSettings.generateTimes, "12:00"]);
  }

  function updateGenerateTime(index: number, value: string) {
    updateAiSettings(
      "generateTimes",
      aiSettings.generateTimes.map((time, i) => (i === index ? value : time)),
    );
  }

  function removeGenerateTime(index: number) {
    updateAiSettings(
      "generateTimes",
      aiSettings.generateTimes.filter((_, i) => i !== index),
    );
  }

  function handleSave() {
    // No backend yet — logs the settings as a placeholder for wiring a real
    // AI generation service later.
    console.log("AI generation schedule saved (demo):", aiSettings);
    setSaved(true);
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8">
      <div>
        <p className="font-display text-2xl font-semibold tracking-tight text-ink">Kelola Blog</p>
        <p className="mt-1 text-sm text-ink/60">Atur jadwal generate artikel AI dan pantau hasilnya.</p>
      </div>

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
            checked={aiSettings.enabled}
            onChange={(v) => updateAiSettings("enabled", v)}
            label={aiSettings.enabled ? "Aktif" : "Nonaktif"}
          />
        </div>

        <div className="mt-6">
          <TextAreaField
            label="Prompt Tambahan untuk AI"
            value={aiSettings.prompt}
            onChange={(v) => updateAiSettings("prompt", v)}
            rows={3}
          />
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <ChipInput
            label="Topik Hari Kerja (Senin–Jumat)"
            values={aiSettings.weekdayTopics}
            onChange={(v) => updateAiSettings("weekdayTopics", v)}
            placeholder="Ketik topik lalu Enter..."
          />
          <ChipInput
            label="Topik Akhir Pekan (Sabtu–Minggu)"
            values={aiSettings.weekendTopics}
            onChange={(v) => updateAiSettings("weekendTopics", v)}
            placeholder="Ketik topik lalu Enter..."
          />
        </div>

        <div className="mt-4 flex flex-col gap-1.5">
          <span className="text-xs font-medium text-ink/60">Waktu Generate Otomatis</span>
          <p className="text-xs text-ink/45">
            Artikel bisa terbit lebih dari sekali sehari — tambahkan sebanyak yang dibutuhkan.
          </p>
          <div className="mt-1 flex flex-col gap-2 sm:max-w-xs">
            {aiSettings.generateTimes.map((time, index) => (
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
                  disabled={aiSettings.generateTimes.length === 1}
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
            {aiSettings.enabled
              ? `Artikel baru akan dibuat otomatis setiap hari ${formatTimeList(aiSettings.generateTimes)} — memakai topik hari kerja untuk Senin–Jumat, dan topik akhir pekan untuk Sabtu–Minggu.`
              : "Generate otomatis sedang nonaktif. Aktifkan toggle di atas untuk mulai menjadwalkan generate artikel AI."}
          </p>
        </div>
      </div>
      )}

      {activeTab === "artikel" && (
      <div className="flex flex-col gap-4">
        <div>
          <p className="font-display text-base font-semibold text-ink">
            Artikel Ter-generate AI ({generatedArticles.length})
          </p>
          <p className="mt-0.5 text-xs text-ink/55">Riwayat artikel yang berhasil dibuat otomatis oleh AI.</p>
        </div>

        {generatedArticles.length === 0 ? (
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-line py-12 text-center">
            <LuSparkles className="size-7 text-ink/25" />
            <p className="text-sm text-ink/60">Belum ada artikel yang di-generate.</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-line bg-paper">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-line text-xs font-semibold tracking-wide text-slate uppercase">
                  <th className="px-5 py-3.5">Judul</th>
                  <th className="px-5 py-3.5">Topik</th>
                  <th className="px-5 py-3.5">Tanggal Generate</th>
                  <th className="px-5 py-3.5" />
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {generatedArticles.map((article) => (
                  <tr key={article.id}>
                    <td className="px-5 py-4 font-medium text-ink">{article.title}</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center rounded-full bg-signal-dim px-2.5 py-1 text-xs font-semibold text-signal">
                        {article.topic}
                      </span>
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-ink/70">{article.generatedAt}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          type="button"
                          aria-label="Lihat artikel"
                          className="rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-ink"
                        >
                          <LuExternalLink className="size-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeGeneratedArticle(article.id)}
                          aria-label="Hapus artikel"
                          className="rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-signal"
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
      </div>
      )}

      {activeTab === "konfigurasi" && <SaveBar saved={saved} onSave={handleSave} />}
    </div>
  );
}
