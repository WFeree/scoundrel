import React, { useState } from 'react'
import { Card, CardContent, CardTitle } from './ui/card'
import { Heart } from 'lucide-react'
import { Separator } from './ui/separator'


const Action = () => {
  return (
    <Card className='flex flex-col justify-center items-center'>
      <CardTitle className="text-center">Action log</CardTitle>
      <CardContent className="flex flex-col gap-4 items-center overflow-y-scroll">
        Game started
        <Separator/>
        asd
      </CardContent>
    </Card>
  )
}

export default Action