"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart } from "lucide-react"
import { useState } from "react"

const page = () => {
  const [health, setHealth] = useState<number>(20)
  return (
    <div className="flex pt-10 items-center min-h-screen flex-col">
      <h1 className="text-4xl font-bold mb-10">SCOUNDREL</h1>
      <div className="grid grid-cols-5 grid-rows-2 gap-4 w-full min-h-200 p-4">
        <div className="border">
          <h1>dungeon</h1>
        </div>
        <div className="border col-span-3">
          <h1>room</h1>
        </div>
        <div className="border">
          <h1>throwaway</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Card>
            <CardContent className="flex gap-4 items-center">
              <Heart size={24} strokeWidth={4} color={"red"}/>
              <span className="text-2xl">{health}</span>
            </CardContent>
          </Card>
        </div>
        <div className="border col-span-3">
          <h1>equipped</h1>
        </div>
        <div className="border">
          <h1>action</h1>
        </div>
      </div>
    </div>
  )
}

export default page
