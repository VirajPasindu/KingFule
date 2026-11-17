import type { Metadata } from "next";
import { Beaker, Container, Filter, Flame, Info, Recycle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProductionTimeline from "@/components/ProductionTimeline";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Sustainability & Production",
  description:
    "How KingFule plans to make its natural hydration drinks: closed extraction, micro-filtration, gentle pasteurization and sustainable aluminum and glass packaging.",
};

const EQUIPMENT = [
  { Icon: Beaker, title: "Modern food-processing equipment", text: "Automated extraction, blending and filling lines designed for hygiene and consistency." },
  { Icon: Container, title: "Stainless steel mixing tanks", text: "Food-grade stainless steel tanks for blending each variant to a consistent recipe." },
  { Icon: Filter, title: "Micro-filtration", text: "Multi-stage filtration to remove fibre and sediment from the coconut water." },
  { Icon: Flame, title: "UHT or HPP processing", text: "Gentle, short-time treatment, either UHT or high-pressure (HPP), depending on the final production process." },
  { Icon: Recycle, title: "Aluminum cans and glass bottles", text: "Recyclable, reusable packaging chosen over conventional single-use plastic." },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHeader eyebrow="Sustainability & production" title="Good for your body. Better for our planet.">
        <p>
          KingFule believes that great hydration should respect nature. Here is how we plan to make
          it, from King Coconut to can.
        </p>
      </PageHeader>

      <section className="bg-cream pt-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="flex gap-4 rounded-2xl border border-gold/60 bg-gold/15 p-5 text-night">
            <Info className="mt-0.5 shrink-0 text-[#8a6416]" aria-hidden />
            <p className="text-sm leading-relaxed">
              <strong>Planned, not yet operating.</strong> KingFule is pre-launch. The facility,
              equipment and processes on this page describe our production plan, not independently
              verified or certified operations.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="From coconut to can" title="Our planned production process" align="center" />
          <div className="mt-20">
            <ProductionTimeline />
          </div>
        </div>
      </section>

      <section className="grain relative isolate overflow-hidden bg-forest py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Planned capabilities" title="Built around modern equipment" tone="dark">
            <p>
              The manufacturing facility is planned for the Kurunegala or Dambulla region, close to
              where King Coconuts grow.
            </p>
          </SectionHeading>
          <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {EQUIPMENT.map(({ Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 0.07} className="rounded-3xl border border-white/15 bg-white/5 p-7">
                <Icon className="text-gold" size={30} aria-hidden />
                <h3 className="mt-5 font-display text-2xl font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.28em] text-[#2F6B3A]">Packaging</p>
            <h2 className="font-display text-5xl font-black italic text-forest md:text-6xl">
              Less single-use plastic
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-night/80">
              KingFule is planned for aluminum cans and glass bottles rather than conventional
              single-use plastic bottles. Both are widely recyclable, and glass can be reused.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.28em] text-[#2F6B3A]">Local sourcing</p>
            <h2 className="font-display text-5xl font-black italic text-forest md:text-6xl">
              Close to the source
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-night/80">
              Locating production near the King Coconut growing regions is intended to keep
              transport short, keep the water fresh and support local farming communities through
              ethical sourcing.
            </p>
          </Reveal>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
