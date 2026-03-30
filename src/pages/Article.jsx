import { useParams, Link, Navigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import articles from '../articles'
import ArticleLayout from '../components/ArticleLayout'

// Importación dinámica de todos los MDX en content/
const modules = import.meta.glob('../content/*.mdx')

function buildImporter(slug) {
  const key = `../content/${slug}.mdx`
  if (!modules[key]) return null
  return lazy(modules[key])
}

export default function Article() {
  const { slug } = useParams()
  const meta = articles.find((a) => a.slug === slug)

  if (!meta) return <Navigate to="/" replace />

  const Content = buildImporter(slug)
  if (!Content) return <Navigate to="/" replace />

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <span className="text-sm text-stone-400">Cargando...</span>
        </div>
      }
    >
      <ArticleLayout meta={meta}>
        <Content />
      </ArticleLayout>
    </Suspense>
  )
}
