"use client";

import { LuBadgePercent, LuLoaderCircle } from "react-icons/lu";
import { getSiteContent } from "@/content/site-content";
import { useLocale } from "@/components/locale-provider";
import { usePromos } from "@/hooks/use-promos";
import { toPublicPromoCards } from "@/lib/promo-format";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/ui/page-hero";
import { PromoGrid } from "@/components/sections/promo-grid";
import { Footer } from "@/components/sections/footer";

export default function PromoPage() {
  const { locale } = useLocale();
  const content = getSiteContent(locale);
  const { promos, loading, error } = usePromos();

  return (
    <>
      <Navbar content={content.nav} />
      <main className="flex-1">
        <PageHero
          icon={LuBadgePercent}
          heading={content.promoHero.heading}
          subheading={content.promoHero.subheading}
        />
        <section className="px-6 py-16 sm:py-20 md:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            {loading && (
              <div className="flex items-center justify-center gap-2 py-16 text-sm text-ink/50">
                <LuLoaderCircle className="size-4 animate-spin" />
                Memuat promo...
              </div>
            )}
            {error && (
              <p className="py-16 text-center text-sm text-ink/50">
                Gagal memuat promo. Coba muat ulang halaman.
              </p>
            )}
            {promos && promos.length === 0 && (
              <p className="py-16 text-center text-sm text-ink/50">Belum ada promo yang berlaku saat ini.</p>
            )}
            {promos && promos.length > 0 && <PromoGrid promos={toPublicPromoCards(promos, locale)} />}
          </div>
        </section>
      </main>
      <Footer content={content.footer} nav={content.nav} />
    </>
  );
}
