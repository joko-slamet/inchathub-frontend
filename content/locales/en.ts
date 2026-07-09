import { TRIAL_URL, type SiteContent } from "@/content/types";

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
      { label: "Product", href: "/product" },
      { label: "Promo", href: "/promo" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact-us" },
      { label: "About Us", href: "/about-us" },
    ],
    loginLabel: "Login",
    ctaPrimary: "Try for Free",
  },

  hero: {
    eyebrow: "AI CHATBOT · OMNICHANNEL · CRM",
    headlineMain: "One Platform to Manage",
    headlineAccent: "Every Customer Interaction",
    subheadlineAccent: "Chat Hub",
    subheadlineMain: "unifies customer communication, engagement, and automation in one platform.",
    ctaPrimary: "Try for Free",
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

  pricingHero: {
    heading: "Flexible pricing for AI Chatbot, Omnichannel, CRM, and Chat Center — ready to use within minutes, no hassle.",
    subheading: "From small scale to enterprise, with Broadcast & Data Scraper — efficient cost, maximum performance.",
  },

  contactHero: {
    heading: "Have a Question? Our Team Is Ready to Help.",
    subheading: "Reach us on WhatsApp, Instagram, or fill out the form below — our team will get back to you as soon as possible.",
  },

  aboutHero: {
    heading: "We Create the Future of Communication",
  },

  productHero: {
    heading: "One Product, Everything Your Business Needs",
    subheading: "From a unified inbox, AI Chatbot, and Smart CRM, to WhatsApp Business — every ChatHub feature in one place.",
  },

  blogHero: {
    heading: "ChatHub Blog & Insights",
    subheading: "Tips, case studies, and trends on omnichannel, AI chatbots, and CRM for your business.",
  },

  promoHero: {
    heading: "ChatHub Promos",
    subheading: "Ongoing special offers for your ChatHub plan.",
  },

  promo: {
    eyebrow: "Special Promo",
    titleMain: "Limited-Time Offers for",
    titleAccent: "Your Business",
    description: "Don't miss out on our current promos — the promo code works right away.",
    viewAllLabel: "View All Promos",
  },

  tryFree: {
    eyebrow: "Try It Free",
    titleMain: "Experience It Yourself",
    titleAccent: "Before You Subscribe",
    description: "Explore every ChatHub feature risk-free — start your free trial today.",
    ctaLabel: "Start Free Trial",
    bullets: ["No credit card required", "Full access to premium features", "Cancel anytime"],
  },

  blog: {
    eyebrow: "Blog & Insights",
    titleMain: "Insights for a",
    titleAccent: "Connected Business",
    description: "Practical tips, case studies, and customer service trends from the ChatHub team.",
    viewAllLabel: "View All Articles",
    posts: [
      {
        slug: "5-reasons-your-business-needs-omnichannel-inbox-2026",
        category: "Omnichannel",
        title: "5 Reasons Your Business Needs an Omnichannel Inbox in 2026",
        excerpt:
          "Customers now reach out through many channels at once. Here's why a unified inbox is a necessity, not a nice-to-have.",
        content: [
          "Customers today aren't loyal to a single channel. Someone might message on WhatsApp in the morning, follow up on Instagram DM by noon, then call when they need a fast answer in the afternoon. If your team handles each channel separately, conversation history gets scattered and customers end up repeating themselves.",
          "An omnichannel inbox brings all of that into one view, so agents can see a customer's full history without switching apps. The effect is immediate: faster response times, no missed messages, and customers who feel recognized even when they switch channels.",
          "In 2026, customer expectations around response speed keep rising while the number of communication channels keeps growing. Businesses still juggling separate apps for each channel will struggle to keep up with those who've already unified their inbox — it's no longer just about efficiency, it's about keeping pace with rising customer expectations.",
        ],
        author: "ChatHub Team",
        date: "June 28, 2026",
        readTime: "5 min read",
      },
      {
        slug: "how-to-use-whatsapp-business-api-to-boost-conversions",
        category: "WhatsApp",
        title: "How to Use WhatsApp Business API to Boost Conversions",
        excerpt:
          "From quick replies to segmented broadcasts, here are practical strategies to get the most out of WhatsApp Business API.",
        content: [
          "WhatsApp Business API is more than just an official version of regular WhatsApp — it unlocks capabilities that don't exist in the personal app, like approved message templates, CRM integration, and automation at scale. Yet many businesses only use it as a drop-in replacement for their old number, without tapping into any of that.",
          "One of the most practical ways to lift conversions is using quick replies and templates for recurring questions, so customers get instant answers without waiting on an agent. Segmented broadcasts based on purchase history or interest also consistently outperform mass broadcasts sent to every contact.",
          "Response time matters just as much. Our internal data shows customers who get a reply within the first five minutes convert at a noticeably higher rate than those who wait longer. Pairing automation for first-touch questions with fast escalation to a human agent for complex cases is the formula that works best in practice.",
        ],
        author: "ChatHub Team",
        date: "June 20, 2026",
        readTime: "6 min read",
      },
      {
        slug: "ai-chatbot-vs-live-agent-when-to-use-which",
        category: "AI Chatbot",
        title: "AI Chatbot vs Live Agent: When to Use Which",
        excerpt:
          "AI chatbots are fast and consistent, human agents are empathetic and flexible. Here's when each one should take the lead.",
        content: [
          "The question of \"chatbot or human agent\" is framed wrong from the start — they aren't mutually exclusive options, but two tools with different strengths. AI chatbots excel at speed, consistency, and round-the-clock availability without fatigue. Human agents excel at empathy, handling complex cases, and situations that need judgment calls outside a fixed script.",
          "Chatbots are most effective on repetitive questions: business hours, order status, how to use a product, or common FAQs. This is where a chatbot can filter out 60-80% of incoming conversations before they ever reach an agent, freeing up your human team to focus on cases that genuinely need a personal touch.",
          "The key is a seamless handoff: the moment a chatbot detects a question beyond its scope, or senses a frustrated customer, the conversation should move to a human agent complete with prior chat history — not starting from zero. That combination is what makes service feel both fast and genuinely human.",
        ],
        author: "ChatHub Team",
        date: "June 12, 2026",
        readTime: "4 min read",
      },
      {
        slug: "case-study-hospital-cut-response-time-70-percent",
        category: "Case Study",
        title: "Case Study: A Hospital That Cut Response Time by 70% with ChatHub",
        excerpt:
          "How a ChatHub partner hospital unified its patient communication channels and sped up its customer service response time.",
        content: [
          "Before adopting ChatHub, this hospital's customer service team handled patient questions across WhatsApp, phone calls, and website forms separately — each owned by a different team with no shared visibility. As a result, patients who had already asked a question on one channel often had to repeat themselves when they switched to another.",
          "After consolidating every channel into a single ChatHub inbox, the team could see each patient's full history on one screen, including appointment status and prior communication. A chatbot was also enabled to answer common questions like doctor schedules and clinic locations, freeing the human team to focus on more sensitive medical questions.",
          "The results showed up in under three months: average response time dropped by 70%, and patient satisfaction with communication improved significantly according to the hospital's internal survey. This case shows that unifying channels has the biggest impact precisely in sectors handling sensitive information that demand fast responses, like healthcare.",
        ],
        author: "ChatHub Team",
        date: "June 3, 2026",
        readTime: "7 min read",
      },
      {
        slug: "building-a-clean-sales-pipeline-with-integrated-crm",
        category: "CRM",
        title: "Building a Clean Sales Pipeline with an Integrated CRM",
        excerpt:
          "A messy pipeline lets leads slip through the cracks. Here's how to structure clear, measurable sales stages.",
        content: [
          "Sales teams rarely lose leads because of a shortage of prospects — they lose them because there's no clear system for tracking which stage each lead is in. A lead comes in through chat, gets discussed in an internal group chat, then quietly falls through the cracks. It's an extremely common pattern without an integrated CRM.",
          "A healthy pipeline starts with clear stages: lead in, qualification, proposal, negotiation, and closing — with explicit criteria for when a lead is allowed to move to the next stage. What makes a pipeline genuinely useful is when every conversation from WhatsApp, email, or any other channel is automatically logged against the same lead, instead of scattered across different tools.",
          "With a CRM integrated directly into your omnichannel inbox, sales reps can see a lead's status alongside its full conversation history in one place, and management can spot exactly which stage leads get stuck at most often. From there, improving your sales process becomes a data-driven decision, not a guess based on who \"looks busy.\"",
        ],
        author: "ChatHub Team",
        date: "May 25, 2026",
        readTime: "5 min read",
      },
      {
        slug: "customer-service-trends-in-finance-sector-this-year",
        category: "Industry",
        title: "Customer Service Trends in the Finance Sector This Year",
        excerpt:
          "From instant responses to data compliance, here are the customer service trends finance businesses need to watch.",
        content: [
          "Finance businesses face a double pressure: customers expect e-commerce-level response speed, while regulators demand strict data compliance and clear audit trails. That means customer service in finance can't simply copy a typical consumer business playbook without adjustments.",
          "One growing trend is using chatbots for simple transactional questions — balance checks, application status, or loan simulations — while anything touching sensitive data gets routed to a licensed agent under a clear identity-verification protocol. That separation matters for staying compliant without sacrificing speed.",
          "Another trend gaining ground is keeping a complete, well-organized conversation audit trail — every interaction needs to be traceable for compliance or dispute resolution. Platforms that can combine fast response times with tidy record-keeping are becoming the new standard for customer service in the finance sector.",
        ],
        author: "ChatHub Team",
        date: "May 14, 2026",
        readTime: "6 min read",
      },
    ],
  },

  visionMission: {
    visionEyebrow: "OUR VISION",
    visionMain: "To Become Southeast Asia's Most Trusted",
    visionAccent: "AI-Powered Communication Platform",
    missionEyebrow: "OUR MISSION",
    missionItems: [
      { textMain: "Simplify customer communication through", textAccent: "one unified platform." },
      { textMain: "Empower businesses with", textAccent: "AI-driven engagement and automation." },
      { textMain: "Improve sales, service quality, and", textAccent: "operational efficiency." },
      { textMain: "Enable meaningful and scalable", textAccent: "customer relationships." },
      { textMain: "Accelerate digital transformation", textAccent: "across industries." },
    ],
  },

  about: {
    paragraphs: [
      "PT Chat Hub Indonesia, based in Jakarta, builds the next generation of business communication through a unified omnichannel experience. We connect every customer interaction into one seamless flow—ensuring conversations remain consistent, contextual, and effortless across all channels.",
      "Our platform is fully engineered in-house, giving us complete control to customize and evolve each solution to fit real client needs. This enables faster adaptation, deeper personalization, and a level of flexibility that off-the-shelf platforms simply can't match.",
      "Powered by AI-driven channels and intelligent chatbots, our technology understands intent, responds instantly, and works 24/7 as a natural extension of your team—driving efficiency, engagement, and measurable business impact.",
      "With global aggregator partnerships across Singapore, China, India, Dubai, the United States, and beyond, we make cross-border communication and local market entry faster and easier. This is where conversations become a true competitive advantage.",
    ],
    countriesLabel: "Global Partnerships",
    countries: ["Singapore", "China", "India", "Dubai", "United States"],
    countriesMoreLabel: "+ and beyond",
  },

  contact: {
    eyebrow: "GET IN TOUCH",
    titleMain: "Let's Talk About",
    titleAccent: "Your Business Needs",
    description:
      "Have questions about features, pricing, or want a live demo? Our team is ready to help, whenever you need us.",
    infoCards: [
      { label: "WhatsApp", value: "+62 815 1010 7070", href: "https://wa.me/6281510107070" },
      { label: "Instagram", value: "@in.ChatHub", href: "https://instagram.com/in.ChatHub" },
      { label: "Support Email", value: "support@inchathub.com", href: "mailto:support@inchathub.com" },
      { label: "Sales Email", value: "sales@inchathub.com", href: "mailto:sales@inchathub.com" },
    ],
    mapTitle: "Map of ChatHub's office location",
    form: {
      nameLabel: "Full Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email",
      emailPlaceholder: "name@company.com",
      phoneLabel: "WhatsApp Number",
      phonePlaceholder: "+62 8xx-xxxx-xxxx",
      messageLabel: "Message",
      messagePlaceholder: "Tell us about your business needs...",
      submitLabel: "Send Message",
      successMessage: "Thank you! Your message has been sent — our team will reach out shortly.",
    },
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
    whatsappPhone: "6281510107070",
    whatsappMessage: "Hi, I'd like to request a demo of ChatHub.",
    trialUrl: TRIAL_URL,
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
    emails: [
      { label: "Support", value: "support@inchathub.com" },
      { label: "Sales", value: "sales@inchathub.com" },
    ],
    websiteLabel: "www.inChatHub.com",
    websiteHref: "https://www.inchathub.com",
    contactLabel: "Contact Us →",
    navLabel: "Navigation",
    copyright: `© ${new Date().getFullYear()} PT Chat Hub Indonesia. All rights reserved.`,
  },
};
