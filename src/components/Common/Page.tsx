import { ReactNode } from 'react'

interface PageProps {
  padding: string
  children: ReactNode
}

export const Page = (props: PageProps) => {
  const {children, padding} = props
  return (
    <section className={`grid gap-10 relative ${padding}`}>
      {children}
    </section>
  )
}
