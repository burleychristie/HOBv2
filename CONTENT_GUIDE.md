# Editing guide (House of Become)

Most edits can be done in **one file**:

- `lib/site-data.ts`

## What you can change there
- Homepage text (hero, problem, threshold copy)
- Story page text
- Design principles bullets
- Product listings (name, subtitle, price, details, image)

## Updating images
Put images in:
- `public/images/products/` for product images
- `public/images/editorial/` for lifestyle/editorial images

Then update the `image:` path inside `lib/site-data.ts`.

## Quick checklist after edits
```bash
npm install
npm run build
```
If `npm run build` passes, Vercel will deploy cleanly.
