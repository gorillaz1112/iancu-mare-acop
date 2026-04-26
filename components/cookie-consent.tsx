"use client"

import { useEffect, useState, type ComponentProps } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import {
  COOKIE_CONSENT_STORAGE_KEY,
  COOKIE_SETTINGS_EVENT,
  type CookieConsent,
  buildCookieConsent,
  defaultCookieConsent,
  getGoogleConsentState,
  parseStoredCookieConsent,
} from "@/lib/cookie-consent"

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const optionalCategories = [
  {
    id: "analytics",
    label: "Analiză",
    description:
      "Permite Google Analytics 4 să măsoare traficul și paginile vizitate pentru îmbunătățirea site-ului.",
  },
  {
    id: "marketing",
    label: "Marketing",
    description:
      "Permite Google Ads să măsoare conversiile, să optimizeze campaniile și să folosească remarketing.",
  },
] as const

export function CookieConsentBanner() {
  const [isReady, setIsReady] = useState(false)
  const [storedConsent, setStoredConsent] = useState<CookieConsent | null>(null)
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false)
  const [draftConsent, setDraftConsent] = useState(defaultCookieConsent)

  useEffect(() => {
    const consent = parseStoredCookieConsent(localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY))

    setStoredConsent(consent)
    setDraftConsent(consent ?? defaultCookieConsent)
    setIsReady(true)

    if (consent) {
      updateGoogleConsent(consent)
    }

    const openSettings = () => {
      const latestConsent = parseStoredCookieConsent(localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY))
      setDraftConsent(latestConsent ?? defaultCookieConsent)
      setIsPreferencesOpen(true)
    }

    window.addEventListener(COOKIE_SETTINGS_EVENT, openSettings)
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, openSettings)
  }, [])

  const saveConsent = (preferences: Pick<CookieConsent, "analytics" | "marketing">) => {
    const consent = buildCookieConsent(preferences)

    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(consent))
    setStoredConsent(consent)
    setDraftConsent(consent)
    setIsPreferencesOpen(false)
    updateGoogleConsent(consent)
  }

  if (!isReady) return null

  const shouldShowBanner = !storedConsent

  return (
    <>
      {shouldShowBanner && (
        <section
          aria-label="Preferințe cookie"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-5xl rounded-3xl border border-border bg-background/95 p-4 shadow-[0_20px_70px_-24px_rgba(0,0,0,0.45)] backdrop-blur sm:bottom-6 sm:p-5"
        >
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-display text-lg font-semibold tracking-tight">
                Setări pentru cookie-uri
              </p>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                Folosim cookie-uri necesare pentru funcționarea site-ului. Cu acordul tău,
                putem folosi și Google Analytics 4, Google Ads și remarketing prin Google Tag
                Manager. Poți accepta, respinge sau alege parțial.
              </p>
              <Link
                href="/politica-cookies"
                className="mt-2 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Citește politica privind cookie-urile
              </Link>
            </div>

            <div className="grid gap-2 sm:grid-cols-3 lg:min-w-[430px]">
              <Button variant="outline" onClick={() => saveConsent({ analytics: false, marketing: false })}>
                Respinge opționale
              </Button>
              <Button variant="secondary" onClick={() => setIsPreferencesOpen(true)}>
                Personalizează
              </Button>
              <Button onClick={() => saveConsent({ analytics: true, marketing: true })}>
                Acceptă toate
              </Button>
            </div>
          </div>
        </section>
      )}

      <Dialog open={isPreferencesOpen} onOpenChange={setIsPreferencesOpen}>
        <DialogContent className="max-h-[calc(100vh-2rem)] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Personalizează cookie-urile</DialogTitle>
            <DialogDescription>
              Categoriile opționale sunt dezactivate implicit. Activează doar ce accepți.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-border p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-medium">Necesare</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Esențiale pentru funcționare, securitate și salvarea alegerii tale.
                  </p>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  mereu active
                </span>
              </div>
            </div>

            {optionalCategories.map((category) => (
              <div key={category.id} className="rounded-2xl border border-border p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium">{category.label}</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                  <Switch
                    checked={draftConsent[category.id]}
                    onCheckedChange={(checked) =>
                      setDraftConsent((current) => ({ ...current, [category.id]: checked }))
                    }
                    aria-label={`Activează cookie-uri de ${category.label.toLowerCase()}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <DialogFooter className="gap-2 sm:justify-between">
            <Button variant="outline" onClick={() => saveConsent({ analytics: false, marketing: false })}>
              Respinge opționale
            </Button>
            <div className="grid gap-2 sm:grid-cols-2">
              <Button
                variant="secondary"
                onClick={() =>
                  saveConsent({
                    analytics: draftConsent.analytics,
                    marketing: draftConsent.marketing,
                  })
                }
              >
                Salvează selecția
              </Button>
              <Button onClick={() => saveConsent({ analytics: true, marketing: true })}>
                Acceptă toate
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export function CookieSettingsButton({
  children = "Deschide setările cookie",
  ...props
}: ComponentProps<typeof Button>) {
  return (
    <Button
      type="button"
      onClick={() => window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))}
      {...props}
    >
      {children}
    </Button>
  )
}

function updateGoogleConsent(consent: Pick<CookieConsent, "analytics" | "marketing">) {
  if (!window.gtag) return

  // Keep Consent Mode v2 synchronized with the explicit choice stored in the browser.
  window.gtag("consent", "update", getGoogleConsentState(consent))
}
