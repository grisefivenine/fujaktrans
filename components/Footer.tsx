import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-gray-300 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-gray-700 md:flex-row">

        <p>© 2026 Fuják Trans. Minden jog fenntartva.</p>

        <div className="flex items-center gap-6">

          <Link
            href="/adatkezeles"
            className="transition hover:text-[#f54d05]"
          >
            Adatkezelés
          </Link>

          <Link
            href="/aszf"
            className="transition hover:text-[#f54d05]"
          >
            ÁSZF
          </Link>

          <Link
            href="/#contact"
            className="transition hover:text-[#f54d05]"
          >
            Kapcsolat
          </Link>

        </div>

      </div>
    </footer>
  );
}