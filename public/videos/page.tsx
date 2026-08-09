"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  ["500+", "Sikeres költözés"],
  ["4.9★", "Google értékelés"],
  ["0-24", "Elérhetőség"],
  ["100%", "Biztonságos szállítás"],
];

const services = [
  {
    title: "Lakásköltöztetés",
    description:
      "Profi csapatunkkal vállaljuk családi házak, lakások, és irodák költöztetését országszerte, illetve külföldre is!",
  },
  {
    title: "Irodaköltöztetés",
    description:
      "Precíz és szervezett irodaköltöztetés minimális kieséssel vállalkozások számára.",
  },
  {
    title: "Házhozszállítás az üzletekből",
    description:
      "Abban az esetben ha otthonába bútort, vagy műszaki cikket vásárolna, mi az Ön rendelkezésére állunk az árú hazaszállításában illetve beszerelésében. (Jysk, Mömax, XXL Lutz, Obi, Praktiker, Bestbyte, MediaMarkt, Szegfű Bútor, Frankó Bútor, Diego)… ",
  },
  {
    title: "Lomtalanítás",
    description:
      "Teljeskörű lomtalanítás takarítással! Legyen szó egy komplett hagyatékról akár, mi tudjuk rá a megoldást!",
  },
  {
    title: "Nemzetközi fuvar",
    description:
      "Nemzetközi költöztetés és áruszállítás Európa több országába.",
  },
  {
    title: "SOS szállítás",
    description:
      "Éjszakai vagy más társaság által lemondott szállítás elvállalása sürgősen! (Speciális árajánlat)",
  },
];

const reviews = [
  {
    name: "Péter",
    text: "Gyors és profi csapat, maximálisan elégedettek voltunk.",
  },
  {
    name: "Andrea",
    text: "Nagyon vigyáztak minden bútorra, csak ajánlani tudom.",
  },
  {
    name: "Gábor",
    text: "Pontos érkezés és korrekt árak. Ritka megbízható szolgáltatás.",
  },
];

const galleryImages = [1, 2, 3, 4, 5, 6, 7, 8];

