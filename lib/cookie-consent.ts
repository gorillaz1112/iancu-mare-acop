export const COOKIE_CONSENT_VERSION = 1
export const COOKIE_CONSENT_STORAGE_KEY = "acoperis-nova-cookie-consent"
export const COOKIE_SETTINGS_EVENT = "acoperis-nova:open-cookie-settings"

export type ConsentCategory = "necessary" | "analytics" | "marketing"

export type CookieConsent = {
  version: number
  necessary: true
  analytics: boolean
  marketing: boolean
  updatedAt: string
}

export const defaultCookieConsent: CookieConsent = {
  version: COOKIE_CONSENT_VERSION,
  necessary: true,
  analytics: false,
  marketing: false,
  updatedAt: "",
}

export function buildCookieConsent(
  preferences: Pick<CookieConsent, "analytics" | "marketing">,
): CookieConsent {
  return {
    ...defaultCookieConsent,
    ...preferences,
    updatedAt: new Date().toISOString(),
  }
}

export function parseStoredCookieConsent(value: string | null): CookieConsent | null {
  if (!value) return null

  try {
    const parsed = JSON.parse(value) as Partial<CookieConsent>
    if (parsed.version !== COOKIE_CONSENT_VERSION) return null

    return {
      version: COOKIE_CONSENT_VERSION,
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : "",
    }
  } catch {
    return null
  }
}

export function getGoogleConsentState(consent: Pick<CookieConsent, "analytics" | "marketing">) {
  const analytics = consent.analytics ? "granted" : "denied"
  const marketing = consent.marketing ? "granted" : "denied"

  return {
    analytics_storage: analytics,
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
    functionality_storage: "granted",
    security_storage: "granted",
  } as const
}
