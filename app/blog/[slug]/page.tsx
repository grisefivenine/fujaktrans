import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "../articles";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Cikk nem található" };
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <main className="min-h-screen bg-[#f7f3f1] px-4 pb-20 pt-14 sm:px-6 sm:pt-20">
      <article className="mx-auto max-w-[820px]">
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#b9471c] transition hover:text-[#4A0404]">← Vissza a szakmai bloghoz</Link>
        <header className="mb-10 mt-7 border-b border-black/[0.08] pb-8">
          <span className="rounded-full bg-[#f54d05]/[0.09] px-3 py-1.5 text-[11px] font-bold text-[#b9471c]">{article.category}</span>
          <h1 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight text-[#211719] sm:text-4xl lg:text-5xl">{article.title}</h1>
          <p className="mt-5 text-base leading-7 text-[#6b6063]">{article.excerpt}</p>
          <p className="mt-5 text-xs text-[#8d8083]">Olvasási idő: {article.readTime}</p>
        </header>
        <div className="space-y-9">
          {article.sections.map((section) => (
            <section key={section.heading} className="min-w-0">
              <h2 className="text-xl font-bold text-[#2a1c20] sm:text-2xl">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-sm leading-7 text-[#5f5558] sm:text-base">{paragraph}</p>)}
              {section.bullets && <ul className="mt-4 space-y-2 pl-5 text-sm leading-7 text-[#5f5558] sm:text-base">{section.bullets.map((bullet) => <li key={bullet} className="list-disc marker:text-[#f54d05]">{bullet}</li>)}</ul>}
            </section>
          ))}
        </div>
        <div className="mt-12 rounded-[28px] bg-[#160d10] p-6 text-white sm:p-8">
          <h2 className="text-2xl font-semibold">Költözést vagy szállítást tervez?</h2>
          <p className="mt-3 text-sm leading-6 text-white/65">Kérjen személyre szabott ajánlatot a Fuják Trans csapatától.</p>
          <Link href="/ajanlatkeres" className="ft-button-primary mt-6 inline-flex">Ajánlatkérés →</Link>
        </div>
      </article>
    </main>
  );
}
