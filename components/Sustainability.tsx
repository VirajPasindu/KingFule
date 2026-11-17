import Link from "next/link";
import { ArrowRight, Factory, Recycle, Sprout, Users } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const POINTS = [
  { Icon: Recycle, title: "Sustainable packaging", text: "Aluminum cans and glass bottles instead of single-use plastic." },
  { Icon: Sprout, title: "Local King Coconut sourcing", text: "Sourced from the Kurunegala and Dambulla growing regions." },
  { Icon: Users, title: "Support for farming communities", text: "Our aim is to buy ethically from local smallholder farmers." },
  { Icon: Factory, title: "Responsible production", text: "A planned modern facility designed around food safety and low waste." },
];

export default function Sustainability() {
  return (
    <section className="relative isolate overflow-hidden bg-night py-24 text-white md:py-32">
      {/* stylised tropical landscape drawn in SVG */}
      <svg
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-x-0 bottom-0 -z-10 h-full w-full opacity-70"
        aria-hidden
      >
        <defs>
          <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#101A16" />
            <stop offset="1" stopColor="#1d5a43" />
          </linearGradient>
        </defs>
        <rect width="1440" height="600" fill="url(#sky)" />
        <circle cx="1120" cy="210" r="90" fill="#D9A83E" opacity="0.35" />
        <path d="M0 430 C200 340 340 420 520 360 C720 290 860 400 1060 340 C1240 290 1340 350 1440 320 V600 H0 Z" fill="#123D32" />
        <path d="M0 500 C220 430 380 510 600 460 C820 410 980 520 1200 470 C1320 440 1400 470 1440 460 V600 H0 Z" fill="#0c2b23" />
        {[160, 330, 1020, 1240].map((x, i) => (
          <g key={x} transform={`translate(${x} ${i % 2 ? 330 : 360})`}>
            <path d="M0 140 C6 90 -4 50 4 0" stroke="#0a1f19" strokeWidth="9" fill="none" />
            {[-70, -40, 0, 40, 70].map((a) => (
              <path
                key={a}
                d={`M4 0 Q${a * 0.9} -${40 - Math.abs(a) * 0.25} ${a * 1.5} ${20 + Math.abs(a) * 0.3}`}
                stroke="#2f7a55"
                strokeWidth="7"
                strokeLinecap="round"
                fill="none"
              />
            ))}
          </g>
        ))}
      </svg>
      <div className="absolute inset-0 -z-10 bg-night/55" aria-hidden />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Sustainability" title="Good for your body. Better for our planet." tone="dark">
          <p>
            KingFule believes that great hydration should respect nature. We prioritize sustainable
            aluminum cans and reusable glass bottles to reduce reliance on conventional single-use
            plastic packaging.
          </p>
        </SectionHeading>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map(({ Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 0.08} className="rounded-3xl border border-white/15 bg-white/5 p-7 backdrop-blur-sm">
              <Icon className="text-leaf" size={30} aria-hidden />
              <h3 className="mt-5 font-display text-2xl font-extrabold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{text}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12">
          <Link
            href="/sustainability"
            className="group inline-flex items-center gap-2 font-extrabold uppercase tracking-wider text-gold"
          >
            See how we plan to make it
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
