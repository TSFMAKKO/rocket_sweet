export default function IndexPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">Index</h1>
      <p className="text-slate-600">這是首頁，Tailwind v4 已啟用。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-lg border p-4">
          <h2 className="font-semibold mb-2">卡片 A</h2>
          <p className="text-sm text-slate-500">使用 utilities 驗證樣式。</p>
        </div>
        <div className="rounded-lg border p-4">
          <h2 className="font-semibold mb-2">卡片 B</h2>
          <p className="text-sm text-slate-500">Vite + React + Tailwind v4。</p>
        </div>
      </div>
    </section>
  )
}
