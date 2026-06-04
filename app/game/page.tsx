"use client"

import Action from "@/components/Action"
import Discard from "@/components/Discard"
import Dungeon from "@/components/Dungeon"
import Equip from "@/components/Equip"
import Health from "@/components/Health"
import Room from "@/components/Room"

const page = () => {

  return (
    <div className="flex pt-9 items-center min-h-screen flex-col">
      <h1 className="text-4xl font-bold">SCOUNDREL</h1>
      <h3 className="text-xl">CHOOSE CARDS</h3>
      <h4 className="text-md pb-10">3 REMAINS</h4>
      <div className="grid grid-cols-5 grid-rows-2 w-full min-h-150 gap-4">
        <Dungeon/>
        <Room />
        <Discard />
        <Health/>
        <Equip />
        <Action/>
      </div>
    </div>
  )
}

export default page
