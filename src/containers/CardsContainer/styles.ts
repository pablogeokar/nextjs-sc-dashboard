import styled from 'styled-components'

type ContainerProps = {
  minWidth: string
  maxWidth: string
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.minWidth}, ${props => props.maxWidth}));  
  padding: 8px;
  justify-content: center;
`