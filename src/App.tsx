import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const skillGroups = [
  { number: '01', heading: 'Frontend', description: 'Interfaces that stay clear under complexity.', skills: ['React.js', 'Next.js', 'Angular.js', 'JavaScript', 'TypeScript', 'Redux Toolkit'] },
  { number: '02', heading: 'Backend', description: 'Reliable services, APIs, and async workflows.', skills: ['Python', 'C#', 'Java', '.NET', 'Spring Boot', 'NestJS', 'Express.js', 'FastAPI', 'Node.js', 'Django', 'Flask', 'Go', 'REST APIs', 'GraphQL', 'WebSockets'] },
  { number: '03', heading: 'Databases', description: 'Structured data built for real products.', skills: ['PostgreSQL', 'SQLite', 'MySQL', 'Cassandra', 'Neon', 'SQLAlchemy', 'Supabase', 'MongoDB'] },
  { number: '04', heading: 'Cybersecurity', description: 'Security from the first request to production.', skills: ['OWASP Top 10', 'Wazuh', 'Burp Suite', 'Nmap', 'Wireshark', 'Metasploit', 'JWT', 'OAuth 2.0', 'RBAC'] },
  { number: '05', heading: 'DevOps & Networking', description: 'The systems underneath everything.', skills: ['Linux', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Nginx', 'Apache', 'AWS', 'GCP', 'Azure'] },
]

const projects = [
  {
    number: '01',
    title: 'LeakShield',
    logo: '/leakshield%20logo.png',
    category: 'Cybersecurity SaaS',
    color: 'lavender',
    description: 'A multi-tenant cybersecurity platform for monitoring digital assets and investigating data leaks, with searchable dashboards, real-time updates, automated monitoring, and role-based access controls.',
    stack: 'FastAPI · PostgreSQL · Celery · React · Wazuh',
    github: 'https://github.com/Abdrahmane-Allouche-20/leakshield',
    website: 'https://leakshield-dz.vercel.app/',
  },
  {
    number: '02',
    title: 'AI Fraud Detector',
    logo: '/Minimal%20Teal%20AI%20Fraud%20Detection%20Logo.png',
    category: 'Machine learning / FastAPI',
    color: 'mint',
    description: 'A full-stack prototype for exploring fraud classification through uploaded PDF invoices, document extraction, and results from six classification models.',
    stack: 'React · Python · FastAPI · Machine learning',
    github: 'https://github.com/Abdrahmane-Allouche-20/aifrauddetection',
    website: 'https://aifrauddetection-zeta.vercel.app/',
  },
  {
    number: '03',
    title: 'ApexFund',
    logo: '/Apexfund.png',
    category: 'Crowdfunding platform',
    color: 'yellow',
    description: 'A crowdfunding platform connecting project creators with supporters through clear project presentation and intuitive discovery.',
    stack: 'React · Responsive UI · Full-stack development',
    github: 'https://github.com/Abdrahmane-Allouche-20/apexFund',
    website: 'https://apex-fund-eta.vercel.app/',
  },
  {
    number: '04',
    title: 'Nextrip',
    logo: '/nextrip.png',
    category: 'Travel platform',
    color: 'lavender',
    description: 'A responsive travel agency platform that presents destinations and travel offers through clear, engaging pages for planning a next journey.',
    stack: 'React · Responsive UI · Product design',
    github: 'https://github.com/Abdrahmane-Allouche-20/agencedevoyage',
    website: 'https://nextrip-xi.vercel.app/',
  },
  {
    number: '05',
    title: 'DevFolio',
    logo: '/devfolio%20logo.png',
    category: 'Portfolio builder',
    color: 'mint',
    description: 'A responsive portfolio builder for creating, customizing, and previewing personal websites through a smooth editing experience and reusable UI components.',
    stack: 'React · FastAPI · PostgreSQL · OAuth 2.0',
    github: 'https://github.com/Abdrahmane-Allouche-20/portfolio_builder_frontend',
    website: 'https://devfolio-phi-rose.vercel.app/',
  },
  {
    number: '06',
    title: 'Real-Time Chat App',
    logo: '/discussion-bulles.png',
    category: 'Messaging / WebSockets',
    color: 'yellow',
    description: 'A real-time chat app for signing in, starting conversations, and exchanging messages through a clean, responsive interface.',
    stack: 'React · TypeScript · FastAPI · WebSockets',
    github: 'https://github.com/Abdrahmane-Allouche-20/real_time_chat_frontend',
    website: 'https://pulsechattt.vercel.app/',
  },
]

function Sticker({ type, className = '' }: { type: 'check' | 'coin' | 'rocket' | 'wallet'; className?: string }) {
  const content = { check: '✓', coin: '✦', rocket: '↗', wallet: '▣' }[type]
  return <span className={`sticker sticker-${type} ${className}`} aria-hidden="true">{content}</span>
}

function App() {
  const root = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.hero-display span', { y: 70, opacity: 0, duration: .7, stagger: .1, ease: 'power3.out' })
      gsap.from('.hero-tagline, .hero-actions', { y: 18, opacity: 0, duration: .55, delay: .35, stagger: .1 })
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((item) => {
        gsap.from(item, {
          y: 25,
          opacity: 0,
          duration: .65,
          scrollTrigger: { trigger: item, start: 'top 88%' },
        })
      })
    })
    return () => mm.revert()
  }, { scope: root })

  const closeMenu = () => setMenuOpen(false)
  const copyContactNote = async () => {
    await navigator.clipboard?.writeText('abderrahmane@allouche.dev')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div ref={root} className="slush-page">
      <div className="marquee" aria-label="Portfolio announcement">
        <span className="marquee-boundary marquee-start" aria-hidden="true" />
        <span className="marquee-boundary marquee-end" aria-hidden="true" />
        <div className="marquee-window">
          <div className="marquee-track">
            <span className="marquee-content">FULL-STACK DEVELOPER <b>·</b> CYBERSECURITY ENGINEER <b>·</b> SOFTWARE ENGINEER <b>·</b></span>
            <span className="marquee-content" aria-hidden="true">FULL-STACK DEVELOPER <b>·</b> CYBERSECURITY ENGINEER <b>·</b> SOFTWARE ENGINEER <b>·</b></span>
          </div>
        </div>
      </div>
      <header className="site-header">
        <a className="logo-mark" href="#top" aria-label="Allouche home">
          <img src="/logo.png" alt="" />
        </a>
        <nav id="site-nav" className={menuOpen ? 'is-open' : ''} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="pill-button pill-filled header-action" href="/Mohamed_Allouche_Full_Stack_Developer_CV.pdf" target="_blank" rel="noreferrer">Download CV ↗</a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span aria-hidden="true">{menuOpen ? '×' : '+'}</span>
        </button>
      </header>

      <main id="top">
        <section className="band band-sky hero">
          <div className="hero-ribbon ribbon-one" aria-hidden="true" />
          <div className="hero-ribbon ribbon-two" aria-hidden="true" />
          <Sticker type="rocket" className="hero-sticker-one" />
          <Sticker type="coin" className="hero-sticker-two" />
          <div className="poster-container">
            <p className="small-label">MOHAMED ABDERRAHMANE ALLOUCHE / PORTFOLIO</p>
            <div className="hero-display" aria-label="Building useful secure software">
              <span>BUILDING</span>
              <span>SECURE,</span>
              <span>USEFUL SOFTWARE.</span>
            </div>
            <p className="hero-tagline">Software Engineer focused on full-stack development, application security, and secure systems.</p>
            <div className="hero-actions">
              <a className="pill-button pill-filled" href="#projects">View projects ↗</a>
              <a className="pill-button pill-ghost" href="/Mohamed_Allouche_Full_Stack_Developer_CV.pdf" target="_blank" rel="noreferrer">Download CV ↗</a>
            </div>
            <p className="location-label">KRAKÓW, POLAND <span>·</span> SOFTWARE / APPLICATION SECURITY</p>
          </div>
        </section>

        <section id="about" className="band band-white about">
          <div className="poster-container">
            <div className="section-topline reveal"><span>01</span><span>ABOUT / APPROACH</span></div>
            <div className="about-layout">
              <div className="display-wrap reveal">
                <Sticker type="check" className="about-check" />
                <h2 className="display-heading">CURIOUS<br />BY DESIGN.</h2>
              </div>
              <div className="about-copy reveal">
                <p className="large-copy">I’m a software engineer who builds full-stack products with security considered from the first endpoint to the final interface.</p>
                <p>My work combines React and TypeScript interfaces, Python and FastAPI services, relational data, and application security. I focus on secure REST APIs, authentication, vulnerability mitigation, and systems that remain understandable as they grow.</p>
                <a className="inline-link" href="#experience">More about my path <span>↗</span></a>
              </div>
            </div>
            <div className="skills-grid reveal">
              {skillGroups.map((group) => (
                <div className="skill-card" key={group.heading}>
                  <div className="skill-card-topline"><span>{group.number}</span><span className="skill-arrow">↗</span></div>
                  <h3>{group.heading}</h3>
                  <p>{group.description}</p>
                  <div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </div>
              ))}
            </div>
            <div className="credentials reveal">
              <div><h3>Languages</h3><p>Arabic (native) · English (C1) · French (B2) · Polish (A1) · German (A1)</p></div>
              <div><h3>Certifications &amp; training</h3><p>CCNA: Introduction to Networks · STEM &amp; Robotics Trainer · NVIDIA Deep Learning Institute · Frontend Developer · Python Programmer</p></div>
            </div>
          </div>
        </section>

        <section id="projects" className="band band-gray projects">
          <div className="poster-container">
            <div className="section-topline reveal"><span>02</span><span>SELECTED WORK / SECURITY PROJECTS</span></div>
            <div className="projects-heading reveal">
              <h2 className="display-heading">THINGS<br />I’VE BUILT.</h2>
              <Sticker type="wallet" className="projects-wallet" />
              <p>Systems, infrastructure, and hands-on technical work built through focused practice.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className={`project-card project-${project.color} reveal`} key={project.title}>
                  <div className="project-number">{project.number} / 06</div>
                  <div className="project-shape">
                    <img src={project.logo} alt={`${project.title} logo`} />
                  </div>
                  <div className="project-content">
                    <p className="small-label">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p className="project-stack">{project.stack}</p>
                    <div className="project-links">
                      <a className="inline-link" href={project.website} target="_blank" rel="noreferrer">Live site <span>↗</span></a>
                      <a className="inline-link" href={project.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="band band-mint experience">
          <div className="poster-container">
            <div className="section-topline reveal"><span>03</span><span>EXPERIENCE / EDUCATION</span></div>
            <div className="experience-layout">
              <h2 className="display-heading reveal">THE SHORT<br />VERSION.</h2>
              <div className="experience-list reveal">
                    <div className="experience-item"><time>Aug 2024 — Jan 2026</time><div><h3>Full-Stack Developer</h3><p>SocShield DZ · Hybrid, Algeria</p><span>Built React and TypeScript security dashboards, FastAPI services, PostgreSQL data layers, JWT authentication, and RBAC across four privilege tiers.</span></div></div>
                    <div className="experience-item"><time>Jul — Sep 2026</time><div><h3>Back-End AI Engineering Intern</h3><p>FlyRank Corp. (FlyRank AI) · Remote, USA</p><span>Engineered Python and FastAPI endpoints, asynchronous data pipelines, validation schemas, and secure model-integration workflows.</span></div></div>
                    <div className="experience-item"><time>Sep 2023 — Jun 2026</time><div><h3>B.Sc. in Computer Science</h3><p>Université Dr. Moulay Tahar Saïda · Algeria</p><span>Ranked 3rd in a cohort of 120+ graduates.</span></div></div>
                    <div className="experience-item"><time>Sep 2026 — Jul 2030</time><div><h3>B.Sc. in Cybersecurity</h3><p>WSB University · Kraków, Poland</p><span>Currently pursuing a degree focused on secure systems and application security.</span></div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="band band-lavender contact">
          <div className="contact-ribbon" aria-hidden="true" />
          <Sticker type="coin" className="contact-coin" />
          <div className="poster-container">
            <div className="section-topline reveal"><span>04</span><span>CONTACT / SAY HELLO</span></div>
            <div className="contact-layout">
              <h2 className="display-heading reveal">LET’S<br />MAKE<br />SOMETHING.</h2>
              <div className="contact-copy reveal">
                <p className="large-copy">Looking for a software engineer who thinks about product quality and security together? I’d be glad to hear from you.</p>
                <div className="contact-note"><div><a href="mailto:abderrahmane@allouche.dev">abderrahmane@allouche.dev</a><a href="tel:+48504916300">+48 504 916 300</a></div><button onClick={copyContactNote} type="button">{copied ? 'Copied' : 'Copy'} ↗</button></div>
                <a className="pill-button pill-filled" href="https://mail.google.com/mail/?view=cm&fs=1&to=abderrahmane%40allouche.dev" target="_blank" rel="noreferrer">Start a conversation ↗</a>
                <div className="social-links"><a href="https://github.com/Abdrahmane-Allouche-20/" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/abdrrahmaneeee/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.allouche.dev/" target="_blank" rel="noreferrer">Website ↗</a></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer"><span className="footer-logo">ALLOUCHE</span><span>SOFTWARE · APPLICATION SECURITY · SYSTEMS</span><a href="#top">BACK TO TOP ↑</a></footer>
    </div>
  )
}

export default App
