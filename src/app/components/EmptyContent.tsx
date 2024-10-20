import CreateButton from "./CreateButton";

export default function EmptyContent() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className=" font-medium text-gray-400">No hay contenido, si deseas crear una presiona aquí ⬇️</p>
      <CreateButton />
    </div>
  )
}