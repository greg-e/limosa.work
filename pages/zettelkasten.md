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
    <p>Use the search to filter titles and excerpts, then hop between cards in the note reel to read or edit them. The viewer keeps your place while reloading the latest entries.</p>
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

      <div class="zk-reel">
        <div class="zk-reel-header">
          <div class="zk-count" data-zk-count>0 notes</div>
          <div class="zk-legend">Use search, then pick a card below.</div>
        </div>
        <div class="zk-reel-body" data-zk-reel>
          <p class="zk-empty">Loading…</p>
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
