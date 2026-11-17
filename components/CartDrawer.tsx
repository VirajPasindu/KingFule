"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/lib/cart";
import { SITE } from "@/lib/site";

export default function CartDrawer() {
  const { items, count, total, setQty, remove, clear, isOpen, closeCart } =
    useCart();

  const whatsappMessage = () => {
    if (items.length === 0) return "";
    const lines = items.map(
      (i) => `• ${i.name} × ${i.qty} — LKR ${(i.price * i.qty).toLocaleString()}`
    );
    const body = [
      "Hi KingFule! I would like to place an order:",
      "",
      ...lines,
      "",
      `Total: LKR ${total.toLocaleString()}`,
      "",
      "Please confirm availability and delivery details.",
    ].join("\n");
    return `${SITE.whatsapp}?text=${encodeURIComponent(body)}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={closeCart}
            aria-hidden
          />
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col bg-night text-white shadow-2xl"
            role="dialog"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <ShoppingBag size={22} className="text-gold" />
                <h2 className="font-display text-xl font-bold">
                  Your Cart ({count})
                </h2>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:bg-white/10"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <p className="py-16 text-center text-white/60">
                  Your cart is empty. Add products from the shop.
                </p>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-3"
                    >
                      <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-lg bg-black/30">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-display font-bold">
                          {item.name}
                        </p>
                        <p className="text-sm text-gold">
                          LKR {item.price.toLocaleString()}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setQty(item.id, item.qty - 1)}
                            className="grid h-8 w-8 place-items-center rounded-full border border-white/20 hover:bg-white/10"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-6 text-center text-sm font-bold">
                            {item.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQty(item.id, item.qty + 1)}
                            className="grid h-8 w-8 place-items-center rounded-full border border-white/20 hover:bg-white/10"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                          <button
                            type="button"
                            onClick={() => remove(item.id)}
                            className="ml-auto grid h-8 w-8 place-items-center rounded-full text-red-400 hover:bg-red-500/20"
                            aria-label="Remove item"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-white/10 px-5 py-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-white/70">Subtotal</span>
                  <span className="font-display text-2xl font-bold text-gold">
                    LKR {total.toLocaleString()}
                  </span>
                </div>
                <p className="mb-4 text-xs text-white/50">
                  Pre-order / enquiry only. We will confirm stock, delivery and
                  final pricing via WhatsApp.
                </p>
                <a
                  href={whatsappMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-extrabold uppercase tracking-wider text-night transition hover:bg-[#e8b84d]"
                >
                  Order via WhatsApp
                </a>
                <button
                  type="button"
                  onClick={clear}
                  className="mt-3 w-full text-center text-sm text-white/50 hover:text-white"
                >
                  Clear cart
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
