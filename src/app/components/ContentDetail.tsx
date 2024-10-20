export default function ContentDetail({
  children,
  startContent
}: {
  children: React.ReactNode
  startContent: React.ReactNode
}) {
  return (
    <div className="flex gap-1">
      <div className="flex flex-col items-center justify-center">
        {startContent}
      </div>
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  )
}