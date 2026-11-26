export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "hol-vallalunk-koltoztetest",
    title: "Hol vállalunk költöztetést?",
    excerpt: "Nyíregyházáról és környékéről indulva országosan, valamint nemzetközi viszonylatban is vállalunk költöztetést.",
    category: "Szolgáltatási területek",
    readTime: "3 perc",
    sections: [
      { heading: "Helyben, országosan és külföldre is", paragraphs: ["A Fuják Trans nyíregyházi központtal vállal költöztetést és szállítást. Gyakran dolgozunk Nyíregyházán és a környező településeken, de előzetes egyeztetés alapján távolabbi belföldi és nemzetközi fuvarokat is vállalunk.", "A feladat részleteit minden esetben előzetesen egyeztetjük: honnan és hová kell költözni, mekkora a szállítandó mennyiség, szükség van-e rakodásra vagy bútorszerelésre, illetve mikorra tervezik a munkát."] },
      { heading: "Gyakran érintett települések", paragraphs: ["A rendszeresen érintett helyszínek közé tartozik többek között:"] , bullets: ["Nyíregyháza és Nyírpazony", "Debrecen és Hajdúnánás", "Kisvárda és Mátészalka", "Nyírtelek és Rakamaz", "Tiszaújváros és Budapest"]},
      { heading: "Hogyan kérhet ajánlatot?", paragraphs: ["A részletes ajánlatkérőben adja meg az indulási és érkezési címet, a tervezett dátumot, valamint a szállítandó tárgyak főbb adatait. Minél pontosabb az információ, annál jobban fel tudjuk mérni a feladatot."] },
    ],
  },
  {
    slug: "torhekeny-targyak-csomagolasa",
    title: "Hogyan csomagolja be a törékeny tárgyakat?",
    excerpt: "Néhány előkészülettel jelentősen megkönnyíthető a törékeny tárgyak biztonságos szállítása.",
    category: "Csomagolás",
    readTime: "4 perc",
    sections: [
      { heading: "Válasszon megfelelő dobozt", paragraphs: ["A törékeny tárgyakhoz stabil, jó állapotú dobozt használjon. A túl nagy dobozban a tárgyak elmozdulhatnak, a túl kicsi pedig nem hagy elég helyet a védőrétegnek."] },
      { heading: "Minden darabot külön védjen", paragraphs: ["A poharakat, tányérokat és dísztárgyakat csomagolópapírral vagy buborékfóliával érdemes külön-külön körbetekerni. A dobozban maradó üres helyeket puha kitöltőanyaggal lehet megszüntetni."] , bullets: ["A nehezebb tárgyakat helyezze a doboz aljára.", "Az üvegeket és poharakat külön-külön tekerje be.", "A doboz alját és tetejét is erősítse meg ragasztószalaggal.", "A doboz oldalán jól láthatóan jelölje a törékeny tartalmat."]},
      { heading: "Kérhet segítséget a csomagoláshoz", paragraphs: ["Ha sok a törékeny tárgy, vagy nincs ideje az előkészületekre, az ajánlatkérőben jelezheti, hogy csomagolást is szeretne kérni. A részleteket és a szükséges anyagokat előre egyeztetjük."] },
    ],
  },
  {
    slug: "miert-erdemes-koltozteto-ceget-valasztani",
    title: "Miért jó, ha költöztető céget bíz meg?",
    excerpt: "A költözés nemcsak szállításból áll: tervezést, rakodást, megfelelő járművet és összehangolt munkát igényel.",
    category: "Költöztetési tippek",
    readTime: "4 perc",
    sections: [
      { heading: "Kevesebb szervezés, átláthatóbb folyamat", paragraphs: ["Egy költözésnél több feladatot kell összehangolni: a tárgyak előkészítését, a rakodást, a szállítást és az új helyen történő elhelyezést. Egy tapasztalt költöztető csapat segíthet abban, hogy ezek a lépések előre egyeztetett rendben történjenek."] },
      { heading: "A megfelelő eszközök és járművek", paragraphs: ["A bútorok és nagyobb tárgyak mozgatásához fontos a megfelelő jármű, a biztonságos rögzítés és a gondos rakodás. Előzetes egyeztetéssel felmérhető, milyen járműre és hány rakodóra lehet szükség."] },
      { heading: "Több feladat egy helyen", paragraphs: ["A szállítás mellett csomagolás, fóliázás, valamint bútorok szét- és összeszerelése is kérhető. Így nem kell minden részfeladathoz külön szolgáltatót keresni."] },
    ],
  },
  {
    slug: "nehez-targyak-szallitasa",
    title: "Nehéz tárgyakat is szállítunk?",
    excerpt: "Nagy tömegű vagy nehezen mozgatható tárgyaknál különösen fontos az előzetes egyeztetés és a pontos felmérés.",
    category: "Speciális szállítás",
    readTime: "3 perc",
    sections: [
      { heading: "Egyedi feladat, előzetes felmérés", paragraphs: ["Nehéz tárgyak szállítása esetén fontos tudnunk a tárgy hozzávetőleges súlyát, méreteit, a hozzáférés körülményeit és azt, hogy az épületen belül milyen útvonalon mozgatható."] },
      { heading: "Milyen adatokat érdemes megadni?", paragraphs: ["Az ajánlatkérésben írja le a tárgy típusát, méretét és becsült súlyát, továbbá adja meg a felvételi és célcímet. Külön jelezze, ha lépcső, szűk folyosó vagy lift nélküli épület nehezíti a mozgatást."] , bullets: ["A tárgy megnevezése és hozzávetőleges súlya", "A tárgy méretei", "Emelet és lift megléte mindkét címen", "A felvételi és célállomás megközelíthetősége"]},
      { heading: "Egyeztessünk a részletekről", paragraphs: ["A nehéz tárgyak szállításának lehetősége a konkrét feladattól függ. A megadott információk alapján egyeztetjük a szükséges feltételeket és a vállalható megoldást."] },
    ],
  },
  {
    slug: "csomagolas-menete-koltozes-elott",
    title: "A csomagolás menete költözés előtt",
    excerpt: "Átláthatóbb lesz a költözés, ha a csomagolást előre megtervezi és rendszerezetten halad.",
    category: "Csomagolás",
    readTime: "4 perc",
    sections: [
      { heading: "Kezdje a ritkábban használt tárgyakkal", paragraphs: ["A költözés előtt érdemes először a szezonális, ritkán használt holmikat elcsomagolni. A mindennap szükséges tárgyakat hagyja a végére, így a költözés előtti napokban is kényelmesen használhatja őket."] },
      { heading: "Csoportosítsa és jelölje a dobozokat", paragraphs: ["A dobozokat helyiségenként vagy funkció szerint csoportosítsa. A jól olvasható címke segít abban, hogy az új helyen a megfelelő helyiségbe kerüljenek."] , bullets: ["Ne pakolja túl a dobozokat.", "A nehéz tárgyakat kisebb dobozba tegye.", "A törékeny tartalmat jól láthatóan jelölje.", "A csavarokat és kisebb alkatrészeket feliratozott tasakban tartsa."]},
      { heading: "Csomagolás és bútorszerelés egy helyen", paragraphs: ["Ha szeretné, a költöztetés mellé csomagolást, fóliázást, illetve a bútorok szétszerelését és összeszerelését is kérheti. Ezt a részletes ajánlatkérőben külön bejelölheti, így előre tudunk egyeztetni a feladatról."] },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
