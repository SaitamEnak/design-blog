export default function SummaryCard({ title = 'Lo que necesitás recordar', items }) {
  return (
    <div className="my-8 rounded-xl p-6" style={{ background: '#1a1814', color: '#faf8f4' }}>
      <h3
        className="text-2xl mb-5 mt-0"
        style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontWeight: 400, color: '#faf8f4' }}
      >
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-lg p-4 border"
            style={{ background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,255,255,0.1)' }}
          >
            <div className="text-xs font-medium mb-1" style={{ color: 'rgba(255,255,255,0.85)' }}>
              {item.label}
            </div>
            <div className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
