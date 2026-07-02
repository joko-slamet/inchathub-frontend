// Single source of truth for all landing page copy.
// Edit here to change any text on the page — components only render this data.

export type IconKey =
  | "message-circle"
  | "camera"
  | "message-square"
  | "send"
  | "mail"
  | "globe"
  | "video"
  | "at-sign"
  | "hash"
  | "inbox"
  | "users"
  | "history"
  | "sticky-note"
  | "ticket"
  | "bar-chart-3"
  | "shield-check"
  | "bot"
  | "filter"
  | "help-circle"
  | "user-check"
  | "book-open"
  | "workflow"
  | "route"
  | "list-checks"
  | "bell"
  | "trending-up"
  | "zap"
  | "check-check"
  | "clock"
  | "sparkles"
  | "graduation-cap"
  | "heart-pulse"
  | "hotel"
  | "factory"
  | "shopping-bag"
  | "landmark"
  | "hand-heart"
  | "building-2"
  | "truck"
  | "clapperboard"
  | "smartphone"
  | "gauge"
  | "arrow-right";

export interface Channel {
  name: string;
  badge: string;
  icon: IconKey;
}

export const channels: Channel[] = [
  { name: "WhatsApp", badge: "WA", icon: "message-circle" },
  { name: "Instagram", badge: "IG", icon: "camera" },
  { name: "Facebook", badge: "FB", icon: "message-square" },
  { name: "Telegram", badge: "TG", icon: "send" },
  { name: "Email", badge: "MAIL", icon: "mail" },
  { name: "Web Chat", badge: "WEB", icon: "globe" },
  { name: "Teams", badge: "TEAMS", icon: "video" },
  { name: "Threads", badge: "TH", icon: "at-sign" },
  { name: "X", badge: "X", icon: "hash" },
];

export const nav = {
  logoText: "chathub",
  links: [
    { label: "Produk", href: "#produk" },
    { label: "Solusi", href: "#solusi" },
    { label: "Industri", href: "#industri" },
    { label: "Kontak", href: "#kontak" },
  ],
  ctaSecondary: "Coba Gratis",
  ctaPrimary: "Request Demo",
};

export const hero = {
  eyebrow: "CHATBOT AI · OMNICHANNEL · CRM",
  headline: "Pelanggan Chat dari Sembilan Arah. Tim Anda Cukup Buka Satu Layar.",
  subheadline:
    "ChatHub mengumpulkan WhatsApp, Instagram, Facebook, Telegram, Email, sampai Web Chat ke dalam satu inbox yang sama — lengkap dengan AI Chatbot yang membalas duluan dan Smart CRM yang merapikan setiap obrolan jadi transaksi.",
  ctaPrimary: "Request Demo Gratis",
  ctaSecondary: "Lihat Cara Kerja",
  channelsLabel: "Terhubung dengan channel yang pelanggan Anda sudah pakai sehari-hari",
  inboxCard: {
    title: "Inbox Terpadu",
    subtitle: "3 percakapan baru",
    messages: [
      {
        name: "Dedi Kurniawan",
        channel: "WA",
        preview: "Kak, produk yang kemarin masih ready ga ya?",
        time: "09:41",
        unread: true,
      },
      {
        name: "Sarah Amelia",
        channel: "IG",
        preview: "Boleh minta info harga grosir min",
        time: "09:38",
        unread: true,
      },
      {
        name: "RS Mitra Sehat",
        channel: "MAIL",
        preview: "Konfirmasi jadwal implementasi minggu depan",
        time: "09:22",
        unread: false,
      },
    ],
  },
};

