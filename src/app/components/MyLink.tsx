'use client'
import { Link, LinkProps } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function MyLink({
  children,
  href,
  ...props
}: Readonly<{
  children: React.ReactNode
  href: string
  props?: LinkProps
}>) {
  const router = useRouter()
  const isActive = router.pathname === href
  return (
    <Link {...props} color={isActive ? 'warning' : 'foreground'}>
      {children}
    </Link>
  )
}