import { Droplets, Layers, Leaf, Recycle } from "lucide-react";
import Reveal from "./Reveal";

const HIGHLIGHTS = [
  { Icon: Leaf, label: "Natural ingredients" },
  { Icon: Layers, label: "Three-stage hydration system" },
  { Icon: Droplets, label: "Sri Lankan King Coconut heritage" },
  { Icon: Recycle, label: "Sustainable packaging" },
];

export default function BrandIntro() {
  return (
    <section id="intro" className="scroll-mt-20 bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <Reveal>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.28em] text-[#2F6B3A]">
            Meet KingFule
          </p>
          <h2 className="font-display text-[clamp(2.8rem,7vw,6.5rem)] font-black italic text-forest">
            Not just a drink. A hydration journey.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-lg leading-relaxed text-night/80">
            Born from the natural goodness of Sri Lankan King Coconut water, KingFule brings
            together traditional natural ingredients and modern beverage innovation to create a
            purposeful hydration experience.
          </p>
        </Reveal>
      </div>

      <ul className="mx-auto mt-16 grid max-w-7xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {HIGHLIGHTS.map(({ Icon, label }, i) => (
          <Reveal
            as="li"
            key={label}
            delay={i * 0.08}
            className="flex items-center gap-4 rounded-2xl border border-forest/15 bg-white/60 p-5"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest text-gold">
              <Icon size={22} aria-hidden />
            </span>
            <span className="font-display text-xl font-bold leading-tight text-forest">{label}</span>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
