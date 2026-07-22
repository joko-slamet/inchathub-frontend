import Link from "next/link";
import { LuBadgePercent } from "react-icons/lu";
import type { PublicPromoCard } from "@/lib/promo-format";

export function PromoMarquee({ promos }: { promos: PublicPromoCard[] }) {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
      <div className="marquee-track flex w-max items-center gap-6">
        {[...promos, ...promos].map((promo, index) => (
          <Link
            key={`${promo.slug}-${index}`}
            href={`/promo/${promo.slug}`}
            className="group flex w-72 shrink-0 flex-col overflow-hidden rounded-[1.5rem] border-2 border-line transition-all duration-300 hover:-translate-y-1 hover:border-signal/30 hover:shadow-[0_20px_40px_-20px_rgba(190,30,45,0.3)]"
          >
            <div className="relative flex h-32 items-center justify-center overflow-hidden bg-signal-dim">
              {promo.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element -- backend host isn't known ahead of time for next/image.
                <img
                  src={promo.imageUrl}
                  alt=""
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <LuBadgePercent className="size-8 text-signal/25" strokeWidth={1.5} />
              )}
              <span className="sticker absolute top-3 left-3 rounded-full bg-signal px-2.5 py-1 text-[0.65rem] font-bold tracking-wide text-white uppercase">
                {promo.discountLabel}
              </span>
            </div>
            <div className="flex flex-col gap-1.5 p-4">
              <h3 className="truncate font-display text-sm font-semibold text-ink">{promo.title}</h3>
              <span className="w-fit rounded-md border border-dashed border-signal/40 bg-signal-dim px-2 py-0.5 font-mono text-[0.7rem] font-semibold text-signal">
                {promo.code}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
