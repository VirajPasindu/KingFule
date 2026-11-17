import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact the KingFule team at SixTale (Pvt) Ltd for product information, wholesale and distribution, gym and sports partnerships, or business opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact us" title="Let's talk hydration.">
        <p>
          Questions about KingFule, wholesale, or partnering with us? Send us a message and the
          team will get back to you.
        </p>
      </PageHeader>

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            <div className="rounded-3xl bg-night p-8 text-white">
              <h2 className="font-display text-3xl font-extrabold text-gold">
                KingFule – {SITE.company}
              </h2>
              <ul className="mt-6 space-y-5">
                <li className="flex gap-4">
                  <MapPin className="mt-1 shrink-0 text-leaf" size={20} aria-hidden />
                  <span>{SITE.address}</span>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-1 shrink-0 text-leaf" size={20} aria-hidden />
                  <a href={`tel:${SITE.phoneTel}`} className="hover:text-gold">{SITE.phoneDisplay}</a>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-1 shrink-0 text-leaf" size={20} aria-hidden />
                  <a href={`mailto:${SITE.email}`} className="break-all hover:text-gold">{SITE.email}</a>
                </li>
              </ul>

              <a
                href={`${SITE.whatsapp}?text=${encodeURIComponent("Hello KingFule, I would like to know more about your products.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-extrabold uppercase tracking-wider text-night transition hover:-translate-y-0.5"
              >
                <MessageCircle size={20} aria-hidden />
                Chat on WhatsApp
              </a>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/60">Follow KingFule</p>
                <SocialLinks />
              </div>
            </div>

            <div className="rounded-3xl border border-forest/15 bg-white/70 p-8">
              <h2 className="font-display text-2xl font-extrabold text-forest">We can help with</h2>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-night/80">
                <li>General inquiries</li>
                <li>Product information</li>
                <li>Wholesale / distribution</li>
                <li>Gym &amp; sports partnerships</li>
                <li>Business opportunities</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
