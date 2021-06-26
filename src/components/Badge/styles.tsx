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
      color: #868383e6;
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