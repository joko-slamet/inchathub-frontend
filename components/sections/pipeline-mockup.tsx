import type { SiteContent } from "@/content/site-content";

export function PipelineMockup({ content }: { content: SiteContent["aiCrm"]["pipeline"] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_24px_64px_-32px_rgba(20,16,15,0.3)]">
      <div className="border-b border-line px-5 py-4">
        <p className="text-sm font-semibold text-ink">{content.title}</p>
        <p className="mt-0.5 font-mono text-[0.65rem] text-ink/40">{content.subtitle}</p>
      </div>
      <div className="grid grid-cols-2 gap-3 px-4 py-4 sm:grid-cols-3 lg:grid-cols-5">
        {content.stages.map((stage) => (
          <div key={stage.name} className="min-w-0">
            <p className="mb-2 truncate font-mono text-[0.6rem] tracking-wider text-ink/45 uppercase">
              {stage.name}
            </p>
            <div className="space-y-2">
              {stage.deals.map((deal) => (
                <div
                  key={deal.name}
                  className="rounded-lg border border-line bg-ink/[0.02] px-2.5 py-2"
                >
                  <p className="truncate text-xs font-medium text-ink/80">{deal.name}</p>
                  <p className="mt-1 font-mono text-[0.65rem] text-signal">{deal.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
