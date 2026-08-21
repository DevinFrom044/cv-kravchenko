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
  { id: 'keepclean', name: 'KeepClean', role: 'Product Management / Product Designer', href: 'https://apps.apple.com/us/app/keepclean-ai-storage-cleaner/id6752901737', contribution: ['Owned the improvement backlog and research-to-hypothesis pipeline, turning user feedback and competitor signals into product decisions.', 'Shipped Storage Analyzer, Email Cleaner and swipe-to-delete photo cleanup from a prioritised evidence-backed backlog.'], impact: ['44 reviews across 8 markets', '3 features shipped'], caseStudy: true },
  { id: 'translator-guru', name: 'Translator Guru', role: 'Product Designer', href: 'https://apps.apple.com/us/app/translator-guru-voice-text/id1458104794', contribution: ['Worked on the product UX, key user flows and conversion-focused experiences.', 'Collaborated with the team on monetization and the trial experience.'], impact: ['+25% Trial Conversion'] }
]

const portfolioAppOrder = ['keepclean', 'reroom', 'notee', 'artica', 'visify', 'assist', 'cleaner-guru', 'translator-guru']

const appCard = (app) => app.caseStudy ? `
  <div class="app-card">
    <button class="app-trigger app-case-trigger" type="button" data-app-id="${app.id}" aria-haspopup="dialog" aria-controls="keepclean-case-study" aria-label="Open ${app.name} case study"><img src="/apps/${app.id}.jpg" alt="${app.name} app icon" /></button>
  </div>` : `
  <div class="app-card">
    <button class="app-trigger app-case-trigger" type="button" data-app-id="${app.id}" aria-haspopup="dialog" aria-controls="app-case-study" aria-label="Open ${app.name} case study"><img src="/apps/${app.id}.jpg" alt="${app.name} app icon" /></button>
  </div>`

const keepCleanCaseStudy = `
  <div class="case-study-modal" id="keepclean-case-study" role="dialog" aria-modal="true" aria-labelledby="keepclean-title" aria-hidden="true">
    <button class="case-study-backdrop" type="button" aria-label="Close KeepClean case study"></button>
    <article class="case-study-sheet">
      <header class="case-study-header">
        <span>Case study / 01</span>
        <button class="case-study-close" type="button" aria-label="Close KeepClean case study">Close <b>×</b></button>
      </header>
      <div class="case-study-intro">
        <img src="/apps/keepclean.jpg" alt="KeepClean app icon" />
        <div>
          <p class="case-study-type">Utility app · Product management · Research</p>
          <h2 id="keepclean-title">KeepClean</h2>
          <div class="case-study-tags"><span>Utility apps</span><span>Product management</span><span>Research</span></div>
        </div>
        <a class="case-study-store" href="https://apps.apple.com/us/app/keepclean-ai-storage-cleaner/id6752901737" target="_blank" rel="noreferrer">View in App Store ${Icon({ name: 'external', size: 15 })}</a>
      </div>

      <section class="case-study-carousel" aria-label="KeepClean product screens">
        <div class="case-study-carousel-note">Product screens</div>
        <div class="case-study-slides">
          <figure><img src="/case-studies/keepclean-01.jpg" alt="KeepClean App Store product screen 1" /></figure>
          <figure><img src="/case-studies/keepclean-02.jpg" alt="KeepClean App Store product screen 2" /></figure>
          <figure><img src="/case-studies/keepclean-03.jpg" alt="KeepClean App Store product screen 3" /></figure>
        </div>
        <div class="case-study-carousel-controls" aria-label="Product screen carousel controls">
          <button class="case-study-carousel-button is-previous" type="button" aria-label="Show previous product screens">${Icon({ name: 'arrow', size: 22 })}</button>
          <button class="case-study-carousel-button" type="button" aria-label="Show next product screens">${Icon({ name: 'arrow', size: 22 })}</button>
        </div>
      </section>

      <div class="case-study-content">
        <section>
          <p class="case-study-label">About project</p>
          <p class="case-study-lead">KeepClean is a storage cleaner in the GuruApps portfolio operating in one of the most crowded and most complained-about App Store categories. For two months, the role extended beyond design into acting product management — owning the improvement backlog and hypothesis pipeline. The central question was not what to build next, but how to systematically extract that answer from negative reviews and competitors’ public performance.</p>
        </section>
        <section>
          <p class="case-study-label">My role &amp; activities</p>
          <ol class="case-study-activities">
            <li><b>Acting Product Management</b><span>Owned the improvement backlog, shaped and prioritised onboarding A/B hypotheses, and established a weekly competitive-intelligence cycle. It tracked category players’ revenue and download dynamics against product changes and delivered at least two evidence-backed hypotheses each week.</span></li>
            <li><b>Systematic Feedback Analysis</b><span>Analysed 44 one-to-three-star reviews across 8 markets over six months, grouped them into 8 root causes and qualified 82% as addressable through product changes. Identified the top complaint driver (36%) as the gap between expected “free” framing and the monetisation model, plus a core-flow misunderstanding around iOS Recently Deleted behaviour.</span></li>
            <li><b>Competitive Feature Audit</b><span>Audited 8 category competitors across 91 user reviews, building a feature-frequency matrix that surfaced concrete product gaps.</span></li>
            <li><b>Research to Shipped Product</b><span>Converted findings into a prioritised backlog and shipped three features: Storage Analyzer on the home screen, Email Cleaner, and swipe-to-delete photo cleanup.</span></li>
          </ol>
        </section>
        <section class="case-study-outcome">
          <p class="case-study-label">Outcome</p>
          <p>User complaints and competitor signals became a structured backlog — and the backlog became shipped features. A supporting team dashboard with product, rating and issue filters, quote search and rating distribution turned review analysis from ad-hoc exports into an ongoing process.</p>
        </section>
      </div>
    </article>
  </div>`

