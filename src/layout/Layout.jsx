import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1 mx-auto max-w-5xl w-full px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
