import listify from "../util/listify";

export const startingResources = {
    1: {
        "player1": "5 cards, 3 gold"
    },
    2: {
        "player1": "3 cards, 2 gold",
        "player2": "5 cards, 4 gold"
    },
    3: {
        "player1": "3 cards, 2 gold",
        "player2": "4 cards, 4 gold",
        "player3": "5 cards, 6 gold"
    },
    4: {
        "player1": "2 cards, 4 gold",
        "player2": "3 cards, 5 gold",
        "player3": "4 cards, 6 gold",
        "player4": "5 cards, 7 gold"
    },
    5: {
        "player1": "2 cards, 5 gold",
        "player2": "3 cards, 5 gold",
        "player3": "4 cards, 5 gold",
        "player4": "4 cards, 7 gold",
        "player5": "5 cards, 7 gold"
    },
}

export function compileSteps(
    legendaryHunt = false,
    mages = false,
    monsterPack = false,
    monsterTrail = false,
    skellige = false,
    lostMount = false,
    numPlayers = 1,
): Array<string | Array<string>> {
    if (numPlayers < 1 || numPlayers > 5) {
        throw new Error("Error, number of players is invalid. Must be between 1 and 5.");
    }
    const finalSteps: Array<string> = [];
    let temp = "", temp2 = "", temp3 = "", tempArr: Array<string> = [], tempArr2: Array<string> = [];

    finalSteps.push("Set out the playmat or game boards.");
    if (legendaryHunt) finalSteps.push("Put the large Legendary Hunt help near the board. Use Side B for a longer game.");
    if (skellige) finalSteps.push("Shuffle the Harbor tokens (anchor side up) and place them on the coastal locations (1, 5, 6, 9, 12, 13). Flip them over, place a Ship miniature on the three locations with a ship symbol, then flip them back to the anchor side (as a reminder).");
    finalSteps.push("Shuffle the Action Card deck and place it above the Action Card slots. Reveal cards until you have 3 “0-cost” cards, which go in the 3 lowest spaces (face up). Reshuffle any other revealed cards, then reveal 3 more cards for the remaining spaces (face up).");
    if (mages) finalSteps.push("Repeat the above step for the Mage Action Cards. (Or replace that step if everyone is playing a mage.)");
    if (numPlayers == 1) {
        temp = "Draw 1 random Attribute Trophy and place it on the edge of the board, below the Exploration Card slots, face up.";
    } else if (numPlayers == 2 || numPlayers == 3) {
        temp = "Draw 4 Attribute Trophies, one for each attribute, and place them on the edge of the board, below the Exploration Card slots, face up.";
    } else if (numPlayers > 3) {
        temp = "Place all 8 Attribute Trophies on the edge of the board, below the Exploration Card slots, face up.";
    }
    finalSteps.push(temp);
    temp = "";
    if (monsterTrail) finalSteps.push("Shuffle the Mutagen Deck and place it below the Attribute Trophy deck.");
    finalSteps.push("Shuffle the Potion deck and place it on the edge of the board, below the Action Cards.");
    if (monsterTrail) finalSteps.push("Shuffle the Bomb deck and place it below the Potion deck.");
    finalSteps.push("Shuffle the City Exploration deck and Wilds Exploration deck. Do not shuffle the Event deck! Place each in the appropriate slot on the game board.");
    if (skellige) finalSteps.push("Shuffle the Skellige Exploration deck. Do not shuffle the Skellige Event deck! Place both in their slots above the islands on the game board.");
    if (monsterTrail) temp = "and the large Dagon card ";
    if (skellige) finalSteps.push(`Place the Dagon miniature on the starting space corresponding to player count. Shuffle the Dagon Bonus deck and place it ${temp}near this track.`);
    if (monsterPack) finalSteps.push("Place the Siren miniature on the Dagon location, with its Monster Card nearby.");
    temp = "";
    if (skellige) temp = "Quest Tokens, ";
    finalSteps.push(`Place Gold Tokens, ${temp}Poker Dice, and Closed Tavern token or mini near the game board.`);
    finalSteps.push("Sort Location Tokens into 3 piles by terrain type. Shuffle each pile and place them (face down) near the game board. Draw 1 token from each pile and place them (face up) on their slots on the game board (to the right of the Monster slots).");
    temp = "Set up Monsters:\n" +
           "a. Sort Monster Cards and Monster Tokens by level (I, II, and III). Place the cards near the game board (face up). Shuffle the tokens and place them near the game board (face down).\n";
    if (numPlayers > 3) {
        temp += `b. Move ${numPlayers - 3} Level I tokens into a separate “additional monsters” stack. See p. 26 of core rules for how these are used.\n"`;
        temp += "c. Draw 3 Monster Tokens:\n";
    } else {
        temp += "b. Draw 3 Monster Tokens:\n";
    }
    if (numPlayers == 1) {
        temp += "• One of each level.\n";
    } else if (numPlayers == 2) {
        temp += "• 2 × Level I and 1 × Level II.\n";
    } else {
        temp += "• 3 × Level I.\n";
    }
    if (numPlayers > 3) {
        temp += "d. Place the three Monster Tokens (randomly) in locations on the map matching the 3 face-up Location Tokens.\n";
        temp += "e. Turn the 3 Monster Tokens face up and place their corresponding Monster Cards in the slots on the game board matching the corresponding Location Tokens. Replace the tokens with miniatures if you have them.";
        if (monsterTrail) temp += "f. Place the 3 corresponding large Monster Cards near the board.";
    } else {
        temp += "c. Place the three Monster Tokens (randomly) in locations on the map matching the 3 face-up Location Tokens.\n";
        temp += "d. Turn the 3 Monster Tokens face up and place their corresponding Monster Cards in the slots on the game board matching the corresponding Location Tokens. Replace the tokens with miniatures if you have them.";
        if (monsterTrail) temp += "e. Place the 3 corresponding large Monster Cards near the board.";
    }
    finalSteps.push(temp);
    temp = "";
    if (monsterTrail) finalSteps.push("Remove 8 Monster Fight cards from the deck. Put 4 back in the box and set 4 aside for later (when a Level III monster appears). Add the Special Attack cards to the Monster Fight deck.");
    finalSteps.push("Shuffle the Monster Fight deck and place it (face down) near the game board.");
    if (legendaryHunt) finalSteps.push("Choose a Legendary Monster. Place its large card and the Special Fight cards (shuffled) near the game board. Place its miniature on the location shown on its card. Shuffle the Destruction Tokens and keep them (face-down) near the board.");
    // TODO: include link or embed player board randomizer in below step
    finalSteps.push("Determine the starting player randomly, or it is whoever most recently read a Witcher book. Players choose Player Boards via any method they wish; see p. 7 of core rules for a fair drafting method.");
    if (mages) temp2 = "or Energy ";
    monsterTrail ? temp3 = "11" : temp3 = "10";
    temp = `Each player must:`;
    tempArr.push(`Take a Help Card, player board, and matching miniature (with colored ring), cubes, Shield ${temp2}marker, scoring token, and starting deck of ${temp3} cards. (Starting cards have a School icon in the top right corner.)`);
    temp2 = "", temp3 = "";
    tempArr.push(`Take ${numPlayers - 1} of their Witcher${mages ? "/Mage" : ""} Trophy Cards (equal to the other players)`);
    if (mages) tempArr.push("If a mage, place their School and Specialty tokens on the map, covering those of an unused Witcher School.");
    tempArr.push(`Place the 5 cubes and Shield ${mages ? "or Energy " : ""}marker on the lowest (“level 1”) spot of each player board track.`);
    if (numPlayers > 3) tempArr.push("Choose one Attribute to raise to level 2.");
    tempArr.push("Place the scoring token on the lowest spot of the Trophy Track.");
    tempArr.push("Shuffle their starting cards and set the deck to the left of their board.");
    tempArr.push("Place their miniature on their School location on the map.");
    tempArr.push(`Draw the following cards and gold based on player position: ${startingResources[numPlayers]}`);
    tempArr2 = listify(tempArr);
    tempArr2.forEach(val => {
        temp += "\n" + val;
    });
    finalSteps.push(temp);
    temp = "", tempArr = [], tempArr2 = [];
    if (monsterTrail) finalSteps.push("Draw 3 Location Tokens (1 of each terrain). If a Witcher is in that location, draw again. Place a random, face-down Monster Weakness token matching that terrain type at each location. Shuffle these location tokens back into their stacks.");
    if (legendaryHunt) finalSteps.push("The last player in turn order takes the Legendary Monster Movement deck (shuffled, face down).");
    if (lostMount) finalSteps.push("Then they draw two Location Tokens (of any terrain), choose one to put the Lost Mount miniature at, and shuffle the tokens back in.");

    return finalSteps;
}