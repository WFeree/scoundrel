"use client"

import { LogOut } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

type HeaderProps = {
  subtitle: string
  detail: string
  onSaveExit: () => void
}

const Header = ({ subtitle, detail, onSaveExit }: HeaderProps) => {
  const router = useRouter()

  const handleSaveExit = () => {
    onSaveExit()
    router.push("/menu")
  }

  return (
    <div className="flex justify-between w-screen px-6">
      <Button
        className="p-6 w-35 hover:cursor-pointer hover:scale-102"
        onClick={handleSaveExit}
      >
        <LogOut />Save & Exit
      </Button>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">SCOUNDREL</h1>
        <h3 className="text-xl">{subtitle}</h3>
        <h4 className="text-md pb-10">{detail}</h4>
      </div>
      <div className="w-35"></div>
    </div>
  )
}

export default Header