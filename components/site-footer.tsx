import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-white">
      <div className="page-wrap flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="display text-2xl">{site.name}</p>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-primary">{site.service}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Garages, basements, shops, and covered patios. If you asked in a local group, bring the photos with the quote ticket.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 text-sm sm:items-end">
          {site.phoneTel ? (
            <a className="font-semibold text-primary" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
          ) : null}
          {site.email ? (
            <a className="font-semibold text-primary" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          ) : null}
          {site.facebookUrl ? (
            <a className="font-semibold text-primary" href={site.facebookUrl} target="_blank" rel="noreferrer">
              Facebook
            </a>
          ) : null}
          <Button asChild className="rounded-full">
            <a href="#quote">Get a quote</a>
          </Button>
          <p className="text-muted-foreground">© {year} {site.name}</p>
        </div>
      </div>
    </footer>
  )
}
