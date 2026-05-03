import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CookieSettingsButton } from "@/components/cookie-consent"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `Politica privind cookie-urile | ${siteConfig.brand}`,
  description: `Politica de cookie-uri ${siteConfig.brand}: cookie-uri necesare, analiză, marketing, Google Consent Mode v2 și opțiuni pentru modificarea consimțământului.`,
  alternates: { canonical: "/politica-cookies" },
}

const cookieCategories = [
  {
    title: "Cookie-uri necesare",
    status: "active permanent",
    description:
      "Ajută site-ul să funcționeze corect, să rețină preferința de consimțământ și să păstreze securitatea de bază. Nu pot fi dezactivate din banner.",
  },
  {
    title: "Cookie-uri de analiză",
    status: "opționale",
    description:
      "Permit măsurarea traficului și a paginilor vizitate prin Google Analytics 4, numai după acordul vizitatorului.",
  },
  {
    title: "Cookie-uri de marketing",
    status: "opționale",
    description:
      "Permit măsurarea conversiilor Google Ads, remarketing și personalizarea publicității, numai după acordul vizitatorului.",
  },
]

export default function PoliticaCookiesPage() {
  return (
    <article className="bg-background">
      <section className="bg-editorial pt-16 sm:pt-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Politica cookies" }]} />
          <div className="mt-8 pb-14 sm:pb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary/60" />
              GDPR · Consimțământ
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              Politica privind cookie-urile
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground">
              Această pagină explică ce cookie-uri poate folosi {siteConfig.brand}, cum se
              aplică Google Consent Mode v2 și cum poți modifica oricând preferințele.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Setările tale pentru cookie-uri
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
              Poți redeschide panoul de preferințe oricând. Respingerea cookie-urilor opționale
              nu afectează accesul la informațiile de pe site.
            </p>
            <div className="mt-5">
              <CookieSettingsButton />
            </div>
          </div>

          <div className="mt-10 grid gap-6">
            {cookieCategories.map((category) => (
              <section key={category.title} className="rounded-2xl border border-border p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="font-display text-xl font-semibold tracking-tight">
                    {category.title}
                  </h2>
                  <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {category.status}
                  </span>
                </div>
                <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
                  {category.description}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-10 grid gap-8 text-[15px] leading-7 text-muted-foreground">
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                Cum funcționează Google Consent Mode v2
              </h2>
              <p className="mt-4">
                Înainte să alegi, setările pentru analiză, publicitate și personalizare sunt
                transmise ca refuzate. Dacă accepți toate sau alegi parțial, site-ul actualizează
                starea consimțământului și permite doar categoriile selectate.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                Exemple de servicii care pot folosi cookie-uri
              </h2>
              <ul className="mt-4 grid gap-3">
                <li>Google Tag Manager, pentru administrarea etichetelor de măsurare.</li>
                <li>Google Analytics 4, pentru statistici agregate despre trafic.</li>
                <li>Google Ads, pentru conversii, optimizarea reclamelor și remarketing.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                Control din browser
              </h2>
              <p className="mt-4">
                Poți șterge cookie-urile și din setările browserului. Dacă ștergi stocarea locală
                a site-ului, bannerul poate apărea din nou pentru a cere o nouă alegere.
              </p>
            </section>

            <p className="rounded-2xl border border-border bg-muted/40 p-5 text-sm">
              Ultima actualizare: [COMPLETAȚI DATA]. Lista finală de cookie-uri trebuie verificată
              după publicarea configurării reale din Google Tag Manager, Google Analytics și Google
              Ads.
            </p>
          </div>
        </div>
      </section>
    </article>
  )
}
