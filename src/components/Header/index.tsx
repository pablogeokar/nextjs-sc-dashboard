import ButtonToggleMenu from '../ButtonToggleMenu'
import { useGlobal } from '../../contexts/GlobalContext'
import styled from 'styled-components'

interface IHeaderProps {
  isToggle?: boolean
}


const Container = styled.header<IHeaderProps>`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: #fff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);  
  position: relative;  
  top: 0;    
  transition: all 0.5s ease;
  left: ${props => props.isToggle ? 'calc(var(--Sidebar-width) - 180px)' : `var(--Sidebar-width)`};  
  width: ${props => props.isToggle ? 'calc(100% - 80px)' : `calc(100% - var(--Sidebar-width))`};

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
    width: calc(100% - 78px);
  left: 78px;
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
  const { isToggle } = useGlobal()
  return (
    <Container isToggle={isToggle}>
      <div>
        <ButtonToggleMenu />
        <h2>Início</h2>
      </div>
    </Container>
  )
}