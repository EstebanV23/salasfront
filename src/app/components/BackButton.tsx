'use client'
import { Button } from "@nextui-org/react";
import { IconArrowBackUp } from "@tabler/icons-react";
import Link from "next/link";


export default function BackButton({
  className
}: {
  className?: string
}) {
  return (
    <Button as={Link} href="/gestionar" className={className} variant="light" isIconOnly>
      <IconArrowBackUp className="text-gray-400 hover:text-gray-600 transition-colors" />
    </Button>
  )
}