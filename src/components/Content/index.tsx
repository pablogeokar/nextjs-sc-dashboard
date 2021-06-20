import { ReactNode } from 'react'
import { useGlobal } from '../../contexts/GlobalContext'
import { Container } from './styles'

interface IContentProps {
  children?: ReactNode
}

export default function Content({ children }: IContentProps) {
  const { isToggle } = useGlobal()
  return (
    <Container isToggle={isToggle}>
      {children}
    </Container>
  )
}
