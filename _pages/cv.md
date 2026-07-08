---
layout: default
title: "CV"
permalink: /cv/
description: "Curriculum Vitae of Jiaxu Fan (范嘉许)."
---

<section class="hero reveal">
  <div class="hero__greeting">Curriculum Vitae</div>
  <h1 class="hero__name">CV</h1>
  <p class="hero__role">A printable version of my academic record · last updated <span class="mono">July 2026</span></p>
  <p class="hero__tagline">A complete record of education, research, and service. For the most current work, see the <a href="{{ '/' | relative_url }}">home page</a>.</p>

  <div class="hero__cta">
    <a class="btn btn--primary" href="{{ '/files/cv.pdf' | relative_url }}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
      Download PDF
    </a>
    <a class="btn btn--ghost" href="{{ '/' | relative_url }}">← Back to home</a>
  </div>
</section>

<!-- ============================================================
     EDUCATION
     ============================================================ -->
<section class="section section--bordered reveal">
  <header class="section__head"><h2 class="section__title">Education</h2></header>
  <div class="edu-item">
    <span class="edu-item__period">2024 – Present</span>
    <div>
      <h3 class="edu-item__title">M.phil, Computer &amp; Information Engineering</h3>
      <div class="edu-item__meta">School of Science and Engineering, The Chinese University of Hong Kong, Shenzhen</div>
      <p class="edu-item__notes">Advisor: {{ site.author.advisor.name }}. Focus: AI-augmented search, multi-modal generation, HCI for AI tools.</p>
    </div>
  </div>
  <div class="edu-item">
    <span class="edu-item__period">2020 – 2024</span>
    <div>
      <h3 class="edu-item__title">B.Eng., Computer Science</h3>
      <div class="edu-item__meta">Undergraduate Institution</div>
      <p class="edu-item__notes">Outstanding Graduate. Coursework: machine learning, computer vision, distributed systems, HCI.</p>
    </div>
  </div>
</section>

<!-- ============================================================
     RESEARCH INTERESTS
     ============================================================ -->
<section class="section section--bordered reveal">
  <header class="section__head"><h2 class="section__title">Research Interests</h2></header>
  <div class="interests-grid">
    <div class="interest-card">
      <div class="interest-card__icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="20" y1="20" x2="16.5" y2="16.5"/></svg>
      </div>
      <div>
        <h4 class="interest-card__title">AI-augmented Search</h4>
        <p class="interest-card__blurb">Grounded citation, RAG, conversational IR.</p>
      </div>
    </div>
    <div class="interest-card">
      <div class="interest-card__icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="11" r="1.5" fill="currentColor"/><path d="m21 17-5-5-9 9"/></svg>
      </div>
      <div>
        <h4 class="interest-card__title">Multi-modal Generation</h4>
        <p class="interest-card__blurb">Controllable image &amp; figure synthesis.</p>
      </div>
    </div>
    <div class="interest-card">
      <div class="interest-card__icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11V7a3 3 0 0 1 6 0v4"/><rect x="5" y="11" width="14" height="10" rx="2"/></svg>
      </div>
      <div>
        <h4 class="interest-card__title">HCI for AI Tools</h4>
        <p class="interest-card__blurb">Affordances for non-engineer creators.</p>
      </div>
    </div>
    <div class="interest-card interest-card--gold">
      <div class="interest-card__icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l3-9 4 18 3-9h4"/></svg>
      </div>
      <div>
        <h4 class="interest-card__title">Evaluation &amp; QA</h4>
        <p class="interest-card__blurb">Multi-dimensional quality assessment.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================
     SELECTED PUBLICATIONS
     ============================================================ -->
<section class="section section--bordered reveal">
  <header class="section__head">
    <h2 class="section__title">Selected Publications</h2>
    <a class="section__meta" href="{{ '/publications/' | relative_url }}">Full list →</a>
  </header>
  <p class="prose" style="max-width:none;">For the complete publication list with links, see the <a href="{{ '/publications/' | relative_url }}">publications page</a>.</p>
  <ol class="pub-list" reversed>
    {%- for pub in site.publications limit:5 -%}
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
      </div>
    </li>
    {%- endfor -%}
  </ol>
</section>

<!-- ============================================================
     AWARDS & HONORS
     ============================================================ -->
