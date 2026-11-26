import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "./articles";

export const metadata: Metadata = {
  title: "Szakmai blog",
  description: "Költöztetési, csomagolási és szállítási tanácsok a Fuják Trans szakmai blogján.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f7f3f1] px-4 pb-20 pt-14 sm:px-6 sm:pt-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#c94a19]">Fuják Trans · Tudástár</p>
          <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-[#211719] sm:text-4xl lg:text-5xl">Szakmai blog és hasznos tanácsok.</h1>
          <p className="mt-4 text-sm leading-7 text-[#6b6063] sm:text-base">Útmutatók költözéshez, csomagoláshoz és különleges szállítási feladatokhoz.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <article key={article.slug} className="ft-glass-card group flex min-w-0 flex-col rounded-[27px] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(80,34,25,0.12)] sm:p-6">
              <div className="mb-6 flex items-center justify-between gap-3"><span className="rounded-full bg-[#f54d05]/[0.09] px-3 py-1.5 text-[11px] font-bold text-[#b9471c]">{article.category}</span><span className="text-xs text-[#8d8083]">{article.readTime}</span></div>
              <p className="text-xs font-bold tracking-[0.16em] text-[#c4b4af]">{`0${index + 1}`}</p>
              <h2 className="mt-3 text-xl font-bold leading-snug text-[#251a1d]">{article.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-[#6d6265]">{article.excerpt}</p>
              <Link href={`/blog/${article.slug}`} className="mt-6 inline-flex min-h-10 items-center gap-2 text-sm font-bold text-[#bd4519] transition hover:gap-3">Elolvasom <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
