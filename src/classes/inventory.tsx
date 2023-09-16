/*
How to separate the content for searching through?
*/

type Cards = {
    type: string,
    expansion: string,
    numInPack: number,
    numSoFar: number,
    numTotal: number,
    note?: string;
};

type CardPack = {
    name: string,
    expansions: string[],
    cards: Cards[],
    totalNumCards: number,
};

export const cards: CardPack[] = [
    {
        name: "TWOW(06) 1/4",
        expansions: ["Base Set"],
        cards: [
            {
                type: "Starting Action cards",
                expansion: "Base Set",
                numInPack: 50,
                numSoFar: 50,
                numTotal: 50,
                note: "5 sets of 10 cards per witcher"
            },
            {
                type: "Action cards",
                expansion: "Base Set",
                numInPack: 38,
                numSoFar: 38,
                numTotal: 90,
                note: ""
            },
            {
                type: "Help cards",
                expansion: "Base Set",
                numInPack: 10,
                numSoFar: 10,
                numTotal: 10,
                note: "5x Dice/turn order cards, 5x Icon Legend cards"
            },
            {
                type: "Solo Help card",
                expansion: "Base Set",
                numInPack: 1,
                numSoFar: 1,
                numTotal: 1,
                note: ""
            },
        ],
        totalNumCards: 99
    },

];


export const simplifiedCards = [
    {
        "name": "TWOW(06) 1/4",
        "expansions": "Base Set",
        "cards": {
            "Starting Action cards": "10/10 x 5",
            "Action cards": "38 (38/90)",
            "Help cards": "10/10",
            "Solo Help card": "1/1"
        },
        "cardsInPack": 99,
    },
    {
        "name": "TWOW(06) 2/4",
        "expansions": "Base Set",
        "cards": {
            "Monster cards": "11 (11/29)",
            "City Exploration cards": "36/36",
            "Action cards": "14 (52/90)"
        },
        "cardsInPack": 61,
    },
    {
        "name": "TWOW(06) 3/4",
        "expansions": "Base Set",
        "cards": {
            "Monster cards": "15 (26/29)",
            "Attribute Trophy cards": "8/8",
            "Monster Fight cards": "20/20",
            "Event cards": "56/56"
        },
        "cardsInPack": 99,
    },
    {
        "name": "TWOW(06) 4/4",
        "expansions": "Base Set",
        "cards": {
            "Potion cards": "28/28",
            "Witcher Trophy cards": "4/4 x 5",
            "Wilds Exploration cards": "36/36",
            "Monster cards": "2 (28/29)"
        },
        "cardsInPack": 86,
    },
    {
        "name": "TWOW(21) 1/4",
        "expansions": "Adventure Pack, Wild Hunt, Monster Trail",
        "cards": {
            // Adventure pack there is a star symbol in the top center
            "(AP) Wilds Exploration cards": "28 (28/125)",
            "Wild Hunt Monster Fight cards": "16/16",
            "Special Monster Fight cards": "4/4",  // Monster Trail
            "(AP) City Exploration cards": "59 (87/125)"
        },
        "cardsInPack": 107,
    },
    {
        "name": "TWOW(21) 2/4",
        "expansions": "Adventure Pack",
        "cards": {
            "(AP) Wilds Exploration cards": "32 (119/125)",
            "(AP) Event cards": "75/75 (194/200)"
        },
        "cardsInPack": 107,
    },
    {
        "name": "TWOW(21) 3/4",
        "expansions": "Wild Hunt, Mages, Adventure Pack",
        "cards": {
            "Mutagens": "15/15",
            "Wild Hunt Help": "5/5",
            "Hounds": "2/2",
            "Wild Hunt Monsters": "4/4",
            "Wild Hunt Exploration - Stage 1": "20/20",
            "Wild Hunt Exploration - Stage 2": "15/15",
            "Wild Hunt Event": "35/35",
            "Mage Special Action": "5/5",
            "(AP) Event cards": "6 (125/125)"
        },
        "cardsInPack": 107,
    },
    {
        "name": "TWOW(21) 4/4",
        "expansions": "Monster Trail, Adventure Pack, Ciri",
        "cards": {
            "Lost Mount": "1/1",
            "Monster card (Troll)": "1 (29/29)",  // Monster Trail
            "Trophy cards": "4/4 x 2 (Manticore, Ciri)",
            "Bomb cards": "28/28",
            "Starting Action cards (Manticore)": "10/10",
            "Advanced Action cards": "40/40",
            "Starting Action cards (Ciri)": "10/10",
            "Unique Action cards (witchers)": "7/7"
        },
        "cardsInPack": 105,
    },
    {
        "name": "TWOW(22) 1/1",
        "expansions": "Monster Trail, Wild Hunt",
        "cards": {
            "Large Monster cards": "29/29",
            "Difficulty Jumbo Reference cards": "3/3"
        },
        "cardsInPack": 32,
    },
    {
        "name": "TWOW(34) 1/2",
        "expansions": "Mages",
        "cards": {
            "Mage Unique Action cards": "10/10 x 5",
            "Mage Trophy cards": "4/4 x 5",
            "Mage Action cards": "10 (10/90)"
        },
        "cardsInPack": 80,
    },
    {
        "name": "TWOW(34) 2/2",
        "expansions": "Mages",
        "cards": {
            "Mage Action cards": "80 (90/90)"
        },
        "cardsInPack": 80,
    },
    {
        "name": "TWOW(45) 1/1",
        "expansions": "Legendary Hunt",
        "cards": {
            "Legendary Monster movement cards": "12/12",
            "Legendary Hunt Special Fight cards": "20/20"
        },
        "cardsInPack": 32,
    },
    {
        "name": "TWOW(46) 1/1",
        "expansions": "Legendary Hunt",
        "cards": {
            "Large Legendary Monster cards": "7/7",
            "Large Fight Reference card": "1/1"
        },
        "cardsInPack": 8,
    },
    {
        "name": "TWOW(53) 1/1",
        "expansions": "Skellige",
        "cards": {
            "Dagon Bonus Monster cards": "5/5",
            "Skellige Event cards": "30/30",
            "Skellige Exploration cards": "50/50"
        },
        "cardsInPack": 85,
    },
];

