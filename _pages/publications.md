---
layout: default
title: "Publications"
permalink: /publications/
description: "Full publication list of Jiaxu Fan (范嘉许)."
---

<section class="hero reveal">
  <div class="hero__greeting">Full list</div>
  <h1 class="hero__name">Publications</h1>
  <p class="hero__role">{{ site.publications | size }} entries · last updated <span class="mono">{{ site.last_updated | default: '2026-07-08' }}</span></p>
  <p class="hero__tagline" style="font-size: 1rem; padding: 14px 0; max-width: 50ch;">
    I tag my name in <strong>bold</strong>. Asterisk <span class="mono">(*)</span>
    denotes equal contribution. Preprints with no venue yet are tagged
    as <em>arXiv preprint</em> or <em>Under review</em>.
  </p>
  <div class="hero__cta">
    <a class="btn btn--ghost" href="{{ '/' | relative_url }}">← Back to home</a>
    <a class="btn btn--ghost" href="https://scholar.google.com/citations?user={{ site.author.scholar | default: 'YOUR_GOOGLE_SCHOLAR_ID' }}" rel="noopener">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 1 9l11 6 9-4.9V17h2V9z"/><path d="M5 13.2v4L12 21l7-3.8v-4L12 17z"/></svg>
      Google Scholar
    </a>
  </div>
</section>

<section class="section section--bordered reveal">
  <ol class="pub-list" reversed>
    {%- for pub in site.publications -%}
    <li class="pub-item">
      <span class="pub-item__year">{{ pub.year }}</span>
      <div>
        <h3 class="pub-item__title">
          {{ pub.title }}
          {%- if pub.badge and pub.badge != "" -%}
          <span class="pub-item__badge pub-item__badge--{{ pub.badge }}">{{ pub.badge }}</span>
          {%- endif -%}
        </h3>
        <p class="pub-item__authors">
          {%- for a in pub.authors -%}
            {%- if a.me -%}<span class="me">{{ a.name }}</span>{%- else -%}{{ a.name }}{%- endif -%}{%- unless forloop.last -%}, {%- endunless -%}
          {%- endfor -%}
          {%- if pub.equal -%}<span class="equal">(* equal contribution)</span>{%- endif -%}
        </p>
        <p class="pub-item__venue">
          <span class="hl">{{ pub.venue }}</span>{% if pub.venue_extra %}, {{ pub.venue_extra }}{% endif %}
        </p>
        {%- if pub.links -%}
        <div class="pub-item__links">
          {%- for link in pub.links -%}
          <a class="pub-item__link" href="{{ link.url }}" rel="noopener">{{ link.label }}</a>
          {%- endfor -%}
        </div>
        {%- endif -%}
      </div>
    </li>
    {%- endfor -%}
  </ol>
  <p class="muted" style="font-size: 0.9rem; margin-top: 16px;">
    Also on
    <a href="https://dblp.org/pid/{{ site.author.dblp | default: '' }}.html" rel="noopener">DBLP</a> ·
    <a href="https://orcid.org/{{ site.author.orcid | default: '' }}" rel="noopener">ORCID</a> ·
    <a href="https://www.semanticscholar.org/author/{{ site.author.semantic_scholar | default: '' }}" rel="noopener">Semantic Scholar</a>
  </p>
</section>
