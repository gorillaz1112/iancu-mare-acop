import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { siteConfig } from "@/lib/site-config"

const faqs = [
  {
    q: "În cât timp primesc devizul?",
    a: "În majoritatea cazurilor trimitem devizul detaliat în 24 de ore de la vizita pe teren. Pentru lucrări mici, oferta poate veni chiar în aceeași zi.",
  },
  {
    q: "Oferiți garanție pentru lucrări?",
    a: "Da. Oferim garanție scrisă până la 20 de ani pe materiale (în funcție de producător) și până la 10 ani pe manoperă. Intervenim gratuit dacă apare orice problemă acoperită de garanție.",
  },
  {
    q: "Cât durează montajul unui acoperiș nou?",
    a: "Pentru o casă standard, un acoperiș nou durează între 5 și 14 zile lucrătoare, în funcție de complexitate, materiale și condițiile meteo. Îți comunicăm termenul exact înainte de a începe.",
  },
  {
    q: "Lucrați și iarna?",
    a: "Da, lucrăm tot anul. Anumite operațiuni (ex: hidroizolații) necesită temperaturi minime, dar putem planifica și executa majoritatea lucrărilor și în sezonul rece, cu măsuri adecvate.",
  },
  {
    q: "Cu ce materiale lucrați?",
    a: "Lucrăm doar cu materiale certificate — Wienerberger, Tondach, Bramac, Lindab, Velux, Fakro. Îți recomandăm varianta optimă în funcție de buget și tipul casei.",
  },
  {
    q: "Puteți interveni urgent la infiltrații?",
    a:
      "Da. Avem echipă de intervenții urgente disponibilă 24/7 pentru București, Ilfov și zonele adiacente. Sunați la " +
      siteConfig.phoneDisplay +
      " și trimitem imediat un specialist.",
  },
  {
    q: "Cât costă un acoperiș nou?",
    a: "Prețul depinde de suprafață, tipul de material, complexitate și starea șarpantei. Pentru o ofertă exactă, îți facem un deviz gratuit după o vizită scurtă la fața locului.",
  },
  {
    q: "Emiteți factură și contract?",
    a: "Da, întotdeauna. Lucrăm transparent, cu contract semnat, deviz detaliat, factură fiscală și certificat de garanție pentru fiecare proiect.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Întrebări frecvente
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Răspundem direct,{" "}
            <span className="italic font-medium text-primary">fără învârteli.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Nu găsești răspunsul? Sună-ne la{" "}
            <a href={siteConfig.phoneHref} className="font-semibold text-primary hover:underline">
              {siteConfig.phoneDisplay}
            </a>
            .
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-14 space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="card-elev rounded-2xl border border-border bg-card px-6"
            >
              <AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[15px] leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
