import Link from "next/link";
import { LuBadgePercent } from "react-icons/lu";
import type { PublicPromoCard } from "@/lib/promo-format";

export function PromoGrid({ promos }: { promos: PublicPromoCard[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {promos.map((promo) => (
        <Link
          key={promo.slug}
          href={`/promo/${promo.slug}`}
          className="group flex flex-col overflow-hidden rounded-[1.75rem] border-2 border-line transition-all duration-300 hover:-translate-y-1.5 hover:border-signal/30 hover:shadow-[0_24px_48px_-24px_rgba(190,30,45,0.3)]"
        >
          <div className="relative flex h-40 items-center justify-center overflow-hidden bg-signal-dim">
            {promo.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element -- backend host isn't known ahead of time for next/image.
              <img
                src={promo.imageUrl}
                alt=""
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <LuBadgePercent className="size-10 text-signal/25" strokeWidth={1.5} />
            )}
            <span className="sticker absolute top-4 left-4 rounded-full bg-signal px-3 py-1 text-[0.7rem] font-bold tracking-wide text-white uppercase">
              {promo.discountLabel}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-display text-lg leading-snug font-semibold text-ink">{promo.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{promo.excerpt}</p>
            <div className="mt-4 flex items-center gap-2 border-t border-dashed border-line pt-4">
              <span className="rounded-md border border-dashed border-signal/40 bg-signal-dim px-2.5 py-1 font-mono text-xs font-semibold tracking-wide text-signal">
                {promo.code}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
