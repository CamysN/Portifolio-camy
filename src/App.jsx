import { useState } from 'react'
import './App.css'
import { featuredProjects } from './data/projects.js'
import { tools, toolAssets } from './data/tools.js'
import experienceMark from './assets/figma/experience-mark.svg'
import educationRibbon from './assets/figma/education-ribbon.svg'
import educationOutline from './assets/figma/education-outline.svg'
import Header from './components/Header.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import aboutDecorationAsset from './assets/figma/logo-about.svg'
import projectDecorative from './assets/figma/project-decorative.svg'
import heroFrame from './assets/figma/Group 1171275586.svg'
import heroSparkles from './assets/figma/Group 1171275572.svg'
import heroBadge from './assets/figma/Group 1171275587.svg'
import heroPaperclip from './assets/figma/Vector (3).svg'
import heroCursor from './assets/figma/Vector (4).svg'
/* import heroVectorLeft from './assets/figma/hero-vector-left.svg'
import heroVectorRight from './assets/figma/hero-vector-right.svg' */
/* import heroAccentLeft from './assets/figma/hero-accent-left.svg'
import heroAccentRight from './assets/figma/hero-accent-right.svg' */
/* import contactPanelArt from './assets/figma/contact-panel.svg' */

function ToolIcon({ type }) {
  const asset = toolAssets[type]
  return (
    <span className={`tool-icon tool-icon--${type}`}>
      {asset ? <img src={asset} alt="" /> : null}
    </span>
  )
}

function ProjectCard({ project, className = '', onClick, isActive, index }) {
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
        <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <h3>{project.title}</h3>
        <p className="project-description">
          {project.shortDescription.length > 125
            ? `${project.shortDescription.slice(0, 125)}...`
            : project.shortDescription}
        </p>
        <a
          className="project-link"
          href={`/projetos/${project.slug}`}
          onClick={(event) => event.stopPropagation()}
        >
          Visualizar Projeto
        </a>
        <div className="project-tools">
          <img className="project-tools-icon" src={projectDecorative} alt="" />
          Ferramentas utilizadas no projeto
        </div>
        <div className="project-tool-list">
          {project.tools.map((tool) => (
            <span key={tool}>
              {tool}
            </span>
          ))}
        </div>
      </div>
      <div className="project-image">
        <img src={project.cover} alt={`Capa do projeto ${project.title}`} />
      </div>
    </article>
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
  const cards = featuredProjects.filter((project) => project.featured)

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
              project={card}
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
      <a className="outline-button" href="/projetos">Visualizar todos os Projetos</a>
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
