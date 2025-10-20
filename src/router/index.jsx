import { createHashRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Index'
import About from '../pages/About'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import NotFound from '../pages/NotFound'

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />, // 所有頁面共用這個 Layout
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default router
