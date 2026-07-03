"use client";

import { useState } from "react";
import { LuChevronDown, LuTrash2, LuPlus } from "react-icons/lu";
import { getSiteContent, type Locale, type SiteContent } from "@/content/site-content";
import { Field } from "@/components/admin/field";
import { LocaleTabs } from "@/components/admin/locale-tabs";
import { SaveBar } from "@/components/admin/save-bar";

type PricingContent = SiteContent["pricing"];
type Plan = PricingContent["plans"][number];
type Feature = Plan["features"][number];

function initialContent(): Record<Locale, PricingContent> {
  return {
    id: structuredClone(getSiteContent("id").pricing),
    en: structuredClone(getSiteContent("en").pricing),
  };
}

export default function AdminPricingPage() {
  const [content, setContent] = useState<Record<Locale, PricingContent>>(initialContent);
  const [activeLocale, setActiveLocale] = useState<Locale>("id");
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [saved, setSaved] = useState(false);

  const pricing = content[activeLocale];

  function updatePricing(updater: (pricing: PricingContent) => PricingContent) {
    setContent((prev) => ({ ...prev, [activeLocale]: updater(prev[activeLocale]) }));
    setSaved(false);
  }

  function updateField<K extends keyof PricingContent>(key: K, value: PricingContent[K]) {
    updatePricing((p) => ({ ...p, [key]: value }));
  }

  function updatePlan(planIndex: number, patch: Partial<Plan>) {
    updatePricing((p) => ({
      ...p,
      plans: p.plans.map((plan, i) => (i === planIndex ? { ...plan, ...patch } : plan)),
    }));
  }

  function setPopular(planIndex: number) {
    updatePricing((p) => ({
      ...p,
      plans: p.plans.map((plan, i) => ({ ...plan, popular: i === planIndex ? !plan.popular : false })),
    }));
  }

  function updateFeature(planIndex: number, featureIndex: number, patch: Partial<Feature>) {
    updatePricing((p) => ({
      ...p,
      plans: p.plans.map((plan, i) =>
        i === planIndex
          ? { ...plan, features: plan.features.map((f, j) => (j === featureIndex ? { ...f, ...patch } : f)) }
          : plan,
      ),
    }));
  }

  function addFeature(planIndex: number) {
    updatePricing((p) => ({
      ...p,
      plans: p.plans.map((plan, i) =>
        i === planIndex ? { ...plan, features: [...plan.features, { label: "", included: true }] } : plan,
      ),
    }));
  }

  function removeFeature(planIndex: number, featureIndex: number) {
    updatePricing((p) => ({
      ...p,
      plans: p.plans.map((plan, i) =>
        i === planIndex ? { ...plan, features: plan.features.filter((_, j) => j !== featureIndex) } : plan,
      ),
    }));
  }

  function handleSave() {
    // No backend yet — logs the edited content for both locales as a
    // placeholder for wiring a real content API later.
    console.log("Pricing content saved (demo):", content);
    setSaved(true);
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight text-ink">Kelola Halaman Harga</p>
          <p className="mt-1 text-sm text-ink/60">
            Ubah copywriting dan detail paket yang tampil di beranda dan halaman /pricing.
          </p>
        </div>

        <LocaleTabs active={activeLocale} onChange={setActiveLocale} />
      </div>

      <div className="rounded-2xl border border-line bg-paper p-6">
        <p className="font-display text-base font-semibold text-ink">Copywriting Section</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Field label="Eyebrow" value={pricing.eyebrow} onChange={(v) => updateField("eyebrow", v)} />
          <Field
            label="Label Terpopuler"
            value={pricing.popularLabel}
            onChange={(v) => updateField("popularLabel", v)}
          />
          <Field label="Judul (bagian utama)" value={pricing.titleMain} onChange={(v) => updateField("titleMain", v)} />
          <Field
            label="Judul (bagian aksen merah)"
            value={pricing.titleAccent}
            onChange={(v) => updateField("titleAccent", v)}
          />
          <Field
            label="Akhiran Harga"
            value={pricing.billingSuffix}
            onChange={(v) => updateField("billingSuffix", v)}
          />
          <Field label="Label Tombol CTA" value={pricing.ctaLabel} onChange={(v) => updateField("ctaLabel", v)} />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <p className="font-display text-base font-semibold text-ink">Paket Harga</p>
        {pricing.plans.map((plan, planIndex) => {
          const isExpanded = expanded[planIndex] ?? false;
          return (
            <div key={planIndex} className="rounded-2xl border border-line bg-paper p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="grid flex-1 gap-4 sm:grid-cols-2">
                  <Field label="Nama Paket" value={plan.name} onChange={(v) => updatePlan(planIndex, { name: v })} />
                  <Field label="Tagline" value={plan.tagline} onChange={(v) => updatePlan(planIndex, { tagline: v })} />
                  <Field
                    label="Harga Coret"
                    value={plan.originalPrice}
                    onChange={(v) => updatePlan(planIndex, { originalPrice: v })}
                  />
                  <Field label="Harga Aktif" value={plan.price} onChange={(v) => updatePlan(planIndex, { price: v })} />
                </div>

                <label className="flex shrink-0 items-center gap-2 text-sm font-medium text-ink/70">
                  <input
                    type="checkbox"
                    checked={plan.popular}
                    onChange={() => setPopular(planIndex)}
                    className="size-4 rounded border-line accent-signal"
                  />
                  Terpopuler
                </label>
              </div>

              <button
                type="button"
                onClick={() => setExpanded((prev) => ({ ...prev, [planIndex]: !isExpanded }))}
                className="mt-5 flex w-full items-center justify-between border-t border-line pt-4 text-sm font-medium text-ink/70 hover:text-ink"
              >
                Fitur ({plan.features.length})
                <LuChevronDown className={`size-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
              </button>

              {isExpanded && (
                <div className="mt-3 flex flex-col gap-2">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={feature.included}
                        onChange={(e) => updateFeature(planIndex, featureIndex, { included: e.target.checked })}
                        className="size-4 shrink-0 rounded border-line accent-signal"
                      />
                      <input
                        type="text"
                        value={feature.label}
                        onChange={(e) => updateFeature(planIndex, featureIndex, { label: e.target.value })}
                        placeholder="Nama fitur"
                        className="min-w-0 flex-1 rounded-lg border border-line px-3 py-2 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
                      />
                      <input
                        type="text"
                        value={feature.value ?? ""}
                        onChange={(e) => updateFeature(planIndex, featureIndex, { value: e.target.value || undefined })}
                        placeholder="Nilai"
                        className="w-20 shrink-0 rounded-lg border border-line px-3 py-2 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => removeFeature(planIndex, featureIndex)}
                        aria-label="Hapus fitur"
                        className="shrink-0 rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-signal"
                      >
                        <LuTrash2 className="size-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addFeature(planIndex)}
                    className="mt-1 flex items-center gap-1.5 self-start text-sm font-medium text-signal hover:underline"
                  >
                    <LuPlus className="size-4" />
                    Tambah Fitur
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <SaveBar saved={saved} onSave={handleSave} />
    </div>
  );
}
