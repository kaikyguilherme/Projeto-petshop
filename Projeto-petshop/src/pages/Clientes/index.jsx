import './style.css'

const services = [
  {
    icon: '🫧',
    title: 'Banho e tosa',
    description:
      'Um banho gostoso e uma tosa caprichada, sempre com produtos suaves e muito carinho.',
  },
  {
    icon: '🩺',
    title: 'Consulta veterinária',
    description:
      'Acompanhamento atencioso, check-ups e orientação para manter a saúde do seu melhor amigo em dia.',
  },
  {
    icon: '💉',
    title: 'Vacinação',
    description:
      'Vacinas e vermifugação com todo o cuidado para proteger quem faz parte da família.',
  },
  {
    icon: '🏡',
    title: 'Hotelzinho e creche',
    description:
      'Um espaço seguro para brincar, fazer novos amigos e receber atenção enquanto você cuida da rotina.',
  },
  {
    icon: '🚐',
    title: 'Táxi pet',
    description:
      'Busca e entrega com conforto e segurança para facilitar o dia a dia de vocês.',
  },
  {
    icon: '🦴',
    title: 'Loja e farmácia',
    description:
      'Rações, petiscos, brinquedos, acessórios e medicamentos escolhidos para o bem-estar do seu pet.',
  },
]

export default function Clientes() {
  return (
    <section className="services" id="servicos" aria-labelledby="services-title">
      <div className="section-heading">
        <span className="eyebrow">Cuidado de verdade, pertinho de você</span>
        <h2 id="services-title">Tudo o que seu melhor amigo precisa</h2>
        <p>
          Do banho à consulta, cuidamos de cada detalhe para ver seu pet feliz,
          saudável e cheio de energia.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <div className="service-card-top">
              <span className="service-icon" aria-hidden="true">
                {service.icon}
              </span>
              <span className="service-number">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
