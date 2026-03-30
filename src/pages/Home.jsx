import { Link } from 'react-router-dom'
import articles from '../articles'

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: '#faf8f4' }}>
      {/* Top bar */}
      <header className="border-b border-stone-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-sm font-medium text-stone-500 tracking-wide uppercase">
            Centro de Aprendizaje
          </span>
          <span className="text-xs text-stone-500">UX Research · Producto · Estrategia</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-amber-800 mb-3">
            Guías de aprendizaje
          </p>
          <h1
            className="text-4xl md:text-5xl leading-tight mb-4 text-stone-900"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontWeight: 400 }}
          >
            Investigación y Producto
          </h1>
          <p className="text-lg text-stone-600 max-w-xl leading-relaxed">
            Una colección de guías prácticas sobre investigación generativa, metodologías con usuarios y estrategia de producto.
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-8 mb-12 pb-8 border-b border-stone-200">
          <div>
            <div className="text-2xl font-medium text-stone-900">{articles.length}</div>
            <div className="text-xs text-stone-600 mt-0.5">
              {articles.length === 1 ? 'Artículo' : 'Artículos'}
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/articulo/${article.slug}`}
              className="group flex flex-col bg-white border border-stone-200 rounded-xl p-6 hover:border-stone-300 transition-all hover:shadow-sm"
            >
              <div className="flex-1">
                <h2
                  className="text-xl text-stone-900 mb-3 group-hover:text-amber-800 transition-colors"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontWeight: 400 }}
                >
                  {article.title}
                </h2>
                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  {article.description}
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-50">
                <span className="text-xs text-stone-600">{article.readTime}</span>
                <svg
                  className="w-4 h-4 text-stone-400 group-hover:text-amber-600 transition-all transform group-hover:translate-x-0.5"
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
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-stone-200 px-6 py-6 mt-16">
        <div className="max-w-6xl mx-auto text-center text-xs text-stone-600">
          Centro de Aprendizaje · UX Research
        </div>
      </footer>
    </div>
  )
}
