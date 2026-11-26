export const stats = [
  { value: "500+", label: "Sikeres költöztetés" },
  { value: "4.9★", label: "Google-értékelés" },
  { value: "10+", label: "Év tapasztalat"},
  { value: "100%", label: "Biztonságos szállítás" },
] as const;

export const services = [
  {
    number: "01", slug: "koltoztetes", title: "Költöztetés",
    description: "Lakások, családi házak, irodák és üzlethelyiségek költöztetése, akár néhány bútorról, akár egy teljes ingatlanról van szó.",
    detail: "Lakások, családi házak és irodák költöztetése belföldön és külföldön.",
  },
  {
    number: "02", slug: "fuvarozas-aruszallitas", title: "Fuvarozás és áruszállítás",
    description: "Bútorok, berendezések és különféle áruk szállítása magánszemélyek és vállalkozások részére.",
    detail: "Egyedi fuvarozás és áruszállítás belföldön, egyeztetés alapján nemzetközi viszonylatban is.",
  },
  {
    number: "03", slug: "lomtalanitas-lakaskiurites", title: "Lomtalanítás és lakáskiürítés",
    description: "Lakások, családi házak, helyiségek és tárolók teljes vagy részleges kiürítése, a feleslegessé vált tárgyak elszállítása.",
    detail: "Lomtalanítás és ingatlankiürítés előzetes egyeztetés alapján.",
  },
  {
    number: "04", slug: "butor-szet-es-osszeszereles", title: "Bútorok szét- és összeszerelése",
    description: "Szekrények, ágyak, asztalok és egyéb bútorok bontása, szállításra előkészítése és összeszerelése.",
    detail: "Bútorok szerelése a szállításhoz kapcsolódóan vagy előzetes egyeztetéssel.",
  },
  {
    number: "05", slug: "hazhozszallitas-uzletekbol", title: "Házhozszállítás üzletekből",
    description: "Üzletekben vásárolt bútorok, háztartási gépek és nagyméretű termékek átvétele és házhoz szállítása.",
    detail: "Üzletben vásárolt bútorok és nagyobb termékek házhozszállítása.",
  },
  {
    number: "06", slug: "sos-szallitas", title: "SOS szállítás",
    description: "Sürgős bútor-, áru- és fuvarfeladatok vállalása a szabad kapacitás előzetes egyeztetésével.",
    detail: "Sürgős szállítási igények egyedi egyeztetéssel.",
  },
  {
    number: "07", slug: "tehertaxi", title: "Tehertaxi",
    description: "Néhány bútor, háztartási gép vagy nagyobb tárgy elszállítása a feladat méretéhez igazítva.",
    detail: "Rugalmas megoldás egy-egy nagyobb tárgy elszállításához.",
  },
  {
    number: "08", slug: "teherauto-berles-soforrel", title: "Teherautó-bérlés sofőrrel",
    description: "Teherautó sofőrrel kisebb költöztetéshez, bútorszállításhoz, házhozszállításhoz vagy építőanyag mozgatásához.",
    detail: "Teherautó sofőrrel, előzetesen egyeztetett rakodási igényekkel.",
  },
  {
    number: "09", slug: "nehez-specialis-targyak-szallitasa", title: "Nehéz és speciális tárgyak szállítása",
    description: "Nagy tömegű, különleges méretű vagy érzékeny tárgyak mozgatása és szállítása egyedi felméréssel.",
    detail: "Egyedi felmérést igénylő, nehéz tárgyak mozgatása és szállítása.",
  },
  {
    number: "10", slug: "raklapos-aruszallitas", title: "Raklapos áruszállítás",
    description: "Raklapos áruk mozgatása és szállítása, a rakomány biztonságos rögzítésére és kezelésére figyelve.",
    detail: "Raklapos áruk szállítása belföldön, előzetes egyeztetéssel.",
  },
  {
    number: "11", slug: "irodai-butorok-szallitasa", title: "Irodai bútorok szállítása",
    description: "Irodai berendezések, bútorok és munkaállomások költöztetése az előzetesen egyeztetett feladatok szerint.",
    detail: "Irodák bútorainak és berendezéseinek szállítása.",
  },
  {
    number: "12", slug: "csomagolas-foliazas", title: "Csomagolás",
    description: "Bútorok és egyéb tárgyak csomagolása, fóliázása és szállításra történő előkészítése.",
    detail: "Bútorok és áruk csomagolása, fóliázása a költöztetés részeként.",
  },
  {
    number: "13", slug: "nemzetkozi-koltoztetes-fuvarozas", title: "Nemzetközi költöztetés és fuvarozás",
    description: "Magyarország és külföldi célállomások közötti költöztetés és ingóságszállítás, útvonal- és időpont-egyeztetéssel.",
    detail: "Nemzetközi költöztetés és fuvarozás egyedi ajánlat alapján.",
  },
] as const;

