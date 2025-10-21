import { NavLink } from 'react-router-dom'

export default function Cart() {
  return (
    <section className="max-w-lg mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">購物車</h1>
      <NavLink to="/checkout/transport" className={({ isActive }) => `${isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'} py-[20px]`}>
        運送
      </NavLink>

    </section>
  )
}