"use client";

import { Fragment, useState, useTransition } from "react";
import { LuTrash2, LuPlus, LuSave, LuLoaderCircle, LuCheck, LuChevronDown } from "react-icons/lu";
import { LocaleTabs } from "@/components/admin/locale-tabs";
import { RichTextEditor } from "@/components/admin/rich-text-editor";
import type { Locale } from "@/content/site-content";
import type { PromoDTO, PromoDiscountType, PromoTranslationInput } from "@/lib/promo-types";
import { toPromoImageUrl } from "@/lib/promo-image";
import { formatDiscountLabel } from "@/lib/promo-format";
import { createPromo, deletePromo, updatePromo } from "@/app/actions/promos";

type Translations = PromoTranslationInput[];

function emptyTranslations(): Translations {
  return [
    { locale: "id", title: "", excerpt: "", description: "" },
    { locale: "en", title: "", excerpt: "", description: "" },
  ];
}

function getTranslation<T extends { locale: string }>(translations: T[], locale: Locale): T | undefined {
  return translations.find((t) => t.locale === locale);
}

function withTranslation<T extends { locale: string }>(
  translations: T[],
  locale: Locale,
  patch: Partial<T>,
  empty: T,
): T[] {
  const exists = translations.some((t) => t.locale === locale);
  return exists
    ? translations.map((t) => (t.locale === locale ? { ...t, ...patch } : t))
    : [...translations, { ...empty, ...patch }];
}

function toDateInputValue(iso: string | null): string {
  return iso ? iso.slice(0, 10) : "";
}

type Draft = {
  code: string;
  discountType: PromoDiscountType;
  discountValue: number;
  isActive: boolean;
  hasValidity: boolean;
  startsAt: string;
  endsAt: string;
  sortOrder: number;
  translations: Translations;
};

type PromoItemState = Draft & {
  id: string;
  slug: string;
  imageUrl: string;
  imageFile: File | null;
};

function toItemState(promo: PromoDTO): PromoItemState {
  return {
    id: promo.id,
    slug: promo.slug,
    imageUrl: promo.imageUrl,
    imageFile: null,
    code: promo.code,
    discountType: promo.discountType,
    discountValue: promo.discountValue,
    isActive: promo.isActive,
    hasValidity: Boolean(promo.startsAt || promo.endsAt),
    startsAt: toDateInputValue(promo.startsAt),
    endsAt: toDateInputValue(promo.endsAt),
    sortOrder: promo.sortOrder,
    translations: promo.translations.map((t) => ({
      locale: t.locale,
      title: t.title,
      excerpt: t.excerpt,
      description: t.description,
    })),
  };
}

function buildFormData(draft: Draft, imageFile: File | null): FormData {
  const formData = new FormData();
  formData.set("code", draft.code);
  formData.set("discountType", draft.discountType);
  formData.set("discountValue", String(draft.discountValue));
  formData.set("isActive", String(draft.isActive));
  formData.set("startsAt", draft.hasValidity ? draft.startsAt : "");
  formData.set("endsAt", draft.hasValidity ? draft.endsAt : "");
  formData.set("sortOrder", String(draft.sortOrder));
  formData.set("translations", JSON.stringify(draft.translations));
  if (imageFile) formData.set("image", imageFile);
  return formData;
}

