import { Container } from './styles'

type CardType = {
  title?: string
  value?: string
  iconClass?: string
  iconColor?: string
}

export default function Card({ title, value, iconClass, iconColor }: CardType) {
  return (
    <Container iconColor={iconColor}>
      <div className="content">
        <div className="header">
          <i className={iconClass}></i>
          <div>
            <span>{title}</span>
            <span>{value}</span>
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
