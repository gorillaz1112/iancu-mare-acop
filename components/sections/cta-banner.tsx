import { Phone, Siren, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { siteConfig } from "@/lib/site-config"

export function CtaBanner() {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-primary p-8 text-primary-foreground sm:p-14">
          {/* soft depth accents */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -bottom-24 h-72 w-72 rounded-full bg-black/15 blur-3xl"
          />

          {/* top hairline */}
          <div aria-hidden className="absolute inset-x-10 top-0 h-px bg-white/25" />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-foreground px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-background">
                <Siren className="h-3.5 w-3.5" />
                Intervenții 24/7
              </div>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-balance sm:text-[44px] sm:leading-[1.08]">
                Ai infiltrații sau o urgență?{" "}
                <span className="italic font-medium text-foreground">Suntem pe drum.</span>
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/85 text-pretty">
                Sună acum — trimitem echipa cea mai apropiată în maxim 2 ore pentru
                București, Ilfov și zonele adiacente.
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="flex flex-col gap-3">
                <Button
                  asChild
                  size="lg"
                  className="group h-14 justify-between gap-3 rounded-2xl bg-foreground px-5 text-base font-semibold text-background hover:bg-foreground/90"
                >
                  <a href={siteConfig.phoneHref}>
                    <span className="flex items-center gap-3">
                      <Phone className="h-5 w-5" />
                      {siteConfig.phoneDisplay}
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group h-14 justify-between gap-3 rounded-2xl border-white/30 bg-transparent px-5 text-base font-semibold text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
                >
                  <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center gap-3">
                      <WhatsAppIcon className="h-5 w-5" />
                      Scrie pe WhatsApp
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
