import { Chip, ChipProps } from "@nextui-org/react"

type ColorStatus = ChipProps["color"];

export const statusColorMap: {
  [key: string]: ColorStatus;
} = {
  active: "success",
  paused: "danger",
};

export default function ChipStatus({
  status
}: {
  status: boolean
}) {
  return (
    <Chip className="capitalize" color={status ? statusColorMap.active : statusColorMap.paused} size="sm" variant="flat">
      {status ? 'Disponible' : 'No disponible'}
    </Chip>
  )
}