"use client";

import { useState } from "react";
import { LuTrash2, LuPlus } from "react-icons/lu";
import { getSiteContent, type Locale, type SiteContent } from "@/content/site-content";
import { Field, TextAreaField } from "@/components/admin/field";
import { LocaleTabs } from "@/components/admin/locale-tabs";
import { SaveBar } from "@/components/admin/save-bar";

type BlogContent = SiteContent["blog"];
type Post = BlogContent["posts"][number];

function initialContent(): Record<Locale, BlogContent> {
  return {
    id: structuredClone(getSiteContent("id").blog),
    en: structuredClone(getSiteContent("en").blog),
  };
}

export default function AdminBlogPage() {
  const [content, setContent] = useState<Record<Locale, BlogContent>>(initialContent);
  const [activeLocale, setActiveLocale] = useState<Locale>("id");
  const [saved, setSaved] = useState(false);

  const blog = content[activeLocale];

  function updateBlog(updater: (blog: BlogContent) => BlogContent) {
    setContent((prev) => ({ ...prev, [activeLocale]: updater(prev[activeLocale]) }));
    setSaved(false);
  }

  function updateField<K extends keyof BlogContent>(key: K, value: BlogContent[K]) {
    updateBlog((b) => ({ ...b, [key]: value }));
  }

  function updatePost(index: number, patch: Partial<Post>) {
    updateBlog((b) => ({ ...b, posts: b.posts.map((post, i) => (i === index ? { ...post, ...patch } : post)) }));
  }

  function addPost() {
    updateBlog((b) => ({
      ...b,
      posts: [
        ...b.posts,
        { slug: "", category: "", title: "", excerpt: "", content: [], author: "", date: "", readTime: "" },
      ],
    }));
  }

  function removePost(index: number) {
    updateBlog((b) => ({ ...b, posts: b.posts.filter((_, i) => i !== index) }));
  }

  function handleSave() {
    // No backend yet — logs the edited content for both locales as a
    // placeholder for wiring a real content API later.
    console.log("Blog content saved (demo):", content);
    setSaved(true);
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight text-ink">Kelola Blog</p>
          <p className="mt-1 text-sm text-ink/60">
            Ubah copywriting dan daftar artikel yang tampil di beranda dan halaman /blog.
          </p>
        </div>

        <LocaleTabs active={activeLocale} onChange={setActiveLocale} />
      </div>

      <div className="rounded-2xl border border-line bg-paper p-6">
        <p className="font-display text-base font-semibold text-ink">Copywriting Section</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Field label="Eyebrow" value={blog.eyebrow} onChange={(v) => updateField("eyebrow", v)} />
          <Field label="Label Lihat Semua" value={blog.viewAllLabel} onChange={(v) => updateField("viewAllLabel", v)} />
          <Field label="Judul (bagian utama)" value={blog.titleMain} onChange={(v) => updateField("titleMain", v)} />
          <Field
            label="Judul (bagian aksen merah)"
            value={blog.titleAccent}
            onChange={(v) => updateField("titleAccent", v)}
          />
        </div>
        <div className="mt-4">
          <TextAreaField label="Deskripsi" value={blog.description} onChange={(v) => updateField("description", v)} />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <p className="font-display text-base font-semibold text-ink">Artikel ({blog.posts.length})</p>
        {blog.posts.map((post, index) => (
          <div key={index} className="rounded-2xl border border-line bg-paper p-6">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-medium text-ink/50">Artikel {index + 1}</p>
              <button
                type="button"
                onClick={() => removePost(index)}
                aria-label="Hapus artikel"
                className="shrink-0 rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-signal"
              >
                <LuTrash2 className="size-4" />
              </button>
            </div>

            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <Field label="Judul" value={post.title} onChange={(v) => updatePost(index, { title: v })} />
              <Field label="Kategori" value={post.category} onChange={(v) => updatePost(index, { category: v })} />
              <Field label="Slug" value={post.slug} onChange={(v) => updatePost(index, { slug: v })} />
              <Field label="Penulis" value={post.author} onChange={(v) => updatePost(index, { author: v })} />
              <Field label="Tanggal" value={post.date} onChange={(v) => updatePost(index, { date: v })} />
              <Field label="Estimasi Baca" value={post.readTime} onChange={(v) => updatePost(index, { readTime: v })} />
            </div>
            <div className="mt-4">
              <TextAreaField label="Ringkasan" value={post.excerpt} onChange={(v) => updatePost(index, { excerpt: v })} />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addPost}
          className="flex items-center gap-1.5 self-start text-sm font-medium text-signal hover:underline"
        >
          <LuPlus className="size-4" />
          Tambah Artikel
        </button>
      </div>

      <SaveBar saved={saved} onSave={handleSave} />
    </div>
  );
}
