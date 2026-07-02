import type { SiteContent } from "@/content/types";

export const id: SiteContent = {
  meta: {
    title: "ChatHub — Satu Platform untuk Setiap Percakapan Pelanggan",
    description:
      "ChatHub menyatukan chat dari WhatsApp, Instagram, Facebook, Telegram, Email, dan Web Chat ke dalam satu inbox, dilengkapi AI Chatbot dan Smart CRM. Dipercaya rumah sakit, instansi pemerintah, hingga lembaga keuangan di Indonesia.",
    ogTitle: "ChatHub — Connecting Conversations. Accelerating Growth.",
    ogDescription:
      "Satukan chat dari semua channel pelanggan Anda ke satu inbox. AI Chatbot dan Smart CRM bawaan, siap membantu bisnis merespons lebih cepat dan menutup lebih banyak penjualan.",
    twitterDescription:
      "Satu platform omnichannel, AI Chatbot, dan Smart CRM untuk bisnis Indonesia yang kewalahan chat dari banyak kanal.",
  },

  nav: {
    links: [
      { label: "Produk", href: "/#produk" },
      { label: "Harga", href: "/pricing" },
      { label: "Hubungi Kami", href: "/contact-us" },
    ],
    ctaSecondary: "Coba Gratis",
    ctaPrimary: "Request Demo",
  },

  hero: {
    eyebrow: "CHATBOT AI · OMNICHANNEL · CRM",
    headlineMain: "Satu Platform untuk Mengelola",
    headlineAccent: "Setiap Interaksi Pelanggan",
    subheadlineAccent: "Chat Hub",
    subheadlineMain: "menyatukan komunikasi, engagement, dan otomasi pelanggan dalam satu platform.",
    ctaPrimary: "Request Demo Gratis",
    ctaSecondary: "Lihat Cara Kerja",
    channelsLabel: "Terhubung dengan channel yang pelanggan Anda sudah pakai sehari-hari",
  },

  problem: {
    titleMain: "Semua Channel. Satu Inbox.",
    titleAccent: "Tanpa Chat yang Terlewat.",
  },

  omnichannel: {
    eyebrow: "OMNICHANNEL COMMUNICATION PLATFORM",
    titleMain: "Kelola Setiap Percakapan dari Satu",
    titleAccent: "Ruang Kerja Terpadu",
    description:
      "Pelanggan modern berkomunikasi lewat berbagai channel. Tim Anda tidak seharusnya perlu banyak sistem berbeda.",
    features: [
      {
        title: "Unified Inbox",
      },
      {
        title: "Kolaborasi Multi-Agent",
      },
      {
        title: "Riwayat Pelanggan",
      },
      {
        title: "Manajemen Tiket",
      },
      {
        title: "Analitik Performa",
      },
      {
        title: "Kontrol Akses Berbasis Peran",
      },
    ],
    impact: [
      { label: "Respon Lebih Cepat" },
      { label: "Pengalaman Pelanggan Lebih Baik" },
      { label: "Produktivitas Tim Meningkat" },
      { label: "Kepuasan Pelanggan Lebih Tinggi" },
    ],
    inboxMockup: {
      headerTitle: "Unified Inbox",
      unreadSuffix: "belum dibaca",
      conversations: [
        { name: "Dedi Kurniawan", channel: "WA", preview: "Kak, produk yang kemarin masih ready ga ya?", time: "09:41", unread: true },
        { name: "Sarah Amelia", channel: "IG", preview: "Boleh minta info harga grosir min", time: "09:38", unread: true },
        { name: "Bagian Umum BP Batam", channel: "MAIL", preview: "Mohon info status tiket #2291", time: "09:22", unread: false },
        { name: "Klinik Sehat Sentosa", channel: "WEB", preview: "Terima kasih infonya, kami tunggu ya", time: "08:57", unread: false },
        { name: "Andi Wijaya", channel: "TG", preview: "Kalau bayar transfer bisa kak?", time: "08:40", unread: true },
      ],
    },
  },

  aiCrm: {
    eyebrow: "AI CHATBOT & SMART CRM",
    titleMain: "Ubah Percakapan",
    titleAccent: "Jadi Pendapatan",
    chatbot: {
      title: "AI Chatbot",
      points: [
        { title: "Respon Otomatis", description: "Membalas pesan masuk dalam hitungan detik, kapan pun pelanggan menghubungi." },
        { title: "Kualifikasi Lead", description: "Menyaring pertanyaan sekadar iseng dari calon pembeli yang benar-benar serius." },
        { title: "Otomasi FAQ", description: "Pertanyaan yang berulang-ulang setiap hari dijawab otomatis tanpa melibatkan agent." },
        { title: "Swalayan Pelanggan", description: "Pelanggan bisa cek status pesanan atau info produk sendiri, tanpa menunggu balasan." },
        { title: "Basis Pengetahuan AI", description: "AI belajar dari materi dan katalog bisnis Anda sendiri, bukan jawaban generik." },
        { title: "Eskalasi ke Manusia", description: "Percakapan yang butuh sentuhan personal otomatis dialihkan ke agent yang tepat." },
      ],
    },
    crm: {
      title: "Smart CRM",
      points: [
        { title: "Manajemen Lead", description: "Semua calon pelanggan tercatat rapi lengkap dengan sumber dan riwayat kontaknya." },
        { title: "Sales Pipeline", description: "Pantau setiap peluang penjualan dari kontak pertama sampai closing dalam satu papan." },
        { title: "Pelacakan Customer Journey", description: "Lihat seluruh perjalanan pelanggan lintas channel, bukan cuma potongan chat terakhir." },
        { title: "Otomasi Tugas", description: "Tugas tindak lanjut otomatis dibuat begitu status percakapan berubah." },
        { title: "Monitoring Follow-Up", description: "Sistem mengingatkan tim sebelum sebuah lead kelamaan tidak dihubungi." },
        { title: "Analitik Performa", description: "Ukur konversi tiap tahap pipeline untuk tahu di mana penjualan sering mandek." },
      ],
    },
  },

  whatsapp: {
    eyebrow: "WHATSAPP BUSINESS SOLUTIONS",
    titleMain: "Memperkuat Engagement Pelanggan",
    titleAccent: "Lewat WhatsApp",
    description:
      "Cara paling terpercaya untuk terhubung, berinteraksi, dan mengembangkan bisnis Anda.",
    chatMockup: {
      contactName: "Toko Berkah Jaya",
      statusLabel: "WhatsApp Business",
      messages: [
        { from: "customer", text: "Halo kak, mau tanya stok produk yang di katalog masih ada?", time: "10:12" },
        { from: "business", text: "Halo! Terima kasih sudah menghubungi kami. Boleh info produk yang dimaksud ya kak? 🙏", time: "10:12" },
        { from: "customer", text: "Yang warna merah, ukuran L", time: "10:13" },
        { from: "business", text: "Untuk ukuran L warna merah masih ready kak, siap dikirim hari ini juga", time: "10:13" },
      ],
      quickReplies: ["Info Produk", "Status Pesanan", "Hubungi Support", "Bicara dengan Agent"],
    },
  },

  whyChatHub: {
    eyebrow: "Kenapa Mereka Memilih Kami",
    titleMain: "Sistem dibangun untuk",
    titleAccent: "tingkatkan penjualan.",
    points: [
      { title: "Smart Automation", description: "Balas, follow-up, dan reminder otomatis tanpa chat terlewat." },
      { title: "Organized Customer", description: "Data pelanggan tersimpan rapi dengan histori, tag, dan pipeline jelas." },
      { title: "Increase Growth", description: "Tingkatkan kapasitas layanan tanpa perlu tambah orang." },
      { title: "Scalable System", description: "Satu sistem fleksibel yang mampu mengikuti skala bisnis Anda." },
      { title: "Affordable Rate", description: "Tarif kompetitif dan transparan tanpa biaya tersembunyi." },
    ],
  },

  pricingHero: {
    heading: "Biaya fleksibel untuk AI Chatbot, Omnichannel, CRM, dan Chat Center — siap pakai dalam hitungan menit, tanpa ribet.",
    subheading: "Mulai dari skala kecil hingga enterprise dengan Broadcast & Data Scraper — biaya efisien, performa maksimal.",
  },

  contactHero: {
    heading: "Ada Pertanyaan? Tim Kami Siap Membantu.",
    subheading: "Hubungi kami lewat WhatsApp, Instagram, atau isi form di bawah — tim kami akan merespons secepat mungkin.",
  },

  contact: {
    eyebrow: "HUBUNGI KAMI",
    titleMain: "Mari Ngobrol Soal",
    titleAccent: "Kebutuhan Bisnis Anda",
    description:
      "Punya pertanyaan soal fitur, harga, atau mau lihat demo langsung? Tim kami siap bantu, kapan pun Anda butuh.",
    infoCards: [
      { label: "WhatsApp", value: "+62 815 1010 7070", href: "https://wa.me/6281510107070" },
      { label: "Instagram", value: "@in.ChatHub", href: "https://instagram.com/in.ChatHub" },
      { label: "Email Support", value: "support@inchathub.com", href: "mailto:support@inchathub.com" },
      { label: "Email Sales", value: "sales@inchathub.com", href: "mailto:sales@inchathub.com" },
    ],
    mapTitle: "Peta lokasi kantor ChatHub",
    form: {
      nameLabel: "Nama Lengkap",
      namePlaceholder: "Masukkan nama Anda",
      emailLabel: "Email",
      emailPlaceholder: "nama@perusahaan.com",
      phoneLabel: "Nomor WhatsApp",
      phonePlaceholder: "08xx-xxxx-xxxx",
      messageLabel: "Pesan",
      messagePlaceholder: "Ceritakan kebutuhan bisnis Anda...",
      submitLabel: "Kirim Pesan",
      successMessage: "Terima kasih! Pesan Anda sudah terkirim, tim kami akan segera menghubungi Anda.",
    },
  },

  pricing: {
    eyebrow: "HARGA & PAKET",
    titleMain: "Pilih Paket yang",
    titleAccent: "Paling Sesuai untuk Bisnis Anda",
    billingSuffix: "/Bulan",
    popularLabel: "TERPOPULER",
    ctaLabel: "Mulai Sekarang",
    plans: [
      {
        name: "Starter",
        tagline: "Start awal dengan fitur chatbot siap pakai",
        popular: false,
        originalPrice: "Rp1.500.000",
        price: "Rp900.000",
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
          { label: "AI Response", value: "1.000x", included: true },
          { label: "Messages/Month", value: "3.000x", included: true },
          { label: "Email/Month", value: "1.000x", included: true },
          { label: "Scraping Data/Day", included: false },
          { label: "Google Sheets Integration", included: false },
          { label: "Shipping Cost Calculator", included: false },
          { label: "Custom Domain", included: false },
          { label: "24/7 Support", included: false },
        ],
      },
      {
        name: "Pro",
        tagline: "Maksimalkan performa dengan fitur lebih lengkap",
        popular: true,
        originalPrice: "Rp2.600.000",
        price: "Rp1.900.000",
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
          { label: "AI Response", value: "3.000x", included: true },
          { label: "Messages/Month", value: "5.000x", included: true },
          { label: "Email/Month", value: "3.000x", included: true },
          { label: "Scraping Data/Day", included: false },
          { label: "Google Sheets Integration", included: false },
          { label: "Shipping Cost Calculator", included: false },
        ],
      },
      {
        name: "Business",
        tagline: "Solusi custom dengan prioritas dukungan support",
        popular: false,
        originalPrice: "Rp3.500.000",
        price: "Rp2.900.000",
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
          { label: "AI Response", value: "10.000x", included: true },
          { label: "Messages/Month", value: "10.000x", included: true },
          { label: "Email/Month", value: "5.000x", included: true },
          { label: "Scraping Data/Day", value: "30x", included: true },
          { label: "Google Sheets Integration", included: true },
          { label: "Shipping Cost Calculator", included: true },
        ],
      },
      {
        name: "Enterprise",
        tagline: "Paket fleksibel plus support tim khusus untuk bisnis",
        popular: false,
        originalPrice: "Rp5.500.000",
        price: "Rp4.900.000",
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
    eyebrow: "DIPERCAYA LINTAS INDUSTRI",
    titleMain: "Dari Rumah Sakit sampai Instansi Pemerintah,",
    titleAccent: "Percakapan Tetap Terkelola",
    description:
      "ChatHub dipakai oleh organisasi dengan volume percakapan tinggi dan standar layanan yang ketat — mulai dari layanan kesehatan, instansi pemerintah, lembaga keuangan, sampai institusi pendidikan.",
    stats: [
      { value: "100+", label: "Organisasi" },
      { value: "Jutaan", label: "Pesan Terkirim" },
      { value: "Pemerintah & Kesehatan", label: "Sektor yang Mempercayai Kami" },
    ],
    list: [
      { name: "Pendidikan" },
      { name: "Kesehatan" },
      { name: "Hospitality" },
      { name: "Manufaktur" },
      { name: "Retail & E-commerce" },
      { name: "Perbankan & Keuangan" },
      { name: "NGO / Non-Profit" },
      { name: "Pemerintahan" },
      { name: "Logistik & Transportasi" },
      { name: "Media & Hiburan" },
    ],
    logoStripLabel: "Beberapa klien kami",
    clientsMoreLabel: "+ mitra lainnya",
  },

  faq: {
    eyebrow: "FAQ",
    titleMain: "Pertanyaan yang",
    titleAccent: "Sering Ditanyakan",
    items: [
      {
        question: "Apakah chatbot bisa benar-benar menjawab customer?",
        answer: "Ya. AI dilatih menggunakan data bisnis Anda sehingga dapat memberikan jawaban yang relevan.",
      },
      {
        question: "Apakah sistem ini mendukung WhatsApp?",
        answer: "Ya. inChatHub mendukung WhatsApp serta berbagai channel komunikasi lainnya seperti Instagram, Telegram, Facebook, Live Chat, Email, dan banyak lagi.",
      },
      {
        question: "Saya tidak paham IT. Apakah saya bisa gunakan?",
        answer: "Pasti bisa. Platform ini dirancang mudah digunakan tanpa coding!",
      },
      {
        question: "Bisakah saya upgrade atau ganti paket nanti?",
        answer: "Bisa. Anda dapat menyesuaikan paket seiring berkembangnya bisnis Anda. Tim kami akan membantu memastikan transisi berjalan lancar.",
      },
      {
        question: "Apakah ChatHub cocok untuk kebutuhan enterprise atau personal?",
        answer: "ChatHub dirancang untuk penggunaan profesional maupun personal, mendukung alur kerja perpesanan yang scalable dan terstruktur untuk organisasi.",
      },
      {
        question: "Channel apa saja yang didukung ChatHub?",
        answer: "ChatHub mendukung WhatsApp, Instagram, Telegram, SMS, Email, dan channel lainnya — semua dalam satu inbox terpadu.",
      },
      {
        question: "Apakah saya butuh tim teknis untuk mulai menggunakannya?",
        answer: "Tidak. ChatHub dirancang untuk tim bisnis dan bisa disiapkan tanpa perlu keterlibatan teknis yang berat.",
      },
    ],
  },

  closingCta: {
    title: "Siap Mengubah Cara Bisnis Anda Berkomunikasi dengan Pelanggan?",
    subheadline:
      "Satu sesi demo, dan Anda akan lihat sendiri bagaimana chat yang tadinya berantakan di banyak aplikasi akhirnya rapi dalam satu layar.",
    badges: ["Omnichannel", "AI Chatbot", "Smart CRM", "WhatsApp API"],
    cta: "Request Demo Sekarang",
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
      "Jalan MT Haryono 20 Cawang, Jakarta Timur 13630",
    ],
    emails: [
      { label: "Support", value: "support@inchathub.com" },
      { label: "Sales", value: "sales@inchathub.com" },
    ],
    websiteLabel: "www.inChatHub.com",
    websiteHref: "https://www.inchathub.com",
    contactLabel: "Hubungi Kami →",
    navLabel: "Navigasi",
    copyright: `© ${new Date().getFullYear()} PT Chat Hub Indonesia. Seluruh hak cipta dilindungi.`,
  },
};
