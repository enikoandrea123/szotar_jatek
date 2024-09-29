# Követelményspecifikáció

## 1. Rendszer Célja
A szótárjáték egy edukatív eszköz, amely segít a felhasználónak a nyelvtanulásban. A játék célja a magyar-német szópárok helyes párosítása.

## 2. Felhasználói Kategóriák
- **Diákok**: nyelvtanulók, akik játékos formában szeretnének szavakat tanulni.
- **Tanulók**: akik rendszeresen szeretnék tesztelni a szókincsüket.

## 3. Funkcionális Követelmények
- Szópárok hozzáadása és tárolása.
- Játék indítása, leállítása, újraindítása.
- Véletlenszerű szópárok megjelenítése.
- Pontszám és legmagasabb pontszám kezelése.

## 4. Nem Funkcionális Követelmények
- A játék működjön böngészőből, mobil eszközön is.
- Gyors válaszidő a felhasználói műveletekre.

### 5. Követelmény lista

| Modul   | ID  | Use Case ID     | Név                    | V.  | Kifejtés                                                                                     |
|---------|-----|------------------|------------------------|-----|----------------------------------------------------------------------------------------------|
| Főmodul | K1  | UC1              | Szótár kezelés         | 1.0 | A szótárt lehet bővíteni magyar-német szópárokkal, valamint lehetőség van szavak törlésére is.  |
| Főmodul | K2  | UC2              | Játék indítása         | 1.0 | A játék elindításakor a program betölti a szavakat a szótárból, és a felhasználó interakcióra vár.  |
| Főmodul | K3  | UC3              | Játék újraindítása     | 1.0 | A játék újraindításával a jelenlegi állapot törlődik, és a felhasználó új játékot kezdhet.    |
| Főmodul | K4  | UC4              | Játék leállítása       | 1.0 | A játék leállítása során a felhasználó kap egy üzenetet a játék állapotáról, és lehetősége van a játék újraindítására. |
| Főmodul | K5  | UC5              | Pontszám nyilvántartás | 1.0 | A rendszer nyilvántartja a felhasználó aktuális és legmagasabb pontszámát, amely megjelenik a felhasználói felületen. |
| Főmodul | K6  | UC6              | Szavak megjelenítése   | 1.0 | A rendszer véletlenszerűen megjeleníti a szótárból a magyar és német szavakat a felhasználónak. |
