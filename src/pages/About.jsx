export default function AboutPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
      <p className="text-slate-600">這是關於頁面。此專案示範 React Router 與 Tailwind v4 整合。</p>
      <ul className="list-disc pl-6 text-slate-600">
        <li>React + Vite</li>
        <li>react-router-dom</li>
        <li>Tailwind CSS v4（Vite 插件）</li>
      </ul>
    </section>
  )
}
