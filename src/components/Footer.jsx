import logoFooter from '../assets/figma/logo-footer.svg'
import copyrightIcon from '../assets/figma/copyright.svg'

export default function Footer() {
  const isHome = window.location.pathname === '/'
  const sectionHref = (sectionId) => isHome ? `#${sectionId}` : `/#${sectionId}`

  return (
    <footer className="footer">
      <a className="brand" href={sectionHref('inicio')} aria-label="Camilly Neves">
        <img src={logoFooter} alt="Camilly Neves" />
      </a>
      <nav aria-label="Navegação do rodapé">
        <a href={sectionHref('inicio')}>Início</a><a href="/projetos">Projetos</a><a href={sectionHref('pessoal')}>Sobre</a><a href={sectionHref('habilidades')}>Habilidades</a><a href={sectionHref('experiencia')}>Experiências</a><a href={sectionHref('formacao')}>Formações</a>
      </nav>
      <p><img className="copyright-icon" src={copyrightIcon} alt="" />2026 Camilly Neves. Todos os direitos reservados.</p>
    </footer>
  )
}