export const problem = {
  eyebrow: "MASALAH YANG SERING TERJADI",
  title: "Every Channel. One Inbox. Zero Missed Conversations.",
  description:
    "Notifikasi WhatsApp menyala di HP admin, DM Instagram menumpuk di akun marketing, email customer service baru dibalas dua hari kemudian — dan tidak ada satu orang pun yang tahu riwayat lengkap percakapan seorang pelanggan. Saat itu terjadi, closing melambat dan pelanggan pindah ke kompetitor yang membalas lebih dulu.",
  painPoints: [
    "Chat tercecer di banyak aplikasi dan banyak HP tim",
    "Respons lambat karena harus bolak-balik buka aplikasi satu per satu",
    "Tidak ada histori percakapan yang tersimpan rapi",
    "Serah terima antar tim jadi ribet dan rawan info yang salah",
  ],
  flowChannelsLabel: "Semua channel masuk",
  flowHubLabel: "ChatHub",
  flowTeamsLabel: "Terdistribusi rapi ke tim yang tepat",
  teams: [
    { name: "Customer Service", icon: "message-circle" as IconKey },
    { name: "Sales", icon: "trending-up" as IconKey },
    { name: "Marketing", icon: "bar-chart-3" as IconKey },
    { name: "Management", icon: "building-2" as IconKey },
    { name: "AI Assistant", icon: "bot" as IconKey },
    { name: "Analytics", icon: "gauge" as IconKey },
  ],
};

export const omnichannel = {
  eyebrow: "FITUR OMNICHANNEL",
  title: "Semua Percakapan, Satu Ruang Kerja yang Rapi",
  description:
    "Setiap pesan yang masuk otomatis tersusun dalam satu tampilan yang bisa dikerjakan bersama tim, tanpa perlu berpindah-pindah aplikasi atau login banyak akun berbeda.",
  features: [
    {
      icon: "inbox" as IconKey,
      title: "Unified Inbox",
      description: "Semua chat dari WhatsApp, Instagram, Email, dan channel lain masuk ke satu tampilan yang sama.",
    },
    {
      icon: "users" as IconKey,
      title: "Kolaborasi Multi-Agent",
      description: "Beberapa agent bisa menangani satu inbox bersama tanpa saling tabrak balasan.",
    },
    {
      icon: "history" as IconKey,
      title: "Riwayat Pelanggan",
      description: "Histori percakapan lengkap tersimpan otomatis, siapa pun agent yang membalas duluan.",
    },
    {
      icon: "sticky-note" as IconKey,
      title: "Catatan Internal",
      description: "Tim bisa meninggalkan catatan di dalam chat tanpa pernah terlihat oleh pelanggan.",
    },
    {
      icon: "ticket" as IconKey,
      title: "Manajemen Tiket",
      description: "Setiap percakapan bisa diubah jadi tiket dengan status dan prioritas yang jelas.",
    },
    {
      icon: "bar-chart-3" as IconKey,
      title: "Analitik Performa",
      description: "Pantau kecepatan respons dan beban kerja tiap agent secara real-time.",
    },
    {
      icon: "shield-check" as IconKey,
      title: "Kontrol Akses Berbasis Peran",
      description: "Atur siapa yang boleh melihat, membalas, atau mengelola percakapan tertentu.",
    },
  ],
  impact: [
    { label: "Respon Lebih Cepat", icon: "zap" as IconKey },
    { label: "Pengalaman Pelanggan Lebih Baik", icon: "sparkles" as IconKey },
    { label: "Produktivitas Tim Meningkat", icon: "trending-up" as IconKey },
    { label: "Kepuasan Pelanggan Lebih Tinggi", icon: "check-check" as IconKey },
  ],
  inboxMockup: {
    conversations: [
      { name: "Dedi Kurniawan", channel: "WA", preview: "Kak, produk yang kemarin masih ready ga ya?", time: "09:41", unread: true },
      { name: "Sarah Amelia", channel: "IG", preview: "Boleh minta info harga grosir min", time: "09:38", unread: true },
      { name: "Bagian Umum BP Batam", channel: "MAIL", preview: "Mohon info status tiket #2291", time: "09:22", unread: false },
      { name: "Klinik Sehat Sentosa", channel: "WEB", preview: "Terima kasih infonya, kami tunggu ya", time: "08:57", unread: false },
      { name: "Andi Wijaya", channel: "TG", preview: "Kalau bayar transfer bisa kak?", time: "08:40", unread: true },
    ],
  },
};

