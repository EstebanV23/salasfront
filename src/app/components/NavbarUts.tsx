'use client'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react"
import Image from "next/image"
import { Item } from "../interface/Item"
import { usePathname } from "next/navigation";
import Link from "next/link";



export const menuItems: Item[] = [
  {
    name: "Gestionar salas",
    link: "/gestionar",
  },
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Crear sala",
    link: "/crear",
  }
]

export default function NavbarUts() {
  const pathname = usePathname()

  return (
    <Navbar isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image
            src="https://www.redttu.edu.co/es/wp-content/uploads/2016/01/uts.png"
            width={500}
            height={500}
            className="h-12 object-cover object-center w-24"
            alt="UTS"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
        <Image
            src="https://www.redttu.edu.co/es/wp-content/uploads/2016/01/uts.png"
            width={500}
            height={500}
            className="h-12 object-cover object-center w-24"
            alt="UTS"
          />
        </NavbarBrand>
        {
          menuItems.map((item, index) => (
            <NavbarItem key={`${item.name}-${index}`}>
              <Link
                className={`px-4 py-2 rounded-md ${pathname === item.link ? "text-green-600 bg-green-50" : ""}`}
                href={item.link}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))
        }
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className={pathname === item.link ? "text-green-600" : ""}
              href={item.link}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}