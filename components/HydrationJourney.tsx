"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { PRODUCTS } from "@/lib/site";

export default function HydrationJourney() {
  const reduce = useReducedMotion();
  return (
    <section className="grain relative isolate overflow-hidden bg-forest py-24 text-white md:py-32">
      <div
        className="absolute left-1/2 top-0 -z-10 h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,#77A66A55_0%,transparent_65%)]"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="The system" title="Your hydration journey" tone="dark" align="center">
          <p>One system, three moments. Pick the stage that matches what you are about to do.</p>
        </SectionHeading>

        <div className="relative mt-20">
          {/* connecting line (desktop) */}
          <div className="absolute left-[16.6%] right-[16.6%] top-[1.875rem] hidden h-1 lg:block" aria-hidden>
            <div className="absolute inset-0 rounded bg-white/15" />
            <motion.div
              className="absolute inset-0 origin-left rounded bg-gradient-to-r from-[#D9A83E] via-[#A855F7] to-[#4ADE80]"
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </div>

          <ol className="grid gap-16 lg:grid-cols-3 lg:gap-8">
            {PRODUCTS.map((p, i) => (
              <motion.li
                key={p.id}
                initial={reduce ? false : { opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.25 }}
                className="relative flex flex-col items-center text-center"
              >
                <span
                  className="relative z-10 grid h-16 w-16 place-items-center rounded-full border-4 border-forest font-display text-2xl font-black text-night"
                  style={{ background: p.accent }}
                >
                  {p.stageNo}
                </span>
                <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.28em]" style={{ color: p.accent }}>
                  Step {p.stageNo} · {p.stage}
                </p>
                <div className="relative my-6 aspect-[3/4] w-32 overflow-hidden rounded-2xl shadow-[0_20px_30px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:-translate-y-3">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h3 className="font-display text-4xl font-black italic">{p.name}</h3>
                <p className="mt-2 max-w-xs text-white/70">{p.long}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
