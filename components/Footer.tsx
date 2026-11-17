import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { NAV, PRODUCTS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-white/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        <div>
          <Logo size={56} />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            A three-stage natural sports hydration system made with authentic Sri Lankan King
            Coconut water. {SITE.tagline}.
          </p>
          <SocialLinks className="mt-6" />
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-gold">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.label}>
                <Link href={n.href} className="transition hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-gold">Products</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {PRODUCTS.map((p) => (
              <li key={p.id}>
                <Link href={`/products#${p.id}`} className="transition hover:text-gold">
                  {p.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/products#bundle" className="transition hover:text-gold">
                Hydration Journey 3-Pack
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-gold">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-leaf" aria-hidden />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-leaf" aria-hidden />
              <a href={`tel:${SITE.phoneTel}`} className="hover:text-gold">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-leaf" aria-hidden />
              <a href={`mailto:${SITE.email}`} className="break-all hover:text-gold">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-white/55 sm:px-8 md:flex-row md:justify-between">
          <p>
            © 2026 {SITE.company}. KingFule is a pre-launch brand.
          </p>
          <p>Production facility, certifications and distribution are planned and not yet in operation.</p>
        </div>
      </div>
    </footer>
  );
}
