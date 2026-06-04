import { Button } from "./ui/button";
import { Card, CardAction, CardContent, CardTitle } from "./ui/card";

type CardType = {
  code: string;
  image: string;
  value: string;
  suit: string;
};

type RoomProps = {
  cards: CardType[];
};

const Room = ({ cards }: RoomProps) => {
  const slots = 4;

  return (
    <Card className="w-full flex col-span-3 flex-col justify-center items-center">
      <CardTitle className="text-center">Room</CardTitle>

      <CardContent className="flex gap-8 items-center">
        {Array.from({ length: slots }).map((_, index) => {
          const card = cards[index];

          return (
            <div key={index} className="w-35 rounded">
              <img
                src={card ? card.image : "./back.png"}
                alt={card ? card.code : "card back"}
              />
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