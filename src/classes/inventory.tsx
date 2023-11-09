/*
How to separate the content for searching through?
*/

export type Card = {
    type: string,
    expansion: string,
    numInPack: number,
    numSoFar: number,
    numTotal: number,
    note: string;
    exampleImage: string;
};

export type CardPack = {
    name: string,
    expansions: string[],
    cards: Card[],
    cardsInPack: number,
};

export const cards: CardPack[] = [
    {
        name: "TWOW(06) 1/4",
        expansions: ["Base Set"],
        cardsInPack: 99,
        cards: [
            {
                type: "Starting Action cards",
                expansion: "Base Set",
                numInPack: 50,
                numSoFar: 50,
                numTotal: 50,
                note: "5 sets of 10 cards per witcher",
                // TODO: Add starting card front examples
                exampleImage: require("../img/inventory/witcherAction.jpg"),
            },
            {
                type: "Action cards",
                expansion: "Base Set",
                numInPack: 38,
                numSoFar: 38,
                numTotal: 90,
                note: "",
                exampleImage: require("../img/inventory/witcherAction.jpg"),
            },
            {
                type: "Help cards",
                expansion: "Base Set",
                numInPack: 10,
                numSoFar: 10,
                numTotal: 10,
                note: "5x Dice/turn order cards, 5x Icon Legend cards",
                exampleImage: require("../img/inventory/playerHelp.jpg"),
            },
            {
                type: "Solo Help card",
                expansion: "Base Set",
                numInPack: 1,
                numSoFar: 1,
                numTotal: 1,
                note: "",
                exampleImage: require("../img/inventory/soloHelpCard.jpg"),
            },
        ],
    },
    {
        name: "TWOW(06) 2/4",
        expansions: ["Base Set"],
        cardsInPack: 61,
        cards: [
            {
                type: "Monster cards",
                expansion: "Base Set",
                numInPack: 11,
                numSoFar: 11,
                numTotal: 29,
                note: "",
                exampleImage: require("../img/inventory/smallMonsterFront.jpg"),
            },
            {
                type: "City Exploration cards",
                expansion: "Base Set",
                numInPack: 36,
                numSoFar: 36,
                numTotal: 36,
                note: "",
                exampleImage: require("../img/inventory/exploreCity.jpg"),
            },
            {
                type: "Action cards",
                expansion: "Base Set",
                numInPack: 14,
                numSoFar: 52,
                numTotal: 90,
                note: "",
                exampleImage: require("../img/inventory/witcherAction.jpg"),
            },
        ],
    },
    {
        name: "TWOW(06) 3/4",
        expansions: ["Base Set"],
        cardsInPack: 99,
        cards: [
            {
                type: "Monster cards",
                expansion: "Base Set",
                numInPack: 15,
                numSoFar: 26,
                numTotal: 29,
                note: "",
                exampleImage: require("../img/inventory/smallMonsterFront.jpg"),
            },
            {
                type: "Attribute Trophy cards",
                expansion: "Base Set",
                numInPack: 8,
                numSoFar: 8,
                numTotal: 8,
                note: "",
                exampleImage: require("../img/inventory/skillTrophy.jpg"),
            },
            {
                type: "Monster Fight cards",
                expansion: "Base Set",
                numInPack: 20,
                numSoFar: 20,
                numTotal: 20,
                note: "",
                exampleImage: require("../img/inventory/monsterFight.jpg"),
            },
            {
                type: "Event cards",
                expansion: "Base Set",
                numInPack: 56,
                numSoFar: 56,
                numTotal: 56,
                note: "",
                exampleImage: require("../img/inventory/eventCard.jpg"),
            },
        ],
    },
    {
        name: "TWOW(06) 4/4",
        expansions: ["Base Set"],
        cardsInPack: 86,
        cards: [
            {
                type: "Potion cards",
                expansion: "Base Set",
                numInPack: 28,
                numSoFar: 28,
                numTotal: 28,
                note: "",
                exampleImage: require("../img/inventory/potions.jpg"),
            },
            {
                type: "Witcher Trophy cards",
                expansion: "Base Set",
                numInPack: 20,
                numSoFar: 20,
                numTotal: 20,
                note: "4 per Witcher x 5 witchers",
                exampleImage: require("../img/inventory/witcherTrophyBack.jpg"),
            },
            {
                type: "Wilds Exploration cards",
                expansion: "Base Set",
                numInPack: 36,
                numSoFar: 36,
                numTotal: 36,
                note: "",
                exampleImage: require("../img/inventory/exploreWilds.jpg"),
            },
            {
                type: "Monster cards",
                expansion: "Base Set",
                numInPack: 2,
                numSoFar: 28,
                numTotal: 29,
                note: "",
                exampleImage: require("../img/inventory/smallMonsterFront.jpg"),
            },
        ],
    },
    {
        name: "TWOW(21) 1/4",
        expansions: ["Adventure Pack", "Wild Hunt", "Monster Trail"],
        cardsInPack: 107,
        cards: [
            {
                type: "(AP) Wilds Exploration cards",
                expansion: "Adventure Pack",
                numInPack: 28,
                numSoFar: 28,
                numTotal: 60,
                note: "",
                // TODO: Add adventurePackWildsExplorationFront.jpg
                exampleImage: require("../img/inventory/exploreWilds.jpg"),
            },
            {
                type: "Wild Hunt Special Fight cards",
                expansion: "Wild Hunt",
                numInPack: 16,
                numSoFar: 16,
                numTotal: 16,
                note: "4 cards per Wild Hunt member",
                // TODO: Get monster fight back image
                exampleImage: require("../img/inventory/wildHuntSpecialFightFront.jpg"),
            },
            {
                type: "Special Monster Fight cards",
                expansion: "Monster Trail",
                numInPack: 4,
                numSoFar: 4,
                numTotal: 4,
                note: "One for each monster ability, 1 through 4",
                exampleImage: require("../img/inventory/monsterFightSpecialFront.jpg"),
            },
            {
                type: "(AP) City Exploration cards",
                expansion: "Adventure Pack",
                numInPack: 59,
                numSoFar: 59,
                numTotal: 59,
                note: "",
                // TODO: Add adventurePackCityExplorationFront.jpg
                exampleImage: require("../img/inventory/exploreCity.jpg"),
            },
        ],
    },
    {
        name: "TWOW(21) 2/4",
        expansions: ["Adventure Pack"],
        cardsInPack: 107,
        cards: [
            {
                type: "(AP) Wilds Exploration cards",
                expansion: "Adventure Pack",
                numInPack: 32,
                numSoFar: 60,
                numTotal: 60,
                note: "",
                // TODO: Add adventurePackWildsExplorationFront.jpg
                exampleImage: require("../img/inventory/exploreWilds.jpg"),
            },
            {
                type: "(AP) Event cards",
                expansion: "Adventure Pack",
                numInPack: 75,
                numSoFar: 75,
                numTotal: 81,
                note: "Starts at 57",
                // TODO: add adventurePackEventFront.jpg
                exampleImage: require("../img/inventory/eventCard.jpg"),
            },
        ],
    },
    {
        name: "TWOW(21) 3/4",
        expansions: ["Wild Hunt", "Mages", "Adventure Pack", "Monster Trail"],
        cardsInPack: 107,
        cards: [
            {
                type: "Mutagens",
                expansion: "Monster Trail",
                numInPack: 15,
                numSoFar: 15,
                numTotal: 15,
                note: "",
                exampleImage: require("../img/inventory/mutagen.jpg"),
            },
            {
                type: "Wild Hunt Help",
                expansion: "Wild Hunt",
                numInPack: 5,
                numSoFar: 5,
                numTotal: 5,
                note: "",
                exampleImage: require("../img/inventory/wildHuntHelp1.jpg"),
            },
            {
                type: "Hounds",
                expansion: "Wild Hunt",
                numInPack: 2,
                numSoFar: 2,
                numTotal: 2,
                note: "",
                exampleImage: require("../img/inventory/wildHuntHound.jpg"),
            },
            {
                type: "Wild Hunt Monsters",
                expansion: "Wild Hunt",
                numInPack: 4,
                numSoFar: 4,
                numTotal: 4,
                note: "One for each Wild Hunt member",
                exampleImage: require("../img/inventory/wildHuntMonsterFront.jpg"),
            },
            {
                type: "Wild Hunt Exploration - Stage 1",
                expansion: "Wild Hunt",
                numInPack: 20,
                numSoFar: 20,
                numTotal: 20,
                note: "",
                exampleImage: require("../img/inventory/wildHuntExplorationStage1Back.jpg"),
            },
            {
                type: "Wild Hunt Exploration - Stage 2",
                expansion: "Wild Hunt",
                numInPack: 15,
                numSoFar: 15,
                numTotal: 15,
                note: "",
                exampleImage: require("../img/inventory/wildHuntExplorationStage2Back.jpg"),
            },
            {
                type: "Wild Hunt Event",
                expansion: "Wild Hunt",
                numInPack: 35,
                numSoFar: 35,
                numTotal: 35,
                note: "",
                // TODO: Create and add wildHuntEventBack.jpg from wildHuntEventBack_All.jpg
                exampleImage: require("../img/inventory/wildHuntEventFront.jpg"),
            },
            {
                type: "Mage Special Action",
                expansion: "Mages",
                numInPack: 5,
                numSoFar: 5,
                numTotal: 5,
                note: "1 per Mage, art on card is of the corresponding Mage",
                // TODO: Add all 5 mageSpecialActionFront.jpg
                exampleImage: require("../img/inventory/mageAction.jpg"),
            },
            {
                type: "(AP) Event cards",
                expansion: "Adventure Pack",
                numInPack: 6,
                numSoFar: 81,
                numTotal: 81,
                note: "",
                exampleImage: require("../img/inventory/eventCard.jpg"),
            },
        ],
    },
    {
        name: "TWOW(21) 4/4",
        expansions: ["Adventure Pack", "Monster Trail", "Ciri"],
        cardsInPack: 105,
        cards: [
            {
                type: "Lost Mount",
                expansion: "Adventure Pack",
                numInPack: 1,
                numSoFar: 1,
                numTotal: 1,
                note: "",
                exampleImage: require("../img/inventory/lostMountFront.jpg"),
            },
            {
                type: "Monster cards",
                expansion: "Monster Trail",
                numInPack: 1,
                numSoFar: 1,
                numTotal: 1,
                note: "Troll card",
                exampleImage: require("../img/inventory/trollFront.jpg"),
            },
            {
                type: "Witcher Trophy cards",
                expansion: "Monster Trail",
                numInPack: 4,
                numSoFar: 4,
                numTotal: 4,
                note: "Manticore",
                // TODO: Get witcher card back images
                exampleImage: require("../img/inventory/witcherTrophyBack.jpg"),
            },
            {
                type: "Witcher Trophy cards",
                expansion: "Ciri",
                numInPack: 4,
                numSoFar: 4,
                numTotal: 4,
                note: "Ciri",
                // TODO: Get witcher card back images
                exampleImage: require("../img/inventory/witcherTrophyBack.jpg"),
            },
            {
                type: "Bomb cards",
                expansion: "Monster Trail",
                numInPack: 28,
                numSoFar: 28,
                numTotal: 28,
                note: "",
                exampleImage: require("../img/inventory/bombs.jpg"),
            },
            {
                type: "Starting Action cards",
                expansion: "Monster Trail",
                numInPack: 10,
                numSoFar: 10,
                numTotal: 10,
                note: "Manticore",
                // TODO: Add manticore card front image
                exampleImage: require("../img/inventory/witcherAction.jpg"),
            },
            {
                type: "Advanced Action cards",
                expansion: "Monster Trail",
                numInPack: 40,
                numSoFar: 40,
                numTotal: 40,
                note: "Contains text in bottom field on Action cards",
                exampleImage: require("../img/inventory/advancedActionCardFront.jpg"),
            },
            {
                type: "Starting Action cards",
                expansion: "Ciri",
                numInPack: 10,
                numSoFar: 10,
                numTotal: 10,
                note: "Ciri",
                // TODO: Get ciri card front images w/icons
                exampleImage: require("../img/inventory/witcherAction.jpg"),
            },
            {
                type: "Unique Action cards (witchers)",
                expansion: "Monster Trail",  // unsure if this is accurate
                numInPack: 7,
                numSoFar: 7,
                numTotal: 7,
                note: "1 per Witcher, art on card is of the corresponding Witcher",
                // TODO: Get witcher card front images
                exampleImage: require("../img/inventory/witcherAction.jpg"),
            },
        ],
    },
    {
        name: "TWOW(22) 1/1",
        expansions: ["Monster Trail", "Wild Hunt"],
        cardsInPack: 32,
        cards: [
            {
                type: "Large Monster cards",
                expansion: "Monster Trail",
                numInPack: 29,
                numSoFar: 29,
                numTotal: 29,
                note: "",
                exampleImage: require("../img/inventory/largeMonsterFront.jpg"),
            },
            {
                type: "Difficulty Jumbo Reference cards",
                expansion: "Wild Hunt",
                numInPack: 3,
                numSoFar: 3,
                numTotal: 3,
                note: "",
                exampleImage: require("../img/inventory/wildHuntJumboDifficultyCard.jpg"),
            },
        ],
    },
    {
        name: "TWOW(34) 1/2",
        expansions: ["Mages"],
        cardsInPack: 80,
        cards: [
            {
                type: "Mage Unique Action cards",
                expansion: "Mages",
                numInPack: 50,
                numSoFar: 50,
                numTotal: 50,
                note: "10 cards per 5 Mages. Corresponding icons to mage's icon in top right corner",
                // TODO: Get mage card front images
                exampleImage: require("../img/inventory/mageAction.jpg"),
            },
            {
                type: "Mage Trophy cards",
                expansion: "Mages",
                numInPack: 20,
                numSoFar: 20,
                numTotal: 20,
                note: "4 per 5 Mages",
                // TODO: Add all mage trophy card back images
                exampleImage: require("../img/inventory/mageTrophyArdeaBack.jpg"),
            },
            {
                type: "Mage Action cards",
                expansion: "Mages",
                numInPack: 10,
                numSoFar: 10,
                numTotal: 90,
                note: "",
                exampleImage: require("../img/inventory/mageAction.jpg"),
            },
        ],
    },
    {
        name: "TWOW(34) 2/2",
        expansions: ["Mages"],
        cardsInPack: 80,
        cards: [
            {
                type: "Mage Action cards",
                expansion: "Mages",
                numInPack: 80,
                numSoFar: 90,
                numTotal: 90,
                note: "",
                exampleImage: require("../img/inventory/mageAction.jpg"),
            },
        ],
    },
    {
        name: "TWOW(45) 1/1",
        expansions: ["Legendary Hunt"],
        cardsInPack: 32,
        cards: [
            {
                type: "Legendary Monster movement cards",
                expansion: "Legendary Hunt",
                numInPack: 12,
                numSoFar: 12,
                numTotal: 12,
                note: "",
                exampleImage: require("../img/inventory/legendaryHuntMovement.jpg"),
            },
            {
                type: "Legendary Hunt Special Fight cards",
                expansion: "Legendary Hunt",
                numInPack: 20,
                numSoFar: 20,
                numTotal: 20,
                note: "",
                exampleImage: require("../img/inventory/legendaryHuntFight.jpg"),
            },
        ],
    },
    {
        name: "TWOW(46) 1/1",
        expansions: ["Legendary Hunt"],
        cardsInPack: 8,
        cards: [
            {
                type: "Large Legendary Monster cards",
                expansion: "Legendary Hunt",
                numInPack: 7,
                numSoFar: 7,
                numTotal: 7,
                note: "",
                exampleImage: require("../img/inventory/largeMonsterFront.jpg"),
            },
            {
                type: "Large Fight Reference card",
                expansion: "Legendary Hunt",
                numInPack: 1,
                numSoFar: 1,
                numTotal: 1,
                note: "",
                exampleImage: require("../img/inventory/legendaryHuntHelp1.jpg"),
            },
        ],
    },
    {
        name: "TWOW(53) 1/1",
        expansions: ["Skellige"],
        cardsInPack: 85,
        cards: [
            {
                type: "Dagon Bonus Monster cards",
                expansion: "Skellige",
                numInPack: 5,
                numSoFar: 5,
                numTotal: 5,
                note: "Trophy cards with perks gained when defeating Dagon",
                exampleImage: require("../img/inventory/dagonTrophyBack.jpg"),
            },
            {
                type: "Skellige Event cards",
                expansion: "Skellige",
                numInPack: 30,
                numSoFar: 30,
                numTotal: 30,
                note: "",
                exampleImage: require("../img/inventory/skelligeEventCard.jpg"),
            },
            {
                type: "Skellige Exploration cards",
                expansion: "Skellige",
                numInPack: 50,
                numSoFar: 50,
                numTotal: 50,
                note: "",
                exampleImage: require("../img/inventory/skelligeExploreBack.jpg"),
            },
        ],
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
            "(AP) Wilds Exploration cards": "28 (28/60)",
            "Wild Hunt Monster Fight cards": "16/16",
            "Special Monster Fight cards": "4/4",  // Monster Trail
            "(AP) City Exploration cards": "59/59"
        },
        "cardsInPack": 107,
    },
    {
        "name": "TWOW(21) 2/4",
        "expansions": "Adventure Pack",
        "cards": {
            "(AP) Wilds Exploration cards": "32 (60/60)",
            "(AP) Event cards": "75 (75/81)"
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
            "(AP) Event cards": "6 (81/81)"
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