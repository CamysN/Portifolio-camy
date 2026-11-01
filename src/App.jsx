import { useState } from 'react'
import './App.css'
import projectImage from './assets/figma/project-arte-de-rua.png'
import projectImageAlt from './assets/figma/project-arte-de-rua-alt.png'
import experienceMark from './assets/figma/experience-mark.svg'
import educationRibbon from './assets/figma/education-ribbon.svg'
import educationOutline from './assets/figma/education-outline.svg'
import logoFooter from './assets/figma/logo-footer.svg'
import aboutDecorationAsset from './assets/figma/logo-about.svg'
import contactIcon from './assets/figma/contact-icon.svg'
import linkedinLogo from './assets/figma/logo-linkedin.svg'
import dribbbleLogo from './assets/figma/logo-dribbble.svg'
import githubLogo from './assets/figma/logo-Github.svg'
import skillFigma from './assets/logos-skills/skill-figma.svg'
import skillIllustrator from './assets/logos-skills/skill-illustrator.svg'
/* import skillPhotoshop from './assets/logos-skills/skill-photoshop.svg' */
import skillLightroom from './assets/logos-skills/skill-lightroom.svg'
import skillHtml from './assets/logos-skills/skill-html.svg'
import skillCss from './assets/logos-skills/skill-css.svg'
import skillJavascript from './assets/logos-skills/skill-javascript.svg'
import skillReact from './assets/logos-skills/skill-react.svg'
import skillTailwind from './assets/logos-skills/skill-tailwind.png'
import skillGsap from './assets/logos-skills/skill-gsap.png'
import skillReactBits from './assets/logos-skills/skill-react-bits.svg'
import skillGithub from './assets/logos-skills/skill-github.svg'
import skillGitlab from './assets/logos-skills/skill-gitlab.png'
import skillTrello from './assets/logos-skills/skill-trello.svg'
import skillWordpress from './assets/logos-skills/skill-wordpress.svg'
import skillNextcloud from './assets/logos-skills/skill-nextcloud.svg'
import openProjectAsset from './assets/logos-skills/skill-openproject.png'
import skillChatgpt from './assets/logos-skills/skill-chat.svg'
import skillClaude from './assets/logos-skills/skill-claude.svg'
import skillCopilot from './assets/logos-skills/skill-copilot.svg'
import skillGemini from './assets/logos-skills/skill-gemini.svg'
import projectToolPhotoshop from './assets/figma/project-tool-photoshop.svg'
import projectToolLightroom from './assets/figma/project-tool-lightroom.svg'
import projectToolFigma from './assets/figma/project-tool-figma.svg'
import projectToolHtml from './assets/figma/project-tool-html.svg'
import projectToolCss from './assets/figma/project-tool-css.svg'
import projectToolJavascript from './assets/figma/project-tool-javascript.svg'
import projectDecorative from './assets/figma/project-decorative.svg'
import marqueeFigma from './assets/figma/marquee-figma.svg'
import marqueeIllustrator from './assets/figma/marquee-illustrator.svg'
import marqueePhotoshop from './assets/figma/marquee-photoshop.svg'
import marqueeLightroom from './assets/figma/marquee-lightroom.svg'
import marqueeHtml from './assets/figma/marquee-html.svg'
import marqueeCss from './assets/figma/marquee-css.svg'
import marqueeJavascript from './assets/figma/marquee-javascript.svg'
import marqueeReact from './assets/figma/marquee-react.svg'
import copyrightIcon from './assets/figma/copyright.svg'
/* import heroVectorLeft from './assets/figma/hero-vector-left.svg'
import heroVectorRight from './assets/figma/hero-vector-right.svg' */
import heroAccentLeft from './assets/figma/hero-accent-left.svg'
import heroAccentRight from './assets/figma/hero-accent-right.svg'
/* import contactPanelArt from './assets/figma/contact-panel.svg' */

