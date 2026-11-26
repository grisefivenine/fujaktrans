"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(!localStorage.getItem("cookieConsent"));
    } catch {
      setVisible(false);
    }
  }, []);

  const choose = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem("cookieConsent", value);
    } finally {
      setVisible(false);
    }
  };

  if (!visible) return null;

  return (
    <aside role="dialog" aria-label="Cookie beállítások" className="fixed inset-x-3 bottom-[calc(6.25rem+env(safe-area-inset-bottom))] z-[130] mx-auto max-w-xl rounded-[24px] border border-white/80 bg-white/95 p-4 text-[#251b1e] shadow-[0_18px_60px_rgba(28,10,14,0.18)] backdrop-blur-2xl sm:inset-x-5 sm:bottom-5 sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h2 className="text-sm font-bold">Cookie beállítások</h2>
          <p className="mt-1 text-xs leading-5 text-[#6a6062]">Az oldal a működéshez szükséges sütiket használ. A választását ezen az eszközön tároljuk.</p>
        </div>
        <div className="grid shrink-0 grid-cols-2 gap-2 sm:flex">
          <button type="button" onClick={() => choose("rejected")} className="min-h-10 rounded-full border border-black/10 px-4 text-xs font-semibold transition hover:bg-black/[0.04]">Elutasítom</button>
          <button type="button" onClick={() => choose("accepted")} className="min-h-10 rounded-full bg-[#f54d05] px-4 text-xs font-bold text-white transition hover:bg-[#e94700]">Elfogadom</button>
        </div>
      </div>
    </aside>
  );
}
