import './style.css'

export default function Footer() {
  return (
    <footer className="site-footer" id="contato">
      <div className="footer-inner">
        <div>
          <a className="footer-brand" href="#inicio">
            Amigo <strong>Fiel</strong>
          </a>
          <p>Seu pet em boas patas, todos os dias.</p>
        </div>
        <div className="footer-contact">
          <a href="tel:+5571999999999">(71) 99999-9999</a>
          <a href="mailto:petshopteste@gmail.com">petshopteste@gmail.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          &copy; {new Date().getFullYear()} Amigo Fiel. Todos os direitos
          reservados.
        </span>
        <span>Feito com carinho para quem ama pets.</span>
      </div>
    </footer>
  )
}
