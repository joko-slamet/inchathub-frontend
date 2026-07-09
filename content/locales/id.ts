import { TRIAL_URL, type SiteContent } from "@/content/types";

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
      { label: "Beranda", href: "/" },
      { label: "Produk", href: "/product" },
      { label: "Promo", href: "/promo" },
      { label: "Harga", href: "/pricing" },
      { label: "Blog", href: "/blog" },
      { label: "Hubungi Kami", href: "/contact-us" },
      { label: "Tentang Kami", href: "/about-us" },
    ],
    loginLabel: "Masuk",
    ctaPrimary: "Coba Gratis",
  },

  hero: {
    eyebrow: "CHATBOT AI · OMNICHANNEL · CRM",
    headlineMain: "Satu Platform untuk Mengelola",
    headlineAccent: "Setiap Interaksi Pelanggan",
    subheadlineAccent: "Chat Hub",
    subheadlineMain: "menyatukan komunikasi, engagement, dan otomasi pelanggan dalam satu platform.",
    ctaPrimary: "Uji Coba Gratis",
    ctaSecondary: "Lihat Cara Kerja",
    channelsLabel: "Terhubung dengan channel yang pelanggan Anda sudah pakai sehari-hari",
  },

  problem: {
    titleMain: "Semua Channel. Satu Inbox.",
    titleAccent: "Tanpa Chat yang Terlewat.",
    points: ["Pesan tersebar di banyak kanal", "Respons lambat, pelanggan kecewa", "Tidak ada data & insight terpusat"],
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
    ratingLabel: "Dipercaya ratusan bisnis Indonesia",
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

  aboutHero: {
    heading: "Kami Menciptakan Masa Depan Komunikasi",
  },

  productHero: {
    heading: "Satu Produk, Semua yang Bisnis Anda Butuhkan",
    subheading: "Dari inbox terpadu, AI Chatbot, Smart CRM, sampai WhatsApp Business — semua fitur ChatHub dalam satu halaman.",
  },

  blogHero: {
    heading: "Blog & Insight ChatHub",
    subheading: "Tips, studi kasus, dan tren seputar omnichannel, AI chatbot, dan CRM untuk bisnis Anda.",
  },

  promoHero: {
    heading: "Promo ChatHub",
    subheading: "Penawaran spesial yang sedang berlangsung untuk paket ChatHub Anda.",
  },

  promo: {
    eyebrow: "Promo Spesial",
    titleMain: "Penawaran Terbatas untuk",
    titleAccent: "Bisnis Anda",
    description: "Jangan lewatkan promo yang sedang berlangsung — kode promo langsung bisa dipakai.",
    viewAllLabel: "Lihat Semua Promo",
  },

  tryFree: {
    eyebrow: "Coba Gratis",
    titleMain: "Rasakan Sendiri",
    titleAccent: "Sebelum Berlangganan",
    description: "Jelajahi semua fitur ChatHub tanpa risiko — mulai uji coba gratis Anda hari ini.",
    ctaLabel: "Mulai Coba Gratis",
    bullets: ["Tanpa kartu kredit", "Akses semua fitur premium", "Batalkan kapan saja"],
  },

  blog: {
    eyebrow: "Blog & Insight",
    titleMain: "Wawasan untuk",
    titleAccent: "Bisnis yang Terhubung",
    description: "Tips praktis, studi kasus, dan tren layanan pelanggan dari tim ChatHub.",
    viewAllLabel: "Lihat Semua Artikel",
    posts: [
      {
        slug: "5-alasan-bisnis-butuh-omnichannel-inbox-2026",
        category: "Omnichannel",
        title: "5 Alasan Bisnis Anda Butuh Omnichannel Inbox di 2026",
        excerpt:
          "Pelanggan kini menghubungi bisnis lewat banyak kanal sekaligus. Berikut alasan mengapa inbox terpadu jadi kebutuhan, bukan lagi pilihan.",
        content: [
          "Pelanggan hari ini tidak lagi setia pada satu kanal. Seseorang bisa bertanya lewat WhatsApp di pagi hari, lanjut DM Instagram siang harinya, lalu menelepon kalau butuh jawaban cepat di sore hari. Kalau tim Anda mengelola setiap kanal secara terpisah, riwayat percakapan jadi tercecer dan pelanggan harus mengulang cerita yang sama berkali-kali.",
          "Inbox omnichannel menyatukan semua kanal itu ke satu tampilan, sehingga agen bisa melihat riwayat lengkap pelanggan tanpa harus berpindah aplikasi. Efeknya langsung terasa: waktu respons lebih cepat, tidak ada pesan yang terlewat, dan pelanggan merasa dikenali meski berpindah kanal.",
          "Di 2026, ekspektasi pelanggan soal kecepatan respons makin tinggi, sementara jumlah kanal komunikasi terus bertambah. Bisnis yang masih mengandalkan banyak aplikasi terpisah akan kesulitan bersaing dengan yang sudah punya satu inbox terpadu — bukan lagi soal efisiensi semata, tapi soal bertahan di tengah ekspektasi pelanggan yang terus naik.",
        ],
        author: "Tim ChatHub",
        date: "28 Juni 2026",
        readTime: "5 min baca",
      },
      {
        slug: "cara-manfaatkan-whatsapp-business-api-tingkatkan-konversi",
        category: "WhatsApp",
        title: "Cara Memanfaatkan WhatsApp Business API untuk Tingkatkan Konversi",
        excerpt:
          "Dari quick reply sampai broadcast tersegmentasi, ini strategi praktis memaksimalkan WhatsApp Business API untuk penjualan.",
        content: [
          "WhatsApp Business API bukan sekadar versi resmi dari WhatsApp biasa — API ini membuka kemampuan yang tidak ada di aplikasi personal, seperti template pesan resmi, integrasi ke CRM, dan otomasi balasan dalam skala besar. Sayangnya, banyak bisnis hanya memakainya sebagai pengganti nomor WhatsApp lama tanpa memanfaatkan fitur-fitur ini.",
          "Salah satu cara paling praktis meningkatkan konversi adalah memakai quick reply dan template pesan untuk pertanyaan yang berulang, sehingga pelanggan dapat jawaban instan tanpa menunggu agen. Broadcast tersegmentasi berdasarkan riwayat pembelian atau minat juga terbukti jauh lebih efektif dibanding broadcast massal ke seluruh kontak.",
          "Yang tidak kalah penting adalah waktu respons. Studi internal kami menunjukkan bahwa pelanggan yang mendapat balasan dalam lima menit pertama, punya kemungkinan konversi jauh lebih tinggi dibanding yang menunggu lebih lama. Kombinasi otomasi untuk pertanyaan awal dan eskalasi cepat ke agen manusia untuk kasus kompleks adalah formula yang paling banyak berhasil di lapangan.",
        ],
        author: "Tim ChatHub",
        date: "20 Juni 2026",
        readTime: "6 min baca",
      },
      {
        slug: "ai-chatbot-vs-live-agent-kapan-pakai-yang-mana",
        category: "AI Chatbot",
        title: "AI Chatbot vs Live Agent: Kapan Harus Pakai yang Mana?",
        excerpt:
          "AI chatbot cepat dan konsisten, agen manusia empatik dan fleksibel. Simak kapan sebaiknya masing-masing digunakan.",
        content: [
          "Pertanyaan \"chatbot atau agen manusia\" sebenarnya keliru sejak awal — keduanya bukan pilihan yang saling meniadakan, melainkan dua alat dengan kekuatan berbeda. AI chatbot unggul dalam kecepatan, konsistensi jawaban, dan ketersediaan 24/7 tanpa lelah. Agen manusia unggul dalam empati, penanganan kasus rumit, dan situasi yang butuh keputusan di luar aturan baku.",
          "Chatbot paling efektif menangani pertanyaan berulang: jam operasional, status pesanan, cara pakai produk, atau FAQ umum lainnya. Di sinilah chatbot bisa menyaring 60-80% percakapan masuk sebelum sampai ke agen, sehingga tim manusia bisa fokus ke kasus yang benar-benar butuh sentuhan personal.",
          "Kuncinya adalah eskalasi yang mulus: begitu chatbot mendeteksi pertanyaan di luar kemampuannya, atau pelanggan terdengar frustrasi, percakapan harus langsung diteruskan ke agen manusia lengkap dengan riwayat chat sebelumnya — bukan mengulang dari nol. Kombinasi inilah yang membuat layanan terasa cepat sekaligus tetap manusiawi.",
        ],
        author: "Tim ChatHub",
        date: "12 Juni 2026",
        readTime: "4 min baca",
      },
      {
        slug: "studi-kasus-rumah-sakit-pangkas-waktu-respons-70-persen",
        category: "Studi Kasus",
        title: "Studi Kasus: Rumah Sakit yang Memangkas Waktu Respons 70% dengan ChatHub",
        excerpt:
          "Bagaimana sebuah rumah sakit mitra ChatHub menyatukan kanal komunikasi pasien dan mempercepat waktu tanggap tim CS.",
        content: [
          "Sebelum menggunakan ChatHub, tim customer service rumah sakit ini mengelola pertanyaan pasien lewat WhatsApp, telepon, dan formulir website secara terpisah — masing-masing dipegang tim berbeda tanpa visibilitas satu sama lain. Akibatnya, pasien yang sudah bertanya lewat satu kanal sering harus mengulang pertanyaan yang sama saat berpindah ke kanal lain.",
          "Setelah menyatukan seluruh kanal ke satu inbox ChatHub, tim CS bisa melihat riwayat lengkap tiap pasien dalam satu layar, lengkap dengan status janji temu dan riwayat komunikasi sebelumnya. Chatbot juga diaktifkan untuk menjawab pertanyaan umum seperti jadwal dokter dan lokasi poli, sehingga tim manusia bisa fokus menangani pertanyaan medis yang lebih sensitif.",
          "Hasilnya terlihat dalam waktu kurang dari tiga bulan: waktu respons rata-rata turun 70%, dan tingkat kepuasan pasien terhadap layanan komunikasi meningkat signifikan berdasarkan survei internal rumah sakit. Studi kasus ini menunjukkan bahwa penyatuan kanal berdampak paling besar justru di sektor yang menangani informasi sensitif dan butuh respons cepat, seperti layanan kesehatan.",
        ],
        author: "Tim ChatHub",
        date: "3 Juni 2026",
        readTime: "7 min baca",
      },
      {
        slug: "membangun-pipeline-penjualan-rapi-dengan-crm-terintegrasi",
        category: "CRM",
        title: "Membangun Pipeline Penjualan yang Rapi dengan CRM Terintegrasi",
        excerpt:
          "Pipeline yang berantakan bikin leads hilang begitu saja. Ini cara menyusun tahapan penjualan yang jelas dan terukur.",
        content: [
          "Banyak tim sales kehilangan leads bukan karena kurang prospek, tapi karena tidak ada sistem yang jelas untuk melacak di tahap mana setiap leads berada. Leads yang masuk lewat chat, kemudian didiskusikan lewat grup internal, lalu dilupakan begitu saja — ini pola yang sangat umum terjadi tanpa CRM yang terintegrasi.",
          "Pipeline yang sehat dimulai dari tahapan yang jelas: leads masuk, kualifikasi, penawaran, negosiasi, hingga closing — dengan kriteria eksplisit kapan sebuah leads boleh naik ke tahap berikutnya. Yang membuat pipeline ini benar-benar berguna adalah ketika setiap percakapan dari WhatsApp, email, atau kanal lain otomatis tercatat di leads yang sama, bukan tersebar di banyak tempat.",
          "Dengan CRM yang terintegrasi langsung ke inbox omnichannel, tim sales bisa melihat status setiap leads sekaligus riwayat percakapannya dalam satu tampilan, dan manajemen bisa memantau tahapan mana yang paling sering jadi titik macet. Dari situ, perbaikan proses penjualan jadi berbasis data, bukan sekadar perasaan siapa yang “kelihatannya sibuk”.",
        ],
        author: "Tim ChatHub",
        date: "25 Mei 2026",
        readTime: "5 min baca",
      },
      {
        slug: "tren-layanan-pelanggan-sektor-keuangan-tahun-ini",
        category: "Industri",
        title: "Tren Layanan Pelanggan di Sektor Keuangan Tahun Ini",
        excerpt:
          "Dari respons instan sampai kepatuhan data, berikut tren layanan pelanggan yang perlu diperhatikan pelaku industri keuangan.",
        content: [
          "Sektor keuangan menghadapi tekanan ganda: nasabah mengharapkan respons secepat layanan e-commerce, sementara regulator menuntut kepatuhan data dan audit trail yang ketat. Ini membuat layanan pelanggan di industri keuangan tidak bisa sekadar meniru pendekatan bisnis konsumer biasa tanpa penyesuaian.",
          "Salah satu tren yang makin terlihat adalah penggunaan chatbot untuk pertanyaan transaksional sederhana — cek saldo, status pengajuan, atau simulasi cicilan — sementara pertanyaan yang menyentuh data sensitif tetap dialihkan ke agen berlisensi dengan protokol verifikasi identitas yang jelas. Pemisahan ini penting untuk menjaga kepatuhan tanpa mengorbankan kecepatan layanan.",
          "Tren lain yang terus menguat adalah audit trail percakapan yang lengkap dan tersimpan rapi — setiap interaksi harus bisa ditelusuri kembali untuk kebutuhan kepatuhan maupun penyelesaian sengketa. Platform yang mampu menyatukan kecepatan respons dengan pencatatan yang rapi akan menjadi standar baru layanan pelanggan di sektor keuangan.",
        ],
        author: "Tim ChatHub",
        date: "14 Mei 2026",
        readTime: "6 min baca",
      },
    ],
  },

  visionMission: {
    visionEyebrow: "VISI KAMI",
    visionMain: "Menjadi Platform Komunikasi Berbasis AI",
    visionAccent: "Paling Dipercaya di Asia Tenggara",
    missionEyebrow: "MISI KAMI",
    missionItems: [
      { textMain: "Menyederhanakan komunikasi pelanggan lewat", textAccent: "satu platform terpadu." },
      { textMain: "Memberdayakan bisnis dengan", textAccent: "engagement dan otomasi berbasis AI." },
      { textMain: "Meningkatkan penjualan, kualitas layanan, dan", textAccent: "efisiensi operasional." },
      { textMain: "Membangun", textAccent: "hubungan pelanggan yang bermakna dan scalable." },
      { textMain: "Mempercepat transformasi digital", textAccent: "di berbagai industri." },
    ],
  },

  about: {
    paragraphs: [
      "PT Chat Hub Indonesia, yang berbasis di Jakarta, membangun generasi berikutnya dari komunikasi bisnis lewat pengalaman omnichannel yang terpadu. Kami menghubungkan setiap interaksi pelanggan ke dalam satu alur yang mulus — memastikan percakapan tetap konsisten, kontekstual, dan tanpa hambatan di semua channel.",
      "Platform kami dibangun sepenuhnya secara in-house, memberi kami kendali penuh untuk menyesuaikan dan mengembangkan setiap solusi sesuai kebutuhan nyata klien. Ini memungkinkan adaptasi yang lebih cepat, personalisasi yang lebih dalam, dan fleksibilitas yang tidak bisa ditandingi platform siap pakai.",
      "Didukung channel berbasis AI dan chatbot cerdas, teknologi kami memahami maksud pelanggan, merespons secara instan, dan bekerja 24/7 layaknya perpanjangan tangan alami dari tim Anda — mendorong efisiensi, engagement, dan dampak bisnis yang terukur.",
      "Dengan kemitraan aggregator global di Singapura, China, India, Dubai, Amerika Serikat, dan lainnya, kami membuat komunikasi lintas negara dan ekspansi ke pasar lokal jadi lebih cepat dan mudah. Di sinilah percakapan berubah menjadi keunggulan kompetitif yang nyata.",
    ],
    countriesLabel: "Kemitraan Global",
    countries: ["Singapura", "China", "India", "Dubai", "Amerika Serikat"],
    countriesMoreLabel: "+ lainnya",
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
    trustBullets: ["Setup dalam 1 hari kerja", "Onboarding gratis", "Tanpa kontrak panjang"],
    cta: "Request Demo Sekarang",
    whatsappPhone: "6281510107070",
    whatsappMessage: "Halo, saya ingin request demo ChatHub.",
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
