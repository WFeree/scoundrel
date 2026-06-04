import { Button } from "./ui/button"
import { Card, CardAction, CardContent, CardTitle } from "./ui/card"

const Room = () => {
  return (
    <Card className="w-full flex col-span-3 flex-col justify-center items-center">
      <CardTitle className="text-center">Room</CardTitle>
      <CardContent className="flex gap-8 items-center relative">
        <div className="w-30 h-48 bg-black/10 rounded border border-gray-900"></div>
        <div className="w-30 h-48 bg-black/10 rounded border border-gray-900"></div>
        <div className="w-30 h-48 bg-black/10 rounded border border-gray-900"></div>
        <div className="w-30 h-48 bg-black/10 rounded border border-gray-900"></div>
      </CardContent>
      <CardAction className="mx-auto">
        <Button className="p-4 hover:cursor-pointer hover:scale-102">Avoid Room</Button>
      </CardAction>
    </Card>
  )
}

export default Room