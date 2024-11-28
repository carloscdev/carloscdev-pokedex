import { ReactNode } from 'react'

interface PageProps {
  padding: string
  children: ReactNode
}

export const Page = (props: PageProps) => {
  const {children, padding} = props
  return (
    <section className={`flex flex-col gap-6 h-full justify-between relative ${padding}`}>
      {children}
    </section>
  )
}
