import { Container } from './styles'

export default function Search() {
  return (
    <Container>
      <i className="las la-search"></i>
      <input type="text" placeholder="O que você deseja buscar?" />
    </Container>
  )
}
