import { Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { siteConfig } from "@/lib/site-config"

export function FloatingCta() {
  return (
    <div
      className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
      role="complementary"
      aria-label="Contact rapid"
    >
      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Scrie-ne pe WhatsApp"
        className="group flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3.5 text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.55)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_14px_36px_-8px_rgba(37,211,102,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <WhatsAppIcon className="h-6 w-6" />
        <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
      </a>

      <a
        href={siteConfig.phoneHref}
        aria-label={`Sună la ${siteConfig.phoneDisplay}`}
        className="group flex items-center gap-3 rounded-full bg-primary px-5 py-3.5 text-primary-foreground shadow-[0_10px_30px_-8px_oklch(0.38_0.12_15_/_0.55)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_14px_36px_-8px_oklch(0.38_0.12_15_/_0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <Phone className="h-5 w-5" />
        <span className="hidden text-sm font-semibold sm:inline">
          {siteConfig.phoneDisplay}
        </span>
      </a>
    </div>
  )
}
