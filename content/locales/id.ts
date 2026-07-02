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
      { label: "Produk", href: "#produk" },
      { label: "Solusi", href: "#solusi" },
      { label: "Industri", href: "#industri" },
      { label: "Kontak", href: "#kontak" },
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
    eyebrow: "FITUR OMNICHANNEL",
    title: "Semua Percakapan, Satu Ruang Kerja yang Rapi",
    description:
      "Setiap pesan yang masuk otomatis tersusun dalam satu tampilan yang bisa dikerjakan bersama tim, tanpa perlu berpindah-pindah aplikasi atau login banyak akun berbeda.",
    features: [
      {
        title: "Unified Inbox",
        description: "Semua chat dari WhatsApp, Instagram, Email, dan channel lain masuk ke satu tampilan yang sama.",
      },
      {
        title: "Kolaborasi Multi-Agent",
        description: "Beberapa agent bisa menangani satu inbox bersama tanpa saling tabrak balasan.",
      },
      {
        title: "Riwayat Pelanggan",
        description: "Histori percakapan lengkap tersimpan otomatis, siapa pun agent yang membalas duluan.",
      },
      {
        title: "Catatan Internal",
        description: "Tim bisa meninggalkan catatan di dalam chat tanpa pernah terlihat oleh pelanggan.",
      },
      {
        title: "Manajemen Tiket",
        description: "Setiap percakapan bisa diubah jadi tiket dengan status dan prioritas yang jelas.",
      },
      {
        title: "Analitik Performa",
        description: "Pantau kecepatan respons dan beban kerja tiap agent secara real-time.",
      },
      {
        title: "Kontrol Akses Berbasis Peran",
        description: "Atur siapa yang boleh melihat, membalas, atau mengelola percakapan tertentu.",
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
    title: "Biar AI yang Menjaga Chat Masuk, Tim Anda Fokus Menutup Penjualan",
    description:
      "AI Chatbot menyambut dan menyaring setiap percakapan yang masuk selagi tim Anda tidur atau sedang menangani pelanggan lain. Begitu layak ditindaklanjuti, Smart CRM langsung merapikannya jadi lead yang bisa dikejar sampai deal.",
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
    chatWidget: {
      botName: "ChatHub AI",
      statusLabel: "siap membantu",
      botGreeting: "Halo! Ada yang bisa saya bantu terkait produk atau layanan kami hari ini?",
      userMessage: "Halo kak, mau tanya-tanya",
      botReply: "Tentu, boleh saya bantu cek dulu kebutuhannya? Tim kami akan lanjutkan begitu siap.",
      inputPlaceholder: "Tulis pesan…",
      quickReplies: ["Info Produk", "Cek Status Pesanan", "Bicara dengan Agent"],
    },
    pipeline: {
      title: "Sales Pipeline",
      subtitle: "contoh tampilan · data dummy",
      stages: [
        { name: "New Lead", deals: [{ name: "Toko Berkah Jaya", value: "Rp 4,2 jt" }, { name: "CV Mitra Abadi", value: "Rp 8,5 jt" }] },
        { name: "Contacted", deals: [{ name: "Klinik Sehat Sentosa", value: "Rp 12 jt" }] },
        { name: "Proposed", deals: [{ name: "Koperasi Sejahtera", value: "Rp 21 jt" }] },
        { name: "Negotiation", deals: [{ name: "PT Nusantara Boga", value: "Rp 15 jt" }] },
        { name: "Closed Won", deals: [{ name: "Sekolah Pelita Bangsa", value: "Rp 30 jt" }] },
      ],
    },
  },

  whatsapp: {
    eyebrow: "WHATSAPP BUSINESS SOLUTIONS",
    title: "WhatsApp Masih Jadi Pintu Depan Bisnis Anda di Indonesia",
    description:
      "Nyaris semua pelanggan Anda sudah punya WhatsApp terpasang, dan mereka berharap bisnis Anda ada di sana juga. Masalahnya, satu nomor WhatsApp yang dipegang bergantian oleh beberapa staf gampang berujung pada balasan yang tumpang tindih atau malah tidak terbalas sama sekali.",
    points: [
      { title: "Official API", description: "Terhubung resmi lewat WhatsApp Business API, bukan aplikasi multi-device tidak resmi yang berisiko diblokir." },
      { title: "AI Chatbot Ready", description: "Bisa langsung dipasangi AI Chatbot untuk menyambut dan menyaring chat yang masuk." },
      { title: "Integrasi CRM", description: "Setiap percakapan otomatis tercatat sebagai lead di Smart CRM, tanpa entri data manual." },
      { title: "Terhubung Omnichannel", description: "Satu nomor WhatsApp bekerja berdampingan dengan channel lain dalam inbox yang sama." },
      { title: "Dukungan Lokal", description: "Tim support berbahasa Indonesia yang paham cara kerja bisnis lokal, bukan tiket ke luar negeri." },
    ],
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

  industries: {
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
    websiteLabel: "www.inChatHub.com",
    websiteHref: "https://www.inchathub.com",
    navLabel: "Navigasi",
    copyright: `© ${new Date().getFullYear()} PT Chat Hub Indonesia. Seluruh hak cipta dilindungi.`,
  },
};
