"use client";

import { useRef, useState, type FormEvent } from "react";
import DatePicker from "@/components/DatePicker";
import { services } from "@/lib/site-content";

const serviceOptions = [...services.map((service) => service.title), "Egyéb"];

const floorOptions = [
  "Kertes ház / földszint",
  "1. emelet",
  "2. emelet",
  "3. emelet",
  "4. emelet",
  "5. emelet",
  "6. emelet",
  "7. emelet",
  "8. emelet",
  "9. emelet",
  "10. emelet vagy magasabb",
];

type Address = {
  postalCode: string;
  city: string;
  street: string;
  houseNumber: string;
  floor: string;
  door: string;
  elevator: string;
};

type QuoteValues = {
  service: string;
  date?: Date;
  rooms: string;
  loaders: string;
  items: string;
  name: string;
  phone: string;
  email: string;
  company: string;
  from: Address;
  to: Address;
  packing: boolean;
  wrapping: boolean;
  disassembly: boolean;
  assembly: boolean;
  note: string;
  website: string;
};

const emptyAddress: Address = {
  postalCode: "",
  city: "",
  street: "",
  houseNumber: "",
  floor: "",
  door: "",
  elevator: "",
};

const initialValues: QuoteValues = {
  service: "",
  date: undefined,
  rooms: "",
  loaders: "",
  items: "",
  name: "",
  phone: "",
  email: "",
  company: "",
  from: { ...emptyAddress },
  to: { ...emptyAddress },
  packing: false,
  wrapping: false,
  disassembly: false,
  assembly: false,
  note: "",
  website: "",
};

