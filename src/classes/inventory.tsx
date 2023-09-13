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
        }
    },
    {
        "name": "TWOW(06) 2/4",
        "expansions": "Base Set",
        "cards": {
            "Monster cards": "11 (11/29)",
            "City Exploration cards": "36/36",
            "Action Cards": "14 (52/90)"
        }
    },
    {
        "name": "TWOW(06) 3/4",
        "expansions": "Base Set",
        "cards": {
            "Monster cards": "15 (26/29)",
            "Attribute Trophy cards": "8/8",
            "Monster Fight cards": "20/20",
            "Event cards": "56/56"
        }
    },
    {
        "name": "TWOW(06) 4/4",
        "expansions": "Base Set",
        "cards": {
            "Potion cards": "28/28",
            "Witcher Trophy cards": "4/4 x 5",
            "Wilds Exploration cards": "36/36",
            "Monster cards": "2 (28/29)"
        }
    },
    {
        "name": "TWOW(21) 1/4",
        "expansions": "Adventure Pack, Wild Hunt, Monster Trail",
        "cards": {
            "(AP) Wilds Exploration cards": "28 (28/125)",
            "Wild Hunt Monster Fight cards": "16/16",
            "Special Monster Fight cards": "4/4",  // Monster Trail
            "(AP) City Exploration cards": "59 (87/125)"
        }
    },
    {
        "name": "TWOW(21) 2/4",
        "expansions": "Adventure Pack",
        "cards": {
            "(AP) Wilds Exploration cards": "32 (119/125)",
            "(AP) Event cards": "75/75 (194/200)"
        }
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
        }
    },
    {
        "name": "TWOW(21) 4/4",
        "expansions": "Monster Trail, Adventure Pack, Ciri",
        "cards": {
            "Lost Mount": "1/1",
            "Monster card (Troll)": "1 (29/29)",
            "Trophy cards": "4/4 x 2 (Manticore, Ciri)",
            "Bomb cards": "28/28",
            "Starting Action cards (Manticore)": "10/10",
            "Advanced Action cards": "40/40",
            "Starting Action cards (Ciri)": "10/10",
            "Unique Action cards (witchers)": "7/7"
        }
    },
    {
        "name": "TWOW(22) 1/1",
        "expansions": "Monster Trail, Wild Hunt",
        "cards": {
            "Big Monster cards": "29/29",
            "Difficulty Jumbo Reference cards": "3/3"
        }
    },
    {
        "name": "TWOW(34) 1/2",
        "expansions": "Mages",
        "cards": {
            "Mage Unique Action cards": "10/10 x 5",
            "Mage Trophy cards": "4/4 x 5",
            "Mage Action cards": "10 (10/90)"
        }
    },
    {
        "name": "TWOW(34) 2/2",
        "expansions": "Mages",
        "cards": {
            "Mage Action cards": "80 (90/90)"
        }
    },
    {
        "name": "TWOW(45) 1/1",
        "expansions": "Legendary Hunt",
        "cards": {
            "Legendary Monster movement cards": "12/12",
            "Legendary Hunt Special Fight cards": "20/20"
        }
    },
    {
        "name": "TWOW(46) 1/1",
        "expansions": "Legendary Hunt",
        "cards": {
            "Big Monster cards": "7/7",
            "Big Fight Reference card": "1/1"
        }
    },
    {
        "name": "TWOW(53) 1/1",
        "expansions": "Skellige",
        "cards": {
            "Dagon Bonus Monster cards": "5/5",
            "Skellige Event cards": "30/30",
            "Skellige Exploration cards": "50/50"
        }
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