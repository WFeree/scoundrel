import { Card, CardContent, CardTitle } from "./ui/card"
import { Skeleton } from "./ui/skeleton"

type CardType = {
  code: string
  image: string
  value: string
  suit: string
}

type EquipProps = {
  weaponCard: CardType | null
  // null = fresh (can fight anything), number = max monster value it can now fight (strictly less than)
  weaponDurability: number | null
}

const Equip = ({ weaponCard, weaponDurability }: EquipProps) => {
  return (
    <Card className="flex flex-col justify-center items-center col-span-3">
      <CardTitle className="text-center mb-2">Equipped Weapon</CardTitle>
      <CardContent className="flex gap-4 items-center">
        {weaponCard ? (
          <div className="flex flex-col items-center gap-2">
            <img
              src={weaponCard.image}
              alt={weaponCard.code}
              className="w-35 rounded"
            />
            {weaponDurability !== null ? (
              <span className="text-xs text-muted-foreground">
                Can fight monsters &lt; {weaponDurability}
              </span>
            ) : (
              <span className="text-xs text-muted-foreground">
                Fresh — can fight any monster
              </span>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <Skeleton className="w-35 h-48 rounded border" />
            <span className="text-xs text-muted-foreground">No weapon equipped</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default Equip