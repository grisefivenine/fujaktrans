"use client";


function InstantCTA() {
  return (
    <div className="
    rounded-[40px]
    bg-gradient-to-br
    from-[#f54d05]
    to-[#4A0404]
    p-12
    shadow-2xl
    ">

      <h2 className="mb-5 text-4xl font-bold">
        Tudja már melyik autóra van szüksége?
      </h2>

      <p className="mb-8 text-black/80">
        Kérjen ajánlatot és rövid időn belül felvesszük Önnel a kapcsolatot.
      </p>

      <a
        href="/#contact"
        className="
        inline-block
        rounded-full
        bg-[#FFFFFF]
        px-8
        py-4
        font-bold
        text-black
        transition
        hover:scale-105
        "
      >
        Ajánlatkérés →
      </a>

    </div>
  );
}
export default function InfoPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-black">

      {/* HERO HEADER */}
      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-black/70">
            Információk
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold">
            Minden amit a szállításról tudni érdemes
          </h1>

          <p className="mt-6 text-lg text-black/70">
            Átlátható járműpark, pontos méretek és kapacitások.
          </p>

        </div>
      </section>

      {/* TRUCK SPECS */}
      <section className="pb-32">
        <div className="mx-auto max-w-6xl px-6 grid gap-8">

          {/* TITLE */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Járműveink méretei
            </h2>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* 1 */}
            <div className="rounded-[30px] border border-black/5 bg-[#FFFFFF]/40 backdrop-blur-xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-[#f54d05]">
                Dobozos autó (3,5 t)
              </h3>

              <p className="text-black/80 leading-7">
                <span className="font-semibold">Platóméret:</span><br />
                3,6 × 2,0 × 1,9 m
              </p>

              <p className="mt-4 text-black/80">
                <span className="font-semibold">Légtér:</span> ≈ 14 m³
              </p>
            </div>

            {/* 2 */}
            <div className="rounded-[30px] border border-black/5 bg-[#FFFFFF]/40 backdrop-blur-xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-[#f54d05]">
                Ponyvás autó (3,5 t)
              </h3>

              <p className="text-black/80 leading-7">
                <span className="font-semibold">Platóméret:</span><br />
                4,3 × 2,1 × 2,2 m
              </p>

              <p className="mt-4 text-black/80">
                <span className="font-semibold">Légtér:</span> ≈ 20 m³
              </p>
            </div>

            {/* 3 */}
            <div className="rounded-[30px] border border-black/5 bg-[#FFFFFF]/40 backdrop-blur-xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-[#f54d05]">
                Zárt dobozos autó (3,5 t)
              </h3>

              <p className="text-black/80 leading-7">
                <span className="font-semibold">Platóméret:</span><br />
                4,3 × 2,1 × 2,1 m
              </p>

              <p className="mt-4 text-black/80">
                <span className="font-semibold">Légtér:</span> ≈ 19 m³
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* INFO SECTION */}
      <section className="pb-32">
        <div className="mx-auto max-w-5xl px-6">

          <div className="rounded-[40px] border border-black/5 bg-[#FFFFFF]/40 backdrop-blur-xl p-10 shadow-2xl">

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Flottánk és kapacitás
            </h2>

            <p className="text-lg leading-8 text-black/80">
              Összesen <span className="font-bold text-[#f54d05]">3 gépjárművel</span> rendelkezünk,
              de igény esetén további járművek is biztosíthatók.
              <br /><br />
              Minden autó modern, rendszeresen karbantartott és költöztetésre optimalizált,
              így garantáljuk a biztonságos és gyors szállítást.
            </p>

          </div>

        </div>
      </section>

      

      <section className="py-24 bg-[#FFFFFF]">
  <div className="mx-auto max-w-6xl px-6 space-y-10">

{/* DETAILS SECTION */}
<section className="pb-32">
  <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">

    {/* LEFT */}
    <div className="rounded-[40px] border border-black/5 bg-white/60 p-10 shadow-2xl backdrop-blur-xl">

      <h2 className="mb-6 text-3xl font-bold md:text-4xl">
        Mivel foglalkozunk?
      </h2>

      <p className="leading-8 text-black/75">
        Cégünk megbízható és gyors szállítási szolgáltatásokat nyújt magánszemélyek és vállalkozások számára országszerte.
      </p>

      <p className="mt-6 leading-8 text-black/75">
        Vállaljuk új és használt bútorok, háztartási nagygépek, csomagok és áruk szállítását, valamint bútorok szakszerű összeszerelését, teljes körű költöztetést lakások, családi házak és irodák számára, továbbá lomtalanítást és feleslegessé vált tárgyak elszállítását is.
      </p>

      <p className="mt-6 leading-8 text-black/75">
      Munkánkat minden esetben pontosan, körültekintően és ügyfeleink igényeihez igazodva végezzük. Legyen szó egyetlen bútor vagy háztartási gép szállításáról, komplett költöztetésről vagy nagyobb mennyiségű áru fuvarozásáról, számíthat ránk.
      </p>

      <p className="mt-6 leading-8 text-black/75">
      Az ország bármely pontján rendelkezésre állunk, és arra törekszünk, hogy minden megbízást gyorsan, biztonságosan és korrekt áron teljesítsünk.
      </p>

      <p className="mt-6 leading-8 font-bold text-black/75">
      Válasszon minket, ha fontos Önnek a megbízhatóság, a pontosság és a gondos munkavégzés!
      </p>

      <h3 className="mt-12 mb-5 text-2xl font-bold">
        Időpontfoglalás - Hogyan működik?
      </h3>

      <p className="mt-6 leading-8 text-black/75">
        <span className="font-semibold text-[#f54d05]">Javasoljuk, hogy legalább 2-3 nappal korábban foglaljon időpontot</span>
      , így biztosabban tudjuk teljesíteni kérését.
      </p>

      <p className="leading-8 text-black/75">
        Ha sürgős a szállítás, vegye fel velünk a kapcsolatot telefonon vagy e-mailben – szabad kapacitás esetén aznapi kiszállítást és aznapi árufuvarozást is vállalunk.
      </p>

      <h3 className="mt-12 mb-5 text-2xl font-bold">
        Ingyenes helyszíni felmérés
      </h3>

      <p className="mt-6 leading-8 text-black/75">
      Igény esetén ingyenes helyszíni felmérést is biztosítunk. Ehhez előzetes telefonos egyeztetés szükséges, hogy felmérhessük a költöztetés részleteit, és pontos, átlátható árajánlatot készíthessünk.
      </p>

      <a
        href="tel:+36206180015"
        className="
          mt-10 inline-flex items-center gap-3
          rounded-full bg-[#f54d05]
          px-7 py-4 font-bold text-white
          shadow-[0_8px_28px_rgba(245,77,5,0.3)]
          transition duration-300
          hover:scale-105
        "
      >
        📞 +36 20 618 0015
      </a>
    </div>

    {/* RIGHT */}
    <div className="rounded-[40px] border border-black/5 bg-white/60 p-10 shadow-2xl backdrop-blur-xl">

      <h2 className="mb-8 text-3xl font-bold md:text-4xl">
        Miért minket válasszon?
      </h2>

      <div className="space-y-5">

        {[
          "Kedvező áron, rejtett költségek nélkül dolgozunk.",
          "Megbízható, minőségi szolgáltatást nyújtunk több éves tapasztalattal.",
          "Gyorsan és hatékonyan szervezzük a napi fuvarokat.",
          "Pontos kiszállításokat biztosítunk a megbeszélt időpontban.",
          "Bútor-összeszerelésben is profi csapat segíti munkánkat.",
          "Modern, rendszeresen karbantartott járműparkkal dolgozunk.",
          "Minden fuvar biztosítva van partnereinken keresztül.",
          "Diszpécsereink segítenek a legjobb megoldás kiválasztásában.",
        ].map((item) => (
          <div
            key={item}
            className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white/70 p-4"
          >
            <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f54d05] text-sm font-bold text-white">
              ✓
            </div>

            <p className="leading-7 text-black/75">
              {item}
            </p>
          </div>
        ))}

      </div>
    </div>

  </div>
</section>

    <InstantCTA />

  </div>
</section>

    </div>
  );
}