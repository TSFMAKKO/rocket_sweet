import { NavLink } from 'react-router-dom'

const BASE_URL = import.meta.env.BASE_URL || '/'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-5xl w-full px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-[red]">
          <img src={BASE_URL + 'logo-all-dark.svg'} alt="Rocket Sweet" className="h-6 w-auto" />
        </NavLink>
        <nav className="flex gap-4 text-sm">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}>
            首頁
          </NavLink>
          <NavLink to="/product" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}>
            甜點
          </NavLink>
          <NavLink to="/signup" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}>
            登入
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}>
            <img src={BASE_URL + 'shopping_cart.png'} alt="購物車" className="h-5 w-5 inline-block" />
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
