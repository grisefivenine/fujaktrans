function InstantCTA() {
  return (
    <div className="rounded-[40px] border border-black/5 bg-gradient-to-br from-[#f54d05] to-[#4A0404] p-12 text-black shadow-2xl">

      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Tudja már melyik autóra van szüksége?
      </h2>

      <p className="text-black/80 mb-8 max-w-xl">
        Kérjen azonnali ajánlatot, és 15 percen belül visszajelzünk.
      </p>

      <a
        href="#contact"
        className="inline-block rounded-full bg-[#FFFFFF] px-8 py-4 font-bold text-black hover:scale-105 transition"
      >
        Ajánlatkérés indítása →
      </a>

    </div>
  );
}