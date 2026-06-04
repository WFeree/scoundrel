"use client"

import Health from "@/components/Health"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardTitle } from "@/components/ui/card"

const page = () => {

  return (
    <div className="flex pt-10 items-center min-h-screen flex-col">
      <h1 className="text-4xl font-bold mb-10">SCOUNDREL</h1>
      <div className="grid grid-cols-5 grid-rows-2 gap-4 w-full min-h-200 p-4">
        <div className="flex flex-col justify-center items-center">
          <Card>
            <CardTitle className="text-center">Dungeon</CardTitle>
            <CardContent className="flex gap-4 items-center relative">
              <div className="w-30 h-48 bg-black/10 rounded border border-gray-900"></div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full flex col-span-3 flex-col justify-center items-center">
          <Card>
            <CardTitle className="text-center">Room</CardTitle>
            <CardContent className="flex gap-4 items-center relative">
              <div className="w-30 h-48 bg-black/10 rounded border border-gray-900"></div>
              <div className="w-30 h-48 bg-black/10 rounded border border-gray-900"></div>
              <div className="w-30 h-48 bg-black/10 rounded border border-gray-900"></div>
              <div className="w-30 h-48 bg-black/10 rounded border border-gray-900"></div>
            </CardContent>
            <CardAction className="mx-auto">
              <Button className="p-4 hover:cursor-pointer hover:scale-102">Avoid Room</Button>
            </CardAction>
          </Card>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Card>
            <CardTitle className="text-center">Throwaway</CardTitle>
            <CardContent className="flex gap-4 items-center relative">
              <div className="w-30 h-48 bg-black/10 rounded border border-gray-900"></div>
            </CardContent>
          </Card>
        </div>
        <Health/>
        <div className="flex flex-col justify-center items-center col-span-3">
          <Card>
            <CardContent className="flex gap-4 items-center relative">
              <div className="w-30 h-48 bg-black/10 rounded border border-gray-900"></div>
            </CardContent>
            <CardTitle className="text-center">Equipped</CardTitle>
          </Card>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default page
