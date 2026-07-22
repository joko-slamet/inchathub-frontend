"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { LuArrowLeft, LuCopy, LuCheck, LuCalendarClock, LuInfinity, LuLoaderCircle } from "react-icons/lu";
import { getSiteContent } from "@/content/site-content";
import { useLocale } from "@/components/locale-provider";
import { usePromos } from "@/hooks/use-promos";
import { formatDiscountLabel } from "@/lib/promo-format";
import { toPromoImageUrl } from "@/lib/promo-image";
import { Navbar } from "@/components/sections/navbar";
import { PromoGrid } from "@/components/sections/promo-grid";
import { toPublicPromoCards } from "@/lib/promo-format";
import { Footer } from "@/components/sections/footer";

function formatValidUntil(iso: string, locale: "id" | "en"): string {
  return new Date(iso).toLocaleDateString(locale === "id" ? "id-ID" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function PromoDetailPage() {
  const { locale } = useLocale();
  const content = getSiteContent(locale);
  const { slug } = useParams<{ slug: string }>();
  const { promos, loading, error } = usePromos();
  const [copied, setCopied] = useState(false);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center gap-2 text-sm text-ink/50">
        <LuLoaderCircle className="size-4 animate-spin" />
        Memuat promo...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-ink/50">
        Gagal memuat promo. Coba muat ulang halaman.
      </div>
    );
  }

  const promo = (promos ?? []).find((p) => p.slug === slug);
  if (!promo) notFound();

  const translation = promo.translations.find((t) => t.locale === locale) ?? promo.translations[0];
  const relatedPromos = toPublicPromoCards(
    (promos ?? []).filter((p) => p.slug !== promo.slug),
    locale,
  ).slice(0, 3);

  const promoCode = promo.code;
  function handleCopyCode() {
    navigator.clipboard.writeText(promoCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <>
      <Navbar content={content.nav} />
      <main className="flex-1">
        <article
          className="relative overflow-hidden px-6 pt-14 pb-16 md:px-10 md:pt-20 md:pb-20 lg:px-16"
          style={{
            backgroundColor: "var(--color-paper)",
            backgroundImage: "radial-gradient(circle at 88% 0%, var(--color-signal-dim) 0%, transparent 50%)",
          }}
        >
          <div
            aria-hidden="true"
            className="blob pointer-events-none absolute -top-20 -left-16 size-72 bg-slate-dim blur-xl"
          />

          <div className="relative mx-auto max-w-3xl">
            <Link
              href="/promo"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/50 hover:text-ink"
            >
              <LuArrowLeft className="size-4" />
              Kembali ke Promo
            </Link>

            <h1 className="mt-6 font-display text-3xl leading-tight font-bold text-ink sm:text-4xl">
              {translation?.title}
            </h1>

            <div className="relative mt-8 overflow-hidden rounded-[1.75rem] border-2 border-line">
              {/* eslint-disable-next-line @next/next/no-img-element -- backend host isn't known ahead of time for next/image. */}
              <img
                src={toPromoImageUrl(promo.imageUrl)}
                alt=""
                className="aspect-video w-full object-cover"
              />
              <span className="sticker absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-signal px-4 py-1.5 text-xs font-bold tracking-[0.06em] text-white uppercase">
                {formatDiscountLabel(promo)}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleCopyCode}
                className="flex items-center gap-2 rounded-lg border-2 border-dashed border-signal/40 bg-signal-dim px-4 py-2.5 font-mono text-sm font-semibold tracking-wide text-signal transition-colors hover:border-signal"
              >
                {promo.code}
                {copied ? <LuCheck className="size-4" /> : <LuCopy className="size-4" />}
              </button>
              <span className="flex items-center gap-1.5 text-sm text-ink/55">
                {promo.endsAt ? (
                  <>
                    <LuCalendarClock className="size-4" />
                    Berlaku sampai {formatValidUntil(promo.endsAt, locale)}
                  </>
                ) : (
                  <>
                    <LuInfinity className="size-4" />
                    Berlaku selamanya
                  </>
                )}
              </span>
            </div>

            <div
              className="prose mt-10 max-w-none border-t border-dashed border-line pt-10 text-base leading-relaxed text-ink/80 sm:text-lg"
              dangerouslySetInnerHTML={{ __html: translation?.description ?? "" }}
            />
          </div>
        </article>

        {relatedPromos.length > 0 && (
          <section className="px-6 py-16 sm:py-20 md:px-10 lg:px-16">
            <div className="mx-auto max-w-6xl">
              <p className="font-display text-2xl font-bold text-ink">Promo Lainnya</p>
              <div className="mt-8">
                <PromoGrid promos={relatedPromos} />
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer content={content.footer} nav={content.nav} />
    </>
  );
}
