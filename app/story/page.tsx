import type { Metadata } from "next";
import { Globe2, Target } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { SITE, VALUES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "SixTale (Pvt) Ltd is a Sri Lankan beverage innovation company building KingFule: natural, purpose-driven hydration from authentic King Coconut water.",
};

const CHAPTERS = [
  {
    kicker: "Heritage",
    title: "A drink Sri Lanka already trusts",
    text: "King Coconut, or thambili, has long been the island's go-to natural thirst-quencher, sold fresh by roadside vendors and enjoyed in the heat. It is a deeply familiar part of everyday life in Sri Lanka.",
  },
  {
    kicker: "Inspiration",
    title: "Making it ready for modern life",
    text: "A freshly cut king coconut is hard to carry to the gym, the cricket ground or the office, and it does not keep. KingFule began with a simple question: how do we bring that natural refreshment into a form that fits an active, modern routine?",
  },
  {
    kicker: "Natural hydration",
    title: "Different moments, different needs",
    text: "Hydration is not one-size-fits-all. The day, the effort and the recovery afterwards all ask for something different, so KingFule is designed as three stages: Active, Endurance and Recover.",
  },
  {
    kicker: "Tradition meets technology",
    title: "Modern processing, natural ingredients",
    text: "We plan to pair authentic local ingredients with modern food-processing technology, so the natural character of King Coconut water can be delivered safely and consistently in sustainable packaging.",
  },
];

export default function StoryPage() {
  return (
    <>
      <PageHeader eyebrow="Our story" title="Rooted in Sri Lanka. Created for the world.">
        <p>
          {SITE.company} is a Sri Lankan beverage innovation company committed to developing
          natural, purpose-driven hydration solutions using authentic local ingredients.
        </p>
      </PageHeader>

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <ol className="space-y-20">
            {CHAPTERS.map((c, i) => (
              <Reveal as="li" key={c.title} className="grid gap-6 md:grid-cols-[120px_1fr]">
                <span className="font-display text-7xl font-black italic text-gold md:text-8xl">
                  0{i + 1}
                </span>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#2F6B3A]">{c.kicker}</p>
                  <h2 className="mt-2 font-display text-4xl font-black italic text-forest md:text-5xl">
                    {c.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-night/80">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="grain relative isolate overflow-hidden bg-forest py-24 text-white md:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-white/15 bg-white/5 p-8 md:p-12">
            <Globe2 className="text-gold" size={36} aria-hidden />
            <h2 className="mt-6 font-display text-5xl font-black italic">Our vision</h2>
            <p className="mt-4 text-xl leading-relaxed text-white/85">
              To bring Sri Lanka to the world as the largest natural sports drink brand by
              establishing King Coconut as the global benchmark for natural, purpose-driven hydration.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="rounded-3xl border border-white/15 bg-white/5 p-8 md:p-12">
            <Target className="text-gold" size={36} aria-hidden />
            <h2 className="mt-6 font-display text-5xl font-black italic">Our mission</h2>
            <p className="mt-4 text-xl leading-relaxed text-white/85">
              To introduce a reliable and refreshing beverage to the world by combining the natural
              strength of Sri Lankan King Coconuts with modern technology.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Core values" title="What we stand for" />
          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 0.06} className="rounded-3xl border border-forest/15 bg-white p-8">
                <h3 className="font-display text-3xl font-extrabold text-forest">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-night/75">{v.text}</p>
              </Reveal>
            ))}
            <Reveal as="li" delay={0.36} className="rounded-3xl bg-night p-8 text-white md:col-span-2 lg:col-span-1">
              <h3 className="font-display text-3xl font-extrabold text-gold">Brand philosophy</h3>
              <p className="mt-3 leading-relaxed text-white/80">
                Hydration should be natural, purposeful and kind to the planet. Awaken your natural
                energy.
              </p>
            </Reveal>
          </ul>
        </div>
      </section>

      <section className="bg-night py-24 text-white md:py-28">
        <Reveal className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.28em] text-gold">Where we are now</p>
          <h2 className="font-display text-5xl font-black italic md:text-6xl">Built for the world, starting at home</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            KingFule is in its pre-launch stage. Our focus is on launching in Sri Lanka first,
            through supermarkets, gyms, sports clubs, schools and fitness centres, with the Maldives
            and the Middle East planned as future export markets. These are goals, not yet
            partnerships or operations.
          </p>
        </Reveal>
      </section>

      <CallToAction />
    </>
  );
}
