import jacksonFiveCover from '../assets/projects/jackson-five.png'
import cemamCover from '../assets/projects/aplicativo-cemam.png'
import museumCover from '../assets/projects/site-museu.png'
import zpeCover from '../assets/projects/site-zpe.png'
import maranhaoConnectedCover from '../assets/projects/maranhao-mais-conectado.png'
import jacksonFiveDetailCover from '../assets/project-details/jackson-five/cover.png'
import jacksonFiveGallery01 from '../assets/project-details/jackson-five/01-home.png'
import jacksonFiveGallery02 from '../assets/project-details/jackson-five/02-camisetas.png'
import jacksonFiveGallery03 from '../assets/project-details/jackson-five/03-canecas.png'
import jacksonFiveGallery04 from '../assets/project-details/jackson-five/04-papelaria.png'
import jacksonFiveGallery05 from '../assets/project-details/jackson-five/05-posteres.png'
import jacksonFiveGallery06 from '../assets/project-details/jackson-five/06-bolsas.png'
import jacksonFiveGallery07 from '../assets/project-details/jackson-five/07-produto.png'
import cemamDetailCover from '../assets/project-details/aplicativo-cemam/cover.png'
import cemamGallery01 from '../assets/project-details/aplicativo-cemam/01-notificacoes.png'
import cemamGallery02 from '../assets/project-details/aplicativo-cemam/02-regioes-selecao.png'
import cemamGallery03 from '../assets/project-details/aplicativo-cemam/03-inicio-sol.png'
import cemamGallery04 from '../assets/project-details/aplicativo-cemam/04-inicio-chuva.png'
import cemamGallery05 from '../assets/project-details/aplicativo-cemam/05-historico-alertas.png'
import cemamGallery06 from '../assets/project-details/aplicativo-cemam/06-detalhe-alerta-chuva.png'
import cemamGallery07 from '../assets/project-details/aplicativo-cemam/07-detalhe-alerta-vento.png'
import cemamGallery08 from '../assets/project-details/aplicativo-cemam/08-minhas-regioes.png'
import cemamGallery09 from '../assets/project-details/aplicativo-cemam/09-configuracoes.png'
import museumDetailCover from '../assets/project-details/site-do-museu/cover.png'
import museumGallery01 from '../assets/project-details/site-do-museu/01-home.png'
import museumGallery02 from '../assets/project-details/site-do-museu/02-museu.png'
import museumGallery03 from '../assets/project-details/site-do-museu/03-historia.png'
import museumGallery04 from '../assets/project-details/site-do-museu/04-acervo.png'
import museumGallery05 from '../assets/project-details/site-do-museu/05-governadores.png'
import museumGallery06 from '../assets/project-details/site-do-museu/06-governador.png'
import museumGallery07 from '../assets/project-details/site-do-museu/07-galeria.png'
import zpeDetailCover from '../assets/project-details/site-zpe/cover.png'
import zpeGallery01 from '../assets/project-details/site-zpe/01-home.png'
import zpeGallery02 from '../assets/project-details/site-zpe/02-beneficios.png'
import zpeGallery03 from '../assets/project-details/site-zpe/03-noticias.png'
import zpeGallery04 from '../assets/project-details/site-zpe/04-noticia-detalhe.png'
import zpeGallery05 from '../assets/project-details/site-zpe/05-documentos.png'
import maranhaoDetailCover from '../assets/project-details/maranhao-mais-conectado/cover.png'
import maranhaoGallery01 from '../assets/project-details/maranhao-mais-conectado/01-home.png'
import maranhaoGallery02 from '../assets/project-details/maranhao-mais-conectado/02-home-reenvio.png'
import maranhaoGallery03 from '../assets/project-details/maranhao-mais-conectado/03-sobre.png'
import maranhaoGallery04 from '../assets/project-details/maranhao-mais-conectado/04-documentos.png'
import maranhaoGallery05 from '../assets/project-details/maranhao-mais-conectado/05-agenda.png'

