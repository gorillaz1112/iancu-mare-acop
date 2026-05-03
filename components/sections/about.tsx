import Image from "next/image"
import { Check, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { siteConfig } from "@/lib/site-config"

const pillars = [
  {
    title: "Materiale premium",
    description:
      "Lucrăm cu branduri de top — Wienerberger, Tondach, Bramac, Lindab, Velux, Fakro.",
  },
  {
    title: "Echipe proprii",
    description:
      "Montatori instruiți și autorizați. Calitate consistentă, fără intermediari.",
  },
  {
    title: "Prețuri transparente",
    description:
      "Deviz clar, detaliat. Ce ți-am promis, aia plătești. Fără costuri ascunse.",
  },
  {
    title: "Garanție scrisă",
    description:
      "Până la 20 de ani pe materiale și manoperă. Intervenim rapid dacă apare orice problemă.",
  },
]

export function About() {
  return (
    <section id="despre" className="relative bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border card-elev">
              <Image
                src="/roofer-team.jpg"
                alt={`Echipă profesionistă de acoperișuri ${siteConfig.brand} la lucru`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden w-64 rounded-2xl border border-border bg-background p-6 card-elev sm:block">
              <p className="font-display text-4xl font-bold text-primary">15+</p>
              <p className="mt-1 text-sm font-semibold">ani pe acoperișurile românilor</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Fiecare proiect livrat cu aceeași grijă ca pentru casa noastră.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent/50" />
              Despre {siteConfig.brand}
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[52px] lg:leading-[1.05]">
              Fiecare șantier tratat ca{" "}
              <span className="italic font-medium text-primary">proiect unic.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Suntem montatori și ingineri de șantier concentrați pe detalii. Lucrăm în
              București, Ilfov, Giurgiu, Constanța și Călărași — cu deviz clar înainte de
              execuție, materiale trasabile și promisiuni pe care le putem susține în scris.
            </p>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <li key={pillar.title} className="flex gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="font-semibold">{pillar.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 gap-2 rounded-full px-6 font-semibold">
                <a href={siteConfig.phoneHref}>
                  <Phone className="h-4 w-4" />
                  Sună la {siteConfig.phoneDisplay}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 gap-2 rounded-full border-border bg-background px-6 font-semibold"
              >
                <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-4 w-4 text-[#128C43]" />
                  Scrie pe WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