function toLocalDate(date?: Date) {
  if (!date) return "";
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function addressLine(address: Address) {
  return [address.postalCode, address.city, address.street, address.houseNumber].filter(Boolean).join(" ");
}

function AddressFields({
  title,
  value,
  onChange,
}: {
  title: string;
  value: Address;
  onChange: (field: keyof Address, nextValue: string) => void;
}) {
  return (
    <section className="min-w-0 rounded-[24px] border border-white/80 bg-white/75 p-4 shadow-[0_12px_35px_rgba(30,12,16,0.06)] backdrop-blur-xl sm:p-5">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f54d05]/10 text-sm font-bold text-[#f54d05]">{title === "Felvételi cím" ? "A" : "B"}</span>
        <h3 className="text-base font-bold text-[#251a1d]">{title}</h3>
      </div>
      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block min-w-0">
          <span className="ft-label">Irányítószám *</span>
          <input required autoComplete="postal-code" inputMode="numeric" value={value.postalCode} onChange={(event) => onChange("postalCode", event.target.value)} className="ft-field" placeholder="4400" />
        </label>
        <label className="block min-w-0">
          <span className="ft-label">Település *</span>
          <input required autoComplete="address-level2" value={value.city} onChange={(event) => onChange("city", event.target.value)} className="ft-field" placeholder="Nyíregyháza" />
        </label>
        <label className="block min-w-0 sm:col-span-2">
          <span className="ft-label">Utca, közterület *</span>
          <input required autoComplete="street-address" value={value.street} onChange={(event) => onChange("street", event.target.value)} className="ft-field" placeholder="Utca, közterület neve" />
        </label>
        <label className="block min-w-0">
          <span className="ft-label">Házszám *</span>
          <input required value={value.houseNumber} onChange={(event) => onChange("houseNumber", event.target.value)} className="ft-field" placeholder="Házszám" />
        </label>
        <label className="block min-w-0">
          <span className="ft-label">Emelet *</span>
          <select required value={value.floor} onChange={(event) => onChange("floor", event.target.value)} className="ft-field">
            <option value="">Válasszon emeletet</option>
            {floorOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label className="block min-w-0">
          <span className="ft-label">Ajtó (opcionális)</span>
          <input value={value.door} onChange={(event) => onChange("door", event.target.value)} className="ft-field" placeholder="Ajtó" />
        </label>
        <label className="block min-w-0">
          <span className="ft-label">Van lift az épületben? *</span>
          <select required value={value.elevator} onChange={(event) => onChange("elevator", event.target.value)} className="ft-field">
            <option value="">Válasszon</option>
            <option>Igen, használható</option>
            <option>Nincs lift</option>
            <option>Van, de nem használható</option>
            <option>Nem releváns / földszint</option>
          </select>
        </label>
      </div>
    </section>
  );
}

export default function QuoteForm() {
  const [values, setValues] = useState<QuoteValues>(initialValues);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const startedAt = useRef(Date.now());

  const update = <K extends keyof QuoteValues>(key: K, value: QuoteValues[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  const updateAddress = (side: "from" | "to", field: keyof Address, value: string) => {
    setValues((current) => ({ ...current, [side]: { ...current[side], [field]: value } }));
  };

  const canContinue = () => {
    if (step === 1) return Boolean(values.service);
    if (step === 2) {
      const addressComplete = (address: Address) => Boolean(
        address.postalCode.trim() &&
        address.city.trim() &&
        address.street.trim() &&
        address.houseNumber.trim() &&
        address.floor &&
        address.elevator
      );
      return addressComplete(values.from) && addressComplete(values.to);
    }
    return Boolean(values.name.trim() && values.phone.trim() && values.email.trim());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (step < 3) {
      if (!canContinue()) return;
      setStep((current) => Math.min(3, current + 1));
      return;
    }
    if (!canContinue() || values.website) return;

    setLoading(true);
    setStatus("idle");
    const fromLocation = addressLine(values.from);
    const toLocation = addressLine(values.to);
    const fullNote = [
      values.note,
      `Cég: ${values.company || "Nincs megadva"}`,
      `Felvételi lift: ${values.from.elevator}`,
      `Célállomási lift: ${values.to.elevator}`,
      `Csomagolás: ${values.packing ? "Kéri" : "Nem kéri"}`,
      `Fóliázás: ${values.wrapping ? "Kéri" : "Nem kéri"}`,
      `Bútorok szétszerelése: ${values.disassembly ? "Kéri" : "Nem kéri"}`,
      `Bútorok összeszerelése: ${values.assembly ? "Kéri" : "Nem kéri"}`,
    ].filter(Boolean).join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: values.service,
          name: values.name,
          email: values.email,
          phone: values.phone,
          company: values.company,
          fromLocation,
          toLocation,
          fromFloor: values.from.floor,
          toFloor: values.to.floor,
          fromDoor: values.from.door,
          toDoor: values.to.door,
          fromPostalCode: values.from.postalCode,
          toPostalCode: values.to.postalCode,
          fromCity: values.from.city,
          toCity: values.to.city,
          fromStreet: values.from.street,
          toStreet: values.to.street,
          fromElevator: values.from.elevator,
          toElevator: values.to.elevator,
          rooms: values.rooms,
          loaders: values.loaders,
          message: values.items,
          note: fullNote,
          packing: values.packing,
          wrapping: values.wrapping,
          disassembly: values.disassembly,
          assembly: values.assembly,
          date: toLocalDate(values.date),
          elapsedTime: Date.now() - startedAt.current,
          website: values.website,
        }),
      });
      if (!response.ok) throw new Error("A küldés nem sikerült.");
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const progress = `${(step / 3) * 100}%`;

  if (status === "success") {
    return (
      <div className="rounded-[28px] border border-emerald-500/20 bg-emerald-500/[0.07] p-6 text-center sm:p-10" role="status">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-2xl text-emerald-700">✓</span>
        <h2 className="mt-5 text-2xl font-bold text-[#251a1d]">Köszönjük az ajánlatkérést!</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[#62575a]">A megadott adatok megérkeztek hozzánk. Hamarosan felvesszük Önnel a kapcsolatot.</p>
        <button type="button" onClick={() => { setValues(initialValues); setStep(1); setStatus("idle"); startedAt.current = Date.now(); }} className="mt-6 rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-[#4A0404] transition hover:bg-black/[0.04]">Új ajánlatkérés indítása</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="min-w-0 rounded-[30px] border border-white/80 bg-white/85 p-4 shadow-[0_24px_70px_rgba(35,12,17,0.09)] backdrop-blur-2xl sm:p-7 lg:p-8">
      <div className="mb-7">
        <div className="mb-3 flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#7b6e71]">
          <span>{`Ajánlatkérés · ${step}. lépés / 3`}</span>
          <span className="text-[#f54d05]">{step === 1 ? "A feladat" : step === 2 ? "Helyszínek" : "Kapcsolat és extrák"}</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-[#4A0404]/[0.08]">
          <div className="h-full rounded-full bg-gradient-to-r from-[#f54d05] to-[#ff986d] transition-all duration-300" style={{ width: progress }} />
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-5">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#251a1d] sm:text-3xl">Milyen szolgáltatásra van szüksége?</h2>
            <p className="mt-2 text-sm leading-6 text-[#6c6265]">Válassza ki a feladat típusát, és írja le röviden, mit kell szállítani.</p>
          </div>
          <label className="block min-w-0">
            <span className="ft-label">Szolgáltatás *</span>
            <select required value={values.service} onChange={(event) => update("service", event.target.value)} className="ft-field">
              <option value="">Szolgáltatás kiválasztása</option>
              {serviceOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
          <label className="block min-w-0">
            <span className="ft-label">Mit szeretne elszállíttatni?</span>
            <textarea value={values.items} onChange={(event) => update("items", event.target.value)} className="ft-field min-h-[132px] resize-y" rows={5} placeholder="Kérjük, sorolja fel a szállítandó bútorokat, tárgyakat, dobozokat. Érdemes megadni a nagyobb vagy nehezebb darabokat is." />
          </label>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label className="block min-w-0">
              <span className="ft-label">Ingatlan mérete (opcionális)</span>
              <select value={values.rooms} onChange={(event) => update("rooms", event.target.value)} className="ft-field">
                <option value="">Válasszon</option><option>1 szoba</option><option>2 szoba</option><option>3 szoba</option><option>4 vagy több szoba</option><option>Nem lakás / egyéb</option>
              </select>
            </label>
            <label className="block min-w-0">
              <span className="ft-label">Szükséges rakodók (opcionális)</span>
              <select value={values.loaders} onChange={(event) => update("loaders", event.target.value)} className="ft-field">
                <option value="">Kérem, egyeztessünk</option><option>1 rakodó</option><option>2 rakodó</option><option>3 rakodó</option><option>4 rakodó</option><option>5 vagy több rakodó</option>
              </select>
            </label>
          </div>
          <div>
            <span className="ft-label">Mikorra tervezi a szállítást?</span>
            <DatePicker date={values.date} setDate={(date) => update("date", date)} label="Dátum kiválasztása (opcionális)" />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#251a1d] sm:text-3xl">Honnan és hová szállítsunk?</h2>
            <p className="mt-2 text-sm leading-6 text-[#6c6265]">A pontos ajánlathoz kérjük, adja meg a felvételi és a célállomás címét is, az emelet és a lift adataival együtt. Az ajtó megadása opcionális.</p>
          </div>
          <div className="grid min-w-0 grid-cols-1 gap-4 xl:grid-cols-2">
            <AddressFields title="Felvételi cím" value={values.from} onChange={(field, value) => updateAddress("from", field, value)} />
            <AddressFields title="Célállomás címe" value={values.to} onChange={(field, value) => updateAddress("to", field, value)} />
          </div>
          <p className="text-xs leading-5 text-[#817477]">A csillaggal jelölt mezők kitöltése kötelező. Az ajtószám csak akkor szükséges, ha az adott címen van ilyen.</p>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-5">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#251a1d] sm:text-3xl">Hogyan érhetjük el?</h2>
            <p className="mt-2 text-sm leading-6 text-[#6c6265]">A pontos adatokkal gyorsabban tudunk visszajelezni és személyre szabott ajánlatot készíteni.</p>
          </div>
          <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
            <label className="block min-w-0"><span className="ft-label">Név *</span><input required autoComplete="name" value={values.name} onChange={(event) => update("name", event.target.value)} className="ft-field" placeholder="Teljes név" /></label>
            <label className="block min-w-0"><span className="ft-label">Telefonszám *</span><input required autoComplete="tel" type="tel" value={values.phone} onChange={(event) => update("phone", event.target.value)} className="ft-field" placeholder="+36 ..." /></label>
            <label className="block min-w-0"><span className="ft-label">E-mail cím *</span><input required autoComplete="email" type="email" value={values.email} onChange={(event) => update("email", event.target.value)} className="ft-field" placeholder="nev@email.hu" /></label>
            <label className="block min-w-0"><span className="ft-label">Cégnév (opcionális)</span><input autoComplete="organization" value={values.company} onChange={(event) => update("company", event.target.value)} className="ft-field" placeholder="Cégnév" /></label>
          </div>

          <div className="rounded-[24px] border border-[#4A0404]/[0.08] bg-[#4A0404]/[0.025] p-4 sm:p-5">
            <h3 className="text-base font-bold text-[#251a1d]">Kér-e kiegészítő szolgáltatást?</h3>
            <p className="mt-1 text-xs leading-5 text-[#706568]">Több lehetőséget is bejelölhet.</p>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {([
                ["packing", "Csomagolás"],
                ["wrapping", "Bútorok fóliázása"],
                ["disassembly", "Bútorok szétszerelése"],
                ["assembly", "Bútorok összeszerelése"],
              ] as const).map(([key, label]) => (
                <label key={key} className="flex min-h-12 cursor-pointer items-center gap-3 rounded-2xl border border-white bg-white/80 px-3 py-2 text-sm font-medium text-[#382c2f] shadow-sm transition hover:border-[#f54d05]/30">
                  <input type="checkbox" checked={values[key]} onChange={(event) => update(key, event.target.checked)} className="h-4 w-4 accent-[#f54d05]" />
                  {label}
                </label>
              ))}
            </div>
          </div>

          <label className="block min-w-0">
            <span className="ft-label">Egyéb megjegyzés</span>
            <textarea value={values.note} onChange={(event) => update("note", event.target.value)} rows={4} className="ft-field min-h-[110px] resize-y" placeholder="Kérjük, itt írja meg, ha csomagolást, összeszerelést vagy szétszerelést szeretne, illetve minden egyéb fontos információt a szállítással kapcsolatban." />
          </label>
          <input type="text" name="website" value={values.website} onChange={(event) => update("website", event.target.value)} autoComplete="off" tabIndex={-1} aria-hidden="true" className="absolute -left-[10000px] h-px w-px opacity-0" />
          <p className="text-xs leading-5 text-[#71676a]">Az ajánlatkérés elküldésével hozzájárul, hogy a megadott adatok alapján felvegyük Önnel a kapcsolatot. Részletek az <a className="font-semibold text-[#4A0404] underline underline-offset-2" href="/adatkezeles">adatkezelési tájékoztatóban</a>.</p>
        </div>
      )}

      {status === "error" && <p role="alert" className="mt-5 rounded-2xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-700">Nem sikerült elküldeni az ajánlatkérést. Kérjük, próbálja újra, vagy hívjon minket telefonon.</p>}

      <div className="mt-7 flex flex-col-reverse gap-3 border-t border-black/[0.07] pt-5 sm:flex-row sm:items-center sm:justify-between">
        <button type="button" disabled={step === 1 || loading} onClick={() => setStep((current) => Math.max(1, current - 1))} className="ft-button-secondary w-full sm:w-auto">Vissza</button>
        {step < 3 ? (
          <button type="submit" disabled={!canContinue()} className="ft-button-primary w-full disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto">Következő lépés <span aria-hidden="true">→</span></button>
        ) : (
          <button type="submit" disabled={!canContinue() || loading} className="ft-button-primary w-full disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto">{loading ? "Küldés folyamatban…" : "Személyre szabott ajánlat kérése"}</button>
        )}
      </div>
    </form>
  );
}
