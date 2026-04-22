import { Award, Users, MapPin, CheckCircle2 } from "lucide-react"

const stats = [
  { icon: Users, value: "1.400+", label: "proiecte finalizate" },
  { icon: MapPin, value: "4 județe", label: "arie de acoperire" },
  { icon: Award, value: "15+ ani", label: "experiență" },
  { icon: CheckCircle2, value: "98%", label: "clienți mulțumiți" },
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-4 py-12 sm:px-6 md:grid-cols-4 md:divide-x md:divide-border md:gap-0 md:py-10 lg:px-8">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-4 px-2 md:px-6 md:first:pl-0 md:last:pr-0">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-2xl font-bold leading-none">{value}</p>
              <p className="mt-1.5 text-sm text-muted-foreground">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
