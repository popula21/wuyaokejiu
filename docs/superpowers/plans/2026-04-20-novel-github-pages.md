# Novel GitHub Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a static GitHub Pages reading site for 《无药可就》.

**Architecture:** Create a framework-free static site in the repository root. The page presents the current prologue as an archival reading experience with restrained interaction for navigation and reading progress.

**Tech Stack:** HTML, CSS, vanilla JavaScript, GitHub Pages.

---

### Task 1: Static Site Files

**Files:**
- Create: `/Users/scottw/novels/index.html`
- Create: `/Users/scottw/novels/styles.css`
- Create: `/Users/scottw/novels/script.js`
- Create: `/Users/scottw/novels/.nojekyll`

- [ ] **Step 1: Create the HTML reading page**

Use semantic sections for the masthead, dossier navigation, prologue article, and closing note. Include the prologue text from `/Users/scottw/novels/无药可就-正文草稿.md`.

- [ ] **Step 2: Create the visual system**

Use a dark archival background, an old-paper reading surface, restrained red accents, and stable typography for long Chinese reading. Include a subdued image-like evidence strip using embedded document/photo elements.

- [ ] **Step 3: Add minimal JavaScript**

Add reading progress, active section navigation, and a text-size toggle.

- [ ] **Step 4: Verify locally**

Open the page through a local static server and check desktop/mobile layout.

### Task 2: GitHub Pages Publishing

**Files:**
- Modify: local git metadata only.

- [ ] **Step 1: Initialize a git repository if needed**

Run `git init` if `/Users/scottw/novels` is not already a git repo.

- [ ] **Step 2: Commit the site**

Stage the novel draft, design document, site files, and plan. Commit with message `publish novel reading site`.

- [ ] **Step 3: Create or connect a GitHub repository**

Create a public repository named `wuyaokejiu` if no remote exists.

- [ ] **Step 4: Enable GitHub Pages**

Configure Pages to serve from the default branch root.

- [ ] **Step 5: Report the URL**

Return the GitHub Pages URL and note any propagation delay.
