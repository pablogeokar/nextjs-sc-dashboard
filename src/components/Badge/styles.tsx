import styled from 'styled-components'

interface IBadgeProps {
  color?: string
}

export const Container = styled.div<IBadgeProps>`
  a {
      position: relative;
    }

    i{
      font-size: 1.4rem;      
      color: #303030;
      z-index: 100;      
    }

    span{     
      display: flex ;
      text-align: center;
      justify-content: center;
      align-items: center;
      color: #fff;
      position: absolute;
      font-size: .8rem;
      font-weight: lighter;
      top: -8px;
      right: -10px;      
      min-width: 20px;
      min-height: 20px;      
      border-radius: 50%;
      background-color: ${(props) => props.color}; 
    }          
`