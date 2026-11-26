"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Toggle = ({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) => {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex items-center justify-between w-full rounded-xl border border-black/10 bg-[#FFFFFF]/30 px-4 py-3"
    >
      <span className="text-black">{label}</span>

      <div
        className={`h-5 w-10 rounded-full transition ${
          checked ? "bg-[#f54d05]" : "bg-[#FFFFFF]/10"
        }`}
      >
        <div
          className={`h-4 w-4 bg-[#FFFFFF] rounded-full mt-[2px] transition ${
            checked ? "ml-5" : "ml-1"
          }`}
        />
      </div>
    </button>
  );
};

// FIX: külön név, ne ütközzön a prices objektummal lent
const priceList = [
  {
    title: "Teherautó bérlés sofőrrel",
    note: "Nyíregyházán és környékén a sofőr nem végez rakodást.",
    price: "10.000 Ft / óra",
  },
  {
    title: "Költöztetés 1 fővel",
    note: "Rakodó sofőr, minimum 2 óra fizetendő",
    price: "12.000 Ft / óra",
  },
  {
    title: "Költöztetés 2 fővel",
    note: "Rakodó sofőr + 1 fő rakodó, minimum 2 óra",
    price: "15.000 Ft / óra",
  },
  {
    title: "Költöztetés vidékre 2 fővel",
    note: "Külföldi szállítás esetén egyedi ár",
    price: "15.000 Ft / óra + 280 Ft / km",
  },
  {
    title: "Költöztetés 3 fővel",
    note: "Nagy lakásokhoz, gyors és hatékony megoldás",
    price: "18.000 Ft / óra",
  },
  {
    title: "Bútor / gépszállítás Nyíregyházán",
    note: "Csak szállítás, rakodás nélkül",
    price: "10.000 Ft fix",
  },
  {
    title: "Bútor / gépszállítás 15 km körzetben",
    note: "Rakodással, emeletre is",
    price: "15.000 Ft-tól",
  },
  {
    title: "Lomtalanítás",
    note: "Hulladék leadás plusz költség, telefonos egyeztetés",
    price: "Egyedi árazás",
  },
];