const tools = [
  ['Figma', 'Design', 'figma'],
  ['Illustrator', 'Design', 'ai'],
  ['Lightroom', 'Design', 'lr'],
  ['HTML', 'Frontend', 'html'],
  ['CSS', 'Frontend', 'css'],
  ['JavaScript', 'Frontend', 'js'],
  ['React', 'Frontend', 'react'],
  ['Tailwind', 'Frontend', 'tw'],
  ['GSAP', 'Frontend', 'gsap'],
  ['React bits', 'Frontend', 'bits'],
  ['Github', 'Hospedagem', 'gh'],
  ['GitLab', 'Hospedagem', 'gl'],
  ['Wordpress', 'CMS', 'wp'],
  ['Nextcloud', 'Gestão', 'nc'],
  ['OpenProject', 'Gestão', 'op'],
  ['Trello', 'Gestão', 'tr'],
  ['ChatGPT', 'AI', 'chatgpt'],
  ['Claude', 'AI', 'claude'],
  ['Copilot', 'AI', 'copilot'],
  ['Gemini', 'AI', 'gemini']

]

const projectTools = [
  ['Figma', projectToolFigma],
  ['HTML', projectToolHtml],
  ['CSS', projectToolCss],
  ['JavaScript', projectToolJavascript],
  /* ['Photoshop', projectToolPhotoshop], */
  ['Lightroom', projectToolLightroom],
]

const marqueeTools = [
  ['Figma', marqueeFigma],
  ['Illustrator', marqueeIllustrator],
  /* ['Photoshop', marqueePhotoshop], */
  ['Lightroom', marqueeLightroom],
  ['HTML', marqueeHtml],
  ['CSS', marqueeCss],
  ['JavaScript', marqueeJavascript],
  ['React JS', marqueeReact],
]

const toolAssets = {
  figma: skillFigma,
  ai: skillIllustrator,
  /* photoshop: skillPhotoshop, */
  lr: skillLightroom,
  html: skillHtml,
  css: skillCss,
  js: skillJavascript,
  react: skillReact,
  tw: skillTailwind,
  gsap: skillGsap,
  bits: skillReactBits,
  gh: skillGithub,
  gl: skillGitlab,
  tr: skillTrello,
  wp: skillWordpress,
  nc: skillNextcloud,
  op: openProjectAsset,
  chatgpt: skillChatgpt,
  claude: skillClaude,
  copilot: skillCopilot,
  gemini: skillGemini
}


function ToolIcon({ type }) {
  const asset = toolAssets[type]
  return (
    <span className={`tool-icon tool-icon--${type}`}>
      {asset ? <img src={asset} alt="" /> : null}
    </span>
  )
}