export const featuredProjects = [
  {
    id: 'jackson-five',
    slug: 'jackson-five',
    title: 'Jackson Five',
    tags: ['Design'],
    shortDescription: 'Projeto acadêmico de criação de um e-commerce voltado à comercialização de produtos exclusivos e personalizados inspirados na banda Jackson Five. O desenvolvimento teve como foco uma interface limpa e organizada, priorizando o destaque dos produtos e facilitando a navegação e a experiência de compra. A proposta buscou equilibrar identidade visual, hierarquia de informações e funcionalidade, proporcionando uma experiência intuitiva e agradável ao usuário.',
    cover: jacksonFiveCover,
    tools: ['Figma'],
    featured: true,
    detailCover: jacksonFiveDetailCover,
    gallery: [
      { label: 'Página inicial do e-commerce', image: jacksonFiveGallery01 },
      { label: 'Categoria de camisetas', image: jacksonFiveGallery02 },
      { label: 'Categoria de canecas', image: jacksonFiveGallery03 },
      { label: 'Categoria de papelaria', image: jacksonFiveGallery04 },
      { label: 'Categoria de pôsteres', image: jacksonFiveGallery05 },
      { label: 'Categoria de bolsas', image: jacksonFiveGallery06 },
      { label: 'Detalhe do produto', image: jacksonFiveGallery07 },
    ],
  },
  {
    id: 'aplicativo-cemam',
    slug: 'aplicativo-cemam',
    title: 'Aplicativo CEMAM',
    tags: ['Design'],
    shortDescription: 'Projeto de criação de um aplicativo voltado ao monitoramento de condições climáticas e à emissão de alertas para agricultores sobre possíveis riscos às suas plantações. A proposta é manter os produtores informados sobre mudanças climáticas e eventos que possam comprometer suas produções, permitindo que se antecipem e adotem medidas preventivas. Com o apoio do ChatGPT na estruturação do fluxo de navegação e das funcionalidades, desenvolvi uma interface clean e intuitiva, priorizando a hierarquia das informações e o destaque das notificações para facilitar a compreensão e a tomada de decisões.',
    cover: cemamCover,
    tools: ['Figma', 'ChatGPT'],
    featured: true,
    detailCover: cemamDetailCover,
    gallery: [
      { label: 'Permissão de notificações', image: cemamGallery01 },
      { label: 'Seleção de regiões', image: cemamGallery02 },
      { label: 'Tela inicial com sol', image: cemamGallery03 },
      { label: 'Tela inicial com chuva', image: cemamGallery04 },
      { label: 'Histórico de alertas', image: cemamGallery05 },
      { label: 'Detalhe do alerta de chuva', image: cemamGallery06 },
      { label: 'Detalhe do alerta de vento', image: cemamGallery07 },
      { label: 'Minhas regiões', image: cemamGallery08 },
      { label: 'Configurações', image: cemamGallery09 },
    ],
  },
  {
    id: 'site-do-museu',
    slug: 'site-do-museu',
    title: 'Site do Museu',
    tags: ['Design', 'Front-End'],
    shortDescription: 'Projeto de criação do site institucional do Museu do Palácio dos Leões, localizado em São Luís, Maranhão, com o objetivo de apresentar digitalmente seu patrimônio histórico e cultural, despertando o interesse de turistas e oferecendo um acervo informativo à população local. A plataforma reúne informações sobre a história do museu, seu acervo e uma galeria digital de governadores que passaram pelo Maranhão, reproduzindo virtualmente um dos espaços expositivos do próprio Palácio. Minha participação envolveu tanto a concepção do design, criação das interfaces e estruturação dos fluxos de navegação, quanto o desenvolvimento front-end, unindo identidade visual, funcionalidade e experiência do usuário.',
    cover: museumCover,
    tools: ['Figma', 'ChatGPT', 'React', 'Copilot'],
    featured: true,
    detailCover: museumDetailCover,
    gallery: [
      { label: 'Página inicial do museu', image: museumGallery01 },
      { label: 'Página sobre o museu', image: museumGallery02 },
      { label: 'Página de história', image: museumGallery03 },
      { label: 'Página do acervo', image: museumGallery04 },
      { label: 'Galeria de governadores', image: museumGallery05 },
      { label: 'Detalhe de governador', image: museumGallery06 },
      { label: 'Galeria de fotos', image: museumGallery07 },
    ],
  },
]

