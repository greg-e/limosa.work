---
title: Zettelkasten
layout: default
permalink: /zettelkasten/
---

<link rel="stylesheet" href="/assets/css/zettelkasten.css">

<div class="zk-page">
  <div class="zk-lede">
    <h1>Zettelkasten</h1>
    <p>A browser-based viewer that runs entirely on GitHub Pages. Notes stay in this repository; the UI reads markdown from <code>/zettels/&lt;year&gt;/&lt;yyyymm&gt;/&lt;id&gt;.md</code> and renders them client-side.</p>
    <p>Use the Card Catalog to find a note, or cycle through entries with the deck controls. The viewer keeps your place while reloading the latest entries.</p>
  </div>

  <div class="zk-guide">
    <h2>Quick instructions</h2>
    <ul>
      <li><strong>Create a note:</strong> Click <em>New note</em>. The link opens a new file on <code>main</code> under <code>zettels/&lt;year&gt;/&lt;yyyymm&gt;/</code>. Keep the filename as suggested. Replace the template front matter with your details (fill in tags) and add your content below it. After saving/committing, hit <em>Refresh</em> (or wait for the background refresh) to pull the new card into the catalog.</li>
      <li><strong>Edit an existing note:</strong> Select a card (via the deck controls or catalog) and click <em>Edit selected</em>. The button activates only when a note is active and opens the GitHub editor for that file on <code>main</code>.</li>
      <li><strong>Search the catalog:</strong> Click <em>Open catalog</em> or press Ctrl/Cmd + K. Type to search by title or content; check tags on the left to filter. Use arrows + Enter to open a highlighted result, or click it.</li>
    </ul>
    <h3>Front matter format</h3>
    <p>Each zettel starts with YAML:</p>
    <pre><code>---
title: Example note title
created: 2025-02-11T15:30:00Z
tags:
  - concept/topic
  - source/book
links:
  - related-id
---

# Example note title
...</code></pre>
    <ul>
      <li><strong>title</strong>: Human-friendly headline.</li>
      <li><strong>created</strong>: ISO date string. Use UTC (with <code>Z</code>) for consistency.</li>
      <li><strong>tags</strong>: Hyphen-separated, lowercase when possible (e.g., <code>bible/john</code>, <code>productivity</code>). Add multiple lines for multiple tags.</li>
      <li><strong>links</strong>: Optional related zettel IDs.</li>
    </ul>
  </div>

  <div
    class="zk-app"
    data-zk-app
    data-zk-repo-owner="greg-e"
    data-zk-repo-name="limosa.work"
    data-zk-branch="main"
  >
    <div class="zk-controls">
      <div class="zk-search">
        <label>Card Catalog</label>
        <button class="zk-button is-ghost" type="button" data-zk-catalog-trigger aria-haspopup="dialog">
          Open catalog (Ctrl/Cmd + K)
        </button>
      </div>
      <div class="zk-actions">
        <button class="zk-button" type="button" data-zk-new>New note</button>
        <button class="zk-button" type="button" data-zk-refresh>Refresh</button>
        <a class="zk-button is-link is-disabled" data-zk-edit target="_blank" rel="noopener">Edit selected</a>
      </div>
      <div class="zk-status" data-zk-status>Loading index…</div>
    </div>

    <div class="zk-stage">
      <div class="zk-viewer" data-zk-viewer>
        <p class="zk-empty">Select a note to view its contents.</p>
      </div>

      <div class="zk-deck" aria-live="polite">
        <div class="zk-deck__meta">
          <div class="zk-count" data-zk-count>0 notes</div>
          <div class="zk-active" data-zk-active>Nothing selected</div>
        </div>
        <div class="zk-deck__controls">
          <button class="zk-button is-ghost" type="button" data-zk-prev aria-label="Previous note">◀ Prev</button>
          <button class="zk-button is-ghost" type="button" data-zk-next aria-label="Next note">Next ▶</button>
        </div>
      </div>
    </div>

    <div class="zk-catalog" data-zk-catalog aria-hidden="true" role="dialog" aria-labelledby="zk-catalog-title">
      <div class="zk-catalog__backdrop" data-zk-catalog-close></div>
      <div class="zk-catalog__panel">
        <div class="zk-catalog__header">
          <div>
            <div class="zk-catalog__eyebrow">Card Catalog</div>
            <h2 id="zk-catalog-title">Search notes</h2>
          </div>
          <button class="zk-catalog__close" type="button" data-zk-catalog-close aria-label="Close catalog">
            ×
          </button>
        </div>
        <div class="zk-catalog__body">
          <div class="zk-catalog__field">
            <label class="zk-catalog__label" for="zk-catalog-input">Search cards…</label>
            <input
              id="zk-catalog-input"
              class="zk-catalog__input"
              type="search"
              placeholder="Search cards…"
              data-zk-catalog-input
              aria-label="Search cards"
            />
          </div>
          <div class="zk-catalog__layout">
            <div class="zk-catalog__tags" aria-label="Filter by tags" data-zk-catalog-tags></div>
            <div class="zk-catalog__results" role="listbox" aria-label="Search results" data-zk-catalog-results>
              <p class="zk-empty">Type to search cards.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script src="/assets/js/zettelkasten.js"></script>
