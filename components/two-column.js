export function TwoColumn({ children }) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-10 mt-10 md:mt-20">
      {children}
    </div>
  )
}

export function TwoColumnMain({ children }) {
  return <div className="md:w-10/12 ">{children}</div>
}

export function TwoColumnSidebar({ children }) {
  return <div className="md:w-2/12">{children}</div>
}
