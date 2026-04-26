import type { Metadata } from "next"
import { ExternalLink } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `ANPC | ${siteConfig.brand}`,
  description:
    "Informații pentru consumatori, reclamații ANPC și soluționarea alternativă a litigiilor pentru serviciile prezentate de Acoperiș Plus.",
  alternates: { canonical: "/anpc" },
}

const officialLinks = [
  {
    label: "Autoritatea Națională pentru Protecția Consumatorilor",
    href: "https://anpc.ro/",
    description: "Site-ul oficial ANPC pentru informații, reclamații și date de contact.",
  },
  {
    label: "Soluționarea Alternativă a Litigiilor (SAL)",
    href: "https://anpc.ro/sal",
    description:
      "Procedură voluntară pentru soluționarea amiabilă a litigiilor dintre consumatori și comercianți.",
  },
  {
    label: "Autoritatea pentru protecția datelor",
    href: "https://www.dataprotection.ro/",
    description:
      "ANSPDCP, autoritatea competentă pentru plângeri privind prelucrarea datelor personale.",
  },
]

export default function AnpcPage() {
  return (
    <article className="bg-background">
      <section className="bg-editorial pt-16 sm:pt-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "ANPC" }]} />
          <div className="mt-8 pb-14 sm:pb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary/60" />
              Protecția consumatorilor
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              Informații ANPC
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground">
              Această pagină oferă acces rapid la resurse oficiale pentru drepturile
              consumatorilor și soluționarea amiabilă a eventualelor sesizări.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Recomandarea noastră
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
              Dacă ai o nemulțumire privind o lucrare sau o ofertă, contactează-ne mai întâi la{" "}
              <a className="font-medium text-primary underline-offset-4 hover:underline" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>{" "}
              sau la{" "}
              <a className="font-medium text-primary underline-offset-4 hover:underline" href={siteConfig.phoneHref}>
                {siteConfig.phoneDisplay}
              </a>
              . Vom încerca să clarificăm situația rapid și documentat.
            </p>
          </div>

          <div className="mt-10 grid gap-5">
            {officialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-border p-6 transition hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-xl font-semibold tracking-tight">
                      {link.label}
                    </h2>
                    <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
                      {link.description}
                    </p>
                  </div>
                  <ExternalLink className="mt-1 h-5 w-5 shrink-0 text-primary transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 grid gap-6 text-[15px] leading-7 text-muted-foreground">
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                Observație despre platformele europene
              </h2>
              <p className="mt-4">
                Referințele la platforma europeană SOL/ODR s-au schimbat la nivel european.
                Pentru informații actualizate despre soluționarea alternativă a litigiilor,
                folosește pagina oficială SAL administrată de ANPC.
              </p>
            </section>

            <p className="rounded-2xl border border-border bg-muted/40 p-5 text-sm">
              Completați această pagină cu orice obligație specifică firmei, dacă activitatea,
              contractele sau modul de vânzare impun afișări suplimentare.
            </p>
          </div>
        </div>
      </section>
    </article>
  )
}
