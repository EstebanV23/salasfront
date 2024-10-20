import { Button, Tooltip } from "@nextui-org/react";
import { IconSquareRoundedPlusFilled } from "@tabler/icons-react";
import Link from "next/link";

export default function CreateButton() {
  return (
    <Tooltip content="Crear sala" placement="bottom">
      <Button as={Link} href="/crear" variant="light" isIconOnly>
        <IconSquareRoundedPlusFilled className="text-gray-400" />
      </Button>
    </Tooltip>
  )
}