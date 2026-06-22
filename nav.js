/* ─── NAV COMPONENT ─────────────────────────────────── */
/* Injects the shared nav HTML + handles all nav logic   */
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(pages) {
    return pages.includes(currentPage) ? ' nav-link-active' : '';
  }

  const NAV_HTML = `
<nav class="nav" id="nav">
  <div class="nav-inner">
    <a class="nav-logo" href="index.html">Plynto<span class="logo-dot">.</span></a>

    <div class="nav-links">
      <!-- Products -->
      <div class="nav-item has-dropdown">
        <button class="nav-link-btn${isActive(['products.html','services.html'])}">
          Products
          <svg class="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="nav-dropdown">
          <div class="nav-dropdown-inner">
            <div class="nav-dropdown-col">
              <span class="nav-dropdown-heading">Web</span>
              <a class="nav-dropdown-item" href="products.html#landing-pages">
                <span class="nav-dropdown-icon">↗</span>
                <span>
                  <strong>Landing Pages</strong>
                  <em>From ₹5,000 · 5–10 days</em>
                </span>
              </a>
              <a class="nav-dropdown-item" href="products.html#business-websites">
                <span class="nav-dropdown-icon">🌐</span>
                <span>
                  <strong>Business Websites</strong>
                  <em>From ₹12,000 · 2–4 weeks</em>
                </span>
              </a>
              <a class="nav-dropdown-item" href="products.html#ecommerce">
                <span class="nav-dropdown-icon">🛒</span>
                <span>
                  <strong>E-Commerce Stores</strong>
                  <em>From ₹18,000 · 4–6 weeks</em>
                </span>
              </a>
            </div>
            <div class="nav-dropdown-col">
              <span class="nav-dropdown-heading">Systems</span>
              <a class="nav-dropdown-item" href="products.html#portals">
                <span class="nav-dropdown-icon">🔐</span>
                <span>
                  <strong>Client Portals</strong>
                  <em>From ₹20,000 · 4–6 weeks</em>
                </span>
              </a>
              <a class="nav-dropdown-item" href="products.html#internal-tools">
                <span class="nav-dropdown-icon">⚙️</span>
                <span>
                  <strong>Internal Tools</strong>
                  <em>From ₹15,000 · 3–5 weeks</em>
                </span>
              </a>
              <a class="nav-dropdown-item" href="products.html#mvp">
                <span class="nav-dropdown-icon">🚀</span>
                <span>
                  <strong>MVP Development</strong>
                  <em>From ₹25,000 · 6–8 weeks</em>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Services -->
      <div class="nav-item has-dropdown">
        <button class="nav-link-btn${isActive(['services.html'])}">
          Services
          <svg class="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="nav-dropdown">
          <div class="nav-dropdown-inner">
            <div class="nav-dropdown-col">
              <span class="nav-dropdown-heading">Engineering</span>
              <a class="nav-dropdown-item" href="services.html#web">
                <span class="nav-dropdown-icon">💻</span>
                <span>
                  <strong>Web Development</strong>
                  <em>React, Next.js, Node.js</em>
                </span>
              </a>
              <a class="nav-dropdown-item" href="services.html#app">
                <span class="nav-dropdown-icon">📱</span>
                <span>
                  <strong>App Development</strong>
                  <em>iOS &amp; Android · React Native</em>
                </span>
              </a>
              <a class="nav-dropdown-item" href="services.html#custom-software">
                <span class="nav-dropdown-icon">🛠</span>
                <span>
                  <strong>Custom Software</strong>
                  <em>ERP, CRM, Fintech, SaaS</em>
                </span>
              </a>
            </div>
            <div class="nav-dropdown-col">
              <span class="nav-dropdown-heading">Growth</span>
              <a class="nav-dropdown-item" href="services.html#automation">
                <span class="nav-dropdown-icon">🤖</span>
                <span>
                  <strong>Automation</strong>
                  <em>Workflow &amp; process automation</em>
                </span>
              </a>
              <a class="nav-dropdown-item" href="services.html#seo">
                <span class="nav-dropdown-icon">📈</span>
                <span>
                  <strong>SEO</strong>
                  <em>Technical &amp; on-page optimisation</em>
                </span>
              </a>
              <a class="nav-dropdown-item" href="services.html#consulting">
                <span class="nav-dropdown-icon">💬</span>
                <span>
                  <strong>Consulting</strong>
                  <em>Architecture &amp; product advisory</em>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Showcase -->
      <a href="showcase.html" class="nav-link${isActive(['showcase.html'])}">Showcase</a>

      <!-- Resources -->
      <div class="nav-item has-dropdown">
        <button class="nav-link-btn${isActive(['resources.html'])}">
          Resources
          <svg class="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="nav-dropdown nav-dropdown--sm">
          <div class="nav-dropdown-inner">
            <div class="nav-dropdown-col">
              <a class="nav-dropdown-item" href="resources.html#process">
                <span class="nav-dropdown-icon">📋</span>
                <span>
                  <strong>Our Process</strong>
                  <em>How we scope and deliver</em>
                </span>
              </a>
              <a class="nav-dropdown-item" href="customers.html">
                <span class="nav-dropdown-icon">📁</span>
                <span>
                  <strong>Case Studies</strong>
                  <em>Real projects, real results</em>
                </span>
              </a>
              <a class="nav-dropdown-item" href="resources.html#faq">
                <span class="nav-dropdown-icon">❓</span>
                <span>
                  <strong>FAQ</strong>
                  <em>Common questions answered</em>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Customers -->
      <div class="nav-item has-dropdown">
        <button class="nav-link-btn${isActive(['customers.html'])}">
          Customers
          <svg class="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="nav-dropdown nav-dropdown--sm">
          <div class="nav-dropdown-inner">
            <div class="nav-dropdown-col">
              <a class="nav-dropdown-item" href="customers.html#industries">
                <span class="nav-dropdown-icon">🏭</span>
                <span>
                  <strong>Industries</strong>
                  <em>Sectors we've shipped in</em>
                </span>
              </a>
              <a class="nav-dropdown-item" href="customers.html#stories">
                <span class="nav-dropdown-icon">⭐</span>
                <span>
                  <strong>Success Stories</strong>
                  <em>Outcomes our clients achieved</em>
                </span>
              </a>
              <a class="nav-dropdown-item" href="customers.html#testimonials">
                <span class="nav-dropdown-icon">💬</span>
                <span>
                  <strong>Testimonials</strong>
                  <em>What clients say</em>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <a href="about.html" class="nav-link${isActive(['about.html'])}">About</a>
    </div>

    <div class="nav-right">
      <div class="nav-status">
        <span class="live-dot"></span>
        <span>Taking projects</span>
      </div>
      <button class="portal-btn" id="portalBtn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
        Client Portal
      </button>
      <div class="avatar-wrap" id="avatarWrap" style="display:none">
        <button class="avatar-trigger" id="avatarTrigger">
          <div class="avatar-circle" id="avatarCircle">SK</div>
          <span class="avatar-name" id="avatarName">Sahil</span>
          <svg class="avatar-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="avatar-dropdown" id="avatarDropdown">
          <div class="avatar-dropdown-header">
            <div class="avatar-circle">SK</div>
            <div>
              <div class="avatar-name">Sahil Kumar</div>
              <div class="avatar-email">sahil@acme.in</div>
            </div>
          </div>
          <div class="avatar-dropdown-items">
            <a class="avatar-dropdown-item" href="portal.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>Dashboard</a>
            <a class="avatar-dropdown-item" href="portal.html?tab=projects"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>Projects</a>
            <a class="avatar-dropdown-item" href="portal.html?tab=messages"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>Messages</a>
            <a class="avatar-dropdown-item" href="portal.html?tab=documents"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>Documents</a>
            <a class="avatar-dropdown-item" href="portal.html?tab=invoices"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>Invoices</a>
            <div class="avatar-dropdown-divider"></div>
            <a class="avatar-dropdown-item" href="portal.html?tab=seo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>SEO Reports</a>
            <a class="avatar-dropdown-item" href="portal.html?tab=geo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>GEO Reports</a>
            <a class="avatar-dropdown-item" href="portal.html?tab=settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>Settings</a>
            <div class="avatar-dropdown-divider"></div>
            <button class="avatar-dropdown-item danger" id="logoutBtn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>Logout</button>
          </div>
        </div>
      </div>
      <a class="nav-cta" href="contact.html">Start a project</a>
      <button class="nav-hamburger" id="hamburger" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>

  <!-- Mobile menu -->
  <div class="nav-mobile" id="mobileMenu">
    <a href="index.html">Home</a>
    <a href="products.html">Products</a>
    <a href="services.html">Services</a>
    <a href="showcase.html">Showcase</a>
    <a href="resources.html">Resources</a>
    <a href="customers.html">Customers</a>
    <a href="about.html">About</a>
    <a href="contact.html" class="mobile-cta-link">Start a project →</a>
  </div>
</nav>

<!-- Portal modal -->
<div class="modal-overlay" id="portalModal">
  <div class="modal">
    <div class="modal-header">
      <span class="modal-header-title">Client Portal</span>
      <button class="modal-close" id="modalClose"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
    </div>
    <div class="modal-tabs">
      <button class="modal-tab active" data-tab="login">Sign In</button>
      <button class="modal-tab" data-tab="register">Register</button>
    </div>
    <div class="modal-body" id="modalBody">
      <div id="loginForm">
        <div class="auth-field"><label>Email</label><input type="email" id="loginEmail" placeholder="you@example.com" /></div>
        <div class="auth-field"><label>Password</label><input type="password" id="loginPass" placeholder="Enter your password" /></div>
        <button class="btn btn-primary" id="loginBtn">Sign in</button>
        <p class="modal-note">Only registered clients can sign in.<br>New? Use the Register tab above.</p>
      </div>
      <div id="registerForm" style="display:none">
        <div class="auth-field"><label>Registration ID</label><input type="text" id="regId" placeholder="Provided by Plynto" /></div>
        <div class="auth-field"><label>Email</label><input type="email" id="regEmail" placeholder="you@example.com" /></div>
        <div class="auth-field"><label>Password</label><input type="password" id="regPass" placeholder="Create a password" /></div>
        <button class="btn btn-primary" id="registerBtn">Create account</button>
        <p class="modal-note">Registration requires a valid ID from Plynto.<br>Already registered? Sign in above.</p>
      </div>
    </div>
  </div>
</div>
`;

  // Inject nav
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  // ── Scroll shadow ──────────────────────────────────
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  // ── Dropdown hover ─────────────────────────────────
  document.querySelectorAll('.nav-item.has-dropdown').forEach(item => {
    let timer;
    item.addEventListener('mouseenter', () => {
      clearTimeout(timer);
      item.classList.add('open');
    });
    item.addEventListener('mouseleave', () => {
      timer = setTimeout(() => item.classList.remove('open'), 120);
    });
    item.querySelector('.nav-link-btn')?.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-item')) {
      document.querySelectorAll('.nav-item.open').forEach(i => i.classList.remove('open'));
    }
  });

  // ── Mobile nav ─────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  function closeMobile() {
    hamburger?.classList.remove('open');
    mobileMenu?.classList.remove('open');
  }
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu?.classList.toggle('open');
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 860) closeMobile(); }, { passive: true });
  mobileMenu?.querySelectorAll('a').forEach(l => l.addEventListener('click', closeMobile));

  // ── Auth ───────────────────────────────────────────
  let isLoggedIn = localStorage.getItem('plynto_auth') === 'true';
  function updateAuthUI() {
    const portalBtn = document.getElementById('portalBtn');
    const avatarWrap = document.getElementById('avatarWrap');
    if (!portalBtn || !avatarWrap) return;
    if (isLoggedIn) { portalBtn.style.display = 'none'; avatarWrap.style.display = ''; }
    else { portalBtn.style.display = ''; avatarWrap.style.display = 'none'; }
  }

  // ── Portal modal ───────────────────────────────────
  const portalModal = document.getElementById('portalModal');
  document.addEventListener('click', e => {
    if (e.target.closest('#portalBtn')) { portalModal?.classList.add('open'); return; }
    if (e.target.closest('#modalClose') || (e.target.closest('.modal-overlay') && !e.target.closest('.modal'))) {
      portalModal?.classList.remove('open');
    }
  });
  document.querySelectorAll('.modal-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const isLogin = tab.dataset.tab === 'login';
      document.getElementById('loginForm').style.display = isLogin ? '' : 'none';
      document.getElementById('registerForm').style.display = isLogin ? 'none' : '';
    });
  });
  document.getElementById('loginBtn')?.addEventListener('click', () => {
    isLoggedIn = true; localStorage.setItem('plynto_auth', 'true');
    portalModal?.classList.remove('open'); updateAuthUI();
    if (!window.location.pathname.includes('portal.html')) window.location.href = 'portal.html';
  });
  document.getElementById('registerBtn')?.addEventListener('click', () => {
    const regId = document.getElementById('regId')?.value?.trim();
    if (!regId) { alert('Please enter your Registration ID.'); return; }
    isLoggedIn = true; localStorage.setItem('plynto_auth', 'true');
    portalModal?.classList.remove('open'); updateAuthUI();
    if (!window.location.pathname.includes('portal.html')) window.location.href = 'portal.html';
  });

  // ── Avatar dropdown ────────────────────────────────
  document.addEventListener('click', e => {
    const wrap = document.getElementById('avatarWrap');
    if (e.target.closest('#avatarTrigger')) { e.preventDefault(); wrap?.classList.toggle('open'); return; }
    if (wrap && !e.target.closest('#avatarDropdown') && !e.target.closest('.avatar-trigger')) wrap.classList.remove('open');
  });
  document.getElementById('logoutBtn')?.addEventListener('click', () => {
    isLoggedIn = false; localStorage.removeItem('plynto_auth');
    document.getElementById('avatarWrap')?.classList.remove('open'); updateAuthUI();
    if (window.location.pathname.includes('portal.html')) window.location.href = 'index.html';
  });

  // ── Reveal ─────────────────────────────────────────
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
    { threshold: 0.08 }
  );
  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

  updateAuthUI();
})();
