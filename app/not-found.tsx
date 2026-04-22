import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Phone } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-editorial">
      <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Eroare 404
        </span>
        <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-balance sm:text-6xl">
          Pagina nu a fost găsită.
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
          Se pare că link-ul este greșit sau pagina a fost mutată. Te poți întoarce pe
          pagina principală sau să ne suni direct.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-12 gap-2 rounded-full px-6 font-semibold">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Înapoi acasă
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 gap-2 rounded-full border-border bg-card px-6 font-semibold"
          >
            <a href={siteConfig.phoneHref}>
              <Phone className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
