import Link from "next/link"
import { HardHat, Phone, Mail } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { siteConfig } from "@/lib/site-config"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <HardHat className="h-5 w-5" />
              </span>
              <span className="font-display text-base font-bold">{siteConfig.brand}</span>
            </Link>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Firmă specializată în acoperișuri, cu echipe proprii și experiență de peste 15 ani.
              Deservim București, Ilfov, Giurgiu, Constanța și Călărași cu același standard ridicat.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-3 text-sm font-medium transition hover:text-primary"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </span>
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm font-medium transition hover:text-primary"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]/15 text-[#128C43]">
                  <WhatsAppIcon className="h-4 w-4" />
                </span>
                WhatsApp — răspuns rapid
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-3 text-sm font-medium transition hover:text-primary"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Mail className="h-4 w-4" />
                </span>
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Servicii
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {siteConfig.services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicii/${s.slug}`} className="transition hover:text-primary">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Zone deservite
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {siteConfig.areas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/zone/${a.slug}`} className="transition hover:text-primary">
                    Acoperișuri în {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick links — same line wraps cleanly on small screens, full width on desktop */}
        <nav
          className="mt-10 border-t border-border/80 pt-10 lg:mt-12"
          aria-label="Link-uri rapide"
        >
          <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Navigare
          </h3>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-6">
            <li>
              <Link
                href="/"
                className="text-sm text-muted-foreground transition hover:text-primary"
              >
                Acasă
              </Link>
            </li>
            <li>
              <Link
                href="/lucrari"
                className="text-sm text-muted-foreground transition hover:text-primary"
              >
                Lucrări
              </Link>
            </li>
            <li>
              <Link
                href="/servicii"
                className="text-sm text-muted-foreground transition hover:text-primary"
              >
                Toate serviciile
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} {siteConfig.brand}. Toate drepturile rezervate.</p>
          <p>Firmă acoperișuri · București · Ilfov · Giurgiu · Constanța · Călărași</p>
        </div>
      </div>
    </footer>
  )
}
