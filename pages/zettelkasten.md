---
title: Zettelkasten
layout: default
permalink: /zettelkasten/
---

<link rel="stylesheet" href="/assets/css/zettelkasten.css">

<div class="zk-page">
  <div class="zk-hero">
    <div class="zk-hero__text">
      <p class="zk-kicker">Card catalog</p>
      <h1>Zettelkasten</h1>
      <p>Browse and search the repo-native cards without leaving this page. Everything runs on GitHub Pages using markdown stored in <code>/zettels/&lt;year&gt;/&lt;yyyymm&gt;/&lt;id&gt;.md</code>.</p>
      <div class="zk-hero__cta">
        <button class="zk-button" type="button" data-zk-catalog-trigger aria-haspopup="dialog">
          Open catalog
        </button>
        <span class="zk-hero__hint">Tip: press Ctrl/Cmd + K to open search anywhere.</span>
      </div>
    </div>
    <div class="zk-hero__meta">
      <div class="zk-chip">Deck keeps your place; catalog jumps to any card</div>
      <div class="zk-chip">Refresh checks GitHub for new or edited zettels</div>
    </div>
  </div>

  <details class="zk-help">
    <summary>Authoring + catalog tips</summary>
    <div class="zk-help__grid">
      <div>
        <h3>Create</h3>
        <p>Click <em>New note</em> to open a prefilled file on <code>main</code>. Keep the filename as suggested under <code>zettels/&lt;year&gt;/&lt;yyyymm&gt;/</code>. Replace the template front matter and add your content below it. After saving, hit <em>Refresh</em> (or wait for auto refresh) so the card lands in the catalog.</p>
      </div>
      <div>
        <h3>Edit</h3>
        <p>Pick a card (via deck or catalog) and click <em>Edit selected</em> to open the GitHub editor for that file on <code>main</code>. The button only enables when a card is active.</p>
      </div>
      <div>
        <h3>Search</h3>
        <p>Open the <strong>Card Catalog</strong>, type to filter titles + content, and use the tag checkboxes to narrow results. Arrow keys move through results; <kbd>Enter</kbd> opens the highlighted card.</p>
      </div>
      <div>
        <h3>Front matter</h3>
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
        <p class="zk-help__note">Use lowercase, slash-friendly tags (e.g., <code>bible/john</code>, <code>productivity</code>) and add multiple lines for multiple tags.</p>
      </div>
    </div>
  </details>

  <div
    class="zk-app"
    data-zk-app
    data-zk-repo-owner="greg-e"
    data-zk-repo-name="limosa.work"
    data-zk-branch="main"
  >
    <div class="zk-controls">
      <div class="zk-status">Live cards from this repo</div>
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
