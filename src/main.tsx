import routes from '@/routes/root'
import { QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import AuthProvider from 'react-auth-kit'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '@/App'
import '@/index.css'
import { queryClient } from './lib/queryClient'
import { authStore } from './modules/auth/store'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const container = document.getElementById('root') as HTMLElement

const root = createRoot(container)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes,
    errorElement: <div>error</div>,
  },
])

root.render(
  <StrictMode>
    <AuthProvider store={authStore}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider
          router={router}
          fallbackElement={<div>loading...</div>}
        />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
)
