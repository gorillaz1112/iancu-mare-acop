import { PhoneCall, ClipboardList, Hammer, BadgeCheck } from "lucide-react"

const steps = [
  {
    icon: PhoneCall,
    title: "Sună sau scrie",
    description: "Ne spui ce ai nevoie. Îți răspundem în maxim 2 ore cu pașii următori.",
  },
  {
    icon: ClipboardList,
    title: "Vizită și ofertă",
    description: "Venim la tine, măsurăm, verificăm și îți trimitem devizul detaliat. Gratuit.",
  },
  {
    icon: Hammer,
    title: "Execuție curată",
    description: "Începem la data agreată, cu echipe dedicate și protecție completă a casei.",
  },
  {
    icon: BadgeCheck,
    title: "Recepție & garanție",
    description: "Predăm lucrarea împreună, curățăm totul și emitem certificatul de garanție.",
  },
]

export function Process() {
  return (
    <section id="proces" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Cum lucrăm
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Un proces simplu,{" "}
            <span className="italic font-medium text-primary">fără surprize.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            De la primul telefon până la predarea lucrării, știi exact ce urmează.
          </p>
        </div>

        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, description }, i) => (
            <li
              key={title}
              className="group card-elev card-elev-hover relative rounded-2xl border border-border bg-card p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-display text-5xl font-bold leading-none text-muted-foreground/20">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
