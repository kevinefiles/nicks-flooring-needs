import { Reveal } from "@/components/reveal"

const shots = [
  {
    title: "The whole slab",
    copy: "Stand in the doorway and get the full floor, including the edges and any posts.",
  },
  {
    title: "The trouble spots",
    copy: "Cracks, oil, peeling paint, and damp corners change the prep. Photograph them up close.",
  },
  {
    title: "The size",
    copy: "A two-car garage, a basement room, or a rough square-foot guess is enough to start.",
  },
]

export function Photos() {
  return (
    <section id="photos" className="pb-20 sm:pb-28">
      <div className="page-wrap">
        <Reveal className="overflow-hidden rounded-[32px] bg-[#071833] text-white">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[240px] border-b border-white/10 lg:border-r lg:border-b-0">
              <div className="floor harbor absolute inset-0">
                <div className="flake" />
                <div className="sheen" />
                <div className="vignette" />
              </div>
              <div className="relative z-[1] flex h-full flex-col justify-between p-7 sm:p-10">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#d7e4ff]">From the group</p>
                <p className="display text-4xl leading-none sm:text-5xl">
                  You already posted the floor. That’s the start of the quote.
                </p>
              </div>
            </div>
            <div className="p-7 sm:p-10">
              <p className="max-w-md text-base leading-relaxed text-[#d7e4ff]">
                Most people land here after asking in a local Facebook group. Use the photos already on your post, plus these three if you have them.
              </p>
              <ol className="mt-8 space-y-5">
                {shots.map((shot, index) => (
                  <li key={shot.title} className="grid grid-cols-[auto_1fr] gap-4">
                    <span className="display text-3xl text-[#8eafff]">0{index + 1}</span>
                    <span>
                      <span className="block text-lg font-semibold">{shot.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-[#d7e4ff]/90">{shot.copy}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
