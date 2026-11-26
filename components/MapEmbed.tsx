"use client";

import { useState } from "react";

const mapUrl = "https://www.google.com/maps?q=Pazonyi%20%C3%BAt%2039%2C%204400%20Ny%C3%ADregyh%C3%A1za&output=embed";
const directionsUrl = "https://www.google.com/maps/search/?api=1&query=Pazonyi%20%C3%BAt%2039%2C%204400%20Ny%C3%ADregyh%C3%A1za";

export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="ft-glass-card min-w-0 overflow-hidden rounded-[26px] p-3 sm:p-4" aria-label="Térkép és cím">
      <div className="flex items-center justify-between gap-3 px-2 pb-3">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c94a19]">Megtalál minket</p>
          <p className="mt-1 break-words text-sm font-bold text-[#4A0404]">4400 Nyíregyháza, Pazonyi út 39.</p>
        </div>
        <a href={directionsUrl} target="_blank" rel="noreferrer" className="shrink-0 rounded-full border border-[#4A0404]/10 bg-white/80 px-3 py-2 text-xs font-bold text-[#4A0404] transition hover:border-[#f54d05]/40 hover:text-[#f54d05]">
          Útvonal ↗
        </a>
      </div>
      {loaded ? (
        <iframe
          title="Fuják Trans – Nyíregyháza, Pazonyi út 39. térkép"
          src={mapUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[260px] w-full rounded-[19px] border-0 sm:h-[320px]"
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="group relative flex min-h-[220px] w-full flex-col items-center justify-center overflow-hidden rounded-[19px] border border-[#f54d05]/10 bg-[radial-gradient(circle_at_78%_22%,rgba(245,77,5,.16),transparent_35%),linear-gradient(135deg,#f8f2ef,#eee4df)] px-5 text-center sm:min-h-[280px]"
        >
          <span aria-hidden="true" className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white/80 text-xl text-[#f54d05] shadow-[0_8px_24px_rgba(74,4,4,.09)] backdrop-blur-xl">⌖</span>
          <span className="text-sm font-bold text-[#4A0404]">Térkép betöltése</span>
          <span className="mt-1 text-xs text-[#796d70]">A Google Térkép csak kattintás után töltődik be.</span>
        </button>
      )}
    </section>
  );
}