const tokens = {
    /*
    name tokens
    wild hunt quest tokens
    stretch goals green quest tokens
    wooden blocks
    witcher tokens
    mage school tokens
    etc
    */
};


/**
 * Game variations + content
 * =========================
 * Base Game:
 *   Game board
 *   90 Action Cards
 *   28 Potion Cards
 *   36 City Exploration Cards
 *   36 Wilds Exploration Cards
 *   8 Attribute Trophy Cards
 *   56 Event Cards
 *   10 Help Cards
 *   1 Solo Help Card
 *   2 sets of 5 Witcher Poker Dice
 *   35 Gold Tokens (cardboard)
 *   1 Closed Tavern Token
 *   18 Location Tokens
 *   28 Monster Cards (see monsters.tsx for count, Troll moved to Monster Trail expansion)
 *   28 Monster Tokens
 *   20 Monster Fight Cards
 *   5 sets of Player Components - each containing:
 *     1 Player Board with additional Witcher Name Tokens
 *     1 Witcher Miniature with a color base
 *     5 Wooden cubes
 *     1 Wooden Shield Marker
 *     1 Scoring Token
 *     10 Starting Action Cards (icon top right)
 *     4 Witcher Trophy Cards
 * Deluxe:
 *   All Base Game content, plus:
 *     28 Monster Miniatures
 *     5 Plastic Scoring Tokens (does this mean retail base set owners have to mix cardboard scoring tokens with plastic tokens from expansion packs?)
 *     1 Closed Tavern Miniature (located in witcher tokens)
 * Stretch Goals
 *   Adventure Pack
 *     75 Event Cards
 *     125 Exploration Cards
 *     12 Quest Tokens (green)
 *   Lost Mount
 *     1 Lost Mount Miniature
 *     1 Lost Mount card
 *   Ciri
 *     1 Player Board (Ciri)
 *     1 Witcher Miniature (Ciri) with a color base
 *     1 Scoring Token (cardboard)
 *     1 Plastic Scoring Token
 *     1 Specialty Token (covers chosen Witcher school starting location icon)
 *     5 Wooden cubes
 *     1 Wooden Shield Marker
 *     10 Starting Action Cards (icon top right)
 *     4 Witcher Trophy Cards
 *     1 Unique Action Card (NO icon top right, art is the Witcher)
 * Wild Hunt
 *   4 Wild Hunt Miniatures
 *   4 Wild Hunt Cards - 1 per wild hunt member
 *   16 Special Fight Cards - 4 per wild hunt member
 *   35 Event Cards
 *   35 Exploration Cards - 20 Stage I and 15 Stage II cards
 *   2 Hound Cards - two-sided
 *   6 Hound Tokens (2 for each level of 1, 2, and 3)
 *   6 Hound Miniatures (2 for each level of 1, 2, and 3)
 *   12 Quest Tokens (blue)
 *   1 Charge/Bite Token
 *   3 Double-sided Round Boards (to track rounds)
 *   1 Round Tracking Token
 *   20 Shield Tokens - values 1, 5, 10, or 20
 *   5 Wild Hunt Help Cards
 * Monster Trail
 *   1 Player Board (Manticore)
 *   1 Witcher Miniature (Manticore) with a color base
 *   1 Scoring Token (cardboard)
 *   1 Plastic Scoring Token
 *   5 Wooden cubes
 *   1 Wooden Shield Marker
 *   10 Starting Action Cards (icon top right)
 *   4 Witcher Trophy Cards
 *   11 Unique Action Cards, 1 per Witcher + Mage, excluding Ciri (NO icon top right, art is the Witcher/Mage)
 *   28 Bomb Cards
 *   15 Mutagen Cards
 *   40 Advanced Action Cards (contains text in text box)
 *   4 Special Monster Fight Cards
 *   29 Large Monster Cards
 *   18 Weakness Tokens
 *   1 Troll Miniature
 *   1 Troll Monster card
 *   1 Troll Token
 * Mages
 *   90 Mage Action Cards
 *   5 sets of Player Components - each containing:
 *     1 Player Board
 *     1 Mage Miniature with a color base
 *     5 Wooden cubes
 *     1 Wooden Energy Marker
 *     1 Scoring Token
 *     1 Plastic Scoring Token
 *     1 School Token
 *     10 Starting Action Cards (icon top right)
 *     4 Mage Trophy Cards
 *   1 Game Board Extension
 * Legendary Hunt
 *   7 Legendary MOnster Miniatures
 *   24 Destruction Tokens
 *   1 Large Help Card
 *   20 Special Fight Cards
 *   12 Legendary Monster Movement Cards
 *   7 Large Legendary Monster Cards
 * Skellige
 *   1 Skellige Game Board Extension
 *   50 Skellige Exploration Cards
 *   30 Skellige Event Cards
 *   5 Dagon Bonus Cards
 *   1 Dagon Monster Card
 *   6 Dagon Trail Tokens
 *   6 Harbor Tokens
 *   3 Skellige Location Tokens
 *   1 Dagon Miniature
 *   3 Ship Miniatures
 * Monster Pack (KS Exclusive)
 *   1 Kayran Miniature
 *   1 Koshchey Miniature
 *   1 Siren Miniature
 *   1 Koshchey Monster Card
 *   1 Siren Monster Card
 *   1 Large Koshchey Monster Card
 *   1 Kayran Large Monster card
 *   (No small monster card for Koshchey)
 *   (No large monster card for Siren)
 */