const appCaseMeta = {
  notee: {
    type: 'AI Products · 0→1', tags: ['AI Products', '0→1', 'iOS + watchOS'],
    about: 'Notee is an AI note-taking app built on generative models, turning voice into structured text across iPhone and Apple Watch. Built 0→1 by an R&D team inside the GuruApps / Universe Group portfolio, it entered a category where the real differentiation had to come from onboarding, first-session value and monetisation rather than the model itself. The core challenge was making voice-to-text value obvious within seconds in a product that starts empty.',
    activities: [
      ['Market Research & Product Definition', 'Mapped competitor business models, monetisation mechanics and acquisition strategies, translating them into MVP scope, a monetisation hypothesis and a technical-debt backlog for later iterations.'],
      ['First-Session Design & Empty State Strategy', 'Replaced the blank first screen with a ready-made demo document: an LLM-generated podcast conversation delivered as both audio and parsed transcript, letting users see voice-to-text working within seconds while discovering the product’s features.'],
      ['Research Programme & Monetisation Testing', 'Built the validation practice across moderated and unmoderated sessions, depth interviews, 5-second and first-click tests on Userlytics, and designed around 40 A/B tests across onboarding and paywall.'],
      ['Platform Expansion', 'Designed the watchOS recording flow with automatic backend sync, transcription and delivery into the main app.']
    ],
    outcome: 'The product reached payback within its first month: unit economics closed and the company moved it from validation into scaling. The demo-document approach became the activation pattern that solved the empty state, core-value demonstration and feature discovery in one artefact.'
  },
  reroom: {
    type: 'AI Products · Design Engineering', tags: ['AI Products', 'Design Engineering', '0→1'],
    about: 'ReRoom is an AI interior design generator that turns a room photo into styled redesigns. Built 0→1 and led for eight months, it relied on hundreds of generated style previews that had to be produced, versioned and shipped continuously. The challenge was designing a product whose logic is prompt architecture and building a production pipeline that could keep pace with it.',
    activities: [
      ['Market Research & Prompt Architecture', 'Analysed competitor business models, ad placements and creative strategy to map distribution, then authored the prompt library powering generation.'],
      ['Content Production Pipeline', 'Wrote a Cursor + Replicate API script that generated style imagery from prompts and delivered it through S3 into the build, replacing manual asset production with a reproducible design-to-infrastructure-to-engineering workflow.'],
      ['Analytics-Driven UX', 'Built Amplitude funnels across key flows, identified drop-off points in the long generation cycle, and translated them into prioritised design solutions.'],
      ['Validation & Feature Design', 'Ran task-based and unmoderated Userlytics sessions, interviews and Typeform surveys; designed Projects for user-generated content and Stories for fast style discovery.']
    ],
    outcome: 'The product shipped a full generation experience with a self-sustaining content pipeline that removed asset production as a bottleneck. Unit economics did not close amid CPM volatility, while the work surfaced seasonal demand as a structural category insight and informed the go/no-go decision.'
  },
  visify: {
    type: 'AI Products · Design Systems', tags: ['AI Products', 'Design Systems', 'Automation'],
    about: 'Visify is an AI photo generator producing stylised portraits from user photos. The work addressed a category-specific problem: users were asked to pay for a generation without knowing what they would receive. That uncertainty appeared in reviews and in the gap between users who opened the app and those who started generating.',
    activities: [
      ['Design System Refactor', 'Rebuilt the system on a colour-token architecture and split it into independent onboarding and core-app modules so high-density A/B testing could run on its own release cycle.'],
      ['Preview Automation & Build Optimisation', 'Built a pipeline that generated style previews from source photos in a few clicks, cutting per-style preparation time by about 20%, and moved preview content to S3 with engineering to reduce a build that had peaked around 400 MB.'],
      ['Expectation-Setting UX', 'Designed a pre-generation flow showing likely results before users committed, resolving the uncertainty surfaced in review analysis.'],
      ['Feature Ownership', 'Ran the full Magic Brush AI inpainting cycle from competitor research through first-iteration concept and subsequent improvements.']
    ],
    outcome: 'The pre-generation preview flow lifted generation starts by 25%. The engagement gain carried into monetisation through lower cancellation, longer retention, improved C1 and payment metrics, and a lower product CPA.'
  },
  assist: {
    type: 'AI Products · 0→1', tags: ['AI Products', '0→1', 'Rapid Launch'],
    about: 'Ask AI was the first AI product in the GuruApps portfolio: a personal assistant built on the OpenAI API and shipped by a newly formed three-person R&D team. With no established consumer-chat interaction patterns to copy, the product required original answers for conversational UX, generation states and expectations of AI output.',
    activities: [
      ['0→1 in 20 Days', 'Took the product from research and concept to App Store release in 20 days as sole designer, owning product research, UX architecture, onboarding, monetisation and the interface.'],
      ['Assistant Library Architecture', 'Designed a library of around 20 task-specific AI assistants: preconfigured personas mapped to distinct jobs-to-be-done, each with its own entry point and context.'],
      ['LLM Interaction Patterns', 'Designed generation states, model-error handling and expectation-setting patterns before conventions for consumer AI assistants were established.'],
      ['Post-Launch Monetisation', 'Ran a continuous onboarding A/B programme across quiz personalisation, progressive feature discovery and paywall structure, tracking trial conversion, C1, annual-plan share, cancellation and review sentiment.']
    ],
    outcome: 'The product secured the company’s entry into the AI assistant category and established its first internal AI design expertise. The patterns and learnings from this launch became a foundation for every AI product that followed in the portfolio.'
  },
  artica: {
    type: 'AI Products · 0→1', tags: ['AI Products', '0→1', 'ML Collaboration'],
    about: 'Artica was the company’s first product built on generative text-to-image models, shipped by a three-person R&D team in 2024. Product quality depended directly on what the model had been trained to produce, making design and model decisions inseparable in a rapidly changing category.',
    activities: [
      ['Market Research & 0→1 Delivery', 'Ran category analysis, competitor teardown and revenue benchmarking to define the MVP and monetisation hypothesis, then took the product to release in one month as sole designer.'],
      ['ML Collaboration', 'Partnered with ML engineers on generation quality, curating style-specific reference datasets of around 100 images per style and translating market-demand trends into model-training priorities.'],
      ['Retention & Monetisation Experimentation', 'Designed the waiting-state experience and the product’s first push mechanics; created more than 40 A/B tests across paywall and onboarding.'],
      ['Continuous Competitive Monitoring', 'Tracked category product and business metrics, onboarding, paywall and feature changes, turning them into a backlog targeting product and business metrics together.']
    ],
    outcome: 'Unit economics never closed, and after a sharp category-wide decline the team deliberately sunset the product and reallocated resources to higher-priority work. The case shows that knowing when a product should stop is as much a product skill as knowing how to launch one.'
  },
  'cleaner-guru': {
    type: 'Redesign · Design Systems', tags: ['Redesign', 'Design Systems', 'Utility Apps'],
    about: 'CleanerGuru is the flagship storage cleaner in the GuruApps / Universe Group portfolio and historically a top-1 utility in its App Store category. By 2022 it carried years of accumulated interface debt and category gaps. The task was a full redesign of a product already at meaningful scale, with the constraint that nothing could regress.',
    activities: [
      ['Full Product Redesign', 'Rebuilt every user flow and onboarding experience, clearing accumulated product and design debt and running a competitive audit to close functional gaps.'],
      ['Design System Refactor', 'Replaced scattered styles and ad-hoc patterns with a unified component library aligned with the codebase, improving handoff and reducing implementation inconsistencies.'],
      ['Engineering Partnership', 'Worked in tight collaboration with iOS engineers to ship a redesign of this scope on a compressed timeline.']
    ],
    outcome: 'The redesign shipped directly as the new baseline without A/B testing. It lifted core product and business metrics, improved retention, reduced cancellations and negative feedback, recovered the App Store rating from approximately 4.1 to 4.5, and became the design foundation for a major marketing scale-up peaking at around 10,000 trials per day.'
  },
  'translator-guru': {
    type: 'Motion Design · Conversion', tags: ['Motion Design', 'Conversion', 'Utility Apps'],
    about: 'TranslatorGuru was one of the top-performing apps in the GuruApps portfolio in 2021. Its onboarding relied entirely on static illustration, creating a ceiling on how well the product could communicate its value before asking users to pay.',
    activities: [
      ['Motion Pipeline Introduction', 'Set up the After Effects to Bodymovin to Lottie workflow and brought motion design into the product team’s process, replacing static onboarding illustration with animation.'],
      ['Animated Onboarding Design', 'Designed the animated onboarding flow as part of a product-wide A/B test, working with the product team on variant structure.']
    ],
    outcome: 'The variant won on its first iteration with a 17% conversion uplift and became the control champion; no subsequent onboarding has beaten it. The motion pipeline introduced here became reusable across the portfolio.'
  }
}

