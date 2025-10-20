export default function SignupPage() {
  return (
    <section className="max-w-lg mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">Signup</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm">Name</label>
          <input className="mt-1 w-full border rounded px-3 py-2" type="text" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input className="mt-1 w-full border rounded px-3 py-2" type="email" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm">Password</label>
          <input className="mt-1 w-full border rounded px-3 py-2" type="password" placeholder="••••••••" />
        </div>
        <div>
          <button className="px-4 py-2 bg-green-600 text-white rounded">Create account</button>
        </div>
      </form>
    </section>
  )
}
