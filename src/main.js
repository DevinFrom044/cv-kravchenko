import './style.css'
import './experience-copy.css'

const Icon = ({ name, size = 18 }) => {
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    linkedin: '<path d="M6.5 8.5v9M6.5 5.5v.1M10.5 17.5v-5a3 3 0 0 1 6 0v5M10.5 10v7"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9M17 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5"/>',
    down: '<path d="m7 10 5 5 5-5"/>'
  }
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`
}

const detail = (title, body) => `
  <details class="work-detail">
    <summary>${title}${Icon({ name: 'down', size: 16 })}</summary>
    <div class="detail-body">${body}</div>
  </details>`

const appCards = [
  { id: 'reroom', name: 'ReRoom', role: 'Product Designer / R&D Designer', href: 'https://apps.apple.com/us/app/reroom-ai-interior-design/id6749894179', contribution: ['Led the full product-discovery cycle for an AI interior design product: market research, competitor analysis and UX research.', 'Optimized the core generation experience, redesigned key user flows and formed UX hypotheses from user pain points.'], impact: ['+20% Generation completion', '94% CSAT'] },
  { id: 'notee', name: 'Notee', role: 'Product Designer / R&D Designer', href: 'https://apps.apple.com/us/app/notee-ai-note-taker/id6745517667', contribution: ['Contributed to product discovery, market research and competitor analysis to define the core value proposition and positioning.', 'Supported monetization strategy, paywall experiments, pricing research and the watchOS expansion.'], impact: ['LTV ≈ $34', 'watchOS expansion'] },
  { id: 'artica', name: 'Artica', role: '0→1 Product Designer (R&D)', href: 'https://apps.apple.com/us/app/artica-ai-art-generator/id6480045582', contribution: ['Researched the market and competitive landscape, then shaped the product direction.', 'Created the MVP experience, led UX design and validation, and prepared the product for handoff to the Growth team.'], impact: ['0→1 product', 'MVP → Growth handoff'] },
  { id: 'visify', name: 'Visify', role: 'Product Designer', href: 'https://apps.apple.com/us/app/visify-ai-photo-generator/id6472172759', contribution: ['Analyzed the onboarding experience and first user interaction.', 'Designed a simplified introduction and activation flow, using behavioral insights to guide UX improvements.'], impact: ['≈ +15% generation start', 'C1: 22% → 27%'] },
  { id: 'assist', name: 'Ask Assist', role: '0→1 Product Designer (R&D)', href: 'https://apps.apple.com/us/app/ask-assist-ai-chat-bot/id6448989090', contribution: ['Contributed to the full product-building cycle: market research, competitor analysis, positioning and MVP definition.', 'Created the UX architecture, core user flows and design-system foundation, then prepared the launch.'], impact: ['Market opportunity → launch', '0→1 product'] },
  { id: 'cleaner-guru', name: 'Cleaner Guru', role: 'Product Designer', href: 'https://apps.apple.com/us/app/cleaner-guru-clean-up-storage/id1476380919', contribution: ['Ran multiple UX-research rounds and onboarding experiments; designed the flow that became the main one after a statistically significant conversion lift.', 'Explored monetization opportunities, introductory offers and new feature experiences; analyzed user feedback and App Store reviews.'], impact: ['+12% Trial Conversion', '≈ +20% ARPU', '−7% Cancellation rate', '4.3 → 4.5 US rating'] },
  { id: 'translator-guru', name: 'Translator Guru', role: 'Product Designer', href: 'https://apps.apple.com/us/app/translator-guru-voice-text/id1458104794', contribution: ['Worked on the product UX, key user flows and conversion-focused experiences.', 'Collaborated with the team on monetization and the trial experience.'], impact: ['+25% Trial Conversion'] }
]

const appCard = (app) => `
  <div class="app-card">
    <button class="app-trigger" type="button" aria-label="Show ${app.name} contribution"><img src="/apps/${app.id}.jpg" alt="${app.name} app icon" /></button>
    <article class="app-popover">
      <button class="popover-close" type="button" aria-label="Close ${app.name} details">×</button>
      <div class="popover-title"><img src="/apps/${app.id}.jpg" alt="" /><div><h3>${app.name}</h3><p>${app.role}</p></div></div>
      <p class="popover-label">My contribution</p>
      ${app.contribution.map((item) => `<p class="popover-copy">${item}</p>`).join('')}
      ${app.impact.length ? `<div class="popover-impact">${app.impact.map((item) => `<span>${item}</span>`).join('')}</div>` : ''}
      <a href="${app.href}" target="_blank" rel="noreferrer">View in App Store ${Icon({ name: 'external', size: 14 })}</a>
    </article>
  </div>`

const toolGroups = [
  { title: 'Design & Craft', tools: [['Figma', 'figma.com']] },
  { title: 'UI Animation', tools: [['LottieFiles', 'lottiefiles.com'], ['Jitter', 'jitter.video'], ['After Effects', 'adobe.com']] },
  { title: 'Core AI Tools', tools: [['Codex', 'openai.com'], ['Claude', 'anthropic.com'], ['NotebookLM', 'notebooklm.google'], ['Google Flow', 'labs.google'], ['Figma AI Agents', 'figma.com']] },
  { title: 'Research Intelligence', tools: [['Sensor Tower', 'sensortower.com'], ['AppMagic', 'appmagic.rocks']] },
  { title: 'Analytics', tools: [['Amplitude', 'amplitude.com']] },
  { title: 'Team Communication', tools: [['Google Workspace', 'google.com'], ['Notion', 'notion.so'], ['Slack', 'slack.com']] }
]

const toolGroup = (group, index) => `
  <article class="tool-group">
    <span class="tool-index">${String(index + 1).padStart(2, '0')}</span>
    <h3>${group.title}</h3>
    <div class="tool-list">
      ${group.tools.map(([name, domain]) => `<div class="tool-item"><img src="https://www.google.com/s2/favicons?domain=${domain}&sz=128" alt="${name} logo" /><span>${name}</span></div>`).join('')}
    </div>
  </article>`

document.querySelector('#app').innerHTML = `
  <div class="page-noise"></div>
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="Oleksii Kravchenko home">OK<span>·</span></a>
    <nav aria-label="Main navigation">
      <a href="#portfolio">Portfolio</a>
      <a href="#impact">Impact</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Tools</a>
    </nav>
    <div class="header-actions">
      <a class="header-cv" href="https://drive.google.com/file/d/1pnJzuAJipnlDWrsVZ46rAfKHNK3TMUTb/view?usp=sharing" target="_blank" rel="noreferrer">CV ${Icon({ name: 'external', size: 14 })}</a>
      <a class="header-link" href="https://t.me/ovfromkyiv" target="_blank" rel="noreferrer">Let's talk ${Icon({ name: 'arrow', size: 16 })}</a>
    </div>
  </header>

  <main id="top">
    <section class="hero section-shell" aria-labelledby="hero-title">
      <div class="hero-copy reveal">
        <p class="eyebrow"><span class="status-dot"></span> Available for thoughtful products</p>
        <h1 id="hero-title">Oleksii<br/>Kravchenko<span class="accent">.</span></h1>
        <p class="role">AI Product Designer <i>/</i> Design Engineer</p>
        <p class="intro">From discovering new opportunities and designing MVPs to building AI-powered workflows and scalable systems, I help teams transform ideas into validated products that create measurable impact.</p>
        <div class="hero-actions">
          <a class="text-link" href="https://www.linkedin.com/in/avfromkyiv/" target="_blank" rel="noreferrer">LinkedIn ${Icon({ name: 'external', size: 15 })}</a>
          <a class="text-link" href="https://apps.apple.com/us/developer/gm-universeapps-limited/id1473276099" target="_blank" rel="noreferrer">App Store Apps ${Icon({ name: 'external', size: 15 })}</a>
          <a class="text-link" href="https://github.com/DevinFrom044" target="_blank" rel="noreferrer">GitHub ${Icon({ name: 'external', size: 15 })}</a>
          <a class="text-link" href="https://www.instagram.com/ovfromkyiv" target="_blank" rel="noreferrer">Instagram ${Icon({ name: 'external', size: 15 })}</a>
        </div>
      </div>
      <div class="portrait-wrap reveal" data-parallax="0.13">
        <div class="portrait-meta top-note">Kyiv, Ukraine <span>↗</span></div>
        <div class="portrait-meta bottom-note">9 years in digital design</div>
        <div class="portrait-frame"><img src="/oleksii-kravchenko.webp" alt="Portrait of Oleksii Kravchenko" /></div>
        <div class="orange-orb"></div>
      </div>
      <a class="scroll-cue" href="#experience">Scroll to explore ${Icon({ name: 'down' })}</a>
    </section>

    <section id="portfolio" class="app-portfolio section-shell" aria-label="Universe Group app portfolio">
      <p class="section-kicker">Portfolio / iOS apps</p>
      <div class="app-portfolio-row">
        <h2>Products built and scaled<br/><em>across the ecosystem.</em></h2>
        <div class="app-icons">${appCards.map(appCard).join('')}</div>
      </div>
    </section>

    <section id="impact" class="section-shell narrative" aria-label="Impact">
      <p class="section-kicker">Impact</p>
      <h2>Design that gets<br/><em>all the way to production.</em></h2>
      <div class="narrative-grid">
        <article class="narrative-area">
          <span>01 / Discovery</span>
          <h3>Product direction</h3>
          <p>Market research, competitor and ASO analysis, creative research, and feature matrices that turn a broad opportunity into a focused product scope.</p>
        </article>
        <article class="narrative-area">
          <span>02 / Growth</span>
          <h3>Signals into gains</h3>
          <p>Monetization and retention optimisation, push-notification initiatives, product metrics research, and feedback analysis that turns user pain into meaningful improvements.</p>
        </article>
        <article class="narrative-area">
          <span>03 / Delivery</span>
          <h3>Systems that scale</h3>
          <p>Design engineering, scalable systems, and workflow automation that help teams move from validated decisions to production with less friction.</p>
        </article>
      </div>
      <div class="impact-inline" aria-label="Selected product impact">
        <div class="impact-grid">
          <article><span class="impact-index">01</span><h3>CleanerGuru</h3><p>iOS utility</p><strong>+12%</strong><span>trial conversion lift from tested hypotheses</span><strong>+20%</strong><span>overall ARPU uplift</span><small>US App Store rating 4.3 → 4.5</small></article>
          <article><span class="impact-index">02</span><h3>ReRoom</h3><p>AI interior design</p><strong>+20%</strong><span>end-to-end generation flow completion</span><strong>94%</strong><span>CSAT from research sessions with real users</span><small>Core AI generation workflow</small></article>
          <article><span class="impact-index">03</span><h3>Notee</h3><p>AI note-taking</p><strong>$34</strong><span>LTV within 2 months of launch</span><strong>⌁</strong><span>watchOS expansion</span><small>Discovery, positioning & monetization</small></article>
        </div>
      </div>
    </section>

    <section id="experience" class="section-shell experience" aria-labelledby="experience-title">
      <div class="section-heading">
        <p class="section-kicker">01 / Experience</p>
        <h2 id="experience-title">One team.<br/><em>A lot of ground covered.</em></h2>
      </div>
      <article class="experience-card reveal">
        <div class="card-topline"><span>Universe Group / GuruApps</span><span>Kyiv · 2021 — 2026</span></div>
        <div class="role-line"><h3>Design Tech Lead /<br/>Senior Product Designer</h3><span class="role-badge">8-product ecosystem</span></div>
        <p class="lead">Technical design leader responsible for product design quality, scalable systems and the collaboration layer between Design, Engineering, Analytics and Marketing.</p>
        <div class="experience-focus-grid">
          <article class="focus-card focus-card-dark"><span>01</span><h4>0→1 Product<br/>Development · R&amp;D</h4><p>Embedded in a cross-functional R&amp;D team, taking opportunities from market research and competitor analysis through MVP, launch, experiments and iteration.</p><b>4 products to the App Store</b></article>
          <article class="focus-card"><span>02</span><h4>AI Product<br/>Development</h4><p>Built internal products and AI-powered workflows adopted across teams — spanning discovery, research synthesis, design operations and prototyping.</p><b>Claude · OpenAI API · Codex</b></article>
          <article class="focus-card"><span>03</span><h4>Design Systems &<br/>Engineering</h4><p>Created scalable component systems, tokens and Variables migration. Improved design-to-development handoff through standards and automation.</p><b>~35% faster handoff</b></article>
          <article class="focus-card focus-card-orange"><span>04</span><h4>Research &<br/>Validation</h4><p>Established research workflows across the portfolio — interviews, usability testing, 5-second tests, validation and App Store feedback analysis.</p><b>150+ studies</b></article>
        </div>
      </article>
    </section>

    <section id="projects" class="projects" aria-labelledby="projects-title">
      <div class="section-shell project-heading">
        <p class="section-kicker">02 / Internal products built</p>
        <h2 id="projects-title">Tools for the team,<br/><em>not just the user.</em></h2>
      </div>
      <div class="project-list section-shell">
        <article class="project-card feedstore reveal" data-parallax="0.05">
          <div class="project-number">01</div>
          <div class="project-copy"><p class="project-type">AI-powered App Store intelligence platform</p><h3>FeedStore</h3><p>Portfolio-level feedback analysis with AI-generated review summaries. Designed and built end-to-end; now used by Product and Marketing teams.</p><div class="chips"><span>Supabase</span><span>OpenAI API</span><span>Vercel</span></div></div>
        </article>
        <article class="project-card varix reveal" data-parallax="0.03">
          <div class="project-number">02</div>
          <div class="project-copy"><p class="project-type">Design-to-code automation workflow</p><h3>Varix</h3><p>A Figma plugin and process connecting Variables to iOS development — removing manual token handoff and the drift that follows.</p><div class="chips"><span>Figma plugin</span><span>Design tokens</span><span>iOS</span></div></div>
        </article>
      </div>
    </section>

    <section id="skills" class="skills section-shell" aria-labelledby="skills-title">
      <div><p class="section-kicker">04 / Tools I use</p><h2 id="skills-title">The stack<br/>behind the work<span class="accent">.</span></h2></div>
      <div class="tool-groups">${toolGroups.map(toolGroup).join('')}</div>
    </section>

    <section class="contact section-shell">
      <p class="section-kicker">Our Next Chapter</p>
      <div class="contact-actions">
        <a class="contact-link" href="https://t.me/ovfromkyiv" target="_blank" rel="noreferrer">Let’s talk ${Icon({ name: 'arrow', size: 26 })}</a>
        <a class="cv-link" href="https://drive.google.com/file/d/1pnJzuAJipnlDWrsVZ46rAfKHNK3TMUTb/view?usp=sharing" target="_blank" rel="noreferrer">CV ${Icon({ name: 'external', size: 22 })}</a>
      </div>
      <div class="contact-meta"><a href="tel:+380663600181">+380 66 360 01 81</a><a href="https://www.linkedin.com/in/avfromkyiv/" target="_blank" rel="noreferrer">linkedin.com/in/avfromkyiv ${Icon({ name: 'external', size: 14 })}</a><a href="https://apps.apple.com/us/developer/gm-universeapps-limited/id1473276099" target="_blank" rel="noreferrer">App Store portfolio ${Icon({ name: 'external', size: 14 })}</a><a href="https://github.com/DevinFrom044" target="_blank" rel="noreferrer">github.com/DevinFrom044 ${Icon({ name: 'external', size: 14 })}</a></div>
    </section>
  </main>
  <footer><span>© ${new Date().getFullYear()} Oleksii Kravchenko</span><span>Built with care in Kyiv</span></footer>
