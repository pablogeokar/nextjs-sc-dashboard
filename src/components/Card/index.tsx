import { Container } from './styles'

export default function Card() {
  return (
    <Container>
      <div className="content">
        <div className="header">
          <i className="las la-wallet"></i>
          <div>
            <span>Vendas no mês</span>
            <span>R$ 19.450,00</span>
          </div>
        </div>

        <div className="footer">
          <span>Maiores informações</span>
          <i className="las la-angle-right"></i>
        </div>
      </div>
    </Container>
  )
}
