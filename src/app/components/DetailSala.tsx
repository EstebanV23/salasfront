import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Tooltip } from "@nextui-org/react";
import Sala from "../interface/Sala";
import ContentDetail from "./ContentDetail";
import { IconBlockquote, IconCircleCheck, IconEdit, IconNumber, IconUsersGroup, IconXboxX } from "@tabler/icons-react";
import Link from "next/link";
import ChipStatus from "./ChipStatus";

export default function DetailSala({
  sala,
  isOpen,
  onOpenChange
}: {
  sala: Sala | null
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}) {

  if (!sala) return null

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center gap-1">
                Sala {sala.numero_sala}
                <Tooltip content="Editar sala">
                  <Button as={Link} href={`editar/${sala.id}`} className="text-lg text-default-400 cursor-pointer active:opacity-50" isIconOnly variant="light">
                    <IconEdit />
                  </Button>
                </Tooltip>
              </ModalHeader>
              <ModalBody>
                <ContentDetail
                  startContent={<IconNumber className="text-gray-400" />}
                >
                  <p><strong>Número de sala</strong>: {sala.numero_sala}</p>
                </ContentDetail>
                <ContentDetail
                  startContent={<IconUsersGroup className="text-gray-400" />}
                >
                  <p><strong>Capacidad</strong>: {sala.capacidad}</p>
                </ContentDetail>
                <ContentDetail
                  startContent={<IconBlockquote className="text-gray-400" />}
                >
                  <p><strong>Descripción</strong>: {sala.descripcion}</p>
                </ContentDetail>
                <ContentDetail
                  startContent={sala.disponibilidad ? <IconCircleCheck className="text-gray-400" /> : <IconXboxX className="text-gray-400" />}
                >
                  <p><strong>Estado</strong>: <ChipStatus status={sala.disponibilidad} /></p>
                </ContentDetail>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
  )
}