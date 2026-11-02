import { useState } from 'react'
import Header from '../components/Header.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import { projects } from '../data/projects.js'
import './Projects.css'

function ProjectCard({ project }) {
  return (
    <article className="catalog-card">
      <div className="catalog-card__cover">
        <div className="catalog-card__cover-frame">
          <span className="catalog-card__edit-mark" />
          <img src={project.cover} alt={`Capa do projeto ${project.title}`} />
        </div>
      </div>
      <div className="catalog-card__info">
        <div className="catalog-card__tags">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <h2>{project.title}</h2>
        <a className="catalog-card__link" href={`/projetos/${project.slug}`}>
          <span>Conhecer projeto</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}

function Pagination({ totalPages }) {
  const [page, setPage] = useState(1)
  return (
    <div className="projects-page__pagination">
      <span>Página {page} de {totalPages}</span>
      <div className="projects-page__pagination-actions" aria-label="Paginação">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
          <button
            type="button"
            className={page === number ? 'is-active' : undefined}
            key={number}
            onClick={() => setPage(number)}
            aria-label={`Página ${number}`}
            aria-current={page === number ? 'page' : undefined}
          >
            {number}
          </button>
        ))}
        <button type="button" aria-label="Próxima página" onClick={() => setPage(Math.min(3, page + 1))}>›</button>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const filters = ['Todos', ...new Set(projects.flatMap((project) => project.tags))]
  const visibleProjects = projects.filter((project) => {
    if (!project.published) return false
    return activeFilter === 'Todos' || project.tags.includes(activeFilter)
  })
  const totalPages = Math.max(1, Math.ceil(visibleProjects.length / 8))

  return (
    <main className="projects-page">
      <Header />
      <section className="projects-page__intro">
        <div className="projects-page__title-frame">
          <h1>Meus Projetos</h1>
        </div>
        <p>Confira aqui meus trabalhos em design e desenvolvimento front-end,<br />construindo experiências visuais e funcionais.</p>
      </section>
      <section className="projects-page__catalog" aria-label="Lista de projetos">
        <div className="projects-page__filters">
          {filters.map((filter) => (
            <button
              type="button"
              className={activeFilter === filter ? 'is-active' : undefined}
              key={filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="projects-page__grid">
          {visibleProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
        <Pagination totalPages={totalPages} />
      </section>
      <Contact />
      <Footer />
    </main>
  )
}
