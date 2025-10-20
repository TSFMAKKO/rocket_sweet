import { Link, Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="border-b bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/30">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center gap-4">
          <div className="font-bold">rocket_sweet</div>
          <nav className="flex items-center gap-3 text-sm">
            <Link className="text-slate-700 hover:text-blue-600" to="/">Index</Link>
            <Link className="text-slate-700 hover:text-blue-600" to="/about">About</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 mx-auto max-w-5xl w-full px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t text-center text-xs text-slate-500 py-4">© {new Date().getFullYear()} rocket_sweet</footer>
    </div>
  )
}

export default AppLayout
