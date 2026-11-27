# Study Hub

Free study guides for economics, math and management, built with [Zensical](https://zensical.org) and hosted on GitHub Pages.

---

**Live site:** https://barr-studiesguelph.github.io/study-guides/

## How publishing works

Every time a file in this repository changes, the workflow in `.github/workflows/deploy.yml` rebuilds the site with Zensical and publishes it to GitHub Pages. It takes about a minute; progress shows in the **Actions** tab.

To change the site name, colours or footer, edit `zensical.toml`. To change the About page, edit `docs/about.md`.

## Adding a new guide

1. Use the prompt in `GUIDE_PROMPT.md` to have Claude write the guide.
2. **Review it.** Check definitions, formulas and every answer against your notes.
3. On GitHub, open the subject folder, for example `docs/economics`.
4. Click **Add file → Create new file**. Name it like `market-structures.md`, paste in the guide, and click **Commit changes**.
5. Optional: add a link to it in that subject's `index.md` list.

That's it. The menu updates on its own and the site republishes in about a minute.

## Adding an interactive study tool (flashcards, tests)

For a Claude-made interactive study tool like MGMT 1000, the tool keeps its own design and features:

1. Create a folder for the course inside the subject, for example `docs/management/mgmt-1010/`.
2. Save the tool's HTML in that folder as `index.html`.
3. Add a line linking to it in the subject's `index.md`, for example `- [MGMT 1010: Course name](mgmt-1010/index.html): what it covers`.

**New subject?** Create a new folder in `docs` (for example `docs/accounting/`) with an `index.md` inside it, the same way the existing subjects work.

## Preview on your own computer (optional)

If you'd rather see changes before publishing, install Python, then:

```bash
pip install zensical
zensical serve
```

Open http://localhost:8000 in your browser. The preview updates as you edit files.

## Folder layout

```
study-guides/
├── zensical.toml            ← site name, colours, features
├── GUIDE_PROMPT.md          ← prompt for making new guides with Claude
├── .github/workflows/
│   └── deploy.yml           ← publishes the site on every change
└── docs/                    ← everything that appears on the site
    ├── index.md             ← home page
    ├── about.md
    ├── economics/
    ├── math/
    ├── management/
    ├── javascripts/katex.js ← makes math formulas render
    └── stylesheets/extra.css
```

## Ideas for later

- **Custom domain** (about $15–20/year): buy one, then add it under **Settings → Pages → Custom domain**.
- **Visitor stats** for your resume: GoatCounter (free for non-commercial use), Plausible or Cloudflare Web Analytics.
- **Request form:** link a Google Form on the About page so classmates can ask for topics.
