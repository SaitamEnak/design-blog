// ─── Automated Article Loader ──────────────────────────────────────────────────
// Este archivo escanea automáticamente la carpeta src/content/ en busca de archivos .mdx
// y extrae su metadata (frontmatter) para generar el índice del blog.

const modules = import.meta.glob('./content/*.mdx', { eager: true })

const articles = Object.keys(modules)
  .map((path) => {
    const file = modules[path]
    const slug = path.split('/').pop().replace('.mdx', '')

    // Extraer frontmatter inyectado por remark-mdx-frontmatter
    const meta = file.frontmatter || {}

    return {
      slug,
      ...meta,
    }
  })
  // Opcional: ordenar por módulo
  .sort((a, b) => parseInt(a.module) - parseInt(b.module))

export default articles
