"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { clearGame } from "../lib/gameStorage"

type GameOverlayProps = {
  type: "win" | "lose"
  health?: number
}

const GameOverlay = ({ type, health }: GameOverlayProps) => {
  const router = useRouter()
  const [visible, setVisible] = useState(false)
  const [countdown, setCountdown] = useState(4)

  useEffect(() => {
    // Slight delay before fading in so it doesn't flash immediately
    const showTimer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (!visible) return

    const interval = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(interval)
          clearGame()
          router.push("/menu")
        }
        return c - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [visible, router])

  const isWin = type === "win"

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      } ${isWin ? "bg-black/60" : "bg-black/75"}`}
    >
      <div
        className={`flex flex-col items-center gap-4 px-12 py-10 rounded-2xl border backdrop-blur-sm transition-transform duration-700 ${
          visible ? "scale-100" : "scale-95"
        } ${
          isWin
            ? "bg-emerald-950/80 border-emerald-500/40"
            : "bg-red-950/80 border-red-500/40"
        }`}
      >
        <span className="text-5xl">{isWin ? "⚔️" : "💀"}</span>

        <h2
          className={`text-4xl font-bold tracking-widest ${
            isWin ? "text-emerald-300" : "text-red-300"
          }`}
        >
          {isWin ? "VICTORIOUS" : "DEFEATED"}
        </h2>

        <p className="text-lg text-white/70">
          {isWin
            ? `You cleared the dungeon with ${health} HP remaining`
            : "Your health reached zero"}
        </p>

        <p className="text-sm text-white/40 mt-2">
          Returning to menu in {countdown}…
        </p>
      </div>
    </div>
  )
}

export default GameOverlay