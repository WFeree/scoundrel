import { Card, CardContent, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

type ActionProps = {
  log: string[];
};

const Action = ({ log }: ActionProps) => {
  return (
    <Card className="flex flex-col justify-center items-center overflow-y-scroll">
      <CardTitle className="text-center">Action log</CardTitle>

      <CardContent className="flex flex-col gap-2 items-center w-[80%]">
        <Separator />

        {log.length === 0 ? (
          <span className="text-sm opacity-50">Game started</span>
        ) : (
          log.map((entry, i) => (
            <div key={i} className="text-sm text-center w-full">
              {entry}
              <Separator className="my-2" />
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default Action;