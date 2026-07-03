"use client";

import { useState, useTransition } from "react";
import { LuChevronDown, LuTrash2, LuPlus, LuSave, LuLoaderCircle, LuCheck } from "react-icons/lu";
import { LocaleTabs } from "@/components/admin/locale-tabs";
import type { Locale } from "@/content/site-content";
import type { PricingFeature, PricingPlanDTO, PricingPlanInput, PricingTranslation } from "@/lib/pricing-types";
import { createPricingPlan, deletePricingPlan, updatePricingPlan } from "@/app/actions/pricing";

type Translations = { locale: string; name: string; tagline: string; features: PricingFeature[] }[];

function emptyTranslations(): Translations {
  return [
    { locale: "id", name: "", tagline: "", features: [] },
    { locale: "en", name: "", tagline: "", features: [] },
  ];
}

function toInput(plan: PricingPlanDTO): PricingPlanInput {
  return {
    key: plan.key,
    sortOrder: plan.sortOrder,
    popular: plan.popular,
    originalPrice: plan.originalPrice,
    price: plan.price,
    translations: plan.translations.map((t) => ({
      locale: t.locale,
      name: t.name,
      tagline: t.tagline,
      features: t.features,
    })),
  };
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

function PlanEditor({
  title,
  activeLocale,
  keyValue,
  sortOrder,
  popular,
  originalPrice,
  price,
  translations,
  saving,
  error,
  saved,
  onKeyChange,
  onSortOrderChange,
  onPopularChange,
  onOriginalPriceChange,
  onPriceChange,
  onTranslationChange,
  onSave,
  onDelete,
  saveLabel,
}: {
  title: string;
  activeLocale: Locale;
  keyValue: string;
  sortOrder: number;
  popular: boolean;
  originalPrice: number;
  price: number;
  translations: Translations;
  saving: boolean;
  error?: string;
  saved?: boolean;
  onKeyChange: (v: string) => void;
  onSortOrderChange: (v: number) => void;
  onPopularChange: (v: boolean) => void;
  onOriginalPriceChange: (v: number) => void;
  onPriceChange: (v: number) => void;
  onTranslationChange: (locale: Locale, patch: Partial<Translations[number]>) => void;
  onSave: () => void;
  onDelete?: () => void;
  saveLabel: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const translation = getTranslation(translations, activeLocale) ?? {
    locale: activeLocale,
    name: "",
    tagline: "",
    features: [],
  };

  function updateFeature(index: number, patch: Partial<PricingFeature>) {
    const features = translation.features.map((f, i) => (i === index ? { ...f, ...patch } : f));
    onTranslationChange(activeLocale, { features });
  }

  function addFeature() {
    onTranslationChange(activeLocale, { features: [...translation.features, { label: "", included: true }] });
  }

  function removeFeature(index: number) {
    onTranslationChange(activeLocale, { features: translation.features.filter((_, i) => i !== index) });
  }

  return (
    <div className="rounded-2xl border border-line bg-paper p-6">
      <p className="font-display text-sm font-semibold text-ink/50">{title}</p>

      <div className="mt-3 flex flex-wrap items-start justify-between gap-4">
        <div className="grid flex-1 gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-ink/60">Key (identifier unik)</span>
            <input
              type="text"
              value={keyValue}
              onChange={(e) => onKeyChange(e.target.value)}
              placeholder="starter"
              className="rounded-lg border border-line px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-ink/60">Urutan Tampil</span>
            <input
              type="number"
              value={sortOrder}
              onChange={(e) => onSortOrderChange(Number(e.target.value))}
              className="rounded-lg border border-line px-3.5 py-2.5 text-sm text-ink focus:border-ink/40 focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-ink/60">Nama Paket ({activeLocale.toUpperCase()})</span>
            <input
              type="text"
              value={translation.name}
              onChange={(e) => onTranslationChange(activeLocale, { name: e.target.value })}
              className="rounded-lg border border-line px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-ink/60">Tagline ({activeLocale.toUpperCase()})</span>
            <input
              type="text"
              value={translation.tagline}
              onChange={(e) => onTranslationChange(activeLocale, { tagline: e.target.value })}
              className="rounded-lg border border-line px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-ink/60">Harga Coret (Rp)</span>
            <input
              type="number"
              value={originalPrice}
              onChange={(e) => onOriginalPriceChange(Number(e.target.value))}
              className="rounded-lg border border-line px-3.5 py-2.5 text-sm text-ink focus:border-ink/40 focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-ink/60">Harga Aktif (Rp)</span>
            <input
              type="number"
              value={price}
              onChange={(e) => onPriceChange(Number(e.target.value))}
              className="rounded-lg border border-line px-3.5 py-2.5 text-sm text-ink focus:border-ink/40 focus:outline-none"
            />
          </label>
        </div>

        <label className="flex shrink-0 items-center gap-2 text-sm font-medium text-ink/70">
          <input
            type="checkbox"
            checked={popular}
            onChange={(e) => onPopularChange(e.target.checked)}
            className="size-4 rounded border-line accent-signal"
          />
          Terpopuler
        </label>
      </div>

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-5 flex w-full items-center justify-between border-t border-line pt-4 text-sm font-medium text-ink/70 hover:text-ink"
      >
        Fitur ({translation.features.length}) — {activeLocale.toUpperCase()}
        <LuChevronDown className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>

      {expanded && (
        <div className="mt-3 flex flex-col gap-2">
          {translation.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={feature.included}
                onChange={(e) => updateFeature(index, { included: e.target.checked })}
                className="size-4 shrink-0 rounded border-line accent-signal"
              />
              <input
                type="text"
                value={feature.label}
                onChange={(e) => updateFeature(index, { label: e.target.value })}
                placeholder="Nama fitur"
                className="min-w-0 flex-1 rounded-lg border border-line px-3 py-2 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
              />
              <input
                type="text"
                value={feature.value ?? ""}
                onChange={(e) => updateFeature(index, { value: e.target.value || undefined })}
                placeholder="Nilai"
                className="w-20 shrink-0 rounded-lg border border-line px-3 py-2 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => removeFeature(index)}
                aria-label="Hapus fitur"
                className="shrink-0 rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-signal"
              >
                <LuTrash2 className="size-4" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addFeature}
            className="mt-1 flex items-center gap-1.5 self-start text-sm font-medium text-signal hover:underline"
          >
            <LuPlus className="size-4" />
            Tambah Fitur
          </button>
        </div>
      )}

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
            Hapus Paket
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
            className="flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink disabled:opacity-60"
          >
            {saving ? <LuLoaderCircle className="size-4 animate-spin" /> : <LuSave className="size-4" />}
            {saveLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export function PricingEditor({ initialPlans }: { initialPlans: PricingPlanDTO[] }) {
  const [plans, setPlans] = useState(initialPlans);
  const [activeLocale, setActiveLocale] = useState<Locale>("id");
  const [, startTransition] = useTransition();
  const [savingId, setSavingId] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [savedId, setSavedId] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [draft, setDraft] = useState<PricingPlanInput>({
    key: "",
    sortOrder: initialPlans.length,
    popular: false,
    originalPrice: 0,
    price: 0,
    translations: emptyTranslations(),
  });

  function patchPlan(id: string, patch: Partial<PricingPlanDTO>) {
    setPlans((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)));
    setSavedId(null);
  }

  function patchPlanTranslation(id: string, locale: Locale, patch: Partial<Translations[number]>) {
    setPlans((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              translations: withTranslation<PricingTranslation>(p.translations, locale, patch, {
                id: "",
                planId: id,
                locale,
                name: "",
                tagline: "",
                features: [],
              }),
            }
          : p,
      ),
    );
    setSavedId(null);
  }

  function handleSave(plan: PricingPlanDTO) {
    setSavingId(plan.id);
    setErrors((e) => ({ ...e, [plan.id]: "" }));
    startTransition(async () => {
      const result = await updatePricingPlan(plan.id, toInput(plan));
      setSavingId(null);
      if (!result.ok) {
        setErrors((e) => ({ ...e, [plan.id]: result.error }));
      } else {
        setPlans((prev) => prev.map((p) => (p.id === plan.id ? result.data : p)));
        setSavedId(plan.id);
      }
    });
  }

  function handleDelete(plan: PricingPlanDTO) {
    if (!confirm(`Hapus paket "${plan.key}"? Tindakan ini tidak bisa dibatalkan.`)) return;
    setSavingId(plan.id);
    startTransition(async () => {
      const result = await deletePricingPlan(plan.id);
      setSavingId(null);
      if (!result.ok) {
        setErrors((e) => ({ ...e, [plan.id]: result.error }));
      } else {
        setPlans((prev) => prev.filter((p) => p.id !== plan.id));
      }
    });
  }

  function handleCreate() {
    if (!draft.key.trim()) {
      setErrors((e) => ({ ...e, new: "Key wajib diisi" }));
      return;
    }
    setSavingId("new");
    startTransition(async () => {
      const result = await createPricingPlan(draft);
      setSavingId(null);
      if (!result.ok) {
        setErrors((e) => ({ ...e, new: result.error }));
      } else {
        setPlans((prev) => [...prev, result.data]);
        setCreating(false);
        setErrors((e) => ({ ...e, new: "" }));
        setDraft({
          key: "",
          sortOrder: plans.length + 1,
          popular: false,
          originalPrice: 0,
          price: 0,
          translations: emptyTranslations(),
        });
      }
    });
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight text-ink">Kelola Paket Harga</p>
          <p className="mt-1 text-sm text-ink/60">
            Perubahan di sini langsung tampil di halaman /pricing dan beranda.
          </p>
        </div>
        <LocaleTabs active={activeLocale} onChange={setActiveLocale} />
      </div>

      <div className="flex flex-col gap-5">
        {plans.map((plan) => (
          <PlanEditor
            key={plan.id}
            title={`Paket: ${plan.key}`}
            activeLocale={activeLocale}
            keyValue={plan.key}
            sortOrder={plan.sortOrder}
            popular={plan.popular}
            originalPrice={plan.originalPrice}
            price={plan.price}
            translations={plan.translations}
            saving={savingId === plan.id}
            error={errors[plan.id]}
            saved={savedId === plan.id}
            onKeyChange={(v) => patchPlan(plan.id, { key: v })}
            onSortOrderChange={(v) => patchPlan(plan.id, { sortOrder: v })}
            onPopularChange={(v) => patchPlan(plan.id, { popular: v })}
            onOriginalPriceChange={(v) => patchPlan(plan.id, { originalPrice: v })}
            onPriceChange={(v) => patchPlan(plan.id, { price: v })}
            onTranslationChange={(locale, patch) => patchPlanTranslation(plan.id, locale, patch)}
            onSave={() => handleSave(plan)}
            onDelete={() => handleDelete(plan)}
            saveLabel="Simpan"
          />
        ))}
      </div>

      {creating ? (
        <PlanEditor
          title="Paket Baru"
          activeLocale={activeLocale}
          keyValue={draft.key}
          sortOrder={draft.sortOrder}
          popular={draft.popular}
          originalPrice={draft.originalPrice}
          price={draft.price}
          translations={draft.translations}
          saving={savingId === "new"}
          error={errors.new}
          onKeyChange={(v) => setDraft((d) => ({ ...d, key: v }))}
          onSortOrderChange={(v) => setDraft((d) => ({ ...d, sortOrder: v }))}
          onPopularChange={(v) => setDraft((d) => ({ ...d, popular: v }))}
          onOriginalPriceChange={(v) => setDraft((d) => ({ ...d, originalPrice: v }))}
          onPriceChange={(v) => setDraft((d) => ({ ...d, price: v }))}
          onTranslationChange={(locale, patch) =>
            setDraft((d) => ({
              ...d,
              translations: withTranslation(d.translations, locale, patch, {
                locale,
                name: "",
                tagline: "",
                features: [],
              }),
            }))
          }
          onSave={handleCreate}
          saveLabel="Simpan Paket Baru"
        />
      ) : (
        <button
          type="button"
          onClick={() => setCreating(true)}
          className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-line py-4 text-sm font-medium text-ink/60 hover:border-signal hover:text-signal"
        >
          <LuPlus className="size-4" />
          Tambah Paket Baru
        </button>
      )}
    </div>
  );
}
