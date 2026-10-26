# Falcon Sales website proof of concept

Date: 2026-10-25
Status: draft for review. Not approved to build until the partner signs off on this document.

## Intent

Falcon Sales Company just launched [falconsalescompany.com](https://www.falconsalescompany.com). It is a thin Wix site. The service story is easy to miss, the pages feel unfinished, and it is not bringing in new business.

This project is a proof of concept the head of sales and the CEO can click through. It has to make a warehouse manager trust that Falcon can solve a real storage problem: pallet racking, shelving, wire partitions, or the layout of a whole building. Trust comes from proof of installed work, words from customers, and the names of other businesses served nearby. Those three things are not in hand yet. The proof of concept uses clearly marked placeholders so the pages have the right shape, and so real jobs, quotes, and names can replace them after the partner sits down with the head of sales and the CEO.

The usual new-building call happens early, after the architectural stage. The customer lays out their equipment, then calls Falcon to design the storage around that plan.

The current Wix site stays up. This proof of concept does not replace it.

## Goals

- A clickable multi-page site the head of sales and the CEO can review on a local machine.
- The first screen speaks to a warehouse manager who already has architecture done and equipment placed, and now needs storage designed.
- Every primary service has its own page. On the live site, service links do not carry a real service story.
- Placeholder projects, quotes, and nearby businesses are impossible to mistake for real customers.
- Published facts from the live site are reused: phone, email, Lake Orion, Oakland County, family business since 1991, insured crew, supply and installation.
- Page text lives in one content module so placeholders can be swapped without a redesign.

## Non-goals

- Replacing or unpublishing the Wix site.
- A content-management system, a blog, e-commerce, or a customer login.
- A finished brand system beyond the working mark used in this review.
- Real project photos, real testimonials, or real customer names. Those arrive later from the head of sales and the CEO.
- Load-capacity tables, brand lists, or any spec number the company has not supplied.
- Search-engine launch work, analytics, or a production deploy. A later request can add those.

## Anti-goals

- Another generic industrial template: huge type, broken navigation, and no proof.
- Stock photos or placeholder quotes that read as Falcon's own installs or as words a real customer said.
- Invented street address, invented capacities, or invented local company names.

## Decisions from the partner

- Audience feeling: trust that Falcon can solve pallet racking, shelving, wire partitions, and full warehouse layout.
- Proof, in this order of importance: installed projects, client testimonials, other businesses served in the local area.
- Use filler for that proof until the partner collects it with the head of sales and the CEO.
- This version is a review and proof of concept, not the site that replaces the live domain.
- Develop a brand, including a logo. Take the colors actually used on the current site as the preference.
- Reuse images and published details from the current site.
- The site must stand out to a warehouse manager who has a problem Falcon can solve, including a new building.
- New-building timing: they call while considering layout, early after architecture. They lay out equipment, then call Falcon to design storage.
- Homepage direction approved on screen: the empty building is the first image. Headline: "The building is designed. Your equipment is placed. Storage is next." Supporting line: Falcon designs and installs the pallet racking, shelving, wire partitions, and layout that make a new warehouse work. Under that: the four services, the path from finished architecture to installation, then placeholder proof. The partner looked at that full homepage and said it is good.
- Shelving, wire partitions, and warehouse layout pages follow the pallet racking page. That page's shape: the problem in the headline, what Falcon checks before specifying a system, one placeholder job, links to the other services, and a way to send the floor plan.

## Facts taken from the live site

Confirmed by reading the live site on 2026-10-25. Treat these as published facts, not guesses.

- Business name: Falcon Sales Company. Schema also says "Falcon Sales Co."
- Phone: (248) 340-8834
- Email: matt.falconsales@hotmail.com
- Place: Lake Orion, Michigan 48360. No street address is published.
- About page: trusted provider of material handling and warehouse storage since 1991. It calls the company a top material handling equipment sales company in Oakland County. Services named there match the four on this site. The page claims professional guidance, precision installation, and ongoing support.
- Homepage claims used as quiet trust lines, not as the hero: family operation, insured crew, supply and installation, service across Michigan, the Midwest, and nationwide.
- Navigation today: Home, Services, About Us. Service sections exist as long copy on `/services`. There is an appointment form. There is no logo.
- Color actually painted on the page: dark red `#8B0000` on the phone bar and the menu icon, with black, white, and gray. Type on the site includes Space Grotesk and Avenir.
- Five images, all stock or rendered warehouse scenes, not labeled as Falcon jobs:
  - Empty blue warehouse: `81b0cc6ad6a84b8aa727bf851173aa3e.jpg`
  - Rendered aisle with yellow cartons: `11062b_985e78e5b3e34c9ebe3f843fc21575d7~mv2.jpg`
  - Yellow industrial shelving with lumber: `11062b_b2877d281f3b47ac9f6e7fd971aebac2~mv2.jpg`
  - Orange pallet rack, closer view: `2981dc_07d8717a0f70475f9b0e2242138c86dd~mv2.jpg`
  - Orange pallet rack aisle, wide: `2981dc_253bff04053e4d85b48580b8280ce3a4~mv2.jpg`
  - Source host: `https://static.wixstatic.com/media/`

## Calls made for the builder

These are the author's calls. The partner has not separately approved each one. A wrong one is easy to change before build if they say so.

- Stack: Next.js with the App Router and TypeScript, in the local folder that will track `github.com/iamfatness/FalconSales`. No CMS. No component library. One global stylesheet.
- Review by running the dev server on the partner's machine. No production deploy in this proof of concept.
- Body text in `content/site.ts` (or one equivalent module). Pages import from it. Placeholders are data, not sentences buried in components.
- Working logo: the simple dark-red square and pale falcon silhouette already on the approved mockups, as an inline SVG. It is a review mark, not a final identity. Wordmark: "FALCON SALES".
- Type: Space Grotesk for the wordmark and headings. Source Sans 3 for body text. Avenir is on the Wix site and is not licensed for this build.
- Palette: `#8B0000` dark red, `#1A1917` ink, `#F3F0EA` paper, white cards, `#E3DDD3` lines. Buttons are dark red with white type.
- Download the five Wix images into `public/images/` and refer to those files. Do not hotlink Wix in the pages.
- Hero and service photography are atmosphere. Any block that represents a Falcon job, a quote, or a nearby customer carries a visible "Placeholder" label. Quotes also say "not a real customer."
- No street address. Footer place line: "Falcon Sales Company · Lake Orion, Michigan 48360".
- The quote form does not use a database. Submit opens a `mailto:` to `matt.falconsales@hotmail.com` with the fields in the body, and the page shows a short confirmation that the visitor's mail program is the way the message goes out. If the browser blocks the mail window, the confirmation still shows the address.
- Narrow screens collapse the nav into a button. The phone number and the request action stay reachable.
- Add `.superpowers/` to `.gitignore`. The brainstorm mockups live there and are not part of the site.
- Do not add a "Website by …" credit.

## Site map

Shared header: working mark and wordmark, links to Pallet racking, Shelving, Wire partitions, Layout, About, the phone number, and "Request a storage layout".

Shared footer: Lake Orion line, phone, email.

| Path | Page |
| --- | --- |
| `/` | Home |
| `/pallet-racking` | Pallet racking |
| `/shelving` | Shelving |
| `/wire-partitions` | Wire partitions |
| `/warehouse-layout` | Warehouse layout and design |
| `/about` | About |
| `/request-a-layout` | Request a storage layout |
| `/faq` | FAQ |

## Home

Match the approved mockup.

1. Header as above.
2. Hero on the empty-warehouse image. Eyebrow: "Lake Orion · Oakland County · Since 1991". Headline: "The building is designed. Your equipment is placed. Storage is next." Lede: "Falcon designs and installs the pallet racking, shelving, wire partitions, and layout that make a new warehouse work." Primary action: "Request a storage layout". Secondary action: "See how a job starts", which scrolls to the four steps.
3. Trust bar, quiet, not the hero: Family owned since 1991. Insured crew. Supply and installation. Oakland County, the Midwest, and nationwide.
4. "What we design and install." Four cards:
   - Pallet racking. Built to the load, the aisle, and the lift truck that has to run it.
   - Shelving. High-density storage for parts, cartons, and smaller equipment.
   - Wire partitions. A secure cage for inventory or tools, with visibility and airflow left intact.
   - Warehouse layout. The storage plan that follows the equipment layout, from the first sketch to installation.
   Each card links to its page.
5. "How a new building reaches us." Intro: most calls come early, after the architectural stage. The customer has laid out the equipment. Falcon designs the storage around it. Steps:
   1. Architecture is finished. The building exists on paper, or the shell is going up.
   2. You place the equipment. Machines, lines, and work areas go on the floor plan first.
   3. Falcon designs the storage. Racking, shelving, partitions, and aisles are drawn around that plan.
   4. We supply and install. The system shows up and an insured crew puts it in.
6. "Installed work." Intro states these cards are the shape of the proof and that real photos, industries, and outcomes replace them after the meeting with the head of sales and the CEO. Three cards, each labeled Placeholder:
   - New building fit-out. Storage designed after the equipment layout.
   - Pallet rack run. A stand-in for an installed racking job.
   - Shelving and secure storage. A stand-in for shelving or a wire partition.
   Use the orange-rack and yellow-shelving images as the card photos. The Placeholder label sits on the card.
7. Quote band in dark red. The sentence is explicitly a placeholder about a warehouse manager calling after equipment was on the plan. Small line: "Placeholder · not a real customer".
8. "Already at work nearby." Intro: names of businesses Falcon has served around Oakland County go here. Four chips reading "Nearby business · placeholder".
9. Close: "Have the equipment on a plan?" Send the layout. Falcon will tell you what storage the building needs. Action: Request a storage layout.
10. Footer.

## Service pages

One component, four content records. Do not invent load ratings.

Shared shape:

- Breadcrumb: Home / page name.
- Headline that states the problem in the partner's timing: storage designed around equipment already on the plan.
- Short lede. Action: "Send your floor plan", linking to `/request-a-layout`.
- Atmosphere photo from the downloaded set. It is not captioned as a Falcon install.
- Section "What we look at before we specify a system." Three checks. Exact capacities are confirmed per job. Say that on the racking page. Do not print a number.
- Section "A job, shown as a placeholder." One card with the Placeholder label. Copy says industry, location, and outcome get filled in later.
- "Also on this floor" links to the other three service pages.
- Close: "Have the equipment placed?" plus the request action.

Page-specific copy:

- Pallet racking. Checks: the load (what is on the pallet, how heavy, how high; capacities set per job), the building (ceiling, columns, doors, forklift aisle), the flow (where product enters, where it is picked, which rack stays out of equipment already placed). Photo: wide orange rack aisle. Placeholder title: "New building, selective pallet rack".
- Shelving. Checks: what is stored (parts, cartons, tools), how people pick it, how the shelving has to move when the building grows. Photo: yellow industrial shelving. Placeholder title: "Parts shelving beside a work area".
- Wire partitions. Checks: what must be locked, who needs to see through it, how the cage has to come apart later. Photo: the empty warehouse, used as the room the cage would divide. The page must not claim the photo shows a Falcon cage. Placeholder title: "Secure cage for tools and inventory".
- Warehouse layout. Checks: where equipment already sits, how material has to move, what storage is left to draw. Photo: empty warehouse. Placeholder title: "Storage plan after the equipment layout". The four home-page steps can repeat here in shorter form. This page is the one the secondary hero action is conceptually about. The home-page anchor stays on the home page.

## About

Rewrite the live About copy so it is shorter and specific. Keep only published facts:

- Since 1991.
- Family business.
- Oakland County, based in Lake Orion.
- Pallet racking, industrial shelving, wire partitions, warehouse layout and design.
- They plan with the client, supply the system, and install it with an insured crew.
- The work runs from the first conversation through installation.

Do not add founder names, headshots, street address, or years of experience beyond "since 1991". Those were not on the live site.

## Request a storage layout

Purpose: the action the whole site points at.

Fields: name, company, phone, email, what they need (short text: new building, racking, shelving, partitions, layout, or a mix), and a message. Under the form, one line: floor plans can be attached in the email that opens, sent to matt.falconsales@hotmail.com.

Submit behavior is the mailto call above. Required fields: name, email, and what they need. Show errors on those if empty. Do not claim "we received your message" as if a server stored it.

Also show the phone number for people who would rather call.

## FAQ

Short answers. No invented specs. Suggested questions:

- When should we call about a new building? Answer with the four-step timing.
- Do you only sell the equipment, or do you install it? Supply and installation.
- Where do you work? Based in Lake Orion, Oakland County. The live site says Michigan, the Midwest, and nationwide.
- Can you tell me the load capacity from this site? No. Capacity is set for the job after the plan and the product are known.
- What should we send to get a layout started? The equipment layout, what has to be stored, and how it is moved.

## Placeholder rules

- The visible label is the word "Placeholder".
- Quote attribution includes "not a real customer".
- Nearby chips say "Nearby business · placeholder", not made-up company names.
- Job titles can describe the kind of job ("New building fit-out") and must not name a real or fictional customer.
- A code comment or content flag `placeholder: true` sits on each stand-in record so a later edit can find them.

## What the builder still decides

- File and component breakdown inside the Next.js app, as long as the routes, shared header and footer, content module, and page shapes above stay intact.
- Exact CSS implementation of the approved look: paper background, dark-red actions, the hero crop, sticky header.
- How the mobile nav opens, as long as the links, phone, and request action remain usable.
- Image compression when saving the five downloads into `public/images/`.

## Done when

- `npm run dev` serves all eight routes.
- Home matches the approved section order and the approved headline.
- The three other service pages use the same component as pallet racking, with their own checks, photo, and placeholder job.
- Every stand-in job, quote, and nearby name is visibly a placeholder.
- Phone, email, and Lake Orion appear in the header or footer.
- The request form validates and opens a mailto to the published address.
- No street address, no capacity number, and no fake customer name appears.
- The Wix site is untouched.
