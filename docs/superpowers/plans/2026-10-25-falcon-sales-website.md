# Falcon Sales website implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A local Next.js proof of concept of the Falcon Sales site the head of sales and the CEO can click through.

**Architecture:** One TypeScript content module holds every published string, image path, and placeholder flag. Server components render the home page, one shared service-page component, about, and FAQ from that module. The request form is the only client component; it validates with a pure function and opens a mailto. Photographs are local files in `public/images/`.

**Tech Stack:** Next.js App Router, React, TypeScript, one global stylesheet, Node's built-in test runner (`node --experimental-strip-types --test`). Node v24 is on this machine.

**Spec:** `docs/superpowers/specs/2026-10-25-falcon-sales-website-design.md`

## Global Constraints

- Proof of concept only. Do not deploy, and do not change the live Wix site.
- Phone display `(248) 340-8834`, href `tel:2483408834`, email `matt.falconsales@hotmail.com`.
- Place line: `Falcon Sales Company · Lake Orion, Michigan 48360`. No street address.
- Dark red `#8B0000`, ink `#1A1917`, paper `#F3F0EA`, line `#E3DDD3`.
- Working logo is an inline SVG: dark-red rounded square, pale falcon silhouette, wordmark `FALCON SALES`.
- Headings and wordmark: Space Grotesk. Body: Source Sans 3. Load both from Google Fonts in the root layout.
- Every stand-in job uses `placeholder: true` and visible label `Placeholder`. The quote attribution contains `not a real customer`. Nearby chips are exactly `Nearby business · placeholder`.
- No load-capacity numbers and no fake customer names.
- Wire-partition photography is the empty warehouse and must not be described as a Falcon cage.
- Request submit opens `mailto:matt.falconsales@hotmail.com` only when name, email, and what they need are non-empty. Never say a server received the message.
- Header links: Pallet racking, Shelving, Wire partitions, Layout, About. Phone and `Request a storage layout` stay visible. Narrow screens collapse nav links behind a `Menu` button.
- `.superpowers/` is gitignored.
- Copy that the spec writes in quotation marks is exact. Other sentences follow the named spec section and may be tightened, not reinvented.

## Review Focus

- Empty required fields on the request form: name, email, and what they need each show an error, and no mailto is produced.
- A job title that sounds like a finished install still shows the visible label `Placeholder`.
- No capacity number (digits plus lb, lbs, pounds, or kg) and no street address appear anywhere in `site`.
- The wire-partition image alt text does not call the photo a Falcon cage or an installed cage.
- A valid request mailto uses exactly `matt.falconsales@hotmail.com` and includes the visitor's need.

---

## File map

- `content/site.ts` — all page copy, nav, image paths, placeholder records.
- `content/request.ts` — `validateRequest`, `requestMailto`, confirmation string.
- `components/Logo.tsx` — working mark.
- `components/Header.tsx` — client header with menu toggle.
- `components/Footer.tsx` — place, phone, email.
- `components/ServicePage.tsx` — shared service layout.
- `components/RequestForm.tsx` — client form.
- `app/layout.tsx`, `app/globals.css`, `app/page.tsx` — shell, palette, home.
- `app/pallet-racking/page.tsx`, `app/shelving/page.tsx`, `app/wire-partitions/page.tsx`, `app/warehouse-layout/page.tsx` — pass one `ServicePage` record in.
- `app/about/page.tsx`, `app/faq/page.tsx`, `app/request-a-layout/page.tsx`.
- `public/images/` — five downloaded photographs.
- `tests/site.test.ts`, `tests/request.test.ts`.

### Task 1: Content, images, and the Next.js shell

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `next-env.d.ts`, `.gitignore`, `app/layout.tsx`, `app/globals.css`, `app/page.tsx`, `content/site.ts`, `public/images/*`, `tests/site.test.ts`
- Test: `tests/site.test.ts`

**Interfaces:**
- Consumes: nothing.
- Produces: `site` from `content/site.ts` with this shape.

