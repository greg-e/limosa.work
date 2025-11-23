# Browser-Based Slides with Reveal.js and GitHub Pages

This repository hosts Markdown-driven slides powered by [Reveal.js](https://revealjs.com/) and published via [GitHub Pages](https://docs.github.com/en/pages). The source of truth for the content is `docs/slides.md`, which is fully version-controlled in Git.

## Repository Structure

```text
.
├─ docs/
│  ├─ index.html       # Reveal.js loader and configuration
│  ├─ slides.md        # Your slides in Markdown
│  └─ reveal/          # Reveal.js library (dist + plugin)
│      ├─ dist/
│      └─ plugin/
└─ README.md
