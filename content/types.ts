export type Locale = "id" | "en";

export const locales: Locale[] = ["id", "en"];
export const defaultLocale: Locale = "id";

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
    ctaSecondary: string;
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
  pricing: {
    eyebrow: string;
    titleMain: string;
    titleAccent: string;
    billingSuffix: string;
    popularLabel: string;
    ctaLabel: string;
    plans: {
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
    websiteLabel: string;
    websiteHref: string;
    navLabel: string;
    copyright: string;
  };
}
