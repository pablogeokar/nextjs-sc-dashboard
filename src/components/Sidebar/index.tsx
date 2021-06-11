import styled from 'styled-components'

// Configurações iniciais
const width = '300px'

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: ${width};  
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  overflow: hidden ;
  transition: width 300ms;

  @media only screen and (max-width: 1200px) {
    width: 70px;

    &:hover {
      width: ${width};
      z-index: 200;
    }
  }

  @media only screen and (max-width: 768px) {
    left: -100% !important;
  }
`

export default function Sidebar() {
  return (
    <Container>
      Menu
    </Container>
  )
}