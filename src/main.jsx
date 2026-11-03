import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import { getProjectBySlug } from './data/projects.js'

const projectDetailMatch = window.location.pathname.match(/^\/projetos\/([^/]+)$/)
const projectDetail = projectDetailMatch ? getProjectBySlug(projectDetailMatch[1]) : null

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {window.location.pathname === '/projetos'
      ? <Projects />
      : projectDetailMatch
        ? projectDetail ? <ProjectDetail project={projectDetail} /> : <Projects />
        : <App />}
  </StrictMode>,
)
