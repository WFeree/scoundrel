import { Button } from "./ui/button";
import { Card, CardAction, CardContent, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

type CardType = {
  code: string;
  image: string;
  value: string;
  suit: string;
};

type RoomProps = {
  cards: CardType[];
  onCardClick: (card: CardType, index: number) => void;
};

const Room = ({ cards, onCardClick }: RoomProps) => {
  const slots = 4;

  return (
    <Card className="w-full flex col-span-3 flex-col justify-center items-center">
      <CardTitle className="text-center">Room</CardTitle>

      <CardContent className="flex gap-8 items-center">
        {Array.from({ length: slots }).map((_, index) => {
          const card = cards[index];

          return (
            <div
              key={index}
              className="w-35 rounded cursor-pointer hover:scale-105 transition"
              onClick={() => {
                if (card) onCardClick(card, index);
              }}
              data-card-code={card?.code}
              data-card-value={card?.value}
              data-card-suit={card?.suit}
            >
              {card ? (
                <img src={card.image} alt={card.code} />
              ) : (
                <Skeleton className="h-48 w-35 border rounded" />
              )}
            </div>
          );
        })}
      </CardContent>

      <CardAction className="mx-auto">
        <Button className="p-4 hover:cursor-pointer hover:scale-102">
          Avoid Room
        </Button>
      </CardAction>
    </Card>
  );
};

export default Room;