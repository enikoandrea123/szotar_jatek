# Tesztjegyzőkönyv a Játék Funkcióiról

## Áttekintés
Ez a dokumentum a játék funkcióihoz készült tesztlépéseket tartalmazza, különös figyelmet fordítva a `getRandomWords`, `checkMatch` és `startGame` funkciókra. A cél az, hogy biztosítsuk, hogy a játék logikája a várakozásoknak megfelelően működik különböző szcenáriók alatt.

---

## Tesztkörnyezet
- **Nyelv**: JavaScript
- **Tesztkeretrendszer**: Jest
- **Leírás**: A játék célja a magyar szavak német megfelelőjével való párosítás. Az alábbi funkciók kerülnek tesztelésre:
    - `getRandomWords()`
    - `checkMatch()`
    - `startGame()`

---

## Teszt Esetek

### 1. Tesztcsoport: Játék Funkciók

#### 1.1. Teszt Eset: `getRandomWords`

| Teszt Eset ID | Teszt Leírás                                           | Várt Eredmény                                          | Állapot   |
|---------------|--------------------------------------------------------|-------------------------------------------------------|-----------|
| TC-1          | véletlenszerű szavak tömbjének visszaadása            | Visszaadott tömb hossza > 0                           | Sikeres   |
| TC-2          | már használt szavakat nem ad vissza                    | A visszaadott tömb nem tartalmaz használt szavakat   | Sikeres   |
| TC-3          | üres tömböt ad vissza, ha az összes szó már használt   | Visszaadott tömb üres                                  | Sikeres   |
| TC-4          | legfeljebb 5 véletlenszerű szót ad vissza              | Visszaadott tömb hossza ≤ 5                            | Sikeres   |
| TC-5          | eltérő eredményeket ad több híváskor                   | Következő hívások eltérő tömböket adnak vissza       | Sikeres   |
| TC-6          | üres tömböt ad vissza, ha a szavak tömb üres          | Visszaadott tömb üres                                  | Sikeres   |
| TC-7          | nem adja vissza a használt szavakat ismételt hívásoknál| Következő hívások nem tartalmaznak használt szavakat | Sikeres   |

#### 1.2. Teszt Eset: `checkMatch`

| Teszt Eset ID | Teszt Leírás                                           | Várt Eredmény                                          | Állapot   |
|---------------|--------------------------------------------------------|-------------------------------------------------------|-----------|
| TC-8          | igazat ad vissza a megfelelő szavak esetén            | Igaz visszatér, ha a szavak egyeznek                 | Sikeres   |
| TC-9          | hamisat ad vissza nem megfelelő szavak esetén         | Hamis visszatér, ha a szavak nem egyeznek            | Sikeres   |
| TC-10         | hamisat ad vissza, ha a német szó eltérő              | Hamis visszatér eltérő német fordítás esetén         | Sikeres   |
| TC-11         | igazat ad vissza kiegészítő tulajdonságok mellett     | Igaz visszatér, ha a szavak egyeznek kiegészítő tulajdonságokkal | Sikeres   |

#### 1.3. Teszt Eset: `startGame`

| Teszt Eset ID | Teszt Leírás                                           | Várt Eredmény                                          | Állapot   |
|---------------|--------------------------------------------------------|-------------------------------------------------------|-----------|
| TC-12         | inicializálja a pontszámot 0-ra                       | A pontszám 0-ra van állítva                           | Sikeres   |
| TC-13         | újra inicializálja a pontszámot, ha előzőleg be volt állítva | A pontszám 0-ra állítódik, függetlenül az előző értéktől | Sikeres   |

---

## Következtetés
Minden teszt sikeresen végrehajtásra került és átment. A `getRandomWords`, `checkMatch` és `startGame` funkciók a várakozásoknak megfelelően viselkednek különböző körülmények között, biztosítva ezzel a játék logikájának helyes működését. További tesztelés szükséges új funkciók hozzáadása vagy meglévő logika módosítása esetén.

---
