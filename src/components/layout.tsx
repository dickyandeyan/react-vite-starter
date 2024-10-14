import { useLocation } from 'react-router-dom'

const authPages = ['/login']

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const params = useLocation()

  if (authPages.includes(params.pathname)) {
    return (
      <div className="h-svh flex items-center justify-center bg-gray-900 text-white">
        {children}
      </div>
    )
  }

  return (
    <div className="h-svh flex items-center justify-center">{children}</div>
  )
}