function ProjectCard({ image, secondaryImage, className = '', onClick, isActive, index }) {
  return (
    <article
      className={`project-card ${className}`}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onClick()
        }
      }}
      role="button"
      tabIndex="0"
      aria-label={`Selecionar projeto ${index + 1}`}
      aria-current={isActive ? 'true' : undefined}
    >
      <div className="project-copy">
        <div className="project-tags"><span>Design</span><span>Front-End</span></div>
        <h3>Projeto Arte de Rua</h3>
        <p className="project-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a className="project-link" href="#contato">Visualizar Projeto</a>
        <div className="project-tools">
          <img className="project-tools-icon" src={projectDecorative} alt="" />
          Ferramentas utilizadas no projeto
        </div>
        <div className="project-tool-list">
          {projectTools.map(([tool]) => (
            <span key={tool}>
              {tool}
            </span>
          ))}
        </div>
      </div>
      <div className={`project-image ${secondaryImage ? 'project-image--stacked' : ''}`}>
        <img src={image} alt="Projeto Arte de Rua" />
        {secondaryImage ? <img src={secondaryImage} alt="" /> : null}
      </div>
    </article>
  )
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Camilly Neves">
        <img src={logoFooter} alt="Camilly Neves" />
      </a>
      <nav aria-label="Navegação principal">
        <a href="#inicio">Início</a>
        <a href="#pessoal">Pessoal</a>
        <a href="#projetos">Projetos</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#contato">Contatos</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero section-shell" id="inicio">
        {/* <img className="hero-vector hero-vector--left" src={heroVectorLeft} alt="" />
        <img className="hero-vector hero-vector--right" src={heroVectorRight} alt="" /> */}
      <div className="hero-orb hero-orb--one" />
      <div className="hero-orb hero-orb--two" />
      <img className="hero-accent hero-accent--left" src={heroAccentLeft} alt="" />
      <img className="hero-accent hero-accent--right" src={heroAccentRight} alt="" />
      {/* <img className="hero-mark" src={heroAsset} alt="" /> */}
      <div className="hero-code-card">
        <span>&lt;portfolio /&gt;</span>
        <strong>Olá, eu sou<br /><em>Camilly Neves</em></strong>
        <small>Designer UI/UX e Desenvolvedora Front-end</small>
      </div>
      <p className="hero-kicker">Portifólio</p>
      <h1>Camilly Neves</h1>
      <p className="hero-subtitle">Designer UI/UX e Desenvolvedora Front-end</p>
    </section>
  )
}

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const cards = [
    { image: projectImage },
    { image: projectImage, secondaryImage: projectImageAlt },
    { image: projectImageAlt, secondaryImage: projectImage },
  ]

  return (
    <section className="projects section-shell" id="projetos">
      <div className="projects-stage">
        {cards.map((card, index) => {
          const position = (index - activeIndex + cards.length) % cards.length
          const positionClass = position === 0
            ? 'project-card--main'
            : position === 1
              ? 'project-card--right'
              : 'project-card--left'

          return (
            <ProjectCard
              key={index}
              {...card}
              index={index}
              isActive={position === 0}
              className={`project-card--carousel ${positionClass}`}
              onClick={() => setActiveIndex(index)}
            />
          )
        })}
      </div>
      <div className="project-carousel-dots" aria-label="Navegação do carrossel">
        {cards.map((_, index) => (
          <button
            key={index}
            type="button"
            className={index === activeIndex ? 'is-active' : ''}
            onClick={() => setActiveIndex(index)}
            aria-label={`Ir para o projeto ${index + 1}`}
            aria-current={index === activeIndex ? 'true' : undefined}
          />
        ))}
      </div>
      <a className="outline-button" href="#projetos">Visualizar todos os Projetos</a>
    </section>
  )
}

function ToolMarquee() {
  return (
    <div className="tool-marquee" aria-label="Ferramentas principais">
      <div className="tool-marquee-track">
        {/* {marqueeTools.map(([tool, asset]) => (
          <span key={tool}>
            <i><img src={asset} alt="" /></i>
            {tool}
          </span>
        ))} */}
      </div>
    </div>
  )
}

function About() {
  return (
    <section className="about section-shell" id="pessoal">
      <img src={aboutDecorationAsset} alt="" />
      <h2>Sobre mim</h2>
      <p>
        Bacharel em Design pela Universidade Ceuma, atuo na área de UI/UX Design,
        desenvolvendo protótipos focados em oferecer uma experiência do usuário
        intuitiva e consistente. Além disso, atuo como desenvolvedora front-end,
        unindo design e tecnologia para entregar soluções completas.
      </p>
    </section>
  )
}

