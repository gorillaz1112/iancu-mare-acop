import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function ServiceAreas() {
  return (
    <section id="zone" className="relative bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent/50" />
              Zone deservite
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
              Lucrăm în{" "}
              <span className="italic font-medium text-primary">4 județe.</span>
              <br className="hidden sm:block" />
              Suntem aproape de tine.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground text-pretty">
            Echipe locale, timpi de răspuns scurți și prețuri fără deplasări lungi incluse.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {siteConfig.areas.map((area) => (
            <Link
              key={area.slug}
              href={`/zone/${area.slug}`}
              className="group card-elev card-elev-hover relative overflow-hidden rounded-3xl border border-border bg-background p-8 transition-colors hover:border-primary/30"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition group-hover:bg-primary/15" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-accent">
                    <MapPin className="h-4 w-4" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em]">
                      Acoperișuri în
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">{area.name}</h3>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
              </div>

              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                {area.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {area.cities.map((city) => (
                  <li
                    key={city}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Ești în altă localitate din apropiere?{" "}
          <a href={siteConfig.phoneHref} className="font-semibold text-primary hover:underline">
            Sună-ne
          </a>{" "}
          și găsim o soluție împreună.
        </p>
      </div>
    </section>
  )
}
