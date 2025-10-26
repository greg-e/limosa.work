---
title: Deck
layout: deck
permalink: /pages/deck/
---

View the full deck PDF in /assets/pdfs when available.

{% assign cards = site.cards | sort: 'name' %}
<ul class="deck-list">
{% for c in cards %}
  <li><a href="{{ c.url }}">{{ c.title }}</a></li>
{% endfor %}
</ul>
