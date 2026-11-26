"use client";

import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { hu } from "date-fns/locale";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

type DatePickerProps = {
  date?: Date;
  setDate: (date?: Date) => void;
  label?: string;
};

export default function DatePicker({ date, setDate, label = "Mikorra kéri a szállítást?" }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="relative min-w-0">
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="ft-field flex w-full items-center justify-between gap-3 text-left"
      >
        <span className={date ? "text-[#211719]" : "text-[#777074]"}>
          {date ? format(date, "yyyy. MMMM d.", { locale: hu }) : label}
        </span>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-[#f54d05]" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M7.5 3v4M16.5 3v4M4 9.5h16"/></svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-[160] flex items-center justify-center p-3 sm:p-5" role="dialog" aria-modal="true" aria-label="Szállítási dátum kiválasztása">
          <button type="button" aria-label="Naptár bezárása" onClick={() => setOpen(false)} className="absolute inset-0 bg-[#160d10]/45 backdrop-blur-sm" />
          <div className="relative z-10 w-full max-w-[360px] rounded-[26px] border border-white/80 bg-white p-4 shadow-[0_24px_80px_rgba(15,5,8,0.3)] sm:p-5">
            <div className="mb-2 flex items-center justify-between gap-3">
              <p className="text-sm font-bold text-[#271a1d]">Szállítás dátuma</p>
              <button type="button" onClick={() => setOpen(false)} className="flex h-9 w-9 items-center justify-center rounded-full bg-black/[0.05] text-lg text-[#271a1d]" aria-label="Bezárás">×</button>
            </div>
            <DayPicker
              mode="single"
              selected={date}
              onSelect={(selectedDate) => {
                setDate(selectedDate);
                setOpen(false);
              }}
              disabled={{ before: today }}
              locale={hu}
              showOutsideDays
              className="mx-auto ft-daypicker"
            />
            {date && <button type="button" onClick={() => { setDate(undefined); setOpen(false); }} className="mt-2 w-full rounded-xl border border-black/10 py-2 text-xs font-semibold text-[#6a6062]">Dátum törlése</button>}
          </div>
        </div>
      )}
    </div>
  );
}
