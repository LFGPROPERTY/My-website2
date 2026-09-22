# LFG Property Website

Marketing website for **LFG** — property development, hospitality and asset management. A single-page static site covering the company story, development and hospitality portfolio, case studies, and contact details.

## Project structure

```
.
├── index.html            # The entire site (markup, CSS and JS in one file)
├── assets/
│   └── images/           # All photos, renders and favicon/touch-icon assets
├── package.json          # Optional convenience scripts for local preview
└── .gitignore
```

The site is plain HTML/CSS/JS — no build step, no framework, no bundler. `index.html` contains the page markup, an embedded `<style>` block, and a small inline `<script>` for interactive bits (nav, filters, etc.). All images live under `assets/images/` and are referenced with relative paths, so the whole folder is portable as-is.

The only external dependency loaded at runtime is Google Fonts (via `<link>` tags in the `<head>`), so an internet connection is needed to see the intended typefaces; everything else works fully offline.

## Running locally

Any of the following work:

**Just open the file**
Double-click `index.html`, or open it directly in a browser — no server required for a first look.

**With a local static server** (recommended, avoids any browser file:// quirks)
```bash
npm start
# or
npm run serve
```
Both spin up a static file server (via `http-server` / `serve`, fetched on demand with `npx`) and print a local URL to open, e.g. http://localhost:8080.

**With Python, if you don't want to touch npm at all**
```bash
python3 -m http.server 8080
```
then visit http://localhost:8080.

## Editing content

Everything — copy, portfolio entries, case studies, contact details — lives directly in `index.html` as plain HTML. There's no CMS or data file to update separately; find the section you want to change (sections are marked with `id`s like `#story`, `#portfolio`, `#hospitality`, `#contact`) and edit the text or `<img>` tags in place. To add a new photo, drop it into `assets/images/` and reference it as `assets/images/your-file.jpg`.

## Deploying

Since this is a static site with no build step, it can be hosted anywhere that serves static files, for example:

- **GitHub Pages** — push this repo to GitHub, then enable Pages for the repo (Settings → Pages → Deploy from branch → `main` / root). The site will be served directly from `index.html`.
- **Netlify / Vercel / Cloudflare Pages** — connect the repo and deploy with no build command and the publish directory set to the repo root.
- **Any static file host** — upload the contents of this folder as-is.

## Notes

- Images were originally embedded as base64 inside the HTML; they've been extracted into `assets/images/` here to keep the repo readable and the page weight down.
- Filenames under `assets/images/` are derived from each image's descriptive alt text.
