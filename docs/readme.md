# Browser-Based Slides with Reveal.js and GitHub Pages

This repository hosts Markdown-driven slides powered by [Reveal.js](https://revealjs.com/) and published via [GitHub Pages](https://docs.github.com/en/pages). The source of truth for the content is `docs/slides.md`, which is fully version-controlled in Git.

## Repository Structure

```text
.
├─ docs/
│  ├─ index.html       # Reveal.js loader, configuration, and custom styling (served from CDN)
│  ├─ slides.md        # Your slides in Markdown
└─ README.md
```

## Local Preview

You can open `docs/index.html` directly in a browser. The page loads Reveal.js, plugins, themes, Google Fonts, and custom styling from a CDN/inlined CSS, so no build step is required.

## Updating Slides

Edit `docs/slides.md` in Markdown. Section breaks are defined by `---` (new slide), `--` (vertical stack), and `Note:` (speaker notes).
