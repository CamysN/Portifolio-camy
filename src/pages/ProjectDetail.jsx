import Header from '../components/Header.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import './ProjectDetail.css'

const galleryLabels = [
  '[Imagem 01 — Home]',
  '[Imagem 02 — Detalhe]',
  '[Imagem 03 — Interface]',
  '[Imagem 04 — Mobile]'
]

function EditablePlaceholder({ label, featured = false }) {
  return (
    <div className={`detail-placeholder${featured ? ' detail-placeholder--featured' : ''}`}>
      <div className="detail-placeholder__outline">
        <span className="detail-placeholder__handle" />
      </div>
      <p>{label}</p>
    </div>
  )
}

function RelatedProject({ project }) {
  return (
    <article className="detail-related-card">
      <img src={project.cover} alt={`Capa do projeto ${project.title}`} />
      <div className="detail-related-card__body">
        <div><span>Design</span><span>Front-End</span></div>
        <h3>{project.title}</h3>
        <a href={`/projetos/${project.slug}`}>Conhecer projeto <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  )
}

export default function ProjectDetail({ project }) {
  const gallery = project.gallery.length ? project.gallery : galleryLabels.map((label) => ({ label, image: null }))
  const tools = project.tools.length ? project.tools : [{ name: '[Ferramenta]', usage: '[Uso no projeto]' }, { name: '[Ferramenta]', usage: '[Uso no projeto]' }, { name: '[Ferramenta]', usage: '[Uso no projeto]' }]
  return (
    <main className="detail-page">
      <Header />
      <div className="detail-content">
        <section className="detail-presentation">
          <a className="detail-back" href="/projetos"><span aria-hidden="true">←</span> Voltar para projetos</a>
          <div className="detail-intro">
            <div className="detail-title-frame"><h1>{project.title}</h1></div>
            {project.description ? <p>{project.description}</p> : null}
          </div>
          <div className="detail-project-info">
            <div>
              <span>Minha atuação</span>
              <strong>{project.role}</strong>
            </div>
            <div className="detail-project-access">
              {project.onlineUrl ? <a href={project.onlineUrl} target="_blank" rel="noreferrer">Ver projeto online <span aria-hidden="true">↗</span></a> : null}
              {!project.onlineUrl ? <p>[Link a adicionar]<small>Opcional</small></p> : null}
            </div>
          </div>
        </section>

        <section className="detail-media">
          <h2>Imagens do projeto</h2>
          <div className="detail-featured">
            <EditablePlaceholder label="[Imagem de destaque do projeto]" featured />
            <p>Imagem principal para apresentar o projeto em destaque.</p>
          </div>
          <div className="detail-gallery">
            <h3>Galeria</h3>
            <div className="detail-gallery__grid">
              {gallery.map((item) => item.image ? <img className="detail-gallery__image" key={item.label} src={item.image} alt={item.label} /> : <EditablePlaceholder key={item.label} label={item.label} />)}
            </div>
          </div>
        </section>

        <section className="detail-tools">
          <h2>Tecnologias e ferramentas</h2>
          <div className="detail-tools__grid">
            {tools.map((tool, index) => (
              <div className="detail-tool" key={`${tool}-${index}`}>
                <span className="detail-tool__icon">+</span>
                <span><strong>{tool.name}</strong><small>{tool.usage}</small></span>
              </div>
            ))}
          </div>
        </section>

        <section className="detail-related">
          <h2>Continue explorando</h2>
          <div className="detail-related__grid">
            <RelatedProject project={project} />
          </div>
          <a className="detail-related__all" href="/projetos">Todos os projetos</a>
        </section>
      </div>
      <Contact />
      <Footer />
    </main>
  )
}
