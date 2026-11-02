import { useState } from 'react'
import contactIcon from '../assets/figma/contact-icon.svg'
import linkedinLogo from '../assets/figma/logo-linkedin.svg'
import dribbbleLogo from '../assets/figma/logo-dribbble.svg'
import githubLogo from '../assets/figma/logo-Github.svg'

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    setFormStatus('sending')

    const formData = new FormData(event.currentTarget)
    formData.append('_subject', 'Nova mensagem pelo portfólio')
    formData.append('_replyto', formData.get('email'))
    formData.append('_captcha', 'false')
    formData.append('_template', 'table')

    fetch('https://formsubmit.co/ajax/camillyvcn.03@gmail.com', {
      method: 'POST',
      mode: 'no-cors',
      body: new URLSearchParams(formData)
    }).catch((error) => {
      console.error('Falha ao disparar o envio do formulário:', error)
    })

    event.currentTarget.reset()
    window.setTimeout(() => {
      setFormStatus('success')
    }, 5000)
  }

  return (
    <section className="contact section-shell" id="contato">
      <div className="window-bar">
        <span className="window-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="window-title"><img src={contactIcon} alt="" />Formulário - Contato</span>
        <span className="window-controls" aria-hidden="true"><i /><i /><i /></span>
      </div>
      <div className="contact-body">
        <div className="contact-intro">
          <p className="code-muted">// vamos conversar?</p>
          <h2>Entre em contato<br /><em>comigo.</em></h2>
          <p>Tem uma ideia ou projeto em mente? Envie uma mensagem e vamos criar algo incrível juntos.</p>
          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/camilly-neves-239a60233/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img src={linkedinLogo} alt="" />
            </a>
            <a href="https://dribbble.com/CamillyN" target="_blank" rel="noreferrer" aria-label="Dribbble">
              <img src={dribbbleLogo} alt="" />
            </a>
            <a href="https://github.com/CamysN" target="_blank" rel="noreferrer" aria-label="GitHub">
              <img src={githubLogo} alt="" />
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Nome<input name="nome" placeholder="Digite seu nome" required /></label>
          <label>E-mail<input name="email" type="email" placeholder="Digite seu e-mail" required /></label>
          <label>Mensagem<textarea name="mensagem" placeholder="Conte um pouco sobre seu projeto" rows="4" required /></label>
          <button type="submit" disabled={formStatus === 'sending'}>
            {formStatus === 'sending' ? 'Enviando...' : 'Enviar mensagem'} <span>↗</span>
          </button>
          {formStatus === 'success' ? <p className="form-feedback form-feedback--success" role="status">Mensagem enviada com sucesso!</p> : null}
        </form>
      </div>
    </section>
  )
}
