// Article.imageUrl from the backend is just a relative path (e.g.
// "/uploads/articles/x.png") — the backend never bakes in a host, since that
// host can change (local dev tunnel, production domain, etc). The frontend
// builds the full URL itself using whichever backend it's currently pointed
// at.
export function toArticleImageUrl(imageUrl: string): string {
  return `${process.env.NEXT_PUBLIC_BACKEND_URL}${imageUrl}`;
}
