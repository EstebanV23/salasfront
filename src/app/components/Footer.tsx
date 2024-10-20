
import Link from "next/link";
import Container from "./Container";
import { menuItems } from "./NavbarUts";
import LinksFooter from "./LinksFooter";


export default function Footer() {
  return (
    <footer className="flex p-10 bg-green-600">
      <Container>
        <div className="flex flex-col w-full justify-center sm:flex-row gap-10">
          <div className="sm:border-l-1 pl-2 border-t-1 sm:border-t-0">
            <h2 className="text-xl font-bold text-white">Proy. Salas de informática</h2>
            <p className="text-white">Proyecto dearrollado con Next JS y DJango</p>
          </div>
          <div className="sm:border-l-1 pl-2 border-t-1 sm:border-t-0">
            <h3 className="text-lg font-bold text-white">Links</h3>
            <aside className="flex flex-col gap-1">
              <LinksFooter />
            </aside>
          </div>
        </div>
        <div className="p-2 border-t-1 mt-10 sm:border-t-0">
          <h3 className="text-lg font-bold text-center text-white">Desarrollado por: Brayan Esteban Villamizar Fernandez</h3>
          <small className="text-white text-center block">El mejor desarrollador</small>
        </div>
      </Container>
    </footer>
  )
}