// ZRBC Europe Central Information System & Website
// Vanilla JavaScript Engine for HTML/CSS Version

const APP_STATE = {
  isPortal: false,
  currentPublicView: 'home',
  currentPortalTab: 'dashboard',
  currentLanguage: 'EN',
  activeRole: {
    id: 'director',
    name: 'Prof. Dr. Zion Raju',
    role: 'Director',
    department: 'European Central Board',
    scope: 'Europe Central'
  },
  students: [
    { id: 'ZRBC-2026-IT-0001', name: 'Marco Rossi', country: 'Italy', semester: 1, email: 'marco.rossi@student.zrbc.eu', attendance: 96, payment: 'Paid', status: 'Active' },
    { id: 'ZRBC-2026-IT-0002', name: 'Giulia Bianchi', country: 'Italy', semester: 2, email: 'giulia.b@student.zrbc.eu', attendance: 88, payment: 'Paid', status: 'Active' },
    { id: 'ZRBC-2026-FR-0003', name: 'Jean-Luc Dubois', country: 'France', semester: 1, email: 'jeanluc.dubois@student.zrbc.eu', attendance: 92, payment: 'Paid', status: 'Active' },
    { id: 'ZRBC-2026-DE-0004', name: 'Lukas Weber', country: 'Germany', semester: 3, email: 'lukas.weber@student.zrbc.eu', attendance: 85, payment: 'Pending', status: 'Active' },
    { id: 'ZRBC-2026-ES-0005', name: 'Carlos Martinez', country: 'Spain', semester: 1, email: 'carlos.m@student.zrbc.eu', attendance: 78, payment: 'Paid', status: 'Warning' },
    { id: 'ZRBC-2026-RO-0006', name: 'Ionut Popescu', country: 'Romania', semester: 2, email: 'ionut.p@student.zrbc.eu', attendance: 95, payment: 'Paid', status: 'Active' },
    { id: 'ZRBC-2026-CH-0007', name: 'Stefan Meier', country: 'Switzerland', semester: 1, email: 'stefan.m@student.zrbc.eu', attendance: 90, payment: 'Paid', status: 'Active' },
    { id: 'ZRBC-2026-NL-0008', name: 'Daan van Dijk', country: 'Netherlands', semester: 4, email: 'daan.vd@student.zrbc.eu', attendance: 94, payment: 'Paid', status: 'Active' },
    { id: 'ZRBC-2026-BE-0009', name: 'Amelie Leroy', country: 'Belgium', semester: 2, email: 'amelie.l@student.zrbc.eu', attendance: 89, payment: 'Paid', status: 'Active' },
    { id: 'ZRBC-2026-UK-0010', name: 'David Thompson', country: 'United Kingdom', semester: 1, email: 'david.t@student.zrbc.eu', attendance: 91, payment: 'Paid', status: 'Active' },
    { id: 'ZRBC-2026-PT-0011', name: 'Tiago Silva', country: 'Portugal', semester: 3, email: 'tiago.s@student.zrbc.eu', attendance: 82, payment: 'Pending', status: 'Active' },
    { id: 'ZRBC-2026-AT-0012', name: 'Anna Schmidt', country: 'Austria', semester: 1, email: 'anna.s@student.zrbc.eu', attendance: 97, payment: 'Paid', status: 'Active' }
  ],
  countries: [
    { name: 'Italy', code: 'IT', city: 'Rome (Central HQ)', coordinator: 'Rev. Matteo Conti', students: 48, attendance: 95, status: 'Central Hub' },
    { name: 'France', code: 'FR', city: 'Paris', coordinator: 'Pastor Alain Mercier', students: 24, attendance: 92, status: 'Active Hub' },
    { name: 'Germany', code: 'DE', city: 'Frankfurt', coordinator: 'Rev. Heinrich Braun', students: 28, attendance: 89, status: 'Active Hub' },
    { name: 'Spain', code: 'ES', city: 'Madrid', coordinator: 'Pastor Miguel Alvarez', students: 19, attendance: 87, status: 'Active Hub' },
    { name: 'Romania', code: 'RO', city: 'Bucharest', coordinator: 'Rev. Dan Ionescu', students: 22, attendance: 94, status: 'Active Hub' },
    { name: 'Switzerland', code: 'CH', city: 'Zurich / Geneva', coordinator: 'Rev. Markus Keller', students: 14, attendance: 91, status: 'Active Hub' },
    { name: 'Netherlands', code: 'NL', city: 'Amsterdam', coordinator: 'Pastor Johan Smit', students: 12, attendance: 93, status: 'Active Hub' },
    { name: 'United Kingdom', code: 'UK', city: 'London', coordinator: 'Rev. Arthur Campbell', students: 18, attendance: 90, status: 'Active Hub' },
    { name: 'Belgium', code: 'BE', city: 'Brussels', coordinator: 'Pastor Pierre Lambert', students: 9, attendance: 88, status: 'Active Hub' },
    { name: 'Portugal', code: 'PT', city: 'Lisbon', coordinator: 'Rev. Joao Santos', students: 11, attendance: 86, status: 'Active Hub' },
    { name: 'Austria', code: 'AT', city: 'Vienna', coordinator: 'Pastor Felix Wagner', students: 8, attendance: 95, status: 'Active Hub' },
    { name: 'Sweden', code: 'SE', city: 'Stockholm', coordinator: 'Rev. Erik Lindqvist', students: 7, attendance: 89, status: 'Active Hub' },
    { name: 'Norway', code: 'NO', city: 'Oslo', coordinator: 'Pastor Ole Hansen', students: 6, attendance: 92, status: 'Active Hub' },
    { name: 'Denmark', code: 'DK', city: 'Copenhagen', coordinator: 'Rev. Lars Jensen', students: 5, attendance: 91, status: 'Active Hub' },
    { name: 'Finland', code: 'FI', city: 'Helsinki', coordinator: 'Pastor Mikael Korhonen', students: 5, attendance: 88, status: 'Active Hub' },
    { name: 'Poland', code: 'PL', city: 'Warsaw', coordinator: 'Rev. Piotr Kowalski', students: 10, attendance: 90, status: 'Active Hub' },
    { name: 'Czech Republic', code: 'CZ', city: 'Prague', coordinator: 'Pastor Jan Novak', students: 6, attendance: 87, status: 'Active Hub' },
    { name: 'Hungary', code: 'HU', city: 'Budapest', coordinator: 'Rev. Gabor Nagy', students: 5, attendance: 86, status: 'Active Hub' },
    { name: 'Greece', code: 'GR', city: 'Athens', coordinator: 'Pastor Nikos Papadopoulos', students: 4, attendance: 84, status: 'Active Hub' },
    { name: 'Ireland', code: 'IE', city: 'Dublin', coordinator: 'Rev. Sean O’Connor', students: 6, attendance: 91, status: 'Active Hub' }
  ],
  roles: [
    { id: 'director', name: 'Prof. Dr. Zion Raju', role: 'Director', department: 'Central Board', scope: 'Europe Central' },
    { id: 'secretariat', name: 'Dr. Roberto Ferri', role: 'General Secretariat', department: 'Central Administration', scope: 'Rome HQ' },
    { id: 'academic', name: 'Prof. Elena Rostova', role: 'Academic Dean', department: 'Academic Office', scope: 'Curriculum & Faculty' },
    { id: 'coord_it', name: 'Rev. Matteo Conti', role: 'Country Coordinator', department: 'Italy Hub', scope: 'Italy' },
    { id: 'coord_fr', name: 'Pastor Alain Mercier', role: 'Country Coordinator', department: 'France Hub', scope: 'France' },
    { id: 'coord_de', name: 'Rev. Heinrich Braun', role: 'Country Coordinator', department: 'Germany Hub', scope: 'Germany' },
    { id: 'teacher', name: 'Dr. Timothy Keller', role: 'Faculty Professor', department: 'Theological Faculty', scope: 'Academic Faculty' },
    { id: 'student', name: 'Marco Rossi', role: 'Student (Semester 1)', department: 'Italy Cohort', scope: 'Student Portal' },
    { id: 'finance', name: 'Chiara Valenti', role: 'Central Treasurer', department: 'Finance Office', scope: 'Budget & Tuition' },
    { id: 'legal', name: 'Avv. Luca Moretti', role: 'Legal & GDPR Officer', department: 'Compliance & Audit', scope: 'European Legal' }
  ]
};

