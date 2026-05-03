import type { Metadata, Viewport } from "next"
import { Geist, Manrope } from "next/font/google"
import { siteConfig } from "@/lib/site-config"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingCta } from "@/components/floating-cta"
import { StructuredData } from "@/components/structured-data"
import { CookieConsentBanner } from "@/components/cookie-consent"
import { GoogleConsentMode, GoogleTagManagerNoScript } from "@/components/google-consent-mode"
import { googleVerificationToken } from "@/lib/google-tags"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brand} — Montaj, reparații și înlocuire acoperișuri în București, Ilfov, Giurgiu, Constanța și Călărași`,
    template: `%s | ${siteConfig.brand}`,
  },
  description: `${siteConfig.tagline} Montaj, reparații, înlocuire, hidroizolații și termoizolații. Deviz gratuit. Sună ${siteConfig.phoneDisplay}. acoperis-nova.ro`,
  keywords: [
    "Acoperiș Nova",
    "acoperis nova",
    "acoperis-nova.ro",
    "acoperișuri București",
    "reparații acoperiș București",
    "montaj acoperiș Ilfov",
    "înlocuire acoperiș",
    "hidroizolații",
    "termoizolații acoperiș",
    "șarpante lemn",
    "țiglă metalică",
    "tablă Lindab",
    "acoperișuri Giurgiu",
    "acoperișuri Constanța",
    "acoperișuri Călărași",
    "firmă acoperișuri",
    "intervenții urgente acoperiș",
  ],
  authors: [{ name: siteConfig.brand }],
  creator: siteConfig.brand,
  verification: {
    google: googleVerificationToken,
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: siteConfig.url,
    siteName: siteConfig.brand,
    title: `${siteConfig.brand} — ${siteConfig.tagline}`,
    description: `Montaj, reparații și înlocuire acoperișuri în București, Ilfov, Giurgiu, Constanța și Călărași. Deviz gratuit în 24h. ${siteConfig.phoneDisplay}.`,
  },
  robots: { index: true, follow: true },
  generator: "v0.app",
}

export const viewport: Viewport = {
  /* Cool ivory aligned with --background */
  themeColor: "#f2f5fa",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" className={`${geist.variable} ${manrope.variable} bg-background`}>
      <body className="font-sans bg-background text-foreground">
        <GoogleTagManagerNoScript />
        <GoogleConsentMode />
        <StructuredData />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <FloatingCta />
        <CookieConsentBanner />
      </body>
    </html>
  )
}
