import React from 'react'
import { Card, CardContent, CardTitle } from './ui/card'
import { Heart } from 'lucide-react'

type HealthProps = {
  health: number
  maxHealth: number
}

const Health = ({ health, maxHealth }: HealthProps) => {
  const pct = health / maxHealth

  const heartColor =
    pct > 0.5 ? 'green' : pct > 0.25 ? 'orange' : 'red'

  return (
    <Card className='flex flex-col justify-center items-center'>
      <CardTitle className="text-center">Health</CardTitle>
      <CardContent className="flex gap-4 items-center">
        <Heart size={24} strokeWidth={3} color={heartColor} />
        <span className="text-2xl">{health}</span>
        <span className="text-sm text-muted-foreground">/ {maxHealth}</span>
      </CardContent>
    </Card>
  )
}

export default Health