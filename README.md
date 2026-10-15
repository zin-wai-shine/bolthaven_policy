# Project_EA — Public Website

A minimalist, modern, and production-ready public website for **Project_EA**, a social media publishing and workflow automation platform engineered for real-estate agents, brokerages, and property businesses.

Built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **React Router**.

---

## 1. Project Overview

Project_EA centralizes property media management, caption staging, channel-specific formatting, and scheduled publishing across social platforms (such as TikTok, Instagram, and Facebook).

This website serves as the primary public web presence and documentation hub for the platform, providing:
- Clear feature explanations and operational workflows.
- Realistic, authentic product UI previews built directly with React and CSS.
- Complete, editable legal drafts for **Terms of Service** and **Privacy Policy**.
- Dedicated compliance and operational contact channels.
- Preparation for **TikTok Developer App** website verification and review.

---

## 2. Technology Stack

- **Framework:** React 19 + TypeScript
- **Bundler / Dev Server:** Vite 8
- **Styling:** Tailwind CSS (Custom neutral palette with `#E5484D` accent)
- **Routing:** React Router 7 (HTML5 History API with SPA fallback)
- **Icons:** React Icons (`react-icons/fi`, `react-icons/fa`)
- **Linter & Code Quality:** Oxlint (0 errors, 0 warnings)

---

## 3. Design System

### Color Palette
- **Primary Background:** `#FFFFFF`
- **Secondary Background:** `#F7F8FA`
- **Primary Text:** `#111827`
- **Secondary Text:** `#667085`
- **Subtle Borders:** `#E5E7EB`
- **Primary Accent:** `#E5484D`
- **Accent Hover:** `#C9363B`
- **Dark Surface:** `#111318`

### Typography
- Primary Font: **Inter** (via Google Fonts preconnect with system sans-serif fallback)
- Fluid type clamp: `text-hero` (clamp 36px–60px), `text-section-title` (clamp 28px–40px)

---

## 4. Website Structure & Routes

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | **Home** | Hero with interactive composer preview, platform overview, 5-stage stepper, full dashboard workstation preview, supported channels, and closing CTA. |
| `/features` | **Features** | 7 comprehensive deep-dives: Media Management, Content Prep, Channel Captions, Multi-Account, Publishing Workflows, Posting History, and Workflow Automation. |
| `/how-it-works` | **How It Works** | 6-stage technical publishing lifecycle from media ingestion to verified API dispatch and audit logging. |
| `/terms` | **Terms of Service** | 16-section legal document draft tailored specifically for property social media automation and API dispatch. |
| `/privacy` | **Privacy Policy** | 19-section data privacy draft with transparent OAuth token handling, TikTok Content Posting API data disclosures, and data deletion workflows. |
| `/contact` | **Contact & Support** | Verified direct inquiry channels (Business, Technical Support, Privacy Officer) with ICT operating timelines. |
| `/404` | **Not Found** | Clean fallback with navigational recovery links. |

---

## 5. Local Development

### Prerequisites
- Node.js 18+ or 20+
- npm 9+

### Installation & Run
```bash
# Install dependencies
npm install

# Start local development server (http://127.0.0.1:5173/)
npm run dev

# Run code quality inspection
npm run lint

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 6. Static Deployment

The project compiles to static assets in `dist/` and includes SPA rewrite configuration for all major static hosting providers.

### Cloudflare Pages
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **SPA Rewrites:** Handled automatically by `public/_redirects`

### Vercel
- **Framework Preset:** Vite
- **Root Directory:** `./`
- **Build command:** `npm run build`
- **Output Directory:** `dist`
- **SPA Rewrites:** Configured in `vercel.json`

### Netlify
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **SPA Rewrites:** Handled automatically by `public/_redirects`

---

## 7. TikTok Developer App Review Guidelines

When preparing for TikTok Developer App submission:
1. **Host on Public Domain:** Deploy the build to an official domain with HTTPS enabled.
2. **Domain Verification:** Verify ownership in the TikTok Developer Portal using meta tag, file upload, or DNS record.
3. **Legal Links Visibility:** Terms of Service (`/terms`) and Privacy Policy (`/privacy`) are directly accessible from every page in the global footer.
4. **Data Disclosures:** The Privacy Policy explicitly details the handling of TikTok user identifiers (`open_id`), display names, and video upload permissions via OAuth 2.0.
5. **Secure Backend Separation:** Static frontend client code does not store or expose TikTok Client Secrets or OAuth access tokens. Actual OAuth exchange and token refreshes occur in a separate secure backend application.
# bolthaven_policy
