"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRef } from "react";
import DatePicker from "../components/DatePicker";

const stats = [
  ["500+", "Sikeres költözés"],
  ["4.9★", "Google értékelés"],
  ["0-24", "Elérhetőség"],
  ["100%", "Biztonságos szállítás"],
];

const services = [
  {
    title: "Költöztetés",
    description:
      "Profi csapatunkkal vállaljuk családi házak, lakások, és irodák költöztetését országszerte, illetve külföldre is!",
  },
  {
    title: "Lomtalanítás",
    description:
      "Teljeskörű lomtalanítás takarítással! Legyen szó egy komplett hagyatékról akár, mi tudjuk rá a megoldást!",
  },
  {
    title: "Házhozszállítás az üzletekből",
    description:
      "Abban az esetben ha otthonába bútort, vagy műszaki cikket vásárolna, mi az Ön rendelkezésére állunk az árú hazaszállításában illetve beszerelésében. (Jysk, Mömax, XXL Lutz, Obi, Praktiker, Bestbyte, MediaMarkt, Szegfű Bútor, Frankó Bútor, Diego stb.)",
  },
  {
    title: "Bútorok szét- és összeszerelése",
    description:
      "Asztalok, szekrények és ágyak szakszerű összeszerelését, megvásárolt bútorok összeszerelését, valamint komplett konyhaszekrények beépítését is vállaljuk megfelelő szakértelemmel.",
  },
  {
    title: "Motormentés és motorszállítás",
    description:
      "Motormentés, motorszállítás megfizethető áron, rejtett költségek nélkül!",
  },
  {
    title: "SOS szállítás",
    description:
      "Éjszakai vagy más társaság által lemondott szállítás elvállalása sürgősen! (Speciális árajánlat)",
  },
  {
    title: "Raklapos áruszállítás",
    description:
      "Vállaljuk különböző raklaposáruk mozgatását/szállítását országszerte! Nálunk a legnagyobb biztonságban tudhatja!",
  },
  {
    title: "Teherautó bérlés sofőrrel",
    description:
      "Kisebb költöztetésekhez, bútorszállításhoz, házhozszállításhoz (IKEA, JYSK, MÖMAX) stb. nehéz tárgyak szállításához, lakásfelújításhoz, alapanyag szállításhoz (OBI, Praktiker, Bauhaus), fa- vagy Tüzép telepekről. Ha egy vagy több nagyobb dolgot kell elszállítanod, de azok nem férnek be egy személyautóba.",
  },
];

