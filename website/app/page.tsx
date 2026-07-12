const researchThemes = [
  {
    number: "01",
    title: "XR Reliability",
    description:
      "Automated scene exploration, interaction testing, performance analysis, and reproducible evaluation for VR, AR, and MR applications.",
    methods: ["Automated XR testing", "Performance analysis", "Reproducible evaluation"],
  },
  {
    number: "02",
    title: "XR Software Engineering",
    description:
      "Program analysis, LLM-assisted testing and repair, and developer tools for building and maintaining complex immersive software.",
    methods: ["Program analysis", "LLM-assisted repair", "Developer tools"],
  },
  {
    number: "03",
    title: "XR Security",
    description:
      "Security testing, privacy-risk analysis, side-channel studies, and ecosystem-scale measurement of XR applications and platforms.",
    methods: ["Security testing", "Privacy analysis", "Side channels"],
  },
  {
    number: "04",
    title: "Embodied AI",
    description:
      "Future-direction research on how embodied agents perceive, reason, and act in interactive 3D environments with robust, safe, and dependable behavior.",
    methods: ["Future direction", "Evaluation", "Robustness"],
    emerging: true,
  },
];

const featuredProjects = [
  {
    kicker: "ASE 2025",
    title: "VRExplorer",
    subtitle: "Model-based VR Testing",
    description:
      "A model-based approach for semi-automated exploration and testing of virtual reality scenes.",
    tags: ["XR Reliability", "Unity", "Automated Testing"],
    links: [
      {
        label: "Paper",
        href: "https://doi.org/10.1109/ASE63991.2025.00047",
      },
      {
        label: "Code",
        href: "https://github.com/HenryLab-XR/VRExplorer",
      },
    ],
  },
  {
    kicker: "ICSE 2026",
    title: "XRFix",
    subtitle: "LLM-assisted Performance Bug Repair",
    description:
      "A study and repair workflow for performance bugs in XR applications using large language models.",
    tags: ["XR Software Engineering", "Performance", "LLMs"],
    links: [
      {
        label: "Paper",
        href: "https://conf.researchr.org/details/icse-2026/icse-2026-research-track/78/XRFix-Exploring-Performance-Bug-Repair-of-Extended-Reality-Applications-with-Large-L",
      },
      { label: "Artifact", href: "https://github.com/wwwjwww/XRFix" },
    ],
  },
  {
    kicker: "ICSE 2024 · TSE 2025",
    title: "Meta-detector",
    subtitle: "Security & Privacy Analysis",
    description:
      "Empirical analysis and detection tools for security and privacy risks in the Meta/Oculus VR ecosystem.",
    tags: ["XR Security", "Privacy", "Empirical Study"],
    links: [
      {
        label: "ICSE paper",
        href: "https://doi.org/10.1145/3597503.3639082",
      },
      {
        label: "TSE paper",
        href: "https://doi.org/10.1109/TSE.2025.3553283",
      },
      {
        label: "Code",
        href: "https://github.com/Henrykwokkk/Meta-detector",
      },
    ],
  },
  {
    kicker: "RESEARCH PROTOTYPE",
    title: "VRAgent",
    subtitle: "Automated VR Testing Prototype",
    description:
      "An open-source research prototype combining Unity scene and dependency analysis, LLM-generated test plans, and automated execution for VR applications.",
    tags: ["VR Testing", "LLM Agents", "Dependency Analysis"],
    links: [
      {
        label: "Code",
        href: "https://github.com/HenryLab-XR/VRAgent",
      },
    ],
  },
];

