import { Card, CardContent, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const Equip = () => {
  return (
    <Card className="flex flex-col justify-center items-center col-span-3">
      <CardContent className="flex gap-4 items-center">
        <Skeleton className="w-35 h-48 rounded border" />
      </CardContent>

      <CardTitle className="text-center">Equipped</CardTitle>
    </Card>
  );
};

export default Equip;