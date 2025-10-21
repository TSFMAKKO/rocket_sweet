import { createHashRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Index'
import Product from '../pages/Product'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Cart from '../pages/Cart'
import NotFound from '../pages/NotFound'
import Transport from '../pages/Transport'
import Payment from '../pages/Payment'
import Invoice from '../pages/Invoice'
import Complete from '../pages/Complete'

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
            { path: 'checkout/transport', element: <Transport /> },
            { path: 'checkout/payment', element: <Payment /> },
            { path: 'checkout/invoice', element: <Invoice /> },
            { path: 'checkout/complete', element: <Complete /> },
            { path: '*', element: <NotFound /> },
        ],
    },
])

export default router