export const aiCrm = {
  eyebrow: "AI CHATBOT & SMART CRM",
  title: "Biar AI yang Menjaga Chat Masuk, Tim Anda Fokus Menutup Penjualan",
  description:
    "AI Chatbot menyambut dan menyaring setiap percakapan yang masuk selagi tim Anda tidur atau sedang menangani pelanggan lain. Begitu layak ditindaklanjuti, Smart CRM langsung merapikannya jadi lead yang bisa dikejar sampai deal.",
  chatbot: {
    title: "AI Chatbot",
    points: [
      { icon: "bot" as IconKey, title: "Respon Otomatis", description: "Membalas pesan masuk dalam hitungan detik, kapan pun pelanggan menghubungi." },
      { icon: "filter" as IconKey, title: "Kualifikasi Lead", description: "Menyaring pertanyaan sekadar iseng dari calon pembeli yang benar-benar serius." },
      { icon: "help-circle" as IconKey, title: "Otomasi FAQ", description: "Pertanyaan yang berulang-ulang setiap hari dijawab otomatis tanpa melibatkan agent." },
      { icon: "smartphone" as IconKey, title: "Swalayan Pelanggan", description: "Pelanggan bisa cek status pesanan atau info produk sendiri, tanpa menunggu balasan." },
      { icon: "book-open" as IconKey, title: "Basis Pengetahuan AI", description: "AI belajar dari materi dan katalog bisnis Anda sendiri, bukan jawaban generik." },
      { icon: "user-check" as IconKey, title: "Eskalasi ke Manusia", description: "Percakapan yang butuh sentuhan personal otomatis dialihkan ke agent yang tepat." },
    ],
  },
  crm: {
    title: "Smart CRM",
    points: [
      { icon: "users" as IconKey, title: "Manajemen Lead", description: "Semua calon pelanggan tercatat rapi lengkap dengan sumber dan riwayat kontaknya." },
      { icon: "route" as IconKey, title: "Sales Pipeline", description: "Pantau setiap peluang penjualan dari kontak pertama sampai closing dalam satu papan." },
      { icon: "workflow" as IconKey, title: "Pelacakan Customer Journey", description: "Lihat seluruh perjalanan pelanggan lintas channel, bukan cuma potongan chat terakhir." },
      { icon: "list-checks" as IconKey, title: "Otomasi Tugas", description: "Tugas tindak lanjut otomatis dibuat begitu status percakapan berubah." },
      { icon: "bell" as IconKey, title: "Monitoring Follow-Up", description: "Sistem mengingatkan tim sebelum sebuah lead kelamaan tidak dihubungi." },
      { icon: "bar-chart-3" as IconKey, title: "Analitik Performa", description: "Ukur konversi tiap tahap pipeline untuk tahu di mana penjualan sering mandek." },
    ],
  },
  pipeline: {
    stages: [
      { name: "Baru", deals: [{ name: "Toko Berkah Jaya", value: "Rp 4,2 jt" }, { name: "CV Mitra Abadi", value: "Rp 8,5 jt" }] },
      { name: "Follow-up", deals: [{ name: "Klinik Sehat Sentosa", value: "Rp 12 jt" }] },
      { name: "Negosiasi", deals: [{ name: "Koperasi Sejahtera", value: "Rp 21 jt" }, { name: "PT Nusantara Boga", value: "Rp 15 jt" }] },
      { name: "Deal", deals: [{ name: "Sekolah Pelita Bangsa", value: "Rp 30 jt" }] },
    ],
  },
};

