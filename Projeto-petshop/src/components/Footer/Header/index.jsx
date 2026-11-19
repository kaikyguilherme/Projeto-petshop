import './style.css'

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Amigo Fiel - início">
        <span className="brand-icon" aria-hidden="true">
          🐾
        </span>
        <span className="brand-name">
          <span>
            Amigo <strong>Fiel</strong>
          </span>
          <small>pet shop & cuidado</small>
        </span>
      </a>

      <nav className="site-nav" aria-label="Navegação principal">
        <a href="#inicio">Início</a>
        <a href="#servicos">Serviços</a>
        <a className="nav-contact" href="#contato">
          Fale com a gente <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  )
}
