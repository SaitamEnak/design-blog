export default function CaseStudy({ statement, items }) {
  return (
    <div className="my-6 rounded-xl overflow-hidden border border-stone-200">
      <div className="px-6 py-4" style={{ background: '#1a1814' }}>
        <p className="text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Problem statement
        </p>
        <p
          className="text-base italic leading-relaxed m-0"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: '#faf8f4' }}
        >
          "{statement}"
        </p>
      </div>
      <div className="divide-y divide-stone-100 px-6" style={{ background: '#f2efea' }}>
        {items.map((item, i) => (
          <div key={i} className="flex gap-3 py-3 items-start">
            <div
              className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
              style={{ background: '#2a7a5a' }}
            >
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-sm leading-relaxed m-0" style={{ color: '#4a4740' }}>
              <strong className="font-medium" style={{ color: '#1a1814' }}>{item.label}:</strong>{' '}
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