const reviews = [
  {
    name: "Sztanyi Agnes",
    text: "Teljes mértékben elégedett voltam a fiúkkal. A 4. emeletről kellett átköltöznünk egy családi házba, és minden pontosan a megbeszéltek szerint zajlott. Időben érkeztek, precízen dolgoztak, és az egész költözés sérülésmentesen, gördülékenyen ment végbe. " +
      "Biztos vagyok benne, hogy bátran ajánlani fogom őket másoknak is, valóban le a kalappal a munkájuk előtt!",
  },
  {
    name: "Kiss Bálint",
    text: "Gondoltam, hogy jó erőben vannak a srácok, de amit mi a párommal két hétig hordanánk Ők két óra alatt levitték. Mindezt közel 10 óra vezetés után. Gyors és korrekt csapat, mindenkinek csak ajánlani tudom!",
  },
  {
    name: "Beatrix Zákány",
    text: "A szállítás során a bútorokra kiemelt figyelmet fordítottak, és azok gondosan becsomagolt, védett állapotban kerültek elszállításra. Sérülés vagy hiány nem merült fel. A teljes folyamat precízen és körültekintően történt. Összességében a költöztetés problémamentes volt, és minden az előzetesen egyeztetettek szerint valósult meg. Teljes mértékben elégedettek voltunk velük, és mindenkinek ajánlani tudom!😊",
  },
  {
    name: "Péter Makara",
    text: "Nagyon elégedett vagyok a költöztető cég munkájával! Profi, gyors és precíz csapat, minden a megbeszéltek szerint zajlott. Gondosan bántak a bútorokkal és a dobozokkal, semmi nem sérült meg. Igazán gördülékeny és stresszmentes költözés volt, bátran ajánlom mindenkinek!",
  },{
    name: "Beáta Kőpájer",
    text: "Nagyon korrekt cég. Az árajánlatkérés gyorsan és zökkenőmentesen ment, és nagyon hamar válaszoltak is rá. Az árak is rendkívül korrektek. Köszönöm még egyszer a költöztetést, legközelebb is csak veletek fogunk költözni! 😉🏡🚛",
  },{
    name: "Gabriella Szász",
    text: "Nagyon felkészültek, és mindig megállás nélkül dolgoznak. Az árak teljesen barátságosak, és aki nem akar megszakadni, valamint fontos számára, hogy semmi ne sérüljön meg, annak csak őket ajánlom!",
  },{
    name: "Máté Farkas",
    text: "A legnagyobb tiszteletem a cég felé a legkorrektebb csapat, akikkel valaha dolgom volt! Sajnos az eredetileg megrendelt költöztetők az indulás előtt 2 órával lemondták, de Csabáék még munka közben is találtak megoldást küldtek egy másik autót a Sopron-Debrecen költöztetésre. Még egyszer hatalmas köszönet, srácok óriási pacsi!",
  },{
    name: "Szilvia Oláh",
    text: "A költöztető cég srácai mindenben nagyon készségesek voltak. Nemcsak a költözésben, hanem a bútor szerelésben is profin segítettek. Gyorsak, megbízhatóak, kedvesek, máskor is őket választanám, ha költözésről lenne szó. Szívből ajánlom mindenkinek, köszönöm a segítségüket. 🤗",
  },{
    name: "Noel Tóth",
    text: "A Fújak Trans csapata profi és nagyon segítőkész volt a költözés során. Minden bútort és csomagot gondosan kezeltek, időben érkeztek, és a kommunikáció is gördülékeny volt. Nagyon elégedett vagyok a szolgáltatásukkal, nyugodt szívvel ajánlom mindenkinek, aki stresszmentes költözést szeretne.🥇😁",
  },{
    name: "Szabina Vámosi",
    text: "Nagyon szépen köszönjük a költöztetést a Fuják Trans csapatának! Másnapra öt embert is biztosítottak a raktárunk átpakolásához, és a srácok hajnaltól hajnalig, megállás nélkül dolgoztak. Emberfeletti teljesítményt nyújtottak hatalmas köszönet nektek! 🥰",
  },
];

const galleryImages=[1,2,3,4,5,6,7,8,9,10];

export default function FujakTransWebsite() {
  const [ready, setReady] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const isloading = !isReady;
  const sliderRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const duplicated=[...reviews,...reviews];
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [website, setWebsite] = useState("");
  const [formStart] = useState(Date.now());
  const [address, setAddress] = useState("");
  const [service, setService] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isPaused, setIsPaused] = useState(false);

  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");

  const [fromFloor, setFromFloor] = useState("Kertes ház");
  const [toFloor, setToFloor] = useState("Kertes ház");

  const [rooms, setRooms] = useState("1");
  const [loaders, setLoaders] = useState("1");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setStatus("idle");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
  name,
email,
phone,
address,
fromLocation,
toLocation,
fromFloor,
toFloor,
rooms,
loaders,
message,
  elapsedTime: Date.now() - formStart,
}),
    });

    if (!res.ok) throw new Error("Hiba");

    setStatus("success");

    // form reset
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  } catch (err) {
    setStatus("error");
  } finally {
    setLoading(false);
  }
};

