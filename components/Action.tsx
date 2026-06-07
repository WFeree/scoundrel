import { Card, CardContent, CardTitle } from "./ui/card"
import { Separator } from "./ui/separator"

type ActionProps = {
  log: string[]
}

const Action = ({ log }: ActionProps) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <CardTitle className="text-center pt-4 shrink-0">Action log</CardTitle>
      <Separator className="my-2 shrink-0" />
      <CardContent className="flex flex-col items-center overflow-y-auto min-h-0 flex-1 px-4 pb-4">
        {log.map((entry, i) => (
          <div key={i} className="text-sm text-center w-full">
            {entry}
            <Separator className="my-2" />
          </div>
        ))}
        <span className="text-sm opacity-50">Game started</span>
      </CardContent>
    </Card>
  )
}

export default Action