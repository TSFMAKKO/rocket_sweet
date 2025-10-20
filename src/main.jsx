import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import AppLayout from './App.jsx'
import IndexPage from './pages/Index.jsx'
import AboutPage from './pages/About.jsx'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <IndexPage /> },
      { path: '/about', element: <AboutPage /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
