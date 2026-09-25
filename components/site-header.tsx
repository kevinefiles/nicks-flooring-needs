"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

const links = [
  { href: "#finishes", label: "Finishes" },
  { href: "#photos", label: "Your photos" },
  { href: "#process", label: "Process" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="page-wrap flex h-[4.25rem] items-center justify-between gap-4">
        <a href="#top" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-foreground text-sm font-semibold text-white">
            N
          </span>
          <span className="min-w-0 leading-tight">
            <span className="display block truncate text-[1.05rem]">{site.name}</span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              {site.service}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-secondary-foreground md:flex" aria-label="Page">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="underline-offset-4 hover:text-primary hover:underline">
              {link.label}
            </a>
          ))}
          <Button asChild className="rounded-full">
            <a href="#quote">Get a quote</a>
          </Button>
        </nav>

        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-border bg-card px-5 py-4 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-base font-medium hover:bg-secondary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-2 rounded-full">
              <a href="#quote" onClick={() => setOpen(false)}>
                Get a quote
              </a>
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
