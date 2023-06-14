import Deck, { MutableDeck, ReadonlyDeck } from "./dataClasses";

type TerrainType = "Mountain" | "Forest" | "Water" | "Any"
type TerrainTokenType = [string, number, TerrainType]

interface TerrainToken {
    readonly name: string;
    readonly number: number;
    readonly type: TerrainType;
}

class MountainToken implements TerrainToken {
    readonly name: string;
    readonly number: number;
    readonly type: TerrainType;

    constructor(number: number, name: string) {
        this.name = name;
        this.number = number;
        this.type = "Mountain";
    }
}

class ForestToken implements TerrainToken {
    readonly name: string;
    readonly number: number;
    readonly type: TerrainType;

    constructor(number: number, name: string) {
        this.name = name;
        this.number = number;
        this.type = "Forest"
    }
}

class WaterToken implements TerrainToken {
    readonly name: string;
    readonly number: number;
    readonly type: TerrainType;

    constructor(number: number, name: string) {
        this.name = name;
        this.number = number;
        this.type = "Water"
    }
}

const MountainTokens: Array<MountainToken> = [
    new MountainToken(2, "Hengfors"),
    new MountainToken(3, "Kaer Morhen"),
    new MountainToken(9, "Cintra"),
    new MountainToken(11, "Beauclair"),
    new MountainToken(13, "Doldeth"),
    new MountainToken(18, "Ard Modron"),
]

const ForestTokens: Array<ForestToken> = [
    new ForestToken(6, "Novigrad"),
    new ForestToken(7, "Vizima"),
    new ForestToken(8, "Vengerberg"),
    new ForestToken(10, "Haern Caduch"),
    new ForestToken(16, "Dhuwod"),
    new ForestToken(17, "Stygga"),
]

const WaterTokens: Array<WaterToken> = [
    new WaterToken(1, "Kaer Seren"),
    new WaterToken(4, "Ban Ard"),
    new WaterToken(5, "Cidaris"),
    new WaterToken(12, "Glenmore"),
    new WaterToken(14, "Loc Ichaer"),
    new WaterToken(15, "Gorthur Guaed"),
]

export default class TerrainTokenDeck {
    /* what do we want?
        * immutable list of each token
        * way to toggle each token as used/unused
        * fetch any unused tokens
        * add used tokens back to the pile
        * prevent any invalid tokens
        * keep track of which tokens are used for what and disallow shuffling them back in
    */
    mountainDeck: ReadonlyDeck<MountainToken>;
    forestDeck: ReadonlyDeck<ForestToken>;
    waterDeck: ReadonlyDeck<WaterToken>;
    allDeck: ReadonlyDeck<TerrainToken>;
    activelyUsedTokens: Deck<TerrainToken>;

    // everything could just be a record: Record<number, object> = {1: {terrainType: "Water", name: Kaer Seren}}

    constructor() {
        this.mountainDeck = new ReadonlyDeck<MountainToken>(MountainTokens)
        this.forestDeck = new ReadonlyDeck<ForestToken>(ForestTokens)
        this.waterDeck = new ReadonlyDeck<WaterToken>(WaterTokens)
        this.allDeck = new ReadonlyDeck<MountainToken | ForestToken | WaterToken>(
            [...MountainTokens, ...ForestTokens, ...WaterTokens]
        )
        this.activelyUsedTokens = new MutableDeck<MountainToken | ForestToken | WaterToken>([])
    }

    drawMountainToken(): MountainToken {
        try {
            return this.mountainDeck.draw();
        } catch (error) {
            this.mountainDeck.repopulate()
        }
        return this.mountainDeck.draw();
    }
    drawForestToken(): ForestToken {
        try {
            return this.forestDeck.draw();
        } catch (error) {
            this.forestDeck.repopulate()
        }
        return this.forestDeck.draw();
    }
    drawWaterToken(): WaterToken {
        try {
            return this.waterDeck.draw();
        } catch (error) {
            this.waterDeck.repopulate()
        }
        return this.waterDeck.draw();
    }

    addTokenToDeck(token: MountainToken | ForestToken | WaterToken) {
        if (token.type === "Mountain" && token instanceof MountainToken) {
            this.mountainDeck.addItem(token)
        } else if (token.type === "Forest" && token instanceof ForestToken) {
            this.forestDeck.addItem(token)
        } else if (token.type === "Water" && token instanceof WaterToken) {
            this.waterDeck.addItem(token)
        } else {
            throw Error(
                `TerrainToken ${token}'s type ${token.type} is not a valid match.` +
                `Can only add "Mountain", "Forest", and "Water".`
            )
        }
    }

    refillDeck(type: TerrainType): void {
        if (type === "Mountain") {
            this.mountainDeck.repopulate()
        } else if (type === "Forest") {
            this.forestDeck.repopulate()
        } else if (type === "Water") {
            this.waterDeck.repopulate()
        } else {
            throw Error(`TerrainType ${type} is not a valid match. Can only add "Mountain", "Forest", and "Water".`)
        }

    }

    refillAllDecks(): void {
        this.refillDeck("Mountain")
        this.refillDeck("Forest")
        this.refillDeck("Water")
    }
}

export {
    TerrainType,
    TerrainTokenType,
    MountainToken,
    ForestToken,
    WaterToken,
    MountainTokens,
    ForestTokens,
    WaterTokens,
    TerrainTokenDeck
}

