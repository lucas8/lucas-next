export default function Link({ children, ...rest }) {
  return (
    <a
      className="font-mono text-transparent bg-clip-text cursor-pointer font-medium object-cover"
      style={{
        backgroundImage:
          'linear-gradient(90deg, #00C2F7 44.27%, #B743E2 71.35%, #FE0254 100%)',
      }}
      {...rest}
    >
      {children}
    </a>
  )
}
