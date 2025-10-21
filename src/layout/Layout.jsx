import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <div className="max-w-[940px] mx-auto flex flex-col">
      <Header />
      <main className=" mx-auto max-w-[940px] w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