```ts
export type ServiceSlug = "pallet-racking" | "shelving" | "wire-partitions" | "warehouse-layout"

export type PlaceholderJob = {
  placeholder: true
  label: "Placeholder"
  title: string
  body: string
  image: string
  imageAlt: string
}

export type ServicePage = {
  slug: ServiceSlug
  navLabel: string
  headline: string
  lede: string
  image: string
  imageAlt: string
  checks: { title: string; body: string }[]
  job: PlaceholderJob
}

export const site: {
  phoneDisplay: string
  phoneHref: string
  email: string
  placeLine: string
  nav: { href: string; label: string }[]
  home: {
    eyebrow: string
    headline: string
    lede: string
    sectionOrder: ["hero", "trust", "services", "steps", "work", "quote", "nearby", "close"]
    trust: string[]
    services: { title: string; body: string; href: string }[]
    steps: { title: string; body: string }[]
    jobs: PlaceholderJob[]
    quote: { text: string; label: "Placeholder"; attribution: string }
    nearby: string[]
  }
  services: ServicePage[]
  about: { paragraphs: string[] }
  faq: { question: string; answer: string }[]
}
```

Image paths produced: `/images/empty-warehouse.jpg`, `/images/cartons.jpg`, `/images/shelving.jpg`, `/images/rack-close.jpg`, `/images/rack-aisle.jpg`.

- [ ] **Step 1: Write the failing test**

Create `tests/site.test.ts`. Assert all of the following:

- `site.home.headline` equals `The building is designed. Your equipment is placed. Storage is next.`
- `site.home.lede` equals `Falcon designs and installs the pallet racking, shelving, wire partitions, and layout that make a new warehouse work.`
- `site.home.eyebrow` equals `Lake Orion · Oakland County · Since 1991`
- `site.home.sectionOrder` deep-equals `["hero", "trust", "services", "steps", "work", "quote", "nearby", "close"]`
- `site.phoneDisplay` is `(248) 340-8834`, `site.email` is `matt.falconsales@hotmail.com`, `site.placeLine` is `Falcon Sales Company · Lake Orion, Michigan 48360`
- `site.services` slugs are exactly `pallet-racking`, `shelving`, `wire-partitions`, `warehouse-layout` in that order
- Every `site.home.jobs` entry and every `service.job` has `placeholder === true` and `label === "Placeholder"`
- `site.home.quote.label` is `Placeholder` and `site.home.quote.attribution` matches `/not a real customer/`
- `site.home.nearby` has length 4 and every entry equals `Nearby business · placeholder`
- `JSON.stringify(site)` does not match `/\d+\s*(lb|lbs|pounds|kg)\b/i` and does not match `/\b(Street|St|Avenue|Ave|Road|Rd|Drive|Dr|Boulevard|Blvd)\b/`
- The wire-partitions record's `imageAlt` does not match `/falcon cage|installed cage|our cage/i`, and its `image` is `/images/empty-warehouse.jpg`
- Those five image files exist under `public/images/`
- `site.faq` has 5 items, and the capacity answer matches `/set for the job/i`

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --experimental-strip-types --test tests/site.test.ts`

Expected: FAIL because `content/site.ts` does not exist.

- [ ] **Step 3: Add the project shell**

The directory already holds `docs/` and `.superpowers/`, so do not run `create-next-app`. Write a minimal Next.js 15 App Router project by hand.

`package.json` scripts: `"dev": "next dev"`, `"build": "next build"`, `"test": "node --experimental-strip-types --test tests/*.test.ts"`. Dependencies: `next@15`, `react`, `react-dom`. Dev dependencies: `typescript`, `@types/react`, `@types/react-dom`, `@types/node`.

`tsconfig.json` targets ES2022, module NodeNext, moduleResolution NodeNext, `jsx: preserve`, strict, include `content`, `app`, `components`, `tests`, and `next-env.d.ts`.

`.gitignore` includes `node_modules`, `.next`, and `.superpowers`.

`app/layout.tsx` renders `{children}` inside `<html lang="en">` and imports `./globals.css`. `app/page.tsx` can render a temporary title. `app/globals.css` sets the paper background. `next.config.ts` exports an empty config.

Run `npm install`.

- [ ] **Step 4: Implement `site` and download the photographs**

Write `content/site.ts` exporting `site` with the shape above. Take headlines, steps, checks, about facts, and FAQ questions from the spec sections Home, Service pages, About, and FAQ. Use the exact strings the test pins.

Download, in this order, into `public/images/`:

- `empty-warehouse.jpg` from `https://static.wixstatic.com/media/81b0cc6ad6a84b8aa727bf851173aa3e.jpg`
- `cartons.jpg` from `https://static.wixstatic.com/media/11062b_985e78e5b3e34c9ebe3f843fc21575d7~mv2.jpg`
- `shelving.jpg` from `https://static.wixstatic.com/media/11062b_b2877d281f3b47ac9f6e7fd971aebac2~mv2.jpg`
- `rack-close.jpg` from `https://static.wixstatic.com/media/2981dc_07d8717a0f70475f9b0e2242138c86dd~mv2.jpg`
- `rack-aisle.jpg` from `https://static.wixstatic.com/media/2981dc_253bff04053e4d85b48580b8280ce3a4~mv2.jpg`

