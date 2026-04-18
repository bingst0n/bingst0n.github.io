# Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio as a single-page terminal-dark site matching `reference.html`, running on the existing Next.js + GitHub Pages stack.

**Architecture:** Three files change — `globals.css` gets a complete CSS rewrite matching the reference's custom-property system, `layout.tsx` swaps fonts, and `page.tsx` is rewritten as a server component with no Tailwind classes. All animated components are removed; all motion is CSS-only.

**Tech Stack:** Next.js 15 (App Router), TypeScript, `next/font/google` (Fraunces + JetBrains Mono), plain CSS custom properties.

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Rewrite | `app/globals.css` | Full CSS system: variables, reset, nav, hero, sections, projects, about, contact, footer, responsive |
| Rewrite | `app/layout.tsx` | Load Fraunces + JetBrains Mono, expose as CSS vars, update metadata |
| Rewrite | `app/page.tsx` | Single-page layout as a server component — nav, hero, work, about, contact, footer |

Unused components (`AnimatedGrid`, `FloatingGraphics`, `TypewriterName`, `ScrollReveal`, `PageTransition`) are not deleted (other pages may import them) but are no longer imported by `page.tsx`.

---

## Task 1: Rewrite `app/globals.css`

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Replace the entire file contents**

```css
:root {
  --bg:            #0a0f0a;
  --bg-elev:       #0f1610;
  --bg-panel:      #0c120c;
  --border:        #1f3524;
  --border-bright: #2e5437;
  --fg:            #d6f5d6;
  --fg-dim:        #7aa884;
  --fg-muted:      #4a6b52;
  --accent:        #00ff88;
  --accent-dim:    #00c86b;
  --accent-glow:   rgba(0, 255, 136, 0.22);
  --font-mono:     var(--font-jetbrains-mono), ui-monospace, 'SF Mono', Menlo, monospace;
  --font-display:  var(--font-fraunces), Georgia, serif;
  --radius:        4px;
  --maxw:          1080px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-mono);
  font-size: 14px;
  line-height: 1.65;
  color: var(--fg);
  background: var(--bg);
  background-image:
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,255,136,0.08), transparent),
    radial-gradient(ellipse 60% 40% at 80% 100%, rgba(0,255,136,0.04), transparent);
  background-attachment: fixed;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

body::before {
  content: "";
  position: fixed; inset: 0;
  pointer-events: none;
  background-image: repeating-linear-gradient(
    0deg,
    rgba(0,255,136,0.015) 0px,
    rgba(0,255,136,0.015) 1px,
    transparent 1px,
    transparent 3px
  );
  z-index: 1;
}

.container {
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  z-index: 2;
}

/* ── NAV ───────────────────��─────────────── */
nav {
  position: sticky; top: 0; z-index: 10;
  background: rgba(10, 15, 10, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}
nav .container {
  display: flex; align-items: center; justify-content: space-between;
  padding-top: 16px; padding-bottom: 16px;
}
.logo { font-weight: 700; font-size: 14px; color: var(--accent); letter-spacing: -0.01em; }
.logo::before { content: "~/"; color: var(--fg-muted); margin-right: 2px; }
.cursor {
  display: inline-block;
  width: 8px; height: 14px; background: var(--accent);
  margin-left: 4px; vertical-align: -2px;
  animation: blink 1.1s step-end infinite;
  box-shadow: 0 0 8px var(--accent-glow);
}
@keyframes blink { 50% { opacity: 0; } }

nav ul { list-style: none; display: flex; gap: 28px; }
nav a { color: var(--fg-dim); text-decoration: none; font-size: 13px; transition: color 0.15s ease; }
nav a::before { content: "["; color: var(--fg-muted); margin-right: 2px; opacity: 0; transition: opacity 0.15s; }
nav a::after  { content: "]"; color: var(--fg-muted); margin-left: 2px;  opacity: 0; transition: opacity 0.15s; }
nav a:hover { color: var(--accent); }
nav a:hover::before, nav a:hover::after { opacity: 1; }

/* ── TYPOGRAPHY ──────────────────────────── */
h1, h2 { font-family: var(--font-display); font-weight: 300; letter-spacing: -0.02em; line-height: 1.1; }
h1 { font-size: clamp(44px, 7vw, 78px); color: var(--fg); }
h1 em { font-style: italic; color: var(--accent); font-weight: 400; }
h2 { font-size: 34px; margin-bottom: 24px; }
h2 .hash { color: var(--accent); font-family: var(--font-mono); font-weight: 500; margin-right: 12px; font-size: 0.7em; vertical-align: 0.12em; }

/* ── LABEL ────────────────────────────��──── */
.label {
  display: inline-flex; align-items: center; gap: 8px;
  font-size: 11px; text-transform: uppercase; letter-spacing: 0.18em;
  color: var(--fg-muted); font-weight: 500; margin-bottom: 24px;
}
.label::before { content: ""; width: 8px; height: 8px; background: var(--accent); box-shadow: 0 0 10px var(--accent-glow); }

/* ── HERO ────────────────────────────────── */
.hero { padding: 140px 0 120px; }
.hero h1 { margin-bottom: 28px; }
.tagline { font-family: var(--font-mono); font-size: 15px; color: var(--fg-dim); max-width: 60ch; margin-bottom: 40px; }
.tagline .comment { color: var(--fg-muted); }
.hero-meta {
  display: flex; gap: 32px; flex-wrap: wrap;
  padding-top: 28px; border-top: 1px solid var(--border);
  font-size: 12px; color: var(--fg-muted);
}
.hero-meta span strong { color: var(--fg); font-weight: 500; }
.status { color: var(--accent); }
.status::before { content: "●"; margin-right: 6px; animation: pulse 2s ease-in-out infinite; }
@keyframes pulse { 50% { opacity: 0.4; } }

/* ── SECTIONS ────────────────────────────── */
section { padding: 96px 0; border-bottom: 1px solid var(--border); }
.contact-section { border-bottom: none; }

/* ── PROJECTS ────────────────────────────── */
.projects { display: grid; gap: 20px; }
.project {
  display: grid; grid-template-columns: 80px 1fr auto;
  gap: 32px; align-items: baseline;
  padding: 28px; border: 1px solid var(--border);
  border-radius: var(--radius); background: var(--bg-elev);
  transition: all 0.2s ease; text-decoration: none;
  border-left: 3px solid var(--border);
}
.project:hover { border-color: var(--border-bright); border-left-color: var(--accent); transform: translateX(4px); }
.project .num { color: var(--fg-muted); font-size: 12px; font-variant-numeric: tabular-nums; }
.project h3 { font-family: var(--font-display); font-size: 26px; font-weight: 400; color: var(--fg); letter-spacing: -0.02em; margin-bottom: 8px; }
.project:hover h3 { color: var(--accent); }
.project .desc { color: var(--fg-dim); font-size: 13px; margin-bottom: 14px; max-width: 62ch; }
.tag-row { display: flex; gap: 8px; flex-wrap: wrap; }
.tag { font-size: 10px; padding: 3px 9px; background: var(--bg-panel); border: 1px solid var(--border); color: var(--fg-dim); border-radius: 3px; letter-spacing: 0.04em; }
.project-meta { text-align: right; }
.year { color: var(--fg-muted); font-size: 12px; font-variant-numeric: tabular-nums; }
.arrow-ico { color: var(--fg-muted); transition: color 0.2s, transform 0.2s; font-family: var(--font-mono); }
.project:hover .arrow-ico { color: var(--accent); transform: translate(3px, -3px); }

/* ── ABOUT ───────────────────────────────── */
.about-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 56px; align-items: start; }
.about-card { background: var(--bg-elev); border: 1px solid var(--border); padding: 24px; border-radius: var(--radius); font-size: 12px; }
.about-card dl { display: grid; grid-template-columns: auto 1fr; gap: 10px 20px; }
.about-card dt { color: var(--fg-muted); }
.about-card dd { color: var(--fg); }
.about-card dd.accent { color: var(--accent); }
.about-text p { margin-bottom: 18px; font-size: 15px; line-height: 1.75; color: var(--fg-dim); }
.about-text p:last-child { margin-bottom: 0; }

/* ── CONTACT ──────────────────────────────�� */
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: end; }
.contact-lead { font-family: var(--font-display); font-size: 32px; font-weight: 300; letter-spacing: -0.02em; color: var(--fg); line-height: 1.25; margin-bottom: 24px; }
.contact-lead em { color: var(--accent); font-style: italic; }
.contact-sub { font-size: 13px; color: var(--fg-dim); }
.contact-links { list-style: none; display: grid; gap: 2px; }
.contact-links li { display: flex; justify-content: space-between; align-items: center; padding: 14px 0; border-bottom: 1px solid var(--border); font-size: 13px; }
.contact-links li:last-child { border-bottom: none; }
.contact-links .key { color: var(--fg-muted); }
.contact-links a { color: var(--fg); text-decoration: none; border-bottom: 1px dashed var(--border-bright); transition: color 0.15s, border-color 0.15s; }
.contact-links a:hover { color: var(--accent); border-bottom-color: var(--accent); }

/* ── FOOTER ──────────────────────────────── */
footer { padding: 32px 0; font-size: 11px; color: var(--fg-muted); }
footer .container { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 16px; }

/* ── RESPONSIVE ──────────────────────────── */
@media (max-width: 720px) {
  .container { padding: 0 20px; }
  nav ul { gap: 16px; }
  .about-grid { grid-template-columns: 1fr; gap: 32px; }
  .contact-grid { grid-template-columns: 1fr; gap: 20px; }
  .project { grid-template-columns: 40px 1fr; gap: 16px; }
  .project-meta { display: none; }
  section { padding: 64px 0; }
  .hero { padding: 80px 0; }
}
```

