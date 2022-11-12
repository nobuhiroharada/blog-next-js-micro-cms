export function TwoColumn({ children }) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-12 mt-10 mb-10">
      {children}
    </div>
  )
}

export function TwoColumnMain({ children }) {
  return <div className="md:w-11/12 ">{children}</div>
}

export function TwoColumnSidebar({ children }) {
  return <div className="md:w-1/12">{children}</div>
}
