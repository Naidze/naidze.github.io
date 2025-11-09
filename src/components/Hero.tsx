import './Hero.less'

function Hero() {
  return (
    <section className="hero" role="banner">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-greeting">Hello! I'm</span>
          <h1 className="hero-title">Mantas Naidzinavičius</h1>
          <p className="hero-subtitle">Full-Stack Developer & Software Engineer</p>
          <p className="hero-description">
            Building elegant solutions to complex problems with modern technologies.
          </p>
        </div>
        <div className="hero-code">
          <div className="code-block">
            <div className="code-header">
              <span className="code-dot"></span>
              <span className="code-dot"></span>
              <span className="code-dot"></span>
              <span className="code-title">developer.js</span>
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="code-comment">// Software Engineer</span>
              </div>
              <div className="code-line">
                <span className="code-keyword">const</span>{' '}
                <span className="code-variable">developer</span> = {'{'}
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="code-property">name</span>:{' '}
                <span className="code-string">'Mantas Naidzinavičius'</span>,
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="code-property">skills</span>:{' '}
                {'['}
                <span className="code-string">'Java', 'React'</span>
                {']'}
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="code-property">focuses</span>:{' '}
                {'['}
                <span className="code-string">'Full-Stack', 'UI/UX'</span>
                {']'}
              </div>
              <div className="code-line">{'};'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
