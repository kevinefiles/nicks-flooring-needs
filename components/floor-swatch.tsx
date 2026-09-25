"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "cn"

export function FloorSwatch({
  tone,
  code,
  name,
  className,
}: {
  tone: string
  code: string
  name: string
  className?: string
}) {
  const reduce = useReducedMotion()
  const light = tone === "porcelain"

  return (
    <article className={cn("floor h-full w-full", tone, className)}>
      <div className="flake" />
      <motion.div
        className="sheen"
        initial={false}
        animate={reduce ? { x: "-8%" } : { x: ["-70%", "85%"] }}
        transition={
          reduce
            ? { duration: 0 }
            : { duration: 2.8, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }
        }
      />
      <div className="vignette" />
      <div
        className={cn(
          "relative z-[1] flex h-full flex-col justify-between p-4 sm:p-5",
          light ? "text-[#071833]" : "text-white"
        )}
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] opacity-80">
          Sample {code}
        </p>
        <p className="display text-2xl sm:text-3xl">{name}</p>
      </div>
    </article>
  )
}
