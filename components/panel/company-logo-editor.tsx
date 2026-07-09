"use client";

import { useRef, useState, useTransition } from "react";
import { LuTrash2, LuUpload, LuLoaderCircle, LuImageOff } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { uploadCompanyLogo, deleteCompanyLogo } from "@/app/actions/company-logos";
import { toCompanyLogoImageUrl } from "@/lib/company-logo-image";
import type { CompanyLogoDTO } from "@/lib/company-logo-types";

export function CompanyLogoEditor({ initialLogos }: { initialLogos: CompanyLogoDTO[] }) {
  const [logos, setLogos] = useState(initialLogos);
  const [uploading, startUploading] = useTransition();
  const [uploadError, setUploadError] = useState<string>();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function handleUpload(formData: FormData) {
    setUploadError(undefined);
    startUploading(async () => {
      const result = await uploadCompanyLogo(formData);
      if (!result.ok) {
        setUploadError(result.error);
        return;
      }
      setLogos((prev) => [...prev, result.data]);
      formRef.current?.reset();
    });
  }

  function handleDelete(id: string) {
    if (!confirm("Hapus logo ini dari landing page?")) return;
    setDeletingId(id);
    startUploading(async () => {
      const result = await deleteCompanyLogo(id);
      setDeletingId(null);
      if (result.ok) {
        setLogos((prev) => prev.filter((logo) => logo.id !== id));
      }
    });
  }

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8">
      <div>
        <p className="font-display text-2xl font-semibold tracking-tight text-ink">Our Client</p>
        <p className="mt-1 text-sm text-ink/60">
          Logo perusahaan yang sudah menggunakan ChatHub, ditampilkan di section Industri pada landing page.
        </p>
      </div>

      <form
        ref={formRef}
        action={handleUpload}
        className="flex flex-col gap-4 rounded-2xl border-2 border-line bg-paper p-6"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-ink/60">Nama perusahaan</span>
            <input
              type="text"
              name="name"
              required
              placeholder="PT Contoh Sejahtera"
              className="rounded-lg border border-line px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-ink/60">File logo</span>
            <input
              type="file"
              name="logo"
              accept="image/*"
              required
              className="rounded-lg border border-line px-3.5 py-2 text-sm text-ink file:mr-3 file:rounded-full file:border-0 file:bg-signal-dim file:px-3.5 file:py-1.5 file:text-xs file:font-semibold file:text-signal focus:border-ink/40 focus:outline-none"
            />
          </label>
        </div>

        {uploadError && (
          <p className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-600 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-400">
            {uploadError}
          </p>
        )}

        <Button type="submit" variant="primary" size="md" className="self-start" disabled={uploading}>
          {uploading ? (
            <>
              <LuLoaderCircle className="size-4 animate-spin" />
              Mengunggah...
            </>
          ) : (
            <>
              <LuUpload className="size-4" />
              Unggah Logo
            </>
          )}
        </Button>
      </form>

      <div>
        <p className="text-sm font-medium text-ink/70">Logo tersimpan ({logos.length})</p>

        {logos.length === 0 ? (
          <div className="mt-3 flex flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-line py-12 text-center text-sm text-ink/50">
            <LuImageOff className="size-6" />
            Belum ada logo yang diunggah.
          </div>
        ) : (
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="group relative flex flex-col items-center gap-2 rounded-xl border border-line bg-paper p-4"
              >
                <button
                  type="button"
                  onClick={() => handleDelete(logo.id)}
                  disabled={deletingId === logo.id}
                  aria-label={`Hapus logo ${logo.name}`}
                  className="absolute top-2 right-2 rounded-lg p-1.5 text-ink/40 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/40 dark:hover:text-red-400"
                >
                  {deletingId === logo.id ? (
                    <LuLoaderCircle className="size-4 animate-spin" />
                  ) : (
                    <LuTrash2 className="size-4" />
                  )}
                </button>
                {/* eslint-disable-next-line @next/next/no-img-element -- logo host is the backend's own origin, resolved at runtime via env var. */}
                <img
                  src={toCompanyLogoImageUrl(logo.imageUrl)}
                  alt={logo.name}
                  className="h-12 w-full object-contain"
                />
                <p className="truncate text-xs text-ink/60">{logo.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
