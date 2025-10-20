import { createHashRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Index'
import Product from '../pages/Product'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Cart from '../pages/Cart'
import NotFound from '../pages/NotFound'

const router = createHashRouter([
    {
        path: '/',
        element: <Layout />, // 所有頁面共用這個 Layout
        children: [
            { index: true, element: <Home /> },
            { path: 'product', element: <Product /> },
            { path: 'login', element: <Login /> },
            { path: 'signup', element: <Signup /> },
            { path: 'cart', element: <Cart /> },
            { path: '*', element: <NotFound /> },
        ],
    },
])

export default router
