import Link from "next/link";
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import type { IconType } from "react-icons";
import { Logo } from "@/components/ui/logo";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";
import type { SiteContent } from "@/content/site-content";

// Positional match with footer.social in content — keep order in sync.
const socialIcons: { Icon: IconType; color: string }[] = [
  { Icon: SiInstagram, color: "#E4405F" },
  { Icon: SiWhatsapp, color: "#25D366" },
];

export function Footer({
  content,
  nav,
}: {
  content: SiteContent["footer"];
  nav: SiteContent["nav"];
}) {
  return (
    <footer className="border-t border-line bg-paper px-6 py-14 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink/60">{content.tagline}</p>
            <p className="text-sm leading-relaxed text-ink/60">{content.taglineSecondary}</p>

            <div className="mt-6 flex items-center gap-3">
              {content.social.map((item, index) => {
                const { Icon, color } = socialIcons[index];
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex size-9 items-center justify-center rounded-full border border-line transition-colors hover:border-ink"
                  >
                    <Icon className="size-4" style={{ color }} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="font-mono text-xs tracking-widest text-ink/40 uppercase">{content.navLabel}</p>
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
                {content.companyName}
              </p>
              <p className="mt-4 text-sm text-ink/55">{content.companyNote}</p>
              <address className="mt-3 text-sm leading-relaxed text-ink/55 not-italic">
                {content.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <div className="mt-3 space-y-1">
                {content.emails.map((email) => (
                  <a
                    key={email.value}
                    href={`mailto:${email.value}`}
                    className="block text-sm text-ink/55 hover:text-ink"
                  >
                    {email.label}: {email.value}
                  </a>
                ))}
              </div>
              <a
                href={content.websiteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-sm text-signal hover:underline"
              >
                {content.websiteLabel}
              </a>
              <Link href="/contact-us" className="mt-1.5 block text-sm text-signal hover:underline">
                {content.contactLabel}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink/45">{content.copyright}</p>
          <LocaleSwitcher />
        </div>
      </div>
    </footer>
  );
}
