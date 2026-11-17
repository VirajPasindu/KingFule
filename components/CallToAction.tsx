import Link from "next/link";
import Reveal from "./Reveal";

export default function CallToAction() {
  return (
    <section className="relative isolate overflow-hidden bg-gold py-24 text-night md:py-32">
      <div
        className="font-display pointer-events-none absolute -bottom-16 left-0 -z-10 whitespace-nowrap text-[22rem] font-black italic leading-none text-night/[0.06]"
        aria-hidden
      >
        KINGFULE KINGFULE
      </div>
      <Reveal className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <h2 className="font-display text-[clamp(3rem,8vw,7rem)] font-black italic">
          Your hydration journey starts here.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg font-medium">
          Discover a more natural way to hydrate. Find your KingFule experience.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/products"
            className="rounded-full bg-night px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white transition hover:-translate-y-1 hover:bg-forest"
          >
            Explore Products
          </Link>
          <Link
            href="/contact"
            className="rounded-full border-2 border-night px-8 py-4 text-sm font-extrabold uppercase tracking-wider transition hover:-translate-y-1 hover:bg-night hover:text-white"
          >
            Contact Our Team
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
