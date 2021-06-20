import ButtonToggleMenu from '../ButtonToggleMenu'
import { useGlobal } from '../../contexts/GlobalContext'
import styled from 'styled-components'

interface IHeaderProps {
  isToggle?: boolean
}

interface IBadgeProps {
  color?: string
}

const Container = styled.header<IHeaderProps>`
  --sidebar-width:  ${({ theme }) => theme.sidebar.width} ;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: #fff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);  
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
    color: #222;
    margin-left: 20px;
    }    
  }

  .badges{
      display: flex;
      flex-direction: row;                  
      margin-right: 5px;            
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
    //width: 100% !important;
    //left: 0 !important;
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
const Badge = styled.div<IBadgeProps>`
    //display: flex;
    margin-left: 12px;

    a {
      position: relative;
    }

    i{
      font-size: 1.5rem;      
      color: #5e5c5ce6;
      z-index: 100;      
    }

    span{     
      display: flex ;
      justify-content: center;
      align-items: center;
      color: #fff;
      position: absolute;
      font-size: .8rem;
      font-weight: lighter;
      top: -8px;
      right: -10px;
      width: 20px;
      height: 20px;      
      border-radius: 50%;
      background-color: ${(props) => props.color}; 
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
        <Badge color='#c46210'>
          <a href="">
            <i className='bx bx-bell' ></i>
            <span>1</span>
          </a>
        </Badge>
        <Badge color='#673ab7'>
          <a href="">
            <i className='bx bx-envelope'></i>
            <span>12</span>
          </a>
        </Badge>
      </div>
    </Container>
  )
}