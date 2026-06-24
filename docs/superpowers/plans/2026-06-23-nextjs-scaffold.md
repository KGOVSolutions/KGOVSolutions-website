# KGOVSolutions Website — Next.js Scaffold Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Stand up a running Next.js + TypeScript + Tailwind app with a shared Header/Footer layout and four placeholder pages (Home, About, Services, Contact) reachable through navigation.

**Architecture:** App Router with file-based routing. Shared `Header` and `Footer` are rendered in the root `layout.tsx` so they appear on every page. All pages are static server components with semantic, accessible placeholder content styled by Tailwind utility classes. No client interactivity, data fetching, or form backend in this pass.

**Tech Stack:** Next.js (latest), TypeScript, Tailwind CSS, ESLint, npm, Turbopack.

**Verification note:** This is a static scaffold with no business logic, so verification is build/lint success plus every route rendering and being reachable from the nav — not unit tests on markup.

---

### Task 1: Scaffold the Next.js application

**Files:**
- Create: entire Next.js project in repo root via `create-next-app`

- [ ] **Step 1: Run create-next-app into the current directory**

The repo already exists with `README.md`, `.git`, and `docs/`. Scaffold into the current directory (`.`) using non-interactive flags so the generator doesn't prompt.

Run:
```bash
npx create-next-app@latest . \
  --ts \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --turbopack \
  --import-alias "@/*" \
  --use-npm \
  --no-git
```

Notes:
- `--no-git` because the repo is already a git repository.
- If the generator complains the directory is not empty, it permits scaffolding alongside `README.md`/`docs/`. If it refuses outright, answer its prompt to proceed; do NOT delete `README.md` or `docs/`.

Expected: command completes, dependencies install, new files appear (`package.json`, `next.config.ts`, `tsconfig.json`, `src/app/`, etc.).

- [ ] **Step 2: Verify the dev server boots**

Run:
```bash
npm run dev
```
Expected: server starts and prints `Local: http://localhost:3000` with no compile errors. Stop it with Ctrl-C after confirming.

- [ ] **Step 3: Verify build and lint pass on the fresh scaffold**

Run:
```bash
npm run build && npm run lint
```
Expected: build completes successfully; lint reports no errors.

- [ ] **Step 4: Commit the scaffold**

```bash
git add -A
git commit -m "Scaffold Next.js app with TypeScript, Tailwind, ESLint"
```

---

### Task 2: Add the Header component

**Files:**
- Create: `src/components/Header.tsx`

- [ ] **Step 1: Create the Header component**

Create `src/components/Header.tsx`:

```tsx
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight text-gray-900">
          KGOVSolutions
        </Link>
        <nav aria-label="Primary">
          <ul className="flex gap-6 text-sm font-medium text-gray-600">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-gray-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Verify it type-checks**

Run:
```bash
npx tsc --noEmit
```
Expected: no errors. (The component isn't wired into a page yet; it is wired in Task 4.)

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.tsx
git commit -m "Add Header component with primary nav"
```

---

### Task 3: Add the Footer component

**Files:**
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Create the Footer component**

Create `src/components/Footer.tsx`:

```tsx
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-500">
        <p className="font-medium text-gray-700">KGOVSolutions</p>
        <p className="mt-1">Solutions for government agencies.</p>
        <p className="mt-4">
          &copy; {new Date().getFullYear()} KGOVSolutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Verify it type-checks**

Run:
```bash
npx tsc --noEmit
```
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "Add Footer component"
```

---

### Task 4: Wire Header/Footer into the root layout and set metadata

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Replace the root layout**

Open `src/app/layout.tsx`. The scaffold generated a font setup (commonly Geist) and a `metadata` export. Replace the file's contents with the following, preserving the generated font imports/variables if they differ — the key changes are: updated `metadata`, and wrapping `{children}` with `Header`/`Footer` inside a flex column so the footer sits at the bottom.

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KGOVSolutions — Solutions for Government Agencies",
  description:
    "KGOVSolutions provides solutions to government agencies.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-white text-gray-900 antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

If the generated font import names differ (e.g. a different font), keep the generated imports and only change `metadata`, the `Header`/`Footer` imports, and the `<body>` structure (`flex min-h-screen flex-col` + `<Header /> <main className="flex-1">{children}</main> <Footer />`).

- [ ] **Step 2: Verify type-check and dev render**

Run:
```bash
npx tsc --noEmit
```
Expected: no errors.

