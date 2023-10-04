import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";
import { ReadonlyDeck } from "./dataClasses";

type TerrainType = "Mountain" | "Forest" | "Water" | "Any";
type TerrainTokenType = [string, number, TerrainType];
export type TerrainLocation = {
    name: string,
    num: number,
    type: TerrainType,
    coastal: boolean;
};

const beheltNar: TerrainLocation = {
    name: "Behelt Nar",
    num: 0,
    type: "Any",
    coastal: false
};
const kaerSeren: TerrainLocation = {
    name: "Kaer Seren",
    num: 1,
    type: "Water",
    coastal: true
};
const hengfors: TerrainLocation = {
    name: "Hengfors",
    num: 2,
    type: "Water",
    coastal: false
};
const kaerMorhen: TerrainLocation = {
    name: "Kaer Morhen",
    num: 3,
    type: "Water",
    coastal: false
};
const banArd: TerrainLocation = {
    name: "Ban Ard",
    num: 4,
    type: "Water",
    coastal: false
};
const cidaris: TerrainLocation = {
    name: "Cidaris",
    num: 5,
    type: "Water",
    coastal: true
};
const novigrad: TerrainLocation = {
    name: "Novigrad",
    num: 6,
    type: "Water",
    coastal: true
};
const vizima: TerrainLocation = {
    name: "Vizima",
    num: 7,
    type: "Water",
    coastal: false
};
const vengerberg: TerrainLocation = {
    name: "Vengerberg",
    num: 8,
    type: "Water",
    coastal: false
};
const cintra: TerrainLocation = {
    name: "Cintra",
    num: 9,
    type: "Water",
    coastal: true
};
const haernCaduch: TerrainLocation = {
    name: "Haern Caduch",
    num: 10,
    type: "Water",
    coastal: false
};
const beauclair: TerrainLocation = {
    name: "Beauclair",
    num: 11,
    type: "Water",
    coastal: false
};
const glenmore: TerrainLocation = {
    name: "Glenmore",
    num: 12,
    type: "Water",
    coastal: true
};
const doldeth: TerrainLocation = {
    name: "Doldeth",
    num: 13,
    type: "Water",
    coastal: true
};
const locIchaer: TerrainLocation = {
    name: "Loc Ichaer",
    num: 14,
    type: "Water",
    coastal: false
};
const gorthurGvaed: TerrainLocation = {
    name: "Gorthur Gvaed",
    num: 15,
    type: "Water",
    coastal: false
};
const dhuwod: TerrainLocation = {
    name: "Dhuwod",
    num: 16,
    type: "Water",
    coastal: false
};
const stygga: TerrainLocation = {
    name: "Stygga",
    num: 17,
    type: "Water",
    coastal: false
};
const ardModron: TerrainLocation = {
    name: "Ard Modron",
    num: 18,
    type: "Water",
    coastal: false
};
const ardSkellig: TerrainLocation = {
    name: "Ard Skellig",
    num: 19,
    type: "Water",
    coastal: false
};
const isleOfMists: TerrainLocation = {
    name: "Isle of Mists",
    num: 20,
    type: "Water",
    coastal: false
};
const eyna: TerrainLocation = {
    name: "Eyna",
    num: 21,
    type: "Water",
    coastal: false
};

export const terrainLocations: ReadonlyArray<TerrainLocation> = [
    beheltNar, kaerSeren, hengfors, kaerMorhen, banArd, cidaris, novigrad, vizima, vengerberg, cintra, haernCaduch,
    beauclair, glenmore, doldeth, locIchaer, gorthurGvaed, dhuwod, stygga, ardModron, ardSkellig, isleOfMists, eyna
];

/**
 * Fetches a list of terrainLocation objects and returns them. 
 * @param reqAttrs Add the attribute(s) and value you wish to categorize your desired terrain locations by.
 * 
 * TODO: Add support for equations for number, e.g. '> 15' or '5 < x < 20'
 */
export function getTerrainLocations(
        reqAttrs: { num?: number, type?: TerrainType, coastal?: boolean; }
    ): TerrainLocation[] {
    let retArray: TerrainLocation[] = [];
    retArray = terrainLocations.filter((loc) => {
        return loc.num === reqAttrs.num || loc.type === reqAttrs.type || loc.coastal === reqAttrs.coastal;
    });

    return retArray;
}

