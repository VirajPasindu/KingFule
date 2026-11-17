# KingFule website

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Framer Motion · Lucide.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## What's new (updated packaging + cart)

- Replaced SVG can mockups with real product photography:
  - `/public/products/active.jpg` — KingFule Active (Original)
  - `/public/products/endurance.jpg` — KingFule Endurance (Passion Fruit)
  - `/public/products/recover.jpg` — KingFule Recover (Lime & Mint)
  - `/public/products/bundle.jpg` — 3-Pack Variety
- Shopping cart (client-side, localStorage):
  - Cart icon + badge in the navbar
  - Add to cart on each product and on the 3-Pack section
  - Cart drawer with qty controls
  - "Order via WhatsApp" pre-fills the message with cart contents
- Dedicated 3-Pack (bundle) option with its own add-to-cart and pricing
- Updated brand accents to match the new can designs (gold / purple / green)

## Where to edit
- `lib/site.ts` — contact details, nav, product copy, prices, images, social links.
- `lib/cart.tsx` — cart state & persistence.
- `components/CartDrawer.tsx` — cart UI & WhatsApp order message.
- `components/AddToCartButton.tsx` — reusable add-to-cart button.
- `public/products/` — product photography.
- `public/branding/` — logo.

## Before launch
- Add real Instagram / TikTok / Facebook URLs in `lib/site.ts`.
- Confirm the WhatsApp number in `lib/site.ts`.
- The contact form has no backend: it validates, then opens the visitor's email app.
- Final nutrition facts and certifications can be added once available.
