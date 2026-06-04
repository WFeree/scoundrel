"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Plus } from "lucide-react"

type MenuProps = {
  highscore : number
}

const page = (props: MenuProps) => {
  return (
    <div className="flex pt-55 items-center min-h-screen flex-col">
      <h1 className="text-4xl font-bold mb-10">SCOUNDREL</h1>
      <div className="flex mb-10 gap-4">
         <Button className="py-6 hover:cursor-pointer"><Plus /> New Game</Button> 
         <Button className="p-6 hover:cursor-pointer" disabled><ArrowRight /> Continue</Button> 
        </div>
      <h3>High Score: {props.highscore | 0}</h3>
    </div>
  )
}

export default page
