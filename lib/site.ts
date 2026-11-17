export const SITE = {
  brand: "KingFule",
  company: "SixTale (Pvt) Ltd",
  tagline: "Awaken Your Natural Energy",
  address: "Sri Gunarthana Mawatha, Minuwangoda, Sri Lanka",
  phoneDisplay: "071-2523649",
  phoneTel: "+94712523649",
  // WhatsApp uses the business phone number from the business plan.
  // Confirm that this number is registered on WhatsApp before launch.
  whatsapp: "https://wa.me/94712523649",
  email: "Kingfule@gmail.com",
  // Social profiles are not published yet. Add the real URLs here and the
  // links in the footer / contact page switch on automatically.
  social: {
    instagram: "",
    tiktok: "",
    facebook: "",
  },
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Our Products", href: "/products" },
  { label: "Our Story", href: "/story" },
  { label: "Why KingFule", href: "/#why" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Contact", href: "/contact" },
] as const;

export type VariantId = "active" | "endurance" | "recover";

export interface Product {
  id: VariantId;
  name: string;
  flavor: string;
  purpose: string;
  stage: string;
  stageNo: string;
  blurb: string;
  long: string;
  cta: string;
  accent: string;
  accentDeep: string;
  surface: string;
  ink: string;
  highlights: string[];
  whenToChoose: string[];
  who: string;
  image: string;
  price: number; // LKR
}

export const PRODUCTS: Product[] = [
  {
    id: "active",
    name: "KingFule Active",
    flavor: "Original",
    purpose: "Everyday Hydration",
    stage: "Everyday",
    stageNo: "01",
    blurb:
      "Your everyday companion for natural refreshment. KingFule Active brings the goodness of authentic King Coconut water into a balanced, refreshing beverage for daily hydration, school, office, and light workouts.",
    long: "The base of the system: a balanced, light formulation built around authentic Sri Lankan King Coconut water.",
    cta: "Discover Active",
    accent: "#D9A83E",
    accentDeep: "#B8860B",
    surface: "#1A140A",
    ink: "#FFF8E7",
    highlights: [
      "Authentic Sri Lankan King Coconut water",
      "Light, balanced everyday formulation",
      "Original flavour",
    ],
    whenToChoose: ["At school or in the office", "Throughout the day", "Light workouts"],
    who: "Students, office workers and anyone who wants natural hydration through the day.",
    image: "/products/active.jpg",
    price: 300,
  },
  {
    id: "endurance",
    name: "KingFule Endurance",
    flavor: "Passion Fruit",
    purpose: "For Longer Activities",
    stage: "During Activity",
    stageNo: "02",
    blurb:
      "Made for those who push further. KingFule Endurance combines King Coconut water with a passion fruit-inspired formulation and a higher electrolyte density for long-duration physical activities.",
    long: "Designed for long sessions: running, cricket, cycling and other sustained effort.",
    cta: "Discover Endurance",
    accent: "#A855F7",
    accentDeep: "#7C3AED",
    surface: "#1A0B2E",
    ink: "#F3E8FF",
    highlights: [
      "King Coconut water base",
      "Passion fruit-inspired flavour",
      "Higher electrolyte density",
    ],
    whenToChoose: ["Long runs and rides", "Match days and tournaments", "Extended training"],
    who: "Runners, cricketers, cyclists and sports clubs.",
    image: "/products/endurance.jpg",
    price: 320,
  },
  {
    id: "recover",
    name: "KingFule Recover",
    flavor: "Lime & Mint",
    purpose: "Post-Activity Refreshment",
    stage: "After Activity",
    stageNo: "03",
    blurb:
      "Complete your hydration journey. KingFule Recover features a refreshing lime and mint formulation designed for post-workout replenishment.",
    long: "The cool, refreshing finish to the system, made for after the session is done.",
    cta: "Discover Recover",
    accent: "#4ADE80",
    accentDeep: "#16A34A",
    surface: "#0A1F14",
    ink: "#ECFDF5",
    highlights: [
      "King Coconut water base",
      "Refreshing lime & mint flavour",
      "Made for post-workout replenishment",
    ],
    whenToChoose: ["Right after the gym", "After yoga or Pilates", "After a match or race"],
    who: "Gym-goers, yoga and fitness-centre members.",
    image: "/products/recover.jpg",
    price: 320,
  },
];

export const BUNDLE = {
  id: "bundle" as const,
  name: "KingFule 3-Pack Variety",
  description:
    "Experience all three stages of KingFule in one complete hydration bundle: Active, Endurance and Recover.",
  image: "/products/bundle.jpg",
  price: 850, // slight discount vs individual
  items: ["active", "endurance", "recover"] as const,
};

export const BENEFITS = [
  {
    icon: "Leaf",
    title: "Natural King Coconut Goodness",
    text: "Made using authentic Sri Lankan King Coconut water.",
  },
  {
    icon: "Zap",
    title: "Naturally Occurring Electrolytes",
    text: "Features naturally occurring minerals such as potassium and magnesium.",
  },
  {
    icon: "Layers",
    title: "Three-Stage Hydration",
    text: "Active, Endurance, and Recover for different consumption occasions.",
  },
  {
    icon: "Recycle",
    title: "Sustainable Packaging",
    text: "Aluminum cans and glass bottles instead of conventional single-use plastic.",
  },
  {
    icon: "Sparkles",
    title: "Sri Lankan Innovation",
    text: "Combining local agricultural heritage with modern beverage processing.",
  },
] as const;

export const PROCESS = [
  {
    title: "King Coconut sourcing",
    text: "We partner with local growers in Sri Lanka to source authentic King Coconuts at peak freshness.",
  },
  {
    title: "Gentle extraction",
    text: "Water is carefully extracted and filtered to retain natural electrolytes and the characteristic taste.",
  },
  {
    title: "Formulation",
    text: "Each variant is balanced for its stage: everyday, endurance or recovery, with natural flavour cues.",
  },
  {
    title: "Packaging",
    text: "Filled into recyclable aluminum cans (330 ml) designed to protect quality and travel well.",
  },
] as const;
