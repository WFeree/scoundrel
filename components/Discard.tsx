import { Card, CardContent, CardTitle } from "./ui/card"
import { Skeleton } from "./ui/skeleton"

type CardType = {
  code: string
  image: string
  value: string
  suit: string
}

type DiscardProps = {
  topCard: CardType | null
  count: number
}

const Discard = ({ topCard, count }: DiscardProps) => {
  return (
    <Card className="flex flex-col justify-center items-center">
      <CardTitle className="text-center">Discard</CardTitle>
      <CardContent className="flex flex-col gap-2 items-center">
        {topCard ? (
          <>
            <img
              src={topCard.image}
              alt={topCard.code}
              className="w-35 rounded"
            />
            <span className="text-xs text-muted-foreground">{count} card{count !== 1 ? "s" : ""}</span>
          </>
        ) : (
          <>
            <Skeleton className="w-35 h-48 rounded border" />
            <span className="text-xs text-muted-foreground">Empty</span>
          </>
        )}
      </CardContent>
    </Card>
  )
}

export default Discard