# CardCatalog

CardCatalog is a lightweight, analog-first catalog for handwritten Zettelkasten cards. It stores only images and a handful of user-supplied metadata fields so the paper cards remain the real Zettelkasten.

## Design philosophy
- **Image-first.** The handwritten card image is the focal point. There is no text editor for card content.
- **No automation.** No OCR, no AI assistance, and no automatic linking. Relationships are entered manually with card IDs.
- **Minimal metadata.** Metadata exists only to help you find the right paper card: ID, optional title, box/collection, parent ID, related IDs, and tags.

## Running the app on GitHub Pages
The app now runs entirely in the browser (no Node server). Open the published page and everything you add stays in your browser storage:

```
https://limosa.work/cardcatalog/public/
```

Cards are saved to your browser's `localStorage` and the images are stored as base64 data URLs. Nothing leaves your machine, and each browser keeps its own library. Back up your work by exporting the data from `localStorage` if you switch devices.

## Running locally without a server
Because the experience is static, you can also open `cardcatalog/public/index.html` directly from disk. Everything still saves to the browser that opened the file.

## Key flows
- **Add a card:** Provide a card ID, optional metadata, and upload a photo/scan. The app stores the image as a data URL in your browser alongside the metadata.
- **Browse cards:** Use the grid/list toggle and sorting options to scan thumbnails quickly.
- **Filter/search:** Filter by partial ID, box/collection, or tag, and sort by created date, ID, or box.
- **View details:** Click a card to see the full image, metadata, and manual links to parent/related IDs.
- **Edit metadata:** Update ID, title, box/collection, parent ID, related IDs, and tags without touching the stored image.

## Data locations
- Images and metadata live in your browser's `localStorage` under the `cardcatalog.cards` key.

Back up your storage periodically if you need to preserve the catalog outside this browser. The analog cards remain the authoritative source.
