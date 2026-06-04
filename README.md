# Scoundrel szabályok

A scoundrel (továbbiakban: játék) egy egyjátékos rogue-like kártyajáték, melyet Zach Gage és Kurt Bieg talált ki
2011-ben.

### Előkészületek

A játékot egy sima francia kártya paklival kell játszani. Játék előtt távolítsuk el a pakliból a jokereket, illetve a piros Jack, Queen, King, és Ace kártyákat. Keverjük meg a megmaradt 44 darab kártyát, majd helyezzük el a játéktér bal oldalán, úgy, hogy a kártyák előlapját ne lássuk. Ez lesz az ún. dungeon. A játékos 20 életerőponttal (HP) kezd.

### Kártyák jelentése

A 26 darab ♣ (club) és ♠ (spade) kártyák a szörnyek. Sebzésük megegyező a kártyán látható értékkel.
(2 = 2, [...], 10 = 10, Jack = 11, Queen = 12, King = 13, Ace = 14)

A 9 darab ♦ (diamond) kártya a pakliban a fegyverek. Minden fegyver az értékének megfelelő sebzést tud végezni. Ha a játékban felveszünk egy fegyvert, akkor kötelező azt használnunk és az előzőt eldobnunk.

A 9 darab ♥ (heart) kártya a pakliban az életerő-elixírek. Minden körben csak egy életerő-elixírt használhatunk. A kezdeti 20 életerőpontnál nem lehet több a játék során.

A dobópakli legyen a játéktér jobb oldalán, a kártyákat előlappal lefele helyezzük el.

### Pontozás

A játék addig tart, amíg a játékos életereje 0-ra nem csökken, vagy ki nem jut a játékos a dungeonből.

* Ha életereje 0-ra csökkent, vegye a hátralévő szörnyek sebzéspontjait és vonja ki a 0-ból. Ez a negatív szám a pontja.
* Ha kijutott a dungeonből, akkor a megmaradt életereje a pontja. Ha az utolsó kártyája egy életerő-elixír, akkor az életerő + elixír értéke a pontja.

### Játékmenet

Fordíts fel 4 darab kártyát egyesével, ezek a kártyák alkotnak egy szobát.

A szobát el lehet kerülni ha szeretnéd. Ha így döntesz, mind a 4 kártyát tedd vissza a dungeon pakli legaljára. Bármennyi szobát elkerülhetsz, de egymás utáni körökben nem lehet ezt megtenni.

Ha úgy döntesz nem kerülöd el a szobát, akkor 3 kártyával kell interaktálnod a 4-ből.

Válassz egyesével.

#### Ha, fegyvert választottál ...

kötelező azt használnod, helyezd azt magad és a szoba közé. Ha előtte fegyver volt a kezedben, dobd el azt és a rajta lévő szörnyeket.

#### Ha, életerő-elixírt választottál ...

add hozzá az értékét az életerődhöz. Az életerőd nem haladhatja meg a játék során a 20 pontot. Egy körben nem használhatsz 2 darab életerő-elixírt, ha felvennél egy másodikat csak dobd el.

#### Ha, szörnyet választottál ...

akkor harcol vele vagy puszta kézzel vagy a nálad lévő fegyverrel.

##### Harc

* Ha puszta kézzel harcolsz a szörnnyel, vondd ki a sebzését az életedből majd tedd a dobópakliba.
* Ha a fegyvereddel harcolsz, helyezd a szörnyet a fegyverre, úgy, hogy látszódjon a fegyver értéke. Vondd ki a fegyver értékét a szörny életerejéből és vondd ki a megmaradt pontokat az életedből.

Fontos megjegyezni, hogy a fegyvered megmarad amíg újat nem választol, de ha egyszer már használtad szörnyön, akkor már csak olyan szörnnyel harcolhatsz a fegyverrel, ami ugyanolyan vagy kisebb értékű.

Ha kiválasztottad a három kártyát, vége a körödnek. Maradjon a negyedik kártya, amellé húzz fel még hármat a következő szobához.
