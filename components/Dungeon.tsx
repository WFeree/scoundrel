import { Card, CardAction, CardContent, CardTitle } from './ui/card'
import { Button } from './ui/button'

type DungeonProps = {
  cardsRemaining: number
  onDrawRoom: () => void
  roomActive: boolean
  roomDone: boolean
}

const Dungeon = ({ onDrawRoom, cardsRemaining, roomActive, roomDone }: DungeonProps) => {
  const canDraw = !roomActive || roomDone

  return (
    <Card className="flex flex-col justify-center items-center">
      <CardTitle className="text-center">Dungeon</CardTitle>

      <CardContent className="relative h-52 w-40">
        {Array.from({ length: Math.min(5, cardsRemaining) }).map((_, i) => (
          <img
            key={i}
            src="./back.png"
            alt="Card back"
            className="absolute w-35 rounded"
            style={{
              left: `${i * 4}px`,
              top: `${i * 4}px`,
            }}
          />
        ))}
        {cardsRemaining === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
            Empty
          </div>
        )}
      </CardContent>

      <CardAction className="mx-auto">
        <Button
          className="p-4 hover:cursor-pointer hover:scale-102 disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100"
          onClick={onDrawRoom}
          disabled={!canDraw || cardsRemaining === 0}
          title={
            !canDraw
              ? "Finish the current room first"
              : cardsRemaining === 0
              ? "Dungeon is empty"
              : "Draw a new room"
          }
        >
          Draw Room
        </Button>
      </CardAction>
    </Card>
  )
}

export default Dungeon