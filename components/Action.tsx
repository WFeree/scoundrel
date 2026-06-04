import React, { useState } from 'react'
import { Card, CardContent, CardTitle } from './ui/card'
import { Heart } from 'lucide-react'
import { Separator } from './ui/separator'


const Action = () => {
  return (
    <Card className='flex flex-col justify-center items-center overflow-y-scroll'>
      <CardTitle className="text-center">Action log</CardTitle>
      <CardContent className="flex flex-col gap-4 items-center  w-[80%]">
        Game started
        <Separator/>
        asd
        Game started
        <Separator/>
        asd
        Game started
        <Separator/>

      </CardContent>
    </Card>
  )
}

export default Action