const publications = [
  {
    year: "2026",
    venue: "ICSE",
    title:
      "XRFix: Exploring Performance Bug Repair of Extended Reality Applications with Large Language Models",
    authors: "Jingwen Wu, Hanyang Guo, Hong-Ning Dai, and Xiapu Luo",
    href: "https://conf.researchr.org/details/icse-2026/icse-2026-research-track/78/XRFix-Exploring-Performance-Bug-Repair-of-Extended-Reality-Applications-with-Large-L",
  },
  {
    year: "2025",
    venue: "ASE",
    title:
      "VRExplorer: A Model-based Approach for Semi-Automated Testing of Virtual Reality Scenes",
    authors:
      "Zhengyang Zhu, Hong-Ning Dai, Hanyang Guo, Zeqin Liao, and Zibin Zheng",
    href: "https://doi.org/10.1109/ASE63991.2025.00047",
  },
  {
    year: "2025",
    venue: "TSE",
    title:
      "An Empirical Study on Meta Virtual Reality Applications: Security and Privacy Perspectives",
    authors:
      "Hanyang Guo, Hong-Ning Dai, Xiapu Luo, Gengyang Xu, Fengliang He, and Zibin Zheng",
    href: "https://doi.org/10.1109/TSE.2025.3553283",
  },
  {
    year: "2025",
    venue: "ESORICS",
    title:
      "AcouListener: An Inaudible Acoustic Side-Channel Attack on AR/VR Systems",
    authors:
      "Fengliang He, Hong-Ning Dai, Hanyang Guo, Xiapu Luo, and Jiadi Yu",
    href: "https://doi.org/10.1007/978-3-032-07894-0_9",
  },
  {
    year: "2024",
    venue: "ICSE",
    title:
      "An Empirical Study on Oculus Virtual Reality Applications: Security and Privacy Perspectives",
    authors:
      "Hanyang Guo, Hong-Ning Dai, Xiapu Luo, Zibin Zheng, Gengyang Xu, and Fengliang He",
    href: "https://doi.org/10.1145/3597503.3639082",
  },
];

const members = [
  {
    initials: "HG",
    name: "Hanyang Guo",
    role: "Researcher at Ant Group · PhD, Sun Yat-sen University",
    interests: "AI for software engineering, software reliability, and XR systems.",
    href: "https://henrykwokkk.github.io/",
  },
  {
    initials: "FH",
    name: "Fengliang He",
    role: "PhD Student · Hong Kong Baptist University",
    interests: "AR/VR systems, XR security, and sensing-driven immersive applications.",
    href: "https://fengliang2023.github.io/",
  },
  {
    initials: "JW",
    name: "Jingwen Wu",
    role: "PhD Student · Hong Kong Baptist University",
    interests: "AI for software engineering, XR reliability, and AI security.",
    href: "https://wwwjwww.github.io/",
  },
  {
    initials: "ZZ",
    name: "Zhengyang Zhu",
    role: "PhD Student, SYSU · Visiting Student, HKBU",
    interests:
      "XR software testing, software reliability, LLMs for software engineering, and embodied AI.",
    href: "https://tsingpig.github.io/",
  },
];

