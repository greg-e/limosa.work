# Actual — Brand Asset Export Bundle

Version 1.0 · March 2026

---

## Naming Convention

```
actual-{variant}_{tier}[-{descriptor}]_{WxH}.svg
```

| Segment | Values |
|---|---|
| `variant` | `wordmark-primary`, `wordmark-light`, `mark`, `mark-light` |
| `tier` | `web`, `print`, `social` |
| `descriptor` | `2x`, `favicon`, `reversed`, `banner`, `avatar`, `square` *(optional)* |
| `WxH` | pixel or point dimensions of the canvas |

---

## Folder Structure

```
export/
├── web/           Screen-optimized SVGs — 1× and 2× scales + favicon
├── print/         High-resolution SVGs for print & large-format use
└── social/        Platform-ready canvases (OG, avatar, square post)
```

---

## Web Tier

| File | Use |
|---|---|
| `actual-wordmark-primary_web_420x84.svg` | Default site header, email header |
| `actual-wordmark-light_web_420x84.svg` | Dark-background header, footers |
| `actual-mark_web_128x128.svg` | App icon, favicon source |
| `actual-mark-light_web_128x128.svg` | Dark-bg app icon source |
| `actual-wordmark-primary_web-2x_840x168.svg` | Retina / HiDPI displays |
| `actual-mark_favicon_32x32.svg` | Browser tab favicon (use as SVG favicon or export to .ico) |

---

## Print Tier

| File | Use |
|---|---|
| `actual-wordmark-primary_print_1680x336.svg` | Letterhead, one-pagers, documents |
| `actual-wordmark-light_print-reversed_1680x336.svg` | Dark slide backgrounds, cover pages |
| `actual-mark_print_512x512.svg` | Standalone mark, stamps, emboss |

> **Note for print production:** These SVGs use only `#111111` and `#F4EFE4`.
> Convert to CMYK before sending to press:
> - `#111111` → C:0 M:0 Y:0 K:93 (or 100K rich black for large fills)
> - `#F4EFE4` → C:4 M:3 Y:9 K:0

---

## Social Tier

| File | Dimensions | Platform |
|---|---|---|
| `actual-wordmark_social-banner_1200x628.svg` | 1200 × 628 px | Open Graph, LinkedIn, Twitter/X card |
| `actual-mark_social-avatar_400x400.svg` | 400 × 400 px | Twitter/X, LinkedIn, Instagram profile |
| `actual-wordmark_social-square_1080x1080.svg` | 1080 × 1080 px | Instagram post, LinkedIn post |

---

## Color Reference

| Token | Hex | Usage |
|---|---|---|
| Ink | `#111111` | Primary mark, dark-bg text |
| Linen | `#F4EFE4` | Light variant, reversed mark |
| Forest | `#1E4A42` | Social backgrounds |

---

## Usage Rules

- Do not recolor the mark outside approved palette tokens.
- Minimum clear space: equal to the diameter of the mark circle on all sides.
- Do not stretch, rotate, or add effects to any asset.
- On backgrounds other than `#F4EFE4` (Linen) or `#111111` (Ink), use the Forest (`#1E4A42`) social canvas assets.
