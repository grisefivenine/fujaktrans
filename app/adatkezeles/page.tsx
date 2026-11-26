import type { Metadata } from "next";

export const metadata: Metadata = { title: "Adatkezelési tájékoztató", description: "Tájékoztató a Fuják Trans weboldalán keresztül megadott személyes adatok kezeléséről." };

export default function Adatkezeles() {
  return (
    <main className="ft-content-wrap py-12 text-[#211719] sm:py-16 lg:py-20">
      <header className="mb-8 max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-[#c94a19]">Fuják Trans · Jogi információk</p>
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Adatkezelési tájékoztató</h1>
      </header>
      <div className="ft-glass-card rounded-[28px] p-5 sm:p-8 lg:p-10">
        <div className="ft-prose space-y-8">
          <section>
            <h2>1. Az adatkezelő adatai</h2>
            <p>Név: Fuják Trans</p>
            <p>E-mail: csabafujak@icloud.com</p>
            <p>Telefonszám: +36 20 618 0015</p>
          </section>
          <section>
            <h2>2. Milyen adatokat kezelünk?</h2>
            <ul><li>Név</li><li>E-mail-cím</li><li>Telefonszám</li><li>Ajánlatkérés során megadott üzenet</li></ul>
          </section>
          <section>
            <h2>3. Az adatkezelés célja</h2>
            <p>Az ajánlatkérések feldolgozása, kapcsolattartás és szolgáltatás nyújtása.</p>
          </section>
          <section>
            <h2>4. Adatmegőrzés</h2>
            <p>A megadott adatokat kizárólag a szükséges ideig tároljuk.</p>
          </section>
          <section>
            <h2>5. Felhasználói jogok</h2>
            <p>Ön jogosult hozzáférni, módosítani, törölni vagy korlátozni személyes adatainak kezelését.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
