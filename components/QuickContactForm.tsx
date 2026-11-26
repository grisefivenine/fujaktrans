"use client";

import { useRef, useState, type FormEvent } from "react";
import DatePicker from "@/components/DatePicker";
import { services } from "@/lib/site-content";

function localDate(date?: Date) {
  if (!date) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function QuickContactForm() {
  const startedAt = useRef(Date.now());
  const [values, setValues] = useState({ name: "", phone: "", email: "", service: "", message: "", website: "" });
  const [date, setDate] = useState<Date>();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const update = (key: keyof typeof values, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (values.website) return;
    setLoading(true);
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, date: localDate(date), elapsedTime: Date.now() - startedAt.current }),
      });
      if (!response.ok) throw new Error("A küldés nem sikerült.");
      setStatus("success");
      setValues({ name: "", phone: "", email: "", service: "", message: "", website: "" });
      setDate(undefined);
      startedAt.current = Date.now();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block min-w-0">
          <span className="ft-label">Név</span>
          <input required autoComplete="name" value={values.name} onChange={(event) => update("name", event.target.value)} className="ft-field" placeholder="Teljes név" />
        </label>
        <label className="block min-w-0">
          <span className="ft-label">Telefonszám</span>
          <input required autoComplete="tel" type="tel" value={values.phone} onChange={(event) => update("phone", event.target.value)} className="ft-field" placeholder="+36 ..." />
        </label>
      </div>
      <label className="block min-w-0">
        <span className="ft-label">E-mail cím</span>
        <input required autoComplete="email" type="email" value={values.email} onChange={(event) => update("email", event.target.value)} className="ft-field" placeholder="nev@email.hu" />
      </label>
      <label className="block min-w-0">
        <span className="ft-label">Miben segíthetünk?</span>
        <select required value={values.service} onChange={(event) => update("service", event.target.value)} className="ft-field">
          <option value="">Válasszon szolgáltatást</option>
          {services.map((service) => <option key={service.slug}>{service.title}</option>)}
          <option>Egyéb</option>
        </select>
      </label>
      <label className="block min-w-0">
        <span className="ft-label">Röviden a feladatról</span>
        <textarea value={values.message} onChange={(event) => update("message", event.target.value)} className="ft-field min-h-[112px] resize-y" placeholder="Honnan hová, mit és mikor kellene szállítani?" rows={4} />
      </label>
      <div>
        <span className="ft-label">Tervezett időpont (opcionális)</span>
        <DatePicker date={date} setDate={setDate} label="Dátum kiválasztása" />
      </div>
      <input type="text" name="website" value={values.website} onChange={(event) => update("website", event.target.value)} autoComplete="off" tabIndex={-1} aria-hidden="true" className="absolute -left-[10000px] h-px w-px opacity-0" />
      <button type="submit" disabled={loading} className="ft-button-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
        {loading ? "Küldés folyamatban…" : "Ajánlatkérés elküldése"}
      </button>
      <p className="text-center text-xs leading-5 text-[#6d6265]">A részletesebb, személyre szabott ajánlatkérőben további adatokat is megadhat.</p>
      {status === "success" && <p role="status" className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-800">Köszönjük! Az üzenet sikeresen elküldve.</p>}
      {status === "error" && <p role="alert" className="rounded-2xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-700">Nem sikerült elküldeni az üzenetet. Kérjük, próbálja újra, vagy hívjon minket telefonon.</p>}
    </form>
  );
}
