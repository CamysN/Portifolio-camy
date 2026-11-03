import skillFigma from '../assets/logos-skills/skill-figma.svg'
import skillIllustrator from '../assets/logos-skills/skill-illustrator.svg'
import skillLightroom from '../assets/logos-skills/skill-lightroom.svg'
import skillHtml from '../assets/logos-skills/skill-html.svg'
import skillCss from '../assets/logos-skills/skill-css.svg'
import skillJavascript from '../assets/logos-skills/skill-javascript.svg'
import skillReact from '../assets/logos-skills/skill-react.svg'
import skillTailwind from '../assets/logos-skills/skill-tailwind.png'
import skillGsap from '../assets/logos-skills/skill-gsap.png'
import skillReactBits from '../assets/logos-skills/skill-react-bits.svg'
import skillGithub from '../assets/logos-skills/skill-github.svg'
import skillGitlab from '../assets/logos-skills/skill-gitlab.png'
import skillTrello from '../assets/logos-skills/skill-trello.svg'
import skillWordpress from '../assets/logos-skills/skill-wordpress.svg'
import skillNextcloud from '../assets/logos-skills/skill-nextcloud.svg'
import openProjectAsset from '../assets/logos-skills/skill-openproject.png'
import skillChatgpt from '../assets/logos-skills/skill-chat.svg'
import skillClaude from '../assets/logos-skills/skill-claude.svg'
import skillCopilot from '../assets/logos-skills/skill-copilot.svg'
import skillGemini from '../assets/logos-skills/skill-gemini.svg'

export const tools = [
  ['Figma', 'Design', 'figma'],
  ['Illustrator', 'Design', 'ai'],
  ['Lightroom', 'Design', 'lr'],
  ['HTML', 'Frontend', 'html'],
  ['CSS', 'Frontend', 'css'],
  ['JavaScript', 'Frontend', 'js'],
  ['React', 'Frontend', 'react'],
  ['Tailwind', 'Frontend', 'tw'],
  ['GSAP', 'Frontend', 'gsap'],
  ['React bits', 'Frontend', 'bits'],
  ['Github', 'Hospedagem', 'gh'],
  ['GitLab', 'Hospedagem', 'gl'],
  ['Wordpress', 'CMS', 'wp'],
  ['Nextcloud', 'Gestão', 'nc'],
  ['OpenProject', 'Gestão', 'op'],
  ['Trello', 'Gestão', 'tr'],
  ['ChatGPT', 'AI', 'chatgpt'],
  ['Claude', 'AI', 'claude'],
  ['Copilot', 'AI', 'copilot'],
  ['Gemini', 'AI', 'gemini'],
]

export const toolAssets = {
  figma: skillFigma,
  ai: skillIllustrator,
  lr: skillLightroom,
  html: skillHtml,
  css: skillCss,
  js: skillJavascript,
  react: skillReact,
  tw: skillTailwind,
  gsap: skillGsap,
  bits: skillReactBits,
  gh: skillGithub,
  gl: skillGitlab,
  tr: skillTrello,
  wp: skillWordpress,
  nc: skillNextcloud,
  op: openProjectAsset,
  chatgpt: skillChatgpt,
  claude: skillClaude,
  copilot: skillCopilot,
  gemini: skillGemini,
}

export function getTool(name) {
  return tools.find(([toolName]) => toolName.toLowerCase() === name.toLowerCase())
}
