import { useState } from 'react'
import './App.css'
import projectImage from './assets/figma/project-arte-de-rua.png'
import projectImageAlt from './assets/figma/project-arte-de-rua-alt.png'
import experienceMark from './assets/figma/experience-mark.svg'
import educationRibbon from './assets/figma/education-ribbon.svg'
import educationOutline from './assets/figma/education-outline.svg'
import logoFooter from './assets/figma/logo-footer.svg'
import headerLogo from './assets/figma/Group 1171275571.svg'
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
import projectToolLightroom from './assets/figma/project-tool-lightroom.svg'
import projectToolFigma from './assets/figma/project-tool-figma.svg'
import projectToolHtml from './assets/figma/project-tool-html.svg'
import projectToolCss from './assets/figma/project-tool-css.svg'
import projectToolJavascript from './assets/figma/project-tool-javascript.svg'
import projectDecorative from './assets/figma/project-decorative.svg'
import heroFrame from './assets/figma/Group 1171275586.svg'
import heroSparkles from './assets/figma/Group 1171275572.svg'
import heroBadge from './assets/figma/Group 1171275587.svg'
import heroPaperclip from './assets/figma/Vector (3).svg'
import heroCursor from './assets/figma/Vector (4).svg'
import copyrightIcon from './assets/figma/copyright.svg'
/* import heroVectorLeft from './assets/figma/hero-vector-left.svg'
import heroVectorRight from './assets/figma/hero-vector-right.svg' */
/* import heroAccentLeft from './assets/figma/hero-accent-left.svg'
import heroAccentRight from './assets/figma/hero-accent-right.svg' */
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
  const [activeSection, setActiveSection] = useState('inicio')
  const navItems = [
    ['inicio', 'Início'],
    ['pessoal', 'Sobre'],
    ['habilidades', 'Habilidades'],
    ['experiencia', 'Experiências'],
    ['formacao', 'Formações']
  ]

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" onClick={() => setActiveSection('inicio')} aria-label="Camilly Neves">
        <img src={headerLogo} alt="Camilly Neves" />
      </a>
      <nav aria-label="Navegação principal">
        {navItems.map(([sectionId, label]) => (
          <a
            className={activeSection === sectionId ? 'is-active' : undefined}
            href={`#${sectionId}`}
            onClick={() => setActiveSection(sectionId)}
            aria-current={activeSection === sectionId ? 'page' : undefined}
            key={sectionId}
          >
            {label}
          </a>
        ))}
        {/* <a href="#contato">Contatos</a> */}
      </nav>
      <div className="header-actions">
        <a className="header-button header-button--projects" href="#projetos">Projetos</a>
        <a className="header-button header-button--contact" href="#contato">Entre em contato</a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero section-shell" id="inicio">
      <img className="hero-frame" src={heroFrame} alt="" />
      <img className="hero-sparkles" src={heroSparkles} alt="" />
      <img className="hero-badge" src={heroBadge} alt="" />
      <img className="hero-paperclip" src={heroPaperclip} alt="" />
      <img className="hero-cursor" src={heroCursor} alt="" />
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
    <section className="experiences section-shell" id="experiencia">
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
    <section className="education section-shell" id="formacao">
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
  const [formStatus, setFormStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    setFormStatus('sending')

    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    payload._subject = 'Nova mensagem pelo portfólio'
    payload._captcha = 'false'
    payload._template = 'table'

    try {
      const response = await fetch('https://formsubmit.co/ajax/camillyvcn.03@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        throw new Error('Não foi possível enviar a mensagem.')
      }

      event.currentTarget.reset()
      setFormStatus('success')
    } catch (error) {
      console.error(error)
      setFormStatus('error')
    }
  }

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
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Nome<input name="nome" placeholder="Digite seu nome" required /></label>
          <label>E-mail<input name="email" type="email" placeholder="Digite seu e-mail" required /></label>
          <label>Mensagem<textarea name="mensagem" placeholder="Conte um pouco sobre seu projeto" rows="4" required /></label>
          <button type="submit" disabled={formStatus === 'sending'}>
            {formStatus === 'sending' ? 'Enviando...' : 'Enviar mensagem'} <span>↗</span>
          </button>
          {formStatus === 'success' ? <p className="form-feedback form-feedback--success" role="status">Mensagem enviada com sucesso!</p> : null}
          {formStatus === 'error' ? <p className="form-feedback form-feedback--error" role="alert">Não foi possível enviar. Tente novamente.</p> : null}
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
        <a href="#inicio">Início</a><a href="#projetos">Projetos</a><a href="#pessoal">Sobre</a><a href="#habilidades">Habilidades</a><a href="#experiencia">Experiências</a><a href="#formacao">Formações</a>
      </nav>
      <p><img className="copyright-icon" src={copyrightIcon} alt="" />2026 Camilly Neves. Todos os direitos reservados.</p>
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
