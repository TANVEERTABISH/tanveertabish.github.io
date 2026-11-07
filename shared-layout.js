/* shared-layout.js — injects nav + footer on every page */
(function () {
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  const pages = [
    { href: 'index.html',        label: 'Home' },
    { href: 'research.html',     label: 'Our Research' },
    { href: 'tanveer.html',      label: 'Tanveer' },
    { href: 'team.html',         label: 'Our Team' },
    { href: 'publications.html', label: 'Publications' },
    { href: 'projects.html',     label: 'Projects' },
    { href: 'news.html',         label: 'News & Events' },
  ];

  const navLinks = pages.map(p =>
    `<li><a href="${p.href}" class="${currentPage === p.href ? 'active' : ''}">${p.label}</a></li>`
  ).join('');

  const nav = `
  <nav class="site-nav">
    <a href="index.html" class="nav-logo">TABISH <span>Research</span> Group</a>
    <ul class="nav-menu">${navLinks}</ul>
  </nav>`;

  const footer = `
  <footer class="site-footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="nav-logo">TABISH <span style="color:var(--gold)">Research</span> Group</div>
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
          <li><a href="tanveer.html">Tanveer</a></li>
          <li><a href="team.html">Our Team</a></li>
          <li><a href="publications.html">Publications</a></li>
          <li><a href="projects.html">Projects</a></li>
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

  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('beforeend', footer);
})();
