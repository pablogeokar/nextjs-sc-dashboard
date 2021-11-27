import styled from 'styled-components'

interface IContentProps {
  isToggle?: boolean
}

export const Container = styled.div<IContentProps>`
  --sidebar-width : ${({ theme }) => theme.sidebar.width} ;

  display: flex;
  flex-direction: column;    
  position: relative;  
  padding: 5px;  
  left: 260px;
  top: 5px;
  transition: all 0.5s ease;  

  left: ${props => props.isToggle ? '78px' : `var(--sidebar-width)`};      
  width: ${props => props.isToggle ? 'calc(100% - 78px)' : `calc(100% - var(--sidebar-width))`};    

  @media only screen and (max-width: 1200px) {
    left: 78px;   
    width: calc(100% - 78px);
  }

  @media only screen and (max-width: 768px) {    
    left: ${props => props.isToggle ? '78px' : `0`};  
    width: ${props => props.isToggle ? 'calc(100% - 78px)' : `100%`};      
  }
`