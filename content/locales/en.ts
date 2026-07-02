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
    eyebrow: "A PROBLEM YOU KNOW WELL",
    title: "Every Channel. One Inbox. Zero Missed Conversations.",
    description:
      "WhatsApp notifications light up on the admin's phone, Instagram DMs pile up on the marketing account, customer service emails don't get answered for two days — and no one has the full conversation history for a single customer. By the time it's sorted out, closing slows down and the customer has already moved to whichever competitor replied first.",
    painPoints: [
      "Chats scattered across many apps and many team phones",
      "Slow responses from having to open one app after another",
      "No conversation history saved anywhere in one place",
      "Handovers between teams are messy and error-prone",
    ],
    flowChannelsLabel: "Every channel comes in",
    flowHubLabel: "ChatHub",
    flowTeamsLabel: "Routed cleanly to the right team",
    flowTagline: "Every Conversation. Connected.",
    teams: [
      { name: "Customer Service" },
      { name: "Sales Team" },
      { name: "Marketing Team" },
      { name: "Management" },
      { name: "AI Assistant" },
      { name: "Analytics" },
    ],
  },

  omnichannel: {
    eyebrow: "OMNICHANNEL FEATURES",
    title: "Every Conversation, One Tidy Workspace",
    description:
      "Every incoming message is automatically organized into a single view your whole team can work from — no more switching apps or juggling logins for every channel.",
    features: [
      {
        title: "Unified Inbox",
        description: "Every chat from WhatsApp, Instagram, Email, and other channels lands in the same view.",
      },
      {
        title: "Multi-Agent Collaboration",
        description: "Several agents can work the same inbox together without stepping on each other's replies.",
      },
      {
        title: "Customer History",
        description: "Full conversation history is saved automatically, no matter which agent replies.",
      },
      {
        title: "Internal Notes",
        description: "Your team can leave notes inside a chat that the customer never sees.",
      },
      {
        title: "Ticket Management",
        description: "Any conversation can become a ticket with a clear status and priority.",
      },
      {
        title: "Performance Analytics",
        description: "Track response speed and workload per agent in real time.",
      },
      {
        title: "Role-Based Access Control",
        description: "Control who can view, reply to, or manage specific conversations.",
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
    title: "Let AI Guard the Inbox While Your Team Focuses on Closing Deals",
    description:
      "The AI Chatbot greets and screens every incoming conversation while your team sleeps or handles other customers. The moment it's worth following up, Smart CRM turns it into a lead you can chase all the way to a deal.",
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
    chatWidget: {
      botName: "ChatHub AI",
      statusLabel: "ready to help",
      botGreeting: "Hi! Is there anything I can help you with about our products or services today?",
      userMessage: "Hi, I have a few questions",
      botReply: "Of course — mind if I ask a bit about what you need first? Our team will pick it up from there.",
      inputPlaceholder: "Type a message…",
      quickReplies: ["Product Information", "Check Order Status", "Talk to Agent"],
    },
    pipeline: {
      title: "Sales Pipeline",
      subtitle: "sample view · dummy data",
      stages: [
        { name: "New Lead", deals: [{ name: "Berkah Jaya Store", value: "$280" }, { name: "Mitra Abadi Co.", value: "$570" }] },
        { name: "Contacted", deals: [{ name: "Sehat Sentosa Clinic", value: "$800" }] },
        { name: "Proposed", deals: [{ name: "Sejahtera Cooperative", value: "$1,400" }] },
        { name: "Negotiation", deals: [{ name: "Nusantara Boga Ltd.", value: "$1,000" }] },
        { name: "Closed Won", deals: [{ name: "Pelita Bangsa School", value: "$2,000" }] },
      ],
    },
  },

  whatsapp: {
    eyebrow: "WHATSAPP BUSINESS SOLUTIONS",
    title: "WhatsApp Is Still Your Customers' Front Door in Indonesia",
    description:
      "Nearly every customer you have already has WhatsApp installed, and they expect your business to be there too. The problem is, one WhatsApp number shared by several staff quickly turns into overlapping replies — or worse, no reply at all.",
    points: [
      { title: "Official API", description: "Connected officially through the WhatsApp Business API, not an unofficial multi-device app that risks getting blocked." },
      { title: "AI Chatbot Ready", description: "Can be wired up with an AI Chatbot right away to greet and screen incoming chats." },
      { title: "CRM Integration", description: "Every conversation is automatically logged as a lead in Smart CRM, no manual data entry." },
      { title: "Connected Omnichannel", description: "One WhatsApp number works side by side with every other channel in the same inbox." },
      { title: "Local Support", description: "A support team that understands how local business actually works, not a ticket sent overseas." },
    ],
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

  industries: {
    eyebrow: "TRUSTED ACROSS INDUSTRIES",
    title: "From Hospitals to Government Agencies, Every Conversation Stays Under Control",
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
