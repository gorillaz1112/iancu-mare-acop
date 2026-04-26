export const siteConfig = {
  brand: "Acoperiș Plus",
  phone: "0731527577",
  phoneHref: "tel:+40731527577",
  phoneDisplay: "0731 527 577",
  whatsappHref:
    "https://wa.me/40731527577?text=" +
    encodeURIComponent("Bună ziua, aș dori un deviz pentru acoperiș."),
  whatsappDisplay: "WhatsApp",
  email: "contact@acoperis-plus.ro",
  tagline: "Acoperișuri executate impecabil. Garantat.",
  url: "https://www.acoperis-plus.ro",
  areas: [
    {
      slug: "bucuresti-ilfov",
      name: "București și Ilfov",
      short: "București · Ilfov",
      description:
        "Echipe dedicate pentru București și toate localitățile din Ilfov. Deplasare rapidă, intervenție în maxim 24h.",
      longDescription:
        "Acoperim întreg Bucureștiul și toate localitățile din județul Ilfov cu echipe locale care ajung rapid la tine. Pentru urgențe intervenim în aceeași zi.",
      cities: ["Voluntari", "Otopeni", "Bragadiru", "Popești-Leordeni", "Chiajna", "Pipera"],
    },
    {
      slug: "giurgiu",
      name: "Giurgiu",
      short: "Giurgiu",
      description:
        "Servicii complete de acoperișuri în Giurgiu și împrejurimi. Materiale de top, montaj profesionist.",
      longDescription:
        "Lucrări complete de acoperișuri în județul Giurgiu. Pregătim, livrăm și montăm cu aceleași standarde ca în București.",
      cities: ["Giurgiu oraș", "Bolintin-Vale", "Mihăilești", "Comana", "Călugăreni"],
    },
    {
      slug: "constanta",
      name: "Constanța",
      short: "Constanța",
      description:
        "Acoperișuri rezistente la vânt puternic și aer salin. Soluții special adaptate pentru litoral.",
      longDescription:
        "La malul mării acoperișul se confruntă cu vânt puternic și coroziune. Folosim materiale rezistente la aer salin și prinderi dimensionate corect pentru rafale.",
      cities: ["Constanța oraș", "Mamaia", "Năvodari", "Mangalia", "Eforie", "Medgidia"],
    },
    {
      slug: "calarasi",
      name: "Călărași",
      short: "Călărași",
      description:
        "Montaj, reparații și înlocuire acoperiș în județul Călărași. Prețuri corecte, execuție impecabilă.",
      longDescription:
        "Deservim întreg județul Călărași cu echipe calificate. Oferim aceleași prețuri corecte și aceeași calitate ca în capitală.",
      cities: ["Călărași oraș", "Oltenița", "Budești", "Lehliu-Gară", "Fundulea"],
    },
  ],
  services: [
    {
      slug: "montaj-acoperisuri",
      title: "Montaj acoperișuri",
      shortTitle: "Montaj",
      description: "Acoperișuri noi executate la cheie, cu materiale premium și garanție extinsă.",
      icon: "Home",
      h1: "Montaj acoperișuri la cheie — execuție premium",
      intro:
        "Construim acoperișuri noi, de la șarpantă la ultimul element de finisaj, cu echipe proprii și materiale certificate. Lucrăm curat, respectăm termenul agreat și îți predăm un acoperiș făcut să reziste decenii.",
      benefits: [
        "Proiect tehnic și deviz detaliat, fără costuri ascunse",
        "Materiale premium: Wienerberger, Tondach, Bramac, Lindab",
        "Garanție scrisă până la 20 de ani pe materiale + manoperă",
        "Echipe proprii, nu intermediari — calitate consistentă",
      ],
      steps: [
        { title: "Vizită tehnică", desc: "Măsurători, analiza șarpantei și consiliere pe materiale." },
        { title: "Deviz detaliat", desc: "Ofertă transparentă cu costuri clare pe fiecare etapă." },
        { title: "Execuție curată", desc: "Montaj în etape, cu protecție pentru casă și curte." },
        { title: "Recepție", desc: "Predare împreună, curățare completă și certificat de garanție." },
      ],
    },
    {
      slug: "reparatii-acoperisuri",
      title: "Reparații acoperișuri",
      shortTitle: "Reparații",
      description: "Remediem infiltrații, țigle sparte, tablă desprinsă și probleme de șarpantă.",
      icon: "Wrench",
      h1: "Reparații acoperișuri rapide și definitive",
      intro:
        "Diagnosticăm cauza reală a problemei și o remediem corect, nu doar la suprafață. De la infiltrații punctuale la lucrări complexe de recondiționare, rezolvăm totul cu materiale compatibile cu acoperișul existent.",
      benefits: [
        "Diagnostic precis — identificăm cauza, nu doar simptomul",
        "Intervenție rapidă, chiar în aceeași zi pentru urgențe",
        "Materiale compatibile cu acoperișul tău existent",
        "Garanție pe reparație și raport scris cu ce am făcut",
      ],
      steps: [
        { title: "Inspecție", desc: "Verificăm atent acoperișul și podul pentru a găsi sursa problemei." },
        { title: "Plan de reparație", desc: "Îți explicăm exact ce trebuie făcut și cât costă." },
        { title: "Intervenție", desc: "Remediem cu atenție, fără să afectăm zonele sănătoase." },
        { title: "Test final", desc: "Verificare etanșeitate și raport foto al lucrării." },
      ],
    },
    {
      slug: "inlocuire-acoperis",
      title: "Înlocuire acoperiș",
      shortTitle: "Înlocuire",
      description: "Demontare, evacuare și montaj acoperiș nou, rapid și fără stres.",
      icon: "Repeat",
      h1: "Înlocuire acoperiș complet — curat și la timp",
      intro:
        "Demontăm vechiul acoperiș, evacuăm molozul și montăm unul nou, modern și eficient energetic. Lucrăm etapizat pentru a-ți proteja casa pe toată durata lucrării.",
      benefits: [
        "Demontare controlată și evacuare inclusă în ofertă",
        "Protecție completă a interiorului casei pe durata lucrării",
        "Upgrade la materiale moderne și termoizolație eficientă",
        "Execuție în etape pentru a locui în casă pe durata lucrării",
      ],
      steps: [
        { title: "Planificare", desc: "Stabilim împreună materialele, etapele și calendarul." },
        { title: "Demontare", desc: "Îndepărtăm vechiul acoperiș și verificăm șarpanta." },
        { title: "Montaj nou", desc: "Izolație, folie, șipci și elementul final la tine acasă." },
        { title: "Finisaje", desc: "Jgheaburi, burlane, bordaje — totul perfect integrat." },
      ],
    },
    {
      slug: "hidroizolatii",
      title: "Hidroizolații",
      shortTitle: "Hidroizolații",
      description: "Hidroizolații profesionale pentru terase, balcoane și acoperișuri tip terasă.",
      icon: "Droplets",
      h1: "Hidroizolații profesionale — etanșare garantată",
      intro:
        "Aplicăm sisteme de hidroizolație certificate pentru terase, balcoane, acoperișuri tip terasă și fundații. Pregătim corect suportul și aplicăm straturile conform specificațiilor producătorului, cu test de etanșeitate la final.",
      benefits: [
        "Sisteme membrană bituminoasă sau PVC, în funcție de proiect",
        "Pregătire atentă a suportului — fără surprize pe termen lung",
        "Test de etanșeitate înainte de recepție",
        "Garanție scrisă pe lucrare",
      ],
      steps: [
        { title: "Evaluare suport", desc: "Verificăm starea terasei și planul de scurgere." },
        { title: "Pregătire", desc: "Curățare, reparații locale și amorsaj." },
        { title: "Aplicare membrană", desc: "Straturi aplicate conform specificațiilor producătorului." },
        { title: "Test etanșeitate", desc: "Test cu apă și predare cu garanție scrisă." },
      ],
    },
    {
      slug: "termoizolatii",
      title: "Termoizolații",
      shortTitle: "Termoizolații",
      description: "Termoizolații eficiente care reduc factura la energie și protejează casa.",
      icon: "Thermometer",
      h1: "Termoizolații pentru acoperiș și mansardă",
      intro:
        "Termoizolăm corect acoperișul și mansarda cu vată bazaltică, vată de sticlă sau spumă poliuretanică. Asigurăm bariere de vapori corect montate și ventilație adecvată pentru un confort ridicat și facturi reduse.",
      benefits: [
        "Economie reală la încălzire, până la 30% pe factură",
        "Confort termic atât vara, cât și iarna",
        "Bariere de vapori montate corect — fără condens",
        "Materiale certificate, cu declarații de performanță",
      ],
      steps: [
        { title: "Audit termic", desc: "Stabilim grosimea și tipul de izolație necesare." },
        { title: "Bariere și structură", desc: "Montăm membrane și structura metalică sau din lemn." },
        { title: "Izolație", desc: "Aplicăm materialul ales, fără punți termice." },
        { title: "Finisare", desc: "Pregătim suportul pentru placare (gips carton, lambriu etc.)." },
      ],
    },
    {
      slug: "schimbare-tigla",
      title: "Schimbare țiglă",
      shortTitle: "Schimbare țiglă",
      description: "Înlocuim țigla ceramică, din beton sau metalică cu materiale noi, garantate.",
      icon: "Grid3x3",
      h1: "Schimbare țiglă — ceramică, beton sau metalică",
      intro:
        "Înlocuim țigla veche cu materiale noi, atent alese pentru casa ta. Păstrăm sau înlocuim șipcile și folia în funcție de starea lor, astfel încât rezultatul să reziste zeci de ani.",
      benefits: [
        "Recomandare obiectivă între ceramică, beton sau metalică",
        "Verificăm șipcile și folia înainte de montaj",
        "Montaj conform indicațiilor producătorului",
        "Curățenie completă după lucrare",
      ],
      steps: [
        { title: "Demontare controlată", desc: "Scoatem țigla veche fără să afectăm șarpanta." },
        { title: "Verificare substrat", desc: "Schimbăm folia și șipcile unde e nevoie." },
        { title: "Montaj țiglă nouă", desc: "Prindere corectă, cu clipsuri și cuie zincate." },
        { title: "Detalii", desc: "Coamă, doline și racorduri perfect etanșe." },
      ],
    },
    {
      slug: "tabla",
      title: "Montaj tablă",
      shortTitle: "Tablă",
      description: "Tablă tip țiglă, lindab sau prefaltz montată profesional, cu prindere corectă.",
      icon: "Layers",
      h1: "Montaj tablă tip țiglă, Lindab și prefaltz",
      intro:
        "Montăm tablă prevopsită de la producători consacrați — Lindab, Ruukki, Bilka — cu atenție la prinderi, suprapuneri și detalii. Folosim șuruburi cu garnitură EPDM și accesorii originale pentru un acoperiș etanș, complet.",
      benefits: [
        "Tablă premium, cu strat de protecție garantat 30-50 ani",
        "Prinderi corecte — fără pete de rugină peste ani",
        "Accesorii originale: coame, doline, bordaje",
        "Montaj rapid — ideal pentru suprafețe mari",
      ],
      steps: [
        { title: "Verificare șarpantă", desc: "Asigurăm suportul perfect plan și stabil." },
        { title: "Folie și șipci", desc: "Montăm folie anticondens și șipci calibrate." },
        { title: "Montaj tablă", desc: "Fixare cu șuruburi cu garnitură EPDM." },
        { title: "Finisaje", desc: "Doline, coame, bordaje și jgheaburi." },
      ],
    },
    {
      slug: "tabla-cutata",
      title: "Tablă cutată",
      shortTitle: "Tablă cutată",
      description: "Soluții rapide și economice pentru hale, anexe și acoperișuri industriale.",
      icon: "Zap",
      h1: "Tablă cutată pentru hale, anexe și construcții",
      intro:
        "Tablă cutată zincată sau prevopsită, soluția ideală pentru hale industriale, magazii și acoperișuri cu deschideri mari. Montăm rapid, cu prinderi calculate pentru încărcări din vânt și zăpadă.",
      benefits: [
        "Preț corect pentru suprafețe mari",
        "Montaj rapid — timp de execuție redus",
        "Rezistență structurală ridicată",
        "Disponibilă în multiple grosimi și culori",
      ],
      steps: [
        { title: "Dimensionare", desc: "Calcul grosime tablă în funcție de deschideri și încărcări." },
        { title: "Pregătire structură", desc: "Verificare pane și elemente de prindere." },
        { title: "Montaj", desc: "Fixare cu șuruburi autofiletante, cu garnitură." },
        { title: "Etanșare", desc: "Suprapuneri sigilate și accesorii finale." },
      ],
    },
    {
      slug: "sarpante",
      title: "Șarpante",
      shortTitle: "Șarpante",
      description: "Construim șarpante din lemn tratat, dimensionate corect și rezistente în timp.",
      icon: "Triangle",
      h1: "Șarpante din lemn — dimensionate și tratate corect",
      intro:
        "Proiectăm și executăm șarpante clasice și moderne din lemn stratificat sau lemn masiv tratat antifoc și antiinsecte. Toate structurile sunt dimensionate conform normelor pentru încărcări de zăpadă și vânt din zona ta.",
      benefits: [
        "Lemn tratat antifoc și împotriva dăunătorilor",
        "Dimensionare conform normativ pentru zona ta",
        "Îmbinări tradiționale sau moderne cu cuie patent",
        "Hidroizolație și folie anticondens incluse",
      ],
      steps: [
        { title: "Proiect tehnic", desc: "Desen și calcul structural pentru fiecare acoperiș." },
        { title: "Confecționare", desc: "Elemente pregătite în atelier pentru precizie." },
        { title: "Montaj", desc: "Ridicare rapidă și fixare corectă." },
        { title: "Pregătire finisare", desc: "Folie, șipci și contrașipci pentru învelitoare." },
      ],
    },
    {
      slug: "jgheaburi-burlane",
      title: "Jgheaburi și burlane",
      shortTitle: "Jgheaburi",
      description: "Sisteme pluviale complete, etanșe, cu prindere sigură și estetică impecabilă.",
      icon: "CloudRain",
      h1: "Sisteme pluviale — jgheaburi și burlane Lindab",
      intro:
        "Montăm sisteme pluviale complete — Lindab, Bilka, Galeco — cu dimensionare corectă în funcție de suprafața acoperișului. Prinderi solide, îmbinări sigilate și estetică perfectă.",
      benefits: [
        "Dimensionare corectă pentru ploi intense",
        "Prinderi sigure — rezistă la greutatea zăpezii",
        "Sisteme disponibile în orice culoare RAL",
        "Soluții anti-frunze pentru case cu pomi în jur",
      ],
      steps: [
        { title: "Măsurători", desc: "Calculăm suprafața și stabilim diametrele." },
        { title: "Montaj jgheaburi", desc: "Cu pantă corectă și prinderi solide." },
        { title: "Burlane", desc: "Ghidare corectă a apei către colector sau canal." },
        { title: "Test apă", desc: "Verificare etanșeitate înainte de recepție." },
      ],
    },
    {
      slug: "ferestre-mansarda",
      title: "Ferestre de mansardă",
      shortTitle: "Ferestre mansardă",
      description: "Montaj Velux și Fakro cu izolare perfectă, fără infiltrații.",
      icon: "Square",
      h1: "Ferestre de mansardă Velux și Fakro — montaj profesionist",
      intro:
        "Montăm ferestre de mansardă Velux și Fakro cu toate accesoriile originale — rame de etanșare, izolații termice și membrane hidroizolante — pentru a evita orice risc de infiltrație.",
      benefits: [
        "Rame de etanșare originale, potrivite pentru învelitoare",
        "Izolație termică completă în jurul ferestrei",
        "Montaj fără infiltrații — garantat",
        "Consultanță pentru modelul potrivit (rotativă, automată, solară)",
      ],
      steps: [
        { title: "Alegere model", desc: "Te ajutăm să alegi dimensiunea și tipul potrivit." },
        { title: "Decupare", desc: "Decupare precisă, fără a slăbi șarpanta." },
        { title: "Montaj", desc: "Fereastră, rame, hidroizolație și termoizolație." },
        { title: "Finisare", desc: "Pregătire interioară pentru gipscarton sau lambriu." },
      ],
    },
    {
      slug: "lucrari-dupa-furtuna",
      title: "Lucrări după furtună",
      shortTitle: "După furtună",
      description: "Evaluare rapidă și reparații urgente după vânt puternic, grindină sau furtuni.",
      icon: "Wind",
      h1: "Reparații acoperiș după furtună și grindină",
      intro:
        "Intervenim rapid după fenomene meteo severe. Evaluăm pagubele, securizăm provizoriu acoperișul și reparăm definitiv. Ajutăm și cu documentația pentru asigurări.",
      benefits: [
        "Deplasare rapidă în zonele afectate",
        "Securizare provizorie cu folie profesională",
        "Raport foto complet pentru asigurare",
        "Reparație definitivă la capăt, cu garanție",
      ],
      steps: [
        { title: "Evaluare", desc: "Inspecție completă și raport foto detaliat." },
        { title: "Securizare", desc: "Protecție temporară împotriva ploii și vântului." },
        { title: "Documentație asigurare", desc: "Te ajutăm cu toate actele necesare." },
        { title: "Reparație definitivă", desc: "Refacem corect zonele afectate, cu garanție." },
      ],
    },
    {
      slug: "intretinere",
      title: "Întreținere acoperiș",
      shortTitle: "Întreținere",
      description: "Revizii periodice care prelungesc viața acoperișului tău cu ani de zile.",
      icon: "ShieldCheck",
      h1: "Întreținere și revizii anuale acoperiș",
      intro:
        "Revizia anuală costă puțin și previne probleme scumpe. Curățăm jgheaburi, verificăm etanșările, strângem prinderi slăbite și îți predăm un raport clar cu starea acoperișului.",
      benefits: [
        "Identificăm probleme înainte să producă pagube",
        "Curățare jgheaburi și burlane",
        "Retușuri vopsea și sigilări acolo unde e cazul",
        "Raport scris cu recomandări pentru anul următor",
      ],
      steps: [
        { title: "Inspecție completă", desc: "Verificare învelitoare, coame, doline, străpungeri." },
        { title: "Curățare", desc: "Jgheaburi, burlane și suprafețe critice." },
        { title: "Retușuri", desc: "Sigilări, vopsire și remediere a micilor probleme." },
        { title: "Raport", desc: "Document clar cu starea și recomandările noastre." },
      ],
    },
    {
      slug: "diagnostic",
      title: "Diagnostic acoperiș",
      shortTitle: "Diagnostic",
      description: "Inspecție detaliată și raport clar cu recomandări și costuri transparente.",
      icon: "Search",
      h1: "Diagnostic acoperiș — inspecție și raport complet",
      intro:
        "Diagnostic profesional cu raport detaliat, recomandări prioritizate și estimare de costuri. Util înainte de achiziția unei case, după o furtună sau când vrei să știi sigur dacă acoperișul rezistă.",
      benefits: [
        "Inspecție vizuală + fotografii de la înălțime (cu dronă, la cerere)",
        "Raport PDF cu recomandări clare",
        "Estimări de cost pentru fiecare problemă identificată",
        "Opinia noastră tehnică, obiectivă, fără presiune de vânzare",
      ],
      steps: [
        { title: "Programare", desc: "Stabilim o dată convenabilă pentru vizită." },
        { title: "Inspecție", desc: "Verificare la nivelul acoperișului și podului." },
        { title: "Raport", desc: "Document PDF cu foto și recomandări prioritizate." },
        { title: "Consultanță", desc: "Discutăm planul și îți răspundem la întrebări." },
      ],
    },
    {
      slug: "sigilari",
      title: "Sigilări și etanșări",
      shortTitle: "Sigilări",
      description: "Sigilăm coșurile, lucarnele și toate punctele critice împotriva infiltrațiilor.",
      icon: "Package",
      h1: "Sigilări și etanșări — puncte critice acoperiș",
      intro:
        "Cele mai multe infiltrații apar la coșuri, lucarne, ferestre și antene. Sigilăm corect aceste puncte critice cu membrane și silicoane profesionale, cu garanție.",
      benefits: [
        "Tratăm cauza, nu doar simptomul",
        "Membrane și silicoane profesionale, UV-rezistente",
        "Verificăm toate zonele critice simultan",
        "Garanție scrisă pe lucrările efectuate",
      ],
      steps: [
        { title: "Identificare puncte critice", desc: "Inspectăm toate zonele de risc." },
        { title: "Pregătire", desc: "Curățare și pregătire suprafețe." },
        { title: "Aplicare sigilanți", desc: "Membrane sau silicoane adaptate fiecărui loc." },
        { title: "Test", desc: "Verificare etanșeitate după uscare." },
      ],
    },
    {
      slug: "interventii-urgente",
      title: "Intervenții urgente",
      shortTitle: "Urgențe 24/7",
      description: "Echipă de urgență 24/7 pentru infiltrații, furtuni și situații critice.",
      icon: "Siren",
      h1: "Intervenții urgente 24/7 — infiltrații și avarii",
      intro:
        "Plouă în casă? Ți-a smuls vântul bucăți de acoperiș? Intervenim rapid, orice oră și orice zi. Securizăm acoperișul și oprim avansarea pagubelor până la reparația definitivă.",
      benefits: [
        "Echipă disponibilă 24/7 pentru situații critice",
        "Timp mediu de răspuns sub 2 ore în București-Ilfov",
        "Securizare imediată pentru a opri daunele",
        "Reparație definitivă planificată rapid, la cel mai bun preț",
      ],
      steps: [
        { title: "Apel", desc: "Sună-ne — răspundem 24/7." },
        { title: "Deplasare rapidă", desc: "Trimitem echipa cea mai apropiată." },
        { title: "Securizare", desc: "Oprim infiltrația și protejăm zona afectată." },
        { title: "Reparație planificată", desc: "Stabilim intervenția definitivă rapid." },
      ],
    },
  ],
} as const

