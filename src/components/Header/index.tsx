import ButtonToggleMenu from '../ButtonToggleMenu'
import styled from 'styled-components'

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: #fff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  z-index: 100;
  transition: left 300ms;
  left: var(--Sidebar-width);
  width: calc(100% - var(--Sidebar-width));

  div{
    display: flex; 
    justify-content: center;    
    align-items: center;        

    h2{      
      color: #222;
      margin-left: 20px;
    }
  }

  @media only screen and (max-width: 1200px) {    
    width: calc(100% - 70px);
    left: 70px;
  }

  @media only screen and (max-width: 768px) {    
    width: 100% !important;
    left: 0 !important;

    div{
      flex-direction: column; 
      h2{
        margin-left: 0;
        font-size: 1.1rem;
      }
    }  
  }
`

export default function Header() {
  return (
    <Container>
      <div>
        <ButtonToggleMenu />
        <h2>Início</h2>
      </div>
    </Container>
  )
}