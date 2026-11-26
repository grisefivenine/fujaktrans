"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const images = Array.from({ length: 82 }, (_, index) => index + 1);

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);
  const move = useCallback((direction: -1 | 1) => {
    setSelected((current) => {
      if (current === null) return current;
      return ((current - 1 + direction + images.length) % images.length) + 1;
    });
  }, []);

  useEffect(() => {
    if (selected === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected, close, move]);

  return (
    <main className="min-h-screen bg-[#fbf9f8] px-4 pb-20 pt-14 sm:px-6 sm:pt-20">
      <div className="mx-auto max-w-[1320px]">
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#c94a19]">Fuják Trans · Referenciák</p>
          <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-[#211719] sm:text-4xl lg:text-5xl">Munkáink képekben.</h1>
          <p className="mt-4 text-sm leading-7 text-[#6b6063] sm:text-base">Nézze meg korábbi költöztetéseinket és szállítási munkáinkat a teljes galériában.</p>
        </header>

        <section className="mb-10 overflow-hidden rounded-[26px] border border-white/80 bg-white/70 p-2 shadow-[0_18px_55px_rgba(35,12,17,.09)] backdrop-blur-xl sm:mb-14 sm:rounded-[32px] sm:p-3">
          <video controls playsInline preload="metadata" poster="/images/gallery-3.webp" className="aspect-video w-full rounded-[19px] bg-[#171112] object-cover sm:rounded-[24px]">
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            A böngészője nem támogatja a videó lejátszását.
          </video>
        </section>

        <div className="mb-5 flex items-center justify-between gap-3">
          <h2 className="text-xl font-bold text-[#251a1d] sm:text-2xl">Fotógaléria</h2>
          <span className="rounded-full border border-[#4A0404]/10 bg-white/80 px-3 py-1.5 text-xs font-semibold text-[#716568]">{images.length} kép</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {images.map((image) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelected(image)}
              aria-label={`Referenciafotó megnyitása: ${image}. kép`}
              className="group relative aspect-square min-w-0 overflow-hidden rounded-[18px] border border-white/80 bg-[#e8e1de] text-left shadow-[0_8px_24px_rgba(35,12,17,.06)] focus-visible:outline-offset-4 sm:rounded-[24px]"
            >
              <Image
                src={`/images/gallery-${image}.webp`}
                alt={`Fuják Trans referenciafotó ${image}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#100b0d]/95 p-3 backdrop-blur-xl sm:p-6" role="dialog" aria-modal="true" aria-label={`Referenciafotó ${selected}. kép`}>
          <button type="button" onClick={close} aria-label="Galéria bezárása" className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur-xl sm:right-6 sm:top-6">×</button>
          <button type="button" onClick={() => move(-1)} aria-label="Előző kép" className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur-xl sm:left-6">‹</button>
          <div className="relative h-[72svh] w-full max-w-[1200px] sm:h-[84svh]">
            <Image src={`/images/gallery-${selected}.webp`} alt={`Fuják Trans referenciafotó ${selected}`} fill sizes="100vw" priority className="object-contain" />
          </div>
          <button type="button" onClick={() => move(1)} aria-label="Következő kép" className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur-xl sm:right-6">›</button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur-xl">{selected} / {images.length}</p>
        </div>
      )}
    </main>
  );
}