export type ServiceArea = (typeof siteConfig.areas)[number]
export type Service = (typeof siteConfig.services)[number]

export function getServiceBySlug(slug: string): Service | undefined {
  return siteConfig.services.find((s) => s.slug === slug)
}

export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return siteConfig.areas.find((a) => a.slug === slug)
}

export const serviceCategories = [
  {
    id: "montaj",
    label: "Montaj & construcție",
    description: "Acoperișuri noi, șarpante și învelitori executate la cheie.",
    slugs: [
      "montaj-acoperisuri",
      "inlocuire-acoperis",
      "sarpante",
      "schimbare-tigla",
      "tabla",
      "tabla-cutata",
    ],
  },
  {
    id: "reparatii",
    label: "Reparații & urgențe",
    description: "Intervenții rapide, infiltrații, avarii după furtună.",
    slugs: [
      "reparatii-acoperisuri",
      "interventii-urgente",
      "lucrari-dupa-furtuna",
      "sigilari",
    ],
  },
  {
    id: "izolatii",
    label: "Izolații",
    description: "Hidroizolații și termoizolații cu garanție scrisă.",
    slugs: ["hidroizolatii", "termoizolatii"],
  },
  {
    id: "accesorii",
    label: "Accesorii",
    description: "Sisteme pluviale, ferestre de mansardă și finisaje.",
    slugs: ["jgheaburi-burlane", "ferestre-mansarda"],
  },
  {
    id: "mentenanta",
    label: "Mentenanță",
    description: "Întreținere, revizii și diagnostic profesional.",
    slugs: ["intretinere", "diagnostic"],
  },
] as const

export type ServiceCategory = (typeof serviceCategories)[number]

export function getServicesByCategory(id: ServiceCategory["id"]): Service[] {
  const cat = serviceCategories.find((c) => c.id === id)
  if (!cat) return []
  return cat.slugs
    .map((slug) => siteConfig.services.find((s) => s.slug === slug))
    .filter((s): s is Service => Boolean(s))
}

export function getRelatedServices(slug: string, count = 3): Service[] {
  const idx = siteConfig.services.findIndex((s) => s.slug === slug)
  if (idx === -1) return siteConfig.services.slice(0, count)
  const out: Service[] = []
  for (let i = 1; i <= siteConfig.services.length && out.length < count; i++) {
    const next = siteConfig.services[(idx + i) % siteConfig.services.length]
    out.push(next)
  }
  return out
}
