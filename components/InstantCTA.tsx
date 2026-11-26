import Link from "next/link";

export default function InstantCTA() {
  return (
    <section className="ft-cta-panel rounded-[28px] border border-white/10 p-6 text-white shadow-2xl sm:rounded-[36px] sm:p-10">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">Fuják Trans</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">Személyre szabott megoldásra van szüksége?</h2>
      <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">Írja meg, mit és honnan hová szeretne szállíttatni. A megadott részletek alapján felvesszük Önnel a kapcsolatot.</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/ajanlatkeres" className="ft-button-light">Ajánlatkérés indítása →</Link>
        <a href="tel:+36206180015" className="ft-button-glass">+36 20 618 0015</a>
      </div>
    </section>
  );
}