- [ ] **Step 2: Verify the file saved correctly**

```bash
head -5 app/globals.css
```
Expected output starts with `:root {`

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "style: rewrite globals.css with terminal-dark reference system"
```

---

## Task 2: Update `app/layout.tsx`

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace the entire file**

```tsx
import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "harrison green",
  description: "mathematician · musician · ai explorer. avenues: the world school, class of 2029.",
  metadataBase: new URL("https://bingst0n.github.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verify the dev server starts without errors**

```bash
npm run dev
```
Expected: compiles successfully, no missing-module errors. Open `http://localhost:3000` — page will look broken (no layout yet) but should not 500.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "style: swap fonts to Fraunces + JetBrains Mono"
```

---

## Task 3: Rewrite `app/page.tsx`

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace the entire file**

```tsx
export default function Home() {
  return (
    <>
      {/* ── NAV ─────────────────────────────── */}
      <nav>
        <div className="container">
          <div className="logo">
            harrison-green<span className="cursor" />
          </div>
          <ul>
            <li><a href="#work">work</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────��� */}
      <header className="hero">
        <div className="container">
          <div className="label">Portfolio · 2026</div>
          <h1>Harrison <em>Green</em></h1>
          <p className="tagline">
            <span className="comment">// mathematician · musician · ai explorer</span>
            <br />
            Studying the math underneath artificial intelligence.
            <br />
            Avenues: The World School, Class of 2029.
          </p>
          <div className="hero-meta">
            <span className="status">open to research collaboration</span>
            <span><strong>LOC:</strong> New York City</span>
            <span><strong>school:</strong> Avenues: The World School</span>
            <span><strong>track:</strong> Multivariable Calculus by junior year</span>
          </div>
        </div>
      </header>

      {/* ── WORK ─────────────────────────────── */}
      <section id="work">
        <div className="container">
          <h2><span className="hash">01 //</span>Selected Work</h2>
          <div className="projects">

            <a
              className="project"
              href="/A_Mathematical_Analysis_of_Forward_and_Backward_Propagation_in_Artificial_Neural_Networks.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="num">/001</div>
              <div>
                <h3>Forward &amp; Backward Propagation</h3>
                <p className="desc">Mathematical breakdown of modern ANN processes, covering ReLU, softmax, and cross-entropy loss functions.</p>
                <div className="tag-row">
                  <span className="tag">calculus</span>
                  <span className="tag">neural networks</span>
                  <span className="tag">pdf</span>
                </div>
              </div>
              <div className="project-meta">
                <div className="year">2025</div>
                <div className="arrow-ico">↗</div>
              </div>
            </a>

            <a
              className="project"
              href="https://www.overleaf.com/read/fydqjsncjcxy#1da53b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="num">/002</div>
              <div>
                <h3>Music Theory &amp; Math</h3>
                <p className="desc">A book-style manuscript explaining the structures of music theory from a mathematical perspective.</p>
                <div className="tag-row">
                  <span className="tag">music theory</span>
                  <span className="tag">algebra</span>
                  <span className="tag">manuscript</span>
                </div>
              </div>
              <div className="project-meta">
                <div className="year">2026</div>
                <div className="arrow-ico">↗</div>
              </div>
            </a>

            <a
              className="project"
              href="/Literary_Survey__Modern_Computer_Vision_Through_the_Convolutional_Neural_Network.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="num">/003</div>
              <div>
                <h3>CNN Literary Survey</h3>
                <p className="desc">A literary survey on modern computer vision through the convolutional neural network.</p>
                <div className="tag-row">
                  <span className="tag">computer vision</span>
                  <span className="tag">ai</span>
                  <span className="tag">pdf</span>
                </div>
              </div>
              <div className="project-meta">
                <div className="year">2025</div>
                <div className="arrow-ico">↗</div>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────── */}
      <section id="about">
        <div className="container">
          <h2><span className="hash">02 //</span>About</h2>
          <div className="about-grid">
            <div className="about-card">
              <dl>
                <dt>name</dt>        <dd>Harrison Green</dd>
                <dt>status</dt>      <dd className="accent">9th grade</dd>
                <dt>school</dt>      <dd>Avenues: The World School</dd>
                <dt>location</dt>    <dd>New York City</dd>
                <dt>math track</dt>  <dd>Institute for Advanced Mathematics</dd>
                <dt>mentor</dt>      <dd>Dr. Patrick Galarza</dd>
                <dt>interests</dt>   <dd>math · ai · music · mandarin</dd>
              </dl>
            </div>
            <div className="about-text">
              <p>
                I&apos;m a student at Avenues: The World School in New York City.
                I&apos;m passionate about the underlying mathematics of artificial intelligence —
                from the calculus of gradient descent to the integration of cross-correlation
                in the convolutional neural network.
              </p>
              <p>
                I study math through Avenues&apos; self-paced Institute for Advanced Mathematics,
                mentored by Dr. Patrick Galarza. I&apos;m on track to complete multivariable calculus
                by junior year, and am working on publishing original research.
              </p>
              <p>
                Outside of math: I&apos;m a guitarist exploring the intersections of music theory
                and mathematics, a fluent Mandarin speaker, and a volunteer around the city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────── */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2><span className="hash">03 //</span>Contact</h2>
          <div className="contact-grid">
            <div>
              <p className="contact-lead">
                If you&apos;re researching something <em>mathematically interesting</em>, I&apos;d love to hear from you.
              </p>
              <p className="contact-sub">
                Open to research collaboration, mentorship, and interesting conversations.
              </p>
            </div>
            <ul className="contact-links">
              <li>
                <span className="key">email</span>
                <a href="mailto:harrisonrgreen@gmail.com">harrisonrgreen@gmail.com</a>
              </li>
              <li>
                <span className="key">github</span>
                <a href="https://github.com/bingst0n" target="_blank" rel="noopener noreferrer">@bingst0n</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────── */}
      <footer>
        <div className="container">
          <span>© 2026 harrison green</span>
          <span>avenues · class of 2029</span>
        </div>
      </footer>
    </>
  );
}
```

- [ ] **Step 2: Check the dev server**

```bash
npm run dev
```
Open `http://localhost:3000`. Verify:
- Dark background with phosphor glow visible
- `~/harrison-green` logo with blinking cursor in nav
- `Harrison` (light) + `Green` (italic, phosphor) in the hero
- Three project cards with hover slide + left-border accent effect
- About dl card on the left, prose on the right
- Contact two-column with key/value links
- No console errors

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: rewrite page as terminal-dark single-page portfolio"
```

---

## Task 4: Production build and deploy

**Files:**
- No file changes — build verification and push only

- [ ] **Step 1: Run the production build**

```bash
npm run build
```
Expected: exits 0, generates `out/` directory. If it fails with a TypeScript error, check that `app/page.tsx` has no lingering imports from the old components (`AnimatedGrid`, `FloatingGraphics`, etc.).

- [ ] **Step 2: Verify the static output**

```bash
ls out/
```
Expected: `index.html` present alongside `_next/` assets.

- [ ] **Step 3: Push to GitHub (triggers Pages deploy)**

```bash
git push origin main
```

- [ ] **Step 4: Confirm deployment**

After ~60 seconds, open `https://bingst0n.github.io`. Verify the live site matches the local dev preview — dark background, phosphor green, three project cards linking to their PDFs/Overleaf.
