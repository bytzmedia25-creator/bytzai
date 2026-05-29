# BytzAI Website

Editorial-style marketing website for BytzAI — built with React, Vite, Tailwind CSS, and Framer Motion.

## Stack

- **React 18** + **React Router v6**
- **Vite** (build tool)
- **Tailwind CSS** + **shadcn/ui** primitives
- **Framer Motion** (animations)
- **Sonner** (toast notifications)

## Project Structure

```
src/
├── App.jsx                        # Root app with routes
├── main.jsx                       # Entry point
├── index.css                      # Global styles + Tailwind
├── components/
│   ├── landing/
│   │   ├── Layout.jsx             # Navbar + page transitions
│   │   ├── Footer.jsx
│   │   ├── FuturisticBg.jsx       # Animated particle canvas
│   │   └── TypewriterText.jsx
│   └── ui/
│       ├── input.jsx
│       ├── textarea.jsx
│       └── select.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── WhyBytzAI.jsx
│   ├── Global.jsx
│   ├── Partners.jsx
│   └── Contact.jsx
└── lib/
    ├── utils.js
    └── PageNotFound.jsx
```

## Local Development

```bash
npm install
npm run dev
```

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Vite — no config needed
5. Click **Deploy**

The `vercel.json` handles SPA routing (all paths rewrite to `/index.html`).

## Customisation Checklist

- [ ] Update `hello@bytzai.com` in `Contact.jsx`
- [ ] Replace WhatsApp link (`wa.me/91XXXXXXXXXX`) in `Contact.jsx`
- [ ] Add real Calendly URL in `Contact.jsx`
- [ ] Update LinkedIn/Twitter/GitHub links in `Footer.jsx`
- [ ] Replace `og:url` meta tag in `index.html` with real domain
- [ ] Wire up contact form to a backend (Formspree, Resend, etc.)
