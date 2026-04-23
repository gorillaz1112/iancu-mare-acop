import type { Metadata } from "next";
import { ProjectSection } from "@/components/lucrari/project-section";
import { Phone } from "lucide-react";
import { GTMButton } from "@/components/ui/gtm-button";
import { siteConfig } from "@/lib/site-config";

const lucrariUrl = `${siteConfig.url}/lucrari`;

export const metadata: Metadata = {
  title: `Lucrări Realizate — portofoliu acoperișuri | ${siteConfig.brand}`,
  description: `Proiecte de montaj și reparații acoperișuri (exemple), cu galerie înainte, pe parcurs și rezultat final. ${siteConfig.brand}.`,
  keywords: [
    "lucrări acoperișuri",
    "portofoliu acoperișuri",
    "proiecte finalizate",
    "galerie foto acoperișuri",
    "exemple lucrări acoperiș",
  ],
  openGraph: {
    title: `Lucrări Realizate — portofoliu | ${siteConfig.brand}`,
    description:
      "Galerie foto: înainte, pe parcurs și după, pentru proiecte reale de acoperișuri.",
    url: lucrariUrl,
    type: "website",
  },
  alternates: {
    canonical: lucrariUrl,
  },
};

const projects = [
  {
    title: "Renovare acoperiș 640 m² – Sistem complet țiglă metalică",
    description:
      "Am realizat renovarea completă a unui acoperiș de 640 m², prin decopertarea integrală a învelitorii existente și instalarea unui sistem modern din țiglă metalică, inclusiv toate accesoriile tehnice necesare. Lucrarea a inclus: pregătirea și repararea structurii de lemn; montarea foliei anticondens și a sistemului de șipci și contrașipci pentru ventilație optimă; instalarea țiglei metalice și a elementelor de finisaj; implementarea sistemului pluvial complet pentru scurgerea apei.",
    location: "Timișoara, Zona Aradului",
    duration: "14 zile lucrătoare",

    images: [
      {
        src: "/lucrari/reno-acop-31.jpeg",
        alt: "Acoperiș vechi deteriorat",
        label: "Înainte",
      },
      {
        src: "/lucrari/reno-acop-32.jpeg",
        alt: "Demontare acoperiș",
        label: "Pe Parcursul Lucrării",
      },
      {
        src: "/lucrari/reno-acop-33.jpeg",
        alt: "Montaj izolație",
        label: "Rezultat final",
      },
    ],
  },
  {
    title: "Renovare acoperiș 40 m² – Montaj tablă peste șindrilă bituminoasă",
    description:
      "Am modernizat un acoperiș de 40 m² prin montarea unei învelitori noi din tablă profilată peste șindrila bituminoasă existentă, fără demontare. Lucrarea a inclus instalarea foliei anticondens, montarea șipcilor și contrașipcilor pentru ventilare, apoi montarea de tablă și a accesoriilor.",
    location: "Lugoj, Timiș",
    duration: "6 zile lucrătoare",

    images: [
      {
        src: "/lucrari/reno-acop-02.jpeg",
        alt: "Pod neutilizat",
        label: "Înainte",
      },
      {
        src: "/lucrari/reno-acop-01.jpeg",
        alt: "Structură șarpantă",
        label: "Pe Parcursul Lucrării",
      },
      {
        src: "/lucrari/reno-acop-03.jpeg",
        alt: "Montaj ferestre Velux",
        label: "Rezultat Final",
      },
    ],
  },
  {
    title:
      "Renovare acoperiș 372 m² – Decopertare țiglă veche și montaj țiglă metalică",
    description:
      "Am realizat renovarea completă a unui acoperiș de 372 m², prin decopertarea întregii învelitori din țiglă ceramică veche și instalarea unui nou sistem de acoperiș din țiglă metalică, împreună cu toate accesoriile necesare. Lucrarea a inclus: decopertarea completă a țiglei vechi și curățarea suportului; repararea și pregătirea structurii din lemn acolo unde a fost necesar; montarea foliei anticondens, șipci și contrașipci pentru o ventilație corectă; instalarea țiglei metalice și a tuturor elementelor de finisaj; montarea a 4 ferestre de mansardă Velux cu rame de etanșare; construirea și îmbrăcarea unui horn în tablă fălțuită, pentru protecție și durabilitate; instalarea sistemului pluvial complet: jgheaburi, burlane și accesorii.",
    location: "Arad, Zona Centrală",
    duration: "12 zile lucrătoare",

    images: [
      {
        src: "/lucrari/reno-acop-21.jpeg",
        alt: "Daune furtună",
        label: "Înainte",
      },
      {
        src: "/lucrari/reno-acop-20.jpeg",
        alt: "Securizare zonă",
        label: "Pe Parcursul Lucrării",
      },
      {
        src: "/lucrari/reno-acop-22.jpeg",
        alt: "Acoperiș reparat",
        label: "Rezultat Final",
      },
    ],
  },
  {
    title: "Sistem de jgheaburi 25 metri",
    description:
      "Am realizat renovarea completă a unui sistem de jgheaburi de 25 metri, incluzând înlocuirea jgheaburilor și burlanelor, fixarea accesoriilor și etanșarea completă a îmbinărilor.",
    location: "Timișoara, Zona Girocului",
    duration: "2 zile lucrătoare",

    images: [
      {
        src: "/lucrari/sist-jgheab1.jpeg",
        alt: "Structură metalică hală",
        label: "Înainte",
      },

      {
        src: "/lucrari/sists-jgheab2.jpeg",
        alt: "Hală finalizată",
        label: "Rezultat Final",
      },
    ],
  },
  {
    title:
      "Terasă 15 m² – Structură cu policarbonat și sistem pluvial din aluminiu",
    description:
      "Am realizat o terasă de 15 m², lipită de peretele casei, cu structură completă din grinzi și acoperiș din policarbonat transparent, asigurând atât protecție, cât și luminozitate naturală. Lucrarea a inclus instalarea unui sistem pluvial din aluminiu pentru colectarea eficientă a apei de ploaie. Rezultat: o terasă modernă, rezistentă și durabilă, cu întreținere minimă și protecție completă împotriva intemperiilor.",
    location: "Timișoara, Zona Dumbrăvița",
    duration: "4 zile lucrătoare",

    images: [
      {
        src: "/lucrari/terasa1.jpeg",
        alt: "Consolidare structură",
        label: "Pe Parcursul Lucrării",
      },

      {
        src: "/lucrari/terasa2.jpeg",
        alt: "Casă renovată",
        label: "Rezultat Final",
      },
    ],
  },
  {
    title: "Terasă și carport 65 m² – Structură completă cu acoperiș protejat",
    description:
      "Am realizat o terasă și carport de 65 m², cu structură completă din grinzi, acoperiș din tablă și placare cu lambriu, asigurând rezistență, durabilitate și aspect estetic uniform. Lucrarea a inclus și sistem pluvial complet, pentru colectarea eficientă a apei de ploaie.Rezultat: spațiu funcțional și protejat, durabil, estetic și cu întreținere minimă. ",
    location: "Deva, Zona Industrială",
    duration: "9 zile lucrătoare",

    images: [
      {
        src: "/lucrari/carport01.jpeg",
        alt: "Clădiri fără sistem pluvial",
        label: "Pe Parcursul Lucrării",
      },
      {
        src: "/lucrari/carport02.jpeg",
        alt: "Montaj jgheaburi",
        label: "Pe Parcursul Lucrării",
      },
      {
        src: "/lucrari/carport03.jpeg",
        alt: "Conectare burlane",
        label: "Pe Parcursul Lucrării",
      },
      {
        src: "/lucrari/carport1.jpeg",
        alt: "Sistem finalizat",
        label: "Rezultat Final",
      },
      {
        src: "/lucrari/carport2.jpeg",
        alt: "Sistem finalizat",
        label: "Rezultat Final",
      },
    ],
  },
  {
    title: "Fronton acoperit – Tablă peste lambriu vechi",
    description:
      "Am renovat un fronton existent, montând tablă direct peste lambriul vechi, cu protecție inclusiv pentru laterale. Lucrarea asigură durabilitate sporită, etanșeitate și un aspect estetic uniform. ",
    location: "Reșița, Zona Centrală",
    duration: "3 zile lucrătoare",

    images: [
      {
        src: "/lucrari/fronton-1.jpeg",
        alt: "Clădiri fără sistem pluvial",
        label: "Pe Parcursul Lucrării",
      },
      {
        src: "/lucrari/fronton-2.jpeg",
        alt: "Montaj jgheaburi",
        label: "Pe Parcursul Lucrării",
      },

      {
        src: "/lucrari/fronton-3.jpeg",
        alt: "Sistem finalizat",
        label: "Rezultat Final",
      },
      {
        src: "/lucrari/fronton-4.jpeg",
        alt: "Sistem finalizat",
        label: "Rezultat Final",
      },
    ],
  },
];