export default function ArakPage() {
  const [hours, setHours] = useState<string>("3");
  const [km, setKm] = useState<string>("0");
  const [service, setService] = useState<string>("1fő");
  const [fromFloor, setFromFloor] = useState<string>("0");
  const [toFloor, setToFloor] = useState<string>("0");
  const [hasLiftFrom, setHasLiftFrom] = useState<boolean>(false);
  const [hasLiftTo, setHasLiftTo] = useState<boolean>(false);
  const hoursNum = Number(hours);
  const kmNum = Number(km);
  const fromFloorNum = Number(fromFloor);
  const toFloorNum = Number(toFloor);

  // FIX 1: number (nem Number!)
  const prices: Record<string, number> = {
    "1fő": 12000,
    "2fő": 15000,
    "3fő": 18000,
    "4fő": 21000,
    teherauto: 10000,
  };

  // FIX 2: biztos number típus
  const selectedPrice: number = prices[service] ?? 0;

  const base =
  service === "teherauto"
    ? hoursNum * selectedPrice
    : hoursNum * selectedPrice + (kmNum > 15 ? (kmNum - 15) * 280 : 0);

// emelet felár
let floorExtra = 0;

if (service !== "teherauto") {
  const fromPenalty =
    fromFloorNum >= 3 && !hasLiftFrom ? 2000 : 0;

  const toPenalty =
    toFloorNum >= 3 && !hasLiftTo ? 2000 : 0;

  floorExtra = (fromPenalty + toPenalty) * hoursNum;
}

const total = base + floorExtra;

  return (
    <main className="min-h-screen bg-[#fbf9f8] px-4 py-12 text-[#211719] sm:px-6 sm:py-20">

      <div className="mx-auto mb-10 max-w-5xl text-center sm:mb-16">
        <p className="text-sm tracking-[0.3em] text-[#f54d05] uppercase">
          Árlista
        </p>

        <h1 className="mt-4 text-3xl font-bold sm:text-4xl md:text-6xl">
          Áraink
        </h1>

        <p className="mt-6 text-gray-600">
          Egyszerű, átlátható díjszabás költöztetéshez és szállításhoz.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
  {priceList.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative rounded-3xl border border-black/5 bg-[#FFFFFF]/40 p-5 backdrop-blur-xl transition duration-300 sm:p-8 hover:-translate-y-2 hover:border-[#f54d05]/30 hover:shadow-2xl hover:shadow-[#f54d05]/10"
    >

      {/* soft glow háttér (services feeling) */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-[#f54d05]/5 blur-2xl" />

      <div className="relative">

        <h2 className="text-xl font-bold text-black group-hover:text-[#f54d05] transition">
          {item.title}
        </h2>

        <p className="mt-2 text-gray-600">
          {item.note}
        </p>

        <div className="mt-6 text-2xl font-bold text-black">
          {item.price}
        </div>

      </div>
    </motion.div>
  ))}
</div>

      {/* Példa rész */}
<div className="mt-16 relative">

  {/* glow háttér mint a többi szekciónál */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#f54d05]/10 blur-[120px] rounded-full" />
  </div>

  <div className="relative rounded-3xl border border-black/10 bg-[#FFFFFF]/40 p-5 shadow-xl backdrop-blur-xl sm:p-8">

    {/* header */}
    <div className="mb-8">
      <p className="text-sm tracking-[0.3em] uppercase text-black/60">
        Példa
      </p>

      <h3 className="mt-3 text-2xl font-black text-black sm:text-3xl md:text-4xl">
        Példa számítás
      </h3>

      <p className="text-black/60 mt-3">
        Egy valós költöztetési szituáció lebontva
      </p>
    </div>

    {/* content */}
    <div className="space-y-4 text-black/80">

      <div className="rounded-2xl border border-black/10 bg-[#FFFFFF]/30 p-5">
        <p className="font-semibold">
          📍 Útvonal
        </p>
        <p className="mt-1 text-black/70">
          100 km-es fuvar, 2 szobás lakás, 3. emelet mindkét címen, lift nélkül
        </p>
      </div>

      <div className="rounded-2xl border border-black/10 bg-[#FFFFFF]/30 p-5">
        <p className="font-semibold">
          🚚 Kiszállás
        </p>
        <p className="mt-1 text-black/70">
          Az első 15 km díjmentes
        </p>
      </div>

      <div className="rounded-2xl border border-black/10 bg-[#FFFFFF]/30 p-5">
        <p className="font-semibold">
          ⏱ Munkaidő
        </p>
        <p className="mt-1 text-black/70">
          3 óra × 15.000 Ft = <span className="font-bold text-black">45.000 Ft</span>
        </p>
      </div>

      <div className="rounded-2xl border border-black/10 bg-[#FFFFFF]/30 p-5">
        <p className="font-semibold">
          📦 Távolság
        </p>
        <p className="mt-1 text-black/70">
          (100 − 15) km × 280 Ft = <span className="font-bold text-black">23.800 Ft</span>
        </p>
      </div>

      <div className="rounded-2xl border border-black/10 bg-[#FFFFFF]/30 p-5">
        <p className="font-semibold">↕ Emeletfelár</p>
        <p className="mt-1 text-black/70">Két cím × 2.000 Ft / óra × 3 óra = <span className="font-bold text-black">12.000 Ft</span></p>
      </div>

    </div>

    {/* total highlight */}
    <div className="relative mt-8 overflow-hidden rounded-3xl border border-[#f54d05]/20 bg-gradient-to-r from-gray-300 to-gray-200 p-5 sm:p-8">

      <div className="absolute inset-0 bg-[#f54d05]/10 blur-3xl" />

      <div className="relative text-center">
        <p className="text-sm text-black/60 mb-2">
          Teljes költség
        </p>

        <p className="text-4xl md:text-5xl font-black text-[#f54d05]">
          80.800 Ft
        </p>
      </div>

    </div>
    <p className="relative mt-5 text-center text-xs leading-5 text-black/55">A példa a fenti díjszabás alapján készült, tájékoztató jellegű számítás. A pontos ajánlat a feladat részleteinek egyeztetése után adható meg.</p>

  </div>
</div>

      {/* CALCULATOR */}
<section className="relative mt-16 overflow-hidden bg-[#FFFFFF] py-16 sm:mt-20 sm:py-28">

  

  <div className="relative mx-auto max-w-5xl px-6">

    {/* HEADER */}
    <div className="text-center mb-14">
      <p className="text-sm tracking-[0.3em] uppercase text-black/60">
        Kalkulátor
      </p>

      <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
        Ár kalkulátor
      </h2>

      <p className="mt-5 mx-auto max-w-2xl text-black/60">
        Adja meg a feladat részleteit, és tekintse meg a kalkulátor szerinti becsült költséget.
      </p>
    </div>

    {/* MAIN CARD */}
    <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-[#FFFFFF]/40 p-5 shadow-2xl backdrop-blur-xl sm:p-8 md:p-10">

      {/* finom border glow */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none border border-[#f54d05]/10" />

      <div className="space-y-6">

        {/* SERVICE */}
        <div className="group rounded-2xl border border-black/10 bg-[#FFFFFF]/30 p-5 transition hover:border-[#f54d05]/30 hover:-translate-y-0.5 duration-300">
          <p className="text-black/60 mb-3 text-sm tracking-wide">
            Szolgáltatás
          </p>

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full p-4 rounded-xl bg-[#FFFFFF] border border-black/10 text-black outline-none focus:border-[#f54d05] transition"
          >
            <option value="1fő">Költöztetés 1 fővel</option>
            <option value="2fő">Költöztetés 2 fővel</option>
            <option value="3fő">Költöztetés 3 fővel</option>
            <option value="4fő">Költöztetés 4 fővel</option>
            <option value="teherauto">Teherautó bérlés</option>
          </select>
        </div>

        {/* HOURS */}
        <div className="group rounded-2xl border border-black/10 bg-[#FFFFFF]/30 p-5 transition hover:border-[#f54d05]/30 hover:-translate-y-0.5 duration-300">
          <p className="text-black/60 mb-3 text-sm tracking-wide">
            Órák száma
          </p>

          <input
  type="number"
  min={1}
  max={24}
  value={hours}
  onChange={(e) => setHours(e.target.value)}
            className="w-full p-4 rounded-xl bg-[#FFFFFF] border border-black/10 text-black outline-none focus:border-[#f54d05] transition"
          />
        </div>

        {/* KM */}
        {service !== "teherauto" && (
          <div className="group rounded-2xl border border-black/10 bg-[#FFFFFF]/30 p-5 transition hover:border-[#f54d05]/30 hover:-translate-y-0.5 duration-300">
            <p className="text-black/60 mb-3 text-sm tracking-wide">
              Kilométer
            </p>

            <input
              type="number"
              min={0}
              max={5000}
              value={km}
              onChange={(e) => setKm(e.target.value)}
              className="w-full p-4 rounded-xl bg-[#FFFFFF] border border-black/10 text-black outline-none focus:border-[#f54d05] transition"
            />
          </div>
        )}

        {/* FLOOR */}
        {service !== "teherauto" && (
          <div className="grid md:grid-cols-2 gap-6">

            {/* FROM */}
            <div className="rounded-2xl border border-black/10 bg-[#FFFFFF]/30 p-5 hover:border-[#f54d05]/30 transition">
              <p className="text-black/60 mb-3 text-sm">
                Honnan emelet
              </p>

              <input
                type="number"
                min={0}
                max={50}
                value={fromFloor}
                onChange={(e) => setFromFloor(e.target.value)}
                className="w-full p-4 rounded-xl bg-[#FFFFFF] border border-black/10 text-black outline-none focus:border-[#f54d05] transition"
              />

              <div className="mt-4">
                <Toggle
                  checked={hasLiftFrom}
                  onChange={setHasLiftFrom}
                  label="Van lift"
                />
              </div>
            </div>

            {/* TO */}
            <div className="rounded-2xl border border-black/10 bg-[#FFFFFF]/30 p-5 hover:border-[#f54d05]/30 transition">
              <p className="text-black/60 mb-3 text-sm">
                Hova emelet
              </p>

              <input
                type="number"
                min={0}
                max={50}
                value={toFloor}
                onChange={(e) => setToFloor(e.target.value)}
                className="w-full p-4 rounded-xl bg-[#FFFFFF] border border-black/10 text-black outline-none focus:border-[#f54d05] transition"
              />

              <div className="mt-4">
                <Toggle
                  checked={hasLiftTo}
                  onChange={setHasLiftTo}
                  label="Van lift"
                />
              </div>
            </div>

          </div>
        )}

        {/* RESULT - HERO STYLE */}
        <div className="pt-6 border-t border-black/10">

          <p className="text-black/60 mb-4">
            Becsült ár
          </p>

          <div className="relative overflow-hidden rounded-3xl border border-[#f54d05]/20 bg-gradient-to-br from-gray-300 to-gray-200 p-5 sm:p-8">

            {/* glow layer */}
            <div className="absolute inset-0 bg-[#f54d05]/10 blur-3xl" />

            {/* animated feel */}
            <div className="relative text-center">

              <p className="text-4xl font-black text-[#f54d05] drop-shadow-sm sm:text-5xl md:text-6xl">
                {total.toLocaleString()} Ft
              </p>

              <p className="text-black/60 mt-3 text-sm">
                Ez egy becsült összeg, pontos ár telefonon egyeztetve
              </p>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

    </main>
  );
}