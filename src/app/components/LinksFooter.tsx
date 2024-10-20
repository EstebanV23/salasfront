'use client'
import Link from "next/link";
import { menuItems } from "./NavbarUts";

export default function LinksFooter() {
  return menuItems.map((item, index) => (
    <Link key={`${item.name}-${index}`} href={item.link} className="px-3 py-1 rounded-md hover:bg-green-500 transition-all bg-opacity-50 text-white">
      {item.name}
    </Link>
  ))
}