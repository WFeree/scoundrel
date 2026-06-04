"use client"
import { ArrowRight, Plus } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

type MenuProps = {
  highscore : number
}

const page = (props: MenuProps) => {
  return (
    <div className="flex mt-55 items-center min-h-screen flex-col">
      <h1 className="text-4xl font-bold mb-10">SCOUNDREL</h1>
      <div className="flex mb-10 gap-4">
         <button className="flex gap-2 border-2 p-2 rounded-md hover:cursor-pointer hover:scale-102 transition"><Plus /> New Game</button> 
         <button className="flex gap-2 border-2 p-2 rounded-md hover:cursor-pointer hover:scale-102 transition"><ArrowRight /> Continue</button> 
        </div>
      <h3>High Score: {props.highscore | 0}</h3>
    </div>
  )
}

export default page
