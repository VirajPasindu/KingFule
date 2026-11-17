import type { Product } from "@/lib/site";

interface CanArtProps {
  product: Pick<Product, "id" | "flavor" | "accent" | "accentDeep" | "stageNo"> & {
    name: string;
  };
  className?: string;
  title?: string;
}

/**
 * Original, vector 330ml can mockup. Drawn in SVG so it stays sharp at any
 * size and never shows a broken image. Swap for product photography once
 * real packaging exists.
 */
export default function CanArt({ product, className, title }: CanArtProps) {
  const id = `can-${product.id}`;
  const short = product.name.replace("KingFule ", "").toUpperCase();
  const dark = product.id === "active" ? "#123D32" : "#0B1512";

  return (
    <svg
      viewBox="0 0 220 440"
      className={className}
      role="img"
      aria-label={title ?? `${product.name} — ${product.flavor} aluminum can mockup`}
    >
      <defs>
        <linearGradient id={`${id}-body`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor={dark} />
          <stop offset="0.5" stopColor={product.accentDeep} />
          <stop offset="1" stopColor={dark} />
        </linearGradient>
        <linearGradient id={`${id}-metal`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#8d968f" />
          <stop offset="0.28" stopColor="#f2f5f2" />
          <stop offset="0.55" stopColor="#b9c0bb" />
          <stop offset="1" stopColor="#7c847e" />
        </linearGradient>
        <linearGradient id={`${id}-shine`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.18" stopColor="#fff" stopOpacity="0.38" />
          <stop offset="0.3" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.82" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.9" stopColor="#fff" stopOpacity="0.14" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.5" cy="0.45" r="0.6">
          <stop offset="0" stopColor={product.accent} stopOpacity="0.95" />
          <stop offset="1" stopColor={product.accent} stopOpacity="0" />
        </radialGradient>
        <clipPath id={`${id}-clip`}>
          <path d="M30 62 Q30 44 52 40 H168 Q190 44 190 62 V388 Q190 402 170 406 H50 Q30 402 30 388 Z" />
        </clipPath>
      </defs>

      {/* top & bottom rims */}
      <path d="M44 38 Q110 22 176 38 L180 50 H40 Z" fill={`url(#${id}-metal)`} />
      <ellipse cx="110" cy="33" rx="62" ry="9" fill="#d9dedb" />
      <ellipse cx="110" cy="32" rx="46" ry="5.5" fill="#9aa39d" />
      <rect x="92" y="27" width="36" height="9" rx="4.5" fill="#cfd5d1" />
      <path d="M40 398 H180 L172 414 Q110 422 48 414 Z" fill={`url(#${id}-metal)`} />

      {/* body */}
      <g clipPath={`url(#${id}-clip)`}>
        <rect x="30" y="40" width="160" height="370" fill={`url(#${id}-body)`} />
        <ellipse cx="110" cy="190" rx="110" ry="130" fill={`url(#${id}-glow)`} opacity="0.55" />
        {/* diagonal energy band */}
        <path
          d="M30 300 L190 230 V270 L30 340 Z"
          fill={product.accent}
          opacity="0.9"
        />
        <path d="M30 346 L190 276 V284 L30 354 Z" fill="#D9A83E" opacity="0.9" />

        {/* wordmark */}
        <text
          x="110"
          y="92"
          textAnchor="middle"
          fontSize="32"
          fontWeight="900"
          fontStyle="italic"
          fill="#fff"
          style={{ fontFamily: "var(--font-display), Impact, sans-serif", letterSpacing: "1px" }}
        >
          KINGFULE
        </text>
        <text
          x="110"
          y="108"
          textAnchor="middle"
          fontSize="7.5"
          fontWeight="700"
          fill="#D9A83E"
          style={{ fontFamily: "var(--font-body), sans-serif", letterSpacing: "2px" }}
        >
          NATURAL HYDRATION
        </text>

        {/* crown + fruit emblem */}
        <g transform="translate(110 168)">
          <path
            d="M-38 22 L-44 -18 L-22 0 L0 -30 L22 0 L44 -18 L38 22 Z"
            fill="#D9A83E"
          />
          <path d="M-30 22 L-34 -4 L-20 8 L0 -18 L20 8 L34 -4 L30 22 Z" fill="#F4C95D" opacity="0.7" />
          <circle cx="0" cy="8" r="17" fill={product.id === "recover" ? "#9BE24B" : "#F6A53A"} />
          <path
            d="M-4 -8 Q4 -20 14 -14 Q6 -8 -4 -8"
            fill={product.id === "active" ? "#77A66A" : "#2F8F5B"}
          />
          <path
            d="M-30 24 Q-14 34 0 28 Q14 34 30 24 Q14 42 0 38 Q-14 42 -30 24"
            fill="#6FE0D2"
            opacity="0.9"
          />
        </g>

        {/* variant name */}
        <text
          x="110"
          y="262"
          textAnchor="middle"
          fontSize={short.length > 7 ? 30 : 38}
          fontWeight="900"
          fill="#fff"
          style={{ fontFamily: "var(--font-display), Impact, sans-serif", letterSpacing: "1.5px" }}
        >
          {short}
        </text>
        <text
          x="110"
          y="283"
          textAnchor="middle"
          fontSize="10"
          fontWeight="700"
          fill="#fff"
          opacity="0.92"
          style={{ fontFamily: "var(--font-body), sans-serif", letterSpacing: "2.5px" }}
        >
          {product.flavor.toUpperCase()}
        </text>

        <text
          x="110"
          y="380"
          textAnchor="middle"
          fontSize="8.5"
          fontWeight="600"
          fill="#fff"
          opacity="0.8"
          style={{ fontFamily: "var(--font-body), sans-serif", letterSpacing: "1.6px" }}
        >
          KING COCONUT · 330ML
        </text>

        <rect x="30" y="40" width="160" height="370" fill={`url(#${id}-shine)`} />
      </g>
    </svg>
  );
}
