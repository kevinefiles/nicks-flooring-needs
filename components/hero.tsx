"use client"

import { useRef, type PointerEvent } from "react"
import { motion, useMotionTemplate, useReducedMotion, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FloorSwatch } from "@/components/floor-swatch"

export function Hero() {
  const reduce = useReducedMotion()
  const stageRef = useRef<HTMLDivElement>(null)
  const rotateX = useSpring(reduce ? 0 : 54, { stiffness: 120, damping: 18 })
  const rotateY = useSpring(reduce ? 0 : -16, { stiffness: 120, damping: 18 })
  const rotateZ = reduce ? 0 : -14
  const transform = useMotionTemplate`rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reduce || event.pointerType !== "mouse") return
    const bounds = stageRef.current?.getBoundingClientRect()
    if (!bounds) return
    const px = (event.clientX - bounds.left) / bounds.width - 0.5
    const py = (event.clientY - bounds.top) / bounds.height - 0.5
    rotateY.set(-16 + px * 12)
    rotateX.set(54 - py * 8)
  }

  const rise = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="top" className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24">
      <div className="page-wrap grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        <div>
          <motion.p
            className="text-[12px] font-semibold uppercase tracking-[0.22em] text-primary"
            variants={rise}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Epoxy flooring
          </motion.p>
          <motion.h1
            className="display mt-4 max-w-[12ch] text-[3.15rem] leading-[0.92] text-foreground sm:text-7xl"
            variants={rise}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            A floor that looks poured, not painted.
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-secondary-foreground"
            variants={rise}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            Nick&apos;s Flooring Needs coats garages, basements, shops, and covered patios in epoxy.
            Found this from a Facebook group? Send the photos you already posted and get a quote you can paste back into the thread.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            variants={rise}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button asChild size="lg" className="rounded-full px-6 shadow-[0_12px_30px_rgba(12,77,219,0.28)]">
              <a href="#quote">Make a quote ticket</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-white/80 px-6">
              <a href="#finishes">See the finishes</a>
            </Button>
          </motion.div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-5 text-sm">
            <div>
              <dt className="text-muted-foreground">Base</dt>
              <dd className="mt-1 font-semibold">Epoxy</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Look</dt>
              <dd className="mt-1 font-semibold">Flake, solid, metallic</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Start</dt>
              <dd className="mt-1 font-semibold">Photos of the slab</dd>
            </div>
          </dl>
        </div>

        <div
          ref={stageRef}
          className="relative min-h-[420px] [perspective:1200px] max-lg:min-h-[360px]"
          onPointerMove={onPointerMove}
        >
          <motion.div
            className="relative h-[340px] overflow-hidden rounded-[28px] shadow-[0_40px_70px_rgba(7,24,51,0.22)] max-lg:h-[280px]"
            style={{ transform, transformStyle: "preserve-3d" }}
          >
            <FloorSwatch tone="harbor" code="04" name="Harbor flake" className="rounded-[28px]" />
          </motion.div>
          <div className="absolute bottom-4 left-0 z-10 grid gap-0.5 rounded-2xl bg-white/92 px-3.5 py-3 shadow-[0_16px_40px_rgba(7,24,51,0.12)] backdrop-blur-sm">
            <span className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">Flake</span>
            <strong className="text-sm">Hides tire marks</strong>
          </div>
          <div className="absolute top-3 right-2 z-10 grid gap-0.5 rounded-2xl bg-white/92 px-3.5 py-3 shadow-[0_16px_40px_rgba(7,24,51,0.12)] backdrop-blur-sm">
            <span className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">Topcoat</span>
            <strong className="text-sm">Clear, glossy</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
