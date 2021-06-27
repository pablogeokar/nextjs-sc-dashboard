import ButtonToggleMenu from './ButtonToggleMenu'
import { useGlobal } from '../../contexts/GlobalContext'
import Badge from '../Badge'
import styled from 'styled-components'
import Search from './../Search/index';

interface IHeaderProps {
  isToggle?: boolean
}

const Container = styled.header<IHeaderProps>`
  --sidebar-width:  ${({ theme }) => theme.sidebar.width} ;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: #fff;  
  position: relative;  
  top: 0;   
  transition: all 0.5s ease;  
  left: ${props => props.isToggle ? '78px' : `var(--sidebar-width)`};      
  width: ${props => props.isToggle ? 'calc(100% - 78px)' : `calc(100% - var(--sidebar-width))`};  
  
  div{
    display: flex;
    justify-content: center;
    align-items: center;

  h2{
    color: #333;
    margin-left: 20px;
    }    
  }

  .badges{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;
      margin-right: 8px;     
    }

  @media only screen and (max-width: 1200px) {
    h2{
      position: relative;
      left: -30px;
    }
    width: calc(100% - 78px);
    left: 78px;
  }

  @media only screen and (max-width: 768px) {   

    left: ${props => props.isToggle ? '78px' : '0'};          
    width: ${props => props.isToggle ? `calc(100vw - 78px)` : '100%'};      

    div{
      flex-direction: column;
      h2{
        position: static;
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
      <div className="badges">
        <Search />
        <Badge color="#c46210" value="1" icon="bx bx-bell" />
        <Badge color="#673ab7" value="3" icon="bx bx-envelope" />
      </div>
    </Container>
  )
}