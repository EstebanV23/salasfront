export default function Container({
  children,
  className
}: Readonly<{
  children: React.ReactNode
  className?: string
}>) {
  return (
    <div className={`w-screen max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}