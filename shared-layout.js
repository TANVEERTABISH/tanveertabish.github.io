/* shared-layout.js — injects nav + footer on every page */
(function () {
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  const pages = [
    { href: 'index.html',        label: 'Home' },
    { href: 'research.html',     label: 'Our Research' },
    { href: 'tanveer.html',      label: 'PI' },
    { href: 'team.html',         label: 'Our Team' },
    { href: 'publications.html', label: 'Publications' },
    { href: 'projects.html',     label: 'Projects' },
    { href: 'gallery.html',      label: 'Gallery' },
    { href: 'news.html',         label: 'News & Events' },
  ];

  const navLinks = pages.map(p =>
    `<li><a href="${p.href}" class="${currentPage === p.href ? 'active' : ''}">${p.label}</a></li>`
  ).join('');

  const styles = `
  <style>
    .nav-logo-wrap {
      display: flex; flex-direction: column; justify-content: center;
      line-height: 1.1; text-decoration: none;
    }
    .nav-strapline {
      font-size: .58rem; font-weight: 500;
      letter-spacing: .18em; text-transform: uppercase;
      color: var(--gold); opacity: .85; margin-top: .3rem;
      white-space: nowrap;
    }
    .footer-strapline {
      font-size: .6rem; font-weight: 500;
      letter-spacing: .16em; text-transform: uppercase;
      color: var(--gold); opacity: .85; margin: .35rem 0 .9rem;
    }

    /* hamburger button — hidden on desktop */
    .nav-toggle {
      display: none;
      background: none; border: none; cursor: pointer;
      padding: .5rem; margin-left: auto;
      flex-direction: column; gap: 5px;
      z-index: 1001;
    }
    .nav-toggle span {
      display: block; width: 26px; height: 2px;
      background: var(--gold); border-radius: 2px;
      transition: transform .3s ease, opacity .3s ease;
    }
    .nav-toggle.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .nav-toggle.open span:nth-child(2) { opacity: 0; }
    .nav-toggle.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

    @media (max-width: 1100px) {
      .nav-strapline { display: none; }

      .site-nav { position: relative; flex-wrap: wrap; }

      .nav-toggle { display: flex; }

      .site-nav .nav-menu {
        display: none !important;
        position: absolute;
        top: 100%; left: 0; right: 0;
        flex-direction: column !important;
        align-items: stretch !important;
        background: var(--navy, #0d1b36);
        border-top: 2px solid var(--gold);
        box-shadow: 0 14px 30px rgba(0,0,0,.35);
        padding: .5rem 0;
        margin: 0;
        gap: 0 !important;
        max-height: 80vh;
        overflow-y: auto;
      }
      .site-nav .nav-menu.open { display: flex !important; }

      .site-nav .nav-menu li { width: 100%; list-style: none; }
      .site-nav .nav-menu li a {
        display: block;
        padding: .95rem 6%;
        font-size: .95rem;
        color: rgba(255,255,255,.88);
        border-bottom: 1px solid rgba(255,255,255,.08);
      }
      .site-nav .nav-menu li:last-child a { border-bottom: none; }
      .site-nav .nav-menu li a.active { color: var(--gold); }
    }
  </style>`;

  const nav = `
  <nav class="site-nav">
    <a href="index.html" class="nav-logo nav-logo-wrap">
      <span>TABISH <span>Research</span> Group</span>
      <span class="nav-strapline">NANOCARD · Cardiovascular Nanotherapeutics</span>
    </a>
    <button class="nav-toggle" id="navToggle" aria-label="Menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-menu" id="navMenu">${navLinks}</ul>
  </nav>`;

  const footer = `
  <footer class="site-footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="nav-logo">TABISH <span style="color:var(--gold)">Research</span> Group</div>
        <div class="footer-strapline">NANOCARD · Cardiovascular Nanotherapeutics</div>
        <p>Radcliffe Department of Medicine</p>
        <p>John Radcliffe Hospital</p>
        <p>University of Oxford</p>
        <p>Oxford, OX3 9DU</p>
        <p>United Kingdom</p>
      </div>
      <div class="footer-col">
        <h4>Navigate</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="research.html">Our Research</a></li>
          <li><a href="tanveer.html">PI</a></li>
          <li><a href="team.html">Our Team</a></li>
          <li><a href="publications.html">Publications</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="news.html">News &amp; Events</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Connect</h4>
        <ul>
          <li><a href="https://scholar.google.com/citations?user=ZGpmIIIAAAAJ&hl=en" target="_blank">Google Scholar</a></li>
          <li><a href="https://www.scopus.com/authid/detail.uri?authorId=55484476700" target="_blank">Scopus</a></li>
          <li><a href="https://www.linkedin.com/in/tanveertabish/" target="_blank">LinkedIn</a></li>
          <li><a href="https://orcid.org/0000-0001-5578-076X" target="_blank">ORCID</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="mailto:tanveer.tabish@cardiov.ox.ac.uk">tanveer.tabish@cardiov.ox.ac.uk</a></li>
          <li><a href="tel:+441865287603">+44 (0)1865 287603</a></li>
          <li><a href="https://www.rdm.ox.ac.uk/people/tanveer-tabish" target="_blank">Oxford Profile</a></li>
          <li>
            <a href="https://orcid.org/0000-0001-5578-076X" target="_blank">
              <img src="img/ORCID.png" alt="ORCID iD" style="width:20px; height:20px;">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; ${new Date().getFullYear()} Tabish Research Group &nbsp;·&nbsp; University of Oxford
    </div>
  </footer>`;

  document.head.insertAdjacentHTML('beforeend', styles);
  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('beforeend', footer);

  /* mobile menu toggle */
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const open = menu.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        menu.classList.remove('open');
        toggle.classList.remove('open');
      }
    });
  }
})();
