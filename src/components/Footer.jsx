export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-700/60">
      <div className="container-shell py-6 md:py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1 text-sm text-slate-400">
            <span className="tracking-[0.18em] uppercase text-slate-500">
              © {new Date().getFullYear()}
            </span>
            <span className="text-slate-200">Tiziano Dall’Omo</span>
          </div>

          <div className="flex flex-col items-start gap-1 text-sm text-slate-400 md:items-end">
            <span className="tracking-[0.12em] uppercase text-slate-500">
              Developed & Designed
            </span>

            <div className="flex items-center gap-2">
              <span>with</span>
              <span className="text-sky-300">💙</span>
              <span>by</span>
              <a
                href="https://sofiavidotto.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-200 transition hover:text-sky-300"
              >
                Sofia Vidotto
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
