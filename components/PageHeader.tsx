import Reveal from "./Reveal";

export default function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="grain relative isolate overflow-hidden bg-night pb-20 pt-40 text-white">
      <div
        className="absolute -right-32 -top-32 -z-10 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,#2f7a55_0%,#123d32_50%,transparent_72%)]"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
          <h1 className="max-w-5xl font-display text-[clamp(3rem,8.5vw,7.5rem)] font-black italic">
            {title}
          </h1>
          {children && <div className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
