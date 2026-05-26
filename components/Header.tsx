"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
  const target =
    sessionStorage.getItem(
      "scrollTarget"
    );

  if (!target) return;

  setTimeout(() => {
    const element =
      document.getElementById(target);

    if (!element) return;

    const headerHeight = 90;

    const offset =
      element.getBoundingClientRect().top +
      window.scrollY -
      headerHeight;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });

    sessionStorage.removeItem(
      "scrollTarget"
    );
  }, 400);
}, []);

  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (id: string) => {
  setMenuOpen(false);

  if (pathname !== "/") {
    sessionStorage.setItem(
      "scrollTarget",
      id
    );

    router.push("/");
    return;
  }

  const element =
    document.getElementById(id);

  if (!element) return;

  const headerHeight = 90;

  const offset =
    element.getBoundingClientRect().top +
    window.scrollY -
    headerHeight;

  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
};

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-gray-300/95 backdrop-blur-2xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="
          text-2xl
          font-black
          tracking-[0.3em]
          bg-gradient-to-br
          from-[#f54d05]
          to-[#4A0404]
          bg-clip-text
          text-transparent
          "
        >
          FUJÁK TRANS
        </Link>

        {/* DESKTOP */}

        <nav className="hidden items-center gap-8 text-sm tracking-wide md:flex">

          <button
            onClick={() => scrollToSection("services")}
            className="text-black transition hover:text-[#f54d05]"
          >
            Szolgáltatások
          </button>

          <Link
            href="/arak"
            className="text-black transition hover:text-[#f54d05]"
          >
            Áraink
          </Link>

          <Link
            href="/informaciok"
            className="text-black transition hover:text-[#f54d05]"
          >
            Információk
          </Link>

          <button
            onClick={() => scrollToSection("reviews")}
            className="text-black transition hover:text-[#f54d05]"
          >
            Vélemények
          </button>

          <Link
            href="/referenciak"
            className="text-black transition hover:text-[#f54d05]"
          >
            Referenciák
          </Link>

          <button
            onClick={() => scrollToSection("contact")}
            className="text-black transition hover:text-[#f54d05]"
          >
            Kapcsolat
          </button>

        </nav>

        <div className="flex items-center gap-4">

          <button
            onClick={() => scrollToSection("contact")}
            className="
            hidden
            md:flex
            items-center
            gap-2
            rounded-full
            border
            border-[#f54d05]/20
            bg-[#f54d05]
            px-5
            py-2
            font-semibold
            text-black
            shadow-2xl
            shadow-[#f54d05]/10
            transition
            duration-300
            hover:scale-105
            "
          >
            📞 Árajánlat
          </button>

          {/* HAMBURGER */}

          <button
            type="button"
            className="
            relative
            flex
            h-10
            w-10
            flex-col
            items-center
            justify-center
            md:hidden
            "
            onClick={() => setMenuOpen(!menuOpen)}
          >

            <span
              className={`
              absolute h-0.5 w-6 bg-black
              transition-all duration-300
              ${menuOpen ? "rotate-45" : "-translate-y-2"}
              `}
            />

            <span
              className={`
              absolute h-0.5 w-6 bg-black
              transition-all duration-300
              ${menuOpen ? "opacity-0" : ""}
              `}
            />

            <span
              className={`
              absolute h-0.5 w-6 bg-black
              transition-all duration-300
              ${menuOpen ? "-rotate-45" : "translate-y-2"}
              `}
            />

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}

      {menuOpen && (

        <div className="border-t border-black/10 bg-gray-300/95 px-6 py-6 md:hidden">

          <nav className="flex flex-col gap-5 text-lg text-black">

            <button
              onClick={() => scrollToSection("services")}
              className="text-left"
            >
              Szolgáltatások
            </button>

            <Link
              href="/arak"
              onClick={() => setMenuOpen(false)}
            >
              Áraink
            </Link>

            <Link
              href="/informaciok"
              onClick={() => setMenuOpen(false)}
            >
              Információk
            </Link>

            <button
              onClick={() => scrollToSection("reviews")}
              className="text-left"
            >
              Vélemények
            </button>

            <Link
              href="/referenciak"
              onClick={() => setMenuOpen(false)}
            >
              Referenciák
            </Link>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-left"
            >
              Kapcsolat
            </button>

          </nav>

        </div>

      )}

    </header>
  );
}