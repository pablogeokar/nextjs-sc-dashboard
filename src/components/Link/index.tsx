import NextLink from 'next/link'
import { ReactNode } from 'react'

interface ILinkProps {
  href: string,
  className?: string,
  children: ReactNode
}

export default function Link({ href, className, children }: ILinkProps) {
  return (
    <NextLink href={href}>
      <a className={className}>
        {children}
      </a>
    </NextLink>
  )
}