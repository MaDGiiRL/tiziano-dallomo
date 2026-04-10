export default function Footer() {
  return (
    <footer className="border-t border-slate-700/60 py-6">
      <div className="container-shell flex flex-col items-center justify-between gap-3 text-sm text-slate-400 md:flex-row">
        <div>© {new Date().getFullYear()} Tiziano Dall’Omo</div>
        <div className="flex items-center gap-2">
          <span>Developed & Designed with 💙 by</span>
          <a
            href="https://sofiavidotto.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-200 transition hover:text-sky-300"
          >
            Sofia Vidotto
          </a>
        </div>
      </div>
    </footer>
  )
}
