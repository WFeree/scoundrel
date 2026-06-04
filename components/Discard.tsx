import { Card, CardContent, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const Discard = () => {
  return (
    <Card className="flex flex-col justify-center items-center">
      <CardTitle className="text-center">Discard</CardTitle>

      <CardContent className="flex gap-4 items-center">
        <Skeleton className="w-35 h-48 rounded border" />
      </CardContent>
    </Card>
  );
};

export default Discard;