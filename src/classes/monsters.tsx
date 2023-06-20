import React from "react";
import Deck, { MutableDeck, ReadonlyDeck } from "./dataClasses";
import { Container, Row, Col, Image } from "react-bootstrap";
import levelOneBackside from "../img/monsters/level1Monsters/levelOneBackside.png"
import levelTwoBackside from "../img/monsters/level2Monsters/levelTwoBackside.png"
import levelThreeBackside from "../img/monsters/level3Monsters/levelThreeBackside.png"

// level 1 monster token imports
import nekkersNest from "../img/monsters/level1Monsters/nekkersNest.png"
import arachas from "../img/monsters/level1Monsters/arachas.png"
import archspore from "../img/monsters/level1Monsters/archspore.png"
import barghest from "../img/monsters/level1Monsters/barghest.png"
import foglet from "../img/monsters/level1Monsters/foglet.png"
import harpy from "../img/monsters/level1Monsters/harpy.png"
import ghoulsNest from "../img/monsters/level1Monsters/ghoulsNest.png"
import drownersNest from "../img/monsters/level1Monsters/drownersNest.png"
import rotfiend from "../img/monsters/level1Monsters/rotfiend.png"
import ekimmara from "../img/monsters/level1Monsters/ekimmara.png"

// level 2 monster token imports
import griffin from "../img/monsters/level2Monsters/griffin.png"
import wyvern from "../img/monsters/level2Monsters/wyvern.png"
import werewolf from "../img/monsters/level2Monsters/werewolf.png"
import fiend from "../img/monsters/level2Monsters/fiend.png"
import noonwraith from "../img/monsters/level2Monsters/noonwraith.png"
import nightwraith from "../img/monsters/level2Monsters/nightwraith.png"
import waterHag from "../img/monsters/level2Monsters/waterHag.png"
import manticore from "../img/monsters/level2Monsters/manticore.png"
import whispess from "../img/monsters/level2Monsters/whispess.png"
import weavess from "../img/monsters/level2Monsters/weavess.png"
import penitent from "../img/monsters/level2Monsters/penitent.png"
import graveHag from "../img/monsters/level2Monsters/graveHag.png"

// level 3 monster token imports
import leshen from "../img/monsters/level3Monsters/leshen.png"
import striga from "../img/monsters/level3Monsters/striga.png"
import bruxa from "../img/monsters/level3Monsters/bruxa.png"
import glustyworp from "../img/monsters/level3Monsters/glustyworp.png"
import brewess from "../img/monsters/level3Monsters/brewess.png"
import yghern from "../img/monsters/level3Monsters/yghern.png"
import troll from "../img/monsters/level3Monsters/troll.png"

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
interface monsterToken {
    readonly name: string;
    readonly level: number;
    readonly tokenImgStr: string;
    readonly tokenBackImgStr: string;
    readonly miniImgStr: string;
    tokenImg(): React.ReactNode;
    miniImg(): React.ReactNode;
}

abstract class monsterClass {
    readonly tokenImgStr: string = "";
    readonly miniImgStr: string = "";
    tokenImg(): React.ReactNode {
        return (
            <Container fluid="md" className='TokenContainer container mx-auto px-4'>
                <Row xs={6} md={4} lg={2} className='d-flex justify-content-center'>
                    <Col xs={8} md={4} lg={2}>
                        <Image className="object-contain h-48 overflow-hidden" src={this.tokenImgStr} roundedCircle fluid />
                    </Col>
                </Row>
            </Container>
        );
    }
    miniImg(): React.ReactNode {
        return (
            <Container fluid="md" className='MiniatureContainer container mx-auto px-4'>
                <Row xs={6} md={4} lg={2} className='d-flex justify-content-center'>
                    <Col xs={8} md={4} lg={2}>
                        <Image className="object-contain h-48 overflow-hidden" src={this.miniImgStr} roundedCircle fluid />
                    </Col>
                </Row>
            </Container>
        );
    }
}

class levelOneMonster extends monsterClass implements monsterToken {
    readonly name: string;
    readonly level: number = 1;
    readonly tokenImgStr: string;
    readonly tokenBackImgStr: string = levelOneBackside;
    readonly miniImgStr: string;

    constructor(
        name = "DefaultLevelOneName",
        tokenImgStr: string,
        miniImgStr = "",
    ) {
        super();
        this.name = name;
        this.tokenImgStr = tokenImgStr;
        this.miniImgStr = miniImgStr;
    }
}

class levelTwoMonster extends monsterClass implements monsterToken {
    readonly name: string;
    readonly level: number = 2;
    readonly tokenImgStr: string;
    readonly tokenBackImgStr: string = levelTwoBackside;
    readonly miniImgStr: string;

