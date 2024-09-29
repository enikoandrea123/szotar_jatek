# Rendszerterv

## 1. Bevezetés
A rendszer célja egy szótár alapú játék fejlesztése, amely lehetővé teszi a felhasználók számára, hogy magyar és német szavakat párosítsanak. A rendszer követi a felhasználói pontszámokat, és lehetővé teszi a játék indítását, leállítását és újraindítását.

## 2. Rendszer Architektúra

### 2.1. Frontend
- **HTML**: A játék felhasználói felülete.
- **CSS**: Az oldalak stílusának meghatározása.
- **JavaScript**: Az interaktív funkciók, mint a pontszámok kezelése, szópárok megjelenítése.

### 2.2. Backend
- **JSON fájl**: A játék szópárokat egy egyszerű JSON fájlban tárolja, amely betöltődik a játék elején.

## 3. Adatmodell

### 3.1. Szópárok Adatbázisa (JSON)
```json
[
  { "hungarian": "alma", "german": "Apfel" },
  { "hungarian": "asztal", "german": "Tisch" },
  { "hungarian": "kutya", "german": "Hund" }
]
