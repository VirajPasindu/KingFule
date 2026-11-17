"use client";

import { ShoppingCart } from "lucide-react";
import { useCart, type CartItemId } from "@/lib/cart";

interface Props {
  id: CartItemId;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  variant?: "solid" | "outline";
}

export default function AddToCartButton({
  id,
  label = "Add to cart",
  className = "",
  style,
  variant = "solid",
}: Props) {
  const { add } = useCart();

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold uppercase tracking-wider transition hover:-translate-y-0.5";
  const solid = "bg-gold text-night hover:bg-[#e8b84d]";
  const outline =
    "border-2 border-current bg-transparent hover:bg-white/10";

  return (
    <button
      type="button"
      onClick={() => add(id)}
      className={`${base} ${variant === "solid" ? solid : outline} ${className}`}
      style={style}
    >
      <ShoppingCart size={18} />
      {label}
    </button>
  );
}
