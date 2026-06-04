import React, { useState } from 'react'
import { Card, CardContent, CardTitle } from './ui/card'
import { Heart } from 'lucide-react'

const Health = () => {
  const [health, setHealth] = useState<number>(20)
  return (
    <Card className='flex flex-col justify-center items-center'>
      <CardTitle className="text-center">Health</CardTitle>
      <CardContent className="flex gap-4 items-center">
        <Heart size={24} strokeWidth={3} color={"red"}/>
        <span className="text-2xl">{health}</span>
      </CardContent>
    </Card>
  )
}

export default Health