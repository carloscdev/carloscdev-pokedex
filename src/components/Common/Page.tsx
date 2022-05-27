import { ReactNode } from 'react'

interface PageProps {
  children: ReactNode
}

export const Page = (props: PageProps) => {
  const {children} = props
  return (
    <section className="grid gap-10 relative">
      {children}
    </section>
  )
}
