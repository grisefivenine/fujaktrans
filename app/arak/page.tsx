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
      className="flex items-center justify-between w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3"
    >
      <span className="text-gray-300">{label}</span>

      <div
        className={`h-5 w-10 rounded-full transition ${
          checked ? "bg-[#f54d05]" : "bg-white/10"
        }`}
      >
        <div
          className={`h-4 w-4 bg-white rounded-full mt-[2px] transition ${
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
  const [hours, setHours] = useState<number>(3);
  const [km, setKm] = useState<number>(0);
  const [service, setService] = useState<string>("1fő");
  const [fromFloor, setFromFloor] = useState<number>(0);
  const [toFloor, setToFloor] = useState<number>(0);
  const [hasLiftFrom, setHasLiftFrom] = useState<boolean>(false);
  const [hasLiftTo, setHasLiftTo] = useState<boolean>(false);

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
    ? hours * selectedPrice
    : hours * selectedPrice + (km > 15 ? (km - 15) * 280 : 0);

// emelet felár
let floorExtra = 0;

if (service !== "teherauto") {
  const fromPenalty =
    fromFloor >= 3 && !hasLiftFrom ? 2000 : 0;

  const toPenalty =
    toFloor >= 3 && !hasLiftTo ? 2000 : 0;

  floorExtra = (fromPenalty + toPenalty) * hours;
}

const total = base + floorExtra;

  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">

      <div className="mx-auto max-w-5xl text-center mb-16">
        <p className="text-sm tracking-[0.3em] text-[#E0E0E0] uppercase">
          Árlista
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mt-4">
          Áraink
        </h1>

        <p className="mt-6 text-gray-400">
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
            className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-xl hover:border-[#f54d05]/30 transition"
          >
            <h2 className="text-xl font-bold text-[#f54d05]">
              {item.title}
            </h2>

            <p className="mt-2 text-gray-400">
              {item.note}
            </p>

            <div className="mt-6 text-2xl font-bold">
              {item.price}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Példa rész */}
      <div className="mt-20 rounded-3xl border border-white/10 bg-black/40 p-10">
        <h3 className="text-2xl font-bold mb-6 text-[#f54d05]">
          Példa számítás
        </h3>

        <p className="text-gray-300 leading-relaxed">
          Nyíregyháza – Kisvárda 2 szobás lakás költöztetése a 3. emeletről:
          <br /><br />

          Kiszállás: <b>10.000 Ft</b><br />
          3 óra munka × 15.000 Ft = <b>45.000 Ft</b><br />
          100 km × 280 Ft = <b>28.000 Ft</b><br /><br />

          <span className="text-white font-bold">
            Teljes költség: 83.000 Ft
          </span>
        </p>
      </div>

      {/* CALCULATOR */}
<section className="py-24 bg-[#050505] mt-20">
  <div className="mx-auto max-w-4xl px-6">

    <h2 className="text-4xl font-bold text-center mb-10">
      Ár kalkulátor
    </h2>

    <div className="rounded-3xl border border-white/10 bg-black/40 p-8 space-y-6">

      {/* service */}
      <div>
        <p className="text-gray-400 mb-2">Szolgáltatás</p>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full p-4 rounded-xl bg-black border border-white/10"
        >
          <option value="1fő">Költöztetés 1 fővel</option>
          <option value="2fő">Költöztetés 2 fővel</option>
          <option value="3fő">Költöztetés 3 fővel</option>
          <option value="4fő">Költöztetés 4 fővel</option>
          <option value="teherauto">Teherautó bérlés</option>
        </select>
      </div>

      {/* hours */}
      <div>
        <p className="text-gray-400 mb-2">Órák száma</p>
        <input
          type="number"
          min={1}
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          className="w-full p-4 rounded-xl bg-black border border-white/10"
        />
      </div>

      {/* km */}
      {service !== "teherauto" && (
        <div>
          <p className="text-gray-400 mb-2">Kilométer</p>
          <input
            type="number"
            min={0}
            value={km}
            onChange={(e) => setKm(Number(e.target.value))}
            className="w-full p-4 rounded-xl bg-black border border-white/10"
          />
        </div>
      )}

      {/* lift + emelet MODERN UI */}
{service !== "teherauto" && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    {/* FROM */}
    <div className="space-y-3 rounded-2xl border border-white/10 bg-black/30 p-4">
      <p className="text-gray-400">Honnan emelet</p>

      <input
        type="number"
        value={fromFloor}
        onChange={(e) => setFromFloor(Number(e.target.value))}
        className="w-full p-3 rounded-xl bg-black border border-white/10"
        placeholder="Emelet"
      />

      <Toggle
        checked={hasLiftFrom}
        onChange={setHasLiftFrom}
        label="Van lift"
      />
    </div>

    {/* TO */}
    <div className="space-y-3 rounded-2xl border border-white/10 bg-black/30 p-4">
      <p className="text-gray-400">Hova emelet</p>

      <input
        type="number"
        value={toFloor}
        onChange={(e) => setToFloor(Number(e.target.value))}
        className="w-full p-3 rounded-xl bg-black border border-white/10"
        placeholder="Emelet"
      />

      <Toggle
        checked={hasLiftTo}
        onChange={setHasLiftTo}
        label="Van lift"
      />
    </div>

  </div>
)}

      {/* result */}
      <div className="pt-6 border-t border-white/10">
  <p className="text-gray-400 mb-2">Becsült ár</p>

  <div className="relative overflow-hidden rounded-2xl border border-[#f54d05]/20 bg-gradient-to-r from-black to-[#1a0a05] p-6">
    
    <div className="absolute inset-0 opacity-20 bg-[#f54d05] blur-3xl" />

    <p className="relative text-5xl font-black text-[#f54d05]">
      {total.toLocaleString()} Ft
    </p>

    <p className="relative text-sm text-gray-400 mt-2">
      Ez egy becsült összeg, pontos ár telefonon egyeztetve
    </p>

  </div>
</div>

    </div>
  </div>
</section>

    </main>
  );
}