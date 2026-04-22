import { siteConfig } from "@/lib/site-config"

export function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: siteConfig.brand,
    telephone: "+40" + siteConfig.phone.replace(/^0/, ""),
    email: siteConfig.email,
    url: "https://acoperis-expert.ro",
    areaServed: siteConfig.areas.map((a) => ({
      "@type": "AdministrativeArea",
      name: a.name,
    })),
    address: {
      "@type": "PostalAddress",
      addressCountry: "RO",
      addressRegion: "București",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "380",
    },
  }

  const services = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: siteConfig.services.map((s, i) => ({
      "@type": "Service",
      position: i + 1,
      name: s.title,
      description: s.description,
      provider: { "@type": "RoofingContractor", name: siteConfig.brand },
      areaServed: siteConfig.areas.map((a) => a.name),
    })),
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "În cât timp primesc devizul?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "În majoritatea cazurilor trimitem devizul detaliat în 24 de ore de la vizita pe teren.",
        },
      },
      {
        "@type": "Question",
        name: "Oferiți garanție pentru lucrări?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Da, garanție scrisă până la 20 de ani pe materiale și până la 10 ani pe manoperă.",
        },
      },
      {
        "@type": "Question",
        name: "Puteți interveni urgent la infiltrații?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Da, avem echipă de intervenții urgente disponibilă 24/7. Sunați la ${siteConfig.phoneDisplay}.`,
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  )
}