const appCaseStudy = `
  <div class="case-study-modal" id="app-case-study" role="dialog" aria-modal="true" aria-labelledby="app-case-title" aria-hidden="true">
    <button class="case-study-backdrop" type="button" aria-label="Close app case study"></button>
    <article class="case-study-sheet">
      <header class="case-study-header">
        <span>Case study</span>
        <button class="case-study-close" type="button" aria-label="Close app case study">Close <b>×</b></button>
      </header>
      <div class="app-case-content"></div>
    </article>
  </div>`

const renderAppCaseStudy = (app) => {
  const meta = appCaseMeta[app.id]
  const content = document.querySelector('#app-case-study .app-case-content')
  content.innerHTML = `
    <div class="case-study-intro">
      <img src="/apps/${app.id}.jpg" alt="${app.name} app icon" />
      <div>
        <p class="case-study-type">${meta.type}</p>
        <h2 id="app-case-title">${app.id === 'assist' ? 'Ask AI' : app.name}</h2>
        <div class="case-study-tags">${meta.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
      </div>
      <a class="case-study-store" href="${app.href}" target="_blank" rel="noreferrer">View in App Store ${Icon({ name: 'external', size: 15 })}</a>
    </div>
    <div class="case-study-content">
      <section>
        <p class="case-study-label">About project</p>
        <p class="case-study-lead">${meta.about}</p>
      </section>
      <section>
        <p class="case-study-label">My role &amp; activities</p>
        <ol class="case-study-activities">${meta.activities.map(([title, copy]) => `<li><b>${title}</b><span>${copy}</span></li>`).join('')}</ol>
      </section>
      <section class="case-study-outcome">
        <p class="case-study-label">Outcome</p>
        <div>
          <p class="case-study-outcome-copy">${meta.outcome}</p>
          <div class="case-study-impact-list">${app.impact.map((item) => `<span>${item}</span>`).join('')}</div>
        </div>
      </section>
    </div>`
}

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
        <p class="intro">Product designer working where product ownership, AI and engineering meet. I take products from first research to shipped, measured, and iterated — owning discovery, UX, monetisation experiments and the technical pipelines behind them. Looking for a role where design is a decision-making function, not a service one.</p>
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
    </section>

    <section id="portfolio" class="app-portfolio section-shell" aria-label="Universe Group app portfolio">
      <p class="section-kicker">Portfolio / iOS apps</p>
      <div class="app-portfolio-row">
        <h2>Products built and scaled<br/><em>across the ecosystem.</em></h2>
        <div class="app-icons">${portfolioAppOrder.map((id) => appCards.find((app) => app.id === id)).map(appCard).join('')}</div>
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
  ${keepCleanCaseStudy}
  ${appCaseStudy}
