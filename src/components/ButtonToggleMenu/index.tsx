import styled from 'styled-components'
import { useGlobal } from '../../contexts/GlobalContext'

const Container = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;   

  span{
    position: absolute;
    overflow: hidden;
    color: #222;
    font-size: 1.7rem;        
    cursor: pointer;
  }  
  input{
    display: none;
  }

  @media only screen and (max-width: 1200px) { 
    span{
      display: none;      
    }
   }

  @media only screen and (max-width: 768px) {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    height: 40px;
    width: 40px;
    color: #fff;    
    span{
      display: block;
      color: #fff;         
    }
  }
`

export default function ButtonToggleMenu() {
  const { isToggle, setIsToggle } = useGlobal()

  function handleToggle() {
    setIsToggle(!isToggle)
  }

  return (
    <Container>
      <span onClick={handleToggle}>
        <i className="las la-bars"></i>
      </span>
    </Container>
  )
}