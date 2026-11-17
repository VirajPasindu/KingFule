"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { BUNDLE } from "@/lib/site";
import AddToCartButton from "./AddToCartButton";

export default function BundleSection() {
  return (
    <section
      id="bundle"
      className="grain relative isolate scroll-mt-20 overflow-hidden bg-forest py-24 text-white md:py-32"
    >
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#D9A83E40_0%,transparent_62%)]"
        aria-hidden
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.28em] text-gold">
            Bundle · Best value
          </p>
          <h2 className="font-display text-[clamp(3rem,7.5vw,6.5rem)] font-black italic">
            Hydration Journey <span className="whitespace-nowrap">3-Pack</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
            {BUNDLE.description}
          </p>
          <p className="mt-3 font-display text-3xl font-bold text-gold">
            LKR {BUNDLE.price.toLocaleString()}
            <span className="ml-2 text-base font-normal text-white/50 line-through">
              LKR 940
            </span>
          </p>
          <p className="mt-4 text-sm text-white/60">
            One can of Active, Endurance and Recover. Perfect to try the full system.
            Planned local retail range is LKR 250–350 per can.
          </p>
          <div className="mt-9">
            <AddToCartButton id="bundle" label="Add 3-Pack to cart" />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-lg">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_40px_60px_rgba(0,0,0,0.5)]">
            <Image
              src={BUNDLE.image}
              alt={BUNDLE.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 500px"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
