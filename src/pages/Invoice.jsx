import { NavLink } from 'react-router-dom'

export default function Invoice() {
  return (
    <section className="max-w-lg mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">電子發票</h1>
      <p>這裡是電子發票 /checkout/invoice 頁面。</p>
        <NavLink to="/checkout/complete" className={({ isActive }) => `${isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'} py-[20px]`}>
                            付款成功
                        </NavLink> 
    </section>
  )
}
