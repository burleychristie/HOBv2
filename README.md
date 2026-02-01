# House of Become — Website

A Next.js + Tailwind site for **House of Become**.

## Local dev
```bash
npm install
npm run dev
```

## Deploy to Vercel
- Push this repo to GitHub
- Import the repo in Vercel
- Framework preset: **Next.js**
- Build command: `npm run build`

## Content
Update copy + data in:
- `lib/content.ts`
- `lib/stories.ts`

## Notes
- The contact page uses a `mailto:` link by default.
- If you want a real form submission, wire a Vercel route with Resend/Postmark and add env vars.
