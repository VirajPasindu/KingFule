import type { Metadata } from "next";
import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import ProductShowcase from "@/components/ProductShowcase";
import Benefits from "@/components/Benefits";
import HydrationJourney from "@/components/HydrationJourney";
import Sustainability from "@/components/Sustainability";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: { absolute: "KingFule — Natural Sports Hydration from Sri Lankan King Coconut" },
  description:
    "Awaken Your Natural Energy. KingFule is a three-stage natural hydration system — Active, Endurance and Recover — made with Sri Lankan King Coconut water.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <ProductShowcase />
      <Benefits />
      <HydrationJourney />
      <Sustainability />
      <CallToAction />
    </>
  );
}
