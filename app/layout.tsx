import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart";
import CartDrawer from "@/components/CartDrawer";

const display = localFont({
  src: [
    { path: "./fonts/barlow-condensed-latin-700-normal.woff2", weight: "700" },
    { path: "./fonts/barlow-condensed-latin-800-normal.woff2", weight: "800" },
    { path: "./fonts/barlow-condensed-latin-900-normal.woff2", weight: "900" },
  ],
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: "./fonts/inter-latin-wght-normal.woff2",
  variable: "--font-body",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KingFule — Awaken Your Natural Energy",
    template: "%s | KingFule",
  },
  description:
    "KingFule is a three-stage natural sports hydration system made with Sri Lankan King Coconut water, by SixTale (Pvt) Ltd. Pre-launch.",
  applicationName: "KingFule",
  keywords: [
    "KingFule",
    "King Coconut",
    "thambili",
    "natural sports drink",
    "Sri Lanka",
    "hydration",
  ],
};

export const viewport: Viewport = {
  themeColor: "#123D32",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:font-semibold focus:text-night"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