export const advantages = [
  {
    number: "01",
    title: "Korrekt árak, rejtett költségek nélkül",
    description:
      "Nálunk fontos az átláthatóság. Előre egyeztetjük a várható költségeket, így Ön pontosan tudhatja, mire számíthat.",
  },
  {
    number: "02",
    title: "Gondos rakodás, biztonságos szállítás",
    description:
      "Bútorait és értékeit úgy kezeljük, ahogyan azt mi is elvárnánk a sajátjaink esetében. Munkánk során kiemelt figyelmet fordítunk a gondos rakodásra és a biztonságos szállításra.",
  },
  {
    number: "03",
    title: "Gyors és összehangolt munkavégzés",
    description:
      "Tapasztalt csapatunkkal arra törekszünk, hogy minden feladatot hatékonyan, szervezetten és felesleges időveszteség nélkül végezzünk el.",
  },
  {
    number: "04",
    title: "Pontosság és megbízhatóság",
    description:
      "Tudjuk, hogy az Ön ideje is értékes. Ezért fontos számunkra a pontos egyeztetés, a megbeszélt időpontok betartása és a folyamatos kapcsolattartás.",
  },
  {
    number: "05",
    title: "Komplett szolgáltatás egy helyen",
    description:
      "A szállítás mellett rakodást, csomagolást, fóliázást, valamint bútorok szét- és összeszerelését is vállaljuk. Így nem kell több különböző szolgáltatót keresnie.",
  },
  {
    number: "06",
    title: "Megbízható, karbantartott járművek",
    description:
      "Járműveinket rendszeresen karbantartjuk, hogy a szállítás a lehető leggördülékenyebben történjen, akár rövidebb, akár hosszabb távolságra kell eljuttatnunk a rakományt.",
  },
  {
    number: "07",
    title: "Rugalmas megoldások, az Ön igényeire szabva",
    description:
      "Minden megbízás más, ezért mindig az adott feladathoz igazítjuk szolgáltatásainkat. Ön elmondja, mire van szüksége, mi pedig segítünk megtalálni a megfelelő megoldást.",
  },
  {
    number: "08",
    title: "Belföldi és nemzetközi fuvarozás",
    description:
      "Nyíregyházán és környékén, országosan, valamint nemzetközi viszonylatban is vállalunk szállításokat. Önnek csak a célt kell meghatároznia, a többi részletet pedig egyeztetjük.",
  },
] as const;