// Routing & View Rendering
function switchView(viewName) {
  APP_STATE.isPortal = false;
  APP_STATE.currentPublicView = viewName;
  updateUINavigation();
  renderCurrentView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openPortal(tabName = 'dashboard') {
  APP_STATE.isPortal = true;
  APP_STATE.currentPortalTab = tabName;
  updateUINavigation();
  renderCurrentView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchPortalTab(tabName) {
  APP_STATE.isPortal = true;
  APP_STATE.currentPortalTab = tabName;
  updatePortalSidebar();
  renderPortalBody();
}

function updateUINavigation() {
  const publicNavLinks = document.querySelectorAll('.nav-link');
  publicNavLinks.forEach(link => {
    const targetView = link.getAttribute('data-view');
    if (!APP_STATE.isPortal && targetView === APP_STATE.currentPublicView) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  const portalToggleBtn = document.getElementById('portal-toggle-btn');
  if (portalToggleBtn) {
    if (APP_STATE.isPortal) {
      portalToggleBtn.innerHTML = '← Return to Public Website';
      portalToggleBtn.style.background = '#1e293b';
      portalToggleBtn.style.color = '#f8fafc';
    } else {
      portalToggleBtn.innerHTML = '🔐 Back-Office Portal & LMS';
      portalToggleBtn.style.background = 'rgba(245, 158, 11, 0.12)';
      portalToggleBtn.style.color = '#f59e0b';
    }
  }

  // Update active role badge in top bar
  const roleDisplay = document.getElementById('active-role-display');
  if (roleDisplay) {
    roleDisplay.textContent = `${APP_STATE.activeRole.role}: ${APP_STATE.activeRole.name}`;
  }
}

function renderCurrentView() {
  const mainContainer = document.getElementById('main-app-content');
  if (!mainContainer) return;

  if (APP_STATE.isPortal) {
    mainContainer.innerHTML = getPortalShellHTML();
    updatePortalSidebar();
    renderPortalBody();
  } else {
    switch (APP_STATE.currentPublicView) {
      case 'home':
        mainContainer.innerHTML = getPublicHomeHTML();
        break;
      case 'programme':
        mainContainer.innerHTML = getPublicProgrammeHTML();
        break;
      case 'admissions':
        mainContainer.innerHTML = getPublicAdmissionsHTML();
        setupAdmissionsForm();
        break;
      case 'countries':
        mainContainer.innerHTML = getPublicCountriesHTML();
        break;
      case 'about':
        mainContainer.innerHTML = getPublicAboutHTML();
        break;
      case 'contact':
        mainContainer.innerHTML = getPublicContactHTML();
        setupContactForm();
        break;
      default:
        mainContainer.innerHTML = getPublicHomeHTML();
    }
  }
}

// Public HTML Templates
function getPublicHomeHTML() {
  return `
    <section class="section-hero">
      <div class="container">
        <div class="hero-badge">🏛️ European Central Seat in Rome, Italy</div>
        <h1 class="hero-title">
          Zion Raju International<br />
          <span>Pentecostal Bible College — Europe</span>
        </h1>
        <p class="hero-sub">
          The unified ministerial training and theological foundation for the 20 European participating nations. Guided by Central Governance, Academic Rigour, and Spiritual Calling.
        </p>
        <div class="hero-cta-group">
          <button class="btn-primary" onclick="switchView('admissions')">Apply for European Cohort 2026</button>
          <button class="btn-secondary" onclick="switchView('programme')">Explore Curriculum & Credits</button>
          <button class="btn-secondary" onclick="openPortal('dashboard')">Enter Back-Office Portal</button>
        </div>

        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">20</div>
            <div class="stat-label">Participating Nations</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">145+</div>
            <div class="stat-label">Enrolled European Students</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">130</div>
            <div class="stat-label">Guided Instruction Hours</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">7</div>
            <div class="stat-label">Official Translated Languages</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Institutional Pillars -->
    <section class="py-section">
      <div class="container">
        <div class="section-header center">
          <div class="section-kicker">Core Foundations</div>
          <h2 class="section-title">The Three European Institutional Pillars</h2>
          <p class="section-desc">Establishing doctrinal fidelity, academic structure, and cross-border European fellowship.</p>
        </div>

        <div class="grid-3">
          <div class="feature-card">
            <div class="card-icon">🏛️</div>
            <h3>Central Italian Governance</h3>
            <p>Administered under the direct oversight of Prof. Dr. Zion Raju and the European General Secretariat headquartered in Rome, ensuring administrative integrity and official credit accreditation.</p>
          </div>
          <div class="feature-card">
            <div class="card-icon">📖</div>
            <h3>Systematic Pentecostal Theology</h3>
            <p>Comprehensive study of Hermeneutics, Pneumatology, Homiletics, Church History, Pastoral Epistles, and Spiritual Warfare designed specifically for European ministry contexts.</p>
          </div>
          <div class="feature-card">
            <div class="card-icon">🌐</div>
            <h3>Unified 20-Nation Hybrid Cohort</h3>
            <p>Live synchronous weekly online instruction complemented by regional prayer gatherings, local hub fellowship, and centralized attendance tracking across all participating countries.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Weekly Live Schedule Strip -->
    <section class="py-section" style="background: #0b111e; border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle);">
      <div class="container">
        <div class="section-header">
          <div class="section-kicker">Academic Timetable</div>
          <h2 class="section-title">Weekly European Class Schedule</h2>
          <p class="section-desc">Conducted synchronously across all CET / CEST time zones with live interpretation channels.</p>
        </div>

        <div class="schedule-table-wrap">
          <table class="custom-table">
            <thead>
              <tr>
                <th>Day & Time (CET)</th>
                <th>Course Module</th>
                <th>Professor / Faculty</th>
                <th>Interpretation Channels</th>
                <th>Delivery Format</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Tuesdays</strong><br /><span style="color: var(--text-muted);">19:30 - 21:30 CET</span></td>
                <td><strong>Biblical Hermeneutics & Exegesis</strong><br /><span style="color: var(--text-secondary); font-size: 0.8rem;">Module 101 • 30 ECTS Hours</span></td>
                <td>Prof. Dr. Zion Raju</td>
                <td><span class="badge badge-info">EN</span> <span class="badge badge-info">IT</span> <span class="badge badge-info">FR</span> <span class="badge badge-info">ES</span> <span class="badge badge-info">DE</span></td>
                <td><span class="badge badge-success">Live Zoom + Central LMS</span></td>
              </tr>
              <tr>
                <td><strong>Thursdays</strong><br /><span style="color: var(--text-muted);">19:30 - 21:30 CET</span></td>
                <td><strong>Pneumatology & Pentecostal Doctrine</strong><br /><span style="color: var(--text-secondary); font-size: 0.8rem;">Module 102 • 35 ECTS Hours</span></td>
                <td>Dr. Timothy Keller</td>
                <td><span class="badge badge-info">EN</span> <span class="badge badge-info">IT</span> <span class="badge badge-info">FR</span> <span class="badge badge-info">RO</span></td>
                <td><span class="badge badge-success">Live Zoom + Central LMS</span></td>
              </tr>
              <tr>
                <td><strong>Saturdays</strong><br /><span style="color: var(--text-muted);">09:30 - 12:00 CET</span></td>
                <td><strong>Homiletics & Pastoral Ministry Practicum</strong><br /><span style="color: var(--text-secondary); font-size: 0.8rem;">Module 103 • 45 ECTS Hours</span></td>
                <td>Faculty Visiting Lecturers</td>
                <td><span class="badge badge-info">7 Channels Active</span></td>
                <td><span class="badge badge-warning">Cohort Workshops</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Participating Nations Preview -->
    <section class="py-section">
      <div class="container">
        <div class="section-header center">
          <div class="section-kicker">European Network</div>
          <h2 class="section-title">20 Participating European Hubs</h2>
          <p class="section-desc">Each nation operates under an appointed National Coordinator collaborating directly with the Rome Secretariat.</p>
        </div>

        <div class="grid-4">
          ${APP_STATE.countries.slice(0, 8).map(c => `
            <div class="feature-card" style="padding: 1.25rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <strong style="color: var(--accent-gold); font-size: 1.05rem;">${c.name}</strong>
                <span class="badge badge-info">${c.code}</span>
              </div>
              <p style="font-size: 0.8rem; margin-bottom: 0.4rem; color: var(--text-secondary);">Coordinator: <strong>${c.coordinator}</strong></p>
              <p style="font-size: 0.8rem; color: var(--text-muted);">Hub: ${c.city} • Enrolled: <strong style="color: var(--text-primary);">${c.students}</strong></p>
            </div>
          `).join('')}
        </div>

        <div style="text-align: center; margin-top: 2rem;">
          <button class="btn-secondary" onclick="switchView('countries')">View Full 20-Nation Directory →</button>
        </div>
      </div>
    </section>
  `;
}

function getPublicProgrammeHTML() {
  return `
    <div class="container py-section">
      <div class="section-header">
        <div class="section-kicker">Academic Curriculum</div>
        <h2 class="section-title">Diploma of Pentecostal Ministerial Theology</h2>
        <p class="section-desc">A 4-semester comprehensive academic program totaling 190 recognized hours (130 guided contact hours + 60 autonomous guided research hours).</p>
      </div>

      <div class="grid-2" style="margin-bottom: 3rem;">
        <div class="feature-card">
          <div class="card-icon">📚</div>
          <h3>Academic Credit Structure</h3>
          <ul style="list-style: none; margin-top: 1rem; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.9rem; color: var(--text-secondary);">
            <li>✓ <strong>130 Guided Contact Hours:</strong> Synchronous lectures with Dr. Zion Raju & accredited faculty.</li>
            <li>✓ <strong>60 Guided Research Hours:</strong> Autonomous exegesis assignments and pastoral essays.</li>
            <li>✓ <strong>80% Attendance Threshold:</strong> Mandatory for European graduation certification.</li>
            <li>✓ <strong>Multilingual Accessibility:</strong> Lecture notes and transcripts provided in 7 European languages.</li>
          </ul>
        </div>
        <div class="feature-card">
          <div class="card-icon">📜</div>
          <h3>European Central Certification</h3>
          <p style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-secondary);">
            Graduates receive the official <strong>ZRBC European Ministerial Diploma</strong> bearing the central seal of Rome and signed by the Board of Direction. Recognized across participating European Pentecostal fellowships.
          </p>
          <div style="margin-top: 1.5rem;">
            <span class="badge badge-success">Central Rome Accreditation</span>
            <span class="badge badge-info" style="margin-left: 0.5rem;">ECTS Framework Compliant</span>
          </div>
        </div>
      </div>

      <div class="section-header">
        <div class="section-kicker">Syllabus Matrix</div>
        <h3 class="section-title" style="font-size: 1.4rem;">Curriculum by Academic Semester</h3>
      </div>

      <div class="schedule-table-wrap">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Semester</th>
              <th>Course Title</th>
              <th>Credits / Hours</th>
              <th>Key Learning Outcomes</th>
              <th>Assessment Mode</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="badge badge-gold">Semester 1</span></td>
              <td><strong>Old Testament Exegesis & Biblical Hermeneutics</strong></td>
              <td>35 Hours</td>
              <td>Grammatical-historical analysis, covenant theology, typology.</td>
              <td>Midterm Paper + Exegetical Brief</td>
            </tr>
            <tr>
              <td><span class="badge badge-gold">Semester 2</span></td>
              <td><strong>New Testament Epistles & Pneumatology</strong></td>
              <td>45 Hours</td>
              <td>Pauline theology, the baptism and gifts of the Holy Spirit in Acts.</td>
              <td>Doctrinal Examination + Oral Defense</td>
            </tr>
            <tr>
              <td><span class="badge badge-gold">Semester 3</span></td>
              <td><strong>Homiletics, Preaching & Pastoral Counseling</strong></td>
              <td>40 Hours</td>
              <td>Expository sermon structure, pulpit communication, crisis counseling.</td>
              <td>Recorded Sermon Assessment</td>
            </tr>
            <tr>
              <td><span class="badge badge-gold">Semester 4</span></td>
              <td><strong>Church History, Missions & Cross-Cultural Ministry</strong></td>
              <td>40 Hours</td>
              <td>Reformation and Pentecostal revival history; European church planting.</td>
              <td>Graduation Capstone Thesis</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function getPublicAdmissionsHTML() {
  return `
    <div class="container py-section">
      <div class="section-header center">
        <div class="section-kicker">Admissions & Matriculation</div>
        <h2 class="section-title">Apply for European Cohort 2026</h2>
        <p class="section-desc">Submit your official matriculation application to the Rome Central Secretariat. European Student IDs are generated upon verification.</p>
      </div>

      <div style="max-width: 800px; margin: 0 auto;">
        <div id="admissions-alert" style="display: none; margin-bottom: 1.5rem; padding: 1.25rem; border-radius: var(--radius-md); background: rgba(16, 185, 129, 0.15); border: 1px solid var(--accent-emerald); color: #fff;"></div>

        <form id="admissions-form" class="form-card">
          <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--accent-gold); border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.75rem;">
            Candidate Information
          </h3>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Full Legal Name *</label>
              <input type="text" id="adm-name" class="form-input" required placeholder="e.g. Maria Rossi" />
            </div>
            <div class="form-group">
              <label class="form-label">Email Address *</label>
              <input type="email" id="adm-email" class="form-input" required placeholder="maria.rossi@email.com" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Phone / WhatsApp *</label>
              <input type="tel" id="adm-phone" class="form-input" required placeholder="+39 340 1234567" />
            </div>
            <div class="form-group">
              <label class="form-label">Country Hub *</label>
              <select id="adm-country" class="form-select" required>
                ${APP_STATE.countries.map(c => `<option value="${c.name}" data-code="${c.code}">${c.name} (${c.code})</option>`).join('')}
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Local Congregation / Assembly *</label>
              <input type="text" id="adm-church" class="form-input" required placeholder="e.g. Chiesa Cristiana Roma Centro" />
            </div>
            <div class="form-group">
              <label class="form-label">Preferred Study Language *</label>
              <select id="adm-lang" class="form-select" required>
                <option value="English">English</option>
                <option value="Italian">Italian (Italiano)</option>
                <option value="French">French (Français)</option>
                <option value="Spanish">Spanish (Español)</option>
                <option value="German">German (Deutsch)</option>
                <option value="Romanian">Romanian (Română)</option>
                <option value="Portuguese">Portuguese (Português)</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Pastoral Recommendation or Ministry Calling Statement</label>
            <textarea id="adm-notes" class="form-textarea" rows="3" placeholder="Briefly describe your ministry background and recommendation from your local pastor..."></textarea>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2rem;">
            <span style="font-size: 0.8rem; color: var(--text-muted);">🔒 Submitted securely to Rome Central Secretariat</span>
            <button type="submit" class="btn-primary">Submit Application & Matriculate</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function getPublicCountriesHTML() {
  return `
    <div class="container py-section">
      <div class="section-header">
        <div class="section-kicker">20 Participating Nations</div>
        <h2 class="section-title">European Hub Network</h2>
        <p class="section-desc">Unified governance coordinated centrally from Italy, with designated local pastoral leaders across Europe.</p>
      </div>

      <div class="grid-3">
        ${APP_STATE.countries.map(c => `
          <div class="feature-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
              <h3 style="margin-bottom: 0;">${c.name}</h3>
              <span class="badge ${c.code === 'IT' ? 'badge-warning' : 'badge-info'}">${c.code}</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
              <strong>National Coordinator:</strong><br />${c.coordinator}
            </p>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
              <strong>Hub Seat:</strong> ${c.city}
            </p>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.25rem; padding-top: 0.75rem; border-top: 1px solid var(--border-subtle); font-size: 0.8rem;">
              <span>Enrolled Students: <strong style="color: var(--accent-gold);">${c.students}</strong></span>
              <span>Attendance: <strong style="color: var(--accent-emerald);">${c.attendance}%</strong></span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function getPublicAboutHTML() {
  return `
    <div class="container py-section">
      <div class="section-header">
        <div class="section-kicker">Institutional Structure</div>
        <h2 class="section-title">About ZRBC Europe</h2>
        <p class="section-desc">The official ministerial college of the Zion Raju International Ministries, uniting European Pentecostal congregations.</p>
      </div>

      <div class="grid-2" style="margin-bottom: 3rem;">
        <div class="feature-card">
          <div class="card-icon">🏛️</div>
          <h3>Rome Central Secretariat</h3>
          <p>The centralized body responsible for academic accreditation, student matriculation records, financial stewardship, and multi-language translation synchronization.</p>
          <div style="margin-top: 1rem; font-size: 0.85rem; color: var(--text-secondary);">
            <strong>Address:</strong> Via Nomentana 248, 00161 Roma, Italy<br />
            <strong>Central Registry:</strong> secretariat@zrbc.eu
          </div>
        </div>

        <div class="feature-card">
          <div class="card-icon">👑</div>
          <h3>Direction & Spiritual Leadership</h3>
          <p>Led by <strong>Prof. Dr. Zion Raju</strong>, providing systematic Pentecostal teaching, doctrinal clarity, and ministerial mentorship to pastors and leaders across 20 European nations.</p>
          <div style="margin-top: 1rem; font-size: 0.85rem; color: var(--text-secondary);">
            <strong>Governance Model:</strong> Centralized Apostolic & Academic Direction
          </div>
        </div>
      </div>

      <div class="section-header">
        <div class="section-kicker">Central Administrative Departments</div>
        <h3 class="section-title" style="font-size: 1.35rem;">The 4 Central European Departments</h3>
      </div>

      <div class="grid-4">
        <div class="feature-card">
          <div class="card-icon">1</div>
          <h4>Direction & Council</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem;">Strategic direction, doctrine, ordination board, and European council oversight.</p>
        </div>
        <div class="feature-card">
          <div class="card-icon">2</div>
          <h4>General Secretariat</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem;">Student registration, European ID issuance, archival records, and national communications.</p>
        </div>
        <div class="feature-card">
          <div class="card-icon">3</div>
          <h4>Academic Board</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem;">Curriculum formulation, faculty appointments, exam review, and graduation validation.</p>
        </div>
        <div class="feature-card">
          <div class="card-icon">4</div>
          <h4>Translation & Media</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem;">Real-time interpretation, translated study guides in 7 European languages, and LMS broadcasting.</p>
        </div>
      </div>
    </div>
  `;
}

function getPublicContactHTML() {
  return `
    <div class="container py-section">
      <div class="section-header center">
        <div class="section-kicker">Secretariat Liaison</div>
        <h2 class="section-title">Contact Central Administration</h2>
        <p class="section-desc">Reach the Rome headquarters for admission inquiries, pastoral credentials, or national coordination.</p>
      </div>

      <div class="grid-2" style="max-width: 960px; margin: 0 auto;">
        <div class="feature-card">
          <h3 style="margin-bottom: 1rem; color: var(--accent-gold);">European Headquarters</h3>
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
            <strong>Zion Raju International Bible College — Europe</strong><br />
            General Secretariat & Academic Office<br />
            Via Nomentana 248<br />
            00161 Roma (RM), Italy
          </p>

          <div style="font-size: 0.85rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.75rem;">
            <div>📧 <strong>General Inquiries:</strong> secretariat@zrbc.eu</div>
            <div>🎓 <strong>Academic Office:</strong> academic@zrbc.eu</div>
            <div>📞 <strong>Central Phone:</strong> +39 06 8530 1192</div>
            <div>⏰ <strong>Office Hours:</strong> Mon - Fri, 09:00 - 17:30 CET</div>
          </div>
        </div>

        <form id="contact-form" class="form-card">
          <div id="contact-alert" style="display: none; padding: 0.75rem; margin-bottom: 1rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.2); border: 1px solid var(--accent-emerald); font-size: 0.85rem;"></div>

          <div class="form-group">
            <label class="form-label">Full Name</label>
            <input type="text" id="contact-name" class="form-input" required placeholder="Pastor or Student Name" />
          </div>
          <div class="form-group">
            <label class="form-label">Email</label>
            <input type="email" id="contact-email" class="form-input" required placeholder="name@domain.com" />
          </div>
          <div class="form-group">
            <label class="form-label">Subject</label>
            <select id="contact-subject" class="form-select">
              <option value="admissions">Admissions & Registration</option>
              <option value="national">National Hub Coordination</option>
              <option value="academic">Curriculum & Exam Records</option>
              <option value="general">General Inquiries</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Message</label>
            <textarea id="contact-msg" class="form-textarea" rows="3" required placeholder="Write your message to the Secretariat..."></textarea>
          </div>
          <button type="submit" class="btn-primary" style="width: 100%; justify-content: center;">Send Message</button>
        </form>
      </div>
    </div>
  `;
}

// Portal Shell & Modules
function getPortalShellHTML() {
  return `
    <div class="portal-shell">
      <aside class="portal-sidebar">
        <div style="padding: 0.5rem 0.6rem 0.9rem; margin-bottom: 0.5rem; border-bottom: 1px solid var(--border-subtle);">
          <div style="font-size: 0.7rem; text-transform: uppercase; color: var(--accent-gold); font-weight: 700; letter-spacing: 0.05em;">ZRBC Back-Office</div>
          <div style="font-size: 0.85rem; font-weight: 600; color: var(--text-primary); margin-top: 0.15rem;">European Central Portal</div>
        </div>

        <button class="portal-tab-btn" data-tab="dashboard" onclick="switchPortalTab('dashboard')">
          <span class="portal-tab-icon">📊</span> Direction Dashboard
        </button>
        <button class="portal-tab-btn" data-tab="students" onclick="switchPortalTab('students')">
          <span class="portal-tab-icon">🎓</span> Student Registry
        </button>
        <button class="portal-tab-btn" data-tab="countries" onclick="switchPortalTab('countries')">
          <span class="portal-tab-icon">🌍</span> Country Hubs (20)
        </button>
        <button class="portal-tab-btn" data-tab="lms" onclick="switchPortalTab('lms')">
          <span class="portal-tab-icon">💻</span> LMS & Live Classes
        </button>
        <button class="portal-tab-btn" data-tab="attendance" onclick="switchPortalTab('attendance')">
          <span class="portal-tab-icon">⏱️</span> Attendance System
        </button>
        <button class="portal-tab-btn" data-tab="translation" onclick="switchPortalTab('translation')">
          <span class="portal-tab-icon">🌐</span> Translation Pipeline
        </button>
        <button class="portal-tab-btn" data-tab="documents" onclick="switchPortalTab('documents')">
          <span class="portal-tab-icon">📁</span> Document Repository
        </button>
        <button class="portal-tab-btn" data-tab="exams" onclick="switchPortalTab('exams')">
          <span class="portal-tab-icon">📜</span> Exams & Diplomas
        </button>
        <button class="portal-tab-btn" data-tab="finance" onclick="switchPortalTab('finance')">
          <span class="portal-tab-icon">💶</span> Finance Tracking
        </button>
        <button class="portal-tab-btn" data-tab="governance" onclick="switchPortalTab('governance')">
          <span class="portal-tab-icon">⚖️</span> European Governance
        </button>
        <button class="portal-tab-btn" data-tab="audit" onclick="switchPortalTab('audit')">
          <span class="portal-tab-icon">🛡️</span> Audit & Security Logs
        </button>
      </aside>

      <main class="portal-body" id="portal-tab-content">
        <!-- Rendered dynamically -->
      </main>
    </div>
  `;
}

function updatePortalSidebar() {
  const tabs = document.querySelectorAll('.portal-tab-btn');
  tabs.forEach(btn => {
    if (btn.getAttribute('data-tab') === APP_STATE.currentPortalTab) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function renderPortalBody() {
  const contentEl = document.getElementById('portal-tab-content');
  if (!contentEl) return;

  switch (APP_STATE.currentPortalTab) {
    case 'dashboard':
      contentEl.innerHTML = getPortalDashboardHTML();
      break;
    case 'students':
      contentEl.innerHTML = getPortalStudentsHTML();
      setupStudentFilters();
      break;
    case 'countries':
      contentEl.innerHTML = getPortalCountriesHTML();
      break;
    case 'lms':
      contentEl.innerHTML = getPortalLMSHTML();
      break;
    case 'attendance':
      contentEl.innerHTML = getPortalAttendanceHTML();
      break;
    case 'translation':
      contentEl.innerHTML = getPortalTranslationHTML();
      break;
    case 'documents':
      contentEl.innerHTML = getPortalDocumentsHTML();
      break;
    case 'exams':
      contentEl.innerHTML = getPortalExamsHTML();
      break;
    case 'finance':
      contentEl.innerHTML = getPortalFinanceHTML();
      break;
    case 'governance':
      contentEl.innerHTML = getPortalGovernanceHTML();
      break;
    case 'audit':
      contentEl.innerHTML = getPortalAuditHTML();
      break;
    default:
      contentEl.innerHTML = getPortalDashboardHTML();
  }
}

// Tab: Dashboard
function getPortalDashboardHTML() {
  return `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
      <div>
        <h2 style="font-size: 1.5rem; font-weight: 700;">Direction Dashboard</h2>
        <p style="color: var(--text-secondary); font-size: 0.875rem;">European Central Overview • Logged in as: <strong>${APP_STATE.activeRole.name}</strong> (${APP_STATE.activeRole.role})</p>
      </div>
      <button class="btn-secondary" onclick="openRoleModal()">Switch Role (${APP_STATE.activeRole.role})</button>
    </div>

    <div class="grid-4" style="margin-bottom: 2rem;">
      <div class="stat-card">
        <div class="stat-value">145</div>
        <div class="stat-label">Total European Students</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">20</div>
        <div class="stat-label">Active National Hubs</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">91.4%</div>
        <div class="stat-label">Average European Attendance</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-emerald);">88%</div>
        <div class="stat-label">Tuition Reconciliation</div>
      </div>
    </div>

    <!-- Alert and Status Table -->
    <div class="schedule-table-wrap" style="margin-bottom: 2.5rem;">
      <div style="padding: 1rem 1.25rem; background: #0c1424; border-bottom: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
        <strong style="font-size: 0.95rem;">🚨 Critical Priority Matters Awaiting European Direction</strong>
        <span class="badge badge-warning">3 Pending Action</span>
      </div>
      <table class="custom-table">
        <thead>
          <tr>
            <th>Priority</th>
            <th>Item Description</th>
            <th>Country / Hub</th>
            <th>Assigned To</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="badge badge-danger">High</span></td>
            <td>Finalize French Simultaneous Translation Roster for Semester 2</td>
            <td>France (Paris Hub)</td>
            <td>Pastor Alain Mercier</td>
            <td><span class="badge badge-warning">Reviewing</span></td>
          </tr>
          <tr>
            <td><span class="badge badge-warning">Medium</span></td>
            <td>Tuition reconciliation validation for 3 German cohort candidates</td>
            <td>Germany (Frankfurt)</td>
            <td>Chiara Valenti (Treasury)</td>
            <td><span class="badge badge-info">In Progress</span></td>
          </tr>
          <tr>
            <td><span class="badge badge-success">Normal</span></td>
            <td>Spanish Hermeneutics syllabus transcript dispatch</td>
            <td>Spain (Madrid Hub)</td>
            <td>Academic Office</td>
            <td><span class="badge badge-success">Approved</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

// Tab: Students
function getPortalStudentsHTML() {
  return `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
      <div>
        <h2 style="font-size: 1.5rem; font-weight: 700;">Student Registry & Records</h2>
        <p style="color: var(--text-secondary); font-size: 0.875rem;">Central student record database across all 20 participating European nations.</p>
      </div>
      <button class="btn-primary" onclick="openAddStudentModal()">+ Register New Student</button>
    </div>

    <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
      <input type="text" id="student-search-input" class="form-input" style="flex: 1; min-width: 240px;" placeholder="🔍 Search student by name or European ID..." />
      <select id="student-country-filter" class="form-select" style="width: auto; min-width: 180px;">
        <option value="ALL">All European Countries</option>
        ${APP_STATE.countries.map(c => `<option value="${c.name}">${c.name}</option>`).join('')}
      </select>
    </div>

    <div class="schedule-table-wrap">
      <table class="custom-table" id="students-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Candidate Name</th>
            <th>Country Hub</th>
            <th>Semester</th>
            <th>Attendance %</th>
            <th>Tuition</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody id="students-tbody">
          <!-- Populated by JS -->
        </tbody>
      </table>
    </div>
  `;
}

function setupStudentFilters() {
  renderStudentRows(APP_STATE.students);

  const searchInput = document.getElementById('student-search-input');
  const countrySelect = document.getElementById('student-country-filter');

  function filterData() {
    const query = (searchInput ? searchInput.value : '').toLowerCase();
    const selectedCountry = countrySelect ? countrySelect.value : 'ALL';

    const filtered = APP_STATE.students.filter(s => {
      const matchesSearch = s.name.toLowerCase().includes(query) || s.id.toLowerCase().includes(query);
      const matchesCountry = selectedCountry === 'ALL' || s.country === selectedCountry;
      return matchesSearch && matchesCountry;
    });

    renderStudentRows(filtered);
  }

  if (searchInput) searchInput.addEventListener('input', filterData);
  if (countrySelect) countrySelect.addEventListener('change', filterData);
}

function renderStudentRows(studentList) {
  const tbody = document.getElementById('students-tbody');
  if (!tbody) return;

  if (studentList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 2rem;">No matching European student records found.</td></tr>`;
    return;
  }

  tbody.innerHTML = studentList.map(s => `
    <tr>
      <td><strong style="color: var(--accent-gold);">${s.id}</strong></td>
      <td><strong>${s.name}</strong><br /><span style="color: var(--text-muted); font-size: 0.75rem;">${s.email}</span></td>
      <td>${s.country}</td>
      <td>Sem ${s.semester}</td>
      <td>
        <span style="color: ${s.attendance >= 80 ? 'var(--accent-emerald)' : 'var(--accent-rose)'}; font-weight: 700;">
          ${s.attendance}%
        </span>
      </td>
      <td>
        <span class="badge ${s.payment === 'Paid' ? 'badge-success' : 'badge-warning'}">${s.payment}</span>
      </td>
      <td>
        <span class="badge ${s.status === 'Active' ? 'badge-info' : 'badge-danger'}">${s.status}</span>
      </td>
    </tr>
  `).join('');
}

// Tab: Countries
function getPortalCountriesHTML() {
  return `
    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.5rem; font-weight: 700;">Country Hubs & National Oversight</h2>
      <p style="color: var(--text-secondary); font-size: 0.875rem;">Oversight of all 20 European nations, local hub coordinators, and regional statistics.</p>
    </div>

    <div class="schedule-table-wrap">
      <table class="custom-table">
        <thead>
          <tr>
            <th>Country</th>
            <th>Hub Seat</th>
            <th>National Coordinator</th>
            <th>Students</th>
            <th>Attendance Avg</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${APP_STATE.countries.map(c => `
            <tr>
              <td><strong>${c.name}</strong> <span class="badge badge-info" style="margin-left: 0.35rem;">${c.code}</span></td>
              <td>${c.city}</td>
              <td>${c.coordinator}</td>
              <td><strong>${c.students}</strong></td>
              <td><span style="color: var(--accent-emerald); font-weight: 600;">${c.attendance}%</span></td>
              <td><span class="badge ${c.code === 'IT' ? 'badge-warning' : 'badge-success'}">${c.status}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// Tab: LMS
function getPortalLMSHTML() {
  return `
    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.5rem; font-weight: 700;">LMS & Synchronous Class Portal</h2>
      <p style="color: var(--text-secondary); font-size: 0.875rem;">Weekly live sessions, multi-language audio interpretation links, and session recordings.</p>
    </div>

    <div class="grid-2" style="margin-bottom: 2rem;">
      <div class="feature-card">
        <span class="badge badge-warning" style="margin-bottom: 0.75rem;">Next Live Lecture</span>
        <h3 style="color: var(--accent-gold);">Biblical Hermeneutics & Exegesis</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">
          <strong>Date:</strong> Tuesday, 19:30 CET • <strong>Lecturer:</strong> Prof. Dr. Zion Raju
        </p>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="https://zoom.us" target="_blank" class="btn-primary" style="font-size: 0.85rem; padding: 0.5rem 1rem;">Enter Live Zoom Room</a>
          <button class="btn-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem;" onclick="alert('Audio Channels: 1-Original, 2-IT, 3-FR, 4-ES, 5-DE, 6-RO, 7-PT')">Interpretation Channels (7)</button>
        </div>
      </div>

      <div class="feature-card">
        <span class="badge badge-info" style="margin-bottom: 0.75rem;">Study Materials</span>
        <h3>Download Course Syllabi</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">
          Access official European PDFs with week-by-week reading assignments and lecture summaries.
        </p>
        <button class="btn-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem;" onclick="alert('Downloading ZRBC_European_Syllabus_2026.pdf')">Download Syllabi Pack (PDF)</button>
      </div>
    </div>
  `;
}

// Tab: Attendance
function getPortalAttendanceHTML() {
  return `
    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.5rem; font-weight: 700;">Attendance & Compliance Tracking</h2>
      <p style="color: var(--text-secondary); font-size: 0.875rem;">European graduation requires at least 80% verified attendance across guided lecture hours.</p>
    </div>

    <div class="schedule-table-wrap">
      <table class="custom-table">
        <thead>
          <tr>
            <th>Session Date</th>
            <th>Course Module</th>
            <th>Lecturer</th>
            <th>Attendees</th>
            <th>Overall Attendance %</th>
            <th>Log Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Feb 24, 2026</td>
            <td>Old Testament Exegetical Principles</td>
            <td>Prof. Dr. Zion Raju</td>
            <td>138 / 145</td>
            <td><strong style="color: var(--accent-emerald);">95.1%</strong></td>
            <td><span class="badge badge-success">Verified</span></td>
          </tr>
          <tr>
            <td>Feb 19, 2026</td>
            <td>Pneumatology: The Holy Spirit in Acts</td>
            <td>Dr. Timothy Keller</td>
            <td>132 / 145</td>
            <td><strong style="color: var(--accent-emerald);">91.0%</strong></td>
            <td><span class="badge badge-success">Verified</span></td>
          </tr>
          <tr>
            <td>Feb 17, 2026</td>
            <td>Hermeneutics: Typology in Pentateuch</td>
            <td>Prof. Dr. Zion Raju</td>
            <td>141 / 145</td>
            <td><strong style="color: var(--accent-emerald);">97.2%</strong></td>
            <td><span class="badge badge-success">Verified</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

// Tab: Translation
function getPortalTranslationHTML() {
  return `
    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.5rem; font-weight: 700;">European Translation Workflow</h2>
      <p style="color: var(--text-secondary); font-size: 0.875rem;">Translation pipeline for syllabi, live interpretation, and examination papers across 7 official European languages.</p>
    </div>

    <div class="grid-3">
      <div class="feature-card">
        <h3>Italian (Italiano)</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">Primary central governance language.</p>
        <span class="badge badge-success">100% Completed</span>
      </div>
      <div class="feature-card">
        <h3>French (Français)</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">Reviewed by Paris Academic Committee.</p>
        <span class="badge badge-success">98% Completed</span>
      </div>
      <div class="feature-card">
        <h3>German (Deutsch)</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">Frankfurt Hub theological review.</p>
        <span class="badge badge-warning">92% In Review</span>
      </div>
      <div class="feature-card">
        <h3>Spanish (Español)</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">Madrid Hub translation team.</p>
        <span class="badge badge-success">95% Completed</span>
      </div>
      <div class="feature-card">
        <h3>Romanian (Română)</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">Bucharest Hub theological coordination.</p>
        <span class="badge badge-success">94% Completed</span>
      </div>
      <div class="feature-card">
        <h3>Portuguese (Português)</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">Lisbon Hub pastoral verification.</p>
        <span class="badge badge-warning">88% In Review</span>
      </div>
    </div>
  `;
}

// Tab: Documents
function getPortalDocumentsHTML() {
  return `
    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.5rem; font-weight: 700;">Document Repository</h2>
      <p style="color: var(--text-secondary); font-size: 0.875rem;">Central European repository for official statutes, curricula, regulations, and forms.</p>
    </div>

    <div class="schedule-table-wrap">
      <table class="custom-table">
        <thead>
          <tr>
            <th>Document Title</th>
            <th>Category</th>
            <th>Language</th>
            <th>Version</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>ZRBC Europe Official Statute & Bylaws 2026</strong></td>
            <td>Governance</td>
            <td>Italian / English</td>
            <td>v2.4 (Official)</td>
            <td><button class="btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.75rem;" onclick="alert('Viewing Statute')">View</button></td>
          </tr>
          <tr>
            <td><strong>Academic Curriculum & Credit Framework (190h)</strong></td>
            <td>Academic</td>
            <td>All 7 Languages</td>
            <td>v1.8</td>
            <td><button class="btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.75rem;" onclick="alert('Viewing Curriculum')">View</button></td>
          </tr>
          <tr>
            <td><strong>Pastoral Recommendation Template Form</strong></td>
            <td>Admissions</td>
            <td>Multilingual</td>
            <td>v1.2</td>
            <td><button class="btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.75rem;" onclick="alert('Downloading Form')">Download</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

// Tab: Exams
function getPortalExamsHTML() {
  return `
    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.5rem; font-weight: 700;">Exams & Diplomas</h2>
      <p style="color: var(--text-secondary); font-size: 0.875rem;">Evaluation registries, oral exams schedules, and graduation diploma issuance.</p>
    </div>

    <div class="grid-2">
      <div class="feature-card">
        <h3>Diploma Issuance Protocols</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem;">
          Official graduation diplomas require three criteria:
        </p>
        <ul style="margin: 1rem 0 1rem 1.25rem; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.8;">
          <li>Minimum 80% recorded attendance across guided hours.</li>
          <li>Passing grade (≥ 70%) on all 4 semester examinations.</li>
          <li>Full tuition fee reconciliation with Rome Treasury.</li>
        </ul>
        <button class="btn-primary" style="font-size: 0.85rem; padding: 0.5rem 1rem;" onclick="alert('All 145 student records are currently on track.')">Generate Cohort Status Report</button>
      </div>

      <div class="feature-card">
        <h3>Upcoming Examination Schedule</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem;">
          <strong>Semester 1 Written Examination:</strong> June 18, 2026<br />
          <strong>Oral Exegetical Defense:</strong> June 25 - 28, 2026 (Live Zoom Board)
        </p>
      </div>
    </div>
  `;
}

// Tab: Finance
function getPortalFinanceHTML() {
  return `
    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.5rem; font-weight: 700;">Finance & Tuition Tracking</h2>
      <p style="color: var(--text-secondary); font-size: 0.875rem;">Central accounting administered under the Rome Central Treasury.</p>
    </div>

    <div class="grid-3" style="margin-bottom: 2rem;">
      <div class="stat-card">
        <div class="stat-value">€ 43,500</div>
        <div class="stat-label">Total European Tuition Target</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-emerald);">€ 38,280</div>
        <div class="stat-label">Collected & Reconciled (88%)</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: var(--accent-gold);">€ 5,220</div>
        <div class="stat-label">Outstanding Pending</div>
      </div>
    </div>
  `;
}

// Tab: Governance
function getPortalGovernanceHTML() {
  return `
    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.5rem; font-weight: 700;">European Governance & Council</h2>
      <p style="color: var(--text-secondary); font-size: 0.875rem;">Central European Direction, National Coordinator convocations, and council resolutions.</p>
    </div>

    <div class="feature-card" style="margin-bottom: 2rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
        <h3 style="color: var(--accent-gold);">Upcoming European Council Assembly</h3>
        <span class="badge badge-warning">March 15, 2026</span>
      </div>
      <p style="font-size: 0.85rem; color: var(--text-secondary);">
        All 20 European National Coordinators will convene with Prof. Dr. Zion Raju and the General Secretariat in Rome (hybrid format) to review Semester 1 progress and approve Semester 2 translations.
      </p>
    </div>
  `;
}

// Tab: Audit
function getPortalAuditHTML() {
  return `
    <div style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.5rem; font-weight: 700;">Audit & Security Logs</h2>
      <p style="color: var(--text-secondary); font-size: 0.875rem;">GDPR compliance audit logs, multi-factor authorization checkpoints, and administrative access records.</p>
    </div>

    <div class="schedule-table-wrap">
      <table class="custom-table">
        <thead>
          <tr>
            <th>Timestamp (CET)</th>
            <th>User / Actor</th>
            <th>Role & Scope</th>
            <th>Action Logged</th>
            <th>Compliance Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2026-09-04 14:22</td>
            <td>Prof. Dr. Zion Raju</td>
            <td>European Director</td>
            <td>Approved Semester 2 academic syllabus release</td>
            <td><span class="badge badge-success">GDPR Compliant</span></td>
          </tr>
          <tr>
            <td>2026-09-04 12:15</td>
            <td>Dr. Roberto Ferri</td>
            <td>General Secretariat</td>
            <td>Generated European Student ID: ZRBC-2026-IT-0013</td>
            <td><span class="badge badge-success">Verified</span></td>
          </tr>
          <tr>
            <td>2026-09-04 10:05</td>
            <td>Pastor Alain Mercier</td>
            <td>Coordinator (France)</td>
            <td>Submitted French cohort attendance verification</td>
            <td><span class="badge badge-success">Verified</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

// Form Handlers
function setupAdmissionsForm() {
  const form = document.getElementById('admissions-form');
  const alertEl = document.getElementById('admissions-alert');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('adm-name').value;
    const email = document.getElementById('adm-email').value;
    const country = document.getElementById('adm-country').value;
    const countryObj = APP_STATE.countries.find(c => c.name === country) || { code: 'EU' };
    
    // Generate official European Student ID: ZRBC-2026-[CODE]-[SEQ]
    const seq = String(APP_STATE.students.length + 1).padStart(4, '0');
    const newStudentId = `ZRBC-2026-${countryObj.code}-${seq}`;

    const newStudent = {
      id: newStudentId,
      name: name,
      country: country,
      semester: 1,
      email: email,
      attendance: 100,
      payment: 'Pending',
      status: 'Active'
    };

    APP_STATE.students.unshift(newStudent);

    if (alertEl) {
      alertEl.style.display = 'block';
      alertEl.innerHTML = `
        <h4 style="font-weight: 700; margin-bottom: 0.25rem;">🎉 Matriculation Application Submitted Successfully!</h4>
        <p style="font-size: 0.9rem; margin-bottom: 0.5rem;">
          Official European Student Registration ID: <strong style="color: var(--accent-gold); font-size: 1.1rem;">${newStudentId}</strong>
        </p>
        <p style="font-size: 0.8rem; color: var(--text-secondary);">
          A confirmation and login packet for the European LMS will be dispatched to <strong>${email}</strong>.
        </p>
      `;
      form.reset();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  const alertEl = document.getElementById('contact-alert');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (alertEl) {
      alertEl.style.display = 'block';
      alertEl.textContent = '✓ Thank you. Your message has been forwarded directly to the Rome Central Secretariat.';
      form.reset();
    }
  });
}

// Role Switcher Modal
function openRoleModal() {
  let modal = document.getElementById('role-switcher-modal');
  if (!modal) {
    createRoleModalDOM();
    modal = document.getElementById('role-switcher-modal');
  }
  if (modal) modal.classList.add('open');
}

function closeRoleModal() {
  const modal = document.getElementById('role-switcher-modal');
  if (modal) modal.classList.remove('open');
}

function createRoleModalDOM() {
  const div = document.createElement('div');
  div.id = 'role-switcher-modal';
  div.className = 'modal-overlay';
  div.innerHTML = `
    <div class="modal-box">
      <div class="modal-header">
        <h3 class="modal-title">Select Institutional Role & Scope</h3>
        <button class="modal-close-btn" onclick="closeRoleModal()">✕</button>
      </div>
      <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
        Switch perspective across the 10 European governance and academic roles to preview respective module access and permissions:
      </p>
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        ${APP_STATE.roles.map(r => `
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1rem; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); cursor: pointer; transition: var(--transition);" 
               onclick="selectRole('${r.id}')"
               onmouseover="this.style.borderColor='var(--accent-gold)'"
               onmouseout="this.style.borderColor='var(--border-subtle)'">
            <div>
              <strong style="color: var(--text-primary); font-size: 0.95rem;">${r.name}</strong><br />
              <span style="font-size: 0.775rem; color: var(--accent-gold); font-weight: 600;">${r.role}</span> • 
              <span style="font-size: 0.775rem; color: var(--text-secondary);">${r.department}</span>
            </div>
            <span class="badge badge-info">${r.scope}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  document.body.appendChild(div);
}

function selectRole(roleId) {
  const found = APP_STATE.roles.find(r => r.id === roleId);
  if (found) {
    APP_STATE.activeRole = found;
    updateUINavigation();
    if (APP_STATE.isPortal) {
      renderPortalBody();
    }
  }
  closeRoleModal();
}

// Add Student Modal
function openAddStudentModal() {
  let modal = document.getElementById('add-student-modal');
  if (!modal) {
    createAddStudentModalDOM();
    modal = document.getElementById('add-student-modal');
  }
  if (modal) modal.classList.add('open');
}

function closeAddStudentModal() {
  const modal = document.getElementById('add-student-modal');
  if (modal) modal.classList.remove('open');
}

function createAddStudentModalDOM() {
  const div = document.createElement('div');
  div.id = 'add-student-modal';
  div.className = 'modal-overlay';
  div.innerHTML = `
    <div class="modal-box">
      <div class="modal-header">
        <h3 class="modal-title">Register European Student</h3>
        <button class="modal-close-btn" onclick="closeAddStudentModal()">✕</button>
      </div>
      <form id="modal-student-form">
        <div class="form-group">
          <label class="form-label">Full Name *</label>
          <input type="text" id="m-student-name" class="form-input" required placeholder="Candidate legal name" />
        </div>
        <div class="form-group">
          <label class="form-label">Email *</label>
          <input type="email" id="m-student-email" class="form-input" required placeholder="candidate@email.com" />
        </div>
        <div class="form-group">
          <label class="form-label">Country Hub *</label>
          <select id="m-student-country" class="form-select" required>
            ${APP_STATE.countries.map(c => `<option value="${c.name}">${c.name} (${c.code})</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Starting Semester</label>
          <select id="m-student-sem" class="form-select">
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="3">Semester 3</option>
            <option value="4">Semester 4</option>
          </select>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 0.75rem; margin-top: 1.5rem;">
          <button type="button" class="btn-secondary" onclick="closeAddStudentModal()">Cancel</button>
          <button type="submit" class="btn-primary">Create Record</button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(div);

  document.getElementById('modal-student-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('m-student-name').value;
    const email = document.getElementById('m-student-email').value;
    const country = document.getElementById('m-student-country').value;
    const sem = parseInt(document.getElementById('m-student-sem').value, 10);
    const countryObj = APP_STATE.countries.find(c => c.name === country) || { code: 'EU' };
    const seq = String(APP_STATE.students.length + 1).padStart(4, '0');
    const newStudentId = `ZRBC-2026-${countryObj.code}-${seq}`;

    APP_STATE.students.unshift({
      id: newStudentId,
      name,
      country,
      semester: sem,
      email,
      attendance: 100,
      payment: 'Pending',
      status: 'Active'
    });

    closeAddStudentModal();
    if (APP_STATE.isPortal && APP_STATE.currentPortalTab === 'students') {
      renderPortalBody();
      setupStudentFilters();
    }
  });
}

// Initialization on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const portalToggleBtn = document.getElementById('portal-toggle-btn');
  if (portalToggleBtn) {
    portalToggleBtn.addEventListener('click', () => {
      if (APP_STATE.isPortal) {
        switchView('home');
      } else {
        openPortal('dashboard');
      }
    });
  }

  updateUINavigation();
  renderCurrentView();
});

// Expose global methods for inline HTML event handlers
window.switchView = switchView;
window.openPortal = openPortal;
window.switchPortalTab = switchPortalTab;
window.openRoleModal = openRoleModal;
window.closeRoleModal = closeRoleModal;
window.selectRole = selectRole;
window.openAddStudentModal = openAddStudentModal;
window.closeAddStudentModal = closeAddStudentModal;