Home job images: rack aisle, rack close, shelving. Pallet-racking hero image: `/images/rack-aisle.jpg`. Shelving hero: `/images/shelving.jpg`. Wire partitions and warehouse layout heroes: `/images/empty-warehouse.jpg`.

- [ ] **Step 5: Run the test to verify it passes**

Run: `node --experimental-strip-types --test tests/site.test.ts`

Expected: PASS

- [ ] **Step 6: Initialize git and commit**

`git init` in `C:\Users\walla\FalconSales` if there is no repository yet. Do not add a remote and do not push.

```bash
git add package.json package-lock.json tsconfig.json next.config.ts next-env.d.ts .gitignore app content public/images tests/site.test.ts
git commit -m "feat: add Falcon Sales site content and Next.js shell"
```

### Task 2: Shared chrome and the home page

**Files:**
- Create: `components/Logo.tsx`, `components/Header.tsx`, `components/Footer.tsx`
- Modify: `app/layout.tsx`, `app/globals.css`, `app/page.tsx`
- Test: `tests/site.test.ts` (already passing; this task must not break it)

**Interfaces:**
- Consumes: `site` from Task 1.
- Produces: `Logo`, `Header`, and `Footer` default exports. `Header` is a client component. `Footer` prints `site.placeLine`, `site.phoneDisplay` linking to `site.phoneHref`, and `site.email` as a mailto.

- [ ] **Step 1: Implement the shell and home page**

`app/layout.tsx` loads Space Grotesk and Source Sans 3, wraps every page in `Header` and `Footer`, and sets the document title to `Falcon Sales Company`.

`app/page.tsx` renders `site.home.sectionOrder` in that order:

- hero: eyebrow, headline, lede, link `Request a storage layout` to `/request-a-layout`, link `See how a job starts` to `#how-a-job-starts`, background image `/images/empty-warehouse.jpg`
- trust: the four `site.home.trust` strings
- services: four cards from `site.home.services`, each linking to its href
- steps: heading `How a new building reaches us`, id `how-a-job-starts`, four numbered steps
- work: heading `Installed work`, three jobs, each showing `job.label` and `job.title`
- quote: `quote.text`, `quote.label`, `quote.attribution` on a dark-red band
- nearby: heading `Already at work nearby` and the four chips
- close: heading `Have the equipment on a plan?` and the request link

`Header` lists `site.nav`, the phone, and the request link. Below 800px the nav links sit behind a button named `Menu`. Phone and request stay outside that toggle.

Style to the palette in Global Constraints. Use a plain `<img>` for local photographs.

- [ ] **Step 2: Verify**

Run: `npm test`

Expected: PASS

Run: `npm run build`

