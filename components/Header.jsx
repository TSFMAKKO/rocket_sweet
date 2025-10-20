import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="border-b bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/30">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center gap-4">
        <div className="font-bold">rocket_sweet</div>
        <nav className="flex items-center gap-3 text-sm">
          <Link className="text-slate-700 hover:text-blue-600" to="/">Index</Link>
          <Link className="text-slate-700 hover:text-blue-600" to="/about">About</Link>
          <Link className="text-slate-700 hover:text-blue-600" to="/login">Login</Link>
          <Link className="text-slate-700 hover:text-blue-600" to="/signup">Signup</Link>
        </nav>
      </div>
    </header>
  );
}
