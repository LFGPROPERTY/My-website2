# LFG Website

Marketing website for **LFG** — a privately owned property development and hotel management group operating across residential, commercial and hospitality assets in Sydney, Tasmania and Queensland.

This is a static site: plain HTML, CSS and vanilla JavaScript. No build step, no framework, no backend — it runs by opening `index.html` in a browser, or by serving the folder with any static file server.

## Features

- Responsive one-page layout (hero, company story, principles, values accordion, services, filterable portfolio grid, project case studies, hospitality profiles, enquiry form, footer)
- Filterable portfolio grid (All / Development / Hospitality) with vanilla JS, no dependencies
- Custom inline SVG illustration for the "Our Story" section
- Enquiry form that opens the visitor's email client with a pre-filled message (`mailto:`) — see [Enquiry form](#enquiry-form) below if you want to wire it up to a real backend instead
- Scroll-aware navigation bar (transparent over the hero, solid on scroll)
- Mobile navigation menu
- Respects `prefers-reduced-motion`

## Project structure

```
lfg-website/
├── index.html              # All page markup
├── css/
│   └── styles.css          # All styles (design tokens as CSS custom properties)
├── js/
│   └── script.js           # Nav scroll/menu behaviour, portfolio filter, accordion, enquiry form
├── images/
│   ├── logo.png
│   ├── hero.jpg
│   ├── lindfield-*.jpg     # Greenview Lindfield case study photos
│   ├── caption-*.jpg       # Caption by Hyatt Central Sydney case study photos
│   ├── hobart.jpg          # Best Western Hobart
│   ├── launceston.jpg      # Best Western Plus Launceston
│   ├── bayvillage.jpg      # Bay Village Resort Cairns
│   ├── gordon.jpg          # LFG Gordon Pty Ltd site render
│   └── story-illustration.svg
├── package.json            # Only used to run a local dev server (see below)
└── README.md
```

## Getting started

You don't need Node.js or any build tooling to view this site — it's plain static HTML/CSS/JS.

### Option 1 — just open it

Double-click `index.html`, or open it directly in a browser:

```bash
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

Everything (images, styles, script) is linked with relative paths, so this works with no server at all.

### Option 2 — run a local server (recommended for development)

Serving over `http://localhost` avoids the occasional browser quirk with `file://` pages (and is closer to how it'll behave once deployed).

```bash
npm install
npm start
```

This starts a static server at **http://localhost:3000**.

You can also skip `npm install` entirely and just run:

```bash
npx serve .
```

## Deployment

This is a static site, so it can be hosted anywhere that serves static files:

- **GitHub Pages** — push to a repo, then enable Pages (Settings → Pages → deploy from `main` branch, root folder). The site will be live at `https://<username>.github.io/<repo>/`.
- **Netlify / Vercel** — drag-and-drop the folder, or connect the GitHub repo; no build command is required (leave the build command empty and set the publish directory to `/`).
- **Any static host / S3 / plain web server** — upload the folder as-is.

## Enquiry form

The enquiry form (in the "Send an enquiry" section) is wired up with a small vanilla-JS handler in `js/script.js`. On submit, it builds a `mailto:info@lfgproperty.com.au` link from the filled-in fields and opens the visitor's default email client with the message pre-filled. There's no backend involved.

If you'd rather have submissions go straight to an inbox, a spreadsheet, or a CRM without relying on the visitor's email client, swap the submit handler for a form backend such as:

- [Formspree](https://formspree.io/)
- [Netlify Forms](https://docs.netlify.com/manage/forms/setup/) (if hosting on Netlify)
- A custom endpoint (e.g. a small serverless function) that the form `POST`s to

The relevant code is the `enquiryForm` submit handler near the bottom of `js/script.js`.

## Editing content

Everything is in `index.html` — there's no CMS or templating layer. Text, links and image `src` attributes can be edited directly. Colours, spacing and typography are controlled by CSS custom properties at the top of `css/styles.css` (under `:root`), so brand-wide changes (e.g. the accent colour) can usually be made in one place.

## Browser support

Built with modern, broadly-supported CSS (Grid, custom properties, `aspect-ratio`) and vanilla JS (`<details>`/`<summary>`, `FormData`). Works in current versions of Chrome, Firefox, Safari and Edge.

## License

Private/unlicensed — content and imagery belong to LFG. Not intended for reuse outside this project.
