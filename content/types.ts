export type Locale = "id" | "en";

export const locales: Locale[] = ["id", "en"];
export const defaultLocale: Locale = "id";

// Cookie (not localStorage) so the server can resolve the visitor's saved
// locale before the first paint — see app/layout.tsx and locale-provider.tsx.
export const LOCALE_COOKIE = "chathub-locale";

export function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

export interface Channel {
  name: string;
  badge: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    twitterDescription: string;
  };
  nav: {
    links: { label: string; href: string }[];
    loginLabel: string;
    ctaPrimary: string;
  };
  hero: {
    eyebrow: string;
    headlineMain: string;
    headlineAccent: string;
    subheadlineAccent: string;
    subheadlineMain: string;
    ctaPrimary: string;
    ctaSecondary: string;
    channelsLabel: string;
  };
  problem: {
    titleMain: string;
    titleAccent: string;
  };
  omnichannel: {
    eyebrow: string;
    titleMain: string;
    titleAccent: string;
    description: string;
    features: { title: string }[];
    impact: { label: string }[];
    inboxMockup: {
      headerTitle: string;
      unreadSuffix: string;
      conversations: {
        name: string;
        channel: string;
        preview: string;
        time: string;
        unread: boolean;
      }[];
    };
  };
  aiCrm: {
    eyebrow: string;
    titleMain: string;
    titleAccent: string;
    chatbot: {
      title: string;
      points: { title: string; description: string }[];
    };
    crm: {
      title: string;
      points: { title: string; description: string }[];
    };
  };
  whatsapp: {
    eyebrow: string;
    titleMain: string;
    titleAccent: string;
    description: string;
    chatMockup: {
      contactName: string;
      statusLabel: string;
      messages: { from: "customer" | "business"; text: string; time: string }[];
      quickReplies: string[];
    };
  };
  whyChatHub: {
    eyebrow: string;
    titleMain: string;
    titleAccent: string;
    points: { title: string; description: string }[];
  };
  pricingHero: {
    heading: string;
    subheading: string;
  };
  contactHero: {
    heading: string;
    subheading: string;
  };
  aboutHero: {
    heading: string;
  };
  productHero: {
    heading: string;
    subheading: string;
  };
  blogHero: {
    heading: string;
    subheading: string;
  };
  blog: {
    eyebrow: string;
    titleMain: string;
    titleAccent: string;
    description: string;
    viewAllLabel: string;
    posts: {
      slug: string;
      category: string;
      title: string;
      excerpt: string;
      content: string[];
      author: string;
      date: string;
      readTime: string;
    }[];
  };
  visionMission: {
    visionEyebrow: string;
    visionMain: string;
    visionAccent: string;
    missionEyebrow: string;
    missionItems: { textMain: string; textAccent: string }[];
  };
  about: {
    paragraphs: string[];
    countriesLabel: string;
    countries: string[];
    countriesMoreLabel: string;
  };
  contact: {
    eyebrow: string;
    titleMain: string;
    titleAccent: string;
    description: string;
    infoCards: { label: string; value: string; href: string }[];
    mapTitle: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitLabel: string;
      successMessage: string;
    };
  };
  pricing: {
    eyebrow: string;
    titleMain: string;
    titleAccent: string;
    billingSuffix: string;
    popularLabel: string;
    ctaLabel: string;
    plans: {
      // Only set for plans loaded live from the backend (see toPublicPlans in
      // lib/pricing-format.ts) — absent on the static locale fallback, so the
      // buy CTA can tell a real purchasable plan from placeholder copy.
      key?: string;
      name: string;
      tagline: string;
      popular: boolean;
      originalPrice: string;
      price: string;
      features: { label: string; value?: string; included: boolean }[];
    }[];
  };
  industries: {
    eyebrow: string;
    titleMain: string;
    titleAccent: string;
    description: string;
    stats: { value: string; label: string }[];
    list: { name: string }[];
    logoStripLabel: string;
    clientsMoreLabel: string;
  };
  faq: {
    eyebrow: string;
    titleMain: string;
    titleAccent: string;
    items: { question: string; answer: string }[];
  };
  closingCta: {
    title: string;
    subheadline: string;
    badges: string[];
    cta: string;
  };
  footer: {
    tagline: string;
    taglineSecondary: string;
    social: { label: string; href: string }[];
    companyName: string;
    companyNote: string;
    address: string[];
    emails: { label: string; value: string }[];
    websiteLabel: string;
    websiteHref: string;
    contactLabel: string;
    navLabel: string;
    copyright: string;
  };
}
