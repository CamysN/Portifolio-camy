import { useState } from 'react'
import headerLogo from '../assets/figma/Group 1171275571.svg'

export default function Header() {
  const isHome = window.location.pathname === '/'
  const [activeSection, setActiveSection] = useState(isHome ? 'inicio' : '')
  const sectionHref = (sectionId) => isHome ? `#${sectionId}` : `/#${sectionId}`
  const navItems = [
    ['inicio', 'Início'],
    ['pessoal', 'Sobre'],
    ['habilidades', 'Habilidades'],
    ['experiencia', 'Experiências'],
    ['formacao', 'Formações']
  ]

  return (
    <header className="site-header">
      <a className="brand" href={sectionHref('inicio')} onClick={() => setActiveSection('inicio')} aria-label="Camilly Neves">
        <img src={headerLogo} alt="Camilly Neves" />
      </a>
      <nav aria-label="Navegação principal">
        {navItems.map(([sectionId, label]) => (
          <a
            className={activeSection === sectionId ? 'is-active' : undefined}
            href={sectionHref(sectionId)}
            onClick={() => setActiveSection(sectionId)}
            aria-current={activeSection === sectionId ? 'page' : undefined}
            key={sectionId}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a className="header-button header-button--projects" href="/projetos">Projetos</a>
        <a className="header-button header-button--contact" href={sectionHref('contato')}>Entre em contato</a>
      </div>
    </header>
  )
}
