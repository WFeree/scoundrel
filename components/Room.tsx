import { Button } from "./ui/button"
import { Card, CardAction, CardContent, CardTitle } from "./ui/card"
import { Skeleton } from "./ui/skeleton"

type CardType = {
  code: string
  image: string
  value: string
  suit: string
}

type RoomProps = {
  cards: CardType[]
  onCardClick: (card: CardType, index: number) => void
  onAvoidRoom: () => void
  cardsPlayedThisRoom: number
  canAvoidRoom: boolean
}

const Room = ({ cards, onCardClick, onAvoidRoom, cardsPlayedThisRoom, canAvoidRoom }: RoomProps) => {
  const slots = 4
  const roomLocked = cardsPlayedThisRoom >= 3
  // Can only avoid before any card has been played this room
  const canAvoidNow = canAvoidRoom && cardsPlayedThisRoom === 0 && cards.length > 0

  return (
    <Card className="w-full flex col-span-3 flex-col justify-center items-center">
      <CardTitle className="text-center">Room</CardTitle>

      <CardContent className="flex gap-8 items-center">
        {Array.from({ length: slots }).map((_, index) => {
          const card = cards[index]
          const isClickable = !!card && !roomLocked

          return (
            <div
              key={index}
              className={`w-35 rounded transition ${
                isClickable
                  ? "cursor-pointer hover:scale-105"
                  : "opacity-40 cursor-not-allowed"
              }`}
              onClick={() => {
                if (isClickable) onCardClick(card, index)
              }}
            >
              {card ? (
                <img src={card.image} alt={card.code} />
              ) : (
                <Skeleton className="h-48 w-35 border rounded" />
              )}
            </div>
          )
        })}
      </CardContent>

      <CardAction className="mx-auto">
        <Button
          className="p-4 hover:cursor-pointer hover:scale-102 disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100"
          onClick={onAvoidRoom}
          disabled={!canAvoidNow}
          title={
            !canAvoidRoom
              ? "Cannot avoid two rooms in a row"
              : cardsPlayedThisRoom > 0
              ? "Cannot avoid after playing a card"
              : cards.length === 0
              ? "No room to avoid"
              : "Avoid this room"
          }
        >
          Avoid Room
        </Button>
      </CardAction>
    </Card>
  )
}

export default Room