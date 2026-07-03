"use client";

import { useState, useActionState } from "react";
import {
  LuUser,
  LuMail,
  LuPhone,
  LuLock,
  LuEye,
  LuEyeOff,
  LuLoaderCircle,
} from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { formatRupiah } from "@/lib/pricing-format";
import type { PaymentMethodDTO } from "@/lib/order-types";
import type { CurrentUser } from "@/lib/dal";
import { categorizePaymentMethod, groupByPaymentCategory } from "@/lib/payment-method-category";
import {
  checkoutAsLoggedInUser,
  registerAndCheckout,
  loginAndCheckout,
} from "@/app/actions/checkout";

const FORM_ID = "checkout-form";

function FieldError({ error }: { error?: string }) {
  if (!error) return null;
  return (
    <p className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-600">
      {error}
    </p>
  );
}

function TextField({
  label,
  icon: Icon,
  trailing,
  ...props
}: { label: string; icon: typeof LuUser; trailing?: React.ReactNode } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-ink/60">{label}</span>
      <div className="flex items-center gap-2.5 rounded-lg border border-line px-3.5 py-2.5 focus-within:border-ink/40">
        <Icon className="size-4 shrink-0 text-ink/40" />
        <input
          {...props}
          className="w-full text-sm text-ink placeholder:text-ink/35 focus:outline-none"
        />
        {trailing}
      </div>
    </label>
  );
}

function PasswordField({
  label,
  autoComplete,
}: {
  label: string;
  autoComplete: "new-password" | "current-password";
}) {
  const [visible, setVisible] = useState(false);
  return (
    <TextField
      label={label}
      icon={LuLock}
      type={visible ? "text" : "password"}
      name="password"
      required
      minLength={autoComplete === "new-password" ? 8 : undefined}
      autoComplete={autoComplete}
      placeholder="••••••••"
      trailing={
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Sembunyikan password" : "Tampilkan password"}
          className="shrink-0 text-ink/40 hover:text-ink"
        >
          {visible ? <LuEyeOff className="size-4" /> : <LuEye className="size-4" />}
        </button>
      }
    />
  );
}