export const reviews = [
  {
    name: "Sztanyi Agnes",
    text: "Teljes mértékben elégedett voltam a fiúkkal. A 4. emeletről kellett átköltöznünk egy családi házba, és minden pontosan a megbeszéltek szerint zajlott. Időben érkeztek, precízen dolgoztak, és az egész költözés sérülésmentesen, gördülékenyen ment végbe. Biztos vagyok benne, hogy bátran ajánlani fogom őket másoknak is, valóban le a kalappal a munkájuk előtt!",
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
  },
  {
    name: "Beáta Kőpájer",
    text: "Nagyon korrekt cég. Az árajánlatkérés gyorsan és zökkenőmentesen ment, és nagyon hamar válaszoltak is rá. Az árak is rendkívül korrektek. Köszönöm még egyszer a költöztetést, legközelebb is csak veletek fogunk költözni! 😉🏡🚛",
  },
  {
    name: "Gabriella Szász",
    text: "Nagyon felkészültek, és mindig megállás nélkül dolgoznak. Az árak teljesen barátságosak, és aki nem akar megszakadni, valamint fontos számára, hogy semmi ne sérüljön meg, annak csak őket ajánlom!",
  },
  {
    name: "Máté Farkas",
    text: "A legnagyobb tiszteletem a cég felé a legkorrektebb csapat, akikkel valaha dolgom volt! Sajnos az eredetileg megrendelt költöztetők az indulás előtt 2 órával lemondták, de Csabáék még munka közben is találtak megoldást küldtek egy másik autót a Sopron-Debrecen költöztetésre. Még egyszer hatalmas köszönet, srácok óriási pacsi!",
  },
  {
    name: "Szilvia Oláh",
    text: "A költöztető cég srácai mindenben nagyon készségesek voltak. Nemcsak a költözésben, hanem a bútor szerelésben is profin segítettek. Gyorsak, megbízhatóak, kedvesek, máskor is őket választanám, ha költözésről lenne szó. Szívből ajánlom mindenkinek, köszönöm a segítségüket. 🤗",
  },
  {
    name: "Noel Tóth",
    text: "A Fújak Trans csapata profi és nagyon segítőkész volt a költözés során. Minden bútort és csomagot gondosan kezeltek, időben érkeztek, és a kommunikáció is gördülékeny volt. Nagyon elégedett vagyok a szolgáltatásukkal, nyugodt szívvel ajánlom mindenkinek, aki stresszmentes költözést szeretne.🥇😁",
  },
  {
    name: "Szabina Vámosi",
    text: "Nagyon szépen köszönjük a költöztetést a Fuják Trans csapatának! Másnapra öt embert is biztosítottak a raktárunk átpakolásához, és a srácok hajnaltól hajnalig, megállás nélkül dolgoztak. Emberfeletti teljesítményt nyújtottak hatalmas köszönet nektek! 🥰",
  },
] as const;

export const fleet = [
  {
    type: "Teherautó",
    capacity: "20 m³ raktér",
    length: "4,5 m",
    width: "2,2 m",
    height: "2,2 m",
    description: "A flottánk 4,5 méter hosszúságú teherautója.",
  },
  {
    type: "Teherautó",
    capacity: "",
    length: "4,2 m",
    width: "2,2 m",
    height: "2,2 m",
    description: "4,2 méter hosszúságú teherautó, a többi járművel azonos szélességgel és magassággal.",
  },
  {
    type: "Teherautó",
    capacity: "",
    length: "4,2 m",
    width: "2,2 m",
    height: "2,2 m",
    description: "4,2 méter hosszúságú teherautó, a többi járművel azonos szélességgel és magassággal.",
  },
] as const;

export const serviceAreas = [
  "Nyíregyháza",
  "Debrecen",
  "Kisvárda",
  "Mátészalka",
  "Hajdúnánás",
  "Nyírtelek",
  "Rakamaz",
  "Tiszaújváros",
  "Budapest",
  "Nyírpazony",
] as const;

export const footerServiceLinks = [
  { label: "Költöztetés", slug: "koltoztetes" },
  { label: "Lomtalanítás és lakáskiürítés", slug: "lomtalanitas-lakaskiurites" },
  { label: "Házhozszállítás üzletekből", slug: "hazhozszallitas-uzletekbol" },
  { label: "Bútorok szét- és összeszerelése", slug: "butor-szet-es-osszeszereles" },
  { label: "SOS szállítás", slug: "sos-szallitas" },
  { label: "Fuvarozás és áruszállítás", slug: "fuvarozas-aruszallitas" },
  { label: "Tehertaxi", slug: "tehertaxi" },
  { label: "Csomagolás és fóliázás", slug: "csomagolas-foliazas" },
  { label: "Nemzetközi költöztetés", slug: "nemzetkozi-koltoztetes-fuvarozas" },
  { label: "Nehéz és speciális tárgyak", slug: "nehez-specialis-targyak-szallitasa" },
  { label: "Teherautó-bérlés sofőrrel", slug: "teherauto-berles-soforrel" },
  { label: "Raklapos áruszállítás", slug: "raklapos-aruszallitas" },
  { label: "Irodai bútorok szállítása", slug: "irodai-butorok-szallitasa" },
] as const;
