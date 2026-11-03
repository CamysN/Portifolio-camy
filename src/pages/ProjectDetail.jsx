import { useEffect, useState } from 'react'
import Header from '../components/Header.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import { getTool, toolAssets } from '../data/tools.js'
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

function Lightbox({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="detail-lightbox" role="dialog" aria-modal="true" aria-label="Imagem ampliada" onClick={onClose}>
      <button className="detail-lightbox__close" type="button" onClick={onClose} aria-label="Fechar imagem">×</button>
      <img src={image.src} alt={image.alt} onClick={(event) => event.stopPropagation()} />
    </div>
  )
}

export default function ProjectDetail({ project }) {
  const [lightboxImage, setLightboxImage] = useState(null)
  const gallery = project.gallery.length ? project.gallery : galleryLabels.map((label) => ({ label, image: null }))
  const tools = project.tools.map((toolName) => ({ name: toolName, metadata: getTool(toolName) }))
  const openImage = (src, alt) => setLightboxImage({ src, alt })
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
            </div>
          </div>
        </section>

        <section className="detail-media">
          <h2>Imagens do projeto</h2>
          <div className="detail-featured">
            {project.detailCover
              ? <button className="detail-image-button detail-image-button--featured" type="button" onClick={() => openImage(project.detailCover, `Capa do projeto ${project.title}`)}><img src={project.detailCover} alt={`Capa do projeto ${project.title}`} /></button>
              : <EditablePlaceholder label="[Imagem de destaque do projeto]" featured />}
            <p>Imagem principal para apresentar o projeto em destaque.</p>
          </div>
          <div className="detail-gallery">
            <h3>Galeria</h3>
            <div className="detail-gallery__grid">
              {gallery.map((item) => item.image
                ? <button className="detail-image-button" type="button" key={item.label} onClick={() => openImage(item.image, item.label)}><img className="detail-gallery__image" src={item.image} alt={item.label} /></button>
                : <EditablePlaceholder key={item.label} label={item.label} />)}
            </div>
          </div>
        </section>

        <section className="detail-tools">
          <h2>Tecnologias e ferramentas</h2>
          <div className="detail-tools__grid">
            {tools.map((tool, index) => (
              <div className="detail-tool" key={`${tool.name}-${index}`}>
                <span className={`tool-icon tool-icon--${tool.metadata?.[2] || 'missing'}`}>
                  {tool.metadata ? <img src={toolAssets[tool.metadata[2]]} alt="" /> : null}
                </span>
                <span><strong>{tool.name}</strong><small>{tool.metadata?.[1] || 'Ferramenta'}</small></span>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Contact />
      <Footer />
      {lightboxImage ? <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} /> : null}
    </main>
  )
}
