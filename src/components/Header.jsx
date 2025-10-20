import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-5xl w-full px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="text-lg font-semibold tracking-tight">
          Rocket Sweet
        </NavLink>
        <nav className="flex gap-4 text-sm">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}>
            About
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}>
            Login
          </NavLink>
          <NavLink to="/signup" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}>
            Signup
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