    constructor(
        name = "DefaultLevelTwoName",
        tokenImgStr: string,
        miniImgStr = "",
    ) {
        super();
        this.name = name;
        this.tokenImgStr = tokenImgStr;
        this.miniImgStr = miniImgStr;
    }
}

class levelThreeMonster extends monsterClass implements monsterToken {
    readonly name: string;
    readonly level: number = 1;
    readonly tokenImgStr: string;
    readonly tokenBackImgStr: string = levelThreeBackside;
    readonly miniImgStr: string = "";

    constructor(
        name = "DefaultLevelThreeName",
        tokenImgStr: string,
        miniImgStr?: string,
    ) {
        super();
        this.name = name;
        this.tokenImgStr = tokenImgStr;
        if (miniImgStr) this.miniImgStr = miniImgStr;
    }
}

const baseMonsters: Record<string, Array<string>> = {
    "levelOne": ["Nekker's Nest", "Arachas", "Archspore", "Barghest", "Foglet", "Harpy", "Ghoul's Nest"],
    "levelTwo": ["Griffin", "Wyvern", "Werewolf", "Fiend", "Noonwraith"],
    "levelThree": ["Leshen", "Striga", "Bruxa"]
}
const stretchGoalMonsters: Record<string, Array<string>> = {
    "levelOne": ["Drowner's Nest", "Rotfiend", "Ekimmara"],
    "levelTwo": ["Nightwraith", "Water Hag", "Manticore", "Whispess", "Weavess", "Penitent", "Grave Hag"],
    "levelThree": ["Glustyworp", "Brewess", "Yghern", "Troll"]
}

const baseLevelOneMonsters: Array<levelOneMonster> = [
    new levelOneMonster("Nekker's Nest", nekkersNest),
    new levelOneMonster("Arachas", arachas),
    new levelOneMonster("Archspore", archspore),
    new levelOneMonster("Barghest", barghest),
    new levelOneMonster("Foglet", foglet),
    new levelOneMonster("Harpy", harpy),
    new levelOneMonster("Ghoul Nest", ghoulsNest),
]

const stretchGoalLevelOneMonsters: Array<levelOneMonster> = [
    new levelOneMonster("Drowner's Nest", drownersNest),
    new levelOneMonster("Rotfiend", rotfiend),
    new levelOneMonster("Ekimmara", ekimmara),
]

const baseLevelTwoMonsters: Array<levelTwoMonster> = [
    new levelTwoMonster("Griffin", griffin),
    new levelTwoMonster("Wyvern", wyvern),
    new levelTwoMonster("Werewolf", werewolf),
    new levelTwoMonster("Fiend", fiend),
    new levelTwoMonster("Noonwraith", noonwraith)
]

const stretchGoalLevelTwoMonsters: Array<levelTwoMonster> = [
    new levelTwoMonster("Nightwraith", nightwraith),
    new levelTwoMonster("Water Hag", waterHag),
    new levelTwoMonster("Manticore", manticore),
    new levelTwoMonster("Whispess", whispess),
    new levelTwoMonster("Weavess", weavess),
    new levelTwoMonster("Penitent", penitent),
    new levelTwoMonster("Grave Hag", graveHag),
]

const baseLevelThreeMonsters: Array<levelThreeMonster> = [
    new levelThreeMonster("Leshen", leshen),
    new levelThreeMonster("Striga", striga),
    new levelThreeMonster("Bruxa", bruxa),
]

const stretchGoalLevelThreeMonsters: Array<levelThreeMonster> = [
    new levelThreeMonster("Glustyworp", glustyworp),
    new levelThreeMonster("Brewess", brewess),
    new levelThreeMonster("Yghern", yghern),
    new levelThreeMonster("Troll", troll),
]

export default class MonstersDeck {
    levelOneMonstersDeck: ReadonlyDeck<levelOneMonster> = new ReadonlyDeck(baseLevelOneMonsters);
    levelTwoMonstersDeck: ReadonlyDeck<levelTwoMonster> = new ReadonlyDeck(baseLevelTwoMonsters);
    levelThreeMonstersDeck: ReadonlyDeck<levelThreeMonster> = new ReadonlyDeck(baseLevelThreeMonsters);
    
    constructor(stretchGoalMonsters = false,) {
        if (stretchGoalMonsters) {
            this.levelOneMonstersDeck = new ReadonlyDeck([...baseLevelOneMonsters, ...stretchGoalLevelOneMonsters]);
            this.levelTwoMonstersDeck = new ReadonlyDeck([...baseLevelTwoMonsters, ...stretchGoalLevelTwoMonsters]);
            this.levelThreeMonstersDeck = new ReadonlyDeck([...baseLevelThreeMonsters, ...stretchGoalLevelThreeMonsters]);
        }
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
}

// TODO: when users are choosing their options, provide checkboxes for expansions or an all-in
