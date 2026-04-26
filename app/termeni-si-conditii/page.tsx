import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `Termeni și condiții | ${siteConfig.brand}`,
  description:
    "Termenii de utilizare ai site-ului Acoperiș Plus: informații despre servicii, contact, oferte, garanții și limitarea răspunderii pentru conținutul publicat.",
  alternates: { canonical: "/termeni-si-conditii" },
}

const sections = [
  {
    title: "1. Informații generale",
    body: [
      `Site-ul ${siteConfig.url} este administrat de [DENUMIRE FIRMĂ / PFA], cu datele complete ce vor fi completate înainte de publicarea finală.`,
      "Conținutul site-ului prezintă servicii de montaj, reparații, înlocuire, hidroizolații, termoizolații și lucrări conexe pentru acoperișuri.",
    ],
  },
  {
    title: "2. Caracter informativ",
    body: [
      "Informațiile, descrierile, imaginile și exemplele de lucrări sunt prezentate cu scop informativ și comercial general.",
      "O ofertă fermă poate fi emisă numai după discuție, verificarea lucrării, măsurători și confirmarea materialelor, termenelor și condițiilor concrete.",
    ],
  },
  {
    title: "3. Contact și solicitări",
    body: [
      `Vizitatorii pot contacta ${siteConfig.brand} prin telefon, email sau WhatsApp. Prin transmiterea unei solicitări, confirmi că datele oferite sunt corecte și că pot fi folosite pentru răspuns, ofertare și programare.`,
      "Site-ul nu creează conturi de utilizator, nu procesează plăți online și nu încheie automat contracte la distanță.",
    ],
  },
  {
    title: "4. Prețuri, termene și garanții",
    body: [
      "Orice mențiune despre preț, deviz, garanție, termen de execuție sau disponibilitate este orientativă până la confirmarea scrisă într-o ofertă, deviz, contract sau document de recepție.",
      "Garanțiile se aplică în condițiile stabilite în documentele emise pentru fiecare lucrare și pot depinde de materialele folosite, condițiile de exploatare și respectarea recomandărilor tehnice.",
    ],
  },
  {
    title: "5. Drepturi de proprietate intelectuală",
    body: [
      "Textele, structura, elementele grafice și materialele publicate pe site aparțin operatorului sau partenerilor săi, cu excepția cazurilor în care se indică altfel.",
      "Copierea sau reutilizarea conținutului fără acord scris nu este permisă.",
    ],
  },
  {
    title: "6. Limitarea răspunderii",
    body: [
      "Operatorul depune eforturi pentru ca informațiile să fie corecte și actualizate, dar nu garantează absența erorilor tehnice sau de redactare.",
      "Operatorul nu răspunde pentru întreruperi cauzate de mentenanță, furnizori de găzduire, rețele, browsere, dispozitive sau evenimente în afara controlului său rezonabil.",
    ],
  },
  {
    title: "7. Legea aplicabilă",
    body: [
      "Acești termeni sunt guvernați de legislația română. Eventualele neînțelegeri se vor încerca a fi soluționate amiabil, iar în lipsa unei soluții se vor aplica procedurile legale competente.",
    ],
  },
]

export default function TermeniSiConditiiPage() {
  return (
    <article className="bg-background">
      <section className="bg-editorial pt-16 sm:pt-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Termeni și condiții" }]} />
          <div className="mt-8 pb-14 sm:pb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary/60" />
              Utilizare site
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              Termeni și condiții
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground">
              Acești termeni stabilesc regulile generale pentru folosirea site-ului și pentru
              interpretarea informațiilor comerciale publicate.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-4xl gap-8 px-4 text-[15px] leading-7 text-muted-foreground sm:px-6 lg:px-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                {section.title}
              </h2>
              <div className="mt-4 grid gap-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <p className="rounded-2xl border border-border bg-muted/40 p-5 text-sm">
            Ultima actualizare: [COMPLETAȚI DATA]. Completați datele comerciale exacte înainte de
            publicare.
          </p>
        </div>
      </section>
    </article>
  )
}
