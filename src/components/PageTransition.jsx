import { useEffect, useRef, useState } from 'react'
import Header from './Header.jsx'
import App from '../App.jsx'
import Projects from '../pages/Projects.jsx'
import ProjectDetail from '../pages/ProjectDetail.jsx'
import { getProjectBySlug } from '../data/projects.js'

function renderPage(pathname) {
  const projectDetailMatch = pathname.match(/^\/projetos\/([^/]+)$/)
  const projectDetail = projectDetailMatch ? getProjectBySlug(projectDetailMatch[1]) : null

  if (pathname === '/projetos') return <Projects />
  if (projectDetailMatch) return projectDetail ? <ProjectDetail project={projectDetail} /> : <Projects />
  return <App />
}

function isInternalPageLink(anchor, event) {
  if (
    event.defaultPrevented
    || event.button !== 0
    || event.metaKey
    || event.ctrlKey
    || event.shiftKey
    || event.altKey
    || anchor.target
    || anchor.hasAttribute('download')
  ) return false

  const url = new URL(anchor.href, window.location.href)
  return url.origin === window.location.origin
    && url.pathname !== window.location.pathname
}

export default function PageTransition() {
  const [pathname, setPathname] = useState(window.location.pathname)
  const [phase, setPhase] = useState('enter')
  const transitionTimeout = useRef(null)
  const isTransitioning = useRef(false)

  useEffect(() => {
    const finishTransition = (nextPathname) => {
      if (isTransitioning.current) return

      isTransitioning.current = true
      setPhase('exit')
      transitionTimeout.current = window.setTimeout(() => {
        setPathname(nextPathname)
        setPhase('enter')
        isTransitioning.current = false
      }, 260)
    }

    const handleClick = (event) => {
      const anchor = event.target instanceof Element ? event.target.closest('a') : null
      if (!anchor || !isInternalPageLink(anchor, event)) return
      if (isTransitioning.current) {
        event.preventDefault()
        return
      }

      const url = new URL(anchor.href, window.location.href)
      event.preventDefault()
      window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`)
      finishTransition(url.pathname)
    }

    const handlePopState = () => {
      if (window.location.pathname === pathname) return
      finishTransition(window.location.pathname)
    }

    document.addEventListener('click', handleClick, true)
    window.addEventListener('popstate', handlePopState)
    return () => {
      document.removeEventListener('click', handleClick, true)
      window.removeEventListener('popstate', handlePopState)
      if (transitionTimeout.current) window.clearTimeout(transitionTimeout.current)
    }
  }, [pathname])

  useEffect(() => {
    if (phase !== 'enter' || !window.location.hash) return undefined

    const scrollToHash = window.setTimeout(() => {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 40)

    return () => window.clearTimeout(scrollToHash)
  }, [pathname, phase])

  return (
    <>
      <Header />
      <div className={`page-transition page-transition--${phase}`} key={pathname}>
        {renderPage(pathname)}
      </div>
    </>
  )
}
