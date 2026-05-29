# AI Agent Task: Create Isolated Wireframe Pages

## Role & Context
You are a frontend AI agent working inside an **existing production project**.
Your only job in this task is to add low-fidelity wireframe pages under a
separate route namespace. You must leave every existing file untouched.

---

## MUST NOT (Hard Constraints — never break these)

```
❌ Do NOT edit, rename, or delete any file under /home, /main, /lineup, /product
❌ Do NOT install new routing libraries
❌ Do NOT import wireframe components into production pages
❌ Do NOT hardcode real product IDs or live API calls in wireframe pages
❌ Do NOT add animations, gradients, or real images
```

---

## Execution Phases (follow in order)

### Phase 1 — Reconnaissance
Before writing any code, read and report:

1. **Routing system** — which one is in use?
   - Next.js App Router (`app/` directory)
   - Next.js Pages Router (`pages/` directory)
   - React Router (`<Routes>` / `createBrowserRouter`)
   - Other (describe)
2. **Product route shape** — list every file/folder under the product route
   (e.g., `app/product/[id]/page.tsx`)
3. **Shared layout components** — identify `TopBar`, `Layout`, or equivalent
4. **State or data fetching** — note any server components, `getServerSideProps`,
   or context providers that wireframes must NOT inherit

Output a short recon summary before Phase 2.

---

### Phase 2 — Create Wireframe Component Library

Create a single file: `components/wireframe/WireframeKit.tsx` (or `.jsx`)

It must export these components only — no other files yet:

| Component | Props | Renders |
|---|---|---|
| `WfLayout` | `title` | Full-page wrapper with `#f5f5f5` bg |
| `WfTopBar` | `label?` | Fixed top bar placeholder |
| `WfSection` | `label`, `height?` | Labeled gray block |
| `WfBox` | `label`, `w?`, `h?` | Inline gray box |
| `WfButton` | `label` | Outlined button placeholder |
| `WfCard` | `label`, `count?` | Repeatable card block |
| `WfText` | `lines?` | Fake text line(s) |

**Visual spec (apply as inline styles or a single CSS module):**

```css
/* Wireframe design tokens */
--wf-bg:        #f5f5f5;
--wf-block:     #d0d0d0;
--wf-border:    #aaaaaa;
--wf-label:     #555555;
--wf-font:      14px monospace;
--wf-radius:    4px;
--wf-gap:       16px;
```

All blocks use `border: 1.5px dashed var(--wf-border)`.
All labels use `font: var(--wf-font); color: var(--wf-label); text-transform: uppercase`.

---

### Phase 3 — Create Wireframe Pages

Using **only** components from `WireframeKit`, create these pages:

#### 3-A `/wireframe/home`
```
WfTopBar
WfSection label="HERO / INTRO"        height=320
WfSection label="MAIN CONTENT BLOCK"  height=240
WfSection label="ACTION BUTTONS"      height=80
```

#### 3-B `/wireframe/main`
```
WfTopBar
WfSection label="MAIN VISUAL"         height=280
WfSection label="PRIMARY ACTIONS"     height=120   ← note: buttons pushed up for kiosk
WfSection label="CONTENT BLOCKS"      height=200
```

#### 3-C `/wireframe/lineup`
```
WfTopBar
WfSection label="CATEGORY / FILTER"   height=60
WfSection label="CARD GRID">
  WfCard × 6   label="ITEM CARD"
WfSection label="BOTTOM ACTION"       height=80
```

#### 3-D `/wireframe/product/[id]` (or equivalent)
Mirror the exact route shape discovered in Phase 1.

```
WfTopBar
WfSection label="PRODUCT TITLE"       height=60
WfBox     label="PRODUCT IMAGE"       w=320 h=240
WfSection label="PRODUCT INFO"        height=140
WfSection label="DESCRIPTION"         height=120
WfSection label="CATEGORY / TAGS"     height=48
WfButton  label="MAIN CTA"
WfSection label="RELATED / NAV"       height=80
```

Use `placeholder` or static prop data only — no live data fetching.

---

### Phase 4 — Wire Up Routes

Add wireframe routes using the **existing** routing convention only.

- App Router → create `app/wireframe/.../page.tsx` files
- Pages Router → create `pages/wireframe/...tsx` files
- React Router → add `<Route>` entries inside existing router config

Do not create a new router or wrapper app.

---

### Phase 5 — Verification Report

After all files are created, output this checklist with ✅ / ❌:

```
[ ] /wireframe/home       — renders in browser
[ ] /wireframe/main       — renders in browser
[ ] /wireframe/lineup     — renders in browser
[ ] /wireframe/product/*  — renders in browser (list exact route)
[ ] /home                 — still works (unchanged)
[ ] /main                 — still works (unchanged)
[ ] /lineup               — still works (unchanged)
[ ] /product/*            — still works (unchanged)
[ ] WireframeKit.tsx      — no production imports
[ ] No new libraries added to package.json
[ ] All wireframe blocks use dashed borders + gray palette
[ ] No real images / animations present
```

Also list:
- **Files created** (path + purpose)
- **Files modified** (path + what changed — should be routing config only)
- **Assumptions made** (especially about product route shape)
- **Manual checks still needed**