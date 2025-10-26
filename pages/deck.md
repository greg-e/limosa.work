---
title: Deck
layout: deck
permalink: /pages/deck/
---

View the full deck PDF once uploaded to **/assets/pdfs/**.

{% assign cards = site.cards | sort: 'name' %}
<ul class="deck-list">
{% for c in cards %}
  <li><a href="{{ c.url }}">{{ c.title }}</a></li>
{% endfor %}
</ul>
