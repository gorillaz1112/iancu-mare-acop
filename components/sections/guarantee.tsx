import { ShieldCheck, Wallet, Clock4, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

const promises = [
  {
    n: "01",
    icon: ShieldCheck,
    title: "Garanție scrisă 20 ani",
    body: "Materiale certificate și montaj documentat. Intervenim gratuit dacă apare orice problemă acoperită.",
  },
  {
    n: "02",
    icon: Wallet,
    title: "Preț fix, fără surprize",
    body: "Devizul pe care îl semnezi e cel pe care îl plătești. Zero costuri ascunse, zero „după ce începem”.",
  },
  {
    n: "03",
    icon: Clock4,
    title: "Termen respectat",
    body: "Începem și terminăm la data promisă. Dacă depășim termenul din vina noastră, scădem din preț.",
  },
]

export function Guarantee() {
  return (
    <section className="relative bg-primary text-primary-foreground">
      {/* edge hairlines */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-black/20" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-white/15" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-foreground px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-background">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Promisiunea noastră
            </div>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[56px]">
              Trei angajamente,{" "}
              <span className="italic font-medium text-foreground">fără asteriscuri.</span>
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-primary-foreground/85 text-pretty">
            Nu lucrăm pe promisiuni verbale. Fiecare proiect vine cu un contract clar,
            un deviz detaliat și trei garanții ferme pe care ți le dăm în scris.
          </p>
        </div>

        {/* Promises grid */}
        <ul className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {promises.map(({ n, icon: Icon, title, body }) => (
            <li
              key={n}
              className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/[0.06] p-7 backdrop-blur-[2px] transition-all duration-500 hover:-translate-y-1 hover:border-white/40 hover:bg-white/[0.1] sm:p-8"
            >
              {/* Black accent numeral */}
              <div className="flex items-start justify-between">
                <span className="font-display text-[56px] font-bold leading-none text-foreground sm:text-[64px]">
                  {n}
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/20 transition group-hover:bg-white/20">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
              </div>

              <h3 className="mt-8 font-display text-xl font-semibold leading-tight">
                {title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-primary-foreground/85">
                {body}
              </p>

              {/* Sheen on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -bottom-px h-px w-0 bg-foreground transition-[width] duration-500 group-hover:w-full"
              />
            </li>
          ))}
        </ul>

        {/* Closing CTA line */}
        <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-relaxed text-primary-foreground/80">
            Vrei să vezi cum arată un contract concret, înainte să te decizi? Îți trimitem
            un model complet, cu deviz-tip și certificat de garanție.
          </p>
          <Link
            href="/servicii"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90"
          >
            Vezi toate serviciile
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <span className="sr-only">Sună la {siteConfig.phoneDisplay}</span>
        </div>
      </div>
    </section>
  )
}
