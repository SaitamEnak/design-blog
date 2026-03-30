# Centro de Aprendizaje · Diseño

Blog estático construido con Vite + React + MDX + Tailwind.

## Inicio rápido

```bash
npm install
npm run dev
```

## Agregar un nuevo artículo

1. Creá un archivo `.mdx` en `src/content/` — usá `problem-statements.mdx` como referencia.
2. Agregá una entrada en `src/articles.js`:

```js
{
  slug: 'nombre-del-archivo',   // sin .mdx
  title: 'Título del artículo',
  description: 'Descripción breve que aparece en el índice.',
  module: '02',
  category: 'UX Research',
  readTime: '6 min',
}
```

3. Listo. El artículo aparece automáticamente en el índice y tiene su propia URL.

## Componentes disponibles en MDX

Importalos al inicio de cada `.mdx`:

```mdx
import { Callout, Pullquote, BenefitGrid, CriteriaList, CompareRow, CaseStudy, SummaryCard } from '../components/mdx'
```

| Componente | Uso |
|---|---|
| `<Callout>` | Nota destacada con ícono |
| `<Pullquote>` | Cita en tipografía serif |
| `<BenefitGrid items={[]} />` | Grid 2×2 de beneficios |
| `<CriteriaList items={[]} />` | Lista numerada de criterios |
| `<CompareRow company bad good />` | Comparación vago vs efectivo |
| `<CaseStudy statement items={[]} />` | Caso de estudio con análisis |
| `<SummaryCard items={[]} />` | Resumen final en oscuro |

## Deploy en GitHub Pages

1. Creá el repo en GitHub con el nombre `design-blog`
2. En `vite.config.js`, verificá que `base` coincida con tu nombre de repo
3. Hacé push a `main`
4. En GitHub → Settings → Pages → Source: **GitHub Actions**

El workflow en `.github/workflows/deploy.yml` se encarga del resto automáticamente.

## Stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [MDX](https://mdxjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
