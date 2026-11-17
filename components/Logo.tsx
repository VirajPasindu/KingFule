import Image from "next/image";
import Link from "next/link";

export default function Logo({ size = 48, withWord = true }: { size?: number; withWord?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="KingFule home">
      <Image
        src="/branding/logo-256.png"
        alt=""
        width={size}
        height={size}
        priority
        className="rounded-full transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105"
      />
      {withWord && (
        <span className="font-display text-2xl font-black italic tracking-wide text-white">
          KingFule
        </span>
      )}
    </Link>
  );
}
