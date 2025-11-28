---
title: Zettelkasten
layout: default
permalink: /zettelkasten/
---

<link rel="stylesheet" href="/assets/css/zettelkasten.css">

<div class="zk-page">
  <div class="zk-lede">
    <h1>Zettelkasten</h1>
    <p>A browser-based viewer that runs entirely on GitHub Pages. Notes stay in this repository; the UI fetches markdown files directly from <code>/notes</code> and renders them client-side.</p>
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
        <label for="zk-search">Search notes</label>
        <input id="zk-search" data-zk-search type="search" placeholder="Filter by title or excerpt" />
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
  </div>
</div>

<script src="/assets/js/zettelkasten.js"></script>