export default function LucrariPage() {
  return (
    <>
      {/* Hero — same editorial light base + primary accents as the homepage */}
      <section className="relative overflow-hidden bg-editorial pt-32 pb-20">
        <div className="pointer-events-none absolute right-[10%] top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Portofoliu
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Lucrările{" "}
            <span className="text-primary">Noastre</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg text-muted-foreground md:text-xl">
            Fiecare proiect spune o poveste de transformare. Explorați galeria
            noastră de lucrări finalizate și descoperiți cum am ajutat clienții
            să își protejeze casele cu acoperișuri de calitate superioară.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="rounded-2xl border border-border/80 bg-card/90 px-6 py-3 shadow-sm backdrop-blur">
              <p className="font-display text-2xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">Proiecte finalizate</p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-card/90 px-6 py-3 shadow-sm backdrop-blur">
              <p className="font-display text-2xl font-bold text-foreground">15+</p>
              <p className="text-sm text-muted-foreground">Ani experiență</p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-card/90 px-6 py-3 shadow-sm backdrop-blur">
              <p className="font-display text-2xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Clienți mulțumiți</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro copy — card on warm background */}
      <section className="border-y border-border/60 bg-card py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            Transparență și <span className="text-primary">Calitate</span>{" "}
            dovedită
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Credem în transparență totală. De aceea, documentăm fiecare proiect
            de la început până la final. În galeria de mai jos veți vedea
            imagini{" "}
            <strong className="text-foreground">
              înainte de intervenție, pe parcursul lucrării
            </strong>{" "}
            și <strong className="text-foreground">rezultatul final</strong>.
            Navigați prin imagini folosind săgețile sau glisând pe dispozitivele
            mobile.
          </p>
        </div>
      </section>

      {/* Project rows — rest on muted editorial ground */}
      <section className="bg-muted/35 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={index > 0 ? "border-t border-border pt-16" : ""}
              >
                <ProjectSection
                  title={project.title}
                  description={project.description}
                  images={project.images}
                  reversed={index % 2 !== 0}
                  location={project.location}
                  duration={project.duration}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — dark ink bar + primary highlight (aligns with premium palette) */}
      <section className="bg-foreground py-20 text-background">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold text-balance text-background md:text-4xl">
            Vreți un acoperiș ca în{" "}
            <span className="text-primary">imaginile de sus</span>?
          </h2>
          <p className="mt-6 text-lg text-background/80">
            Contactați-ne astăzi pentru o evaluare gratuită. Vă garantăm aceeași
            calitate și atenție la detalii pentru proiectul dumneavoastră.
          </p>
          <GTMButton
            gtmLabel="lucrari_cta_call"
            gtmCategory="Portfolio CTA"
            className="mt-8 h-14 gap-2 rounded-full bg-primary px-10 text-base font-semibold text-primary-foreground shadow-[0_14px_36px_-14px_oklch(0.53_0.22_18_/_0.55)] transition-transform hover:scale-[1.02] hover:bg-primary/90"
            asChild
          >
            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center gap-3"
            >
              <Phone className="h-5 w-5" />
              Sună {siteConfig.phoneDisplay}
            </a>
          </GTMButton>
        </div>
      </section>
    </>
  );
}