<section class="section section--bordered reveal">
  <header class="section__head"><h2 class="section__title">Awards &amp; Honors</h2></header>
  <ul class="awards">
    <li class="award-item award-item--top">
      <span class="award-item__year">2026</span>
      <span class="award-item__amount">Full Stipend</span>
      <span class="award-item__title">
        <span class="award-item__honor">Postgraduate Studentship</span>
        <span class="award-item__org">The Chinese University of Hong Kong, Shenzhen</span>
      </span>
    </li>
    <li class="award-item award-item--top">
      <span class="award-item__year">2023</span>
      <span class="award-item__amount">¥10,000</span>
      <span class="award-item__title">
        <span class="award-item__honor">National Scholarship</span>
        <span class="award-item__org">Ministry of Education, P.R. China</span>
      </span>
    </li>
    <li class="award-item">
      <span class="award-item__year">2024</span>
      <span class="award-item__amount">—</span>
      <span class="award-item__title">
        <span class="award-item__honor">Outstanding Graduate</span>
        <span class="award-item__org">Undergraduate Institution</span>
      </span>
    </li>
    <li class="award-item">
      <span class="award-item__year">2022</span>
      <span class="award-item__amount">M Award</span>
      <span class="award-item__title">
        <span class="award-item__honor">Meritorious Winner · MCM/ICM</span>
        <span class="award-item__org">COMAP, USA</span>
      </span>
    </li>
    <li class="award-item">
      <span class="award-item__year">2022</span>
      <span class="award-item__amount">Province</span>
      <span class="award-item__title">
        <span class="award-item__honor">Provincial First Prize, Mathematical Modeling</span>
        <span class="award-item__org">Provincial Education Department</span>
      </span>
    </li>
  </ul>
</section>

<!-- ============================================================
     EXPERIENCE
     ============================================================ -->
<section class="section section--bordered reveal">
  <header class="section__head"><h2 class="section__title">Experience</h2></header>
  <ul class="timeline">
    <li class="timeline__item">
      <span class="timeline__period">2025 – Present</span>
      <h3 class="timeline__title">Open-Source Maintainer</h3>
      <div class="timeline__org">SciCoverGen &amp; labcanvas (NanaDraw)</div>
      <p class="timeline__desc">
        Designed and shipped two flagship open-source tools wrapping
        free public AI models (Zhipu CogView-3-Flash) into reproducible
        pipelines for academic figure generation and canvas-based
        diagram editing. The projects now serve a small but active
        community of CS students and researchers.
      </p>
    </li>
    <li class="timeline__item">
      <span class="timeline__period">Summer 2024</span>
      <h3 class="timeline__title">AI Coding Intern</h3>
      <div class="timeline__org">QQ Browser · Tencent</div>
      <p class="timeline__desc">
        Prototyped an AI-augmented search experience for QQ Browser,
        including answer synthesis, source-grounded citations, and
        conversational follow-up.
      </p>
    </li>
    <li class="timeline__item">
      <span class="timeline__period">2023 – 2024</span>
      <h3 class="timeline__title">Undergraduate Research Assistant</h3>
      <div class="timeline__org">Prior Institution</div>
      <p class="timeline__desc">
        Worked on robust few-shot learning for medical imaging under
        domain shift. Co-authored a workshop paper.
      </p>
    </li>
  </ul>
</section>

<!-- ============================================================
     SERVICE
     ============================================================ -->
<section class="section section--bordered reveal">
  <header class="section__head"><h2 class="section__title">Service &amp; Community</h2></header>
  <div class="service-grid">
    <div class="service-item">
      <span class="service-item__role">Open-source Maintainer</span>
      <span class="service-item__body"><strong>SciCoverGen</strong> &amp; <strong>labcanvas</strong> (2025 – Present).</span>
    </div>
    <div class="service-item">
      <span class="service-item__role">Reviewer</span>
      <span class="service-item__body">On demand for workshops at <strong>NeurIPS</strong>, <strong>ICML</strong>, and <strong>ACL</strong> (2024 – Present).</span>
    </div>
    <div class="service-item">
      <span class="service-item__role">Mentoring</span>
      <span class="service-item__body">Undergraduate research assistants on <strong>AI tool-building</strong> (2025 – Present).</span>
    </div>
  </div>
</section>

<!-- ============================================================
     SKILLS
     ============================================================ -->
<section class="section section--bordered reveal">
  <header class="section__head"><h2 class="section__title">Skills</h2></header>
  <div class="skills">
    <div class="skills__group">
      <h4>Languages</h4>
      <ul class="skills__list">
        <li>Python</li><li>TypeScript</li><li>JavaScript</li>
        <li>SQL</li><li>C/C++</li><li>Rust (basic)</li>
      </ul>
    </div>
    <div class="skills__group">
      <h4>ML &amp; Data</h4>
      <ul class="skills__list">
        <li>PyTorch</li><li>NumPy</li><li>Pandas</li>
        <li>scikit-learn</li><li>Matplotlib</li><li>HuggingFace</li>
      </ul>
    </div>
    <div class="skills__group">
      <h4>Web &amp; Systems</h4>
      <ul class="skills__list">
        <li>FastAPI</li><li>React</li><li>Node.js</li>
        <li>PostgreSQL</li><li>Redis</li><li>Docker</li>
      </ul>
    </div>
  </div>
</section>
