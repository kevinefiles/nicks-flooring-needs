"use client"

import { useState } from "react"
import { finishes, type Finish } from "@/lib/site"
import { FloorSwatch } from "@/components/floor-swatch"
import { Reveal } from "@/components/reveal"
import { cn } from "cn"

export function Finishes() {
  const [active, setActive] = useState<Finish["id"]>(finishes[0].id)
  const current = finishes.find((finish) => finish.id === active) ?? finishes[0]

  return (
    <section id="finishes" className="pb-20 sm:pb-28">
      <div className="page-wrap">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-primary">Finish samples</p>
            <h2 className="display mt-3 text-4xl text-foreground sm:text-5xl">
              Pick a floor the way you’d pick a paint chip.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            These are finish samples so you can picture the pour. They show the coating, not a finished job in someone else’s garage.
          </p>
        </Reveal>

        <Reveal className="mt-10 grid gap-5 lg:grid-cols-[1.35fr_0.8fr]">
          <div className="overflow-hidden rounded-[28px] shadow-[0_30px_70px_rgba(7,24,51,0.18)]">
            <FloorSwatch
              className="min-h-[340px] sm:min-h-[460px]"
              tone={current.tone}
              code={current.code}
              name={current.name}
            />
          </div>
          <div className="flex flex-col gap-3">
            {finishes.map((finish) => (
              <button
                key={finish.id}
                type="button"
                aria-pressed={active === finish.id}
                onClick={() => setActive(finish.id)}
                className={cn(
                  "rounded-2xl border bg-card px-4 py-4 text-left transition duration-200",
                  active === finish.id
                    ? "border-primary shadow-[0_22px_50px_rgba(7,24,51,0.1)]"
                    : "border-border hover:-translate-y-0.5 hover:border-primary/50"
                )}
              >
                <span className="flex items-baseline justify-between gap-3">
                  <span className="display text-2xl">{finish.name}</span>
                  <span className="text-xs font-semibold tracking-[0.16em] text-primary">{finish.code}</span>
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">{finish.use}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-secondary-foreground">{current.note}</p>
        </Reveal>
      </div>
    </section>
  )
}
