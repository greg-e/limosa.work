# CardCatalog

CardCatalog is a lightweight, analog-first catalog for handwritten Zettelkasten cards. It stores only images and a handful of user-supplied metadata fields so the paper cards remain the real Zettelkasten.

## Design philosophy
- **Image-first.** The handwritten card image is the focal point. There is no text editor for card content.
- **No automation.** No OCR, no AI assistance, and no automatic linking. Relationships are entered manually with card IDs.
- **Minimal metadata.** Metadata exists only to help you find the right paper card: ID, optional title, box/collection, parent ID, related IDs, and tags.

## Requirements
- Node.js 18+

## Running the app
1. From the repo root, start the server:
   ```bash
   npm run cardcatalog
   ```
   The server listens on port `4000` by default.
2. Open `http://localhost:4000` in your browser.

## Key flows
- **Add a card:** Provide a card ID, optional metadata, and upload a photo/scan. The server stores the image on disk and metadata in `cardcatalog/data/cards.json`.
- **Browse cards:** Use the grid/list toggle and sorting options to scan thumbnails quickly.
- **Filter/search:** Filter by partial ID, box/collection, or tag, and sort by created date, ID, or box.
- **View details:** Click a card to see the full image, metadata, and manual links to parent/related IDs.
- **Edit metadata:** Update ID, title, box/collection, parent ID, related IDs, and tags without touching the stored image.

## Data locations
- Images: `cardcatalog/data/images/`
- Metadata: `cardcatalog/data/cards.json`

Back up these folders to safeguard your digital catalog. The analog cards remain the authoritative source.
