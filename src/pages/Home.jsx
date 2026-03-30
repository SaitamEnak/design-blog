import { Link } from 'react-router-dom'
import articles from '../articles'

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: '#faf8f4' }}>
      {/* Top bar */}
      <header className="border-b border-stone-200 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <span className="text-sm font-medium text-stone-400 tracking-wide uppercase">
            Centro de Aprendizaje
          </span>
          <span className="text-xs text-stone-400">UX Research · Producto · Estrategia</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-amber-700 mb-3">
            Guías de aprendizaje
          </p>
          <h1
            className="text-4xl md:text-5xl leading-tight mb-4 text-stone-900"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontWeight: 400 }}
          >
            Investigación y Producto
          </h1>
          <p className="text-lg text-stone-500 max-w-xl leading-relaxed">
            Una colección de guías prácticas sobre investigación generativa, metodologías con usuarios y estrategia de producto.
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-8 mb-12 pb-8 border-b border-stone-200">
          <div>
            <div className="text-2xl font-medium text-stone-900">{articles.length}</div>
            <div className="text-xs text-stone-400 mt-0.5">
              {articles.length === 1 ? 'Artículo' : 'Artículos'}
            </div>
          </div>

        </div>

        {/* Article list */}
        <div className="space-y-4">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/articulo/${article.slug}`}
              className="group block bg-white border border-stone-200 rounded-xl p-6 hover:border-stone-300 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">

                  <h2
                    className="text-xl text-stone-900 mb-1.5 group-hover:text-amber-800 transition-colors"
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontWeight: 400 }}
                  >
                    {article.title}
                  </h2>
                  <p className="text-sm text-stone-500 leading-relaxed">{article.description}</p>
                </div>
                <div className="flex flex-col items-end gap-2 flex-shrink-0">
                  <span className="text-xs text-stone-400">{article.readTime}</span>
                  <svg
                    className="w-4 h-4 text-stone-300 group-hover:text-amber-600 transition-colors"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-stone-200 px-6 py-6 mt-16">
        <div className="max-w-3xl mx-auto text-center text-xs text-stone-400">
          Centro de Aprendizaje · UX Research
        </div>
      </footer>
    </div>
  )
}
