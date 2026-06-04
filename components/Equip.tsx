import { Card, CardContent, CardTitle } from "./ui/card"

const Equip = () => {
  return (
    <Card className="flex flex-col justify-center items-center col-span-3">
      <CardContent className="flex gap-4 items-center">
        <div className="w-30 h-48 bg-black/10 rounded border border-gray-900"></div>
      </CardContent>
      <CardTitle className="text-center">Equipped</CardTitle>
    </Card>
  )
}

export default Equip