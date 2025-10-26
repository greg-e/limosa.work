---
title: Deck
layout: deck
permalink: /pages/deck/
---

**Download the full deck:** [deck_2025-10-13.pdf](/assets/pdfs/deck_2025-10-13.pdf)

{% assign cards = site.cards | sort: 'name' %}
<ul class="deck-list">
{% for c in cards %}
  <li><a href="{{ c.url }}">{{ c.title }}</a></li>
{% endfor %}
</ul>