export const whatsapp = {
  eyebrow: "WHATSAPP BUSINESS SOLUTIONS",
  title: "WhatsApp Masih Jadi Pintu Depan Bisnis Anda di Indonesia",
  description:
    "Nyaris semua pelanggan Anda sudah punya WhatsApp terpasang, dan mereka berharap bisnis Anda ada di sana juga. Masalahnya, satu nomor WhatsApp yang dipegang bergantian oleh beberapa staf gampang berujung pada balasan yang tumpang tindih atau malah tidak terbalas sama sekali.",
  points: [
    { icon: "shield-check" as IconKey, title: "Official API", description: "Terhubung resmi lewat WhatsApp Business API, bukan aplikasi multi-device tidak resmi yang berisiko diblokir." },
    { icon: "bot" as IconKey, title: "AI Chatbot Ready", description: "Bisa langsung dipasangi AI Chatbot untuk menyambut dan menyaring chat yang masuk." },
    { icon: "workflow" as IconKey, title: "Integrasi CRM", description: "Setiap percakapan otomatis tercatat sebagai lead di Smart CRM, tanpa entri data manual." },
    { icon: "inbox" as IconKey, title: "Terhubung Omnichannel", description: "Satu nomor WhatsApp bekerja berdampingan dengan channel lain dalam inbox yang sama." },
    { icon: "hand-heart" as IconKey, title: "Dukungan Lokal", description: "Tim support berbahasa Indonesia yang paham cara kerja bisnis lokal, bukan tiket ke luar negeri." },
  ],
  chatMockup: {
    contactName: "Toko Berkah Jaya",
    messages: [
      { from: "customer", text: "Halo kak, mau tanya stok produk yang di katalog masih ada?", time: "10:12" },
      { from: "business", text: "Halo! Terima kasih sudah menghubungi kami. Boleh info produk yang dimaksud ya kak? 🙏", time: "10:12" },
      { from: "customer", text: "Yang warna merah, ukuran L", time: "10:13" },
      { from: "business", text: "Untuk ukuran L warna merah masih ready kak, siap dikirim hari ini juga", time: "10:13" },
    ],
  },
};

export const industries = {
  eyebrow: "DIPERCAYA LINTAS INDUSTRI",
  title: "Dari Rumah Sakit sampai Instansi Pemerintah, Percakapan Tetap Terkelola",
  description:
    "ChatHub dipakai oleh organisasi dengan volume percakapan tinggi dan standar layanan yang ketat — mulai dari layanan kesehatan, instansi pemerintah, lembaga keuangan, sampai institusi pendidikan.",
  stats: [
    { value: "100+", label: "Organisasi" },
    { value: "Jutaan", label: "Pesan Terkirim" },
    { value: "Pemerintah & Kesehatan", label: "Sektor yang Mempercayai Kami" },
  ],
  list: [
    { name: "Pendidikan", icon: "graduation-cap" as IconKey },
    { name: "Kesehatan", icon: "heart-pulse" as IconKey },
    { name: "Hospitality", icon: "hotel" as IconKey },
    { name: "Manufaktur", icon: "factory" as IconKey },
    { name: "Retail & E-commerce", icon: "shopping-bag" as IconKey },
    { name: "Perbankan & Keuangan", icon: "landmark" as IconKey },
    { name: "NGO / Non-Profit", icon: "hand-heart" as IconKey },
    { name: "Pemerintahan", icon: "building-2" as IconKey },
    { name: "Logistik & Transportasi", icon: "truck" as IconKey },
    { name: "Media & Hiburan", icon: "clapperboard" as IconKey },
  ],
  logoPlaceholderCount: 8,
};

export const closingCta = {
  title: "Siap Mengubah Cara Bisnis Anda Berkomunikasi dengan Pelanggan?",
  subheadline:
    "Satu sesi demo, dan Anda akan lihat sendiri bagaimana chat yang tadinya berantakan di banyak aplikasi akhirnya rapi dalam satu layar.",
  badges: ["Omnichannel", "AI Chatbot", "Smart CRM", "WhatsApp API"],
  cta: "Request Demo Sekarang",
};

export const footer = {
  tagline: "Connecting Conversations. Accelerating Growth.",
  taglineSecondary: "Turning Conversations into Conversions.",
  social: [
    { label: "Instagram", href: "https://instagram.com/chathub.id", icon: "camera" as IconKey },
    { label: "WhatsApp", href: "https://wa.me/6280000000000", icon: "message-circle" as IconKey },
  ],
  companyName: "PT Chat Hub Indonesia",
  companyNote: "Member of PT Oval Indonesia",
  address: [
    "Signature Park Grande, Commercial Tower Retail R/UG/06",
    "Jalan MT Haryono 20 Cawang, Jakarta Timur 13630",
  ],
  copyright: `© ${new Date().getFullYear()} PT Chat Hub Indonesia. Seluruh hak cipta dilindungi.`,
};
