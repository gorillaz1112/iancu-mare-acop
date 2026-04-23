import { Quote } from "lucide-react"

export function Manifesto() {
  return (
    <section className="relative bg-primary text-primary-foreground">
      {/* subtle top + bottom hairlines */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-white/15" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-black/20" />

      {/* soft texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(1200px 400px at 10% 0%, rgba(255,255,255,0.5), transparent), radial-gradient(800px 300px at 90% 100%, rgba(0,0,0,0.6), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-foreground px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-background">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Filosofia noastră
            </div>

            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[64px]">
              Un acoperiș bun nu se vede.{" "}
              <span className="italic font-medium text-foreground">Se simte</span>
              <br className="hidden sm:block" />
              <span className="opacity-90">— timp de 30 de ani.</span>
            </h2>
          </div>

          <div className="relative lg:col-span-4">
            <div className="relative rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-[2px] sm:p-7">
              <Quote className="h-6 w-6 text-foreground" strokeWidth={2.2} />
              <p className="mt-4 text-[15px] leading-relaxed text-primary-foreground/90">
                Lucrăm ca pentru casa noastră. Material bun, montaj curat, cuvânt dat — fără
                scurtături, fără surprize, fără explicații după predare.
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-white/15 pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-[11px] font-bold uppercase tracking-wider text-background">
                  AE
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold">Echipa Acoperiș Plus</p>
                  <p className="text-xs text-primary-foreground/70">Fondată în 2010</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row of quiet proof points */}
        <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4 sm:gap-10">
          {[
            { k: "20 ani", v: "garanție scrisă" },
            { k: "2h", v: "timp de răspuns" },
            { k: "0 RON", v: "deviz + deplasare" },
            { k: "24/7", v: "urgențe infiltrații" },
          ].map((item) => (
            <div key={item.v} className="flex flex-col">
              <span className="font-display text-3xl font-bold tracking-tight sm:text-[32px]">
                {item.k}
              </span>
              <span className="mt-1 text-xs uppercase tracking-[0.18em] text-primary-foreground/75">
                {item.v}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
