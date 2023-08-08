"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stretchGoalMonsters = exports.baseMonsters = exports.legendaryMonster = exports.levelThreeMonster = exports.levelTwoMonster = exports.levelOneMonster = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const dataClasses_1 = require("./dataClasses");
const react_bootstrap_1 = require("react-bootstrap");
class monsterClass {
    name = "DefaultMonsterName";
    level = 1;
    tokenImgStr = "";
    miniImgStr = "";
    tokenImg() {
        return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Container, { id: 'TokenContainer', className: 'mx-auto px-4 py-2', children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { className: 'justify-content-center', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { xs: 'auto', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Image, { id: `${this.name}IconImage`, src: require(`../img/monsters/level${this.level}Monsters/${this.tokenImgStr}.png`), height: 150, alt: this.name, loading: 'lazy' }) }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { className: 'justify-content-center', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { children: (0, jsx_runtime_1.jsx)("h2", { className: "text-center", children: this.name }) }) })] }));
    }
    miniImg() {
        return ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Container, { fluid: "md", className: 'MiniatureContainer container mx-auto px-4', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { xs: 6, md: 4, lg: 2, className: 'd-flex justify-content-center', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { xs: 8, md: 4, lg: 2, children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Image, { className: "object-contain h-48", src: this.miniImgStr, height: 150, alt: this.name, loading: 'lazy' }) }) }) }));
    }
}
class levelOneMonster extends monsterClass {
    name = "DefaultLevelOneName";
    level = 1;
    tokenImgStr = "level1Backside";
    tokenBackImgStr = "level1Backside";
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
    tokenImgStr = "level2Backside";
    tokenBackImgStr = "level2Backside";
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
    level = 3;
    tokenImgStr = "level3Backside";
    tokenBackImgStr = "level3Backside";
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
class legendaryMonster extends monsterClass {
    name = "DefaultLegendaryName";
    level = 4;
    tokenImgStr = "level3Backside";
    tokenBackImgStr = "level3Backside";
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
    __isWildHunt() {
        const wildHuntNames = ['Eredin', 'Nithral', 'Imlerith', 'Caranthir'];
        return wildHuntNames.includes(this.name);
    }
    tokenImg() {
        return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Container, { id: 'TokenContainer', className: 'mx-auto px-4 py-2', children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { className: 'justify-content-center', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { xs: 'auto', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Image, { id: `${this.name}IconImage`, src: require(`../img/monsters/${this.__isWildHunt() ? 'wildHunt' : 'legendaryHunt'}/${this.tokenImgStr}.png`), height: 150, alt: this.name, loading: 'lazy' }) }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { className: 'justify-content-center', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { children: (0, jsx_runtime_1.jsx)("h2", { className: "text-center", children: this.name }) }) })] }));
    }
}
exports.legendaryMonster = legendaryMonster;
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
const baseLevelTwoMonsters = [
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
const baseLevelThreeMonsters = [
    new levelThreeMonster("Leshen", "leshen"),
    new levelThreeMonster("Striga", "striga"),
    new levelThreeMonster("Bruxa", "bruxa"),
    new levelThreeMonster("Glustyworp", "glustyworp"),
    new levelThreeMonster("Brewess", "brewess"),
    new levelThreeMonster("Yghern", "yghern"),
    new levelThreeMonster("Troll", "troll"),
];
const legendaryHuntLegendaryMonsters = [
    new legendaryMonster("Imperial Golem", "imperialGolem"),
    new legendaryMonster("Cyclops", "cyclops"),
    new legendaryMonster("Cave Troll", "cyclops"),
    new legendaryMonster("Toad", "toad"),
    new legendaryMonster("Frightener", "frightener"),
    new legendaryMonster("Unseen Elder", "unseenElder"),
    new legendaryMonster("Ice Giant", "iceGiant"),
    new legendaryMonster("Gaunter O'Dimm", "gaunterODimm"),
];
const wildHuntLegendaryMonsters = [
    new legendaryMonster("Eredin", "eredinMini"),
    new legendaryMonster("Nithral", "nithralMini"),
    new legendaryMonster("Imlerith", "imlerithMini"),
    new legendaryMonster("Caranthir", "caranthirMini"),
];
class MonstersDeck {
    levelOneMonstersDeck;
    levelTwoMonstersDeck;
    levelThreeMonstersDeck;
    legendaryMonstersDeck;
    constructor(legendaryHunt = false, wildHunt = false, monsterPack = false, mountedEredin = false) {
        const tempLevelOneMonstersDeck = [...baseLevelOneMonsters];
        const tempLevelTwoMonstersDeck = [...baseLevelTwoMonsters];
        const tempLevelThreeMonstersDeck = [...baseLevelThreeMonsters];
        const tempLegendaryMonstersDeck = [];
        if (legendaryHunt && !wildHunt) {
            tempLegendaryMonstersDeck.push(...legendaryHuntLegendaryMonsters);
        }
        if (monsterPack) {
            tempLevelThreeMonstersDeck.push(new levelThreeMonster("Koshchey", "koshchey"));
            if (legendaryHunt)
                tempLegendaryMonstersDeck.push(new legendaryMonster("Kayran", "kayran"));
        }
        if (mountedEredin)
            tempLevelThreeMonstersDeck.push(new levelThreeMonster("Mounted Eredin", "mountedEredin"));
        this.levelOneMonstersDeck = new dataClasses_1.ReadonlyDeck(tempLevelOneMonstersDeck);
        this.levelTwoMonstersDeck = new dataClasses_1.ReadonlyDeck(tempLevelTwoMonstersDeck);
        this.levelThreeMonstersDeck = new dataClasses_1.ReadonlyDeck(tempLevelThreeMonstersDeck);
        this.legendaryMonstersDeck = new dataClasses_1.ReadonlyDeck(tempLegendaryMonstersDeck);
        this.levelOneMonstersDeck.shuffle();
        this.levelTwoMonstersDeck.shuffle();
        this.levelThreeMonstersDeck.shuffle();
        this.legendaryMonstersDeck.shuffle();
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
    drawLegendaryMonster() {
        try {
            return this.legendaryMonstersDeck.draw();
        }
        catch (error) {
            this.legendaryMonstersDeck.repopulate();
        }
        return this.legendaryMonstersDeck.draw();
    }
}
exports.default = MonstersDeck;
