'use client'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, ChipProps, Skeleton, Button} from "@nextui-org/react"
import { columns } from "../data/tableComponents";
import { IconCpu, IconEdit, IconEye, IconTrash } from "@tabler/icons-react";
import { useCallback, useEffect, useState } from "react";
import Sala from "../interface/Sala";
import { URL_BACK } from "../data/constantes";
import toast from "react-hot-toast";
import Confirm from "./Confirm";
import EmptyContent from "./EmptyContent";
import CreateButton from "./CreateButton";
import Link from "next/link";
import DetailSala from "./DetailSala";
import ChipStatus from "./ChipStatus";

const SKELETON_ROWS = 5;

export default function TableSalas() {
  const [salas, setSalas] = useState<Sala[] | null>(null);
  const [sala, setSala] = useState<Sala | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const manageDelete = useCallback((id:number) => {
    toast((t) => (
      <Confirm
        title="Eliminar Sala"
        text="¿Está seguro que desea eliminar esta sala?"
        lblSuccess="Cancelar"
        lblCancel="Eliminar"
        fnCancel={() => {
          deleteSala(id)
          toast.dismiss(t.id)
        }}
        fnSuccess={() => toast.dismiss(t.id)}
      />
    ))
  }, [])

  function deleteSala(id: number) {
    fetch(`${URL_BACK}/salas/${id}/`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error al eliminar la sala");
        setSalas((prevSalas) => prevSalas && prevSalas.filter((sala) => sala.id !== id));
      })
      .catch((error) => {
        console.error("Error al eliminar la sala");
        console.error(error);
      });
  }

  useEffect(() => {
    fetch(`${URL_BACK}/salas/`, {
      method: "GET",
    })
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setSalas(data);
      })
      .catch((error) => {
        console.error("Error al cargar las salas");
        console.error(error);
      });
  }, [])

  const renderCell = useCallback((sala: Sala, columnKey: React.Key) => {
    const cellValue = sala[columnKey as keyof Sala];

    switch (columnKey) {
      case "name":
        return (
          <IconCpu size="20" className="mr-2" />
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">Sala: {sala.numero_sala}</p>
            <p className="text-bold text-sm capitalize text-default-400">{sala.descripcion}</p>
          </div>
        );
      case "people":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{sala.capacidad}</p>
          </div>
        );
      case "status":
        return (
          <ChipStatus status={sala.disponibilidad} />
        );
      case "actions":
        return (
          <div className="flex items-center gap-2 justify-center">
            <Tooltip content="Detalles de la sala">
              <Button className="text-lg text-default-400 cursor-pointer active:opacity-50" isIconOnly variant="light" onClick={() => {
                setSala(sala)
                setIsOpen(true)
              }}>
                <IconEye />
              </Button>
            </Tooltip>
            <Tooltip content="Editar Sala">
              <Button as={Link} href={`editar/${sala.id}`} className="text-lg text-default-400 cursor-pointer active:opacity-50" isIconOnly variant="light">
                <IconEdit />
              </Button>
            </Tooltip>
            <Tooltip color="danger" content="Eliminar sala">
              <Button className="text-lg text-danger cursor-pointer active:opacity-50" isIconOnly variant="light" color="danger" onClick={() => manageDelete(sala.id)} >
                <IconTrash />
              </Button>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, [manageDelete]);

  return (
    <>
      <h1 className="text-xl font-bold flex items-center gap-2">Gestionar salas de informática {Number(salas?.length) > 0 && <CreateButton />}</h1>
      <DetailSala
        sala={sala}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      />
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        {
          salas === null ? (
            <TableBody items={Array.from({ length: columns.length })}>
              { Array.from({ length: SKELETON_ROWS }).map((_, index) => (
                  <TableRow key={index+"skeletonrow"}>
                    {Array.from({ length: columns.length }).map((_, index) => (
                        <TableCell key={index+"skeletonrow"}>
                          <Skeleton className="h-3 w-full rounded-lg" />
                        </TableCell>
                      ))
                    }
                  </TableRow>
                ))
              }
            </TableBody>
          ) :
          <TableBody items={salas} emptyContent={<EmptyContent />}>
            {
              (item) => (
                  <TableRow key={item.id}>
                    {(columnKey) => <TableCell align="center">{renderCell(item, columnKey)}</TableCell>}
                  </TableRow>
              )
            }
        </TableBody>
        }
      </Table>
    </>
  );
}