const existingProjects = [
  {
    id: 'site-zpe',
    slug: 'site-zpe',
    title: 'Site ZPE',
    shortDescription: 'Projeto de criação do site institucional da ZPE Maranhão (Zona de Processamento de Exportação do Maranhão), desenvolvido com o objetivo de apresentar a instituição, seus serviços e oportunidades de negócios, além de informar empresas interessadas em atuar na área. A proposta visual buscou desenvolver uma plataforma moderna, objetiva e informativa, utilizando a identidade visual da instituição como elemento central da composição. O design priorizou a clareza das informações, a organização dos conteúdos e uma navegação intuitiva, reforçando a identidade institucional e transmitindo profissionalismo e credibilidade.',
    tags: ['Design', 'Front-End'],
    cover: zpeCover,
    role: 'Design + Front-end',
    description: 'Projeto de criação do site institucional da ZPE Maranhão (Zona de Processamento de Exportação do Maranhão), desenvolvido com o objetivo de apresentar a instituição, seus serviços e oportunidades de negócios, além de informar empresas interessadas em atuar na área. A proposta visual buscou desenvolver uma plataforma moderna, objetiva e informativa, utilizando a identidade visual da instituição como elemento central da composição. O design priorizou a clareza das informações, a organização dos conteúdos e uma navegação intuitiva, reforçando a identidade institucional e transmitindo profissionalismo e credibilidade.',
    onlineUrl: '',
    published: true,
    featuredImage: null,
    tools: ['Figma', 'ChatGPT', 'HTML', 'CSS', 'JavaScript', 'Copilot'],
    featured: false,
    detailCover: zpeDetailCover,
    gallery: [
      { label: 'Página inicial da ZPE Maranhão', image: zpeGallery01 },
      { label: 'Página de benefícios', image: zpeGallery02 },
      { label: 'Página de notícias', image: zpeGallery03 },
      { label: 'Detalhe da notícia', image: zpeGallery04 },
      { label: 'Página de documentos', image: zpeGallery05 },
    ],
  },
  {
    id: 'maranhao-mais-conectado',
    slug: 'maranhao-mais-conectado',
    title: 'Site Maranhão mais conectado',
    shortDescription: 'Projeto de criação do design do site institucional do Programa Maranhão Mais Conectado, iniciativa do Governo do Estado voltada à expansão da infraestrutura digital e à inclusão tecnológica no Maranhão. A plataforma foi concebida para apresentar os objetivos, as ações e as informações do programa, além de funcionar como um espaço para disponibilização e consulta de documentos institucionais. A proposta visual buscou transmitir tecnologia, inovação e modernidade, explorando uma identidade própria, com elementos gráficos e uma linguagem visual que reforçam a personalidade do projeto. Minha participação foi focada na concepção visual, estruturação das interfaces e organização dos conteúdos, priorizando uma experiência intuitiva e uma comunicação institucional clara.',
    tags: ['Design'],
    cover: maranhaoConnectedCover,
    role: 'Design',
    description: 'Projeto de criação do design do site institucional do Programa Maranhão Mais Conectado, iniciativa do Governo do Estado voltada à expansão da infraestrutura digital e à inclusão tecnológica no Maranhão. A plataforma foi concebida para apresentar os objetivos, as ações e as informações do programa, além de funcionar como um espaço para disponibilização e consulta de documentos institucionais. A proposta visual buscou transmitir tecnologia, inovação e modernidade, explorando uma identidade própria, com elementos gráficos e uma linguagem visual que reforçam a personalidade do projeto. Minha participação foi focada na concepção visual, estruturação das interfaces e organização dos conteúdos, priorizando uma experiência intuitiva e uma comunicação institucional clara.',
    onlineUrl: '',
    published: true,
    featuredImage: null,
    tools: ['Figma', 'ChatGPT'],
    featured: false,
    detailCover: maranhaoDetailCover,
    gallery: [
      { label: 'Página inicial do programa', image: maranhaoGallery01 },
      { label: 'Página inicial do programa (versão enviada novamente)', image: maranhaoGallery02 },
      { label: 'Página sobre o programa', image: maranhaoGallery03 },
      { label: 'Página de documentos', image: maranhaoGallery04 },
      { label: 'Agenda de consultas públicas', image: maranhaoGallery05 },
    ],
  },
]

export const projects = [
  ...existingProjects,
  ...featuredProjects.map((project) => ({
    ...project,
    role: project.tags.join(' + '),
    description: project.shortDescription,
    coverAlt: null,
    onlineUrl: '',
    published: true,
    featuredImage: null,
    detailCover: project.detailCover || null,
    gallery: project.gallery || [],
  })),
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}
