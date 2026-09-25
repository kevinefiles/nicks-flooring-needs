export const site = {
  name: "Nick's Flooring Needs",
  service: "Epoxy flooring",
  /** Leave a field empty and that link stays off the page. */
  phoneDisplay: "",
  phoneTel: "",
  email: "",
  facebookUrl: "",
}

export const finishes = [
  {
    id: "harbor",
    code: "04",
    name: "Harbor flake",
    use: "Garages that get wet tires and dropped tools",
    note: "Blue and salt flake broadcast into an epoxy base, then locked under a clear topcoat.",
    tone: "harbor",
  },
  {
    id: "porcelain",
    code: "11",
    name: "Porcelain solid",
    use: "Basements and rooms you walk through barefoot",
    note: "A quiet, warm-white epoxy. Easier to wipe than paint, and it shows dirt sooner than a dark floor.",
    tone: "porcelain",
  },
  {
    id: "graphite",
    code: "18",
    name: "Graphite solid",
    use: "Shops, barns, and work bays",
    note: "A dense gray that reads like a finished shop, not a coated driveway.",
    tone: "graphite",
  },
  {
    id: "tide",
    code: "27",
    name: "Tide metallic",
    use: "Showpiece rooms and covered patios",
    note: "Pigment swirled through the coat so the floor moves when you walk around it.",
    tone: "tide",
  },
] as const

export type Finish = (typeof finishes)[number]
