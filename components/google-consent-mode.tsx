import Script from "next/script"
import { getGoogleConsentState, defaultCookieConsent } from "@/lib/cookie-consent"
import { googleAdsId, googleAnalyticsId, googleTagManagerId } from "@/lib/google-tags"

const deniedConsent = getGoogleConsentState(defaultCookieConsent)

export function GoogleConsentMode() {
  const directGtagId = googleAnalyticsId ?? googleAdsId

  if (process.env.NODE_ENV !== "production") return null

  return (
    <>
      <Script id="google-consent-defaults" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: '${deniedConsent.analytics_storage}',
            ad_storage: '${deniedConsent.ad_storage}',
            ad_user_data: '${deniedConsent.ad_user_data}',
            ad_personalization: '${deniedConsent.ad_personalization}',
            functionality_storage: '${deniedConsent.functionality_storage}',
            security_storage: '${deniedConsent.security_storage}',
            wait_for_update: 500
          });
        `}
      </Script>

      {googleTagManagerId && (
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${googleTagManagerId}');
          `}
        </Script>
      )}

      {!googleTagManagerId && directGtagId && (
        <>
          <Script
            id="google-gtag-library"
            src={`https://www.googletagmanager.com/gtag/js?id=${directGtagId}`}
            strategy="afterInteractive"
          />
          <Script id="google-gtag-config" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              ${googleAnalyticsId ? `gtag('config', '${googleAnalyticsId}');` : ""}
              ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ""}
            `}
          </Script>
        </>
      )}
    </>
  )
}

export function GoogleTagManagerNoScript() {
  if (process.env.NODE_ENV !== "production" || !googleTagManagerId) return null

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
        height="0"
        width="0"
        title="Google Tag Manager"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  )
}
