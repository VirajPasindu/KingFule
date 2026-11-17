import Reveal from "./Reveal";

interface Props {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  as?: "h1" | "h2";
}

export default function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "light",
  align = "left",
  as: Tag = "h2",
}: Props) {
  const dark = tone === "dark";
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`mb-4 text-xs font-extrabold uppercase tracking-[0.28em] ${
          dark ? "text-gold" : "text-[#2F6B3A]"
        }`}
      >
        {eyebrow}
      </p>
      <Tag
        className={`font-display text-[clamp(2.6rem,6.5vw,5.5rem)] font-black italic ${
          dark ? "text-white" : "text-forest"
        }`}
      >
        {title}
      </Tag>
      {children && (
        <div className={`mt-6 text-lg leading-relaxed ${dark ? "text-white/75" : "text-night/75"}`}>
          {children}
        </div>
      )}
    </Reveal>
  );
}
