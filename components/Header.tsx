"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const sectionLinks = [
  { label: "Szolgáltatások", id: "services" },
  { label: "Miért mi?", id: "why-us" },
  { label: "Árak", href: "/arak" },
  { label: "Információk", href: "/informaciok" },
  { label: "Járműpark", id: "fleet" },
  { label: "Vélemények", id: "reviews" },
  { label: "Referenciák", href: "/referenciak" },
  { label: "Blog", href: "/blog" },
  { label: "Kapcsolat", id: "contact" },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const seamlessAtTop = isHome && !scrolled;
  const desktopLinkClass = "ft-header-nav-link inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-2 text-[#51484a] transition-colors duration-200 hover:bg-[#f54d05]/[0.08] hover:text-[#4A0404] 2xl:px-3.5";
  const mobileLinkClass = "ft-header-nav-link-mobile flex min-h-12 items-center justify-between border-b border-black/[0.06] px-2 text-left text-[#291d20] transition hover:text-[#f54d05]";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);


  const closeMenu = () => setMenuOpen(false);


  return (
    <>
      <header className={`sticky top-0 z-[100] w-full border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${seamlessAtTop ? "border-transparent bg-white shadow-none" : "border-black/10 bg-white/94 shadow-[0_8px_35px_rgba(27,10,12,0.08)] backdrop-blur-2xl"}`}>
        <div className="mx-auto flex h-[76px] w-full max-w-[1320px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-[84px] lg:px-8">
          <Link href="/" aria-label="Fuják Trans főoldal" onClick={closeMenu} className="flex min-w-0 shrink-0 items-center">
            <Image
              src="/images/logo.png"
              alt="Fuják Trans"
              width={220}
              height={70}
              priority
              sizes="(max-width: 640px) 148px, 190px"
              className="h-9 w-auto max-w-[155px] object-contain sm:h-10 sm:max-w-[190px]"
            />
          </Link>

          <nav aria-label="Fő navigáció" className="hidden items-center gap-0.5 xl:flex">
            {sectionLinks.map((item) => (
              <Link
                key={item.label}
                href={"id" in item ? `/#${item.id}` : item.href}
                onClick={closeMenu}
                className={desktopLinkClass}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link href="/ajanlatkeres" onClick={closeMenu} className="hidden min-h-11 items-center justify-center rounded-full bg-[#f54d05] px-5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(245,77,5,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(245,77,5,0.32)] sm:inline-flex">
              Ingyenes ajánlat
            </Link>
            <button
              type="button"
              aria-label={menuOpen ? "Menü bezárása" : "Menü megnyitása"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition xl:hidden border-black/10 bg-white/70 text-[#211719] hover:border-[#f54d05]/40 hover:bg-[#f54d05]/[0.06]`}
            >
              <span className="relative block h-4 w-5">
                <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                <span className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[90] xl:hidden" aria-modal="true" role="dialog" aria-label="Mobil navigáció">
          <button type="button" aria-label="Menü bezárása" onClick={closeMenu} className="absolute inset-0 bg-[#160d10]/45 backdrop-blur-sm" />
          <div id="mobile-navigation" className="absolute inset-x-3 top-[86px] max-h-[calc(100dvh-102px)] overflow-y-auto rounded-[28px] border border-white/80 bg-white/95 p-4 text-[#291d20] shadow-[0_24px_70px_rgba(20,8,10,0.22)] backdrop-blur-2xl sm:inset-x-5 sm:top-[96px] sm:p-6">
            <nav className="flex flex-col" aria-label="Mobil fő navigáció">
              {sectionLinks.map((item) => (
                <Link
                  key={item.label}
                  href={"id" in item ? `/#${item.id}` : item.href}
                  onClick={closeMenu}
                  className={mobileLinkClass}
                >
                  {item.label}<span aria-hidden="true" className="text-[#f54d05]">↗</span>
                </Link>
              ))}
            </nav>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <a href="tel:+36206180015" onClick={closeMenu} className="flex min-h-12 items-center justify-center rounded-2xl border border-[#4A0404]/10 bg-[#4A0404]/[0.04] px-3 text-center text-sm font-bold text-[#4A0404]">Hívás: +36 20 618 0015</a>
              <Link href="/ajanlatkeres" onClick={closeMenu} className="flex min-h-12 items-center justify-center rounded-2xl bg-[#f54d05] px-3 text-center text-sm font-bold text-white">Ajánlatkérés</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
