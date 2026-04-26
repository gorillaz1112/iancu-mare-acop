import Script from "next/script"
import { getGoogleConsentState, defaultCookieConsent } from "@/lib/cookie-consent"

const deniedConsent = getGoogleConsentState(defaultCookieConsent)

export function GoogleConsentMode() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
  const directGtagId = gaId ?? googleAdsId

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

      {gtmId && (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
      )}

      {!gtmId && directGtagId && (
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
              ${gaId ? `gtag('config', '${gaId}');` : ""}
              ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ""}
            `}
          </Script>
        </>
      )}
    </>
  )
}
