import type { Metadata } from "next";

export const metadata: Metadata = { title: "Általános Szerződési Feltételek", description: "A Fuják Trans szolgáltatásainak általános szerződési feltételei." };

export default function ASZF() {
  return (
    <main className="ft-content-wrap py-12 text-[#211719] sm:py-16 lg:py-20">
      <header className="mb-8 max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-[#c94a19]">Fuják Trans · Jogi információk</p>
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Általános Szerződési Feltételek</h1>
      </header>
      <div className="ft-glass-card rounded-[28px] p-5 sm:p-8 lg:p-10">
        <div className="ft-prose space-y-8">
          <section>
            <h2>1. Szolgáltató</h2>
            <p>A szolgáltató: Fuják Trans</p>
          </section>
          <section>
            <h2>2. Szolgáltatások</h2>
            <p>Költöztetés, fuvarozás és kapcsolódó szolgáltatások biztosítása.</p>
          </section>
          <section>
            <h2>3. Ajánlatkérés</h2>
            <p>Az oldalon küldött ajánlatkérés nem minősül automatikus szerződéskötésnek.</p>
          </section>
          <section>
            <h2>4. Felelősség</h2>
            <p>A szolgáltató törekszik a szolgáltatások megfelelő minőségű teljesítésére.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
