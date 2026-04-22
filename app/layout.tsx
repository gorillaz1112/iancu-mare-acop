import type { Metadata, Viewport } from "next"
import { Geist, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { siteConfig } from "@/lib/site-config"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingCta } from "@/components/floating-cta"
import { StructuredData } from "@/components/structured-data"
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
    default:
      "Acoperiș Expert — Montaj, Reparații și Înlocuire Acoperișuri în București, Ilfov, Giurgiu, Constanța și Călărași",
    template: "%s | Acoperiș Expert",
  },
  description:
    "Firmă specializată în acoperișuri: montaj, reparații, înlocuire, hidroizolații, termoizolații, șarpante, jgheaburi, tablă și țiglă. Deviz gratuit. Garanție scrisă. Sună 0731 527 577.",
  keywords: [
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
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: siteConfig.url,
    siteName: siteConfig.brand,
    title: "Acoperiș Expert — Acoperișuri executate impecabil. Garantat.",
    description:
      "Montaj, reparații și înlocuire acoperișuri în București, Ilfov, Giurgiu, Constanța și Călărași. Deviz gratuit în 24h.",
  },
  robots: { index: true, follow: true },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#F8F5F2",
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
        <StructuredData />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <FloatingCta />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
