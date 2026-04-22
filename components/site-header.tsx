"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Phone, HardHat, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/#servicii", label: "Servicii" },
  { href: "/#zone", label: "Zone deservite" },
  { href: "/#despre", label: "Despre noi" },
  { href: "/#proces", label: "Cum lucrăm" },
  { href: "/#faq", label: "Întrebări" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background,box-shadow,border] duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70 shadow-[0_1px_0_0_var(--border)]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <HardHat className="h-5 w-5" aria-hidden />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-bold tracking-tight">
              {siteConfig.brand}
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Servicii acoperișuri
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Navigație principală">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-foreground transition hover:text-primary sm:flex"
          >
            <Phone className="h-4 w-4 text-primary" aria-hidden />
            {siteConfig.phoneDisplay}
          </a>
          <Button
            asChild
            size="sm"
            className="hidden h-10 rounded-full px-5 font-semibold sm:inline-flex"
          >
            <a href={siteConfig.phoneHref}>Sună acum</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition hover:bg-muted lg:hidden"
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="Navigație mobilă"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.phoneHref}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
