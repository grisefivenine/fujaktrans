"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function DatePicker({ date, setDate }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* trigger input (szép UI) */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          w-full rounded-2xl
          border border-black/10
          bg-gray-300/40
          px-5 py-4
          text-left text-gray-800
          backdrop-blur-xl
        "
      >
        {date
          ? new Date(date).toLocaleDateString("hu-HU")
          : "Mikorra kéri a szállítást?"}
      </button>

      {/* dropdown calendar */}
      {open && (
        <div className="absolute z-50 mt-3 rounded-3xl border border-black/10 bg-white p-4 shadow-2xl">
          <DayPicker
            mode="single"
            selected={date ? new Date(date) : undefined}
            onSelect={(d) => {
              setDate(d);
              setOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}