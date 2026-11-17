"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { PRODUCTS } from "@/lib/site";

function Droplets() {
  const drops = [
    { x: "8%", y: "22%", s: 14, d: 0 },
    { x: "20%", y: "68%", s: 9, d: 0.6 },
    { x: "46%", y: "14%", s: 11, d: 1.1 },
    { x: "62%", y: "78%", s: 16, d: 0.3 },
    { x: "88%", y: "30%", s: 10, d: 0.9 },
    { x: "76%", y: "10%", s: 7, d: 1.4 },
    { x: "34%", y: "86%", s: 8, d: 0.2 },
  ];
  return (
    <>
      {drops.map((d, i) => (
        <span
          key={i}
          aria-hidden
          className="float-slow absolute rounded-full bg-gradient-to-br from-white/80 to-[#6FE0D2]/40"
          style={{
            left: d.x,
            top: d.y,
            width: d.s,
            height: d.s * 1.3,
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            animationDelay: `${d.d}s`,
          }}
        />
      ))}
    </>
  );
}

function Leaf({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 400 520"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden
    >
      <path
        d="M20 520 C40 340 120 160 380 10 C330 120 320 220 200 300 C260 250 300 190 330 120 C250 200 160 280 120 420 Z"
        fill="#77A66A"
        opacity="0.32"
      />
      <path
        d="M60 520 C90 380 170 250 340 120"
        stroke="#F8F7F0"
        strokeOpacity="0.18"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBack = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const yCans = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const yLeaf = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 200]);

  const [active, endurance, recover] = PRODUCTS;

  return (
    <section
      ref={ref}
      className="grain relative isolate flex min-h-screen items-center overflow-hidden bg-night pb-20 pt-32 text-white"
    >
      {/* atmosphere */}
      <motion.div style={{ y: yBack }} className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute -right-40 top-0 h-[900px] w-[900px] rounded-full bg-[radial-gradient(circle,#2f7a55_0%,#123d32_45%,transparent_70%)] opacity-80" />
        <div className="absolute -left-32 bottom-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,#d9a83e55_0%,transparent_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#101a16_0%,transparent_30%,transparent_70%,#101a16_100%)]" />
      </motion.div>
      <motion.div style={{ y: yLeaf }} className="absolute inset-0 -z-10" aria-hidden>
        <Leaf className="absolute -left-10 top-24 w-[340px] -rotate-12 opacity-70 md:w-[460px]" />
        <Leaf flip className="absolute -right-16 bottom-0 w-[300px] rotate-6 opacity-60 md:w-[420px]" />
      </motion.div>
      <div className="absolute inset-0 -z-10" aria-hidden>
        <Droplets />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-gold"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
            Pre-launch · Sri Lankan King Coconut
          </motion.p>

          <h1 className="font-display text-[clamp(3.4rem,7.4vw,7.2rem)] font-black italic">
            {["Awaken", "Your Natural", "Energy."].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className={`block ${i === 2 ? "text-gold" : ""}`}
                  initial={reduce ? false : { y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-white/80"
          >
            Experience the power of authentic Sri Lankan King Coconut hydration. Naturally
            refreshing. Purposefully crafted. Ready for every stage of your journey.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-night transition hover:-translate-y-1 hover:bg-[#e8b84d]"
            >
              Explore Our Products
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/story"
              className="inline-flex items-center rounded-full border-2 border-white/40 px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white transition hover:-translate-y-1 hover:border-white hover:bg-white/10"
            >
              Discover Our Story
            </Link>
          </motion.div>
        </div>

        {/* product images */}
        <motion.div style={{ y: yCans }} className="relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[560px]">
          <div
            className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#d9a83e40_0%,transparent_65%)]"
            aria-hidden
          />
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -60, rotate: -12 }}
            animate={{ opacity: 1, x: 0, rotate: -6 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-6 left-[2%] w-[34%] drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)] sm:bottom-10"
          >
            <div className="float-slow relative aspect-[3/4] overflow-hidden rounded-2xl" style={{ animationDelay: "0.4s" }}>
              <Image src={active.image} alt={active.name} fill className="object-cover" sizes="180px" priority />
            </div>
          </motion.div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-0 z-10 w-[44%] -translate-x-1/2 drop-shadow-[0_40px_50px_rgba(0,0,0,0.6)]"
          >
            <div className="float-slow relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image src={endurance.image} alt={endurance.name} fill className="object-cover" sizes="220px" priority />
            </div>
          </motion.div>
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 60, rotate: 12 }}
            animate={{ opacity: 1, x: 0, rotate: 6 }}
            transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-6 right-[2%] w-[34%] drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)] sm:bottom-10"
          >
            <div className="float-slow relative aspect-[3/4] overflow-hidden rounded-2xl" style={{ animationDelay: "0.8s" }}>
              <Image src={recover.image} alt={recover.name} fill className="object-cover" sizes="180px" priority />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#intro"
        aria-label="Scroll to the next section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/60 transition hover:text-gold md:block"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </a>
    </section>
  );
}
