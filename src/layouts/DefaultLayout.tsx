import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const DefaultLayout = ({children}: Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <main className="overflow-y-auto overflow-x-hidden shadow-custom w-[420px] max-w-[95vw] h-[98vh] md:h-[90vh] max-h-[850px] bg-white rounded-[30px]">
        <div className="relative z-50 text-customBlack h-full">
          {children}
        </div>
      </main>
    </div>
  )
}
