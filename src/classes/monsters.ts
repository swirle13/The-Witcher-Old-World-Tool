import Deck, { MutableDeck, ReadonlyDeck } from "./dataClasses";

/*
Identify what monsters come in which expansions and set toggles for each
    * Base set: 15 monsters
        * level 1: Nekker's Nest, Arachas, Archspore, Barghest, Foglet, Harpy, Ghoul Nest
        * level 2: Griffin, Wyvern, Werewolf, Fiend, Noonwraith
        * level 3: Leshen, Striga, Bruxa
    * Stretch goals: 14 monsters
        * level 1: Drowner's Nest, Rotfiend, Ekimmara, 
        * level 2: Nightwraith, Water Hag, Manticore, Whispess, Weavess, Penitent, Grave Hag, 
        * level 3: Glustyworp, Brewess, Yghern, Troll
    * Wild Hunt: 10 monsters
        * 4 wild hunt monsters (levels ??)
            * Eredin, Nithral, Imlerith, Caranthir
        * 6 hounds (2x level 1, 2, 3)
    * Monster trail: 0 monsters
        * 29 large monster cards
        * 18 monster weakness tokens
    * Legendary Hunt: 7 monsters
        * 
    * Skellige: 1 monster
        * level 3: Dagon
    * Mounted Eredin: 1 monster
        * level 3: Mounted Eredin
    * Monster Pack (KS Exclusive):
        * level 1: Siren(?)
        * level 2: Koshchey
        * level 3: Kayran

Gameplay all-in is comprised of the following expansions:
    * Base set
    * Skellige
    * Mages
    * Legendary Hunt

List all possible purchaseable versions of the game from KS

List which packs of the game are mutually exclusive

Decks:
    * Monster Trail weakness tokens
*/

const baseSetMonsters: Record<string, Array<string>> = {
    "levelOne": ["Nekker's Nest", "Arachas", "Archspore", "Barghest", "Foglet", "Harpy", "Ghoul Nest"],
    "levelTwo": ["Griffin", "Wyvern", "Werewolf", "Fiend", "Noonwraith"],
    "levelThree": ["Leshen", "Striga", "Bruxa"]
}

class MonstersDeck {
    levelOneMonsters: ReadonlyDeck<string>;
    levelTwoMonsters: ReadonlyDeck<string>;
    levelThreeMonsters: ReadonlyDeck<string>;
    
    constructor(
        levelOneMonsters: Array<string>,
        levelTwoMonsters: Array<string>,
        levelThreeMonsters: Array<string>,
    ) {
        this.levelOneMonsters = new ReadonlyDeck<string>(levelOneMonsters);
        this.levelTwoMonsters = new ReadonlyDeck<string>(levelTwoMonsters);
        this.levelThreeMonsters = new ReadonlyDeck<string>(levelThreeMonsters);
    }
}

// TODO: when users are choosing their options, provide checkboxes for expansions or an all-in
const my_monsters_deck = new MonstersDeck(
                       baseSetMonsters["levelOne"],
                       baseSetMonsters["levelTwo"],
                       baseSetMonsters["levelThree"],
                   )