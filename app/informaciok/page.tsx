"use client";

import { useState } from "react";

const vehicles = [
  {
    name: "Dobozos autó",
    volume: 14,
    desc: "Kisebb költözésekhez"
  },
  {
    name: "Zárt dobozos autó",
    volume: 19,
    desc: "Közepes költözés"
  },
  {
    name: "Ponyvás autó",
    volume: 20,
    desc: "Nagyobb költözésekhez"
  }
];

function InstantCTA() {
  return (
    <div className="
    rounded-[40px]
    bg-gradient-to-br
    from-[#f54d05]
    to-[#4A0404]
    p-12
    shadow-2xl
    ">

      <h2 className="mb-5 text-4xl font-bold">
        Tudja már melyik autóra van szüksége?
      </h2>

      <p className="mb-8 text-black/80">
        Kérjen ajánlatot és rövid időn belül felvesszük Önnel a kapcsolatot.
      </p>

      <a
        href="/#contact"
        className="
        inline-block
        rounded-full
        bg-gray-300
        px-8
        py-4
        font-bold
        text-black
        transition
        hover:scale-105
        "
      >
        Ajánlatkérés →
      </a>

    </div>
  );
}
export default function InfoPage() {
  return (
    <div className="min-h-screen bg-[#E0E0E0] text-black">

      {/* HERO HEADER */}
      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-black/70">
            Információk
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold">
            Minden amit a szállításról tudni érdemes
          </h1>

          <p className="mt-6 text-lg text-black/70">
            Átlátható járműpark, pontos méretek és kapacitások.
          </p>

        </div>
      </section>

      {/* TRUCK SPECS */}
      <section className="pb-32">
        <div className="mx-auto max-w-6xl px-6 grid gap-8">

          {/* TITLE */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Járműveink méretei
            </h2>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* 1 */}
            <div className="rounded-[30px] border border-black/5 bg-gray-300/40 backdrop-blur-xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-[#f54d05]">
                Dobozos autó (3,5 t)
              </h3>

              <p className="text-black/80 leading-7">
                <span className="font-semibold">Platóméret:</span><br />
                3,6 × 2,0 × 1,9 m
              </p>

              <p className="mt-4 text-black/80">
                <span className="font-semibold">Légtér:</span> ≈ 14 m³
              </p>
            </div>

            {/* 2 */}
            <div className="rounded-[30px] border border-black/5 bg-gray-300/40 backdrop-blur-xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-[#f54d05]">
                Ponyvás autó (3,5 t)
              </h3>

              <p className="text-black/80 leading-7">
                <span className="font-semibold">Platóméret:</span><br />
                4,3 × 2,1 × 2,2 m
              </p>

              <p className="mt-4 text-black/80">
                <span className="font-semibold">Légtér:</span> ≈ 20 m³
              </p>
            </div>

            {/* 3 */}
            <div className="rounded-[30px] border border-black/5 bg-gray-300/40 backdrop-blur-xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-[#f54d05]">
                Zárt dobozos autó (3,5 t)
              </h3>

              <p className="text-black/80 leading-7">
                <span className="font-semibold">Platóméret:</span><br />
                4,3 × 2,1 × 2,1 m
              </p>

              <p className="mt-4 text-black/80">
                <span className="font-semibold">Légtér:</span> ≈ 19 m³
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* INFO SECTION */}
      <section className="pb-32">
        <div className="mx-auto max-w-5xl px-6">

          <div className="rounded-[40px] border border-black/5 bg-gray-300/40 backdrop-blur-xl p-10 shadow-2xl">

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Flottánk és kapacitás
            </h2>

            <p className="text-lg leading-8 text-black/80">
              Összesen <span className="font-bold text-[#f54d05]">3 gépjárművel</span> rendelkezünk,
              de igény esetén további járművek is biztosíthatók.
              <br /><br />
              Minden autó modern, rendszeresen karbantartott és költöztetésre optimalizált,
              így garantáljuk a biztonságos és gyors szállítást.
            </p>

          </div>

        </div>
      </section>

      <section className="py-24 bg-[#E0E0E0]">
  <div className="mx-auto max-w-6xl px-6 space-y-10">

    <InstantCTA />

  </div>
</section>

    </div>
  );
}