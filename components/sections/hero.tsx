import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowUpRight, ShieldCheck, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { siteConfig } from "@/lib/site-config";

const MARQUEE = [
  "Wienerberger",
  "Tondach",
  "Bramac",
  "Lindab",
  "Velux",
  "Fakro",
  "Bilka",
  "Ruukki",
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[oklch(0.32_0.11_262)] text-white">
      {/* Deep blue field + soft light pools (CSS-only, GPU-friendly) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_85%_-10%,oklch(0.52_0.14_258/0.35),transparent_55%),radial-gradient(90%_60%_at_0%_100%,oklch(0.38_0.1_265/0.5),transparent_50%)]"
      />

      {/* Top meta strip — high contrast on blue */}
      <div className="relative z-10 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/65 sm:px-6 lg:px-8">
          <span className="reveal-fade flex items-center gap-2 text-white/90">
            <Sparkles className="h-3.5 w-3.5 shrink-0 text-sky-200" />
            Montaj documentat · materiale verificate
          </span>
          <span className="reveal-fade hidden items-center gap-2 text-white/70 sm:flex">
            București · Ilfov · Giurgiu · Constanța · Călărași
          </span>
          <span className="reveal-fade flex items-center gap-1.5 text-white/90">
            <Star className="h-3.5 w-3.5 shrink-0 fill-amber-300 text-amber-200" />
            4.9 / 5 · 320+ clienți
          </span>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-12 sm:gap-14 sm:px-6 sm:pb-24 sm:pt-16 md:pt-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:pb-28 lg:pt-24">
        {/* Left column: white headline on blue, black body in elevated card for readability */}
        <div className="flex flex-col lg:col-span-6 lg:pr-4">
          <div className="reveal-up mb-6 inline-flex w-fit max-w-full items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white shadow-sm backdrop-blur-md sm:mb-8">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-300 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-200" />
            </span>
            <span className="text-pretty leading-snug">
              Echipe în mișcare astăzi în București &amp; Ilfov
            </span>
          </div>

          <h1 className="reveal-up reveal-up-d1 max-w-[14ch] font-display text-[2.65rem] font-bold leading-[0.98] tracking-tight text-balance text-white sm:max-w-none sm:text-5xl sm:leading-[0.98] lg:text-[4.25rem] lg:leading-[1.02]">
            <span className="text-white">De la structură la</span>{" "}
            <span className="relative inline-block rounded-xl bg-white px-2.5 py-1 text-zinc-900 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)] sm:px-3 sm:py-1.5">
              <span className="italic font-medium underline-sweep">învelitoare</span>
            </span>
            <br />
            <span className="mt-1 inline-block text-white sm:mt-2">
              — totul la un standard ridicat.
            </span>
          </h1>

          {/* Long-form copy on a solid light surface: calmer rhythm + WCAG-friendly contrast */}
          <div className="reveal-up reveal-up-d2 mt-8 max-w-xl sm:mt-10">
            <div className="rounded-2xl border border-white/25 bg-white p-5 text-zinc-900 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.35)] sm:p-6">
              <p className="text-[15px] leading-relaxed text-pretty text-zinc-800 sm:text-[17px] sm:leading-relaxed">
                <span className="font-semibold text-zinc-950">{siteConfig.tagline}</span>{" "}
                Oferim montaj, reparații și înlocuire cu deviz înainte de șantier, echipe
                proprii și garanție scrisă până la{" "}
                <span className="font-bold text-zinc-950">20 de ani</span>.
              </p>
            </div>
          </div>

          <div className="reveal-up reveal-up-d3 mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
            <Button
              asChild
              size="lg"
              className="h-14 gap-2 rounded-full border-0 bg-white px-7 text-base font-semibold text-zinc-900 shadow-lg transition-transform hover:scale-[1.02] hover:bg-zinc-50"
            >
              <a href={siteConfig.phoneHref}>
                <Phone className="h-5 w-5 text-zinc-900" />
                Sună — {siteConfig.phoneDisplay}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 gap-2 rounded-full border-2 border-white/70 bg-transparent px-7 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Scrie pe WhatsApp
                <ArrowUpRight className="h-4 w-4 opacity-90" />
              </a>
            </Button>
          </div>

          {/* Stats — compact tiles for quick scanning on mobile */}
          <dl className="reveal-up reveal-up-d4 mt-10 grid grid-cols-3 gap-2 sm:mt-12 sm:gap-3">
            <div className="rounded-xl border border-white/15 bg-black/25 p-3.5 text-center backdrop-blur-sm sm:p-4 sm:text-left">
              <dt className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55 sm:text-[10px]">
                Garanție
              </dt>
              <dd className="mt-1.5 font-display text-2xl font-bold leading-none text-white sm:mt-2 sm:text-3xl">
                20 <span className="text-sm font-medium text-white/60 sm:text-base">ani</span>
              </dd>
            </div>
            <div className="rounded-xl border border-white/15 bg-black/25 p-3.5 text-center backdrop-blur-sm sm:p-4 sm:text-left">
              <dt className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55 sm:text-[10px]">
                Răspuns
              </dt>
              <dd className="mt-1.5 font-display text-2xl font-bold leading-none text-white sm:mt-2 sm:text-3xl">
                &lt; 2h
              </dd>
            </div>
            <div className="rounded-xl border border-white/15 bg-black/25 p-3.5 text-center backdrop-blur-sm sm:p-4 sm:text-left">
              <dt className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55 sm:text-[10px]">
                Proiecte
              </dt>
              <dd className="mt-1.5 font-display text-2xl font-bold leading-none text-white sm:mt-2 sm:text-3xl">
                1.400<span className="text-sky-300">+</span>
              </dd>
            </div>
          </dl>
        </div>

        {/* Right — Image-led composition */}
        <div className="relative z-10 lg:col-span-6">
          {/* Ambient glow behind photo — reads on blue hero */}
          <div
            aria-hidden
            className="absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,oklch(0.95_0.04_250/0.22),transparent_70%)] blur-2xl"
          />

          <div className="relative">
            {/* Decorative frame line */}
            <div
              aria-hidden
              className="absolute -left-5 -top-5 h-40 w-40 rounded-tl-[28px] border-l border-t border-white/25 sm:h-56 sm:w-56"
            />

            {/* Main image card */}
            <figure className="reveal-image card-elev relative overflow-hidden rounded-[28px]">
              <div className="relative aspect-[4/5] grain">
                <Image
                  src="/lucrari/asta444.jpeg"
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
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_30px_-8px_oklch(0.5_0.16_258_/_0.5)] transition-transform hover:scale-105"
                  >
                    <ArrowUpRight className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </figure>

            {/* Floating info card — bottom-left overlap */}
            <div
              aria-hidden
              className="absolute -right-4 -bottom-8 hidden rotate-[2deg] rounded-2xl border border-white/20 bg-white px-5 py-4 text-zinc-900 shadow-xl sm:-right-6 sm:block"
            >
              <p className="mt-1 font-display text-lg font-bold leading-tight text-zinc-950">
                Acoperiș făcut să reziste
              </p>
              <p className="text-xs text-zinc-600">
                420 m² · țiglă Tondach
              </p>
            </div>

            <div
              aria-hidden
              className="absolute -right-5 -bottom-5 h-40 w-40 rounded-br-[28px] border-b border-r border-white/25 sm:h-56 sm:w-56"
            />
          </div>
        </div>
      </div>

      {/* Marquee — continues blue band with light text */}
      <div className="relative z-10 border-y border-white/10 bg-black/20 backdrop-blur-md">
        <div className="relative mx-auto flex max-w-7xl items-center gap-6 overflow-hidden px-4 py-5 sm:px-6 lg:px-8">
          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
            Materiale certificate
          </span>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
            <div className="marquee-slow flex w-max items-center gap-12">
              {[...MARQUEE, ...MARQUEE].map((name, i) => (
                <span
                  key={i}
                  className="font-display text-base font-semibold uppercase tracking-[0.12em] text-white/75"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
