# DigiMark Pro — Premium Agency Portfolio Website

A high-performance, luxury minimalist website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Lenis Smooth Scroll**. Designed to look and feel like a modern software product website (inspired by Apple, Stripe, Linear, and Vercel) instead of a typical marketing agency.

---

## 🚀 Key Features

*   **Luxury Minimalist Design**: Custom color theme (`#FAF8F5` background, `#111111` typography, `#C9A66B` gold accent) with a focus on generous spacing and typographic hierarchy.
*   **Tactile Textures**: Fixed inline SVG noise background and animated grids for depth and tactile feedback.
*   **Lenis Smooth Scroll**: Elegant scrolling momentum with custom anchor offset tracking.
*   **Bespoke Spring Cursor**: Fluid desktop cursor that scales and displays custom context labels when hovering interactive items.
*   **Apple-Style Bento Grid**: Presenting agency capabilities with subtle hover states.
*   **Animated Work Filter**: Smooth Framer Motion transitions to sort projects by category.
*   **Dynamic Case Studies**: Editorial subpages detailing challenges, deliverables, results, and mockups.
*   **Validated Contact Form**: Full schema validation with Zod and React Hook Form, complete with dynamic submit states and canvas-confetti.
*   **Resend Integration**: Safe server-side email dispatching with a developer fallback log mode.
*   **100/100 SEO & Accessibility Setup**: JSON-LD professional services schemas, robot crawler controls, metadata, and semantic markup.

---

## 🛠️ Stack & Libraries

*   **Framework**: Next.js 16.2.9 (App Router)
*   **Language**: TypeScript
*   **Styles**: Tailwind CSS v4.0.0 (PostCSS)
*   **Animation**: Framer Motion
*   **Smooth Scroll**: Lenis
*   **Icons**: Lucide React Icons
*   **Forms**: React Hook Form + Zod + Hookform Resolvers
*   **Lead Capturing**: Resend API
*   **Visual Flair**: Canvas Confetti

---

## ⚙️ Local Development

### 1. Installation
Clone this repository and run the package installer:
```bash
npm install
```

### 2. Run Development Server
Start the local server at `http://localhost:3000`:
```bash
npm run dev
```

### 3. Production Build
Verify typescript types and bundle pages for static/dynamic production optimization:
```bash
npm run build
```

---

## 📦 Vercel Deployment Instructions

DigiMark Pro is fully configured and ready for zero-config deployment on Vercel.

### Option A: Deployment via Vercel Dashboard (Recommended)

1.  Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2.  Log in to [Vercel](https://vercel.com) and click **Add New** > **Project**.
3.  Import the repository.
4.  In the **Configure Project** step:
    *   **Framework Preset**: Select `Next.js`.
    *   **Root Directory**: `./`.
    *   **Environment Variables**: Add your `RESEND_API_KEY` (Optional. If not set, the contact form will automatically fallback to logging submissions in the console so that visitors can still test submissions successfully).
5.  Click **Deploy**. Vercel will build, optimize, and deploy the application within a minute.

### Option B: Deployment via Vercel CLI

If you have Vercel CLI installed globally:

```bash
# Log in to Vercel
vercel login

# Initialize and link project
vercel

# Deploy to production
vercel --prod
```

### Environment Variable Setup
For the contact form to dispatch real emails, add this variable to your Vercel project configuration:
*   `RESEND_API_KEY`: Get a free API key at [resend.com](https://resend.com) and verify your sending domain.