`

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add('is-visible')
}), { threshold: 0.12 })
document.querySelectorAll('.reveal, .section-kicker, .narrative h2, .experience-card, .focus-card, .impact-grid article, .tool-group, .contact h2, .contact-link').forEach((element) => {
  if (!element.classList.contains('reveal')) element.classList.add('scroll-appear')
  observer.observe(element)
})

document.querySelectorAll('.app-trigger, .popover-close').forEach((button) => button.addEventListener('click', (event) => {
  event.stopPropagation()
  const card = button.closest('.app-card')
  const willOpen = !card.classList.contains('is-open')
  document.querySelectorAll('.app-card.is-open').forEach((openCard) => {
    if (openCard !== card) openCard.classList.remove('is-open')
  })
  card.classList.toggle('is-open', willOpen)
  if (!willOpen) button.blur()
}))

document.addEventListener('click', () => document.querySelectorAll('.app-card.is-open').forEach((card) => card.classList.remove('is-open')))

document.querySelectorAll('.app-card, .focus-card, .impact-grid article').forEach((item, index) => {
  item.dataset.parallax = String([0.045, -0.035, 0.055, -0.04][index % 4])
})
const parallaxItems = document.querySelectorAll('[data-parallax]')
let ticking = false
const updateParallax = () => {
  const viewportCenter = window.innerHeight / 2
  parallaxItems.forEach((item) => {
    const offset = (item.getBoundingClientRect().top - viewportCenter) * Number(item.dataset.parallax)
    item.style.setProperty('--parallax-y', `${Math.max(-42, Math.min(42, offset))}px`)
  })
  ticking = false
}
window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(updateParallax); ticking = true } }, { passive: true })
updateParallax()
