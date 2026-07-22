# Setup Tracking: Google Tag Manager & Meta Pixel

Dokumen ini menjelaskan cara kerja tracking di project ini dan langkah setup di panel Google Tag Manager (GTM) & Meta Events Manager. Semua konfigurasi tag/trigger/pixel dilakukan di panel GTM (tidak perlu ubah kode), kecuali disebutkan lain.

## Arsitektur singkat

- **Kode (`app/layout.tsx`)** hanya memuat container GTM lewat `NEXT_PUBLIC_GTM_ID` di `.env.local`. Semua tag (GA4, Meta Pixel, Google Ads, dll.) didaftarkan di panel GTM, bukan di kode.
- **Elemen yang bisa ditrack lewat klik** (tombol CTA) diberi atribut HTML `data-gtm-id="..."` di kode. Atribut ini murni penanda, tidak ada logic JavaScript tambahan — GTM yang membaca atribut ini saat elemen diklik.
- Kalau butuh tracking tombol/elemen baru di masa depan, developer cukup tambah satu atribut `data-gtm-id="nama_unik"` di elemen tersebut — tidak perlu menulis `dataLayer.push` manual.

## Daftar `data-gtm-id` yang sudah terpasang

| `data-gtm-id` | Lokasi | File |
|---|---|---|
| `cta_navbar` | Tombol "Coba Gratis" navbar (desktop) | `components/sections/navbar.tsx` |
| `cta_navbar_mobile` | Tombol "Coba Gratis" navbar (mobile menu) | `components/sections/navbar.tsx` |
| `cta_try_free_section` | Tombol "Mulai Coba Gratis" (section di atas pricing) | `components/sections/try-free.tsx` |
| `cta_closing` | Tombol "Coba Gratis Sekarang" (closing CTA) | `components/sections/closing-cta.tsx` |
| `cta_pricing_starter` | Tombol plan Starter | `components/sections/pricing.tsx` |
| `cta_pricing_pro` | Tombol plan Pro | `components/sections/pricing.tsx` |
| `cta_pricing_business` | Tombol plan Business | `components/sections/pricing.tsx` |
| `cta_pricing_enterprise` | Tombol plan Enterprise | `components/sections/pricing.tsx` |
| `cta_whatsapp_float` | Tombol WhatsApp mengambang | `components/ui/whatsapp-float-button.tsx` |

Semua tombol di atas (kecuali WhatsApp) mengarah ke `trialUrl` (domain eksternal di luar situs ini) — jadi klik tombol adalah satu-satunya sinyal "intent to convert" yang bisa ditangkap dari situs ini.

---

## 1. Environment Variable

Isi di `.env.local` (lihat `.env.example`):

```
NEXT_PUBLIC_GTM_ID="GTM-xxxxxxx"
```

Ambil dari [tagmanager.google.com](https://tagmanager.google.com) → Admin → Container Settings. Setelah diisi/diubah, dev server perlu restart supaya ter-load.

---

## 2. Setup di Google Tag Manager

### 2.1. Variable untuk baca `data-gtm-id`

- **Variables** → **New**
- Nama: `DOM - gtm-id`
- Variable Type: **DOM Element** (atau **Auto-Event Variable** dengan Variable Type **Element Attribute** kalau opsi DOM Element tidak tersedia)
- Attribute Name: `data-gtm-id`

### 2.2. Trigger klik CTA

- **Triggers** → **New**
- Nama: `Click - CTA Tracked`
- Trigger Type: **Click - All Elements**
- "This trigger fires on": **Some Clicks**
- Kondisi: `{{DOM - gtm-id}}` **matches RegEx** → value: `.+` — artinya trigger fire kalau elemen yang diklik punya atribut `data-gtm-id` terisi (minimal 1 karakter). GTM mewajibkan field value diisi, jadi tidak bisa dikosongkan seperti opsi "does not equal"

### 2.3. Trigger PageView

Trigger bawaan **All Pages** (sudah ada secara default) dipakai untuk tag yang harus fire di semua halaman, seperti PageView pixel.

### 2.4. Tag GA4 (kalau belum ada)

- **Tags** → **New** → Tag Configuration → **Google Analytics: GA4 Configuration**
- Measurement ID: isi `G-xxxxxxx`
- Trigger: **All Pages**

Untuk event klik CTA, buat tag terpisah tipe **Google Analytics: GA4 Event**, trigger pakai `Click - CTA Tracked`, dan tambahkan parameter `cta_id` = `{{DOM - gtm-id}}` supaya tahu tombol mana yang diklik.

---

## 3. Setup Meta Pixel

### 3.1. Ambil Pixel ID

[business.facebook.com/events_manager](https://business.facebook.com/events_manager) → buat pixel baru kalau belum ada → catat Pixel ID (contoh: `1234567890123456`).

### 3.2. Tag base code (PageView)

- **Tags** → **New** → cari template **"Facebook Pixel"** di Community Template Gallery (ikon kaca pembesar di pojok kanan atas Tag Configuration)
- Masukkan Pixel ID
- Trigger: **All Pages**
- Nama tag: `Meta Pixel - Base Code`

Kalau template gallery tidak tersedia, alternatif: tag **Custom HTML** dengan snippet resmi dari Events Manager (Settings → Set up manually), trigger tetap **All Pages**.

### 3.3. Tag event konversi (Lead)

- **Tags** → **New** → tipe **Custom HTML**
- Isi:
  ```html
  <script>
    fbq('track', 'Lead');
  </script>
  ```
- Trigger: `Click - CTA Tracked`
- **Advanced Settings** → **Tag Sequencing** → centang "Fire a tag before this tag fires" → pilih `Meta Pixel - Base Code` (supaya `fbq` sudah terdefinisi lebih dulu)
- Nama tag: `Meta Pixel - Lead Event`

### 3.4. (Opsional) Kirim nama CTA sebagai parameter

Bukan tag terpisah — ini menggantikan isi script di tag `Meta Pixel - Lead Event` yang sama dari langkah 3.3 (trigger & tag sequencing tetap sama, cuma isi Custom HTML-nya diganti):

```html
<script>
  fbq('track', 'Lead', { content_name: '{{DOM - gtm-id}}' });
</script>
```

---

## 4. Testing sebelum publish

1. Klik **Preview** di GTM, masukkan URL situs (localhost juga bisa)
2. Buka DevTools console → ketik `dataLayer` untuk lihat event mentah
3. Klik salah satu tombol CTA → cek panel debug GTM: trigger `Click - CTA Tracked` harus fire, tag GA4 Event & Meta Pixel Lead Event ikut fire
4. Install extension **Meta Pixel Helper** (Chrome Web Store) untuk verifikasi pixel dari sisi Meta
5. Cek **GA4 Realtime** (analytics.google.com → Reports → Realtime → card "Event count by Event name")

## 5. Publish

Setelah semua tag terverifikasi lewat Preview mode: klik **Submit** (pojok kanan atas GTM) → isi deskripsi versi → **Publish**.

---

## Menambah tracking baru di masa depan

- **Tombol/link baru**: developer tambah `data-gtm-id="nama_unik"` di elemen, lalu di GTM tinggal tambah kondisi/tag baru — tidak perlu deploy ulang untuk perubahan tag, cukup untuk penambahan atribut baru di kode.
- **Tag/pixel baru** (Google Ads Conversion, TikTok Pixel, dll.): seluruhnya bisa ditambah langsung di GTM tanpa sentuh kode sama sekali, karena base infrastruktur (`dataLayer`, trigger klik CTA, variable `DOM - gtm-id`) sudah tersedia.
