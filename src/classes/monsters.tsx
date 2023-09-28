import React from "react";
import { ReadonlyDeck } from "./dataClasses";
import { Container, Row, Col, Image } from "react-bootstrap";
import TokenContainer from '../components/TokenContainer';

/*
Identify what monsters come in which expansions and set toggles for each
    * Base set: 15 monsters
        * level 1: Nekker's Nest, Arachas, archespore, Barghest, Foglet, Harpy, Ghoul Nest
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
    * Legendary Hunt: 8 monsters
        * Imperial Golem
        * Cyclops
        * Cave Troll
        * Toad
        * Frightener
        * Unseen Elder
        * Ice Giant
        * Gaunter O'Dimm
    * Skellige: 1 monster
        * level 3: Dagon
    * Mounted Eredin: 1 monster
        * level 3: Mounted Eredin
    * Monster Pack (KS Exclusive):
        * level 1: Siren (Skellige)
        * level 3: Koshchey (Mages)
        * level Legendary: Kayran (Legendary Hunt)
        * "[Koshchey] can only be used when playing with Mages." - https://www.kickstarter.com/projects/goonboard/the-witcher/posts/3212946

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

interface monsterToken {
    readonly name: string;
    readonly level: number;
    readonly tokenImgStr: string;
    readonly tokenBackImgStr: string;
    readonly miniImgStr: string;
    tokenImg(t): React.ReactNode;
    miniImg(): React.ReactNode;
}

abstract class monsterClass {
    readonly name: string = "";
    readonly level: number = 1;
    readonly tokenImgStr: string = "level1Backside";
    readonly miniImgStr: string = "level1Backside";
    src = `../img/monsters/level${this.level}Monsters/${this.tokenImgStr}.png`;
    tName = `monsters.${this.name}`;
    tokenImg(t): React.ReactNode {
        return (
            <TokenContainer
                t={t}
                src={this.src}
                name={this.name}
                tName={this.tName}
            />
        );
    }
    miniImg(): React.ReactNode {
        return (
            <Container fluid="md" className='MiniatureContainer container mx-auto px-4'>
                <Row xs={6} md={4} lg={2} className='d-flex justify-content-center'>
                    <Col xs={8} md={4} lg={2}>
                        <Image
                            className="object-contain h-48"
                            src={this.miniImgStr}
                            height={150}
                            alt={this.name}
                            loading='lazy'
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export class levelOneMonster extends monsterClass implements monsterToken {
    readonly name: string = "";
    readonly level: number = 1;
    readonly tokenImgStr: string = "level1Backside";
    readonly tokenBackImgStr: string = "level1Backside";
    readonly miniImgStr: string = "";

    constructor(
        name?: string,
        tokenImgStr?: string,
        miniImgStr?: string,
    ) {
        super();
        if (name) this.name = name;
        if (tokenImgStr) this.tokenImgStr = tokenImgStr;
        if (miniImgStr) this.miniImgStr = miniImgStr;
        this.tName = `monsters.${this.name}`;
        this.src = require(`../img/monsters/level1Monsters/${this.tokenImgStr}.png`)
    }
}

export class levelTwoMonster extends monsterClass implements monsterToken {
    readonly name: string = "";
    readonly level: number = 2;
    readonly tokenImgStr: string = "level2Backside";
    readonly tokenBackImgStr: string = "level2Backside";
    readonly miniImgStr: string = "";

    constructor(
        name?: string,
        tokenImgStr?: string,
        miniImgStr?: string,
    ) {
        super();
        if (name) this.name = name;
        if (tokenImgStr) this.tokenImgStr = tokenImgStr;
        if (miniImgStr) this.miniImgStr = miniImgStr;
        this.tName = `monsters.${this.name}`;
        this.src = require(`../img/monsters/level2Monsters/${this.tokenImgStr}.png`)
    }
}

export class levelThreeMonster extends monsterClass implements monsterToken {
    readonly name: string = "";
    readonly level: number = 3;
    readonly tokenImgStr: string = "level3Backside";
    readonly tokenBackImgStr: string = "level3Backside";
    readonly miniImgStr: string = "";

    constructor(
        name?: string,
        tokenImgStr?: string,
        miniImgStr?: string,
    ) {
        super();
        if (name) this.name = name;
        if (tokenImgStr) this.tokenImgStr = tokenImgStr;
        if (miniImgStr) this.miniImgStr = miniImgStr;
        this.tName = `monsters.${this.name}`;
        this.src = require(`../img/monsters/level3Monsters/${this.tokenImgStr}.png`)
    }
}

export class legendaryMonster extends monsterClass implements monsterToken {
    readonly name: string = "";
    readonly level: number = 4;
    readonly tokenImgStr: string = "level3Backside";
    readonly tokenBackImgStr: string = "level3Backside";
    readonly miniImgStr: string = "";

    constructor(
        name?: string,
        tokenImgStr?: string,
        miniImgStr?: string,
    ) {
        super();
        if (name) this.name = name;
        if (tokenImgStr) this.tokenImgStr = tokenImgStr;
        if (miniImgStr) this.miniImgStr = miniImgStr;
        this.tName = `monsters.${this.name}`;
        this.src = require(`../img/monsters/${this.__isWildHunt() ? 'wildHunt' : 'legendaryHunt'}/${this.tokenImgStr}.png`);
    }

    private __isWildHunt(): boolean {
        const wildHuntNames = ['Eredin', 'Nithral', 'Imlerith', 'Caranthir'];
        return wildHuntNames.includes(this.name);
    }
}

export const baseMonsters: Record<string, Array<string>> = {
    "levelOne": ["Nekker's Nest", "Arachas", "Archespore", "Barghest", "Foglet", "Harpy", "Ghoul's Nest"],
    "levelTwo": ["Griffin", "Wyvern", "Werewolf", "Fiend", "Noonwraith"],
    "levelThree": ["Leshen", "Striga", "Bruxa"]
};
export const stretchGoalMonsters: Record<string, Array<string>> = {
    "levelOne": ["Drowner's Nest", "Rotfiend", "Ekimmara"],
    "levelTwo": ["Nightwraith", "Water Hag", "Manticore", "Whispess", "Weavess", "Penitent", "Grave Hag"],
    "levelThree": ["Glustyworp", "Brewess", "Yghern", "Troll"]
};

const baseLevelOneMonsters: Array<levelOneMonster> = [
    new levelOneMonster("Nekker's Nest", "nekkersNest"),
    new levelOneMonster("Arachas", "arachas"),
    new levelOneMonster("Archespore", "archespore"),
    new levelOneMonster("Barghest", "barghest"),
    new levelOneMonster("Foglet", "foglet"),
    new levelOneMonster("Harpy", "harpy"),
    new levelOneMonster("Ghoul's Nest", "ghoulsNest"),
    new levelOneMonster("Drowner's Nest", "drownersNest"),
    new levelOneMonster("Rotfiend", "rotfiend"),
    new levelOneMonster("Ekimmara", "ekimmara"),
];

const baseLevelTwoMonsters: Array<levelTwoMonster> = [
    new levelTwoMonster("Griffin", "griffin"),
    new levelTwoMonster("Wyvern", "wyvern"),
    new levelTwoMonster("Werewolf", "werewolf"),
    new levelTwoMonster("Fiend", "fiend"),
    new levelTwoMonster("Noonwraith", "noonwraith"),
    new levelTwoMonster("Nightwraith", "nightwraith"),
    new levelTwoMonster("Water Hag", "waterHag"),
    new levelTwoMonster("Manticore", "manticore"),
    new levelTwoMonster("Whispess", "whispess"),
    new levelTwoMonster("Weavess", "weavess"),
    new levelTwoMonster("Penitent", "penitent"),
    new levelTwoMonster("Grave Hag", "graveHag"),
];

const baseLevelThreeMonsters: Array<levelThreeMonster> = [
    new levelThreeMonster("Leshen", "leshen"),
    new levelThreeMonster("Striga", "striga"),
    new levelThreeMonster("Bruxa", "bruxa"),
    new levelThreeMonster("Glustyworp", "glustyworp"),
    new levelThreeMonster("Brewess", "brewess"),
    new levelThreeMonster("Yghern", "yghern"),
    new levelThreeMonster("Troll", "troll"),
];

const legendaryHuntLegendaryMonsters: Array<legendaryMonster> = [
    new legendaryMonster("Imperial Golem", "imperialGolem"),
    new legendaryMonster("Cyclops", "cyclops"),
    new legendaryMonster("Cave Troll", "cyclops"),
    new legendaryMonster("Toad", "toad"),
    new legendaryMonster("Frightener", "frightener"),
    new legendaryMonster("Unseen Elder", "unseenElder"),
    new legendaryMonster("Ice Giant", "iceGiant"),
    new legendaryMonster("Gaunter O'Dimm", "gaunterODimm"),
];

const wildHuntLegendaryMonsters: Array<legendaryMonster> = [
    new legendaryMonster("Eredin", "eredinMini"),
    new legendaryMonster("Nithral", "nithralMini"),
    new legendaryMonster("Imlerith", "imlerithMini"),
    new legendaryMonster("Caranthir", "caranthirMini"),
];

export default class MonstersDeck {
    levelOneMonstersDeck: ReadonlyDeck<levelOneMonster>;
    levelTwoMonstersDeck: ReadonlyDeck<levelTwoMonster>;
    levelThreeMonstersDeck: ReadonlyDeck<levelThreeMonster>;
    legendaryMonstersDeck: ReadonlyDeck<legendaryMonster>;

    constructor(
        legendaryHunt = false,
        wildHunt = false,
        monsterPack = false,
        mountedEredin = false,
    ) {
        const tempLevelOneMonstersDeck: levelOneMonster[] = [...baseLevelOneMonsters];
        const tempLevelTwoMonstersDeck: levelTwoMonster[] = [...baseLevelTwoMonsters];
        const tempLevelThreeMonstersDeck: levelThreeMonster[] = [...baseLevelThreeMonsters];
        const tempLegendaryMonstersDeck: legendaryMonster[] = [];

        if (legendaryHunt && !wildHunt) {
            tempLegendaryMonstersDeck.push(...legendaryHuntLegendaryMonsters);
        }
        if (wildHunt && !legendaryHunt) {
            tempLegendaryMonstersDeck.push(...wildHuntLegendaryMonsters);
        }
        if (monsterPack) {
            tempLevelThreeMonstersDeck.push(new levelThreeMonster("Koshchey", "koshchey"));
            if (legendaryHunt) tempLegendaryMonstersDeck.push(new legendaryMonster("Kayran", "kayran"));
        }
        if (mountedEredin) tempLevelThreeMonstersDeck.push(new levelThreeMonster("Mounted Eredin", "mountedEredin"));

        this.levelOneMonstersDeck = new ReadonlyDeck(tempLevelOneMonstersDeck);
        this.levelTwoMonstersDeck = new ReadonlyDeck(tempLevelTwoMonstersDeck);
        this.levelThreeMonstersDeck = new ReadonlyDeck(tempLevelThreeMonstersDeck);
        this.legendaryMonstersDeck = new ReadonlyDeck(tempLegendaryMonstersDeck);

        this.levelOneMonstersDeck.shuffle();
        this.levelTwoMonstersDeck.shuffle();
        this.levelThreeMonstersDeck.shuffle();
        this.legendaryMonstersDeck.shuffle();
    }

    drawLevelOneMonster(): levelOneMonster {
        try {
            return this.levelOneMonstersDeck.draw();
        } catch (error) {
            this.levelOneMonstersDeck.repopulate();
        }
        return this.levelOneMonstersDeck.draw();
    }
    drawLevelTwoMonster(): levelTwoMonster {
        try {
            return this.levelTwoMonstersDeck.draw();
        } catch (error) {
            this.levelTwoMonstersDeck.repopulate();
        }
        return this.levelTwoMonstersDeck.draw();
    }
    drawLevelThreeMonster(): levelThreeMonster {
        try {
            return this.levelThreeMonstersDeck.draw();
        } catch (error) {
            this.levelThreeMonstersDeck.repopulate();
        }
        return this.levelThreeMonstersDeck.draw();
    }
    drawLegendaryMonster(): legendaryMonster {
        try {
            return this.legendaryMonstersDeck.draw();
        } catch (error) {
            this.legendaryMonstersDeck.repopulate();
        }
        return this.legendaryMonstersDeck.draw();
    }
}
