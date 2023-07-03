"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stretchGoalMonsters = exports.baseMonsters = exports.levelThreeMonster = exports.levelTwoMonster = exports.levelOneMonster = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const dataClasses_1 = require("./dataClasses");
const react_bootstrap_1 = require("react-bootstrap");
const level1Backside_png_1 = __importDefault(require("../img/monsters/level1Monsters/level1Backside.png"));
const level2Backside_png_1 = __importDefault(require("../img/monsters/level2Monsters/level2Backside.png"));
const level3Backside_png_1 = __importDefault(require("../img/monsters/level3Monsters/level3Backside.png"));
// level 1 monster token imports
const nekkersNest_png_1 = __importDefault(require("../img/monsters/level1Monsters/nekkersNest.png"));
const arachas_png_1 = __importDefault(require("../img/monsters/level1Monsters/arachas.png"));
const archespore_png_1 = __importDefault(require("../img/monsters/level1Monsters/archespore.png"));
const barghest_png_1 = __importDefault(require("../img/monsters/level1Monsters/barghest.png"));
const foglet_png_1 = __importDefault(require("../img/monsters/level1Monsters/foglet.png"));
const harpy_png_1 = __importDefault(require("../img/monsters/level1Monsters/harpy.png"));
const ghoulsNest_png_1 = __importDefault(require("../img/monsters/level1Monsters/ghoulsNest.png"));
const drownersNest_png_1 = __importDefault(require("../img/monsters/level1Monsters/drownersNest.png"));
const rotfiend_png_1 = __importDefault(require("../img/monsters/level1Monsters/rotfiend.png"));
const ekimmara_png_1 = __importDefault(require("../img/monsters/level1Monsters/ekimmara.png"));
// level 2 monster token imports
const griffin_png_1 = __importDefault(require("../img/monsters/level2Monsters/griffin.png"));
const wyvern_png_1 = __importDefault(require("../img/monsters/level2Monsters/wyvern.png"));
const werewolf_png_1 = __importDefault(require("../img/monsters/level2Monsters/werewolf.png"));
const fiend_png_1 = __importDefault(require("../img/monsters/level2Monsters/fiend.png"));
const noonwraith_png_1 = __importDefault(require("../img/monsters/level2Monsters/noonwraith.png"));
const nightwraith_png_1 = __importDefault(require("../img/monsters/level2Monsters/nightwraith.png"));
const waterHag_png_1 = __importDefault(require("../img/monsters/level2Monsters/waterHag.png"));
const manticore_png_1 = __importDefault(require("../img/monsters/level2Monsters/manticore.png"));
const whispess_png_1 = __importDefault(require("../img/monsters/level2Monsters/whispess.png"));
const weavess_png_1 = __importDefault(require("../img/monsters/level2Monsters/weavess.png"));
const penitent_png_1 = __importDefault(require("../img/monsters/level2Monsters/penitent.png"));
const graveHag_png_1 = __importDefault(require("../img/monsters/level2Monsters/graveHag.png"));
// level 3 monster token imports
const leshen_png_1 = __importDefault(require("../img/monsters/level3Monsters/leshen.png"));
const striga_png_1 = __importDefault(require("../img/monsters/level3Monsters/striga.png"));
const bruxa_png_1 = __importDefault(require("../img/monsters/level3Monsters/bruxa.png"));
const glustyworp_png_1 = __importDefault(require("../img/monsters/level3Monsters/glustyworp.png"));
const brewess_png_1 = __importDefault(require("../img/monsters/level3Monsters/brewess.png"));
const yghern_png_1 = __importDefault(require("../img/monsters/level3Monsters/yghern.png"));
const troll_png_1 = __importDefault(require("../img/monsters/level3Monsters/troll.png"));
class monsterClass {
    name = "DefaultMonsterName";
    tokenImgStr = "";
    miniImgStr = "";
    tokenImg() {
        return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Container, { id: 'TokenContainer', className: 'mx-auto px-4 py-2', children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { className: 'justify-content-center', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { xs: 'auto', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Image, { id: `${this.name}IconImage`, src: this.tokenImgStr, width: 150, alt: this.name, roundedCircle: true }) }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { className: 'justify-content-center', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { children: (0, jsx_runtime_1.jsx)("h2", { className: "text-center", children: this.name }) }) })] }));
    }
    miniImg() {
        return ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Container, { fluid: "md", className: 'MiniatureContainer container mx-auto px-4', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { xs: 6, md: 4, lg: 2, className: 'd-flex justify-content-center', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { xs: 8, md: 4, lg: 2, children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Image, { className: "object-contain h-48", src: this.miniImgStr, fluid: true }) }) }) }));
    }
}
class levelOneMonster extends monsterClass {
    name = "DefaultLevelOneName";
    level = 1;
    tokenImgStr = level1Backside_png_1.default;
    tokenBackImgStr = level1Backside_png_1.default;
    miniImgStr = "";
    constructor(name, tokenImgStr, miniImgStr) {
        super();
        if (name)
            this.name = name;
        if (tokenImgStr)
            this.tokenImgStr = tokenImgStr;
        if (miniImgStr)
            this.miniImgStr = miniImgStr;
    }
}
exports.levelOneMonster = levelOneMonster;
class levelTwoMonster extends monsterClass {
    name = "DefaultLevelTwoName";
    level = 2;
    tokenImgStr = level2Backside_png_1.default;
    tokenBackImgStr = level2Backside_png_1.default;
    miniImgStr = "";
    constructor(name, tokenImgStr, miniImgStr) {
        super();
        if (name)
            this.name = name;
        if (tokenImgStr)
            this.tokenImgStr = tokenImgStr;
        if (miniImgStr)
            this.miniImgStr = miniImgStr;
    }
}
exports.levelTwoMonster = levelTwoMonster;
class levelThreeMonster extends monsterClass {
    name = "DefaultLevelThreeName";
    level = 2;
    tokenImgStr = level3Backside_png_1.default;
    tokenBackImgStr = level3Backside_png_1.default;
    miniImgStr = "";
    constructor(name, tokenImgStr, miniImgStr) {
        super();
        if (name)
            this.name = name;
        if (tokenImgStr)
            this.tokenImgStr = tokenImgStr;
        if (miniImgStr)
            this.miniImgStr = miniImgStr;
    }
}
exports.levelThreeMonster = levelThreeMonster;
exports.baseMonsters = {
    "levelOne": ["Nekker's Nest", "Arachas", "Archespore", "Barghest", "Foglet", "Harpy", "Ghoul's Nest"],
    "levelTwo": ["Griffin", "Wyvern", "Werewolf", "Fiend", "Noonwraith"],
    "levelThree": ["Leshen", "Striga", "Bruxa"]
};
exports.stretchGoalMonsters = {
    "levelOne": ["Drowner's Nest", "Rotfiend", "Ekimmara"],
    "levelTwo": ["Nightwraith", "Water Hag", "Manticore", "Whispess", "Weavess", "Penitent", "Grave Hag"],
    "levelThree": ["Glustyworp", "Brewess", "Yghern", "Troll"]
};
const baseLevelOneMonsters = [
    new levelOneMonster("Nekker's Nest", nekkersNest_png_1.default),
    new levelOneMonster("Arachas", arachas_png_1.default),
    new levelOneMonster("archespore", archespore_png_1.default),
    new levelOneMonster("Barghest", barghest_png_1.default),
    new levelOneMonster("Foglet", foglet_png_1.default),
    new levelOneMonster("Harpy", harpy_png_1.default),
    new levelOneMonster("Ghoul's Nest", ghoulsNest_png_1.default),
];
const stretchGoalLevelOneMonsters = [
    new levelOneMonster("Drowner's Nest", drownersNest_png_1.default),
    new levelOneMonster("Rotfiend", rotfiend_png_1.default),
    new levelOneMonster("Ekimmara", ekimmara_png_1.default),
];
const baseLevelTwoMonsters = [
    new levelTwoMonster("Griffin", griffin_png_1.default),
    new levelTwoMonster("Wyvern", wyvern_png_1.default),
    new levelTwoMonster("Werewolf", werewolf_png_1.default),
    new levelTwoMonster("Fiend", fiend_png_1.default),
    new levelTwoMonster("Noonwraith", noonwraith_png_1.default)
];
const stretchGoalLevelTwoMonsters = [
    new levelTwoMonster("Nightwraith", nightwraith_png_1.default),
    new levelTwoMonster("Water Hag", waterHag_png_1.default),
    new levelTwoMonster("Manticore", manticore_png_1.default),
    new levelTwoMonster("Whispess", whispess_png_1.default),
    new levelTwoMonster("Weavess", weavess_png_1.default),
    new levelTwoMonster("Penitent", penitent_png_1.default),
    new levelTwoMonster("Grave Hag", graveHag_png_1.default),
];
const baseLevelThreeMonsters = [
    new levelThreeMonster("Leshen", leshen_png_1.default),
    new levelThreeMonster("Striga", striga_png_1.default),
    new levelThreeMonster("Bruxa", bruxa_png_1.default),
];
const stretchGoalLevelThreeMonsters = [
    new levelThreeMonster("Glustyworp", glustyworp_png_1.default),
    new levelThreeMonster("Brewess", brewess_png_1.default),
    new levelThreeMonster("Yghern", yghern_png_1.default),
    new levelThreeMonster("Troll", troll_png_1.default),
];
class MonstersDeck {
    levelOneMonstersDeck = new dataClasses_1.ReadonlyDeck(baseLevelOneMonsters);
    levelTwoMonstersDeck = new dataClasses_1.ReadonlyDeck(baseLevelTwoMonsters);
    levelThreeMonstersDeck = new dataClasses_1.ReadonlyDeck(baseLevelThreeMonsters);
    constructor(stretchGoalMonsters = false) {
        if (stretchGoalMonsters) {
            this.levelOneMonstersDeck = new dataClasses_1.ReadonlyDeck([...baseLevelOneMonsters, ...stretchGoalLevelOneMonsters]);
            this.levelTwoMonstersDeck = new dataClasses_1.ReadonlyDeck([...baseLevelTwoMonsters, ...stretchGoalLevelTwoMonsters]);
            this.levelThreeMonstersDeck = new dataClasses_1.ReadonlyDeck([...baseLevelThreeMonsters, ...stretchGoalLevelThreeMonsters]);
        }
    }
    drawLevelOneMonster() {
        try {
            return this.levelOneMonstersDeck.draw();
        }
        catch (error) {
            this.levelOneMonstersDeck.repopulate();
        }
        return this.levelOneMonstersDeck.draw();
    }
    drawLevelTwoMonster() {
        try {
            return this.levelTwoMonstersDeck.draw();
        }
        catch (error) {
            this.levelTwoMonstersDeck.repopulate();
        }
        return this.levelTwoMonstersDeck.draw();
    }
    drawLevelThreeMonster() {
        try {
            return this.levelThreeMonstersDeck.draw();
        }
        catch (error) {
            this.levelThreeMonstersDeck.repopulate();
        }
        return this.levelThreeMonstersDeck.draw();
    }
}
exports.default = MonstersDeck;
