"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { clearGame, hasSave } from "../../lib/gameStorage"

const page = () => {
  const router = useRouter()
  const [saveExists, setSaveExists] = useState(false)

  useEffect(() => {
    setSaveExists(hasSave())
  }, [])

  const handleNewGame = () => {
    clearGame()
    router.push("/game")
  }

  const handleContinue = () => {
    // Save stays in localStorage — game/page.tsx will pick it up on mount
    router.push("/game")
  }

  return (
    <div className="flex pt-55 items-center min-h-screen flex-col">
      <h1 className="text-4xl font-bold mb-10">SCOUNDREL</h1>
      <div className="flex mb-10 gap-4">
        <Button
          className="w-40 p-6 hover:cursor-pointer hover:scale-102"
          onClick={handleNewGame}
        >
          <Plus /> New Game
        </Button>
        <Button
          className="w-40 p-6 hover:cursor-pointer hover:scale-102 disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100"
          disabled={!saveExists}
          onClick={handleContinue}
          title={!saveExists ? "No saved game found" : "Continue your run"}
        >
          <ArrowRight /> Continue
        </Button>
      </div>
      {!saveExists && (
        <p className="text-sm text-muted-foreground">No saved game</p>
      )}
    </div>
  )
}

export default page