Then run `npm run dev`, open `http://localhost:3000`, and confirm the Header (with nav) and Footer now appear around the default home content. Stop the server.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "Wire Header/Footer into root layout and set site metadata"
```

---

### Task 5: Build the Home page

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace the home page**

Replace the entire contents of `src/app/page.tsx`:

```tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <section className="py-20 sm:py-28">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Solutions that help government agencies serve the public.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          KGOVSolutions partners with public-sector teams to deliver reliable,
          secure, and modern technology. Placeholder copy — replace with your
          real value proposition.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/contact"
            className="rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700"
          >
            Get in touch
          </Link>
          <Link
            href="/services"
            className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
          >
            Explore services
          </Link>
        </div>
      </section>

      <section className="border-t border-gray-200 py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          What we do
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {[
            { title: "Modernization", body: "Placeholder description of legacy system modernization services." },
            { title: "Security & Compliance", body: "Placeholder description of security and compliance offerings." },
            { title: "Advisory", body: "Placeholder description of strategy and advisory services." },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Verify type-check**

Run:
```bash
npx tsc --noEmit
```
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "Build Home page with hero and services teaser"
```

---

### Task 6: Build the About page

**Files:**
- Create: `src/app/about/page.tsx`

- [ ] **Step 1: Create the About page**

Create `src/app/about/page.tsx`:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — KGOVSolutions",
  description: "Learn about KGOVSolutions and our mission.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">About us</h1>
      <p className="mt-6 text-lg text-gray-600">
        KGOVSolutions provides solutions to government agencies. Placeholder
        copy — replace with your company story.
      </p>
      <h2 className="mt-12 text-xl font-semibold text-gray-900">Our mission</h2>
      <p className="mt-3 text-gray-600">
        Placeholder mission statement describing how KGOVSolutions helps public-sector
        organizations achieve their goals.
      </p>
      <h2 className="mt-10 text-xl font-semibold text-gray-900">Who we are</h2>
      <p className="mt-3 text-gray-600">
        Placeholder overview of the team and the experience KGOVSolutions brings to
        government engagements.
      </p>
    </div>
  );
}
```

- [ ] **Step 2: Verify type-check**

Run:
```bash
npx tsc --noEmit
```
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "Add About page"
```

---

### Task 7: Build the Services page

**Files:**
- Create: `src/app/services/page.tsx`

- [ ] **Step 1: Create the Services page**

Create `src/app/services/page.tsx`:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — KGOVSolutions",
  description: "Services KGOVSolutions offers to government agencies.",
};

const services = [
  { title: "System Modernization", body: "Placeholder description of legacy modernization and cloud migration services." },
  { title: "Security & Compliance", body: "Placeholder description of security assessments, FedRAMP, and compliance support." },
  { title: "Data & Analytics", body: "Placeholder description of data platform and analytics services." },
  { title: "Advisory & Strategy", body: "Placeholder description of technology strategy and advisory services." },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Services</h1>
      <p className="mt-6 max-w-2xl text-lg text-gray-600">
        How KGOVSolutions supports government agencies. Placeholder copy — replace
        with your real offerings.
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900">{service.title}</h2>
            <p className="mt-2 text-gray-600">{service.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify type-check**

Run:
```bash
npx tsc --noEmit
```
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/services/page.tsx
git commit -m "Add Services page"
```

---

### Task 8: Build the Contact page

**Files:**
- Create: `src/app/contact/page.tsx`

- [ ] **Step 1: Create the Contact page**

Create `src/app/contact/page.tsx`. The form is static markup only (no submit handler / backend this pass); a `noValidate`-free static form is fine since it does not submit anywhere yet.

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — KGOVSolutions",
  description: "Get in touch with KGOVSolutions.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Contact</h1>
      <p className="mt-6 text-lg text-gray-600">
        Reach out to learn how KGOVSolutions can support your agency. Placeholder
        copy — replace with real contact details.
      </p>

      <form className="mt-10 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-gray-900 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-gray-900 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-900">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-gray-900 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
```

- [ ] **Step 2: Verify type-check**

Run:
```bash
npx tsc --noEmit
```
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/contact/page.tsx
git commit -m "Add Contact page with static form"
```

---

### Task 9: Full-site verification

**Files:** none (verification only)

- [ ] **Step 1: Build and lint the whole site**

Run:
```bash
npm run build && npm run lint
```
Expected: build succeeds and reports all four routes (`/`, `/about`, `/services`, `/contact`) as static; lint passes with no errors.

- [ ] **Step 2: Manually verify every route and the nav**

Run `npm run dev`, then in the browser:
- Visit `http://localhost:3000` — Home renders with hero + "What we do".
- Click each nav link (About, Services, Contact) — each route renders its own content with Header and Footer present.
- Click "KGOVSolutions" / "Home" — returns to the home page.

Expected: all four pages reachable through the Header nav, no console errors. Stop the server.

- [ ] **Step 3: Final commit if anything changed**

If verification surfaced no changes, nothing to commit. Otherwise:
```bash
git add -A
git commit -m "Finalize scaffold verification"
```

---

## Self-Review

**Spec coverage:**
- Tooling (Next/TS/Tailwind/ESLint/src/App Router/Turbopack/@ alias/npm) → Task 1.
- `layout.tsx` with Header+Footer → Task 4.
- `Header.tsx` → Task 2; `Footer.tsx` → Task 3.
- Home/About/Services/Contact pages → Tasks 5/6/7/8.
- `globals.css` (Tailwind) → generated by Task 1.
- Static contact form, no backend → Task 8.
- Verification (dev/build/lint/route reachability) → Tasks 1 and 9.
- Out-of-scope items (real copy, branding, form backend, extra pages, deploy config) → intentionally excluded.

No gaps found.

**Placeholder scan:** Page body text uses the word "placeholder" intentionally as visible site content per the spec ("neutral placeholder content"). No plan-level TODO/TBD or unspecified steps — every code step shows complete code.

**Type/naming consistency:** Component default exports `Header`/`Footer` imported via `@/components/...` in Task 4 match their definitions in Tasks 2/3. Route folders (`about`, `services`, `contact`) match the nav `href`s in `Header.tsx`.
