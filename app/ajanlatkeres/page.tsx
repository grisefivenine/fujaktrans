import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Ingyenes, személyre szabott ajánlatkérés",
  description: "Kérjen személyre szabott ajánlatot költöztetésre, fuvarozásra, áruszállításra vagy lomtalanításra a Fuják Trans csapatától.",
};

export default function QuoteRequestPage() {
  return (
    <main className="min-h-screen bg-[#f7f3f1] px-4 pb-20 pt-14 sm:px-6 sm:pt-20">
      <div className="mx-auto max-w-[1080px]">
        <div className="mx-auto mb-9 max-w-3xl text-center">
          <Link href="/" className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#b9471c] hover:text-[#4A0404]">← Vissza a főoldalra</Link>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#c94a19]">Fuják Trans · Ajánlatkérés</p>
          <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-[#211719] sm:text-4xl lg:text-5xl">Kérjen ingyenes, személyre szabott ajánlatot még ma.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6b6063] sm:text-base">Az adatokat érdemes minél pontosabban kitölteni, így sokkal pontosabb árajánlatot tudunk adni. A folyamat három rövid lépésből áll, és bármikor visszaléphet az előző részhez.</p>
        </div>
        <QuoteForm />
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-6 text-[#817477]">Kérdése van? Hívjon minket a <a href="tel:+36206180015" className="font-bold text-[#4A0404]">+36 20 618 0015</a> telefonszámon, vagy írjon a <a href="mailto:csabafujak@icloud.com" className="break-all font-bold text-[#4A0404]">csabafujak@icloud.com</a> címre.</p>
      </div>
    </main>
  );
}
