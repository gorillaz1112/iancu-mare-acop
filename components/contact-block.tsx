import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { siteConfig } from "@/lib/site-config"

export function ContactBlock({
  title = "Pregătit să începem?",
  subtitle = "Răspundem în maxim 2 ore — sună sau scrie pe WhatsApp pentru un deviz gratuit.",
  variant = "light",
}: {
  title?: string
  subtitle?: string
  variant?: "light" | "dark"
}) {
  const isDark = variant === "dark"
  return (
    <div
      className={
        "card-elev relative overflow-hidden rounded-3xl border p-8 sm:p-12 " +
        (isDark
          ? "border-transparent bg-[oklch(0.38_0.12_15)] text-primary-foreground"
          : "border-border bg-card")
      }
    >
      {isDark && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -bottom-24 h-72 w-72 rounded-full bg-[oklch(0.55_0.18_18)] opacity-40 blur-3xl"
          />
        </>
      )}
      <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h3 className="font-display text-2xl font-bold tracking-tight text-balance sm:text-3xl">
            {title}
          </h3>
          <p
            className={
              "mt-3 text-[15px] leading-relaxed text-pretty " +
              (isDark ? "text-white/85" : "text-muted-foreground")
            }
          >
            {subtitle}
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
          <Button
            asChild
            size="lg"
            className={
              "h-12 gap-2 rounded-full px-6 font-semibold " +
              (isDark ? "bg-white text-primary hover:bg-white/90" : "")
            }
          >
            <a href={siteConfig.phoneHref}>
              <Phone className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className={
              "h-12 gap-2 rounded-full px-6 font-semibold " +
              (isDark
                ? "border-white/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
                : "border-border bg-background")
            }
          >
            <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className={"h-4 w-4 " + (isDark ? "" : "text-[#128C43]")} />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
