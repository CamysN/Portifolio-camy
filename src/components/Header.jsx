import { useEffect, useState } from 'react'
import headerLogo from '../assets/figma/Group 1171275571.svg'

const NAV_ITEMS = [
  ['inicio', 'Início'],
  ['pessoal', 'Sobre'],
  ['habilidades', 'Habilidades'],
  ['experiencia', 'Experiências'],
  ['formacao', 'Formações']
]

export default function Header() {
  const isHome = window.location.pathname === '/'
  const [activeSection, setActiveSection] = useState(isHome ? 'inicio' : '')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const sectionHref = (sectionId) => isHome ? `#${sectionId}` : `/#${sectionId}`
  const contactHref = sectionHref('contato')
  useEffect(() => {
    if (!isHome) return undefined

    const sections = [...NAV_ITEMS.map(([sectionId]) => sectionId), 'contato']
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (visibleSection && NAV_ITEMS.some(([sectionId]) => sectionId === visibleSection.target.id)) {
          setActiveSection(visibleSection.target.id)
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [isHome])
  useEffect(() => {
    if (!isMenuOpen) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('menu-is-open')
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('menu-is-open')
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)
  const handleSectionClick = (event, sectionId) => {
    if (!isHome) return

    const section = document.getElementById(sectionId)
    if (!section) return

    event.preventDefault()
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveSection(sectionId)
    closeMenu()
  }

  return (
    <header className={`site-header${isMenuOpen ? ' menu-is-open' : ''}`}>
      <a className="brand" href={sectionHref('inicio')} onClick={(event) => handleSectionClick(event, 'inicio')} aria-label="Camilly Neves">
        <img src={headerLogo} alt="Camilly Neves" />
      </a>
      <nav aria-label="Navegação principal">
        {NAV_ITEMS.map(([sectionId, label]) => (
          <a
            className={activeSection === sectionId ? 'is-active' : undefined}
            href={sectionHref(sectionId)}
            onClick={(event) => handleSectionClick(event, sectionId)}
            aria-current={activeSection === sectionId ? 'page' : undefined}
            key={sectionId}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a className="header-button header-button--projects" href="/projetos">Projetos</a>
        <a className="header-button header-button--contact" href={contactHref}>Entre em contato</a>
      </div>
      <button
        className="header-menu-toggle"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={`mobile-navigation-backdrop${isMenuOpen ? ' is-open' : ''}`} onClick={closeMenu} aria-hidden="true" />
      <aside className={`mobile-navigation${isMenuOpen ? ' is-open' : ''}`} id="mobile-navigation" aria-hidden={!isMenuOpen}>
        <nav aria-label="Navegação móvel">
          {NAV_ITEMS.map(([sectionId, label]) => (
            <a href={sectionHref(sectionId)} onClick={(event) => handleSectionClick(event, sectionId)} key={sectionId}>
              {label}
            </a>
          ))}
          <a href="/projetos" onClick={closeMenu}>Projetos</a>
          <a href={contactHref} onClick={(event) => handleSectionClick(event, 'contato')}>Entre em contato</a>
        </nav>
      </aside>
    </header>
  )
}