function Skills() {
  return (
    <section className="skills section-shell" id="habilidades">
      <h2>Ferramentas e Linguagens</h2>
      <p className="section-lead">Explore minhas ferramentas e tecnologias</p>
      <div className="skills-grid">
        {tools.map(([name, description, type]) => (
          <div className="skill-card" key={name}>
            <ToolIcon type={type} />
            <span><strong>{name}</strong><small>{description}</small></span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Experiences() {
  return (
    <section className="experiences section-shell">
      <span className="pill-label">Trajetória</span>
      <h2>Experiências Profissionais</h2>
      <div className="experience-outline" aria-hidden="true" />
      <div className="experience-list">
        <article className="experience-item">
          <div className="experience-icon"><img src={experienceMark} alt="" /></div>
          <div>
            <strong>Designer UI/UX e Desenvolvedora Front-end</strong>
            <p>Agência Estadual Tecnologia da Informação do Governo do Maranhão - ATI <span>|</span> <em>Atualmente</em></p>
          </div>
        </article>
        <article className="experience-item">
          <div className="experience-icon"><img src={experienceMark} alt="" /></div>
          <div>
            <strong>Social media e designer</strong>
            <p>Evento Elevando seu negócio da Abundance <span>|</span> <em>2024</em></p>
          </div>
        </article>
      </div>
    </section>
  )
}

function EducationCard({ children, period, institution, location }) {
  return (
    <article className="education-card">
      <span className="education-period">{period}</span>
      <strong>{children}</strong>
      <p>{institution}</p>
      <p>{location}</p>
      <img className="education-ribbon" src={educationRibbon} alt="" />
    </article>
  )
}

function Education() {
  return (
    <section className="education section-shell">
      <div className="education-bg education-bg--left" aria-hidden="true"><img src={educationOutline} alt="" /></div>
      <div className="education-bg education-bg--right" aria-hidden="true"><img src={educationOutline} alt="" /></div>
      <h2>Formação e Certificações</h2>
      <p className="section-lead">Acompanhe minhas conquistas acadêmicas</p>
      <div className="education-grid">
        <EducationCard period="2022 - 2025.1" institution="Universidade Ceuma - Renascença" location="São Luís, MA - Brasil">
          Design - Bacharelado
        </EducationCard>
        <EducationCard period="2023.2 - 2024.1" institution="Incode Tech School - Certificação executiva" location="São Luís, MA - Brasil">
          <>Lógica de programação<br />Desenvolvimento Front-end<br />UI/UX Design</>
        </EducationCard>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact section-shell" id="contato">
      <div className="window-bar">
        <span className="window-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="window-title"><img src={contactIcon} alt="" />Formulário - Contato</span>
        <span className="window-controls" aria-hidden="true"><i /><i /><i /></span>
      </div>
      <div className="contact-body">
        {/* <img className="contact-panel-art" src={contactPanelArt} alt="" /> */}
        <div className="contact-intro">
          <p className="code-muted">// vamos conversar?</p>
          <h2>Entre em contato<br /><em>comigo.</em></h2>
          <p>Tem uma ideia ou projeto em mente? Envie uma mensagem e vamos criar algo incrível juntos.</p>
          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/camilly-neves-239a60233/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img src={linkedinLogo} alt="" />
            </a>
            <a href="https://dribbble.com/CamillyN" target="_blank" rel="noreferrer" aria-label="Dribbble">
              <img src={dribbbleLogo} alt="" />
            </a>
            <a href="https://github.com/CamysN" target="_blank" rel="noreferrer" aria-label="GitHub">
              <img src={githubLogo} alt="" />
            </a>
          </div>
        </div>
        <form className="contact-form">
          <label>Nome<input placeholder="Digite seu nome" /></label>
          <label>E-mail<input placeholder="Digite seu e-mail" /></label>
          <label>Mensagem<textarea placeholder="Conte um pouco sobre seu projeto" rows="4" /></label>
          <button type="button">Enviar mensagem <span>↗</span></button>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <a className="brand" href="#inicio" aria-label="Camilly Neves">
        <img src={logoFooter} alt="Camilly Neves" />
      </a>
      <nav aria-label="Navegação do rodapé">
        <a href="#inicio">Início</a><a href="#pessoal">Pessoal</a><a href="#projetos">Projetos</a><a href="#habilidades">Habilidades</a><a href="#contato">Contatos</a>
      </nav>
      <p><img className="copyright-icon" src={copyrightIcon} alt="" />2025 Camilly Neves. Todos os direitos reservados.</p>
    </footer>
  )
}

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      {/* <ToolMarquee /> */}
      <About />
      <Skills />
      <Experiences />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
