# CardCatalog

CardCatalog is a slip-box-native, analog-first catalog for handwritten Zettelkasten cards. It stores only images and a handful of user-supplied metadata fields so the paper cards remain the real Zettelkasten.

## Design philosophy
- **Image-first.** The handwritten card image is the focal point. There is no text editor for card content.
- **No automation.** No OCR runs unless you explicitly bring text in. No AI assistance, and no automatic linking.
- **Minimal metadata.** Metadata exists only to help you find the right paper card: ID, optional title, box/collection, parent ID, related IDs, tags, and an optional personal transcription.
- **Slip-box metaphors.** The UI mirrors a drawer of cards, a staging Table, a tiny register, and link trails instead of dashboards.

## Running the app on GitHub Pages
The app runs entirely in the browser (no Node server). Open the published page and everything you add stays in your browser storage:

```
https://limosa.work/cardcatalog/public/
```

Cards are saved to your browser using IndexedDB so that full-resolution images can be stored without hitting localStorage size limits. Nothing leaves your machine, and each browser keeps its own library. Back up your work by exporting the data from your browser storage if you switch devices.

You can also open `cardcatalog/public/index.html` directly from disk; it still saves everything to the browser that opened the file.

## Key flows
- **Scan & stage:** Add a photo/scan, give it an ID, and optionally add a transcription. Leave it on **The Table** (inbox) or file it immediately behind a parent ID.
- **The Drawer:** Filed cards appear as a single vertical stack with light indentation by address (e.g., `21 → 21a → 21a1`). Click one to slide it out; use ←/→ to move through the stack.
- **Register:** Open the mini register, type a keyword, and jump to 1–3 entry points instead of a long search list.
- **Link trail:** As you follow parent/related links the breadcrumb grows (`21 → 21a → 21a3b`).
- **Red pencil links:** From a card detail, add manual links or accept a suggested next branch ID (e.g., `21a3` → `21a3a`).
- **Paper clip pile:** Pin frequently used cards to a small pile for quick access.
- **Chain map (optional):** Toggle a line-based map of parent/child chains to mirror the address structure.

## Data locations
- Images and metadata live in your browser's IndexedDB under the `cardcatalog` database.

Back up your storage periodically if you need to preserve the catalog outside this browser. The analog cards remain the authoritative source.
