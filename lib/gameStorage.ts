const SAVE_KEY = "scoundrel_save"

export type Card = {
  code: string
  image: string
  value: string
  suit: string
}

export type GameSave = {
  deck: Card[]
  roomCards: Card[]
  discardPile: Card[]
  health: number
  weaponCard: Card | null
  weaponDurability: number | null
  potionUsedThisRoom: boolean
  cardsPlayedThisRoom: number
  canAvoidRoom: boolean
  log: string[]
}

export const saveGame = (state: GameSave): void => {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state))
  } catch (e) {
    console.error("Failed to save game:", e)
  }
}

export const loadGame = (): GameSave | null => {
  try {
    const raw = localStorage.getItem(SAVE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as GameSave
  } catch (e) {
    console.error("Failed to load game:", e)
    return null
  }
}

export const clearGame = (): void => {
  try {
    localStorage.removeItem(SAVE_KEY)
  } catch (e) {
    console.error("Failed to clear game:", e)
  }
}

export const hasSave = (): boolean => {
  try {
    return localStorage.getItem(SAVE_KEY) !== null
  } catch {
    return false
  }
}