function PaymentMethodRow({
  method,
  isSelected,
  onSelect,
}: {
  method: PaymentMethodDTO;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const fee = Number(method.totalFee);
  return (
    <label
      className={`flex cursor-pointer items-center justify-between gap-3 rounded-xl border-2 px-3.5 py-2.5 transition-all duration-200 ${
        isSelected
          ? "border-signal bg-signal-dim shadow-[0_10px_24px_-16px_rgba(190,30,45,0.4)]"
          : "border-line hover:border-ink/20"
      }`}
    >
      <span className="flex min-w-0 items-center gap-2.5">
        <input
          type="radio"
          checked={isSelected}
          onChange={onSelect}
          className="shrink-0 accent-signal"
        />
        {method.paymentImage && (
          // eslint-disable-next-line @next/next/no-img-element -- logo host is
          // determined by Duitku at runtime, not known ahead of time for next/image.
          <img
            src={method.paymentImage}
            alt=""
            className="h-6 w-10 shrink-0 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        )}
        <span className="truncate text-sm font-medium text-ink">{method.paymentName}</span>
      </span>
      {fee > 0 && <span className="shrink-0 text-xs text-ink/45">+Rp{fee.toLocaleString("id-ID")}</span>}
    </label>
  );
}

function PaymentMethodPicker({
  methods,
  selected,
  onSelect,
}: {
  methods: PaymentMethodDTO[];
  selected: string;
  onSelect: (method: string) => void;
}) {
  const groups = groupByPaymentCategory(methods);
  const [activeCategory, setActiveCategory] = useState(
    () => categorizePaymentMethod(methods.find((m) => m.paymentMethod === selected)?.paymentName ?? methods[0]?.paymentName ?? ""),
  );

  if (methods.length === 0) {
    return (
      <p className="rounded-lg border border-line bg-slate-dim px-3.5 py-2.5 text-sm text-ink/60">
        Metode pembayaran sedang tidak tersedia. Coba lagi nanti.
      </p>
    );
  }

  const activeGroup = groups.find((g) => g.category === activeCategory) ?? groups[0];

  return (
    <div className="flex min-w-0 flex-col gap-1.5">
      <span className="text-xs font-medium text-ink/60">Metode pembayaran</span>

      {groups.length > 1 && (
        <div className="no-scrollbar -mx-0.5 flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth px-0.5 pb-1">
          {groups.map((group) => (
            <button
              key={group.category}
              type="button"
              onClick={() => setActiveCategory(group.category)}
              className={`shrink-0 snap-start rounded-full border-2 px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                activeGroup.category === group.category
                  ? "border-signal bg-signal-dim text-signal"
                  : "border-line text-ink/60 hover:border-ink/20"
              }`}
            >
              {group.category} <span className="text-ink/40">({group.methods.length})</span>
            </button>
          ))}
        </div>
      )}

      <div className="flex max-h-72 flex-col gap-2 overflow-y-auto p-0.5">
        {activeGroup.methods.map((method) => (
          <PaymentMethodRow
            key={method.paymentMethod}
            method={method}
            isSelected={selected === method.paymentMethod}
            onSelect={() => onSelect(method.paymentMethod)}
          />
        ))}
      </div>
    </div>
  );
}

function BuyerInfoSummary({ user }: { user: CurrentUser }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-ink/60">Data diri pembeli</span>
      <div className="flex items-start gap-2.5 rounded-lg border border-line px-3.5 py-3">
        <LuUser className="mt-0.5 size-4 shrink-0 text-ink/40" />
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-ink">{user.name}</p>
          <p className="truncate text-sm text-ink/60">{user.email}</p>
          {user.phone && <p className="truncate text-sm text-ink/60">{user.phone}</p>}
        </div>
      </div>
    </div>
  );
}

function OrderSummary({
  planName,
  tagline,
  price,
  selectedMethod,
  submitLabel,
  pending,
  disabled,
}: {
  planName: string;
  tagline?: string;
  price: number;
  selectedMethod?: PaymentMethodDTO;
  submitLabel: string;
  pending: boolean;
  disabled: boolean;
}) {
  const fee = Number(selectedMethod?.totalFee ?? 0);

  return (
    <div className="rounded-[1.75rem] border-2 border-line bg-paper p-6 shadow-[0_20px_60px_-32px_rgba(26,22,24,0.3)] lg:sticky lg:top-8">
      <span className="sticker inline-flex items-center gap-2 rounded-full bg-signal-dim px-4 py-1.5 text-xs font-semibold tracking-[0.06em] text-signal uppercase">
        <span className="size-1.5 rounded-full bg-signal" />
        Ringkasan pesanan
      </span>

      <p className="mt-4 font-display text-xl font-bold text-ink">{planName}</p>
      {tagline && <p className="mt-1 text-sm leading-relaxed text-ink/60">{tagline}</p>}

      <div className="mt-5 flex flex-col gap-2.5 border-t border-dashed border-line pt-5 text-sm">
        <div className="flex items-center justify-between text-ink/70">
          <span>Harga paket</span>
          <span className="font-medium text-ink">{formatRupiah(price, "id")}</span>
        </div>
        {selectedMethod && (
          <div className="flex items-center justify-between gap-3 text-ink/70">
            <span className="truncate">Biaya admin ({selectedMethod.paymentName})</span>
            <span className="shrink-0 font-medium text-ink">
              {fee > 0 ? formatRupiah(fee, "id") : "Gratis"}
            </span>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
        <span className="text-sm font-semibold text-ink">Total</span>
        <span className="font-display text-2xl font-bold text-signal">
          {formatRupiah(price + fee, "id")}
        </span>
      </div>

      <Button
        type="submit"
        form={FORM_ID}
        variant="primary"
        size="lg"
        className="mt-6 w-full"
        disabled={disabled || pending}
      >
        {pending ? (
          <>
            <LuLoaderCircle className="size-4 animate-spin" />
            Memproses...
          </>
        ) : (
          submitLabel
        )}
      </Button>
    </div>
  );
}

export function CheckoutForm({
  planId,
  planName,
  planTagline,
  price,
  paymentMethods,
  user,
}: {
  planId: string;
  planName: string;
  planTagline?: string;
  price: number;
  paymentMethods: PaymentMethodDTO[];
  user: CurrentUser | null;
}) {
  const [mode, setMode] = useState<"register" | "login">("register");
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]?.paymentMethod ?? "");
  const selectedMethod = paymentMethods.find((m) => m.paymentMethod === paymentMethod);

  // All three actions are hooked up unconditionally (rules of hooks) — only
  // the one matching the current user/mode branch is actually rendered/used.
  const [loggedInState, loggedInAction, loggedInPending] = useActionState(
    checkoutAsLoggedInUser,
    undefined,
  );
  const [registerState, registerAction, registerPending] = useActionState(
    registerAndCheckout,
    undefined,
  );
  const [loginState, loginAction, loginPending] = useActionState(loginAndCheckout, undefined);

  const picker = (
    <PaymentMethodPicker methods={paymentMethods} selected={paymentMethod} onSelect={setPaymentMethod} />
  );

  let formPanel: React.ReactNode;
  let submitLabel: string;
  let pending: boolean;

  if (user) {
    formPanel = (
      <form id={FORM_ID} action={loggedInAction} className="flex min-w-0 flex-col gap-5">
        <input type="hidden" name="planId" value={planId} />
        <input type="hidden" name="paymentMethod" value={paymentMethod} />
        <BuyerInfoSummary user={user} />
        {picker}
        <FieldError error={loggedInState?.error} />
      </form>
    );
    submitLabel = "Bayar sekarang";
    pending = loggedInPending;
  } else if (mode === "register") {
    formPanel = (
      <form id={FORM_ID} action={registerAction} className="flex min-w-0 flex-col gap-5">
        <input type="hidden" name="planId" value={planId} />
        <input type="hidden" name="paymentMethod" value={paymentMethod} />

        <div className="flex flex-col gap-4">
          <span className="text-xs font-medium text-ink/60">Data diri pembeli</span>
          <div className="grid gap-4 sm:grid-cols-2">
            <TextField label="Nama lengkap" icon={LuUser} type="text" name="name" required placeholder="Nama Anda" />
            <TextField label="No. HP" icon={LuPhone} type="tel" name="phone" placeholder="08xxxxxxxxxx" />
          </div>
          <TextField
            label="Email"
            icon={LuMail}
            type="email"
            name="email"
            required
            autoComplete="username"
            placeholder="nama@email.com"
          />
          <PasswordField label="Password" autoComplete="new-password" />
        </div>

        {picker}

        <FieldError error={registerState?.error} />

        <button
          type="button"
          onClick={() => setMode("login")}
          className="text-center text-sm text-ink/60 hover:text-signal"
        >
          Sudah punya akun? Masuk
        </button>
      </form>
    );
    submitLabel = "Buat akun & bayar";
    pending = registerPending;
  } else {
    formPanel = (
      <form id={FORM_ID} action={loginAction} className="flex min-w-0 flex-col gap-5">
        <input type="hidden" name="planId" value={planId} />
        <input type="hidden" name="paymentMethod" value={paymentMethod} />
        {picker}

        <div className="flex flex-col gap-4">
          <TextField
            label="Email"
            icon={LuMail}
            type="email"
            name="email"
            required
            autoComplete="username"
            placeholder="nama@email.com"
          />
          <PasswordField label="Password" autoComplete="current-password" />
        </div>

        <FieldError error={loginState?.error} />

        <button
          type="button"
          onClick={() => setMode("register")}
          className="text-center text-sm text-ink/60 hover:text-signal"
        >
          Belum punya akun? Daftar
        </button>
      </form>
    );
    submitLabel = "Masuk & bayar";
    pending = loginPending;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start lg:gap-8">
      <div className="min-w-0 rounded-[1.75rem] border-2 border-line bg-paper p-6 shadow-[0_20px_60px_-32px_rgba(26,22,24,0.3)] sm:p-8">
        {formPanel}
      </div>

      <div>
        <OrderSummary
          planName={planName}
          tagline={planTagline}
          price={price}
          selectedMethod={selectedMethod}
          submitLabel={submitLabel}
          pending={pending}
          disabled={!paymentMethod}
        />
      </div>
    </div>
  );
}
