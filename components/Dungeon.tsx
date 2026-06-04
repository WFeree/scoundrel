import Image from 'next/image'
import { Card, CardAction, CardContent, CardTitle } from './ui/card'
import { Button } from './ui/button'

type DungeonProps = {
  cardsRemaining: number;
  onDrawRoom: () => void;
};

const Dungeon = ({ onDrawRoom, cardsRemaining }: DungeonProps) => {
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
      </CardContent>

      <CardAction className="mx-auto">
        <Button
          className="p-4 hover:cursor-pointer hover:scale-102"
          onClick={onDrawRoom}
        >
          Draw Room
        </Button>
      </CardAction>
    </Card>
  );
};

export default Dungeon;