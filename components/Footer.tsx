import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative min-h-screen w-full overflow-hidden bg-[#070707] text-gray-300">

      {/* BACKGROUND LAYERS */}
      <div className="pointer-events-none absolute inset-0">

        {/* main glow */}
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#f54d05]/10 blur-[140px]" />

        {/* secondary glow */}
        <div className="absolute bottom-[-200px] right-[-150px] h-[500px] w-[500px] rounded-full bg-white/5 blur-[140px]" />

        {/* animated grid */}
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* subtle noise overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
      </div>

      {/* TOP LINE */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#f54d05]/60 to-transparent animate-pulse" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-20">

        {/* TOP HERO TEXT */}
        <div className="text-center md:text-left">

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Fuják Trans
          </h2>

          <p className="mt-6 max-w-2xl text-gray-400 text-sm md:text-base leading-relaxed">
            Modern logisztika, precíz szállítás, és megbízható partnerség.
            Minden fuvar mögött rendszer, kontroll és gyorsaság áll.
          </p>

          {/* animated underline */}
          <div className="mt-8 mx-auto md:mx-0 h-[2px] w-24 bg-gradient-to-r from-[#f54d05] to-transparent animate-pulse" />
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-12 md:grid-cols-4">

          {/* COLUMN 1 */}
          <div>
            <h3 className="text-white font-semibold mb-5">Navigáció</h3>

            <ul className="space-y-3 text-sm">
              {[
                { href: "/", label: "Főoldal" },
                { href: "/#services", label: "Szolgáltatások" },
                { href: "/#contact", label: "Kapcsolat" },
                { href: "/aszf", label: "ÁSZF" },
                { href: "/adatkezeles", label: "Adatkezelés" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative inline-block transition"
                  >
                    <span className="group-hover:text-white transition">
                      {item.label}
                    </span>

                    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#f54d05] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 2.5 */}
          <div>
            <h3 className="text-white font-semibold mb-5">Gyakori helyszínek</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white transition">Nyíregyháza</li>
              <li className="hover:text-white transition">Debrecen</li>
              <li className="hover:text-white transition">Kisvárda</li>
              <li className="hover:text-white transition">Mátészalka</li>
              <li className="hover:text-white transition">Hajdúnánás</li>
              <li className="hover:text-white transition">Nyírtelek</li>
              <li className="hover:text-white transition">Rakamaz</li>
              <li className="hover:text-white transition">Tiszavasvári</li>
              <li className="hover:text-white transition">Nyírtelek</li>
              <li className="hover:text-white transition">Nyírpazony</li>

            
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="text-white font-semibold mb-5">Kapcsolat</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white transition">📍 Magyarország</li>
              <li className="hover:text-white transition">📞 +36 20 618 0015</li>
              <li className="hover:text-white transition">✉️ csabafujak@icloud.com</li>
            </ul>

            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#f54d05] px-4 py-2 text-sm text-white transition hover:scale-[1.05] hover:shadow-[0_0_35px_rgba(245,77,5,0.5)]"
            >
              Ajánlatkérés →
            </Link>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="text-white font-semibold mb-5">Szolgáltatások</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white transition">🚚 Belföldi fuvarozás</li>
              
              <li className="hover:text-white transition">📦 Komplett logisztika</li>
              <li className="hover:text-white transition">⚡ Expressz szállítás</li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h3 className="text-white font-semibold mb-5">Státusz</h3>

            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                Rendszer: aktív
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#f54d05] animate-pulse" />
                Fuvar kapacitás: elérhető
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/30" />
                Ügyfélszolgálat:
                <br />
                 Hétfő - Szombat 8:00 - 18:00
              </div>
            </div>
          </div>
        </div>

        {/* BIG CTA SECTION */}
        <div className="mt-24 text-center">
          <h3 className="text-xl md:text-2xl text-white font-semibold">
            Készen áll a szállításra?
          </h3>

          <p className="mt-3 text-gray-400 text-sm">
            Kérjen ajánlatot pár percen belül, és visszahívjuk.
          </p>

          <Link
            href="/#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#f54d05] px-6 py-3 text-white transition hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(245,77,5,0.6)]"
          >
            Kezdjük! →
          </Link>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-24 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">

          <p>© 2026 Fuják Trans — Minden jog fenntartva.</p>

          <Link
  href="https://www.facebook.com/profile.php?id=61566936271369"
  target="_blank"
  className="group mt-6 inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-md transition-all duration-300 hover:scale-[1.05] hover:border-[#1877F2]/40 hover:shadow-[0_0_30px_rgba(24,119,242,0.35)]"
>
  {/* ICON */}
  <svg
    className="h-4 w-4 text-[#1877F2] transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H17l-.5 3h-2.5v7A10 10 0 0 0 22 12z" />
  </svg>

  <span className="relative">
    Facebook
    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#1877F2] transition-all duration-300 group-hover:w-full" />
  </span>

  {/* subtle arrow */}
  <span className="text-gray-500 transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</Link>

          <div className="flex gap-6">
            <Link href="/adatkezeles" className="hover:text-[#f54d05] transition">
              Adatkezelés
            </Link>
            <Link href="/aszf" className="hover:text-[#f54d05] transition">
              ÁSZF
            </Link>
            <Link href="/#contact" className="hover:text-[#f54d05] transition">
              Kapcsolat
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM GLOW LINE */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#f54d05]/50 to-transparent animate-pulse" />
    </footer>
  );
}