export default function FujakTransWebsite() {
  const [language, setLanguage] = useState<"hu" | "en">("hu");
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
 
  useEffect(() => {
  document.body.style.scrollBehavior = "smooth";
  document.body.style.overflowX = "hidden";

  return () => {
    document.body.style.scrollBehavior = "auto";
  };
}, []);

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);

    // kis cinematic delay
    setTimeout(() => setReady(true), 200);
  }, 1200);

  return () => clearTimeout(timer);
}, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FFFFFF]">
        <div className="space-y-6 text-center">
          <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-[#f54d05] border-t-transparent" />

          <div className="space-y-3">
            <div className="h-4 w-48 animate-pulse rounded-full bg-[#FFFFFF]/10 mx-auto" />
            <div className="h-4 w-32 animate-pulse rounded-full bg-[#FFFFFF]/5 mx-auto" />
          </div>
        </div>
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-[#FFFFFF] text-black overflow-x-hidden transition-all duration-700">
    <div
  className={`transition-all duration-1000 ${
    ready ? "opacity-100" : "opacity-0 scale-[1.02]"
  }`}
></div>
      {/* GLOBAL CINEMATIC BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Main sepia ambient glow */}
        <motion.div
          animate={{
            opacity: [0.2, 0.35, 0.2],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[-250px] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[#e7d7c3]/10 blur-[180px]"
        />

        {/* Light beam 1 */}
        <motion.div
          animate={{
            opacity: [0.04, 0.1, 0.04],
            rotate: [10, 14, 10],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[-350px] h-[1600px] w-[300px] -translate-x-1/2 rotate-[10deg] bg-gradient-to-b from-[#f54d05]/20 to-transparent blur-3xl"
        />

        {/* Light beam 2 */}
        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
            rotate: [-12, -8, -12],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[30%] top-[-300px] h-[1500px] w-[220px] rotate-[-12deg] bg-gradient-to-b from-[#FFFFFF]/15 to-transparent blur-3xl"
        />

        {/* Particles */}
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -60, 0],
              x: [0, 20, 0],
              opacity: [0.1, 0.35, 0.1],
            }}
            transition={{
              duration: 7 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-[#f54d05]"
            style={{
              width: `${4 + (i % 4) * 3}px`,
              height: `${4 + (i % 4) * 3}px`,
              left: `${(i * 7) % 100}%`,
              top: `${20 + ((i * 9) % 60)}%`,
              filter: "blur(2px)",
            }}
          />
        ))}
      </div>

      {/* HEADER */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-[#FFFFFF]/30 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="text-2xl font-bold tracking-[0.2em] text-[#f54d05]"
          >
            FUJÁK TRANS
          </a>

          <nav className="hidden items-center gap-8 text-sm tracking-wide md:flex">
            <a
              href="#services"
              className="transition hover:text-[#e7d7c3]"
            >
              Szolgáltatások
            </a>

            <a href="#reviews" className="transition hover:text-[#e7d7c3]">
              Vélemények
            </a>

            <a href="#gallery" className="transition hover:text-[#e7d7c3]">
              Referenciák
            </a>

            <a href="#contact" className="transition hover:text-[#e7d7c3]">
              Kapcsolat
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() =>
                setLanguage((prev) => (prev === "hu" ? "en" : "hu"))
              }
              className="rounded-full border border-black/10 px-3 py-2 text-sm transition hover:border-[#e7d7c3]"
            >
              {language.toUpperCase()}
            </button>

            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full border border-[#e7d7c3]/20 bg-[#f54d05] px-5 py-2 font-semibold text-black shadow-2xl shadow-[#f54d05]/10 transition duration-300 hover:scale-105 md:flex"
            >
              <span>📞</span>
              Árajánlat
            </a>

            <button
  type="button"
  className="relative flex h-10 w-10 flex-col items-center justify-center md:hidden"
  onClick={() => setMenuOpen((prev) => !prev)}
  aria-label="Menü"
>
  <span
    className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${
      menuOpen ? 'rotate-45' : '-translate-y-2'
    }`}
  />

  <span
    className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${
      menuOpen ? 'opacity-0' : 'opacity-100'
    }`}
  />

  <span
    className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${
      menuOpen ? '-rotate-45' : 'translate-y-2'
    }`}
  />
</button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-black/10 bg-[#FFFFFF]/95 px-6 py-6 md:hidden">
            <nav className="flex flex-col gap-6 text-lg">
              <a href="#services" onClick={() => setMenuOpen(false)}>
                Szolgáltatások
              </a>

              <a href="#reviews" onClick={() => setMenuOpen(false)}>
                Vélemények
              </a>

              <a href="#gallery" onClick={() => setMenuOpen(false)}>
                Referenciák
              </a>

              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Kapcsolat
              </a>
            </nav>
          </div>
        )}
      </header>

      <main id="top">
        {/* FLOATING MAP */}
        <div className="fixed bottom-24 right-6 z-40 hidden overflow-hidden rounded-2xl border border-black/10 bg-[#FFFFFF]/50 p-2 backdrop-blur-xl lg:block">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps?q=Nyíregyháza&output=embed"
            className="h-40 w-52 rounded-xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* HERO */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            onCanPlayThrough={() => setVideoReady(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
              videoReady
      ? "opacity-60 blur-0 scale-100"
      : "opacity-0 blur-2xl scale-105"
  }`}
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 from-white to-gray-100/20 via-black/70 to-[#FFFFFF]" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-20 max-w-5xl px-6 pt-32 text-center"
          >
            <p className="mb-6 text-sm uppercase tracking-[0.45em] text-[#FFFFFF]">
              Költöztetés/Fuvarozás/Áruszállítás/Lomtalanítás Magyarország egész területén
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-7xl text-[#FFFFFF]">
              Az Ön bútorai.
              <br />
              <span className="text-[#f54d05]">
                A mi hírnevünk.
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-black sm:text-lg md:text-xl">
              Gyors, biztonságos és stresszmentes költöztetés, fuvarozás, áruszállítás és lomtalanítás modern megoldásokkal és tapasztalt csapattal.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-[#f54d05] px-8 py-4 text-lg font-bold text-black transition duration-300 hover:scale-105"
              >
                Árajánlat kérése
              </a>

              <a
                href="#gallery"
                className="rounded-full border border-white/20 px-8 py-4 font-semibold transition duration-300 hover:bg-[#f54d05] hover:text-black"
              >
                Munkáink megtekintése
              </a>
            </div>
          </motion.div>

          {/* Floating CTA */}
          <a
            href="tel:+36206180015"
            className="fixed bottom-6 right-6 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#f54d05] text-black shadow-2xl shadow-[#f54d05]/20 transition duration-300 hover:scale-110"
            aria-label="Telefonhívás"
          >
            <span className="text-2xl">📞</span>
          </a>

          {/* Quick form */}
          <div className="absolute bottom-10 left-1/2 z-20 hidden w-[92%] max-w-5xl -translate-x-1/2 lg:block">
            <div className="rounded-3xl border border-black/10 bg-[#FFFFFF]/5 p-6 shadow-2xl backdrop-blur-2xl">
              <form className="grid grid-cols-1 gap-4 md:grid-cols-5">
                <input
                  type="text"
                  placeholder="Név"
                  autoComplete="name"
                  className="rounded-xl border border-black/10 bg-[#FFFFFF]/40 px-4 py-4 outline-none placeholder:text-gray-700"
                />

                <input
                  type="tel"
                  placeholder="Telefonszám"
                  autoComplete="tel"
                  className="rounded-xl border border-black/10 bg-[#FFFFFF]/40 px-4 py-4 outline-none placeholder:text-gray-700"
                />

                <input
                  type="text"
                  placeholder="Honnan?"
                  className="rounded-xl border border-black/10 bg-[#FFFFFF]/40 px-4 py-4 outline-none placeholder:text-gray-700"
                />

                <input
                  type="text"
                  placeholder="Hova?"
                  className="rounded-xl border border-black/10 bg-[#FFFFFF]/40 px-4 py-4 outline-none placeholder:text-gray-700"
                />

                <button
                  type="submit"
                  className="rounded-xl bg-[#f54d05] px-4 py-4 font-bold text-black transition duration-300 hover:scale-[1.02]"
                >
                  Ajánlatkérés
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-[#FFFFFF] py-28">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
            {stats.map(([number, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-black/5 bg-[#FFFFFF]/40 p-10 backdrop-blur-xl"
              >
                <h2 className="mb-3 text-5xl font-bold text-[#f54d05]">
                  {number}
                </h2>

                <p className="text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-[#FFFFFF] py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#FFFFFF]">
                Szolgáltatások
              </p>

              <h2 className="mb-6 text-4xl font-bold md:text-6xl">
                Teljes körű költöztetési megoldások
              </h2>

              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Lakásoktól kezdve irodákon át a speciális szállításig.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group rounded-3xl border border-black/5 bg-zinc-950/50 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#e7d7c3]/20"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f54d05]/10">
                    <div className="h-8 w-8 rounded-full bg-[#f54d05]" />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold transition group-hover:text-[#d6c6a5]">
  {service.title}
</h3>

                  <p className="mb-6 leading-relaxed text-gray-600">
  {service.description}
</p>

                  <div className="flex items-center gap-2 font-semibold text-[#FFFFFF]">
                    Részletek
                    <span>→</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="bg-[#FFFFFF] py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-20 text-center">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#FFFFFF]">
                Google értékelések
              </p>

              <h2 className="text-4xl font-bold md:text-6xl">
                Amit ügyfeleink mondanak
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {reviews.map((review) => (
                <article
                  key={review.name}
                  className="rounded-3xl border border-black/5 bg-[#FFFFFF]/40 p-8 backdrop-blur-xl"
                >
                  <div className="mb-6 flex items-center gap-1 text-[#f54d05]">
                    {[...Array(5)].map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  </div>

                  <p className="mb-8 text-lg leading-relaxed text-black">
                    “{review.text}”
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f54d05] font-bold text-black">
                      {review.name.charAt(0)}
                    </div>

                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-gray-700">Google Review</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section
          id="gallery"
          className="relative overflow-hidden bg-[#FFFFFF] py-32"
        >
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#f54d05]/5 blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#FFFFFF]">
                Referenciák
              </p>

              <h2 className="mb-6 text-4xl font-bold md:text-6xl">
                Munkáink képekben
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {galleryImages.map((image) => (
                <div
                  key={image}
                  className="group relative aspect-square overflow-hidden rounded-3xl border border-black/5 bg-zinc-900"
                >
                  <Image
                    src={`/images/gallery-${image}.webp`}
                    alt={`Fuják Trans referencia ${image}`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#FFFFFF] py-32">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <div className="rounded-[40px] border border-black/10 bg-gradient-to-br from-[#f54d05] to-[#FFFFFF] p-14 text-black shadow-2xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em]">
                Gyors kapcsolatfelvétel
              </p>

              <h2 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                Kérjen ajánlatot még ma.
              </h2>

              <p className="mx-auto mb-10 max-w-2xl text-lg text-black/70">
                Küldje el adatait és rövid időn belül felvesszük Önnel a
                kapcsolatot.
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-[#FFFFFF] px-8 py-4 font-bold text-black transition duration-300 hover:scale-105"
                >
                  Árajánlat kérése
                </a>

                <a
                  href="tel:+36206180015"
                  className="rounded-full border border-black/20 px-8 py-4 font-bold transition duration-300 hover:bg-[#FFFFFF] hover:text-black"
                >
                  Hívás most
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-[#FFFFFF] py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#FFFFFF]">
                Kapcsolat
              </p>

              <h2 className="mb-8 text-4xl font-bold leading-tight md:text-6xl">
                Beszéljünk a költözésről.
              </h2>

              <div className="space-y-6 text-lg text-black">
                <p>📞 +36 20 618 0015</p>
                <p>✉️ csabafujak@icloud.com</p>
                <p>📍 Nyíregyháza, Magyarország</p>
              </div>
            </div>

            <div className="rounded-[40px] border border-black/5 bg-zinc-950/50 p-10 backdrop-blur-xl">
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Név"
                  autoComplete="name"
                  className="w-full rounded-2xl border border-black/10 bg-[#FFFFFF]/40 px-5 py-4 outline-none placeholder:text-gray-700"
                />

                <input
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  className="w-full rounded-2xl border border-black/10 bg-[#FFFFFF]/40 px-5 py-4 outline-none placeholder:text-gray-700"
                />

                <textarea
                  placeholder="Üzenet"
                  rows={5}
                  className="w-full rounded-2xl border border-black/10 bg-[#FFFFFF]/40 px-5 py-4 outline-none placeholder:text-gray-700"
                />

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-[#f54d05] py-4 font-bold text-black transition duration-300 hover:scale-[1.01]"
                >
                  Üzenet küldése
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* COOKIE */}
        <section className="border-t border-black/5 bg-[#FFFFFF] px-6 py-8 text-sm text-gray-600">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p>
              Az oldal sütiket használ a jobb felhasználói élmény érdekében.
            </p>

            <div className="flex gap-4">
              <button className="rounded-full bg-[#f54d05] px-5 py-2 font-semibold text-black">
                Elfogadás
              </button>

              <button className="rounded-full border border-black/10 px-5 py-2">
                Beállítások
              </button>
            </div>
          </div>
        </section>
      <div className="fixed bottom-0 left-0 z-[120] flex w-full gap-3 border-t border-black/10 bg-[#FFFFFF]/80 p-4 backdrop-blur-2xl md:hidden">
  <a
    href="tel:+36206180015"
    className="flex-1 rounded-2xl bg-[#d8c7a3] px-4 py-4 text-center font-bold text-black"
  >
    📞 Hívás
  </a>

  <a
    href="#contact"
    className="flex-1 rounded-2xl border border-black/10 bg-[#FFFFFF]/5 px-4 py-4 text-center font-bold text-black"
  >
    Árajánlat
  </a>
</div></main>

      {/* FOOTER */}
      <footer className="border-t border-black/5 bg-[#FFFFFF] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-gray-700 md:flex-row">
          <p>© 2026 Fuják Trans.</p>

          <div className="flex items-center gap-6">
            <a href="#">Adatkezelés</a>
            <a href="#">ÁSZF</a>
            <a href="#contact">Kapcsolat</a>
          </div>
        </div>
      </footer>
    </div>
  );
}