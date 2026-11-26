"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type RefObject } from "react";
import QuickContactForm from "@/components/QuickContactForm";
import MapEmbed from "@/components/MapEmbed";
import { advantages, fleet, reviews, services, stats } from "@/lib/site-content";
import { articles } from "@/app/blog/articles";

const galleryImages = Array.from({ length: 10 }, (_, index) => index + 1);

function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <p className={`mb-3 text-xs font-bold uppercase tracking-[0.22em] ${light ? "text-[#ff8753]" : "text-[#c94a19]"}`}>{eyebrow}</p>
      <h2 className={`text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[3.25rem] ${light ? "text-white" : "text-[#211719]"}`}>{title}</h2>
      {description && <p className={`mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base ${light ? "text-white/65" : "text-[#6b6063]"}`}>{description}</p>}
    </div>
  );
}

function TruckLineIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 36" fill="none" className={className}>
      <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h24A2.5 2.5 0 0 1 32 6.5V26H3V6.5Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M32 12h7.2a3 3 0 0 1 2.5 1.35L46 20v6H32V12Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M3 26h43" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="28" r="4" fill="#fff" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="37" cy="28" r="4" fill="#fff" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function HomePage() {
  const reviewTrack = useRef<HTMLDivElement>(null);
  const galleryTrack = useRef<HTMLDivElement>(null);
  const [reviewsPaused, setReviewsPaused] = useState(false);
  const [galleryDragging, setGalleryDragging] = useState(false);
  const galleryDrag = useRef({ active: false, startX: 0, startScrollLeft: 0 });

  useEffect(() => {
    const track = reviewTrack.current;
    if (!track || reviewsPaused || window.matchMedia("(max-width: 1023px)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 0) return;
      if (track.scrollLeft >= maxScroll - 24) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: 360, behavior: "smooth" });
      }
    }, 4200);

    return () => window.clearInterval(timer);
  }, [reviewsPaused]);

  const scrollTrack = (ref: RefObject<HTMLDivElement | null>, direction: -1 | 1, distance: number) => {
    ref.current?.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  const handleGalleryPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    galleryDrag.current = {
      active: true,
      startX: event.clientX,
      startScrollLeft: event.currentTarget.scrollLeft,
    };
    setGalleryDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleGalleryPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!galleryDrag.current.active) return;
    event.currentTarget.scrollLeft = galleryDrag.current.startScrollLeft - (event.clientX - galleryDrag.current.startX);
  };

  const handleGalleryPointerEnd = () => {
    if (!galleryDrag.current.active) return;
    galleryDrag.current.active = false;
    setGalleryDragging(false);
  };

  return (
    <main id="top" className="bg-[#fbf9f8] text-[#211719]">
      {/* HERO — Langa-ÉP-inspired composition, retaining Fuják Trans colours and glass. */}
      <section className="ft-hero relative isolate flex min-h-[650px] items-center justify-center overflow-hidden px-5 py-14 text-center text-white sm:px-6 sm:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#1d191a]">
          <div className="absolute inset-0 bg-[linear-gradient(112deg,#171314_0%,#21191a_56%,#2c1715_100%)]" />
          <div className="absolute -right-[22%] bottom-[-18%] h-[560px] w-[560px] rounded-full bg-[#f54d05]/45 blur-[145px] sm:-right-[8%] sm:h-[740px] sm:w-[740px]" />
          <div className="absolute -left-[24%] top-[-18%] h-[420px] w-[420px] rounded-full bg-[#4A0404]/65 blur-[135px] sm:h-[560px] sm:w-[560px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_12%,rgba(16,10,11,.38)_100%)]" />
        </div>

        <div className="mx-auto w-full max-w-[980px]">
          <div className="ft-hero-pill mx-auto mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-[#f54d05]/45 bg-[#f54d05] px-5 py-2.5 text-[11px] font-extrabold tracking-[0.055em] text-[#210e0b] shadow-[0_8px_32px_rgba(245,77,5,.24)] sm:mb-8 sm:px-6 sm:text-sm">
            <span className="inline-flex shrink-0 items-center gap-2" aria-hidden="true">
              
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#4A0404] shadow-[0_0_12px_rgba(74,4,4,.65)]" />
            </span>
            Gyors
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#4A0404] shadow-[0_0_12px_rgba(74,4,4,.65)]" />
            Biztonságos
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#4A0404] shadow-[0_0_12px_rgba(74,4,4,.65)]" />
            Szervezett
          </div>

          <h1 className="mx-auto max-w-[900px] text-balance text-[clamp(2.45rem,8vw,5.25rem)] font-bold leading-[1.07] tracking-[-0.045em] text-white">
            Professzionális <span className="ft-orange-text">megoldások</span> a Fuják Transnál
          </h1>

          <p className="mx-auto mt-6 max-w-[760px] text-pretty text-[15px] leading-7 text-white/75 sm:mt-7 sm:text-lg sm:leading-8">
            Költöztetés, fuvarozás, áruszállítás és lomtalanítás. Modern megoldásokkal és tapasztalt csapattal.
          </p>

          <div className="mx-auto mt-9 flex w-full max-w-[540px] flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center">
            <a href="#contact" className="ft-button-primary min-h-[58px] w-full rounded-[18px] text-base sm:w-auto sm:min-w-[220px] sm:rounded-full">Kapcsolatfelvétel</a>
            <a href="#services" className="ft-button-hero-secondary min-h-[58px] w-full rounded-[18px] text-base sm:w-auto sm:min-w-[220px] sm:rounded-full">Szolgáltatásaink</a>
          </div>

          <p className="mx-auto mt-7 max-w-[620px] text-xs leading-6 text-white/52 sm:text-sm">
            Nyíregyházáról indulva, országosan és nemzetközi viszonylatban is vállalunk szállításokat.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section aria-label="Főbb számok" className="relative z-10 -mt-2 px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="mx-auto grid max-w-[1160px] grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-4">
          {stats.map((item, index) => (
            <div key={item.label} className="ft-glass-card group relative min-w-0 overflow-hidden rounded-[21px] px-3 py-5 text-center sm:rounded-[26px] sm:px-5 sm:py-7">
              <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full bg-[#f54d05]/[0.08] blur-2xl transition group-hover:bg-[#f54d05]/[0.16]" />
              <p className="relative text-2xl font-bold tracking-tight text-[#d94c15] sm:text-4xl">{item.value}</p>
              <p className="relative mt-2 text-[9px] font-semibold uppercase leading-4 tracking-[0.08em] text-[#6e6063] sm:text-xs sm:tracking-[0.12em]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* A korábbi nyitóképi referencia megmarad, az új hero után rendezett vizuális blokkban. */}
      <section className="px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="mx-auto max-w-[1160px]">
          <div className="relative isolate aspect-[16/9] overflow-hidden rounded-[28px] border border-white/80 bg-[#160d10] shadow-[0_24px_70px_rgba(35,12,17,0.16)] sm:aspect-[16/6] sm:rounded-[34px]">
            <Image
              src="/images/hero-truck.webp"
              alt="A Fuják Trans költöztető teherautója"
              fill
              sizes="(max-width: 640px) 100vw, 1160px"
              loading="lazy"
              className="object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#160d10]/85 via-[#160d10]/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:bottom-auto sm:inset-y-0 sm:flex sm:max-w-[600px] sm:flex-col sm:justify-center sm:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#ff9a61] sm:text-xs">Fuják Trans · Nyíregyháza</p>
              <h2 className="mt-2 text-balance text-2xl font-semibold leading-tight tracking-tight sm:mt-4 sm:text-4xl">Az Ön bútorai. <span className="text-[#ff8753]">A mi hírnevünk.</span></h2>
              <p className="mt-2 max-w-md text-xs leading-5 text-white/75 sm:mt-4 sm:text-sm sm:leading-7">Költöztetés, fuvarozás és áruszállítás tapasztalt csapattal, gondos rakodással.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — a feltöltött szöveg tartalmával */}
      <section id="why-us" className="ft-section-anchor px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-[1320px]">
          <SectionHeading
            eyebrow="Miért minket válasszon?"
            title="Miért minket válasszon?"
            description="Egy költözés vagy szállítás sok szervezéssel és feladattal jár. Mi abban segítünk, hogy mindez egyszerűbben, gyorsabban és kevesebb stresszel menjen. Legyen szó néhány bútor elszállításáról vagy egy teljes lakás költöztetéséről, számíthat ránk."
          />

          <div className="mb-6 overflow-hidden rounded-[26px] border border-[#f54d05]/20 bg-gradient-to-r from-[#4A0404] via-[#70230f] to-[#f54d05] p-[1px] shadow-[0_18px_55px_rgba(74,4,4,0.12)]">
            <div className="flex flex-col gap-3 rounded-[25px] bg-[#1a1012]/95 px-5 py-5 text-center sm:flex-row sm:items-center sm:justify-center sm:gap-4 sm:px-7">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-full bg-[#f54d05]/15 text-xl text-[#ff8753]">↻</span>
              <p className="text-base font-bold leading-6 text-white sm:text-lg">Műszaki meghibásodás esetén azonnali csereautót biztosítunk!</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
            {advantages.map((item) => (
              <article key={item.number} className="ft-glass-card group relative min-w-0 overflow-hidden rounded-[24px] p-5 sm:p-6">
                <div aria-hidden="true" className="absolute -right-9 -top-9 h-24 w-24 rounded-full bg-[#f54d05]/[0.07] blur-2xl transition group-hover:bg-[#f54d05]/[0.17]" />
                <div className="relative mb-5 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.16em] text-[#c74a19]">{item.number}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#f54d05]/20 bg-[#f54d05]/[0.06] text-sm font-bold text-[#c74a19]">✓</span>
                </div>
                <h3 className="relative text-lg font-bold leading-snug text-[#251a1d]">{item.title}</h3>
                <p className="relative mt-3 text-sm leading-6 text-[#6b6063]">{item.description}</p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-base font-semibold leading-7 text-[#4A0404] sm:text-lg">
            Önnek nem kell mindent egyedül megoldania. Mi segítünk a nehéz munkában!
          </p>
          <div className="mt-4 text-center">
            <a href="#reviews" className="inline-flex items-center gap-2 text-sm font-bold text-[#bd4416] underline decoration-[#f54d05]/30 underline-offset-4 transition hover:text-[#4A0404]">Nézze meg ügyfeleink véleményeit <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="ft-section-anchor relative overflow-hidden bg-[#f3efed] px-4 py-16 sm:px-6 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-[#f54d05]/[0.08] blur-[120px]" />
        <div className="relative mx-auto max-w-[1320px]">
          <SectionHeading
            eyebrow="Szolgáltatásaink"
            title="Minden szállítási feladatra találunk megoldást."
            description="Lakásoktól és irodáktól kezdve a sürgős fuvarokon át a speciális szállításig. Válassza ki, miben segíthetünk."
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="ft-glass-card group flex min-w-0 flex-col rounded-[25px] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#f54d05]/35 hover:shadow-[0_24px_55px_rgba(80,34,25,0.12)] sm:p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-[17px] border border-[#f54d05]/10 bg-white/80 p-1.5 transition group-hover:bg-white">
                    <Image src="/images/logo.png" alt="" width={72} height={72} sizes="48px" className="h-full w-full object-contain" />
                  </span>
                  <span className="text-xs font-bold tracking-[0.16em] text-[#b8a8a4]">{service.number}</span>
                </div>
                <h3 className="text-lg font-bold leading-snug text-[#251a1d] sm:text-xl">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#6d6265]">{service.description}</p>
                <div className="mt-5 flex items-center justify-between gap-2 border-t border-[#4A0404]/[0.07] pt-4">
                  <Link href="/ajanlatkeres" className="inline-flex min-h-10 items-center gap-1.5 text-sm font-bold text-[#bc4519] transition hover:gap-2.5 hover:text-[#4A0404]">Ajánlatot kérek <span aria-hidden="true">→</span></Link>
                  <Link href={`/szolgaltatasok/${service.slug}`} className="inline-flex min-h-10 shrink-0 items-center justify-center gap-1.5 rounded-full border border-[#4A0404]/15 bg-white/65 px-3 text-xs font-bold text-[#4A0404] transition hover:border-[#f54d05]/45 hover:bg-[#f54d05]/[0.07] sm:px-4 sm:text-sm">További részletek <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-6 text-[#7b7072]">Egyedi igény esetén is keressen minket — a feladat részleteit előzetesen egyeztetjük.</p>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className="ft-section-anchor px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-[1320px]">
          <SectionHeading
            eyebrow="Járműpark"
            title="A feladathoz illő járművel érkezünk."
            description="Flottánk jelenleg 3 gépjárműből áll, amelyet igény esetén további járművekkel is bővíteni tudunk. Járműveink rendszeresen karbantartottak, megbízhatóak és a költöztetési, valamint áruszállítási feladatokhoz megfelelően felszereltek."
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {fleet.map((vehicle, index) => (
              <article key={`${vehicle.type}-${index}`} className="ft-glass-card group relative min-w-0 overflow-hidden rounded-[28px] p-5 sm:p-6">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#f54d05] via-[#ff9a61] to-[#4A0404]" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c94a19]">{`Jármű 0${index + 1}`}</p>
                    <h3 className="mt-2 text-xl font-bold text-[#251a1d]">{vehicle.type}</h3>
                    {vehicle.capacity && <p className="mt-1 text-sm text-[#756a6d]">{vehicle.capacity}</p>}
                  </div>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-[#f54d05]/[0.08] text-[#c94a19] transition group-hover:scale-105">
                    <TruckLineIcon className="h-8 w-10" />
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-2">
                  <div className="rounded-2xl bg-[#f5f0ee] p-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8b7b7e]">Hosszúság</p>
                    <p className="mt-1 text-lg font-bold text-[#4A0404]">{vehicle.length}</p>
                  </div>
                  {vehicle.width && vehicle.height ? (
                    <div className="rounded-2xl bg-[#f5f0ee] p-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8b7b7e]">Szélesség / magasság</p>
                      <p className="mt-1 text-lg font-bold text-[#4A0404]">{vehicle.width} / {vehicle.height}</p>
                    </div>
                  ) : (
                    <div className="rounded-2xl bg-[#f5f0ee] p-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8b7b7e]">Járműtípus</p>
                      <p className="mt-1 text-lg font-bold text-[#4A0404]">Teherautó</p>
                    </div>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-[#6d6265]">{vehicle.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Link href="/jarmupark" className="ft-button-secondary">Járműpark részletei <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section id="reviews" className="ft-section-anchor relative overflow-hidden bg-[#160d10] py-16 text-white sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-44 top-0 h-[500px] w-[500px] rounded-full bg-[#f54d05]/15 blur-[130px]" />
        <div className="relative mx-auto max-w-[1320px]">
          <div className="px-4 sm:px-6">
            <SectionHeading eyebrow="Google-vélemények" title="Amit ügyfeleink mondanak." description="Valódi visszajelzések valós ügyfelektől. A kártyákat vízszintesen lapozhatja." light />
            <div className="mb-6 flex items-center justify-center gap-2">
              <span className="text-2xl font-bold text-white">4.9</span>
              <span className="text-lg tracking-[0.12em] text-[#ff9a43]">★★★★★</span>
              <span className="text-xs text-white/45">Google-értékelés</span>
            </div>
          </div>

          <div className="relative">
            <div
              ref={reviewTrack}
              onMouseEnter={() => setReviewsPaused(true)}
              onMouseLeave={() => setReviewsPaused(false)}
              onFocusCapture={() => setReviewsPaused(true)}
              onBlurCapture={() => setReviewsPaused(false)}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-6"
            >
              {reviews.map((review, index) => (
                <article key={`${review.name}-${index}`} className="ft-review-card flex w-[min(86vw,390px)] shrink-0 snap-center flex-col rounded-[25px] border border-white/10 bg-white/[0.075] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="text-lg tracking-[0.12em] text-[#ff9a43]">★★★★★</span>
                    <Image src="/images/google-icon.webp" alt="Google" width={25} height={25} sizes="25px" className="h-6 w-6 object-contain opacity-85" />
                  </div>
                  <p className="flex-1 text-sm leading-7 text-white/78">“{review.text}”</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f54d05] text-sm font-bold text-white">{review.name.charAt(0)}</span>
                    <div className="min-w-0"><p className="truncate text-sm font-bold text-white">{review.name}</p><p className="mt-0.5 text-xs text-white/45">Google-vélemény</p></div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-3">
              <button type="button" aria-label="Előző vélemények" onClick={() => scrollTrack(reviewTrack, -1, 380)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-lg text-white transition hover:border-[#f54d05]/60 hover:bg-white/10">←</button>
              <button type="button" aria-label="Következő vélemények" onClick={() => scrollTrack(reviewTrack, 1, 380)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-lg text-white transition hover:border-[#f54d05]/60 hover:bg-white/10">→</button>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="ft-section-anchor overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#c94a19]">Referenciák</p>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#211719] sm:text-4xl lg:text-[3.1rem]">Munkáink képekben.</h2>
              <p className="mt-3 text-sm leading-7 text-[#6b6063] sm:text-base">Nézzen körül korábbi munkáink között, a teljes galériában további képeket és videókat talál.</p>
            </div>
            <div className="hidden shrink-0 items-center gap-2 sm:flex">
              <button type="button" aria-label="Előző képek" onClick={() => scrollTrack(galleryTrack, -1, 560)} className="ft-round-arrow">←</button>
              <button type="button" aria-label="Következő képek" onClick={() => scrollTrack(galleryTrack, 1, 560)} className="ft-round-arrow">→</button>
              <Link href="/referenciak" className="ft-button-secondary ml-2">Teljes galéria <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div
            ref={galleryTrack}
            onPointerDown={handleGalleryPointerDown}
            onPointerMove={handleGalleryPointerMove}
            onPointerUp={handleGalleryPointerEnd}
            onPointerCancel={handleGalleryPointerEnd}
            onLostPointerCapture={handleGalleryPointerEnd}
            className={`flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${galleryDragging ? "cursor-grabbing select-none snap-none" : "cursor-grab"}`}
            aria-label="Fuják Trans referenciafotók – vízszintesen görgethető galéria"
          >
            {galleryImages.map((image) => (
              <div key={image} className="relative aspect-[4/3] w-[82vw] shrink-0 snap-center overflow-hidden rounded-[25px] border border-white/80 bg-[#e8e1de] shadow-[0_18px_50px_rgba(36,15,20,0.10)] sm:w-[440px]">
                <Image src={`/images/gallery-${image}.webp`} alt={`Fuják Trans referencia ${image}`} fill sizes="(max-width: 640px) 82vw, 440px" loading="lazy" className="object-cover transition duration-700 hover:scale-[1.04]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-60" />
              </div>
            ))}
          </div>
          <div className="mt-5 flex justify-center sm:hidden"><Link href="/referenciak" className="ft-button-secondary">Teljes galéria megtekintése <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#c94a19]">Szakmai blog</p>
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-[#211719] sm:text-4xl lg:text-[3.1rem]">Hasznos tudnivalók költözéshez és szállításhoz.</h2>
              <p className="mt-3 text-sm leading-7 text-[#6b6063] sm:text-base">Összegyűjtöttük a legfontosabb tudnivalókat és gyakorlati tanácsokat.</p>
            </div>
            <Link href="/blog" className="ft-button-secondary self-start sm:self-auto">Minden cikk <span aria-hidden="true">→</span></Link>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 sm:gap-4">
            {articles.slice(0, 3).map((article, index) => (
              <article key={article.slug} className="ft-glass-card flex min-w-0 flex-col rounded-[25px] p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#f54d05]/[0.09] px-3 py-1.5 text-[11px] font-bold text-[#b9471c]">{article.category}</span>
                  <span className="text-xs font-bold tracking-[0.14em] text-[#c4b4af]">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold leading-snug text-[#251a1d]">{article.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#6d6265]">{article.excerpt}</p>
                <Link href={`/blog/${article.slug}`} className="mt-5 inline-flex min-h-10 items-center gap-2 self-start text-sm font-bold text-[#bd4519]">Elolvasom <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROMINENT CTA */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="ft-cta-panel relative mx-auto max-w-[1240px] overflow-hidden rounded-[30px] px-5 py-10 text-center text-white sm:rounded-[36px] sm:px-10 sm:py-14 lg:py-16">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-white/10 blur-[85px]" />
          <p className="relative mb-3 text-xs font-bold uppercase tracking-[0.22em] text-white/70">Gyors kapcsolatfelvétel</p>
          <h2 className="relative mx-auto max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Költözést vagy szállítást tervez?</h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">Kérjen ingyenes, személyre szabott ajánlatot, és pár órán belül felvesszük Önnel a kapcsolatot.</p>
          <div className="relative mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/ajanlatkeres" className="ft-button-light min-h-[52px]">Ajánlatkérés indítása</Link>
            <a href="tel:+36206180015" className="ft-button-glass min-h-[52px]">Hívás: +36 20 618 0015</a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="ft-section-anchor bg-[#f1ecea] px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-[1320px]">
          <SectionHeading eyebrow="Kapcsolat" title="Beszéljük át, mire van szüksége." description="Küldjön rövid üzenetet, vagy használja a részletes ajánlatkérőt, ha már ismeri a szállítás legfontosabb adatait." />
          <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
            <div className="flex min-w-0 flex-col gap-4">
              <div className="ft-glass-card rounded-[26px] p-5 sm:p-7">
                <h3 className="text-xl font-bold text-[#251a1d]">Elérhetőségeink</h3>
                <div className="mt-5 space-y-4">
                  <a href="tel:+36206180015" className="flex min-w-0 items-start gap-3 rounded-2xl p-2 transition hover:bg-[#f54d05]/[0.05]">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f54d05]/10 text-[#c94a19]">☎</span>
                    <span className="min-w-0"><span className="block text-xs text-[#8b7c80]">Telefon</span><span className="mt-0.5 block break-words font-bold text-[#4A0404]">+36 20 618 0015</span></span>
                  </a>
                  <a href="mailto:csabafujak@icloud.com" className="flex min-w-0 items-start gap-3 rounded-2xl p-2 transition hover:bg-[#f54d05]/[0.05]">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f54d05]/10 text-[#c94a19]">✉</span>
                    <span className="min-w-0"><span className="block text-xs text-[#8b7c80]">E-mail</span><span className="mt-0.5 block break-all font-bold text-[#4A0404]">csabafujak@icloud.com</span></span>
                  </a>
                  <div className="flex min-w-0 items-start gap-3 rounded-2xl p-2">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f54d05]/10 text-[#c94a19]">⌖</span>
                    <span className="min-w-0"><span className="block text-xs text-[#8b7c80]">Cím</span><span className="mt-0.5 block break-words font-bold text-[#4A0404]">Nyíregyháza, Pazonyi út 39., 4400</span></span>
                  </div>
                </div>
                <div className="mt-5 border-t border-black/[0.07] pt-5">
                  <h4 className="text-sm font-bold text-[#251a1d]">Ügyfélszolgálat</h4>
                  <p className="mt-2 text-sm leading-6 text-[#6d6265]">Hétfő–szombat: <strong className="text-[#4A0404]">8:00–18:00</strong><br />Vasárnap a telefonos ügyfélszolgálat szünetel, kérjük, keressen e-mailben.</p>
                  <p className="mt-3 text-xs leading-5 text-[#8b7c80]">Nyitvatartási időn kívüli szállítás megbeszélés alapján.</p>
                </div>
              </div>
              <MapEmbed />
            </div>

            <div className="ft-glass-card min-w-0 rounded-[28px] p-5 sm:p-7 lg:p-8">
              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c94a19]">Gyors kapcsolatfelvétel</p><h3 className="mt-2 text-2xl font-bold text-[#251a1d]">Írjon nekünk</h3></div>
                <Link href="/ajanlatkeres" className="text-sm font-bold text-[#bd4519] underline decoration-[#f54d05]/30 underline-offset-4">Részletes ajánlatkérő →</Link>
              </div>
              <QuickContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE ACTIONS */}
      <div className="fixed inset-x-0 bottom-0 z-[80] px-3 pb-[calc(0.65rem+env(safe-area-inset-bottom))] pt-3 md:hidden">
        <div className="mx-auto grid max-w-[460px] grid-cols-2 gap-2 rounded-[24px] border border-white/80 bg-white/88 p-2 shadow-[0_12px_42px_rgba(25,10,14,0.18)] backdrop-blur-2xl">
          <a href="tel:+36206180015" className="flex min-h-12 items-center justify-center gap-2 rounded-[17px] bg-[#4A0404] px-3 text-sm font-bold text-white transition active:scale-[0.98]">☎ Hívás</a>
          <Link href="/ajanlatkeres" className="flex min-h-12 items-center justify-center rounded-[17px] bg-[#f54d05] px-3 text-sm font-bold text-white shadow-[0_6px_18px_rgba(245,77,5,0.22)] transition active:scale-[0.98]">Árajánlat</Link>
        </div>
      </div>
    </main>
  );
}
