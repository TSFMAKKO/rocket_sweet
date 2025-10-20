import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import AppLayout from './App.jsx'
import IndexPage from './pages/Index.jsx'
import AboutPage from './pages/About.jsx'
import LoginPage from './pages/Login.jsx'
import SignupPage from './pages/Signup.jsx'

const router = createHashRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <IndexPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/signup', element: <SignupPage /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