`

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add('is-visible')
}), { threshold: 0.12 })
document.querySelectorAll('.reveal, .section-kicker, .narrative h2, .experience-card, .focus-card, .impact-grid article, .tool-group, .contact h2, .contact-link').forEach((element) => {
  if (!element.classList.contains('reveal')) element.classList.add('scroll-appear')
  observer.observe(element)
})

document.querySelectorAll('.app-trigger:not(.app-case-trigger), .popover-close').forEach((button) => button.addEventListener('click', (event) => {
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

const keepCleanModal = document.querySelector('#keepclean-case-study')
const appCaseModal = document.querySelector('#app-case-study')
const setCaseStudyOpen = (modal, isOpen) => {
  modal.classList.toggle('is-open', isOpen)
  modal.setAttribute('aria-hidden', String(!isOpen))
  document.body.classList.toggle('case-study-open', isOpen)
  if (isOpen) modal.querySelector('.case-study-close').focus()
}
document.querySelectorAll('.app-case-trigger').forEach((trigger) => trigger.addEventListener('click', (event) => {
  event.stopPropagation()
  const app = appCards.find((item) => item.id === trigger.dataset.appId)
  if (app.id === 'keepclean') {
    setCaseStudyOpen(keepCleanModal, true)
  } else {
    renderAppCaseStudy(app)
    setCaseStudyOpen(appCaseModal, true)
  }
}))
;[keepCleanModal, appCaseModal].forEach((modal) => modal.querySelectorAll('.case-study-close, .case-study-backdrop').forEach((button) => button.addEventListener('click', () => setCaseStudyOpen(modal, false))))
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return
  ;[keepCleanModal, appCaseModal].filter((modal) => modal.classList.contains('is-open')).forEach((modal) => setCaseStudyOpen(modal, false))
})

const caseStudySlides = keepCleanModal.querySelector('.case-study-slides')
keepCleanModal.querySelectorAll('.case-study-carousel-button').forEach((button) => button.addEventListener('click', () => {
  const direction = button.classList.contains('is-previous') ? -1 : 1
  caseStudySlides.scrollBy({ left: direction * caseStudySlides.clientWidth * 0.8, behavior: 'smooth' })
}))

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
