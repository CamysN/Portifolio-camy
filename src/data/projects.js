import projectCover from '../assets/figma/project-arte-de-rua.png'
import projectCoverAlt from '../assets/figma/project-arte-de-rua-alt.png'

export const projects = [
  {
    id: 'arte-de-rua',
    slug: 'arte-de-rua',
    title: 'Arte de Rua',
    shortDescription: '',
    tags: ['Design', 'Front-End'],
    cover: projectCover,
    coverAlt: projectCoverAlt,
    role: 'Design + Front-end',
    description: '',
    onlineUrl: '',
    published: true,
    featuredImage: null,
    gallery: [],
    tools: [],
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}
