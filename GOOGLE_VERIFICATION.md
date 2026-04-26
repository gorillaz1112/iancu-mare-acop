# Google Search Console și tag-uri Google

## Verificare principală: Domain property

Pentru proprietatea `acoperis-plus.ro` din Google Search Console, folosește verificarea DNS. Aceasta acoperă toate variantele domeniului: `http`, `https`, `www` și non-`www`.

1. În Google Search Console, adaugă proprietatea de tip **Domain**: `acoperis-plus.ro`.
2. Alege verificarea prin **DNS TXT record**.
3. Copiază valoarea exactă generată de Google, de forma:
   `google-site-verification=...`
4. În Vercel, mergi la domeniul `acoperis-plus.ro` și adaugă un TXT record:
   - Name/Host: `@` sau root/blank, în funcție de interfața Vercel.
   - Value: valoarea exactă copiată din Search Console.
   - TTL: default.
5. După propagarea DNS, revino în Search Console și apasă **Verify**.

## Verificări și tag-uri deja pregătite în cod

- HTML verification fallback:
  `google-site-verification=zr1nx45_1tlUsE7wDRpXHZgc0kueBTnvvh7u3yJA1G0`
- Google Tag Manager:
  `GTM-PMVVBHST`
- Sitemap de trimis în Search Console:
  `https://www.acoperis-plus.ro/sitemap.xml`
- Politica de confidențialitate pentru Google Ads:
  `https://www.acoperis-plus.ro/politica-de-confidentialitate`

## Variabile Vercel recomandate

Setează aceste Environment Variables în Vercel, pentru Production și Preview unde este cazul:

```env
NEXT_PUBLIC_GTM_ID=GTM-PMVVBHST
NEXT_PUBLIC_GA_ID=G-...
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-...
```

`NEXT_PUBLIC_GA_ID` și `NEXT_PUBLIC_GOOGLE_ADS_ID` se completează după ce conturile GA4 și Google Ads sunt configurate. Nu folosi Universal Analytics, deoarece versiunea legacy a fost închisă.
