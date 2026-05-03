import Link from "next/link"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { getServiceIcon } from "@/lib/icon-map"

export function ServicesGrid() {
  const featured = siteConfig.services.slice(0, 3)

  return (
    <section id="servicii" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary/60" />
              Servicii complete
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
              Tot ce ține de acoperiș,{" "}
              <span className="italic font-medium text-primary">făcut ca la carte.</span>
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground text-pretty">
            De la montaj nou și reparații, până la hidroizolații, șarpante și intervenții
            de urgență — lucrăm cu materiale premium și echipe certificate.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => {
            const Icon = getServiceIcon(service.icon)
            return (
              <Link
                key={service.slug}
                href={`/servicii/${service.slug}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.015] hover:shadow-[0_32px_60px_-24px_oklch(0.35_0.12_258_/_0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                {/* soft sheen on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12 ring-1 ring-white/25 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mt-7 font-display text-[22px] font-semibold leading-tight tracking-tight text-balance">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-white/85 text-pretty">
                    {service.description}
                  </p>
                </div>

                <div className="relative mt-10 flex items-center justify-between">
                  <span className="text-sm font-medium text-white/90">
                    Vezi detalii
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary transition-transform duration-500 ease-out group-hover:translate-x-1">
                    <ArrowUpRight className="h-5 w-5" aria-hidden />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            {siteConfig.services.length - 3}+ servicii complementare disponibile
          </p>
          <Link
            href="/servicii"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:bg-primary hover:shadow-[0_14px_36px_-16px_oklch(0.35_0.12_258_/_0.55)]"
          >
            Vezi toate serviciile
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
