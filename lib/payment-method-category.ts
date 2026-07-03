export type PaymentMethodCategory = "Virtual Account" | "E-Wallet" | "QRIS" | "Kartu Kredit/Debit" | "Lainnya";

// Duitku's "Get Payment Method" response doesn't return an explicit category —
// only a code + human-readable name — so we infer the category from the name.
// Keep this list updated if Duitku adds new payment channels with wording
// that doesn't match any pattern below (they'll just fall back to "Lainnya").
const CATEGORY_PATTERNS: [PaymentMethodCategory, RegExp][] = [
  ["QRIS", /qris/i],
  ["Kartu Kredit/Debit", /credit|debit|kartu kredit/i],
  ["E-Wallet", /ovo|dana|shopeepay|shopee pay|linkaja|link aja|gopay|jenius|e-?wallet/i],
  [
    "Virtual Account",
    /virtual account|\bva\b|bank transfer|\b(bca|mandiri|bri|bni|cimb|permata|danamon|maybank|panin|sinarmas|muamalat)\b|atm bersama/i,
  ],
];

export function categorizePaymentMethod(paymentName: string): PaymentMethodCategory {
  for (const [category, pattern] of CATEGORY_PATTERNS) {
    if (pattern.test(paymentName)) return category;
  }
  return "Lainnya";
}

const CATEGORY_ORDER: PaymentMethodCategory[] = [
  "Virtual Account",
  "E-Wallet",
  "QRIS",
  "Kartu Kredit/Debit",
  "Lainnya",
];

export function groupByPaymentCategory<T extends { paymentName: string }>(
  methods: T[],
): { category: PaymentMethodCategory; methods: T[] }[] {
  const groups = new Map<PaymentMethodCategory, T[]>();
  for (const method of methods) {
    const category = categorizePaymentMethod(method.paymentName);
    if (!groups.has(category)) groups.set(category, []);
    groups.get(category)!.push(method);
  }
  return CATEGORY_ORDER.filter((category) => groups.has(category)).map((category) => ({
    category,
    methods: groups.get(category)!,
  }));
}
