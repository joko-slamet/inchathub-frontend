import { LuSave, LuCheck } from "react-icons/lu";

export function SaveBar({ saved, onSave }: { saved: boolean; onSave: () => void }) {
  return (
    <div className="sticky bottom-6 flex items-center gap-3 self-end rounded-full border border-line bg-paper px-2 py-2 shadow-[0_16px_40px_-20px_rgba(20,16,15,0.35)]">
      {saved && (
        <span className="flex items-center gap-1.5 pl-3 text-sm text-ok">
          <LuCheck className="size-4" />
          Tersimpan (demo)
        </span>
      )}
      <button
        type="button"
        onClick={onSave}
        className="flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink"
      >
        <LuSave className="size-4" />
        Simpan Perubahan
      </button>
    </div>
  );
}
