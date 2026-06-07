"use client"

import Action from "@/components/Action"
import Discard from "@/components/Discard"
import Dungeon from "@/components/Dungeon"
import Equip from "@/components/Equip"
import Header from "@/components/Header"
import Health from "@/components/Health"
import Room from "@/components/Room"
import GameOverlay from "@/components/GameOverlay"
import { useEffect, useRef, useState } from "react"
import { saveGame, loadGame, clearGame } from "../../lib/gameStorage"

type Card = {
  code: string
  image: string
  value: string
  suit: string
}

type GameEnd = "win" | "lose" | null

const MAX_HEALTH = 20
const CARDS_PER_ROOM = 3

const cardNumericValue = (value: string): number => {
  switch (value) {
    case "JACK":  return 11
    case "QUEEN": return 12
    case "KING":  return 13
    case "ACE":   return 14
    default:      return parseInt(value, 10)
  }
}

const excludedCards = [
  "AH", "KH", "QH", "JH",
  "AD", "KD", "QD", "JD",
]

const page = () => {
  const [deck, setDeck] = useState<Card[]>([])
  const [roomCards, setRoomCards] = useState<Card[]>([])
  const [log, setLog] = useState<string[]>([])
  const [health, setHealth] = useState<number>(MAX_HEALTH)
  const [weaponCard, setWeaponCard] = useState<Card | null>(null)
  const [weaponDurability, setWeaponDurability] = useState<number | null>(null)
  const [potionUsedThisRoom, setPotionUsedThisRoom] = useState<boolean>(false)
  const [discardPile, setDiscardPile] = useState<Card[]>([])
  const [cardsPlayedThisRoom, setCardsPlayedThisRoom] = useState<number>(0)
  const [canAvoidRoom, setCanAvoidRoom] = useState<boolean>(false)
  const [gameEnd, setGameEnd] = useState<GameEnd>(null)

  // Track whether we loaded from a save (skip fresh fetch)
  const loadedFromSave = useRef(false)

  const roomActive = roomCards.length > 0
  const roomDone = cardsPlayedThisRoom >= CARDS_PER_ROOM
  const isFirstRoom = discardPile.length === 0 && cardsPlayedThisRoom === 0 && roomCards.length === 0

  const addLog = (message: string) => {
    setLog((prev) => [message, ...prev])
  }

  // ── SAVE & EXIT ──────────────────────────────────────────────────────────
  const handleSaveExit = () => {
    saveGame({
      deck,
      roomCards,
      discardPile,
      health,
      weaponCard,
      weaponDurability,
      potionUsedThisRoom,
      cardsPlayedThisRoom,
      canAvoidRoom,
      log,
    })
    // navigation happens via the Link in Header
  }

  // ── WIN / LOSE DETECTION ─────────────────────────────────────────────────
  // Check after every meaningful state change. We use useEffect so we always
  // read committed state, not stale closures.
  useEffect(() => {
    if (gameEnd) return // already ended
    if (health <= 0) {
      clearGame()
      setGameEnd("lose")
      return
    }
    // Win: deck empty, room cleared (1 carry-over card selected counts as done),
    // and the last room is fully resolved
    const dungeonClear = deck.length === 0 && roomCards.length === 0
    const lastRoomDone = deck.length === 0 && roomDone && roomCards.length <= 1
    if ((dungeonClear || lastRoomDone) && health > 0 && loadedFromSave.current !== undefined) {
      // Only trigger win when we've actually played at least some cards
      if (discardPile.length > 0) {
        clearGame()
        setGameEnd("win")
      }
    }
  }, [health, deck, roomCards, roomDone, discardPile, gameEnd])

  // ── INITIAL LOAD: save or fresh fetch ───────────────────────────────────
  useEffect(() => {
    const save = loadGame()
    if (save) {
      // Restore all state from save
      setDeck(save.deck)
      setRoomCards(save.roomCards)
      setDiscardPile(save.discardPile)
      setHealth(save.health)
      setWeaponCard(save.weaponCard)
      setWeaponDurability(save.weaponDurability)
      setPotionUsedThisRoom(save.potionUsedThisRoom)
      setCardsPlayedThisRoom(save.cardsPlayedThisRoom)
      setCanAvoidRoom(save.canAvoidRoom)
      setLog(save.log)
      loadedFromSave.current = true
      // Clear save after loading so a second visit starts fresh
      // (they can re-save via Save & Exit)
      clearGame()
      return
    }

    // No save — fetch a fresh deck
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((res) => res.json())
      .then(async (data) => {
        const drawRes = await fetch(
          `https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=52`
        )
        const drawData = await drawRes.json()
        const filteredDeck = drawData.cards.filter(
          (card: Card) => !excludedCards.includes(card.code)
        )
        setDeck(filteredDeck)
        loadedFromSave.current = true
      })
  }, [])

  // ── DRAW ROOM ────────────────────────────────────────────────────────────
  const drawRoom = () => {
    const carryOver = isFirstRoom ? [] : roomCards.slice(0, 1)
    const newCardCount = isFirstRoom ? 4 : 3
    setDeck((currentDeck) => {
      const newCards = currentDeck.slice(0, newCardCount)
      setRoomCards([...carryOver, ...newCards])
      return currentDeck.slice(newCardCount)
    })
    setCardsPlayedThisRoom(0)
    setPotionUsedThisRoom(false)
    setCanAvoidRoom(true)
  }

  // ── AVOID ROOM ───────────────────────────────────────────────────────────
  const avoidRoom = () => {
    setDeck((currentDeck) => {
      const newDeck = [...currentDeck, ...roomCards]
      const newRoom = newDeck.slice(0, 4)
      setRoomCards(newRoom)
      setCardsPlayedThisRoom(0)
      setPotionUsedThisRoom(false)
      setCanAvoidRoom(false)
      return newDeck.slice(4)
    })
    addLog("Avoided the room — cards returned to dungeon")
  }

  // ── REMOVE CARD FROM ROOM ────────────────────────────────────────────────
  const removeCardFromRoom = (index: number) => {
    setRoomCards((prev) => {
      const updated = [...prev]
      updated.splice(index, 1)
      return updated
    })
  }

  // ── CARD CLICK ───────────────────────────────────────────────────────────
  const handleCardClick = (card: Card, index: number) => {
    if (cardsPlayedThisRoom >= CARDS_PER_ROOM) return

    const value = cardNumericValue(card.value)

    const playCard = () => {
      const nextCount = cardsPlayedThisRoom + 1
      setCardsPlayedThisRoom(nextCount)
      if (nextCount < CARDS_PER_ROOM) {
        removeCardFromRoom(index)
      } else {
        setRoomCards((prev) => prev.filter((_, i) => i !== index))
      }
    }

    // HEARTS — potion
    if (card.suit === "HEARTS") {
      if (potionUsedThisRoom) {
        addLog(`Discarded a level ${value} potion (already healed this room)`)
        setDiscardPile((prev) => [card, ...prev])
        playCard()
        return
      }
      const healed = Math.min(value, MAX_HEALTH - health)
      setHealth((h) => Math.min(h + value, MAX_HEALTH))
      setPotionUsedThisRoom(true)
      setDiscardPile((prev) => [card, ...prev])
      addLog(`Drank a level ${value} potion — healed ${healed} HP`)
      playCard()
      return
    }

    // DIAMONDS — weapon
    if (card.suit === "DIAMONDS") {
      if (weaponCard) {
        setDiscardPile((prev) => [weaponCard, ...prev])
        addLog(`Replaced ${weaponCard.value}♦ with a level ${value} weapon`)
      } else {
        addLog(`Equipped a level ${value} weapon`)
      }
      setWeaponCard(card)
      setWeaponDurability(null)
      playCard()
      return
    }

    // SPADES / CLUBS — monster
    if (card.suit === "SPADES" || card.suit === "CLUBS") {
      const suitSymbol = card.suit === "SPADES" ? "♠" : "♣"
      const canUseWeapon =
        weaponCard !== null &&
        (weaponDurability === null || value < weaponDurability)

      if (canUseWeapon && weaponCard) {
        const weaponValue = cardNumericValue(weaponCard.value)
        const damage = Math.max(0, value - weaponValue)
        setHealth((h) => Math.max(0, h - damage))
        setWeaponDurability(value)
        setDiscardPile((prev) => [card, ...prev])
        addLog(
          damage === 0
            ? `Blocked ${value}${suitSymbol} with ${weaponCard.value}♦ — no damage!`
            : `Fought ${value}${suitSymbol} with ${weaponCard.value}♦ — took ${damage} damage`
        )
      } else {
        setHealth((h) => Math.max(0, h - value))
        setDiscardPile((prev) => [card, ...prev])
        if (weaponCard && weaponDurability !== null && value >= weaponDurability) {
          addLog(`Fought ${value}${suitSymbol} barehanded (weapon degraded) — took ${value} damage`)
        } else {
          addLog(`Fought ${value}${suitSymbol} barehanded — took ${value} damage`)
        }
      }
      playCard()
    }
  }

  // ── HEADER TEXT ──────────────────────────────────────────────────────────
  const headerSubtitle = (() => {
    if (!roomActive) return "DRAW A ROOM"
    if (roomDone) return "ROOM CLEAR"
    return "CHOOSE CARDS"
  })()

  const headerDetail = (() => {
    if (!roomActive) return `${deck.length} cards in dungeon`
    if (roomDone) return "Draw the next room"
    const remaining = CARDS_PER_ROOM - cardsPlayedThisRoom
    return `${remaining} card${remaining !== 1 ? "s" : ""} remaining`
  })()

  return (
    <div className="flex pt-9 h-screen flex-col overflow-hidden">
      {gameEnd && <GameOverlay type={gameEnd} health={health} />}

      <Header
        subtitle={headerSubtitle}
        detail={headerDetail}
        onSaveExit={handleSaveExit}
      />
      <div className="grid grid-cols-5 grid-rows-2 w-[95%] mx-auto flex-1 min-h-0 gap-4 pb-4">
        <Dungeon
          cardsRemaining={deck.length}
          onDrawRoom={drawRoom}
          roomActive={roomActive}
          roomDone={roomDone}
        />
        <Room
          cards={roomCards}
          onCardClick={handleCardClick}
          onAvoidRoom={avoidRoom}
          cardsPlayedThisRoom={cardsPlayedThisRoom}
          canAvoidRoom={canAvoidRoom}
        />
        <Discard topCard={discardPile[0] ?? null} count={discardPile.length} />
        <Health health={health} maxHealth={MAX_HEALTH} />
        <Equip weaponCard={weaponCard} weaponDurability={weaponDurability} />
        <Action log={log} />
      </div>
    </div>
  )
}

export default page