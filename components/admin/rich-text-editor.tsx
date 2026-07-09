"use client";

import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import { LuBold, LuItalic, LuList, LuListOrdered, LuLink } from "react-icons/lu";
import type { ReactNode } from "react";

function ToolbarButton({
  active,
  onClick,
  children,
  label,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={`flex size-7 items-center justify-center rounded-md transition-colors ${
        active ? "bg-signal-dim text-signal" : "text-ink/50 hover:bg-ink/5 hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

function Toolbar({ editor }: { editor: Editor }) {
  function toggleLink() {
    if (editor.isActive("link")) {
      editor.chain().focus().unsetLink().run();
      return;
    }
    const url = window.prompt("URL link:");
    if (url) editor.chain().focus().setLink({ href: url }).run();
  }

  return (
    <div className="flex items-center gap-1 border-b border-line px-2 py-1.5">
      <ToolbarButton
        label="Tebal"
        active={editor.isActive("bold")}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <LuBold className="size-4" />
      </ToolbarButton>
      <ToolbarButton
        label="Miring"
        active={editor.isActive("italic")}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <LuItalic className="size-4" />
      </ToolbarButton>
      <ToolbarButton
        label="Daftar bertitik"
        active={editor.isActive("bulletList")}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <LuList className="size-4" />
      </ToolbarButton>
      <ToolbarButton
        label="Daftar bernomor"
        active={editor.isActive("orderedList")}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <LuListOrdered className="size-4" />
      </ToolbarButton>
      <ToolbarButton label="Tautan" active={editor.isActive("link")} onClick={toggleLink}>
        <LuLink className="size-4" />
      </ToolbarButton>
    </div>
  );
}

export function RichTextEditor({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (html: string) => void;
}) {
  const editor = useEditor({
    extensions: [StarterKit, Link.configure({ openOnClick: false })],
    content: value,
    immediatelyRender: false,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class: "prose-sm min-h-[140px] max-w-none px-3.5 py-2.5 text-sm text-ink focus:outline-none",
      },
    },
  });

  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-ink/60">{label}</span>
      <div className="rounded-lg border border-line focus-within:border-ink/40">
        {editor && <Toolbar editor={editor} />}
        <EditorContent editor={editor} />
      </div>
    </label>
  );
}
