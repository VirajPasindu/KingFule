"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Minus, Plus } from "lucide-react";
import type { Product } from "@/lib/site";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const flip = index % 2 === 1;
  const light = false;

  return (
    <article
      id={product.id}
      className="scroll-mt-20 relative isolate overflow-hidden py-20 md:py-28"
      style={{ background: product.surface, color: product.ink }}
    >
      <div
        className="absolute -z-10 h-[640px] w-[640px] rounded-full opacity-30 blur-3xl"
        style={{ background: product.accent, [flip ? "left" : "right"]: "-12rem", top: "-8rem" }}
        aria-hidden
      />
      <div
        className={`mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] ${
          flip ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          whileHover={reduce ? undefined : { y: -10 }}
          transition={{ type: "spring", stiffness: 160, damping: 14 }}
          className="relative mx-auto aspect-[3/4] w-full max-w-[340px] overflow-hidden rounded-3xl shadow-[0_40px_60px_rgba(0,0,0,0.45)]"
        >
          <Image
            src={product.image}
            alt={`${product.name} — ${product.flavor} 330ml can`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 80vw, 340px"
            priority={index === 0}
          />
        </motion.div>

        <div>
          <p
            className="text-xs font-extrabold uppercase tracking-[0.28em]"
            style={{ color: light ? product.accentDeep : product.accent }}
          >
            Stage {product.stageNo} · {product.stage}
          </p>
          <h2 className="mt-3 font-display font-black italic">
            <span className="block text-[clamp(1.5rem,2.6vw,2.2rem)] opacity-80">KingFule</span>
            <span className="block text-[clamp(3.2rem,7.5vw,6.5rem)]">
              {product.name.replace("KingFule ", "")}
            </span>
          </h2>
          <p className="mt-2 font-display text-2xl font-bold opacity-90">
            {product.flavor} · {product.purpose}
          </p>
          <p className="mt-2 text-lg font-semibold" style={{ color: product.accent }}>
            LKR {product.price.toLocaleString()} · 330 ml
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-85">{product.blurb}</p>

          <ul className="mt-6 space-y-2">
            {product.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <Check size={20} className="mt-0.5 shrink-0" style={{ color: product.accent }} aria-hidden />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm opacity-75">
            <strong>Packaging:</strong> 330ml aluminum can · no single-use plastic
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <AddToCartButton id={product.id} label="Add to cart" />
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls={`more-${product.id}`}
              className="inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-extrabold uppercase tracking-wider transition hover:-translate-y-0.5"
              style={{ borderColor: product.accent, color: light ? product.accentDeep : product.accent }}
            >
              {open ? <Minus size={16} /> : <Plus size={16} />}
              {open ? "Hide details" : product.cta}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={`more-${product.id}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div
                  className="mt-6 grid gap-6 rounded-2xl border border-current/15 p-6 sm:grid-cols-2"
                  style={{ borderColor: `${product.accent}55` }}
                >
                  <div>
                    <h3 className="font-display text-xl font-bold">Reach for it when</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 opacity-85">
                      {product.whenToChoose.map((w) => (
                        <li key={w}>{w}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">Made for</h3>
                    <p className="mt-2 opacity-85">{product.who}</p>
                    <p className="mt-4 text-xs opacity-60">
                      Pre-launch: final ingredient list and nutrition information will be published
                      when the product is released.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </article>
  );
}
