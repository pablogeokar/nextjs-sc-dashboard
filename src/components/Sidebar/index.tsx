import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 300px;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  overflow: hidden ;
`

export default function Sidebar() {
  return (
    <Container>
      Menu
    </Container>
  )
}