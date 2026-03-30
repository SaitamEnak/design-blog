export default function Pullquote({ children }) {
  return (
    <blockquote
      className="my-8 pl-5 py-3 rounded-r-lg"
      style={{
        borderLeft: '4px solid #c05c2e',
        background: '#fdf0ea',
      }}
    >
      <p
        className="text-lg italic leading-relaxed m-0"
        style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: '#1a1814' }}
      >
        {children}
      </p>
    </blockquote>
  )
}
