# Atharva Pagar — Portfolio

Personal portfolio website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**.

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4 + Vanilla CSS
- **Animations** — Canvas API (stars, aurora, shooting stars)
- **Contact Form** — EmailJS
- **Icons** — Font Awesome

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contact Form Setup

The contact form uses [EmailJS](https://www.emailjs.com). Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Project Structure

```
src/
├── app/          # Next.js app router & global styles
├── components/   # All UI sections (Hero, About, Skills, etc.)
├── lib/          # data.ts — single source of truth for all content
└── hooks/        # useScrollReveal custom hook
```

## Sections

- **Hero** — Name, typewriter role animation, CTA buttons
- **About** — Bio, resume download
- **Skills** — Tech stack categorised by domain
- **Work Experience** — Timeline of roles
- **Projects** — Project cards with GitHub links
- **Education** — Academic background
- **Certifications** — Cloud & Blockchain certs
- **Contact** — EmailJS-powered contact form

## License

MIT
