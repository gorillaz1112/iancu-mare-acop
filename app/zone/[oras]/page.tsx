import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowUpRight, Check, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ContactBlock } from "@/components/contact-block"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { getServiceIcon } from "@/lib/icon-map"
import { getAreaBySlug, siteConfig } from "@/lib/site-config"

type Params = { oras: string }

export function generateStaticParams(): Params[] {
  return siteConfig.areas.map((a) => ({ oras: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { oras } = await params
  const area = getAreaBySlug(oras)
  if (!area) return {}
  return {
    title: `Acoperișuri ${area.name} — montaj, reparații, înlocuire`,
    description: `${siteConfig.brand} — firmă specializată în acoperișuri pentru ${area.name}. Montaj, reparații, hidroizolații, șarpante. Deviz gratuit. Sună ${siteConfig.phoneDisplay}.`,
    alternates: {
      canonical: `/zone/${area.slug}`,
    },
    openGraph: {
      title: `Acoperișuri în ${area.name} — ${siteConfig.brand}`,
      description: area.longDescription,
      url: `${siteConfig.url}/zone/${area.slug}`,
      type: "article",
    },
  }
}

export default async function ZonePage({
  params,
}: {
  params: Promise<Params>
}) {
  const { oras } = await params
  const area = getAreaBySlug(oras)
  if (!area) notFound()

  const featuredServices = siteConfig.services.slice(0, 8)

  return (
    <>
      <section className="relative overflow-hidden bg-editorial">
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
          <Breadcrumbs
            items={[
              { href: "/", label: "Acasă" },
              { href: "/#zone", label: "Zone deservite" },
              { label: area.name },
            ]}
          />

          <div className="mt-10 grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
            <div className="reveal-up">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-accent">
                <MapPin className="h-4 w-4" />
                Zonă deservită
              </div>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[64px]">
                Acoperișuri în{" "}
                <span className="italic font-medium text-primary">{area.name}.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
                {area.longDescription}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 gap-2 rounded-full px-6 text-base font-semibold">
                  <a href={siteConfig.phoneHref}>
                    <Phone className="h-5 w-5" />
                    Sună — {siteConfig.phoneDisplay}
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 gap-2 rounded-full border-border bg-card px-6 text-base font-semibold"
                >
                  <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="h-5 w-5 text-[#128C43]" />
                    WhatsApp
                  </a>
                </Button>
              </div>

              <ul className="mt-8 flex flex-wrap gap-2">
                {area.cities.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative reveal-fade">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/15 via-accent/10 to-transparent blur-2xl" />
              <div className="card-elev relative overflow-hidden rounded-[28px] border border-border bg-card">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/hero-roof.jpg"
                    alt={`Acoperișuri ${area.name} — execuție profesională`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services available in this area */}
      <section className="relative bg-card py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <span className="h-px w-8 bg-accent/50" />
                Servicii disponibile
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[44px] lg:leading-[1.05]">
                Ce facem în {area.name}
              </h2>
            </div>
            <Link
              href="/#servicii"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              Toate serviciile
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((s) => {
              const Icon = getServiceIcon(s.icon)
              return (
                <Link
                  key={s.slug}
                  href={`/servicii/${s.slug}`}
                  className="group card-elev card-elev-hover flex flex-col justify-between rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/30"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-5 font-display text-base font-semibold leading-tight">
                      {s.title} în {area.short}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-primary">
                    Detalii serviciu
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why us in this area */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <span className="h-px w-8 bg-accent/50" />
                De ce noi în {area.short}
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[44px] lg:leading-[1.05]">
                Echipă{" "}
                <span className="italic font-medium text-primary">locală,</span>
                <br className="hidden sm:block" />
                standarde premium.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground text-pretty">
                Avem rute optimizate și echipe locale în {area.name}, astfel încât timpul de
                răspuns să fie cât mai scurt, iar prețul corect. Pentru urgențe, intervenim
                în aceeași zi.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                "Deplasare gratuită în zonă",
                "Răspuns în maxim 2 ore",
                "Deviz gratuit și transparent",
                "Contract, factură, garanție",
                "Materiale premium certificate",
                "Intervenții urgente 24/7",
              ].map((item) => (
                <li
                  key={item}
                  className="card-elev flex items-start gap-3 rounded-2xl border border-border bg-card p-5"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <p className="text-sm leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactBlock
            variant="dark"
            title={`Deviz gratuit pentru ${area.name}`}
            subtitle="Sună sau scrie pe WhatsApp. Răspundem rapid și venim în zonă pentru măsurători."
          />
        </div>
      </section>
    </>
  )
}
