"use client"

import Action from "@/components/Action"
import Discard from "@/components/Discard"
import Dungeon from "@/components/Dungeon"
import Equip from "@/components/Equip"
import Health from "@/components/Health"
import Room from "@/components/Room"
import { useEffect, useState } from "react"

type Card = {
  code : string, 
  image : string,
  value : string,
  suit : string 
}

const page = () => {
  const [deck, setDeck] = useState<Card[]>([])
  const [deckID, setDeckID] = useState<string>("")
  const [roomCards, setRoomCards] = useState<Card[]>([]);

  const excludedCards = [
  "AH", "KH", "QH", "JH",
  "AD", "KD", "QD", "JD"
  ];

  const drawRoom = () => {
    setDeck(currentDeck => {
      setRoomCards(currentDeck.slice(0, 4));
      return currentDeck.slice(4);
    });
  };
  
  useEffect(() => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then((res) => res.json())
    .then(async (data) => {
      setDeckID(data.deck_id);
      const drawRes = await fetch(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=52`);
      const drawData = await drawRes.json();
      const filteredDeck = drawData.cards.filter((card: Card) => !excludedCards.includes(card.code));
      setDeck(filteredDeck);});
  }, []);

  return (
    <div className="flex pt-9 items-center min-h-screen flex-col">
      <h1 className="text-4xl font-bold">SCOUNDREL</h1>
      <h3 className="text-xl">CHOOSE CARDS</h3>
      <h4 className="text-md pb-10">3 REMAINS</h4>
      <div className="grid grid-cols-5 grid-rows-2 w-full min-h-150 gap-4 p-6">
        <Dungeon
          cardsRemaining={deck.length}
          onDrawRoom={drawRoom}
        />
        <Room cards={roomCards} />
        <Discard />
        <Health/>
        <Equip />
        <Action/>
      </div>
    </div>
  )
}

export default page
