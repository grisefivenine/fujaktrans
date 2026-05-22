export default function Adatkezeles() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-32 text-black">
      <h1 className="mb-10 text-4xl font-bold">
        Adatkezelési tájékoztató
      </h1>

      <div className="space-y-8 text-black/80">

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            1. Az adatkezelő adatai
          </h2>

          <p>
            Név: Fuják Trans
          </p>

          <p>
            Email: csabafujak@icloud.com
          </p>

          <p>
            Telefonszám: +36 20 618 0015
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            2. Milyen adatokat kezelünk?
          </h2>

          <ul className="list-disc pl-6">
            <li>Név</li>
            <li>Email cím</li>
            <li>Telefonszám</li>
            <li>Ajánlatkérés során megadott üzenet</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            3. Az adatkezelés célja
          </h2>

          <p>
            Az ajánlatkérések feldolgozása, kapcsolattartás
            és szolgáltatás nyújtása.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            4. Adatmegőrzés
          </h2>

          <p>
            A megadott adatokat kizárólag a szükséges
            ideig tároljuk.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            5. Felhasználói jogok
          </h2>

          <p>
            Ön jogosult hozzáférni, módosítani,
            törölni vagy korlátozni személyes
            adatainak kezelését.
          </p>
        </section>

      </div>
    </div>
  );
}