const startDrag = (e: React.MouseEvent) => {
  if (!sliderRef.current) return;

  const slider = sliderRef.current;

  slider.style.scrollBehavior = "smooth";

  let startX = e.pageX;
  let startScroll = slider.scrollLeft;

  let velocity = 0;
  let lastX = e.pageX;
  let animationFrame: number;

  const move = (ev: MouseEvent) => {
    const x = ev.pageX;

    const walk = (x - startX) * 1.3;

    slider.scrollLeft = startScroll - walk;

    velocity = x - lastX;
    lastX = x;
  };

  const momentum = () => {
    slider.scrollLeft -= velocity * 2;

    velocity *= 0.94;

    if (Math.abs(velocity) > 0.5) {
      animationFrame =
        requestAnimationFrame(momentum);
    }
  };

  const stop = () => {
    window.removeEventListener(
      "mousemove",
      move
    );

    window.removeEventListener(
      "mouseup",
      stop
    );

    cancelAnimationFrame(animationFrame);

    momentum();
  };

  window.addEventListener(
    "mousemove",
    move
  );

  window.addEventListener(
    "mouseup",
    stop
  );
};
 
  useEffect(() => {
  document.body.style.scrollBehavior = "smooth";
  document.body.style.overflowX = "hidden";

  return () => {
    document.body.style.scrollBehavior = "auto";
  };
}, []);

  useEffect(() => {
  const handleLoad = () => {
    // várunk egy kis extra smoothingot
    setTimeout(() => setIsReady(true), 300);
  };

  if (document.readyState === "complete") {
    handleLoad();
  } else {
    window.addEventListener("load", handleLoad);
  }

  return () => window.removeEventListener("load", handleLoad);
}, []);

  if (isloading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-300">
        <div className="space-y-6 text-center">
          <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-[#f54d05] border-t-transparent" />

          <div className="space-y-3">
            <div className="h-4 w-48 animate-pulse rounded-full bg-gray-300/10 mx-auto" />
            <div className="h-4 w-32 animate-pulse rounded-full bg-gray-300/5 mx-auto" />
          </div>
        </div>
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-gray-300 text-black overflow-x-hidden transition-all duration-700">
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
          className="absolute left-1/2 top-[-250px] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[#f54d05]/10 blur-[180px]"
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
          className="absolute left-[30%] top-[-300px] h-[1500px] w-[220px] rotate-[-12deg] bg-gradient-to-b from-[#000000]/15 to-transparent blur-3xl"
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

      <main id="top">
        {/* FLOATING MAP */}
        <div className="fixed bottom-24 right-6 z-40 hidden overflow-hidden rounded-2xl border border-black/10 bg-gray-300/50 p-2 backdrop-blur-xl lg:block">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps?q=Nyíregyháza&output=embed"
            className="h-40 w-52 rounded-xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* HERO */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pb-28 md:pb-36">
          

          <div className="absolute inset-0 from-gray-300 to-gray-100/20 via-black/70 to-[#E0E0E0]" />

          <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative z-20 w-full max-w-5xl px-5 sm:px-6 pt-32 text-center"
>
  <p className="
mb-6
px-4
text-sm
leading-7
uppercase
tracking-[0.12em]
text-[#000000]
sm:text-base
md:text-sm
md:tracking-[0.35em]
">
    Költöztetés / Fuvarozás / Lomtalanítás Magyarország egész területén
  </p>

  <h1 className="mb-6 text-4xl font-bold leading-[1.1] sm:text-5xl md:text-7xl text-[#000000]">
    Az Ön bútorai.
    <br />
    <span className="text-[#f54d05]">
      A mi hírnevünk.
    </span>
  </h1>

  <div className="relative mx-auto mb-14 max-w-5xl">

  {/* narancs glow háttér */}
  <div className="absolute inset-0 scale-110 bg-gradient-to-r from-[#f54d05]/30 via-transparent to-[#f54d05]/30 blur-3xl" />

  <div className="
  relative
  overflow-hidden
  rounded-[40px]
  border
  border-black/5
  shadow-[0_40px_100px_rgba(245,77,5,0.18)]
  ">

    <Image
      src="/images/hero-truck.webp"
      alt="Fuják Trans költöztetés"
      width={1600}
      height={900}
      priority
      className="
      h-[280px] sm:h-[340px] md:h-[450px]
      sm:h-[340px]
      md:h-[450px]
      w-full
      object-cover
      transition
      duration-700
      hover:scale-105
      "
    />

    {/* alsó sötét overlay szöveg olvashatóság miatt */}
    <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

  </div>

</div>

  <p className="
mx-auto
mb-10
max-w-[92%]
text-base
leading-8
text-[#000000]
sm:max-w-3xl
sm:text-lg
md:text-xl
">
    Gyors, biztonságos és stresszmentes költöztetés, fuvarozás és
    lomtalanítás modern megoldásokkal és tapasztalt csapattal.
  </p>

  <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
    <a
      href="#contact"
      className="w-full rounded-full bg-[#f54d05] px-8 py-4 text-center text-lg font-bold text-black transition duration-300 hover:scale-105 sm:w-auto"
    >
      Ingyenes árajánlat kérése
    </a>

    <a
      href="#gallery"
      className="w-full rounded-full border border-white/20 px-8 py-4 text-center font-semibold transition duration-300 hover:bg-[#f54d05] hover:text-black sm:w-auto"
    >
      Munkáink megtekintése
    </a>

  
    
  </div>

<p className="
mb-6
px-4
text-sm
leading-7
uppercase
tracking-[0.12em]
text-[#f54d05]
sm:text-base
md:text-sm
md:tracking-[0.35em]
">
    Nyíregyháza körzetében ingyenes helyszíni felmérést biztosítunk, mely során pontosabban átláthatjuk a költöztetést és annak költségeit, illetve részletesebb információt tudunk adni a költöztetés folyamatáról.
  </p>

</motion.div>

          {/* Floating CTA */}
          <a
            href="tel:+36206180015"
            className="fixed bottom-6 right-6 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#f54d05] text-black shadow-2xl shadow-[#f54d05]/20 transition duration-300 hover:scale-110"
            aria-label="Telefonhívás"
          >
            <span className="text-2xl">📞</span>
          </a>

        </section>

        {/* STATS */}
<section className="bg-[#E0E0E0] py-16 md:py-28">
  <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 text-center md:grid-cols-4 md:gap-8 md:px-6">
    {stats.map(([number, label]) => (
      <div
        key={label}
        className="rounded-2xl md:rounded-3xl border border-black/5 bg-gray-300/40 p-5 sm:p-6 md:p-10 backdrop-blur-xl"
      >
        <h2 className="mb-2 md:mb-3 text-2xl sm:text-3xl md:text-5xl font-bold text-[#f54d05] leading-none">
          {number}
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-[#000000] leading-snug">
          {label}
        </p>
      </div>
    ))}
  </div>
</section>

        {/* SERVICES */}
        <section id="services" className="bg-[#E0E0E0] py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#000000]">
                Szolgáltatások
              </p>

              <h2 className="mb-6 text-4xl font-bold md:text-6xl">
                Teljes körű költöztetési megoldások
              </h2>

              <p className="mx-auto max-w-3xl text-lg text-[#000000]">
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
                  className="group rounded-3xl border border-black/5 bg-zinc-950/50 p-6 md:p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#f54d05]/20"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f54d05]/10">
                    <div className="h-8 w-8 rounded-full bg-[#f54d05]" />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold transition group-hover:text-[#f54d05]">
  {service.title}
</h3>

                  <p className="mb-6 leading-relaxed text-[#000000]">
  {service.description}
</p>

                  <Link
  href="/arak"
  className="flex items-center gap-2 font-semibold text-[#000000] hover:text-[#f54d05] transition"
>
  Részletek →
</Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section
  id="reviews"
  className="relative overflow-hidden py-32 bg-[#E0E0E0]"
>
  {/* EDGE FADE LEFT */}
  <div className="
pointer-events-none absolute left-0 top-0 z-10 h-full
w-16 sm:w-24 md:w-40
bg-gradient-to-r from-[#E0E0E0] to-transparent
" />

  {/* EDGE FADE RIGHT */}
  <div className="
pointer-events-none absolute right-0 top-0 z-10 h-full
w-16 sm:w-24 md:w-40
bg-gradient-to-l from-[#E0E0E0] to-transparent
" />

  <div className="mx-auto max-w-7xl px-6 mb-16 text-center">
    <p className="mb-4 text-sm uppercase tracking-[0.35em] text-black/80">
      Google értékelések
    </p>

    <h2 className="text-4xl md:text-6xl font-bold text-black">
      Amit ügyfeleink mondanak
    </h2>

    <p className="mt-5 text-gray-600">
      Valódi visszajelzések valós ügyfelektől
    </p>
  </div>

  {/* MARQUEE WRAPPER */}
  <div className="relative">
    <div
  className="
    flex
    gap-6
    overflow-x-auto
    snap-x
    snap-mandatory
    pb-6

    md:w-max
    md:overflow-visible

    cursor-grab
    active:cursor-grabbing

    [-ms-overflow-style:none]
    [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden

    md:animate-[scroll_45s_linear_infinite]
    md:hover:[animation-play-state:paused]
  "
>
      {duplicated.map((review, index) => (
        <article
          key={index}
          className="
group
relative

w-[88vw]
sm:w-[420px]
md:w-[360px]

snap-center
flex-shrink-0

rounded-[28px]
border
border-black/10
bg-gray-300/40
p-8

backdrop-blur-xl

shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]

transition-all
duration-500
hover:-translate-y-2
"
        >
          {/* subtle glow accent */}
          <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top_left,rgba(245,77,5,0.15),transparent_60%)]" />

          {/* stars */}
          <div className="mb-6 flex gap-1 text-[#f54d05] text-lg">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          {/* review text */}
          <p className="mb-8 text-lg leading-relaxed text-black/90">
            “{review.text}”
          </p>

          {/* footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="
                flex h-12 w-12 items-center justify-center
                rounded-full bg-[#f54d05]
                font-bold text-black
                shadow-md
              ">
                {review.name.charAt(0)}
              </div>

              <div>
                <p className="font-semibold text-black">
                  {review.name}
                </p>
                <p className="text-sm text-gray-600">
                  Google Review
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <img
                src="/images/google-icon.webp"
                className="h-6 w-6 opacity-80"
                alt="Google"
              />
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>

  {/* optional bottom fade for depth */}
  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#E0E0E0] to-transparent" />
</section>

        {/* GALLERY */}
<section
  id="gallery"
  className="relative overflow-hidden bg-[#E0E0E0] py-24"
>
  <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#f54d05]/5 blur-[150px]" />

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    <div className="mb-12 flex items-center justify-between">

      <div>
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#000000]">
          Referenciák
        </p>

        <h2 className="text-4xl font-bold md:text-6xl">
          Munkáink képekben
        </h2>
      </div>

      <Link
        href="/referenciak"
        className="
        hidden md:flex
        rounded-full
        border border-black/10
        px-6 py-3
        transition
        hover:bg-[#f54d05]
        hover:text-black"
      >
        Összes kép →
      </Link>

    </div>

    <div className="relative">

      {/* Bal fade */}
      <div className="
      pointer-events-none
      absolute
      left-0
      top-0
      z-20
      h-full
      w-24
      bg-gradient-to-r
      from-[#E0E0E0]
      to-transparent
      hidden md:block
      " />

      {/* Jobb fade */}
      <div className="
      pointer-events-none
      absolute
      right-0
      top-0
      z-20
      h-full
      w-24
      bg-gradient-to-l
      from-[#E0E0E0]
      to-transparent
      hidden md:block
      " />

      <div
        ref={sliderRef}
        onMouseDown={startDrag}
        className="
flex
gap-5
overflow-x-auto
snap-x
snap-mandatory
pb-6
cursor-grab
active:cursor-grabbing
select-none
[-ms-overflow-style:none]
[scrollbar-width:none]
[&::-webkit-scrollbar]:hidden
"
      >

        {galleryImages.map((image) => (

          <div
            key={image}
            className="
            snap-center
            shrink-0
            relative
            h-[450px]
            w-[85vw]
            sm:w-[420px]
            md:w-[520px]
            overflow-hidden
            rounded-[35px]
            border
            border-black/5
            "
          >

            <Image
              src={`/images/gallery-${image}.webp`}
              alt={`Fuják Trans ${image}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              draggable={false}
              className="
object-cover
transition-all
duration-700
hover:scale-110
hover:-translate-y-2
"
            />

          </div>

        ))}

      </div>

    </div>

    {/* Mobil gomb */}
    <div className="mt-8 flex justify-center md:hidden">

      <Link
        href="/referenciak"
        className="
        rounded-full
        border
        border-black/10
        px-6 py-3
        transition
        hover:bg-[#f54d05]
        hover:text-black"
      >
        Összes kép →
      </Link>

    </div>

  </div>
</section>

        {/* CTA */}
        <section className="bg-[#E0E0E0] py-32">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <div className="rounded-[40px] border border-black/10 bg-gradient-to-br from-[#f54d05] to-[#4A0404] p-14 text-black shadow-2xl">
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
                  className="rounded-full bg-gray-300 px-8 py-4 font-bold text-black transition duration-300 hover:scale-105"
                >
                  Árajánlat kérése
                </a>

                <a
                  href="tel:+36206180015"
                  className="rounded-full border border-black/20 px-8 py-4 font-bold transition duration-300 hover:bg-gray-300 hover:text-black"
                >
                  Hívás most
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-[#E0E0E0] py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#000000]">
                Kapcsolat
              </p>

              <h2 className="mb-8 text-4xl font-bold leading-tight md:text-6xl">
                Beszéljünk a szállításról.
              </h2>

              <div className="space-y-6 text-lg text-black">
                <p>📞 +36 20 618 0015</p>
                <p>✉️ csabafujak@icloud.com</p>
                <p>📍 Nyíregyháza, Pazonyi út 39, 4400</p>
                <p>Nyitvatartásunk: Mindennap 8:00 - 18:00</p>
                <p>Hétvégén és ünnepnapokon is rendelkezésre állunk!</p>
              </div>
            </div>

            <div className="rounded-[40px] border border-black/5 bg-gradient-to-br from-[#f54d05] to-[#4A0404] p-10 backdrop-blur-xl">
  <form onSubmit={handleSubmit} className="space-y-5">

    {/* SZOLGÁLTATÁS VÁLASZTÓ */}
    <select
      value={service}
      onChange={(e) => setService(e.target.value)}
      className="w-full rounded-2xl border border-black/10 bg-gray-300/40 px-5 py-4 outline-none"
    >
      <option value="">Szolgáltatás kiválasztása</option>
      <option>Árufuvarozás</option>
      <option>Költöztetés</option>
      <option>Bútorszállítás</option>
      <option>Lomtalanítás</option>
      <option>Nehézgép szállítása</option>
    </select>

    {/* Név + Email */}
    <div className="grid md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Név"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-2xl border border-black/10 bg-gray-300/40 px-5 py-4 outline-none placeholder:text-gray-700"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-2xl border border-black/10 bg-gray-300/40 px-5 py-4 outline-none placeholder:text-gray-700"
      />
    </div>

    {/* Telefon */}
    <input
      type="tel"
      placeholder="Telefonszám"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      className="w-full rounded-2xl border border-black/10 bg-gray-300/40 px-5 py-4 outline-none placeholder:text-gray-700"
    />

    {/* Honnan-hova */}
    <div className="grid md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Honnan költözne?"
        value={fromLocation}
        onChange={(e) => setFromLocation(e.target.value)}
        className="w-full rounded-2xl border border-black/10 bg-gray-300/40 px-5 py-4 outline-none placeholder:text-gray-700"
      />

      <input
        type="text"
        placeholder="Hova költözne?"
        value={toLocation}
        onChange={(e) => setToLocation(e.target.value)}
        className="w-full rounded-2xl border border-black/10 bg-gray-300/40 px-5 py-4 outline-none placeholder:text-gray-700"
      />
    </div>

    {/* Emeletek */}
    <div className="grid md:grid-cols-2 gap-4">
      <select
        value={fromFloor}
        onChange={(e) => setFromFloor(e.target.value)}
        className="w-full rounded-2xl border border-black/10 bg-gray-300/40 px-5 py-4"
      >
        <option>Kertes ház</option>
        <option>Földszint</option>
        <option>1. emelet</option>
        <option>2. emelet</option>
        <option>3. emelet</option>
        <option>4. emelet</option>
        <option>5. emelet</option>
        <option>6. emelet</option>
        <option>7. emelet</option>
        <option>8. emelet</option>
        <option>9. emelet</option>
        <option>10. emelet</option>
        <option>10+ emelet</option>
      </select>

      <select
        value={toFloor}
        onChange={(e) => setToFloor(e.target.value)}
        className="w-full rounded-2xl border border-black/10 bg-gray-300/40 px-5 py-4"
      >
        <option>Kertes ház</option>
        <option>Földszint</option>
        <option>1. emelet</option>
        <option>2. emelet</option>
        <option>3. emelet</option>
        <option>4. emelet</option>
        <option>5. emelet</option>
        <option>6. emelet</option>
        <option>7. emelet</option>
        <option>8. emelet</option>
        <option>9. emelet</option>
        <option>10. emelet</option>
        <option>10+ emelet</option>
      </select>
    </div>

    {/* Szoba + rakodó */}
    <div className="grid md:grid-cols-2 gap-4">
      <select
        value={rooms}
        onChange={(e) => setRooms(e.target.value)}
        className="w-full rounded-2xl border border-black/10 bg-gray-300/40 px-5 py-4"
      >
        <option>1 szoba</option>
        <option>2 szoba</option>
        <option>3 szoba</option>
        <option>4+ szoba</option>
      </select>

      <select
        value={loaders}
        onChange={(e) => setLoaders(e.target.value)}
        className="w-full rounded-2xl border border-black/10 bg-gray-300/40 px-5 py-4"
      >
        <option>1 rakodó</option>
        <option>2 rakodó</option>
        <option>3 rakodó</option>
        <option>4 rakodó</option>
      </select>
    </div>

    {/* MEGJEGYZÉS 1 */}
    <textarea
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Szállítani kívánt tételek listája, részletek (lakás nagysága, bútorok mennyisége, antik tárgyak, 100 kg súly feletti tárgyak, stb.)"
      rows={4}
      className="w-full rounded-2xl border border-black/10 bg-gray-300/40 px-5 py-4 outline-none placeholder:text-gray-700"
    />

    {/* MEGJEGYZÉS 2 (külön state kellene ide ha akarod) */}
    <textarea
      value={note}
      onChange={(e) => setNote(e.target.value)}
      placeholder="Egyéb megjegyzés, információ, illetve kérdés a fuvarral kapcsolatban."
      rows={4}
      className="w-full rounded-2xl border border-black/10 bg-gray-300/40 px-5 py-4 outline-none placeholder:text-gray-700"
    />

    {/* DÁTUM VÁLASZTÓ */}
<div>
  <label className="block mb-2 text-sm text-black/80">
    Mikorra kéri a szállítást?
  </label>

  <DatePicker date={date} setDate={setDate} />
</div>

    {/* SUBMIT */}
    <button
      type="submit"
      disabled={loading}
      className="w-full rounded-xl bg-gray-300 py-4 font-bold text-black transition hover:scale-[1.02] disabled:opacity-50"
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
          Küldés...
        </span>
      ) : (
        "Ajánlatkérés küldése"
      )}
    </button>

    {status === "success" && (
      <p className="text-green-500">Üzenet sikeresen elküldve!</p>
    )}

    {status === "error" && (
      <p className="text-red-500">Hiba történt, próbáld újra!</p>
    )}

    {/* HONEYPOT */}
    <div className="hidden">
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        autoComplete="off"
        tabIndex={-1}
      />
    </div>
  </form>
</div>
          </div>
        </section>

      
      <div className="fixed bottom-0 left-0 z-[120] flex w-full gap-3 border-t border-black/10 bg-gray-300/80 p-4 backdrop-blur-2xl md:hidden">
  <a
    href="tel:+36206180015"
    className="flex-1 rounded-2xl bg-gradient-to-br from-[#f54d05] to-[#4A0404] px-4 py-4 text-center font-bold text-black"
  >
    📞 Hívás
  </a>

  <a
    href="#contact"
    className="flex-1 rounded-2xl border border-black/10 bg-gray-300/5 px-4 py-4 text-center font-bold text-black"
  >
    Árajánlat
  </a>
</div></main>
    </div>
  );
}