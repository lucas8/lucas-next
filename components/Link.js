export default function Link({ children, ...rest }) {
  return (
    <a
      className="font-mono text-transparent bg-clip-text cursor-pointer font-medium object-cover"
      style={{
        backgroundImage:
          'linear-gradient(90deg, #00C2F7 0%, #B743E2 50%, #FE0254 100%)',
      }}
      {...rest}
    >
      {children}
    </a>
  )
}
