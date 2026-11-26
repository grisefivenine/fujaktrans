import Link from "next/link";
import { footerServiceLinks, serviceAreas } from "@/lib/site-content";

const footerNavigation = [
  { href: "/", label: "Főoldal" },
  { href: "/#services", label: "Szolgáltatások" },
  { href: "/#why-us", label: "Miért minket?" },
  { href: "/arak", label: "Árak és kalkulátor" },
  { href: "/jarmupark", label: "Járműpark" },
  { href: "/referenciak", label: "Referenciák" },
  { href: "/blog", label: "Szakmai blog" },
  { href: "/informaciok", label: "Információk" },
  { href: "/ajanlatkeres", label: "Ajánlatkérés" },
];

const facebookUrl = "https://www.facebook.com/profile.php?id=61566936271369";

export default function Footer() {
  return (
    <footer className="ft-footer relative isolate w-full overflow-hidden bg-[#070707] text-gray-300">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[22%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#f54d05]/10 blur-[140px]" />
        <div className="absolute -bottom-48 -right-36 h-[500px] w-[500px] rounded-full bg-[#4A0404]/30 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] [background-size:60px_60px]" />
        <div className="ft-footer-noise absolute inset-0 opacity-[0.025]" />
      </div>
      <div className="h-px w-full animate-pulse bg-gradient-to-r from-transparent via-[#f54d05]/60 to-transparent" />

      <div className="relative mx-auto flex min-h-[720px] max-w-7xl flex-col justify-between px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[760px] lg:px-10 lg:py-20">
        <div className="mb-14 grid gap-8 rounded-[28px] border border-white/[0.09] bg-white/[0.045] p-6 shadow-[0_20px_70px_rgba(0,0,0,.18)] backdrop-blur-xl sm:rounded-[32px] sm:p-8 lg:grid-cols-[1.35fr_.8fr] lg:items-center lg:p-10">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[.24em] text-[#ff8753]">Fuják Trans · Nyíregyháza</p>
            <h2 className="max-w-3xl text-[clamp(1.8rem,5vw,3.35rem)] font-semibold leading-[1.12] tracking-tight text-white">
              A költözés ne legyen teher. <span className="text-[#ff7840]">Mi levesszük a válláról.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              Költöztetés, fuvarozás, áruszállítás és lomtalanítás Nyíregyházáról indulva, előzetes egyeztetéssel.
            </p>
            <div className="mt-7 h-[2px] w-24 bg-gradient-to-r from-[#f54d05] to-transparent" />
          </div>
          <div className="flex min-w-0 flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch lg:justify-self-end">
            <Link href="/ajanlatkeres" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#f54d05] px-6 py-3 text-sm font-bold text-white shadow-[0_0_30px_rgba(245,77,5,.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_38px_rgba(245,77,5,.4)] sm:flex-1 lg:min-w-[250px]">
              Személyre szabott ajánlat <span className="ml-2" aria-hidden="true">→</span>
            </Link>
            <a href="tel:+36206180015" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.045] px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-[#f54d05]/50 hover:bg-white/[0.08] sm:flex-1 lg:min-w-[250px]">
              +36 20 618 0015
            </a>
          </div>
        </div>

        {/* Mobile: one continuous vertical column. Desktop: multi-column footer. */}
        <div className="grid grid-cols-1 gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-8">
          <div className="min-w-0">
            <h3 className="mb-5 text-sm font-semibold text-white">Navigáció</h3>
            <ul className="space-y-3">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="ft-footer-link group relative inline-block text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                    {item.label}<span aria-hidden="true" className="absolute -bottom-1 left-0 h-px w-0 bg-[#f54d05] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="mb-5 text-sm font-semibold text-white">Gyakori helyszínek</h3>
            <ul className="space-y-3">
              {serviceAreas.map((area) => <li key={area} className="text-sm text-gray-400 transition-colors hover:text-white">{area}</li>)}
            </ul>
            <p className="mt-5 text-xs leading-6 text-gray-500">A felsorolt településeken túl országosan és nemzetközi viszonylatban is vállalunk szállítást.</p>
          </div>

          <div className="min-w-0">
            <h3 className="mb-5 text-sm font-semibold text-white">Szolgáltatások</h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-300">🚚 Belföldi fuvarozás</li>
              <li className="text-sm text-gray-300">📦 Komplett logisztika</li>
              <li className="text-sm text-gray-300">⚡ Expressz szállítás</li>
            </ul>
            <div className="my-5 h-px w-full bg-white/10" />
            <ul className="space-y-3">
              {footerServiceLinks.map((item) => (
                <li key={item.slug}>
                  <Link href={`/szolgaltatasok/${item.slug}`} className="text-sm leading-6 text-gray-400 transition-colors hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="mb-5 text-sm font-semibold text-white">Kapcsolat</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="break-words">📍 Nyíregyháza, Pazonyi út 39., 4400</li>
              <li><a href="tel:+36206180015" className="transition hover:text-white">📞 +36 20 618 0015</a></li>
              <li><a href="mailto:csabafujak@icloud.com" className="break-all transition hover:text-white">✉️ csabafujak@icloud.com</a></li>
            </ul>
            <Link href="/ajanlatkeres" className="mt-6 inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#f54d05] px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(245,77,5,.32)]">
              Ajánlatkérés <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="min-w-0">
            <h3 className="mb-5 text-sm font-semibold text-white">Státusz</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,.55)] animate-pulse" />
                <span>Rendszer: aktív</span>
              </div>
              <div className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#f54d05] shadow-[0_0_10px_rgba(245,77,5,.55)] animate-pulse" />
                <span>Fuvar kapacitás: elérhető</span>
              </div>
              <div className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white/35" />
                <span>Ügyfélszolgálat:<br />Hétfő - Szombat 8:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} Fuják Trans — Minden jog fenntartva.</p>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Fuják Trans a Facebookon – új lapon nyílik meg" className="ft-facebook group inline-flex min-h-11 w-fit items-center gap-3 rounded-lg border border-white/10 bg-white/[0.045] px-4 py-2.5 text-sm text-gray-300 backdrop-blur-md transition-all duration-300 hover:scale-[1.035] hover:border-[#1877F2]/45 hover:shadow-[0_0_30px_rgba(24,119,242,.22)]">
              <svg className="h-4 w-4 text-[#1877F2] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H17l-.5 3h-2.5v7A10 10 0 0 0 22 12z" /></svg>
              <span className="relative">Facebook<span aria-hidden="true" className="absolute -bottom-1 left-0 h-px w-0 bg-[#1877F2] transition-all duration-300 group-hover:w-full" /></span>
              <span aria-hidden="true" className="text-gray-500 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500">
              <Link href="/adatkezeles" className="transition hover:text-white">Adatkezelési tájékoztató</Link>
              <Link href="/aszf" className="transition hover:text-white">ÁSZF</Link>
              <Link href="/ajanlatkeres" className="transition hover:text-white">Kapcsolat</Link>
            </div>
          </div>
          <div className="mt-7 flex justify-center sm:justify-end">
            <a
              href="https://grise.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Webdesign és fejlesztés: grise – a grise weboldalának megnyitása új lapon"
              className="ft-grise-credit group"
            >
              <span className="ft-grise-credit__descriptor">Webdesign &amp; fejlesztés</span>
              <span aria-hidden="true" className="ft-grise-credit__divider" />
              <span className="ft-grise-credit__wordmark">grise</span>
              <span aria-hidden="true" className="ft-grise-credit__arrow">↗</span>
              <span aria-hidden="true" className="ft-grise-credit__sweep" />
            </a>
          </div>
        </div>
      </div>
      <div className="h-px w-full animate-pulse bg-gradient-to-r from-transparent via-[#f54d05]/50 to-transparent" />
    </footer>
  );
}
