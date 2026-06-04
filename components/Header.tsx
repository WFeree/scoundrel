import { LogOut } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

const Header = () => {
  return (
    <div className="flex justify-between w-screen px-6">
      <Link href={"/menu"}><Button className="p-6 w-35 hover:cursor-pointer hover:scale-102"><LogOut/>Save & Exit</Button></Link>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">SCOUNDREL</h1>
        <h3 className="text-xl">CHOOSE CARDS</h3>
        <h4 className="text-md pb-10">3 REMAINS</h4>
      </div>
      <div className="w-35"></div>
    </div>
  )
}

export default Header