const externalProps = {
  target: "_blank",
  rel: "noreferrer",
} as const;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#top" aria-label="HenryLab-XR home">
            <span className="wordmark-mark" aria-hidden="true">
              HX
            </span>
            <span>HenryLab-XR</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#research">Research</a>
            <a href="#projects">Featured Work</a>
            <a href="#publications">Publications</a>
            <a href="#people">People</a>
          </nav>

          <a className="button button-small header-cta" href="#join">
            Join Us
          </a>

          <details className="mobile-menu">
            <summary>Menu</summary>
            <nav aria-label="Mobile navigation">
              <a href="#research">Research</a>
              <a href="#projects">Featured Work</a>
              <a href="#publications">Publications</a>
              <a href="#people">People</a>
              <a href="#join">Join Us</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-grid shell">
            <div className="hero-copy">
              <p className="eyebrow">XR RELIABILITY · XR SOFTWARE ENGINEERING · XR SECURITY</p>
              <h1>XR Reliability, Security, and Embodied AI.</h1>
              <p className="hero-lead">
                HenryLab-XR is a research group focused on eXtended Reality systems,
                covering Virtual Reality, Augmented Reality, and Mixed Reality.
                We develop methods, tools, and open artifacts for dependable
                immersive software.
              </p>
              <p className="affiliation-line">
                Our current directions are XR Reliability, XR Software Engineering,
                and XR Security; our future direction is Embodied AI.
              </p>
              <div className="hero-actions">
                <a className="button" href="#research">
                  Explore Research Themes
                </a>
                <a className="text-link" href="#join">
                  View Open Positions <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="venue-strip" aria-label="Selected publication venues">
                <span>Selected work at</span>
                <strong>ICSE</strong>
                <strong>ASE</strong>
                <strong>TSE</strong>
                <strong>ESORICS</strong>
              </div>
            </div>

            <div className="hero-visual" aria-label="HenryLab-XR research themes">
              <div className="visual-grid" aria-hidden="true" />
              <span className="visual-star star-one" aria-hidden="true">✦</span>
              <span className="visual-star star-two" aria-hidden="true">✦</span>
              <div className="orbit orbit-outer" aria-hidden="true" />
              <div className="orbit orbit-inner" aria-hidden="true" />
              <div className="xr-core" aria-hidden="true">
                <span>XR</span>
                <small>DEPENDABLE SYSTEMS</small>
              </div>
              <span className="orbit-label label-reliability">Reliability</span>
              <span className="orbit-label label-software">Software Engineering</span>
              <span className="orbit-label label-security">Security</span>
              <span className="orbit-label label-embodied">Embodied AI</span>
              <div className="visual-caption">
                <span aria-hidden="true">●</span>
                Dependable immersive software across VR, AR, and MR.
              </div>
            </div>
          </div>
        </section>

        <section className="section research-section" id="research">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">RESEARCH THEMES</p>
                <h2>Three core XR directions and one future direction.</h2>
              </div>
              <p>
                Our work draws on model-based testing, program analysis,
                empirical studies, and large language models across these themes.
              </p>
            </div>

            <div className="research-grid">
              {researchThemes.map((theme) => (
                <article className="research-card" key={theme.title}>
                  <div className="card-topline">
                    <span className="card-number">{theme.number}</span>
                    {theme.emerging ? (
                      <span className="status-pill">Future Direction</span>
                    ) : null}
                  </div>
                  <h3>{theme.title}</h3>
                  <p>{theme.description}</p>
                  <ul className="tag-list" aria-label={`${theme.title} methods`}>
                    {theme.methods.map((method) => (
                      <li key={method}>{method}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">FEATURED WORK</p>
              <h2>Research translated into tools and evidence.</h2>
              <p>
                Our projects connect peer-reviewed research with open code,
                artifacts, and reproducible workflows.
              </p>
            </div>

            <div className="projects-grid">
              {featuredProjects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-kicker">{project.kicker}</div>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p>{project.description}</p>
                  <ul className="tag-list" aria-label={`${project.title} topics`}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a key={link.href} href={link.href} {...externalProps}>
                        {link.label} <span aria-hidden="true">→</span>
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section publications-section" id="publications">
          <div className="shell publications-layout">
            <div className="section-heading publications-intro">
              <p className="eyebrow">SELECTED PUBLICATIONS</p>
              <h2>Recent work across XR reliability, software engineering, and security.</h2>
              <p>
                A concise selection of the group&apos;s work on XR testing,
                repair, reliability, security, and privacy.
              </p>
              <a
                className="text-link"
                href="https://scholar.google.com/citations?user=20aqGSoAAAAJ&hl=en"
                {...externalProps}
              >
                View Google Scholar <span aria-hidden="true">→</span>
              </a>
            </div>

            <ol className="publication-list">
              {publications.map((publication) => (
                <li key={publication.title}>
                  <div className="publication-meta">
                    <span>{publication.year}</span>
                    <strong>{publication.venue}</strong>
                  </div>
                  <div>
                    <h3>
                      <a href={publication.href} {...externalProps}>
                        {publication.title}
                      </a>
                    </h3>
                    <p>{publication.authors}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section people-section" id="people">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">PEOPLE</p>
                <h2>A cross-institution research team.</h2>
              </div>
              <p>
                Our group brings together researchers affiliated with Hong Kong
                Baptist University, Sun Yat-sen University, and industry research teams.
              </p>
            </div>

            <article className="faculty-card">
              <div className="faculty-profile">
                <div className="avatar avatar-large" aria-hidden="true">
                  HD
                </div>
                <div>
                  <p className="role-label">FACULTY LEAD</p>
                  <h3>Hong-Ning Dai</h3>
                  <p className="faculty-role">
                    Associate Professor · Department of Computer Science · Hong Kong Baptist University
                  </p>
                  <p>
                    His XR-related research spans immersive systems, software
                    reliability, security and privacy, and intelligent software systems.
                  </p>
                  <div className="faculty-links">
                    <a
                      href="https://www.comp.hkbu.edu.hk/v1/?id=henrydai&page=profile"
                      {...externalProps}
                    >
                      Faculty Page <span aria-hidden="true">→</span>
                    </a>
                    <a
                      href="https://scholar.google.com/citations?user=20aqGSoAAAAJ&hl=en"
                      {...externalProps}
                    >
                      Google Scholar <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="metrics" aria-label="Google Scholar metrics for Hong-Ning Dai">
                <div>
                  <strong>30,667</strong>
                  <span>Citations</span>
                </div>
                <div>
                  <strong>59</strong>
                  <span>h-index</span>
                </div>
                <div>
                  <strong>173</strong>
                  <span>i10-index</span>
                </div>
                <p>Google Scholar · accessed 11 July 2026</p>
              </div>
            </article>

            <div className="members-heading">
              <h3>Current Members</h3>
            </div>
            <div className="members-grid">
              {members.map((member) => (
                <article className="member-card" key={member.name}>
                  <div className="avatar" aria-hidden="true">
                    {member.initials}
                  </div>
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p>{member.interests}</p>
                  <a href={member.href} {...externalProps}>
                    Homepage <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section join-section" id="join">
          <div className="shell join-card">
            <div>
              <p className="eyebrow">JOIN US</p>
              <h2>Build dependable and intelligent immersive systems with us.</h2>
              <p>
                We are recruiting PhD students, Research Assistants, and Visiting
                Students interested in XR software engineering, reliability and
                testing, security and privacy, AI for software engineering, and
                emerging embodied AI.
              </p>
              <div className="opportunity-list" aria-label="Open opportunities">
                <span>PhD Students</span>
                <span>Research Assistants</span>
                <span>Visiting Students</span>
              </div>
            </div>

            <div className="application-panel">
              <h3>What to send</h3>
              <ul>
                <li>Your CV</li>
                <li>A brief introduction to your research interests</li>
                <li>Academic transcripts</li>
                <li>Links to representative papers, projects, or code</li>
                <li>The position you are interested in and your preferred start date</li>
              </ul>
              <a
                className="button button-light"
                href="mailto:zhuzhy57@mail2.sysu.edu.cn?subject=Prospective%20PhD%20%2F%20RA%20%2F%20Visiting%20Student%20-%20%5BName%5D"
              >
                Email Your Application
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div>
            <a className="wordmark footer-wordmark" href="#top">
              <span className="wordmark-mark" aria-hidden="true">
                HX
              </span>
              <span>HenryLab-XR</span>
            </a>
            <p>XR Reliability, Security, and Embodied AI.</p>
          </div>
          <div>
            <h2>Affiliations</h2>
            <a href="https://www.comp.hkbu.edu.hk/" {...externalProps}>
              Hong Kong Baptist University <span aria-hidden="true">→</span>
            </a>
            <a href="https://www.sysu.edu.cn/sysuen/" {...externalProps}>
              Sun Yat-sen University <span aria-hidden="true">→</span>
            </a>
          </div>
          <div>
            <h2>Contact</h2>
            <a href="https://github.com/HenryLab-XR" {...externalProps}>
              HenryLab-XR on GitHub <span aria-hidden="true">→</span>
            </a>
            <a href="mailto:zhuzhy57@mail2.sysu.edu.cn">
              zhuzhy57@mail2.sysu.edu.cn
            </a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 HenryLab-XR</span>
          <span>Last updated: July 2026</span>
        </div>
      </footer>
    </>
  );
}
