/* shared-layout.js — injects nav + footer on every page */
(function () {
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  const pages = [
    { href: 'index.html',        label: 'Home' },
    { href: 'research.html',     label: 'Our Research' },
    { href: 'hafiz.html',        label: 'Tanveer' },
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
    <a href="index.html" class="nav-logo">ALI <span>Research</span> Group</a>
    <ul class="nav-menu">${navLinks}</ul>
  </nav>`;

  const footer = `
  <footer class="site-footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="nav-logo">TABISH <span style="color:var(--gold)">Research</span> Group</div>
        <p>Radcliffe Department of Medicine</p>
        <p>John Radcliffe Hospital<p>
        <p>University of Oxford</p>
        <p>Oxford, OX3 7BN</p>
        <p>United Kingdom</p>
      </div>
      <div class="footer-col">
        <h4>Navigate</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="research.html">Our Research</a></li>
          <li><a href="hafiz.html">Tanveer</a></li>
          <li><a href="team.html">Our Team</a></li>
          <li><a href="publications.html">Publications</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="news.html">News &amp; Events</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Connect</h4>
        <ul>
          <li><a href="https://twitter.com/HafizSaqibAl1" target="_blank">Twitter / X</a></li>
          <li><a href="https://github.com/HafizSaqibAli/" target="_blank">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/dr-hafiz-saqib-ali-02a324123/" target="_blank">LinkedIn</a></li>
          <li><a href="https://scholar.google.com/citations?user=qEVrdecAAAAJ&hl=en" target="_blank">Google Scholar</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="mailto:H.Saqib-Ali@liverpool.ac.uk">H.Saqib-Ali@liverpool.ac.uk</a></li>
          <li><a href="https://www.liverpool.ac.uk/chemistry/research/medicinal-chemistry/" target="_blank">Medicinal Chemistry Group</a></li>
          <li><a href="+44 (0) 7448520445" target="_blank">+44 (0) 7448520445</a></li>
          <a href="https://orcid.org/0000-0001-5770-5376" target="_blank">
            <img src="img/ORCID.png" alt="ORCID iD" style="width:20px; height:20px;">
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; ${new Date().getFullYear()} ALI Research Group &nbsp;·&nbsp; University of Liverpool
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('beforeend', footer);
})();
