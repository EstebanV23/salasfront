import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Banner() {
  return (
    <main className="h-[70vh]">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-black uppercase">Salas de informática</h1>
        <p className="text-lg mt-2">Tu software de gestión</p>
        <div className="mt-8">
          <Link
            href="/gestionar"
            className="px-6 py-3 text-green-600 bg-green-100 rounded-lg"
          >
            Gestionar
          </Link>
        </div>
      </div>
    </main>
  )
}