interface TerrainToken {
    readonly name: string;
    readonly number: number;
    readonly type: TerrainType;
    readonly imgStr: string;
}

abstract class TerrainTokenClass {
    readonly name: string = "DefaultTokenName";
    readonly imgStr: string = "";
    img(): React.ReactNode {
        return (
            <Container id='TokenContainer' className='px-4 py-2 m-2'>
                <Row className="justify-content-center">
                    <Col xs='auto'>
                        <Image
                            id={`${this.name}IconImage`}
                            src={require(`../img/tokens/reducedTerrainTokens/${this.imgStr}.png`)}
                            width={150}
                            alt={this.name}
                            loading='lazy'
                            roundedCircle
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

class MountainToken extends TerrainTokenClass implements TerrainToken {
    readonly name: string;
    readonly number: number;
    readonly type: TerrainType;
    readonly imgStr: string;

    constructor(number = -1, name = "DefaultMountainToken", img = "MountainBack") {
        super();
        this.name = name;
        this.number = number;
        this.type = "Mountain";
        this.imgStr = img;
    }
}

class ForestToken extends TerrainTokenClass implements TerrainToken {
    readonly name: string;
    readonly number: number;
    readonly type: TerrainType;
    readonly imgStr: string;

    constructor(number = -1, name = "DefaultForestToken", img = "ForestBack") {
        super();
        this.name = name;
        this.number = number;
        this.type = "Forest";
        this.imgStr = img;
    }
}

class WaterToken extends TerrainTokenClass implements TerrainToken {
    readonly name: string;
    readonly number: number;
    readonly type: TerrainType;
    readonly imgStr: string;

    constructor(number = -1, name = "DefaultWaterToken", img = "WaterBack") {
        super();
        this.name = name;
        this.number = number;
        this.type = "Water";
        this.imgStr = img;
    }
}

const MountainTokens: MountainToken[] = [
    new MountainToken(2, "Hengfors", "Mountain2Hengfors"),
    new MountainToken(3, "Kaer Morhen", "Mountain3KaerMorhen"),
    new MountainToken(9, "Cintra", "Mountain9Cintra"),
    new MountainToken(11, "Beauclair", "Mountain11Beauclair"),
    new MountainToken(13, "Doldeth", "Mountain13Doldeth"),
    new MountainToken(18, "Ard Modron", "Mountain18ArdModron"),
];

const MountainTokensSkellige: MountainToken[] = [
    new MountainToken(2, "Hengfors", "Mountain2Hengfors"),
    new MountainToken(3, "Kaer Morhen", "Mountain3KaerMorhen"),
    new MountainToken(9, "Cintra", "Mountain9Cintra"),
    new MountainToken(11, "Beauclair", "Mountain11Beauclair"),
    new MountainToken(13, "Doldeth", "Mountain13Doldeth"),
    new MountainToken(18, "Ard Modron", "Mountain18ArdModron"),
    new MountainToken(19, "Ard Skellig", "Mountain19ArdSkellig")
];

const ForestTokens: ForestToken[] = [
    new ForestToken(6, "Novigrad", "Forest6Novigrad"),
    new ForestToken(7, "Vizima", "Forest7Vizima"),
    new ForestToken(8, "Vengerberg", "Forest8Vengerberg"),
    new ForestToken(10, "Haern Caduch", "Forest10HaernCaduch"),
    new ForestToken(16, "Dhuwod", "Forest16Dhuwod"),
    new ForestToken(17, "Stygga", "Forest17Stygga"),
];

const ForestTokensSkellige: ForestToken[] = [
    new ForestToken(6, "Novigrad", "Forest6Novigrad"),
    new ForestToken(7, "Vizima", "Forest7Vizima"),
    new ForestToken(8, "Vengerberg", "Forest8Vengerberg"),
    new ForestToken(10, "Haern Caduch", "Forest10HaernCaduch"),
    new ForestToken(16, "Dhuwod", "Forest16Dhuwod"),
    new ForestToken(17, "Stygga", "Forest17Stygga"),
    new ForestToken(21, "Eyna", "Forest21Eyna")
];

const WaterTokens: WaterToken[] = [
    new WaterToken(1, "Kaer Seren", "Water1KaerSeren"),
    new WaterToken(4, "Ban Ard", "Water4BanArd"),
    new WaterToken(5, "Cidaris", "Water5Cidaris"),
    new WaterToken(12, "Glenmore", "Water12Glenmore"),
    new WaterToken(14, "Loc Ichaer", "Water14LocIchaer"),
    new WaterToken(15, "Gorthur Gvaed", "Water15GorthurGvaed"),
];

const WaterTokensSkellige: WaterToken[] = [
    new WaterToken(1, "Kaer Seren", "Water1KaerSeren"),
    new WaterToken(4, "Ban Ard", "Water4BanArd"),
    new WaterToken(5, "Cidaris", "Water5Cidaris"),
    new WaterToken(12, "Glenmore", "Water12Glenmore"),
    new WaterToken(14, "Loc Ichaer", "Water14LocIchaer"),
    new WaterToken(15, "Gorthur Gvaed", "Water15GorthurGvaed"),
    new WaterToken(20, "Isle of Mists", "Water20IsleOfMists")
];

export default class TerrainTokenDeck {
    mountainDeck: ReadonlyDeck<MountainToken>;
    forestDeck: ReadonlyDeck<ForestToken>;
    waterDeck: ReadonlyDeck<WaterToken>;
    allDeck: ReadonlyDeck<TerrainToken>;
    skellige: boolean;

    constructor(skellige = false) {
        this.skellige = skellige;
        if (skellige === true) {
            this.mountainDeck = new ReadonlyDeck<MountainToken>(MountainTokensSkellige);
            this.forestDeck = new ReadonlyDeck<ForestToken>(ForestTokensSkellige);
            this.waterDeck = new ReadonlyDeck<WaterToken>(WaterTokensSkellige);
            this.allDeck = new ReadonlyDeck<MountainToken | ForestToken | WaterToken>(
                [...MountainTokensSkellige, ...ForestTokensSkellige, ...WaterTokensSkellige]
            );
        } else {
            this.mountainDeck = new ReadonlyDeck<MountainToken>(MountainTokens);
            this.forestDeck = new ReadonlyDeck<ForestToken>(ForestTokens);
            this.waterDeck = new ReadonlyDeck<WaterToken>(WaterTokens);
            this.allDeck = new ReadonlyDeck<MountainToken | ForestToken | WaterToken>(
                [...MountainTokens, ...ForestTokens, ...WaterTokens]
            );
        }

        this.mountainDeck.shuffle();
        this.forestDeck.shuffle();
        this.waterDeck.shuffle();
    }

    drawMountainToken(): MountainToken {
        try {
            return this.mountainDeck.draw();
        } catch (error) {
            this.mountainDeck.repopulate();
        }
        return this.mountainDeck.draw();
    }
    drawForestToken(): ForestToken {
        try {
            return this.forestDeck.draw();
        } catch (error) {
            this.forestDeck.repopulate();
        }
        return this.forestDeck.draw();
    }
    drawWaterToken(): WaterToken {
        try {
            return this.waterDeck.draw();
        } catch (error) {
            this.waterDeck.repopulate();
        }
        return this.waterDeck.draw();
    }

    addTokenBackToDeck(token: MountainToken | ForestToken | WaterToken) {
        if (token.type === "Mountain" && token instanceof MountainToken) {
            this.mountainDeck.returnItem(token);
        } else if (token.type === "Forest" && token instanceof ForestToken) {
            this.forestDeck.returnItem(token);
        } else if (token.type === "Water" && token instanceof WaterToken) {
            this.waterDeck.returnItem(token);
        } else {
            throw new Error(
                `TerrainToken ${token}'s type ${token.type} is not a valid match.` +
                `Can only add "Mountain", "Forest", and "Water".`
            );
        }
    }

    refillDeck(type: TerrainType): void {
        if (type === "Mountain") {
            this.mountainDeck.repopulate();
        } else if (type === "Forest") {
            this.forestDeck.repopulate();
        } else if (type === "Water") {
            this.waterDeck.repopulate();
        } else {
            throw new Error(`TerrainType ${type} is not a valid match. Can only add "Mountain", "Forest", and "Water".`);
        }
    }

    refillAllDecks(): void {
        this.refillDeck("Mountain");
        this.refillDeck("Forest");
        this.refillDeck("Water");
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
};
