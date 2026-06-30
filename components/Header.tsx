"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");
    if (!target) return;

    setTimeout(() => {
      const element = document.getElementById(target);
      if (!element) return;

      const offset =
        element.getBoundingClientRect().top +
        window.scrollY -
        90;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });

      sessionStorage.removeItem("scrollTarget");
    }, 400);
  }, []);

  useEffect(() => {
  const onScroll = () => {
    setScrolled(window.scrollY > 30);
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);

    if (pathname !== "/") {
      sessionStorage.setItem("scrollTarget", id);
      router.push("/");
      return;
    }

    const element = document.getElementById(id);
    if (!element) return;

    const offset =
      element.getBoundingClientRect().top +
      window.scrollY -
      90;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 md:px-6 pt-3 md:pt-5">
  <div
    className={`
      w-full max-w-7xl
      rounded-2xl md:rounded-full
      border border-white/60
      backdrop-blur-2xl
      bg-white/72
      shadow-[0_8px_40px_rgba(0,0,0,0.08)]
      transition-all duration-500
      ${scrolled ? "max-w-6xl bg-white/82 shadow-[0_12px_50px_rgba(0,0,0,0.12)]" : ""}
    `}
  >

      {/* TOP GLOW LINE */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#f54d05]/40 to-transparent" />

      <div className="flex items-center justify-between px-5 md:px-7 py-3">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt="Fuják Trans"
            width={200}
            height={60}
            className="h-8 md:h-10 w-auto object-contain transition group-hover:scale-[1.05]"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-2 text-sm text-gray-700">

          {[
            { label: "Szolgáltatások", id: "services" },
            { label: "Áraink", href: "/arak" },
            { label: "Információk", href: "/informaciok" },
            { label: "Vélemények", id: "reviews" },
            { label: "Referenciák", href: "/referenciak" },
            { label: "Kapcsolat", id: "contact" },
          ].map((item) =>
            item.id ? (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id!)}
                className="group relative rounded-full px-4 py-2 transition duration-300 hover:bg-white/80 hover:shadow-sm hover:text-black"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#f54d05] transition-all duration-300 group-hover:w-full" />
              </button>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className="group relative rounded-full px-4 py-2 transition duration-300 hover:bg-white/80 hover:shadow-sm hover:text-black"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#f54d05] transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          )}

        </nav>

        {/* CTA + HAMBURGER */}
        <div className="flex items-center gap-4">

          {/* CTA BUTTON */}
          <button
            onClick={() => scrollToSection("contact")}
            className="
              hidden md:flex items-center gap-2 rounded-full
bg-[#f54d05] px-5 py-2.5 text-sm font-semibold text-white
shadow-[0_8px_24px_rgba(245,77,5,0.28)]
transition-all duration-300
hover:scale-[1.03]
hover:shadow-[0_12px_32px_rgba(245,77,5,0.42)]
active:scale-[0.98]
            "
          >
            📞 Árajánlat
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative flex h-10 w-10 flex-col items-center justify-center md:hidden"
          >
            <span className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${menuOpen ? "rotate-45" : "-translate-y-2"}`} />
            <span className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45" : "translate-y-2"}`} />
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mx-3 mb-3 rounded-2xl border border-black/5 bg-white/92 backdrop-blur-2xl px-6 py-6 shadow-[0_15px_50px_rgba(0,0,0,0.12)] md:hidden">

          <nav className="flex flex-col gap-5 text-gray-700 text-lg">

            {[
              { label: "Szolgáltatások", id: "services" },
              { label: "Áraink", href: "/arak" },
              { label: "Információk", href: "/informaciok" },
              { label: "Vélemények", id: "reviews" },
              { label: "Referenciák", href: "/referenciak" },
              { label: "Kapcsolat", id: "contact" },
            ].map((item) =>
              item.id ? (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id!)}
                  className="text-left hover:text-black transition"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-black transition"
                >
                  {item.label}
                </Link>
              )
            )}

          </nav>

        </div>
      )}
    </div>
    </header>
  );
}