Expected: build completes and the `/` route is emitted.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx app/globals.css app/page.tsx components/Logo.tsx components/Header.tsx components/Footer.tsx
git commit -m "feat: add Falcon Sales header, footer, and home page"
```

### Task 3: Service pages

**Files:**
- Create: `components/ServicePage.tsx`, `app/pallet-racking/page.tsx`, `app/shelving/page.tsx`, `app/wire-partitions/page.tsx`, `app/warehouse-layout/page.tsx`
- Test: none new. `npm test` and `npm run build` are the check.

**Interfaces:**
- Consumes: `ServicePage` and `site.services` from Task 1, `Header` and `Footer` from Task 2 via the layout.
- Produces: default export `ServiceView({ service }: { service: ServicePage })` from `components/ServicePage.tsx`. Each route file picks the matching slug and renders `ServiceView`.

- [ ] **Step 1: Implement `ServiceView` and the four routes**

`ServiceView` renders, in order: breadcrumb `Home / {navLabel}`, headline, lede, link `Send your floor plan` to `/request-a-layout`, the atmosphere image with `imageAlt`, heading `What we look at before we specify a system`, the three checks, heading `A job, shown as a placeholder`, the job label and title and body, heading `Also on this floor` with links to the other three services, close heading `Have the equipment placed?` and the request link.

Each route file is a server component that finds its slug in `site.services` and returns `ServiceView`. Unknown slug throws.

- [ ] **Step 2: Verify**

Run: `npm test`

Expected: PASS

Run: `npm run build`

Expected: the build emits `/pallet-racking`, `/shelving`, `/wire-partitions`, and `/warehouse-layout`.

- [ ] **Step 3: Commit**

```bash
git add components/ServicePage.tsx app/pallet-racking app/shelving app/wire-partitions app/warehouse-layout
git commit -m "feat: add Falcon Sales service pages"
```

### Task 4: About, FAQ, and the request form

**Files:**
- Create: `content/request.ts`, `components/RequestForm.tsx`, `app/about/page.tsx`, `app/faq/page.tsx`, `app/request-a-layout/page.tsx`, `tests/request.test.ts`
- Test: `tests/request.test.ts`

**Interfaces:**
- Consumes: `site.about`, `site.faq`, `site.email`, `site.phoneDisplay` from Task 1.
- Produces:

```ts
export type RequestFields = {
  name: string
  company: string
  phone: string
  email: string
  need: string
  message: string
}

export function validateRequest(fields: RequestFields): Partial<Record<"name" | "email" | "need", string>>

export function requestMailto(fields: RequestFields): string | null

export const requestConfirmation: string
```

`validateRequest` returns `name: "Name is required."` when name is blank, `email: "Email is required."` when email is blank, `need: "Tell us what you need."` when need is blank, and `{}` when all three are non-empty. `requestMailto` returns `null` when `validateRequest` is not empty. Otherwise it returns a mailto URL whose address is `site.email`, whose subject is `Storage layout request`, and whose decoded body contains name, company, phone, email, need, and message. `requestConfirmation` equals `Your email program should open with this request addressed to matt.falconsales@hotmail.com. If it does not, send the same details to that address.`

- [ ] **Step 1: Write the failing test**

Create `tests/request.test.ts` covering:

- Blank fields return those three error strings and `requestMailto` returns `null`.
- Fields `{ name: "Ada", company: "Mill", phone: "2485550100", email: "ada@mill.test", need: "New building racking", message: "Plan attached next" }` produce a mailto that starts with `mailto:matt.falconsales@hotmail.com`, and `decodeURIComponent` of the href contains `New building racking`, `ada@mill.test`, and `Plan attached next`.
- `requestConfirmation` equals the sentence in the interface block.

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --experimental-strip-types --test tests/request.test.ts`

Expected: FAIL because `content/request.ts` does not exist.

- [ ] **Step 3: Implement request helpers, the form, About, and FAQ**

`app/about/page.tsx` renders `site.about.paragraphs` and nothing about a founder, a headshot, or a street.

`app/faq/page.tsx` renders each `site.faq` question as a heading and the answer under it.

`app/request-a-layout/page.tsx` shows the phone number and `RequestForm`. Under the form, say floor plans can be attached in the email that opens, sent to `matt.falconsales@hotmail.com`.

`RequestForm` is a client component. On submit, if `validateRequest` has keys, show those messages and do not navigate. If `requestMailto` returns a string, set `window.location.href` to it and show `requestConfirmation`.

- [ ] **Step 4: Verify**

Run: `npm test`

Expected: PASS

Run: `npm run build`

Expected: the build emits `/about`, `/faq`, and `/request-a-layout`.

- [ ] **Step 5: Commit**

```bash
git add content/request.ts components/RequestForm.tsx app/about app/faq app/request-a-layout tests/request.test.ts
git commit -m "feat: add Falcon Sales about, FAQ, and layout request"
```
