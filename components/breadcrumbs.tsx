import Link from "next/link"
import { ChevronRight } from "lucide-react"

export type Crumb = { href?: string; label: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={i} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link href={item.href} className="transition hover:text-primary">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "font-medium text-foreground" : ""}>{item.label}</span>
              )}
              {!isLast && <ChevronRight className="h-3.5 w-3.5" aria-hidden />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
