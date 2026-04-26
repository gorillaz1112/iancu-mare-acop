import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `Politica de confidențialitate | ${siteConfig.brand}`,
  description:
    "Politica de confidențialitate Acoperiș Plus: date prelucrate, temeiuri GDPR, drepturile persoanelor vizate și informații despre Google Analytics, Google Ads și Tag Manager.",
  alternates: { canonical: "/politica-de-confidentialitate" },
}

const companyPlaceholders = [
  "Denumire operator: [DENUMIRE FIRMĂ / PFA]",
  "CUI/CIF: [CUI]",
  "Nr. Registrul Comerțului: [J/..../..../....]",
  "Sediu social: [ADRESĂ COMPLETĂ]",
  `Email contact protecția datelor: ${siteConfig.email}`,
  `Telefon: ${siteConfig.phoneDisplay}`,
]

const rights = [
  "dreptul de acces la datele personale",
  "dreptul la rectificare sau ștergere",
  "dreptul la restricționarea prelucrării",
  "dreptul la opoziție față de prelucrare",
  "dreptul la portabilitatea datelor, când este aplicabil",
  "dreptul de a retrage consimțământul pentru cookie-uri opționale",
  "dreptul de a depune plângere la ANSPDCP",
]

export default function PoliticaDeConfidentialitatePage() {
  return (
    <article className="bg-background">
      <section className="bg-editorial pt-16 sm:pt-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Politica de confidențialitate" }]} />
          <div className="mt-8 pb-14 sm:pb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary/60" />
              GDPR · Date personale
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              Politica de confidențialitate
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground">
              Această pagină explică modul în care {siteConfig.brand} prelucrează datele
              personale ale vizitatorilor site-ului {siteConfig.url}, inclusiv datele
              generate de folosirea Google Tag Manager, Google Analytics 4 și Google Ads.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-4xl gap-8 px-4 text-[15px] leading-7 text-muted-foreground sm:px-6 lg:px-8">
          <LegalSection title="1. Operatorul datelor">
            <p>
              Operatorul datelor este entitatea care administrează site-ul {siteConfig.url}.
              Înainte de publicarea finală, completați aceste câmpuri cu datele exacte ale
              firmei:
            </p>
            <ul className="mt-4 grid gap-2 rounded-2xl border border-border bg-card p-5 text-foreground">
              {companyPlaceholders.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </LegalSection>

          <LegalSection title="2. Ce date putem prelucra">
            <ul className="grid gap-3">
              <li>
                Date furnizate direct prin apel telefonic, email sau WhatsApp: nume, număr de
                telefon, adresă de email, localitate, detalii despre lucrare și conținutul
                mesajului.
              </li>
              <li>
                Date tehnice necesare funcționării site-ului: adresă IP, tip browser, sistem de
                operare, pagini accesate, ora accesării și jurnale de securitate.
              </li>
              <li>
                Date de analiză și marketing, doar după consimțământ: identificatori cookie,
                evenimente de conversie, sursă campanie, pagini vizitate și interacțiuni cu
                anunțurile Google.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="3. Scopuri și temeiuri GDPR">
            <ul className="grid gap-3">
              <li>
                Răspuns la solicitări și programări: demersuri precontractuale sau interes
                legitim, în funcție de context.
              </li>
              <li>
                Administrarea, securitatea și funcționarea site-ului: interes legitim.
              </li>
              <li>
                Măsurarea traficului, conversiilor și performanței campaniilor: consimțământul
                vizitatorului pentru cookie-uri de analiză și marketing.
              </li>
              <li>
                Îndeplinirea obligațiilor legale sau apărarea drepturilor: obligație legală sau
                interes legitim.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="4. Google Analytics, Google Ads și Tag Manager">
            <p>
              Site-ul este pregătit pentru Google Tag Manager, Google Analytics 4 și Google Ads.
              Aceste servicii pot ajuta la măsurarea traficului, optimizarea campaniilor,
              urmărirea conversiilor și remarketing. Cookie-urile opționale sunt configurate cu
              Google Consent Mode v2 și sunt refuzate implicit până când vizitatorul alege.
            </p>
            <p className="mt-4">
              Furnizorii pot prelucra date în Spațiul Economic European sau în alte state, pe
              baza mecanismelor legale disponibile, cum ar fi clauzele contractuale standard și
              cadrele de transfer recunoscute. Detalii suplimentare se găsesc în politicile
              Google privind confidențialitatea și termenii de prelucrare.
            </p>
          </LegalSection>

          <LegalSection title="5. Durata de păstrare">
            <p>
              Datele din comunicări se păstrează cât este necesar pentru gestionarea solicitării,
              ofertării, executării lucrării și apărării drepturilor. Datele de analiză și
              marketing respectă perioadele configurate în platformele Google și preferințele de
              consimțământ ale vizitatorului. Completați aici retențiile exacte după configurarea
              conturilor Google.
            </p>
          </LegalSection>

          <LegalSection title="6. Cui putem transmite datele">
            <p>
              Datele pot fi accesate de furnizori de găzduire, mentenanță web, email, telefonie,
              contabilitate, consultanță juridică, platforme Google și autorități publice, doar
              în măsura necesară scopurilor de mai sus.
            </p>
          </LegalSection>

          <LegalSection title="7. Drepturile tale">
            <p>Conform GDPR, poți solicita:</p>
            <ul className="mt-4 grid gap-2">
              {rights.map((right) => (
                <li key={right} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{right}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Pentru exercitarea drepturilor, trimite un mesaj la{" "}
              <a className="font-medium text-primary underline-offset-4 hover:underline" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              . Dacă nu ești mulțumit de răspuns, poți contacta Autoritatea Națională de
              Supraveghere a Prelucrării Datelor cu Caracter Personal la{" "}
              <a
                className="font-medium text-primary underline-offset-4 hover:underline"
                href="https://www.dataprotection.ro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                dataprotection.ro
              </a>
              .
            </p>
          </LegalSection>

          <LegalSection title="8. Cookie-uri și retragerea consimțământului">
            <p>
              Poți accepta, refuza sau personaliza cookie-urile opționale din bara de consimțământ.
              Consimțământul poate fi modificat ulterior din pagina{" "}
              <Link className="font-medium text-primary underline-offset-4 hover:underline" href="/politica-cookies">
                Politica cookies
              </Link>
              .
            </p>
          </LegalSection>

          <p className="rounded-2xl border border-border bg-muted/40 p-5 text-sm">
            Ultima actualizare: [COMPLETAȚI DATA]. Această politică trebuie validată cu datele
            reale ale operatorului și cu setările efective din Google Tag Manager, Google
            Analytics și Google Ads.
          </p>
        </div>
      </section>
    </article>
  )
}

function LegalSection({
  title,
  children,
}: Readonly<{
  title: string
  children: React.ReactNode
}>) {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}
