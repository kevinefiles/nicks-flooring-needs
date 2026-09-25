import { Reveal } from "@/components/reveal"

const steps = [
  {
    title: "Read the photos",
    copy: "Nick looks at the slab, the stains, and the room you actually use. If it isn’t a fit, you’ll hear that early.",
  },
  {
    title: "Walk it when it counts",
    copy: "A visit confirms moisture, cracks, and how the floor meets the walls. Pricing follows the slab, not a guess from a thumbnail.",
  },
  {
    title: "Grind and repair",
    copy: "Coatings fail when the concrete is dirty or loose. Prep is the job. The pretty coat is the last part.",
  },
  {
    title: "Pour and topcoat",
    copy: "Epoxy base, then flake, solid color, or metallic pigment, then a clear topcoat. You’ll get a time to stay off it.",
  },
]

export function Process() {
  return (
    <section id="process" className="pb-20 sm:pb-28">
      <div className="page-wrap">
        <Reveal className="max-w-2xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-primary">How a job moves</p>
          <h2 className="display mt-3 text-4xl sm:text-5xl">Prep first. Shine second.</h2>
        </Reveal>

        <Reveal>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-[28px] border border-border bg-border sm:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="bg-card p-6 sm:p-7">
                <p className="display text-5xl text-[#d7e4ff]">{index + 1}</p>
                <h3 className="display mt-6 text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/90">{step.copy}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Keep cars, water, and heavy foot traffic off the floor until the topcoat has cured. The hour depends on the products used that day, and you’ll get it with the schedule.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
