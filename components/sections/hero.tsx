import Image from "next/image"
import Link from "next/link"
import { Phone, ArrowUpRight, ShieldCheck, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { siteConfig } from "@/lib/site-config"

const MARQUEE = [
  "Wienerberger",
  "Tondach",
  "Bramac",
  "Lindab",
  "Velux",
  "Fakro",
  "Bilka",
  "Ruukki",
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-editorial">
      {/* Top meta strip — editorial pre-headline */}
      <div className="relative z-10 border-b border-border/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:px-6 lg:px-8">
          <span className="reveal-fade flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Acoperișuri premium · Est. 2009
          </span>
          <span className="reveal-fade hidden items-center gap-2 sm:flex">
            București · Ilfov · Giurgiu · Constanța · Călărași
          </span>
          <span className="reveal-fade flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            4.9 / 5 · 320+ clienți
          </span>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-24 pt-16 sm:px-6 md:pt-24 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:pb-32 lg:pt-28">
        {/* Left — Typographic statement */}
        <div className="flex flex-col lg:col-span-6">
          <div className="reveal-up mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-xs font-medium text-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Intervenții disponibile astăzi în București &amp; Ilfov
          </div>

          <h1 className="reveal-up reveal-up-d1 font-display text-[46px] font-bold leading-[0.98] tracking-tight text-balance text-foreground sm:text-[68px] lg:text-[84px]">
            Acoperișuri care{" "}
            <span className="italic font-medium text-primary underline-sweep">
              durează
            </span>
            <br />
            decenii.
          </h1>

          <p className="reveal-up reveal-up-d2 mt-8 max-w-xl text-[17px] leading-relaxed text-muted-foreground text-pretty sm:text-lg">
            Montaj, reparații și înlocuire acoperiș executate impecabil.
            Materiale premium, echipe proprii și garanție scrisă până la{" "}
            <span className="font-semibold text-foreground">20 de ani</span>.
          </p>

          <div className="reveal-up reveal-up-d3 mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 gap-2 rounded-full px-7 text-base font-semibold shadow-[0_14px_36px_-14px_oklch(0.53_0.22_18_/_0.7)] transition-transform hover:scale-[1.02]"
            >
              <a href={siteConfig.phoneHref}>
                <Phone className="h-5 w-5" />
                Sună — {siteConfig.phoneDisplay}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 gap-2 rounded-full border-foreground/20 bg-transparent px-7 text-base font-semibold text-foreground hover:bg-foreground hover:text-background"
            >
              <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5" />
                Scrie pe WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Stats — clean editorial row */}
          <dl className="reveal-up reveal-up-d4 mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8 sm:gap-10">
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Garanție
              </dt>
              <dd className="mt-2 font-display text-3xl font-bold leading-none text-foreground">
                20 <span className="text-base font-medium text-muted-foreground">ani</span>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Răspuns
              </dt>
              <dd className="mt-2 font-display text-3xl font-bold leading-none text-foreground">
                &lt; 2h
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Proiecte
              </dt>
              <dd className="mt-2 font-display text-3xl font-bold leading-none text-foreground">
                1.400<span className="text-primary">+</span>
              </dd>
            </div>
          </dl>
        </div>

        {/* Right — Image-led composition */}
        <div className="relative lg:col-span-6">
          {/* Ambient glow */}
          <div
            aria-hidden
            className="absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,oklch(0.88_0.12_18/0.35),transparent_70%)] blur-2xl"
          />

          <div className="relative">
            {/* Decorative frame line */}
            <div
              aria-hidden
              className="absolute -left-5 -top-5 h-40 w-40 rounded-tl-[28px] border-l border-t border-primary/40 sm:h-56 sm:w-56"
            />

            {/* Main image card */}
            <figure className="reveal-image card-elev relative overflow-hidden rounded-[28px]">
              <div className="relative aspect-[4/5] grain">
                <Image
                  src="/hero-roof.jpg"
                  alt="Acoperiș premium din țiglă ceramică montat profesional în România"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* Soft gradient overlay for legibility of floating chips */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground/55 via-foreground/10 to-transparent"
                />

                {/* Top-right: Certified chip */}
                <div className="float-slow absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white glass">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Garantat 20 ani
                </div>

                {/* Bottom-left: Project chip */}
                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3">
                  <div className="glass flex items-center gap-3 rounded-2xl border border-white/25 bg-white/15 px-4 py-3 text-white">
                    <div className="flex -space-x-2">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-white/40 to-white/10"
                        />
                      ))}
                    </div>
                    <div className="leading-tight">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85">
                        Echipe proprii
                      </p>
                      <p className="text-sm font-semibold">
                        25+ specialiști pe teren
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/servicii/montaj-acoperisuri"
                    aria-label="Vezi serviciile de montaj"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_30px_-8px_oklch(0.53_0.22_18_/_0.6)] transition-transform hover:scale-105"
                  >
                    <ArrowUpRight className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </figure>

            {/* Floating info card — bottom-left overlap */}
            <div
              aria-hidden
              className="absolute -right-4 -bottom-8 hidden rotate-[2deg] rounded-2xl border border-border bg-card px-5 py-4 shadow-xl sm:-right-6 sm:block"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                Referință
              </p>
              <p className="mt-1 font-display text-lg font-bold leading-tight">
                Vilă, Pipera
              </p>
              <p className="text-xs text-muted-foreground">
                420 m² · țiglă Tondach
              </p>
            </div>

            <div
              aria-hidden
              className="absolute -right-5 -bottom-5 h-40 w-40 rounded-br-[28px] border-b border-r border-primary/40 sm:h-56 sm:w-56"
            />
          </div>
        </div>
      </div>

      {/* Marquee — materials of record */}
      <div className="relative border-y border-border bg-card/60 backdrop-blur">
        <div className="relative mx-auto flex max-w-7xl items-center gap-6 overflow-hidden px-4 py-5 sm:px-6 lg:px-8">
          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Materiale certificate
          </span>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
            <div className="marquee-slow flex w-max items-center gap-12">
              {[...MARQUEE, ...MARQUEE].map((name, i) => (
                <span
                  key={i}
                  className="font-display text-base font-semibold uppercase tracking-[0.12em] text-foreground/70"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
