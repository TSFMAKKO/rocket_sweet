import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="text-center space-y-4">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="text-slate-600">Page not found.</p>
      <Link className="text-blue-600 underline" to="/">Go Home</Link>
    </section>
  )
}
