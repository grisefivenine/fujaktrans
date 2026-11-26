import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceDetails } from "@/lib/service-details";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails.find((item) => item.slug === slug);
  if (!service) return { title: "Szolgáltatás" };
  return {
    title: service.title,
    description: service.excerpt,
    alternates: { canonical: `/szolgaltatasok/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceDetails.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <main className="min-h-screen bg-[#f7f3f1] px-4 pb-20 pt-12 sm:px-6 sm:pt-16">
      <div className="mx-auto max-w-[1040px]">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <Link href="/#services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#8c3820] transition hover:text-[#4A0404]">
            <span aria-hidden="true">←</span> Szolgáltatások
          </Link>
          <span className="rounded-full border border-[#f54d05]/20 bg-white/65 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a74623]">Fuják Trans · Nyíregyháza</span>
        </div>

        <header className="relative isolate mb-7 overflow-hidden rounded-[30px] bg-[#180f11] px-6 py-9 text-white shadow-[0_24px_70px_rgba(33,13,17,.14)] sm:rounded-[36px] sm:px-10 sm:py-12">
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-32 -z-10 h-80 w-80 rounded-full bg-[#f54d05]/25 blur-[95px]" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-44 -left-24 -z-10 h-80 w-80 rounded-full bg-[#4A0404]/50 blur-[100px]" />
          <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#ff9a61] sm:text-xs">Szolgáltatásaink</p>
          <h1 className="max-w-3xl text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">{service.title}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">{service.excerpt}</p>
        </header>

        <article className="ft-glass-card rounded-[28px] px-5 py-7 sm:rounded-[32px] sm:px-9 sm:py-10 lg:px-12">
          <div className="service-detail-content space-y-5">
            {service.blocks.map((block, index) => {
              if (block.type === "heading") {
                return <h2 key={index} className="pt-3 text-xl font-bold leading-snug text-[#251a1d] first:pt-0 sm:text-2xl">{block.text}</h2>;
              }
              if (block.type === "subheading") {
                return <h3 key={index} className="pt-2 text-base font-bold text-[#4A0404] sm:text-lg">{block.text}</h3>;
              }
              if (block.type === "list") {
                return (
                  <ul key={index} className="grid gap-3 sm:grid-cols-2">
                    {block.items.map((item) => (
                      <li key={item} className="flex min-w-0 items-start gap-3 rounded-2xl border border-[#4A0404]/[0.07] bg-white/55 px-4 py-3 text-sm leading-6 text-[#51484a]">
                        <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#f05a23] shadow-[0_0_10px_rgba(240,90,35,.25)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return <p key={index} className="text-[15px] leading-8 text-[#62575a]">{block.text}</p>;
            })}
          </div>
        </article>

        <section className="mt-7 overflow-hidden rounded-[28px] bg-[#180f11] px-5 py-7 text-center text-white sm:px-8 sm:py-9">
          <p className="text-xl font-semibold">Kérjen személyre szabott ajánlatot!</p>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-white/65">Mondja el, miben segíthetünk, és egyeztessük a szolgáltatás részleteit.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/ajanlatkeres" className="ft-button-primary min-h-12">Ajánlatkérés <span aria-hidden="true">→</span></Link>
            <a href="tel:+36206180015" className="ft-button-glass min-h-12">Hívás: +36 20 618 0015</a>
          </div>
        </section>
      </div>
    </main>
  );
}
