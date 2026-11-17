import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import BundleSection from "@/components/BundleSection";
import ProductComparison from "@/components/ProductComparison";
import CallToAction from "@/components/CallToAction";
import { PRODUCTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "KingFule Active (Original), Endurance (Passion Fruit) and Recover (Lime & Mint): three natural hydration formulations made with Sri Lankan King Coconut water.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader eyebrow="Our products" title="Three stages. One natural system.">
        <p>
          Active for every day, Endurance for the effort, Recover for afterwards. Each KingFule is
          built on authentic Sri Lankan King Coconut water. Add individual cans or the 3-Pack
          Variety to your cart and place a pre-order enquiry via WhatsApp.
        </p>
      </PageHeader>
      {PRODUCTS.map((p, i) => (
        <ProductCard key={p.id} product={p} index={i} />
      ))}
      <BundleSection />
      <ProductComparison />
      <CallToAction />
    </>
  );
}
