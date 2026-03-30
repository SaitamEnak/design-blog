export default function BenefitGrid({ items }) {
  return (
    <div className="my-6 grid grid-cols-2 gap-px rounded-xl overflow-hidden border border-stone-200"
      style={{ background: '#e2ddd6' }}>
      {items.map((item, i) => (
        <div key={i} className="p-5" style={{ background: '#faf8f4' }}>
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#c05c2e' }} />
            <span className="text-sm font-medium text-stone-900">{item.label}</span>
          </div>
          <p className="text-xs leading-relaxed m-0" style={{ color: '#8a877f' }}>
            {item.text}
          </p>
        </div>
      ))}
    </div>
  )
}
