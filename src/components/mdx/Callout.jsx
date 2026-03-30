export default function Callout({ children, icon = '💡' }) {
  return (
    <div className="flex gap-3 my-6 p-4 rounded-lg border"
      style={{ background: '#fffbea', borderColor: '#f0d060' }}>
      <span className="text-base flex-shrink-0 mt-0.5">{icon}</span>
      <div className="text-sm leading-relaxed" style={{ color: '#4a4740' }}>
        {children}
      </div>
    </div>
  )
}
