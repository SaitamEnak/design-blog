export default function CriteriaList({ items }) {
  return (
    <ul className="my-6 list-none p-0 divide-y divide-stone-200">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 py-3.5 items-start">
          <span
            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium mt-0.5"
            style={{ background: '#fdf0ea', color: '#c05c2e' }}
          >
            {i + 1}
          </span>
          <div>
            <div className="text-sm font-medium text-stone-900">{item.name}</div>
            <div className="text-xs mt-0.5 leading-relaxed" style={{ color: '#8a877f' }}>
              {item.desc}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
