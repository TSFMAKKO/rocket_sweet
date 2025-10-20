export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white/60">
      <div className="mx-auto max-w-5xl w-full px-4 py-6 text-xs text-gray-500 flex items-center justify-between">
        <span>© {year} Rocket Sweet</span>
        <a
          href="https://github.com/TSFMAKKO/rocket_sweet"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-700"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}
