"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"hu" | "en">("hu");

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-black/30 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="text-2xl font-black tracking-[0.3em] bg-clip-text text-transparent bg-gradient-to-br from-[#f54d05] to-[#4A0404]"
        >
          FUJÁK TRANS
        </Link>

        <nav className="hidden items-center gap-8 text-sm tracking-wide md:flex">

          <Link
  href="/#services"
  className="transition hover:text-[#f54d05]"
>
  Szolgáltatások
</Link>

          <Link
            href="/arak"
            className="transition hover:text-[#f54d05]"
          >
            Áraink
          </Link>

          <Link
  href="/#reviews"
  className="transition hover:text-[#f54d05]"
>
  Vélemények
</Link>

          <Link
            href="/referenciak"
            className="transition hover:text-[#f54d05]"
          >
            Referenciák
          </Link>

          <Link
  href="/#contact"
  className="transition hover:text-[#f54d05]"
>
  Kapcsolat
</Link>

        </nav>

        <div className="flex items-center gap-4">

          <button
            type="button"
            onClick={() =>
              setLanguage(prev =>
                prev === "hu" ? "en" : "hu"
              )
            }
            className="rounded-full border border-white/10 px-3 py-2 text-sm transition hover:border-[#f54d05]"
          >
            {language.toUpperCase()}
          </button>

          <Link
  href="/#contact"
  className="hidden items-center gap-2 rounded-full border border-[#f54d05]/20 bg-[#f54d05] px-5 py-2 font-semibold text-black shadow-2xl shadow-[#f54d05]/10 transition duration-300 hover:scale-105 md:flex"
>
  📞 Árajánlat
</Link>

          <button
            type="button"
            className="relative flex h-10 w-10 flex-col items-center justify-center md:hidden"
            onClick={() =>
              setMenuOpen(prev => !prev)
            }
          >

            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen
                  ? "rotate-45"
                  : "-translate-y-2"
              }`}
            />

            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen
                  ? "opacity-0"
                  : "opacity-100"
              }`}
            />

            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen
                  ? "-rotate-45"
                  : "translate-y-2"
              }`}
            />

          </button>

        </div>

      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-6 md:hidden">

          <nav className="flex flex-col gap-6 text-lg">

            <Link
  href="/#services"
  onClick={() => setMenuOpen(false)}
>
  Szolgáltatások
</Link>

            <Link
              href="/arak"
              onClick={() => setMenuOpen(false)}
            >
              Áraink
            </Link>

            <Link
  href="/#reviews"
  onClick={() => setMenuOpen(false)}
>
  Vélemények
</Link>

            <Link
              href="/referenciak"
              onClick={() => setMenuOpen(false)}
            >
              Referenciák
            </Link>

            <Link
  href="/#contact"
  onClick={() => setMenuOpen(false)}
>
  Kapcsolat
</Link>

          </nav>

        </div>
      )}
    </header>
  );
}