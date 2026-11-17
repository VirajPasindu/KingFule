"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PROCESS } from "@/lib/site";

export default function ProductionTimeline() {
  const reduce = useReducedMotion();
  return (
    <ol className="relative mx-auto max-w-4xl">
      <span
        className="absolute bottom-0 left-6 top-0 w-0.5 bg-gradient-to-b from-leaf via-gold to-leaf md:left-1/2 md:-translate-x-1/2"
        aria-hidden
      />
      {PROCESS.map((step, i) => {
        const right = i % 2 === 1;
        return (
          <motion.li
            key={step.title}
            initial={reduce ? false : { opacity: 0, x: right ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative mb-12 pl-20 md:grid md:grid-cols-2 md:gap-16 md:pl-0"
          >
            <span
              className="absolute left-0 top-0 z-10 grid h-12 w-12 place-items-center rounded-full border-4 border-cream bg-forest font-display text-xl font-black text-gold md:left-1/2 md:-translate-x-1/2"
              aria-hidden
            >
              {i + 1}
            </span>
            <div
              className={`rounded-3xl border border-forest/15 bg-white p-6 ${
                right ? "md:col-start-2" : "md:col-start-1 md:text-right"
              }`}
            >
              <h3 className="font-display text-3xl font-extrabold text-forest">
                <span className="sr-only">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-night/75">{step.text}</p>
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}
