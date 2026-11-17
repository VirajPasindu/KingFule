import { Camera, Music2, Share2 } from "lucide-react";
import { SITE } from "@/lib/site";

const ITEMS = [
  { key: "instagram", label: "Instagram", Icon: Camera },
  { key: "tiktok", label: "TikTok", Icon: Music2 },
  { key: "facebook", label: "Facebook", Icon: Share2 },
] as const;

/**
 * Renders a real link once a profile URL is set in lib/site.ts.
 * Until then the icon is shown as "coming soon" instead of linking nowhere.
 */
export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {ITEMS.map(({ key, label, Icon }) => {
        const href = SITE.social[key];
        const base =
          "grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition";
        return (
          <li key={key}>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`KingFule on ${label}`}
                className={`${base} hover:border-gold hover:bg-gold hover:text-night`}
              >
                <Icon size={18} />
              </a>
            ) : (
              <span
                role="img"
                aria-label={`${label} — coming soon`}
                title={`${label} — coming soon`}
                className={`${base} cursor-not-allowed opacity-40`}
              >
                <Icon size={18} />
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
