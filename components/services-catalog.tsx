"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  getServicesByCategory,
  serviceCategories,
  siteConfig,
  type Service,
} from "@/lib/site-config"
import { getServiceIcon } from "@/lib/icon-map"

type FilterId = "all" | (typeof serviceCategories)[number]["id"]

export function ServicesCatalog() {
  const [active, setActive] = useState<FilterId>("all")

  const visible: Service[] = useMemo(() => {
    if (active === "all") return [...siteConfig.services]
    return getServicesByCategory(active)
  }, [active])

  return (
    <div>
      {/* Filter tabs — horizontal scroll on mobile */}
      <Tabs
        value={active}
        onValueChange={(v) => setActive(v as FilterId)}
        className="w-full"
      >
        <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <TabsList className="inline-flex h-auto w-max gap-1.5 rounded-full border border-border bg-card p-1.5 shadow-[0_1px_2px_oklch(0.16_0.005_60_/_0.04)]">
            <TabsTrigger
              value="all"
              className="rounded-full px-5 py-2 text-sm font-medium transition-colors data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-[0_8px_20px_-10px_oklch(0.35_0.18_25_/_0.7)]"
            >
              Toate
              <span className="ml-2 text-xs opacity-70">{siteConfig.services.length}</span>
            </TabsTrigger>
            {serviceCategories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-[0_8px_20px_-10px_oklch(0.35_0.18_25_/_0.7)]"
              >
                {cat.label}
                <span className="ml-2 text-xs opacity-70">{cat.slugs.length}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </Tabs>

      {/* Category description */}
      <div className="mt-6 min-h-[1.5rem]">
        {active !== "all" && (
          <p
            key={active}
            className="reveal-fade text-[15px] text-muted-foreground"
          >
            {serviceCategories.find((c) => c.id === active)?.description}
          </p>
        )}
      </div>

      {/* Grid */}
      <div
        key={active}
        className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {visible.map((service, i) => {
          const Icon = getServiceIcon(service.icon)
          return (
            <Link
              key={service.slug}
              href={`/servicii/${service.slug}`}
              className="reveal-up group relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_32px_60px_-24px_oklch(0.35_0.18_25_/_0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:aspect-auto sm:min-h-[220px]"
              style={{ animationDelay: `${Math.min(i, 9) * 50}ms` }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full bg-white/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />

              <div className="relative flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 ring-1 ring-white/25 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <ArrowUpRight
                  className="h-5 w-5 text-white/70 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  aria-hidden
                />
              </div>

              <h3 className="relative mt-6 font-display text-[19px] font-semibold leading-tight tracking-tight text-balance">
                {service.shortTitle ?? service.title}
              </h3>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
