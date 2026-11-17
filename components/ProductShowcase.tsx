"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { PRODUCTS, type Product } from "@/lib/site";

function Stage({ product, index }: { product: Product; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const canY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 80, reduce ? 0 : -80]);
  const canR = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : -6, reduce ? 0 : 6]);
  const numY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 60, reduce ? 0 : -60]);

  const flip = index % 2 === 1;
  const lightSurface = false;

  return (
    <section
      ref={ref}
      id={`stage-${product.id}`}
      className="relative isolate overflow-hidden py-24 md:py-32"
      style={{ background: product.surface, color: product.ink }}
    >
      {/* decorative backdrops differ per variant */}
      {product.id === "active" && (
        <div
          className="absolute -left-40 top-10 -z-10 h-[620px] w-[620px] rounded-full bg-[#77A66A]/25"
          aria-hidden
        />
      )}
      {product.id === "endurance" && (
        <div className="absolute inset-0 -z-10" aria-hidden>
          <div className="absolute -right-24 top-0 h-full w-[55%] -skew-x-12 bg-gradient-to-b from-[#F08A24]/30 to-[#D9A83E]/5" />
          <div className="absolute right-[32%] top-0 h-full w-2 -skew-x-12 bg-[#F08A24]/40" />
        </div>
      )}
      {product.id === "recover" && (
        <div className="absolute inset-0 -z-10" aria-hidden>
          <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#5FCFA033_0%,transparent_62%)]" />
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full border border-[#5FCFA0]/40"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 53) % 100}%`,
                width: 14 + ((i * 11) % 30),
                height: 14 + ((i * 11) % 30),
              }}
            />
          ))}
        </div>
      )}

      <motion.span
        style={{ y: numY, color: product.accent }}
        className="font-display pointer-events-none absolute -top-6 select-none text-[clamp(14rem,34vw,30rem)] font-black italic opacity-[0.13]"
        aria-hidden
      >
        <span className={flip ? "absolute right-4" : "absolute left-4"}>{product.stageNo}</span>
      </motion.span>

      <div
        className={`mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 ${
          flip ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <p
            className="mb-4 text-xs font-extrabold uppercase tracking-[0.28em]"
            style={{ color: lightSurface ? product.accentDeep : product.accent }}
          >
            Stage {product.stageNo} · {product.stage}
          </p>
          <h2 className="font-display font-black italic">
            <span className="block text-[clamp(1.6rem,3vw,2.6rem)] opacity-80">KingFule</span>
            <span className="block text-[clamp(3.6rem,8.5vw,7.5rem)]">
              {product.name.replace("KingFule ", "")}
            </span>
          </h2>
          <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3">
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest opacity-60">Flavor</dt>
              <dd className="font-display text-3xl font-bold">{product.flavor}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest opacity-60">Purpose</dt>
              <dd className="font-display text-3xl font-bold">{product.purpose}</dd>
            </div>
          </dl>
          <p className="mt-7 max-w-xl text-lg leading-relaxed opacity-85">{product.blurb}</p>
          <Link
            href={`/products#${product.id}`}
            className="group mt-9 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-night transition hover:-translate-y-1"
            style={{ background: product.accent }}
          >
            {product.cta}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="relative mx-auto flex h-[460px] w-full max-w-md items-center justify-center md:h-[620px]">
          <div
            className="absolute inset-x-6 bottom-4 h-10 rounded-[100%] bg-black/40 blur-2xl"
            aria-hidden
          />
          <motion.div
            style={{ y: canY, rotate: canR }}
            className="relative aspect-[3/4] w-[70%] overflow-hidden rounded-3xl drop-shadow-[0_40px_60px_rgba(0,0,0,0.45)]"
          >
            <Image
              src={product.image}
              alt={`${product.name} — ${product.flavor}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 70vw, 320px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function ProductShowcase() {
  return (
    <div>
      {PRODUCTS.map((p, i) => (
        <Stage key={p.id} product={p} index={i} />
      ))}
    </div>
  );
}
