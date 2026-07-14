import Link from "next/link";
import { FaFacebook, FaGlobe, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa";
import type { IconType } from "react-icons";
import { Logo } from "@/components/ui/logo";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";
import type { SiteContent } from "@/content/site-content";

// Admin can freely add/rename/reorder social rows in the panel, so icons are
// resolved by matching the label rather than by array position — a fixed-size
// positional array would throw once the admin added a row past its length.
const socialIconsByKeyword: { keyword: string; Icon: IconType; color: string }[] = [
  { keyword: "instagram", Icon: FaInstagram, color: "#E4405F" },
  { keyword: "whatsapp", Icon: FaWhatsapp, color: "#25D366" },
  { keyword: "tiktok", Icon: FaTiktok, color: "#000000" },
  { keyword: "facebook", Icon: FaFacebook, color: "#1877F2" },
  { keyword: "linkedin", Icon: FaLinkedin, color: "#0A66C2" },
];

function resolveSocialIcon(label: string): { Icon: IconType; color: string } {
  const match = socialIconsByKeyword.find(({ keyword }) => label.toLowerCase().includes(keyword));
  return match ?? { Icon: FaGlobe, color: "#64748B" };
}

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
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink/60">{content.tagline}</p>
            <p className="text-sm leading-relaxed text-ink/60">{content.taglineSecondary}</p>

            <div className="mt-6 flex items-center gap-3">
              {content.social.map((item) => {
                const { Icon, color } = resolveSocialIcon(item.label);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex size-9 items-center justify-center rounded-full border border-line transition-all duration-200 hover:-translate-y-0.5 hover:border-signal hover:shadow-[0_8px_16px_-8px_rgba(190,30,45,0.4)]"
                  >
                    <Icon className="size-4" style={{ color }} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide text-slate uppercase">{content.navLabel}</p>
            <ul className="mt-4 space-y-2.5">
              {/* /contact-us and /about-us already have their own footer column/link — no need to repeat them here. */}
              {nav.links
                .filter((link) => link.href !== "/contact-us" && link.href !== "/about-us")
                .map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-ink/65 hover:text-ink">
                      {link.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide text-slate uppercase">{content.companyName}</p>
            <p className="mt-4 text-sm text-ink/55">{content.companyNote}</p>
            <address className="mt-3 text-sm leading-relaxed text-ink/55 not-italic">
              {content.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div>
            <Link
              href="/contact-us"
              className="text-xs font-semibold tracking-wide text-slate uppercase hover:text-signal"
            >
              {content.contactLabel}
            </Link>
            <div className="mt-4 space-y-1">
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
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-slate">{content.copyright}</p>
          <LocaleSwitcher />
        </div>
      </div>
    </footer>
  );
}
