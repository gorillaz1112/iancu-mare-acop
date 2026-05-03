import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowUpRight, Check, MapPin, Phone, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ContactBlock } from "@/components/contact-block"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { getServiceIcon } from "@/lib/icon-map"
import {
  getRelatedServices,
  getServiceBySlug,
  siteConfig,
} from "@/lib/site-config"

type Params = { serviciu: string }

export function generateStaticParams(): Params[] {
  return siteConfig.services.map((s) => ({ serviciu: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { serviciu } = await params
  const service = getServiceBySlug(serviciu)
  if (!service) return {}

  const areaList = siteConfig.areas.map((a) => a.short).join(", ")
  return {
    title: `${service.title} — București, Ilfov, Giurgiu, Constanța, Călărași`,
    description: `${service.intro} Lucrăm în ${areaList}. Deviz gratuit. Garanție scrisă. Sună ${siteConfig.phoneDisplay}.`,
    alternates: {
      canonical: `/servicii/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} — ${siteConfig.brand}`,
      description: service.intro,
      url: `${siteConfig.url}/servicii/${service.slug}`,
      type: "article",
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>
}) {
  const { serviciu } = await params
  const service = getServiceBySlug(serviciu)
  if (!service) notFound()

  const Icon = getServiceIcon(service.icon)
  const related = getRelatedServices(service.slug, 3)

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.intro,
    provider: {
      "@type": "RoofingContractor",
      name: siteConfig.brand,
      telephone: "+40" + siteConfig.phone.replace(/^0/, ""),
      url: siteConfig.url,
    },
    areaServed: siteConfig.areas.map((a) => ({
      "@type": "AdministrativeArea",
      name: a.name,
    })),
    url: `${siteConfig.url}/servicii/${service.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Header */}
      <section className="relative overflow-hidden bg-editorial">
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
          <Breadcrumbs
            items={[
              { href: "/", label: "Acasă" },
              { href: "/#servicii", label: "Servicii" },
              { label: service.title },
            ]}
          />

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
            <div className="reveal-up">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-accent">
                <Icon className="h-4 w-4" />
                Serviciu dedicat
              </div>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[64px]">
                {service.h1}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
                {service.intro}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 gap-2 rounded-full px-6 text-base font-semibold"
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
                  className="h-12 gap-2 rounded-full border-border bg-card px-6 text-base font-semibold"
                >
                  <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="h-5 w-5 text-[#128C43]" />
                    WhatsApp
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  Garanție scrisă
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  Deviz gratuit
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  București · Ilfov · Giurgiu · Constanța · Călărași
                </span>
              </div>
            </div>

            <div className="relative reveal-fade">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/15 via-accent/10 to-transparent blur-2xl" />
              <div className="card-elev relative overflow-hidden rounded-[28px] border border-border bg-card">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/roof-detail.jpg"
                    alt={`${service.title} — execuție profesională ${siteConfig.brand}`}
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

      {/* Benefits */}
      <section className="relative bg-card py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <span className="h-px w-8 bg-accent/50" />
                Beneficii
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[44px] lg:leading-[1.1]">
                De ce alege lumea{" "}
                <span className="italic font-medium text-primary">{service.shortTitle.toLowerCase()}</span>{" "}
                cu noi.
              </h2>
            </div>
            <ul className="grid gap-5 sm:grid-cols-2">
              {service.benefits.map((b) => (
                <li
                  key={b}
                  className="card-elev flex gap-4 rounded-2xl border border-border bg-background p-6"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <p className="text-[15px] leading-relaxed text-foreground">{b}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Etapele lucrării
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[44px] lg:leading-[1.1]">
              Cum executăm {service.shortTitle.toLowerCase()}
            </h2>
          </div>

          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.steps.map((step, i) => (
              <li
                key={step.title}
                className="card-elev card-elev-hover rounded-2xl border border-border bg-card p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl font-bold text-primary">
                    0{i + 1}
                  </span>
                  <span className="h-px flex-1 ml-4 bg-border" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Local SEO / Areas */}
      <section className="relative bg-card py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <span className="h-px w-8 bg-accent/50" />
                Zone deservite
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[44px] lg:leading-[1.05]">
                {service.shortTitle} în județele în care lucrăm
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground text-pretty">
                Executăm {service.title.toLowerCase()} în toate localitățile din București,
                Ilfov, Giurgiu, Constanța și Călărași. Echipele noastre sunt locale și ajung rapid
                la tine — fără costuri suplimentare de deplasare.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {siteConfig.areas.map((a) => (
                <Link
                  key={a.slug}
                  href={`/zone/${a.slug}`}
                  className="group card-elev card-elev-hover flex items-start gap-4 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary/30"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold">
                      {service.shortTitle} în {a.name}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {a.cities.slice(0, 4).join(" · ")}
                    </p>
                  </div>
                  <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <span className="h-px w-8 bg-accent/50" />
                Servicii conexe
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[44px] lg:leading-[1.05]">
                Poate îți mai trebuie și
              </h2>
            </div>
            <Link
              href="/#servicii"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              Vezi toate serviciile
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => {
              const RIcon = getServiceIcon(r.icon)
              return (
                <Link
                  key={r.slug}
                  href={`/servicii/${r.slug}`}
                  className="group card-elev card-elev-hover flex flex-col justify-between rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/30"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <RIcon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-6 font-display text-lg font-semibold leading-tight">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {r.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-primary">
                    Vezi serviciu
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA block */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactBlock
            variant="dark"
            title={`Cere o ofertă pentru ${service.shortTitle.toLowerCase()}`}
            subtitle="Răspundem în maxim 2 ore. Îți facem deviz gratuit, fără obligații."
          />
        </div>
      </section>
    </>
  )
}
