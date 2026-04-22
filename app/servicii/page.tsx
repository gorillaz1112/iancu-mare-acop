import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ContactBlock } from "@/components/contact-block"
import { ServicesCatalog } from "@/components/services-catalog"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `Servicii acoperișuri — catalog complet | ${siteConfig.brand}`,
  description: `Toate serviciile ${siteConfig.brand}: montaj, reparații, hidroizolații, șarpante, jgheaburi, intervenții urgente și mentenanță. Deviz gratuit, garanție scrisă.`,
  alternates: { canonical: "/servicii" },
}

export default function ServiciiPage() {
  return (
    <>
      <section className="bg-editorial pt-16 sm:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Servicii" }]} />

          <div className="mt-8 max-w-3xl reveal-up">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary/60" />
              Catalog complet · {siteConfig.services.length} servicii
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[64px] lg:leading-[1.02]">
              Servicii pentru acoperișul tău,{" "}
              <span className="italic font-medium text-primary">de la A la Z.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground text-pretty">
              Echipe proprii, materiale premium și garanție scrisă pe toate lucrările.
              Filtrează după categorie pentru a găsi rapid serviciul potrivit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServicesCatalog />
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactBlock
            title="Nu știi sigur de ce serviciu ai nevoie?"
            subtitle="Îți trimitem un specialist care evaluează gratuit acoperișul și îți propune soluția potrivită — fără obligații, fără presiune."
          />
        </div>
      </section>
    </>
  )
}
