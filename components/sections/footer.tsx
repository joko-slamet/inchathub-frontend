import { Logo } from "@/components/ui/logo";
import { Icon } from "@/components/ui/icon-map";
import { footer, nav } from "@/content/site-content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper px-6 py-14 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink/60">{footer.tagline}</p>
            <p className="text-sm leading-relaxed text-ink/60">{footer.taglineSecondary}</p>

            <div className="mt-6 flex items-center gap-3">
              {footer.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex size-9 items-center justify-center rounded-full border border-line text-ink/60 transition-colors hover:border-ink hover:text-ink"
                >
                  <Icon name={item.icon} className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="font-mono text-xs tracking-widest text-ink/40 uppercase">Navigasi</p>
              <ul className="mt-4 space-y-2.5">
                {nav.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-ink/65 hover:text-ink">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-mono text-xs tracking-widest text-ink/40 uppercase">
                {footer.companyName}
              </p>
              <p className="mt-4 text-sm text-ink/55">{footer.companyNote}</p>
              <address className="mt-3 text-sm leading-relaxed text-ink/55 not-italic">
                {footer.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="text-xs text-ink/45">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
