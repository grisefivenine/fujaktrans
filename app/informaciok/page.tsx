import type { Metadata } from "next";
import Link from "next/link";
import { fleet } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Információk a költöztetésről és szállításról",
  description: "Tudnivalók a Fuják Trans költöztetési, fuvarozási és szállítási szolgáltatásairól, a járműpark méreteiről és az időpont-egyeztetésről.",
};

export default function InfoPage() {
  return (
    <main className="min-h-screen bg-[#fbf9f8] px-4 pb-20 pt-14 sm:px-6 sm:pt-20">
      <div className="mx-auto max-w-[1180px]">
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#c94a19]">Fuják Trans · Információk</p>
          <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-[#211719] sm:text-4xl lg:text-5xl">Minden, amit a szállításról tudni érdemes.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6b6063] sm:text-base">Átlátható egyeztetés, a feladathoz illő jármű és gondos munkavégzés — a költözés előkészítésétől a szállításig.</p>
        </header>

        <section className="grid min-w-0 gap-5 lg:grid-cols-[1.05fr_.95fr] lg:gap-8">
          <article className="ft-glass-card min-w-0 rounded-[28px] p-5 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c94a19]">A szolgáltatásról</p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-[#251a1d] sm:text-3xl">A kisebb szállítástól a teljes költöztetésig.</h2>
            <div className="ft-prose mt-5">
              <p>Munkánkat minden esetben pontosan, körültekintően és ügyfeleink igényeihez igazodva végezzük. Legyen szó egyetlen bútor vagy háztartási gép szállításáról, komplett költöztetésről vagy nagyobb mennyiségű áru fuvarozásáról, számíthat ránk.</p>
              <p>Nyíregyházáról indulva az ország bármely pontjára, valamint előzetes egyeztetéssel nemzetközi viszonylatban is vállalunk szállításokat. Arra törekszünk, hogy minden megbízás a megbeszélt feltételek szerint, gördülékenyen történjen.</p>
              <p>A szállítás mellett rakodást, csomagolást, fóliázást, illetve bútorok szét- és összeszerelését is kérheti. Komplett konyhabútor szerelésével kapcsolatban is érdemes felvenni velünk a kapcsolatot.</p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/ajanlatkeres" className="ft-button-primary">Személyre szabott ajánlat →</Link>
              <Link href="/arak" className="ft-button-secondary">Árak és kalkulátor</Link>
            </div>
          </article>

          <article className="relative min-w-0 overflow-hidden rounded-[28px] bg-[#171112] p-5 text-white shadow-[0_24px_70px_rgba(35,12,17,.14)] sm:p-8">
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f54d05]/25 blur-[90px]" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff8753]">Időpont-egyeztetés</p>
              <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">Érdemes előre tervezni.</h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-white/72">
                <p>Javasoljuk, hogy a költözés vagy szállítás időpontját lehetőség szerint legalább 2–3 nappal korábban egyeztesse velünk. Így könnyebben tudjuk összehangolni a szükséges járművet és a rakodócsapatot.</p>
                <p>Ha sürgős a szállítás, telefonon vagy e-mailben akkor is keressen minket. Szabad kapacitás esetén aznapi szállítást és fuvarozást is vállalunk.</p>
                <p>Igény esetén ingyenes helyszíni felmérést is biztosítunk. Ehhez előzetes telefonos egyeztetés szükséges, hogy megismerjük a költöztetés részleteit, és pontosabb ajánlatot készíthessünk.</p>
              </div>
              <a href="tel:+36206180015" className="ft-button-primary mt-7 w-full sm:w-auto">Hívás: +36 20 618 0015</a>
            </div>
          </article>
        </section>

        <section className="mt-16 sm:mt-24" aria-labelledby="vehicles-title">
          <header className="mx-auto mb-9 max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#c94a19]">Járműpark</p>
            <h2 id="vehicles-title" className="text-balance text-3xl font-semibold leading-tight text-[#211719] sm:text-4xl">Járműveink méretei.</h2>
            <p className="mt-3 text-sm leading-7 text-[#6b6063] sm:text-base">Flottánk jelenleg 3 gépjárműből áll, amelyet igény esetén további járművekkel is bővíteni tudunk.</p>
          </header>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {fleet.map((vehicle, index) => (
              <article key={`${vehicle.type}-${index}`} className="ft-glass-card relative min-w-0 overflow-hidden rounded-[26px] p-5 sm:p-6">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#f54d05] via-[#ff9a61] to-[#4A0404]" />
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#c94a19]">Jármű 0{index + 1}</p>
                    <h3 className="mt-2 text-xl font-bold text-[#251a1d]">{vehicle.type}</h3>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f54d05]/[0.09] text-[#c94a19]" aria-hidden="true">↗</span>
                </div>
                {vehicle.capacity && <p className="mt-5 text-2xl font-bold text-[#4A0404]">{vehicle.capacity}</p>}
                <dl className="mt-4 space-y-3 rounded-[20px] bg-[#f5f0ee] p-4 text-sm">
                  <div className="flex items-center justify-between gap-3"><dt className="text-[#7a6e71]">Hosszúság</dt><dd className="font-bold text-[#251a1d]">{vehicle.length}</dd></div>
                  {vehicle.width && <div className="flex items-center justify-between gap-3"><dt className="text-[#7a6e71]">Szélesség</dt><dd className="font-bold text-[#251a1d]">{vehicle.width}</dd></div>}
                  {vehicle.height && <div className="flex items-center justify-between gap-3"><dt className="text-[#7a6e71]">Magasság</dt><dd className="font-bold text-[#251a1d]">{vehicle.height}</dd></div>}
                </dl>
                <p className="mt-4 text-sm leading-6 text-[#6d6265]">{vehicle.description}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-[#6b6063]">Járműveink rendszeresen karbantartottak, megbízhatóak és a költöztetési, valamint áruszállítási feladatokhoz megfelelően felszereltek, biztosítva a rakomány biztonságos és hatékony szállítását.</p>
        </section>

        <section className="ft-cta-panel mt-16 rounded-[28px] p-6 text-center text-white sm:mt-24 sm:p-10">
          <h2 className="text-balance text-2xl font-bold sm:text-3xl">Segítünk kiválasztani a megfelelő megoldást.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/75">Írja meg a feladat részleteit, és egyeztessünk a járműről, a szükséges rakodásról és az időpontról.</p>
          <Link href="/ajanlatkeres" className="ft-button-light mt-6">Ajánlatot kérek →</Link>
        </section>
      </div>
    </main>
  );
}
