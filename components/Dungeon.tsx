import { Card, CardContent, CardTitle } from './ui/card'

const Dungeon = () => {
  return (
    <Card className='flex flex-col justify-center items-center'>
      <CardTitle className="text-center">Dungeon</CardTitle>
      <CardContent className="flex gap-4 items-center relative">
        <div className="w-30 h-48 bg-black/10 rounded border border-gray-900"></div>
      </CardContent>
    </Card>
  )
}

export default Dungeon