function PromoCard({
  title,
  imageUrl,
  activeLocale,
  draft,
  saving,
  error,
  saved,
  requireImage,
  onDraftChange,
  onTranslationChange,
  onImageChange,
  onSave,
  onDelete,
  saveLabel,
}: {
  title: string;
  imageUrl: string | null;
  activeLocale: Locale;
  draft: Draft;
  saving: boolean;
  error?: string;
  saved?: boolean;
  requireImage: boolean;
  onDraftChange: (patch: Partial<Draft>) => void;
  onTranslationChange: (locale: Locale, patch: Partial<PromoTranslationInput>) => void;
  onImageChange: (file: File | null) => void;
  onSave: () => void;
  onDelete?: () => void;
  saveLabel: string;
}) {
  const translation = getTranslation(draft.translations, activeLocale) ?? {
    locale: activeLocale,
    title: "",
    excerpt: "",
    description: "",
  };

  return (
    <div className="rounded-2xl border border-line bg-paper p-6">
      <p className="font-display text-sm font-semibold text-ink/50">{title}</p>

      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-ink/60">Kode Promo</span>
          <input
            type="text"
            value={draft.code}
            onChange={(e) => onDraftChange({ code: e.target.value.toUpperCase() })}
            placeholder="HEMAT20"
            className="rounded-lg border border-line px-3.5 py-2.5 font-mono text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-ink/60">Urutan Tampil</span>
          <input
            type="number"
            value={draft.sortOrder}
            onChange={(e) => onDraftChange({ sortOrder: Number(e.target.value) })}
            className="rounded-lg border border-line px-3.5 py-2.5 text-sm text-ink focus:border-ink/40 focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-ink/60">Jenis Diskon</span>
          <select
            value={draft.discountType}
            onChange={(e) => onDraftChange({ discountType: e.target.value as PromoDiscountType })}
            className="rounded-lg border border-line px-3.5 py-2.5 text-sm text-ink focus:border-ink/40 focus:outline-none"
          >
            <option value="PERCENTAGE">Persentase (%)</option>
            <option value="FIXED">Nominal (Rp)</option>
          </select>
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-ink/60">
            Nilai Diskon {draft.discountType === "PERCENTAGE" ? "(%)" : "(Rp)"}
          </span>
          <input
            type="number"
            value={draft.discountValue}
            onChange={(e) => onDraftChange({ discountValue: Number(e.target.value) })}
            className="rounded-lg border border-line px-3.5 py-2.5 text-sm text-ink focus:border-ink/40 focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-ink/60">Judul ({activeLocale.toUpperCase()})</span>
          <input
            type="text"
            value={translation.title}
            onChange={(e) => onTranslationChange(activeLocale, { title: e.target.value })}
            className="rounded-lg border border-line px-3.5 py-2.5 text-sm text-ink focus:border-ink/40 focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-ink/60">Excerpt ({activeLocale.toUpperCase()})</span>
          <input
            type="text"
            value={translation.excerpt}
            onChange={(e) => onTranslationChange(activeLocale, { excerpt: e.target.value })}
            placeholder="Ringkasan singkat untuk kartu promo"
            className="rounded-lg border border-line px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
          />
        </label>
      </div>

      <div className="mt-4">
        <RichTextEditor
          label={`Deskripsi (${activeLocale.toUpperCase()})`}
          value={translation.description}
          onChange={(html) => onTranslationChange(activeLocale, { description: html })}
        />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-ink/60">
            Gambar {requireImage ? "" : "(kosongkan untuk pertahankan yang lama)"}
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onImageChange(e.target.files?.[0] ?? null)}
            className="rounded-lg border border-line px-3.5 py-2 text-sm text-ink file:mr-3 file:rounded-full file:border-0 file:bg-signal-dim file:px-3.5 file:py-1.5 file:text-xs file:font-semibold file:text-signal focus:border-ink/40 focus:outline-none"
          />
          {imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element -- backend host isn't known ahead of time for next/image.
            <img src={imageUrl} alt="" className="mt-1 h-20 w-32 rounded-lg border border-line object-cover" />
          )}
        </label>

        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-sm font-medium text-ink/70">
            <input
              type="checkbox"
              checked={draft.isActive}
              onChange={(e) => onDraftChange({ isActive: e.target.checked })}
              className="size-4 rounded border-line accent-signal"
            />
            Aktif
          </label>

          <div className="flex items-center gap-1 self-start rounded-full border border-line p-1 text-xs">
            <button
              type="button"
              onClick={() => onDraftChange({ hasValidity: false })}
              className={`rounded-full px-3 py-1 font-semibold transition-colors ${
                !draft.hasValidity ? "bg-ink text-paper" : "text-ink/50 hover:text-ink"
              }`}
            >
              Berlaku Selamanya
            </button>
            <button
              type="button"
              onClick={() => onDraftChange({ hasValidity: true })}
              className={`rounded-full px-3 py-1 font-semibold transition-colors ${
                draft.hasValidity ? "bg-ink text-paper" : "text-ink/50 hover:text-ink"
              }`}
            >
              Ada Masa Berlaku
            </button>
          </div>

          {draft.hasValidity && (
            <div className="grid grid-cols-2 gap-2">
              <label className="flex flex-col gap-1">
                <span className="text-[0.7rem] font-medium text-ink/50">Mulai</span>
                <input
                  type="date"
                  value={draft.startsAt}
                  onChange={(e) => onDraftChange({ startsAt: e.target.value })}
                  className="rounded-lg border border-line px-2.5 py-2 text-xs text-ink focus:border-ink/40 focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-[0.7rem] font-medium text-ink/50">Berakhir</span>
                <input
                  type="date"
                  value={draft.endsAt}
                  onChange={(e) => onDraftChange({ endsAt: e.target.value })}
                  className="rounded-lg border border-line px-2.5 py-2 text-xs text-ink focus:border-ink/40 focus:outline-none"
                />
              </label>
            </div>
          )}
        </div>
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
        {onDelete ? (
          <button
            type="button"
            onClick={onDelete}
            disabled={saving}
            className="flex items-center gap-1.5 text-sm font-medium text-red-600 hover:underline disabled:opacity-50"
          >
            <LuTrash2 className="size-4" />
            Hapus Promo
          </button>
        ) : (
          <span />
        )}

        <div className="flex items-center gap-3">
          {saved && (
            <span className="flex items-center gap-1.5 text-sm text-ok">
              <LuCheck className="size-4" />
              Tersimpan
            </span>
          )}
          <button
            type="button"
            onClick={onSave}
            disabled={saving}
            className="flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink dark:hover:text-ink disabled:opacity-60"
          >
            {saving ? <LuLoaderCircle className="size-4 animate-spin" /> : <LuSave className="size-4" />}
            {saveLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

function newDraft(sortOrder: number): Draft & { imageFile: File | null } {
  return {
    code: "",
    discountType: "PERCENTAGE",
    discountValue: 0,
    isActive: true,
    hasValidity: false,
    startsAt: "",
    endsAt: "",
    sortOrder,
    translations: emptyTranslations(),
    imageFile: null,
  };
}

export function PromoEditor({ initialPromos }: { initialPromos: PromoDTO[] }) {
  const [promos, setPromos] = useState<PromoItemState[]>(initialPromos.map(toItemState));
  const [activeLocale, setActiveLocale] = useState<Locale>("id");
  const [, startTransition] = useTransition();
  const [savingId, setSavingId] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [savedId, setSavedId] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [draft, setDraft] = useState(newDraft(initialPromos.length));
  const [expandedId, setExpandedId] = useState<string | null>(null);

  function patchPromo(id: string, patch: Partial<PromoItemState>) {
    setPromos((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)));
    setSavedId(null);
  }

  function patchPromoTranslation(id: string, locale: Locale, patch: Partial<PromoTranslationInput>) {
    setPromos((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              translations: withTranslation(p.translations, locale, patch, {
                locale,
                title: "",
                excerpt: "",
                description: "",
              }),
            }
          : p,
      ),
    );
    setSavedId(null);
  }

  function handleSave(promo: PromoItemState) {
    setSavingId(promo.id);
    setErrors((e) => ({ ...e, [promo.id]: "" }));
    startTransition(async () => {
      const formData = buildFormData(promo, promo.imageFile);
      const result = await updatePromo(promo.id, formData);
      setSavingId(null);
      if (!result.ok) {
        setErrors((e) => ({ ...e, [promo.id]: result.error }));
      } else {
        setPromos((prev) => prev.map((p) => (p.id === promo.id ? toItemState(result.data) : p)));
        setSavedId(promo.id);
      }
    });
  }

  function handleDelete(promo: PromoItemState) {
    if (!confirm(`Hapus promo "${promo.code}"? Tindakan ini tidak bisa dibatalkan.`)) return;
    setSavingId(promo.id);
    startTransition(async () => {
      const result = await deletePromo(promo.id);
      setSavingId(null);
      if (!result.ok) {
        setErrors((e) => ({ ...e, [promo.id]: result.error }));
      } else {
        setPromos((prev) => prev.filter((p) => p.id !== promo.id));
        setExpandedId((id) => (id === promo.id ? null : id));
      }
    });
  }

  function toggleExpanded(id: string) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  function handleCreate() {
    if (!draft.code.trim()) {
      setErrors((e) => ({ ...e, new: "Kode promo wajib diisi" }));
      return;
    }
    if (!draft.imageFile) {
      setErrors((e) => ({ ...e, new: "Gambar wajib diunggah" }));
      return;
    }
    setSavingId("new");
    startTransition(async () => {
      const formData = buildFormData(draft, draft.imageFile);
      const result = await createPromo(formData);
      setSavingId(null);
      if (!result.ok) {
        setErrors((e) => ({ ...e, new: result.error }));
      } else {
        setPromos((prev) => [...prev, toItemState(result.data)]);
        setCreating(false);
        setErrors((e) => ({ ...e, new: "" }));
        setDraft(newDraft(promos.length + 1));
      }
    });
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight text-ink">Kelola Promo</p>
          <p className="mt-1 text-sm text-ink/60">Perubahan di sini langsung tampil di halaman /promo dan beranda.</p>
        </div>
        <LocaleTabs active={activeLocale} onChange={setActiveLocale} />
      </div>

      {promos.length === 0 ? (
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-line py-12 text-center">
          <p className="text-sm text-ink/60">Belum ada promo. Tambahkan promo pertama di bawah.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-line bg-paper">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs font-semibold tracking-wide text-slate uppercase">
                <th className="px-5 py-3.5">Promo</th>
                <th className="px-5 py-3.5">Diskon</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5">Masa Berlaku</th>
                <th className="px-5 py-3.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {promos.map((promo) => {
                const translation = getTranslation(promo.translations, activeLocale) ?? promo.translations[0];
                const expanded = expandedId === promo.id;
                return (
                  <Fragment key={promo.id}>
                    <tr
                      onClick={() => toggleExpanded(promo.id)}
                      className="cursor-pointer transition-colors hover:bg-ink/5"
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          {/* eslint-disable-next-line @next/next/no-img-element -- backend host isn't known ahead of time for next/image. */}
                          <img
                            src={toPromoImageUrl(promo.imageUrl)}
                            alt=""
                            className="size-12 shrink-0 rounded-lg border border-line object-cover"
                          />
                          <div className="min-w-0">
                            <span className="block truncate font-medium text-ink">
                              {translation?.title || "(belum ada judul)"}
                            </span>
                            <span className="font-mono text-xs text-ink/50">{promo.code}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center rounded-full bg-signal-dim px-2.5 py-1 text-xs font-semibold text-signal">
                          {formatDiscountLabel(promo)}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                            promo.isActive
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400"
                              : "bg-slate-dim text-ink/50"
                          }`}
                        >
                          {promo.isActive ? "Aktif" : "Nonaktif"}
                        </span>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap text-ink/70">
                        {promo.hasValidity ? `s/d ${promo.endsAt || "-"}` : "Selamanya"}
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(promo);
                            }}
                            disabled={savingId === promo.id}
                            aria-label="Hapus promo"
                            className="rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-signal disabled:opacity-50"
                          >
                            <LuTrash2 className="size-4" />
                          </button>
                          <LuChevronDown
                            className={`size-4 text-ink/40 transition-transform ${expanded ? "rotate-180" : ""}`}
                          />
                        </div>
                      </td>
                    </tr>
                    {expanded && (
                      <tr>
                        <td colSpan={5} className="bg-slate-dim/30 p-5">
                          <PromoCard
                            title={`Promo: ${promo.code} (/promo/${promo.slug})`}
                            imageUrl={toPromoImageUrl(promo.imageUrl)}
                            activeLocale={activeLocale}
                            draft={promo}
                            saving={savingId === promo.id}
                            error={errors[promo.id]}
                            saved={savedId === promo.id}
                            requireImage={false}
                            onDraftChange={(patch) => patchPromo(promo.id, patch)}
                            onTranslationChange={(locale, patch) => patchPromoTranslation(promo.id, locale, patch)}
                            onImageChange={(file) => patchPromo(promo.id, { imageFile: file })}
                            onSave={() => handleSave(promo)}
                            onDelete={() => handleDelete(promo)}
                            saveLabel="Simpan"
                          />
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {creating ? (
        <PromoCard
          title="Promo Baru"
          imageUrl={null}
          activeLocale={activeLocale}
          draft={draft}
          saving={savingId === "new"}
          error={errors.new}
          requireImage
          onDraftChange={(patch) => setDraft((d) => ({ ...d, ...patch }))}
          onTranslationChange={(locale, patch) =>
            setDraft((d) => ({
              ...d,
              translations: withTranslation(d.translations, locale, patch, {
                locale,
                title: "",
                excerpt: "",
                description: "",
              }),
            }))
          }
          onImageChange={(file) => setDraft((d) => ({ ...d, imageFile: file }))}
          onSave={handleCreate}
          saveLabel="Simpan Promo Baru"
        />
      ) : (
        <button
          type="button"
          onClick={() => setCreating(true)}
          className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-line py-4 text-sm font-medium text-ink/60 hover:border-signal hover:text-signal"
        >
          <LuPlus className="size-4" />
          Tambah Promo Baru
        </button>
      )}
    </div>
  );
}
