'use client'
import { Button, Checkbox, Input, Textarea } from "@nextui-org/react";
import Container from "./Container";
import { IconBlockquote, IconNumber, IconUsersGroup } from "@tabler/icons-react";
import BackButton from "./BackButton";
import { useEffect, useState } from "react";
import { URL_BACK } from "../data/constantes";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function RegistroSala({
  id
}: {
  id?: string
}) {
  const [numSala, setNumSala] = useState('')
  const [capacidad, setCapacidad] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [disponibilidad, setDisponibilidad] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingSala, setLoadingSala] = useState(false)

  const router = useRouter()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
  }

  async function getSala() {
    const res = await fetch(`${URL_BACK}/salas/${id}/`, {
      method: 'GET'
    })
    if (!res.ok) {
      setLoadingSala(false)
      throw new Error('Error al cargar la sala')
    }
    const data = await res.json()
    setNumSala(data.numero_sala)
    setCapacidad(data.capacidad)
    setDescripcion(data.descripcion)
    setDisponibilidad(data.disponibilidad)
    setLoadingSala(false)
  }

  async function saveSala() {
    // fetch logic here
    const addUrl = id ? `${id}/` : ''
    const method = id ? 'PUT' : 'POST'
    const body = JSON.stringify({
      numero_sala: numSala,
      capacidad: Number(capacidad),
      descripcion,
      disponibilidad
    })
    const response = await fetch(`${URL_BACK}/salas/${addUrl}`, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
    setLoading(false)
    if (!response.ok) throw new Error('Error al guardar la sala')
    router.push('/gestionar')
  }

  function trimValue(setFn: (value: string) => void): (value: string) => void {
    return (value: string) => value.trim().length === 0 ? setFn('') : setFn(value)
  }

  useEffect(() => {
    if (!loading) return
    toast.promise(
      saveSala(),
      {
        loading: 'Guardando sala...',
        success: 'Sala guardada',
        error: 'Error al guardar la sala'
      }
    )
  }, [loading])

  useEffect(() => {
    if (!id || loadingSala) return
    setLoadingSala(true)
    toast.promise(
      getSala(),
      {
        loading: 'Cargando información de la sala...',
        success: 'Información recolectada',
        error: 'Error al cargar la sala'
      }
    )
  }, [])

  return (
    <Container className="py-10">
      <BackButton className="mb-8" />
      <h1 className="text-xl font-bold">{id ? 'Edición' : 'Registro'} de sala de informática</h1>
      <form className="py-6 flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex gap-3 items-end">
          <Input
            label="Número de sala" disabled={loading || loadingSala}
            placeholder="A123"
            startContent={<IconNumber className="text-gray-400" />}
            isRequired
            required
            onValueChange={trimValue(setNumSala)}
            type="text"
            value={numSala}
            name="numero_sala"
            labelPlacement="outside"
            description="Número de sala de informática para registrar"
          />
          <Input
            label="Capacidad" disabled={loading || loadingSala}
            placeholder="100"
            isRequired
            required
            startContent={<IconUsersGroup className="text-gray-400" />}
            type="number"
            value={capacidad}
            onValueChange={trimValue(setCapacidad)}
            name="capacidad"
            labelPlacement="outside"
            description="Personas que pueden estar en la sala"
          />
        </div>
        <Textarea
            label="Descripción" disabled={loading || loadingSala}
            placeholder="Esta sala está diseñada ..."
            isRequired
            required
            startContent={<IconBlockquote className="text-gray-400" />}
            name="descripcion"
            value={descripcion}
            onValueChange={trimValue(setDescripcion)}
            labelPlacement="outside"
            description="Descripción a detalle de la sala"
          />
        <div className="flex flex-col gap-2 w-min">
          <Checkbox name="disponibilidad" disabled={loading || loadingSala} isSelected={disponibilidad} onValueChange={setDisponibilidad}>
            Disponible
          </Checkbox>
          <small className="text-default-500 text-[12px] text-nowrap">
            Sala disponible para uso?
          </small>
        </div>
        <Button variant="flat" type="submit" color="success" className="mt-4">{id ? 'Editar' : 'Registrar'}</Button>
      </form>
    </Container>
  )
}