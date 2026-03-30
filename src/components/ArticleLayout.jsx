import { Link } from 'react-router-dom'

export default function ArticleLayout({ meta, children }) {
  return (
    <div className="min-h-screen" style={{ background: '#faf8f4' }}>
      {/* Top bar */}
      <header className="border-b border-stone-200 px-6 py-4">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm text-stone-400 hover:text-stone-700 transition-colors"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
              <path
                d="M13 8H3M7 4l-4 4 4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Inicio
          </Link>
          <span className="text-stone-200">/</span>
          <span className="text-sm text-stone-400 truncate">{meta.title}</span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-14 pb-24">
        {/* Article hero */}
        <div className="mb-10">

          <h1
            className="text-4xl md:text-5xl leading-tight mb-5 text-stone-900"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontWeight: 400 }}
          >
            {meta.title}
          </h1>
          <p
            className="text-lg leading-relaxed border-l-2 pl-4"
            style={{ color: '#4a4740', borderColor: '#c05c2e' }}
          >
            {meta.description}
          </p>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-xs text-stone-400">{meta.readTime} de lectura</span>
          </div>
        </div>

        {/* MDX content */}
        <div className="prose prose-stone max-w-none article-content">
          {children}
        </div>
      </main>

      <footer className="border-t border-stone-200 px-6 py-6">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm text-stone-400 hover:text-stone-700 transition-colors"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
              <path
                d="M13 8H3M7 4l-4 4 4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Ver todos los artículos
          </Link>
          <span className="text-xs text-stone-400">Centro de Aprendizaje · UX Research</span>
        </div>
      </footer>
    </div>
  )
}
