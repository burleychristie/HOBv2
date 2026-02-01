# House of Become — Website

Next.js + Tailwind site for House of Become.

## Quick start

```bash
npm install
npm run dev
```

## The only file you usually need to edit

### 1) Copy + products
Open:

`lib/site-data.ts`

That file controls:
- Home page text (hero, problem statement, Threshold intro, packaging copy)
- Story page text
- All products (name, subtitle, price, details, image path)

### 2) Images
Images live in:
- `public/images/products/` (product shots)
- `public/images/editorial/` (lifestyle / section photos)
- `public/images/concept/` (any temporary concept deck assets)

If you replace an image file but keep the same filename, you **don’t need to change any code**.

Current key filenames:
- Hero: `public/images/editorial/hero-pendant-book.png`
- Design principles image: `public/images/editorial/design-principles.png`
- Products:
  - `public/images/products/arch-emerald.png`
  - `public/images/products/arch-pear.png`
  - `public/images/products/arch-round.png`
  - `public/images/products/ring-band.png`
  - `public/images/products/ring-solitaire.png`

## Deploy (Vercel)
- Push this repo to GitHub
- Import into Vercel
- Deploy (Vercel auto-detects Next.js)
