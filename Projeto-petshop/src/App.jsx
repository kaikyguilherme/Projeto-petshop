import Clientes from './pages/Clientes'
import Footer from './components/Footer'
import Header from './components/Footer/Header'
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <span className="hero-badge">
              <span aria-hidden="true">♥</span> Feito com amor por eles
            </span>
            <h1>
              Seu pet merece
              <br />
              <span>todo esse carinho.</span>
            </h1>
            <p>
              No Amigo Fiel, cada focinho é único. A gente cuida, protege e
              celebra a alegria de ter um melhor amigo por perto.
            </p>
            <a className="hero-button" href="#servicos">
              Conheça nossos serviços <span aria-hidden="true">→</span>
            </a>
            <div className="hero-note">
              <span className="hero-note-icon" aria-hidden="true">
                ✦
              </span>
              Cuidado completo para cães e gatos
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <span className="hero-sparkle sparkle-one">✦</span>
            <span className="hero-sparkle sparkle-two">✦</span>
            <span className="hero-paw">🐾</span>
            <div className="pet-illustration">
              <span className="pet-dog">🐶</span>
              <span className="pet-cat">🐱</span>
            </div>
            <span className="hero-art-caption">Amor em cada cuidado</span>
          </div>
        </section>

        <Clientes />
      </main>
      <Footer />
    </>
  )
}
