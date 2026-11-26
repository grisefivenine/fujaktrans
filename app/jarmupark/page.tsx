import type { Metadata } from "next";
import Link from "next/link";
import { fleet } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Járműpark",
  description: "Ismerje meg a Fuják Trans költöztetési és áruszállítási flottáját, a három teherautó megadott méreteit.",
};

function VehicleIcon() {
  return <svg aria-hidden="true" viewBox="0 0 48 36" fill="none" className="h-12 w-14 text-[#f54d05]"><path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h24A2.5 2.5 0 0 1 32 6.5V26H3V6.5Z" stroke="currentColor" strokeWidth="1.8"/><path d="M32 12h7.2a3 3 0 0 1 2.5 1.35L46 20v6H32V12Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><circle cx="12" cy="28" r="4" fill="white" stroke="currentColor" strokeWidth="1.8"/><circle cx="37" cy="28" r="4" fill="white" stroke="currentColor" strokeWidth="1.8"/></svg>;
}

export default function FleetPage() {
  return (
    <main className="min-h-screen bg-[#f7f3f1] px-4 pb-20 pt-14 sm:px-6 sm:pt-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#c94a19]">Fuják Trans · Járműpark</p>
          <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-[#211719] sm:text-4xl lg:text-5xl">Megbízható járművek a biztonságos szállításhoz.</h1>
          <p className="mt-4 text-sm leading-7 text-[#6b6063] sm:text-base">Flottánk jelenleg 3 gépjárműből áll, amelyet igény esetén további járművekkel is bővíteni tudunk. Járműveink rendszeresen karbantartottak, megbízhatóak és a költöztetési, valamint áruszállítási feladatokhoz megfelelően felszereltek, biztosítva a rakomány biztonságos és hatékony szállítását.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {fleet.map((vehicle, index) => (
            <article key={`${vehicle.type}-${index}`} className="ft-glass-card relative min-w-0 overflow-hidden rounded-[28px] p-5 sm:p-7">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#f54d05] via-[#ff9a61] to-[#4A0404]" />
              <div className="flex items-center justify-between gap-4">
                <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c94a19]">Jármű 0{index + 1}</p><h2 className="mt-2 text-2xl font-bold text-[#251a1d]">{vehicle.type}</h2></div>
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] bg-[#f54d05]/[0.08]"><VehicleIcon /></span>
              </div>
              {vehicle.capacity && <p className="mt-5 text-lg font-bold text-[#4A0404]">{vehicle.capacity}</p>}
              <dl className="mt-5 space-y-3 rounded-[20px] bg-[#f5f0ee] p-4 text-sm">
                <div className="flex items-center justify-between gap-3"><dt className="text-[#7a6e71]">Hosszúság</dt><dd className="font-bold text-[#251a1d]">{vehicle.length}</dd></div>
                <div className="flex items-center justify-between gap-3"><dt className="text-[#7a6e71]">Szélesség</dt><dd className="font-bold text-[#251a1d]">{vehicle.width}</dd></div>
                <div className="flex items-center justify-between gap-3"><dt className="text-[#7a6e71]">Magasság</dt><dd className="font-bold text-[#251a1d]">{vehicle.height}</dd></div>
              </dl>
              <p className="mt-4 text-sm leading-6 text-[#6d6265]">{vehicle.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[28px] bg-[#160d10] p-6 text-center text-white sm:p-9">
          <p className="text-lg font-semibold">Nem biztos benne, melyik jármű lenne megfelelő?</p>
          <p className="mt-2 text-sm leading-6 text-white/65">Írja le, mit szeretne szállíttatni, és segítünk kiválasztani a megfelelő megoldást.</p>
          <Link href="/ajanlatkeres" className="ft-button-primary mt-6 inline-flex">Személyre szabott ajánlat →</Link>
        </div>
      </div>
    </main>
  );
}
