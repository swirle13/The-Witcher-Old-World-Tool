"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerrainTokenDeck = exports.WaterTokens = exports.ForestTokens = exports.MountainTokens = exports.WaterToken = exports.ForestToken = exports.MountainToken = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Row_1 = __importDefault(require("react-bootstrap/Row"));
const Col_1 = __importDefault(require("react-bootstrap/Col"));
const Container_1 = __importDefault(require("react-bootstrap/Container"));
const Image_1 = __importDefault(require("react-bootstrap/Image"));
const dataClasses_1 = require("./dataClasses");
class TerrainTokenClass {
    name = "DefaultTokenName";
    imgStr = "";
    img() {
        return ((0, jsx_runtime_1.jsx)(Container_1.default, { id: 'TokenContainer', className: 'px-4 py-2 m-2', children: (0, jsx_runtime_1.jsx)(Row_1.default, { className: "justify-content-center", children: (0, jsx_runtime_1.jsx)(Col_1.default, { xs: 'auto', children: (0, jsx_runtime_1.jsx)(Image_1.default, { id: `${this.name}IconImage`, src: require(`../img/tokens/reducedTerrainTokens/${this.imgStr}.png`), width: 150, alt: this.name, loading: 'lazy', roundedCircle: true }) }) }) }));
    }
}
class MountainToken extends TerrainTokenClass {
    name;
    number;
    type;
    imgStr;
    constructor(number = -1, name = "DefaultMountainToken", img = "MountainBack") {
        super();
        this.name = name;
        this.number = number;
        this.type = "Mountain";
        this.imgStr = img;
    }
}
exports.MountainToken = MountainToken;
class ForestToken extends TerrainTokenClass {
    name;
    number;
    type;
    imgStr;
    constructor(number = -1, name = "DefaultForestToken", img = "ForestBack") {
        super();
        this.name = name;
        this.number = number;
        this.type = "Forest";
        this.imgStr = img;
    }
}
exports.ForestToken = ForestToken;
class WaterToken extends TerrainTokenClass {
    name;
    number;
    type;
    imgStr;
    constructor(number = -1, name = "DefaultWaterToken", img = "WaterBack") {
        super();
        this.name = name;
        this.number = number;
        this.type = "Water";
        this.imgStr = img;
    }
}
exports.WaterToken = WaterToken;
const MountainTokens = [
    new MountainToken(2, "Hengfors", "Mountain2Hengfors"),
    new MountainToken(3, "Kaer Morhen", "Mountain3KaerMorhen"),
    new MountainToken(9, "Cintra", "Mountain9Cintra"),
    new MountainToken(11, "Beauclair", "Mountain11Beauclair"),
    new MountainToken(13, "Doldeth", "Mountain13Doldeth"),
    new MountainToken(18, "Ard Modron", "Mountain18ArdModron"),
];
exports.MountainTokens = MountainTokens;
const MountainTokensSkellige = [
    new MountainToken(2, "Hengfors", "Mountain2Hengfors"),
    new MountainToken(3, "Kaer Morhen", "Mountain3KaerMorhen"),
    new MountainToken(9, "Cintra", "Mountain9Cintra"),
    new MountainToken(11, "Beauclair", "Mountain11Beauclair"),
    new MountainToken(13, "Doldeth", "Mountain13Doldeth"),
    new MountainToken(18, "Ard Modron", "Mountain18ArdModron"),
    new MountainToken(19, "Ard Skellig", "Mountain19ArdSkellig")
];
const ForestTokens = [
    new ForestToken(6, "Novigrad", "Forest6Novigrad"),
    new ForestToken(7, "Vizima", "Forest7Vizima"),
    new ForestToken(8, "Vengerberg", "Forest8Vengerberg"),
    new ForestToken(10, "Haern Caduch", "Forest10HaernCaduch"),
    new ForestToken(16, "Dhuwod", "Forest16Dhuwod"),
    new ForestToken(17, "Stygga", "Forest17Stygga"),
];
exports.ForestTokens = ForestTokens;
const ForestTokensSkellige = [
    new ForestToken(6, "Novigrad", "Forest6Novigrad"),
    new ForestToken(7, "Vizima", "Forest7Vizima"),
    new ForestToken(8, "Vengerberg", "Forest8Vengerberg"),
    new ForestToken(10, "Haern Caduch", "Forest10HaernCaduch"),
    new ForestToken(16, "Dhuwod", "Forest16Dhuwod"),
    new ForestToken(17, "Stygga", "Forest17Stygga"),
    new ForestToken(21, "Eyna", "Forest21Eyna")
];
const WaterTokens = [
    new WaterToken(1, "Kaer Seren", "Water1KaerSeren"),
    new WaterToken(4, "Ban Ard", "Water4BanArd"),
    new WaterToken(5, "Cidaris", "Water5Cidaris"),
    new WaterToken(12, "Glenmore", "Water12Glenmore"),
    new WaterToken(14, "Loc Ichaer", "Water14LocIchaer"),
    new WaterToken(15, "Gorthur Guaed", "Water15GorthurGuaed"),
];
exports.WaterTokens = WaterTokens;
const WaterTokensSkellige = [
    new WaterToken(1, "Kaer Seren", "Water1KaerSeren"),
    new WaterToken(4, "Ban Ard", "Water4BanArd"),
    new WaterToken(5, "Cidaris", "Water5Cidaris"),
    new WaterToken(12, "Glenmore", "Water12Glenmore"),
    new WaterToken(14, "Loc Ichaer", "Water14LocIchaer"),
    new WaterToken(15, "Gorthur Guaed", "Water15GorthurGuaed"),
    new WaterToken(20, "Isle of Mists", "Water20IsleOfMists")
];
class TerrainTokenDeck {
    mountainDeck;
    forestDeck;
    waterDeck;
    allDeck;
    skellige;
    constructor(skellige = false) {
        this.skellige = skellige;
        if (skellige === true) {
            this.mountainDeck = new dataClasses_1.ReadonlyDeck(MountainTokensSkellige);
            this.forestDeck = new dataClasses_1.ReadonlyDeck(ForestTokensSkellige);
            this.waterDeck = new dataClasses_1.ReadonlyDeck(WaterTokensSkellige);
            this.allDeck = new dataClasses_1.ReadonlyDeck([...MountainTokensSkellige, ...ForestTokensSkellige, ...WaterTokensSkellige]);
        }
        else {
            this.mountainDeck = new dataClasses_1.ReadonlyDeck(MountainTokens);
            this.forestDeck = new dataClasses_1.ReadonlyDeck(ForestTokens);
            this.waterDeck = new dataClasses_1.ReadonlyDeck(WaterTokens);
            this.allDeck = new dataClasses_1.ReadonlyDeck([...MountainTokens, ...ForestTokens, ...WaterTokens]);
        }
        this.mountainDeck.shuffle();
        this.forestDeck.shuffle();
        this.waterDeck.shuffle();
    }
    drawMountainToken() {
        try {
            return this.mountainDeck.draw();
        }
        catch (error) {
            this.mountainDeck.repopulate();
        }
        return this.mountainDeck.draw();
    }
    drawForestToken() {
        try {
            return this.forestDeck.draw();
        }
        catch (error) {
            this.forestDeck.repopulate();
        }
        return this.forestDeck.draw();
    }
    drawWaterToken() {
        try {
            return this.waterDeck.draw();
        }
        catch (error) {
            this.waterDeck.repopulate();
        }
        return this.waterDeck.draw();
    }
    addTokenBackToDeck(token) {
        if (token.type === "Mountain" && token instanceof MountainToken) {
            this.mountainDeck.returnItem(token);
        }
        else if (token.type === "Forest" && token instanceof ForestToken) {
            this.forestDeck.returnItem(token);
        }
        else if (token.type === "Water" && token instanceof WaterToken) {
            this.waterDeck.returnItem(token);
        }
        else {
            throw new Error(`TerrainToken ${token}'s type ${token.type} is not a valid match.` +
                `Can only add "Mountain", "Forest", and "Water".`);
        }
    }
    refillDeck(type) {
        if (type === "Mountain") {
            this.mountainDeck.repopulate();
        }
        else if (type === "Forest") {
            this.forestDeck.repopulate();
        }
        else if (type === "Water") {
            this.waterDeck.repopulate();
        }
        else {
            throw new Error(`TerrainType ${type} is not a valid match. Can only add "Mountain", "Forest", and "Water".`);
        }
    }
    refillAllDecks() {
        this.refillDeck("Mountain");
        this.refillDeck("Forest");
        this.refillDeck("Water");
    }
}
exports.default = TerrainTokenDeck;
exports.TerrainTokenDeck = TerrainTokenDeck;
