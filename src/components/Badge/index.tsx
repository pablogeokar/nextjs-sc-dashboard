import { Container } from './styles'

interface IBadgeProps {
  color?: string
  value?: string
  icon?: string
}

export default function Badge({ color, value, icon }: IBadgeProps) {
  return (
    <Container color={color}>
      <a href="">
        <i className={icon} ></i>
        <span>{value}</span>
      </a>
    </Container>
  )
}
