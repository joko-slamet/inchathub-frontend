import type { SiteContent } from "@/content/types";

export const en: SiteContent = {
  meta: {
    title: "ChatHub — One Platform for Every Customer Conversation",
    description:
      "ChatHub unifies WhatsApp, Instagram, Facebook, Telegram, Email, and Web Chat into a single inbox, with a built-in AI Chatbot and Smart CRM. Trusted by hospitals, government agencies, and financial institutions across Indonesia.",
    ogTitle: "ChatHub — Connecting Conversations. Accelerating Growth.",
    ogDescription:
      "Bring every customer channel into one inbox. Built-in AI Chatbot and Smart CRM help your business respond faster and close more deals.",
    twitterDescription:
      "One omnichannel, AI Chatbot, and Smart CRM platform for businesses juggling chats across too many channels.",
  },

  nav: {
    links: [
      { label: "Product", href: "#produk" },
      { label: "Solutions", href: "#solusi" },
      { label: "Industries", href: "#industri" },
      { label: "Pricing", href: "#harga" },
      { label: "Contact", href: "#kontak" },
    ],
    ctaSecondary: "Try for Free",
    ctaPrimary: "Request Demo",
  },

  hero: {
    eyebrow: "AI CHATBOT · OMNICHANNEL · CRM",
    headlineMain: "One Platform to Manage",
    headlineAccent: "Every Customer Interaction",
    subheadlineAccent: "Chat Hub",
    subheadlineMain: "unifies customer communication, engagement, and automation in one platform.",
    ctaPrimary: "Request a Free Demo",
    ctaSecondary: "See How It Works",
    channelsLabel: "Connected to the channels your customers already use every day",
  },

  problem: {
    titleMain: "Every Channel. One Inbox.",
    titleAccent: "Zero Missed Conversations.",
  },

  omnichannel: {
    eyebrow: "OMNICHANNEL COMMUNICATION PLATFORM",
    titleMain: "Manage Every Conversation From One",
    titleAccent: "Unified Workspace",
    description:
      "Modern customers communicate across multiple channels. Your team shouldn't need multiple systems.",
    features: [
      {
        title: "Unified Inbox",
      },
      {
        title: "Multi-Agent Collaboration",
      },
      {
        title: "Customer History",
      },
      {
        title: "Ticket Management",
      },
      {
        title: "Performance Analytics",
      },
      {
        title: "Role-Based Access Control",
      },
    ],
    impact: [
      { label: "Faster Response" },
      { label: "Better Customer Experience" },
      { label: "Improved Team Productivity" },
      { label: "Higher Customer Satisfaction" },
    ],
    inboxMockup: {
      headerTitle: "Unified Inbox",
      unreadSuffix: "unread",
      conversations: [
        { name: "Dedi Kurniawan", channel: "WA", preview: "Hi, is the product from yesterday still in stock?", time: "09:41", unread: true },
        { name: "Sarah Amelia", channel: "IG", preview: "Could I get your wholesale pricing?", time: "09:38", unread: true },
        { name: "BP Batam General Affairs", channel: "MAIL", preview: "Requesting a status update on ticket #2291", time: "09:22", unread: false },
        { name: "Sehat Sentosa Clinic", channel: "WEB", preview: "Thanks for the info, we'll wait to hear back", time: "08:57", unread: false },
        { name: "Andi Wijaya", channel: "TG", preview: "Can I pay by bank transfer?", time: "08:40", unread: true },
      ],
    },
  },

  aiCrm: {
    eyebrow: "AI CHATBOT & SMART CRM",
    titleMain: "Turn Conversations",
    titleAccent: "Into Revenue",
    chatbot: {
      title: "AI Chatbot",
      points: [
        { title: "Automated Replies", description: "Answers incoming messages within seconds, whenever a customer reaches out." },
        { title: "Lead Qualification", description: "Filters out casual questions from prospects who are genuinely ready to buy." },
        { title: "FAQ Automation", description: "The same questions you get every day get answered automatically, no agent needed." },
        { title: "Customer Self-Service", description: "Customers can check order status or product info themselves, without waiting for a reply." },
        { title: "AI Knowledge Base", description: "The AI learns from your own business materials and catalog, not generic answers." },
        { title: "Human Escalation", description: "Conversations that need a personal touch are automatically routed to the right agent." },
      ],
    },
    crm: {
      title: "Smart CRM",
      points: [
        { title: "Lead Management", description: "Every prospect is recorded neatly with their source and full contact history." },
        { title: "Sales Pipeline", description: "Track every deal from first contact to close on a single board." },
        { title: "Customer Journey Tracking", description: "See a customer's entire journey across channels, not just the last chat snippet." },
        { title: "Task Automation", description: "Follow-up tasks are created automatically the moment a conversation's status changes." },
        { title: "Follow-Up Monitoring", description: "The system reminds your team before a lead goes untouched for too long." },
        { title: "Performance Analytics", description: "Measure conversion at every pipeline stage to see exactly where deals stall." },
      ],
    },
  },

  whatsapp: {
    eyebrow: "WHATSAPP BUSINESS SOLUTIONS",
    titleMain: "Powering Customer Engagement",
    titleAccent: "Through WhatsApp",
    description: "The most trusted way to connect, engage, and grow your business.",
    chatMockup: {
      contactName: "Berkah Jaya Store",
      statusLabel: "WhatsApp Business",
      messages: [
        { from: "customer", text: "Hi, I wanted to check if the item from your catalog is still available?", time: "10:12" },
        { from: "business", text: "Hello! Thanks for reaching out. Could you tell us which product you mean? 🙏", time: "10:12" },
        { from: "customer", text: "The red one, size L", time: "10:13" },
        { from: "business", text: "Size L in red is still in stock, ready to ship today", time: "10:13" },
      ],
      quickReplies: ["Product Information", "Order Status", "Contact Support", "Talk to Agent"],
    },
  },

  whyChatHub: {
    eyebrow: "Why They Choose Us",
    titleMain: "Systems built to",
    titleAccent: "increase sales.",
    points: [
      { title: "Smart Automation", description: "Automatic replies, follow-ups, and reminders so no chat gets missed." },
      { title: "Organized Customer", description: "Customer data neatly stored with history, tags, and a clear pipeline." },
      { title: "Increase Growth", description: "Scale your service capacity without adding more headcount." },
      { title: "Scalable System", description: "One flexible system that grows right along with your business." },
      { title: "Affordable Rate", description: "Competitive, transparent pricing with no hidden fees." },
    ],
  },

  pricing: {
    eyebrow: "PRICING & PLANS",
    titleMain: "Choose the Plan",
    titleAccent: "That Fits Your Business",
    billingSuffix: "/month",
    popularLabel: "POPULAR",
    ctaLabel: "Get Started",
    plans: [
      {
        name: "Starter",
        tagline: "A ready-to-use chatbot to get you started",
        popular: false,
        originalPrice: "Rp1,500,000",
        price: "Rp900,000",
        features: [
          { label: "WhatsApp Official WABA", value: "1x", included: true },
          { label: "WhatsApp UnOfficial Regular", value: "1x", included: true },
          { label: "WhatsApp UnOfficial Business", value: "1x", included: true },
          { label: "Telegram Channel", value: "1x", included: true },
          { label: "Instagram Channel", value: "1x", included: true },
          { label: "FB Messenger Channel", value: "1x", included: true },
          { label: "Email Channel", value: "1x", included: true },
          { label: "Web Live Chat Channel", value: "1x", included: true },
          { label: "X Twitter Channel", included: true },
          { label: "Thread Channel", included: false },
          { label: "Microsoft Teams Channel", included: false },
          { label: "AI Agent", value: "3x", included: true },
          { label: "Chatbots Model", value: "3x", included: true },
          { label: "User Accounts", value: "3x", included: true },
          { label: "Whatsapp Templates", value: "10x", included: true },
          { label: "Storage", value: "1 GB", included: true },
          { label: "AI Response", value: "1,000x", included: true },
          { label: "Messages/Month", value: "3,000x", included: true },
          { label: "Email/Month", value: "1,000x", included: true },
          { label: "Scraping Data/Day", included: false },
          { label: "Google Sheets Integration", included: false },
          { label: "Shipping Cost Calculator", included: false },
          { label: "Custom Domain", included: false },
          { label: "24/7 Support", included: false },
        ],
      },
      {
        name: "Pro",
        tagline: "Maximize performance with a fuller feature set",
        popular: true,
        originalPrice: "Rp2,600,000",
        price: "Rp1,900,000",
        features: [
          { label: "WhatsApp Official WABA", value: "3x", included: true },
          { label: "WhatsApp UnOfficial Regular", value: "2x", included: true },
          { label: "WhatsApp UnOfficial Business", value: "2x", included: true },
          { label: "Telegram Channel", value: "2x", included: true },
          { label: "Instagram Channel", value: "1x", included: true },
          { label: "FB Messenger Channel", value: "1x", included: true },
          { label: "Email Channel", value: "1x", included: true },
          { label: "Web Live Chat Channel", value: "1x", included: true },
          { label: "X Twitter Channel", included: false },
          { label: "Thread Channel", included: false },
          { label: "Microsoft Teams Channel", included: false },
          { label: "AI Agent", value: "10x", included: true },
          { label: "Chatbots Model", value: "10x", included: true },
          { label: "User Accounts", value: "5x", included: true },
          { label: "Whatsapp Templates", value: "50x", included: true },
          { label: "Storage", value: "3 GB", included: true },
          { label: "AI Response", value: "3,000x", included: true },
          { label: "Messages/Month", value: "5,000x", included: true },
          { label: "Email/Month", value: "3,000x", included: true },
          { label: "Scraping Data/Day", included: false },
          { label: "Google Sheets Integration", included: false },
          { label: "Shipping Cost Calculator", included: false },
        ],
      },
      {
        name: "Business",
        tagline: "A custom solution with priority support",
        popular: false,
        originalPrice: "Rp3,500,000",
        price: "Rp2,900,000",
        features: [
          { label: "WhatsApp Official WABA", value: "5x", included: true },
          { label: "WhatsApp UnOfficial Regular", value: "3x", included: true },
          { label: "WhatsApp UnOfficial Business", value: "3x", included: true },
          { label: "Telegram Channel", value: "3x", included: true },
          { label: "Instagram Channel", value: "1x", included: true },
          { label: "FB Messenger Channel", value: "1x", included: true },
          { label: "Email Channel", value: "1x", included: true },
          { label: "Web Live Chat Channel", value: "1x", included: true },
          { label: "X Twitter Channel", included: false },
          { label: "Thread Channel", included: false },
          { label: "Microsoft Teams Channel", included: false },
          { label: "AI Agent", value: "20x", included: true },
          { label: "Chatbots Model", value: "20x", included: true },
          { label: "User Accounts", value: "10x", included: true },
          { label: "Whatsapp Templates", value: "100x", included: true },
          { label: "Storage", value: "5 GB", included: true },
          { label: "AI Response", value: "10,000x", included: true },
          { label: "Messages/Month", value: "10,000x", included: true },
          { label: "Email/Month", value: "5,000x", included: true },
          { label: "Scraping Data/Day", value: "30x", included: true },
          { label: "Google Sheets Integration", included: true },
          { label: "Shipping Cost Calculator", included: true },
        ],
      },
      {
        name: "Enterprise",
        tagline: "A flexible plan plus a dedicated support team",
        popular: false,
        originalPrice: "Rp5,500,000",
        price: "Rp4,900,000",
        features: [
          { label: "WhatsApp Official WABA", value: "10x", included: true },
          { label: "WhatsApp UnOfficial Regular", value: "10x", included: true },
          { label: "WhatsApp UnOfficial Business", value: "10x", included: true },
          { label: "Telegram Channel", value: "5x", included: true },
          { label: "Instagram Channel", value: "3x", included: true },
          { label: "FB Messenger Channel", value: "3x", included: true },
          { label: "Email Channel", value: "1x", included: true },
          { label: "Web Live Chat Channel", value: "1x", included: true },
          { label: "X Twitter Channel", value: "1x", included: true },
          { label: "Thread Channel", value: "1x", included: true },
          { label: "Microsoft Teams Channel", value: "1x", included: true },
          { label: "AI Agent", value: "Unlimited", included: true },
          { label: "Chatbots Model", value: "Unlimited", included: true },
          { label: "User Accounts", value: "Unlimited", included: true },
          { label: "Whatsapp Templates", value: "Unlimited", included: true },
          { label: "Storage", value: "Unlimited", included: true },
          { label: "AI Response", value: "Unlimited", included: true },
          { label: "Messages/Month", value: "Unlimited", included: true },
          { label: "Email/Month", value: "Unlimited", included: true },
          { label: "Scraping Data/Day", value: "50x", included: true },
          { label: "Google Sheets Integration", included: true },
          { label: "Shipping Cost Calculator", included: true },
        ],
      },
    ],
  },

  industries: {
    eyebrow: "TRUSTED ACROSS INDUSTRIES",
    titleMain: "From Hospitals to Government Agencies,",
    titleAccent: "Every Conversation Stays Under Control",
    description:
      "ChatHub is used by organizations with high conversation volume and strict service standards — from healthcare and government agencies to financial institutions and educational institutions.",
    stats: [
      { value: "100+", label: "Organizations" },
      { value: "Millions", label: "Messages Delivered" },
      { value: "Government & Healthcare", label: "Sectors That Trust Us" },
    ],
    list: [
      { name: "Education" },
      { name: "Healthcare" },
      { name: "Hospitality" },
      { name: "Manufacturing" },
      { name: "Retail & E-commerce" },
      { name: "Banking & Finance" },
      { name: "NGO / Non-Profit" },
      { name: "Government" },
      { name: "Logistics & Transportation" },
      { name: "Media & Entertainment" },
    ],
    logoStripLabel: "Some of our clients",
    clientsMoreLabel: "+ more trusted partners",
  },

  faq: {
    eyebrow: "FAQ",
    titleMain: "Frequently Asked",
    titleAccent: "Questions",
    items: [
      {
        question: "Can the chatbot really answer customers?",
        answer: "Yes. The AI is trained on your own business data, so it gives relevant, accurate answers.",
      },
      {
        question: "Does this system support WhatsApp?",
        answer: "Yes. inChatHub supports WhatsApp along with other channels like Instagram, Telegram, Facebook, Live Chat, Email, and more.",
      },
      {
        question: "I don't understand IT. Can I still use this?",
        answer: "Absolutely. The platform is designed to be easy to use — no coding required!",
      },
      {
        question: "Can I upgrade or change my plan later?",
        answer: "Yes. You can adjust your plan as your business grows. Our team will help ensure a smooth transition.",
      },
      {
        question: "Is ChatHub suitable for enterprise or personal needs?",
        answer: "ChatHub is designed for both professional and personal use, supporting scalable and structured messaging workflows for organizations.",
      },
      {
        question: "Which channels does ChatHub support?",
        answer: "ChatHub supports WhatsApp, Instagram, Telegram, SMS, Email, and other channels — all in one unified inbox.",
      },
      {
        question: "Do I need technical resources to get started?",
        answer: "No. ChatHub is designed for business teams and can be set up without heavy technical involvement.",
      },
    ],
  },

  closingCta: {
    title: "Ready to Change How Your Business Talks to Customers?",
    subheadline:
      "One demo, and you'll see for yourself how chats that used to be scattered across a dozen apps finally fit on a single screen.",
    badges: ["Omnichannel", "AI Chatbot", "Smart CRM", "WhatsApp API"],
    cta: "Request a Demo Now",
  },

  footer: {
    tagline: "Connecting Conversations. Accelerating Growth.",
    taglineSecondary: "Turning Conversations into Conversions.",
    social: [
      { label: "Instagram", href: "https://instagram.com/in.ChatHub" },
      { label: "WhatsApp", href: "https://wa.me/6281510107070" },
    ],
    companyName: "PT Chat Hub Indonesia",
    companyNote: "Member of PT Oval Indonesia",
    address: [
      "Signature Park Grande, Commercial Tower Retail R/UG/06",
      "Jalan MT Haryono 20 Cawang, Jakarta Timur 13630, Indonesia",
    ],
    websiteLabel: "www.inChatHub.com",
    websiteHref: "https://www.inchathub.com",
    navLabel: "Navigation",
    copyright: `© ${new Date().getFullYear()} PT Chat Hub Indonesia. All rights reserved.`,
  },
};
