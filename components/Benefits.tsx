"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Layers, Leaf, Recycle, Sparkles, Zap, type LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { BENEFITS } from "@/lib/site";

const ICONS: Record<string, LucideIcon> = { Leaf, Zap, Layers, Recycle, Sparkles };

export default function Benefits() {
  const reduce = useReducedMotion();
  return (
    <section id="why" className="scroll-mt-24 bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Why KingFule" title="Pure nature. Purposeful hydration." />

        <ul className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-forest/10 bg-forest/10 md:grid-cols-2 lg:grid-cols-6">
          {BENEFITS.map((b, i) => {
            const Icon = ICONS[b.icon];
            const span = i < 2 ? "lg:col-span-3" : "lg:col-span-2";
            return (
              <motion.li
                key={b.title}
                initial={reduce ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={reduce ? undefined : { backgroundColor: "#ffffff" }}
                className={`group bg-cream p-8 md:p-10 ${span}`}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-forest text-gold transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon size={26} aria-hidden />
                  </span>
                  <span className="font-display text-5xl font-black italic text-forest/15">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-3xl font-extrabold text-forest">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-night/70">{b.text}</p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
