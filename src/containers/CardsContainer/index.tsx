import { ReactNode } from 'react';
import { Container } from './styles'

type CardsType = {
  minWidth?: string
  maxWidth?: string
  children: ReactNode
}

export function CardsContainer({ minWidth = '330px', maxWidth = '1fr', children }: CardsType) {
  return (
    <Container minWidth={minWidth} maxWidth={maxWidth}>
      {children}
    </Container>
  )
}