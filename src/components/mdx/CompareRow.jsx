export default function CompareRow({ company, bad, good }) {
  return (
    <div className="my-6">
      <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: '#8a877f' }}>
        {company}
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg p-4 border" style={{ background: '#fdeaea', borderColor: '#f0c0c0' }}>
          <div className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: '#c04040' }}>
            Vago
          </div>
          <p className="text-sm italic leading-snug m-0" style={{ color: '#7a3030' }}>{bad}</p>
        </div>
        <div className="rounded-lg p-4 border" style={{ background: '#eaf5ef', borderColor: '#b0dcc8' }}>
          <div className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: '#2a7a5a' }}>
            Efectivo
          </div>
          <p className="text-sm italic leading-snug m-0" style={{ color: '#1a4a38' }}>{good}</p>
        </div>
      </div>
    </div>
  )
}
